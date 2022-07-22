import { Resp } from "../types";
import { saveJSON } from "../utils";
import PQueue from "p-queue";

const queue = new PQueue({ concurrency: 4 });

export async function getLastPage(url: string) {
  console.log("Trying to get last page from", decodeURI(url));

  const updateUrl = new URL(url);
  updateUrl.searchParams.set("page[limit]", "10");

  const data: Resp = await fetch(updateUrl.toString()).then((response) => {
    if (response.ok) {
      return response.json();
    }

    console.log("Error:", response);
    throw new Error("Something went wrong");
  });

  return data.meta.page.lastPage;
}

export async function fetchAPI(url: string, nameFile: string) {
  console.log("==========================================\n");
  console.log(nameFile, "\n");

  const updateUrl = new URL(url);
  updateUrl.searchParams.set("page[limit]", "10");

  const lastPage = await getLastPage(url);
  console.log("\nLast page:", lastPage, "\n");

  const bucket: Resp["data"] = [];

  for (let i = 1; i <= lastPage; i++) {
    await queue.add(async () => {
      updateUrl.searchParams.set("page[page]", i.toString());
      console.info(
        i,
        "Trying to get data from",
        decodeURI(updateUrl.toString()),
      );

      const resp = await fetch(updateUrl.toString()).then((response) => {
        if (response.ok) {
          return response.json();
        }

        console.log("Error:", response);
        throw new Error("Something went wrong");
      });

      const clean = resp.data.map((item) => {
        const { type, id, attributes, links } = item;
        return { type, id, ...attributes, ...links };
      });

      saveJSON(`data/json-raw/${nameFile}/${i}.json`, clean);

      bucket.push(...clean);
    });
  }

  return bucket as Resp["data"];
}
