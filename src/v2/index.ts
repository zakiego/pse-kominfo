import { createMaster, endpointList, saveCSV, saveJSON } from "../utils";
import { fetchAPI } from "./fetch";

async function launch(nameFile: string, url: string) {
  const data = await fetchAPI(url, nameFile);

  saveJSON(`data/json/${nameFile}.json`, data);
  saveCSV(`data/csv/${nameFile}.csv`, data);
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
