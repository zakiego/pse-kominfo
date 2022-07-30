import {
  createMaster,
  getLastPage,
  saveCSV,
  saveJSON,
  fetchApi,
  combineFile,
  endpointList,
} from "./utils";

async function launch(nameFile: string, url: string) {
  try {
    console.log(
      `\n\n===================== ${nameFile} =====================\n`,
    );

    const lastPage = (await getLastPage(url)) - 1;

    for (let i = 0; i <= lastPage; i++) {
      const data = await fetchApi(url, i);
      console.log(
        `Fetch data ${nameFile} - halaman ${data.raw.meta.page.currentPage}`,
      );
      saveJSON(`data/json-raw/${nameFile}/${i}.json`, data.raw);
      saveJSON(`data/json/${nameFile}/${i}.json`, data.clean);
      saveCSV(`data/csv/${nameFile}/${i}.csv`, data.clean);
    }
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  const api = endpointList();

  await launch("lokal-terdaftar", api.lokal.terdaftar);
  await launch("lokal-dicabut", api.lokal.dicabut);
  await launch("lokal-dihentikan-sementara", api.lokal.dihentikanSementara);
  await launch("asing-terdaftar", api.asing.terdaftar);
  await launch("asing-dicabut", api.asing.dicabut);
  await launch("asing-dihentikan-sementara", api.asing.dihentikanSementara);

  combineFile();
  createMaster();
}

main();
