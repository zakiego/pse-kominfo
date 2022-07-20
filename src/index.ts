import {
  createMaster,
  endpointList,
  getData,
  saveCSV,
  saveJSON,
} from "./utils";

async function launch(nameFile: string, url: string) {
  console.log("Trying to get data from", url);
  const data = await getData(url);

  saveJSON(`data/json-raw/${nameFile}.json`, data.raw);
  saveJSON(`data/json/${nameFile}.json`, data.clean);
  saveCSV(`data/csv/${nameFile}.csv`, data.clean);
}

async function main() {
  const api = endpointList();

  await launch("lokal-terdaftar", api.lokal.terdaftar);
  await launch("lokal-dicabut", api.lokal.dicabut);
  await launch("lokal-dihentikan-sementara", api.lokal.dihentikanSementara);

  await launch("asing-terdaftar", api.asing.terdaftar);
  await launch("asing-dicabut", api.asing.dicabut);
  await launch("asing-dihentikan-sementara", api.asing.dihentikanSementara);

  createMaster();
}

main();
