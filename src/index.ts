import {
  createMaster,
  endpointList,
  getLastPage,
  saveCSV,
  saveJSON,
  fetchApi,
} from "./utils";

import Queue from "js-queue";

async function launch(nameFile: string, url: string) {
  const queue = new Queue();

  // console.log("Trying to get data from", url);

  const lastPage = (await getLastPage(url)) - 1;

  let x = 0;

  for (let i = 0; i <= lastPage; i++) {
    queue.add(iterateData);
  }

  async function iterateData() {
    const data = await fetchApi(url, x);
    x = x + 1;
    console.log(data.raw.meta.page.currentPage);
    saveJSON(`data/json-raw/${nameFile}/${x}.json`, data.raw);
    saveJSON(`data/json/${nameFile}/${x}.json`, data.clean);
    saveCSV(`data/csv/${nameFile}/${x}.csv`, data.clean);

    this.next();
  }

  // const data = await getData(url);

  // saveJSON(`data/json-raw/${nameFile}.json`, data.raw);
  // saveJSON(`data/json/${nameFile}.json`, data.clean);
  // saveCSV(`data/csv/${nameFile}.csv`, data.clean);
}

async function main() {
  const api = endpointList();

  await launch("lokal-terdaftar", api.lokal.terdaftar);
  // await launch("lokal-dicabut", api.lokal.dicabut);
  // await launch("lokal-dihentikan-sementara", api.lokal.dihentikanSementara);

  // await launch("asing-terdaftar", api.asing.terdaftar);
  // await launch("asing-dicabut", api.asing.dicabut);
  // await launch("asing-dihentikan-sementara", api.asing.dihentikanSementara);

  // createMaster();
}

main();
