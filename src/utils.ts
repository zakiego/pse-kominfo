import * as fs from "fs";
import { Endpoint, Resp } from "./types";
import converter from "json-2-csv";
import path from "path";
import { flattenDeep, flatten } from "lodash";

export function endpointList() {
  const file = fs.readFileSync("api.json", "utf8");
  return JSON.parse(file) as Endpoint;
}

export async function fetchApi(url: string) {
  const updateUrl = new URL(url);
  updateUrl.searchParams.set("page[limit]", "100000");

  const data = await fetch(updateUrl.toString())
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      console.log("Error:", response.status);
      throw new Error("Something went wrong");
    })
    .then((resp) => resp.json());

  return data as Resp;
}

export async function getData(url: string) {
  const raw = await fetchApi(url);

  const clean = raw.data.map((item) => {
    const { type, id, attributes, links } = item;
    return { type, id, ...attributes, ...links };
  });

  return { raw, clean };
}

export async function saveJSON(path: string, data: any) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

export async function saveCSV(path: string, data: any) {
  converter.json2csv(data, (err, csv) => {
    if (err || csv === undefined) {
      throw err;
    }

    fs.writeFileSync(path, csv);
  });
}

export function createMaster() {
  const dirname = "data/json/";

  const jsonsInDir = fs
    .readdirSync(dirname)
    .filter((file) => path.extname(file) === ".json")
    .map((name) => path.join(dirname, name));

  const master = jsonsInDir.map((item) => {
    const fileData = fs.readFileSync(item, "utf-8");
    const json = JSON.parse(fileData.toString());

    console.log(`${item} => ${json.length}`);

    return json;
  });

  saveCSV("data/master.csv", flattenDeep(master));
  saveJSON("data/master.json", flatten(master));
}
