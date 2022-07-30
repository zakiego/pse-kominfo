import {
  createMaster,
  getLastPage,
  saveCSV,
  saveJSON,
  fetchApi,
  endpointList,
  consoleTitle,
  compareLastUpdatedData,
} from "./utils";

async function launch(nameFile: string, url: string) {
  consoleTitle(nameFile);

  let lastPage: number;

  try {
    lastPage = (await getLastPage(url)) - 1;
  } catch (err) {
    // ketika tidak ada last page, berarti return bukan json, skip
    console.log(err);
    return;
  }

  const bucket = [];

  for (let i = 0; i <= lastPage; i++) {
    const data = await fetchApi(url, i);
    console.log(
      `Fetch data ${nameFile} - halaman ${data.raw.meta.page.currentPage}`,
    );
    bucket.push(...data.clean);

    saveJSON(`data/json-raw/${nameFile}/${i}.json`, data.raw);
  }

  saveJSON(`data/json/${nameFile}.json`, bucket);
  saveCSV(`data/csv/${nameFile}.csv`, bucket);
}

async function main() {
  const api = endpointList();

  if (await compareLastUpdatedData()) {
    return;
  }

  await launch("lokal-terdaftar", api.lokal.terdaftar);
  await launch("lokal-dicabut", api.lokal.dicabut);
  await launch("lokal-dihentikan-sementara", api.lokal.dihentikanSementara);

  await launch("asing-terdaftar", api.asing.terdaftar);
  await launch("asing-dicabut", api.asing.dicabut);
  await launch("asing-dihentikan-sementara", api.asing.dihentikanSementara);

  createMaster();
}

main();
