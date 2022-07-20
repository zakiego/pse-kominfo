import path from "path";
import * as fs from "fs";
import { expect, it, describe } from "bun:test";
import converter from "json-2-csv";

describe("Master JSON", () => {
  const masterJSON = JSON.parse(fs.readFileSync("data/master.json", "utf8"));

  it("should be an array", () => {
    expect(Array.isArray(masterJSON)).toBe(true);
  });

  it("should be same legth like every JSON file", () => {
    // read json one by one
    const dirname = "data/json/";

    const readAllJSONFile = fs
      .readdirSync(dirname)
      .filter((file) => path.extname(file) === ".json")
      .map((name) => path.join(dirname, name))
      .map((item) => {
        const fileData = fs.readFileSync(item, "utf-8");
        const json = JSON.parse(fileData.toString());
        return json;
      });

    const countAllJSON = readAllJSONFile.reduce(
      (acc, pilot) => acc + pilot.length,
      0,
    );

    expect(masterJSON.length).toBe(countAllJSON);
  });

  it("should be have true property", () => {
    const mock = masterJSON[0];

    expect(mock.hasOwnProperty("type")).toBe(true);
    expect(mock.hasOwnProperty("id")).toBe(true);
    expect(mock.hasOwnProperty("nomor_pb_umku")).toBe(true);
    expect(mock.hasOwnProperty("nama")).toBe(true);
    expect(mock.hasOwnProperty("website")).toBe(true);
    expect(mock.hasOwnProperty("sektor")).toBe(true);
    expect(mock.hasOwnProperty("nama_tampil_badan_hukum")).toBe(true);
    expect(mock.hasOwnProperty("nama_perusahaan")).toBe(true);
    expect(mock.hasOwnProperty("tanggal_daftar")).toBe(true);
    expect(mock.hasOwnProperty("tanggal_terbit")).toBe(true);
    expect(mock.hasOwnProperty("nomor_tanda_daftar")).toBe(true);
    expect(mock.hasOwnProperty("qr_code")).toBe(true);
    expect(mock.hasOwnProperty("status_id")).toBe(true);
    expect(mock.hasOwnProperty("sistem_elektronik_id")).toBe(true);
    expect(mock.hasOwnProperty("keterangan")).toBe(true);
    expect(mock.hasOwnProperty("lokalitas")).toBe(true);
    expect(mock.hasOwnProperty("self")).toBe(true);
  });
});

describe("Master CSV", async () => {
  const fileCSV = fs.readFileSync("data/master.csv", "utf8");
  const masterCSV = await converter.csv2jsonAsync(fileCSV);

  it("should be an array", () => {
    expect(Array.isArray(masterCSV)).toBe(true);
  });

  it("should be same legth like every JSON file", () => {
    // read json one by one
    const dirname = "data/json/";

    const readAllJSONFile = fs
      .readdirSync(dirname)
      .filter((file) => path.extname(file) === ".json")
      .map((name) => path.join(dirname, name))
      .map((item) => {
        const fileData = fs.readFileSync(item, "utf-8");
        const json = JSON.parse(fileData.toString());
        return json;
      });

    const countAllJSON = readAllJSONFile.reduce(
      (acc, pilot) => acc + pilot.length,
      0,
    );

    expect(masterCSV.length).toBe(countAllJSON);
  });

  it("should be have true property", () => {
    const mock = masterCSV[0];

    expect(mock.hasOwnProperty("type")).toBe(true);
    expect(mock.hasOwnProperty("id")).toBe(true);
    expect(mock.hasOwnProperty("nomor_pb_umku")).toBe(true);
    expect(mock.hasOwnProperty("nama")).toBe(true);
    expect(mock.hasOwnProperty("website")).toBe(true);
    expect(mock.hasOwnProperty("sektor")).toBe(true);
    expect(mock.hasOwnProperty("nama_tampil_badan_hukum")).toBe(true);
    expect(mock.hasOwnProperty("nama_perusahaan")).toBe(true);
    expect(mock.hasOwnProperty("tanggal_daftar")).toBe(true);
    expect(mock.hasOwnProperty("tanggal_terbit")).toBe(true);
    expect(mock.hasOwnProperty("nomor_tanda_daftar")).toBe(true);
    expect(mock.hasOwnProperty("qr_code")).toBe(true);
    expect(mock.hasOwnProperty("status_id")).toBe(true);
    expect(mock.hasOwnProperty("sistem_elektronik_id")).toBe(true);
    expect(mock.hasOwnProperty("keterangan")).toBe(true);
    expect(mock.hasOwnProperty("lokalitas")).toBe(true);
    expect(mock.hasOwnProperty("self")).toBe(true);
  });
});
