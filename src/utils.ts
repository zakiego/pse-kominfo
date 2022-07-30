import * as fs from "fs";
import { Endpoint, Resp } from "./types";
import converter from "json-2-csv";
import path from "path";
import { flattenDeep, flatten } from "lodash";
import fetch from "cross-fetch";

export function endpointList() {
  const file = fs.readFileSync("api.json", "utf8");
  return JSON.parse(file) as Endpoint;
}

export async function getLastPage(url: string) {
  const data: Resp = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log("Error:", response.status);
    throw new Error("Something went wrong");
  });

  return data.meta.page.lastPage;
}

export async function fetchApi(url: string, index: number) {
  const updateUrl = url.replace("0.json", `${index}.json`);

  const raw: Resp = await fetch(updateUrl.toString()).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log("Error:", response.status);
    throw new Error("Something went wrong");
  });

  const clean = raw.data.map((item) => {
    const { type, id, attributes } = item;
    return { type, id, ...attributes };
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

const listFolder = [
  "lokal-terdaftar",
  "lokal-dicabut",
  "lokal-dihentikan-sementara",
  "asing-terdaftar",
  "asing-dicabut",
  "asing-dihentikan-sementara",
];

export function createMaster() {
  consoleTitle("Create Master");
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

export function consoleTitle(title: string) {
  console.log(`\n===================== ${title} =====================`);
}

export async function getLastUpdatedDate(url: string) {
  const data: Resp = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log("Error:", response.status);
    throw new Error("Something went wrong");
  });

  saveJSON("data/last-updated.json", data);
}
