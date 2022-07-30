import path from "path";
import * as fs from "fs";
import converter from "json-2-csv";

describe("Master JSON", () => {
  let masterJSON: any;
  beforeAll(async () => {
    masterJSON = JSON.parse(fs.readFileSync("data/master.json", "utf8"));
  });

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

    expect(masterJSON).toHaveLength(countAllJSON);
  });

  it("should be have true property", () => {
    const mock = masterJSON[0];

    expect(mock).toHaveProperty("type");
    expect(mock).toHaveProperty("id");
    expect(mock).toHaveProperty("nomor_pb_umku");
    expect(mock).toHaveProperty("nama");
    expect(mock).toHaveProperty("website");
    expect(mock).toHaveProperty("sektor");
    expect(mock).toHaveProperty("nama_perusahaan");
    expect(mock).toHaveProperty("tanggal_daftar");
    expect(mock).toHaveProperty("nomor_tanda_daftar");
    expect(mock).toHaveProperty("qr_code");
    expect(mock).toHaveProperty("status_id");
    expect(mock).toHaveProperty("sistem_elektronik_id");
  });
});

describe("Master CSV", () => {
  let masterCSV: any;
  beforeAll(async () => {
    const fileCSV = fs.readFileSync("data/master.csv", "utf8");
    masterCSV = await converter.csv2jsonAsync(fileCSV);
  });

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

    expect(masterCSV).toHaveLength(countAllJSON);
  });

  it("should be have true property", () => {
    const mock = masterCSV[0];

    expect(mock).toHaveProperty("type");
    expect(mock).toHaveProperty("id");
    expect(mock).toHaveProperty("nomor_pb_umku");
    expect(mock).toHaveProperty("nama");
    expect(mock).toHaveProperty("website");
    expect(mock).toHaveProperty("sektor");
    expect(mock).toHaveProperty("nama_perusahaan");
    expect(mock).toHaveProperty("tanggal_daftar");
    expect(mock).toHaveProperty("nomor_tanda_daftar");
    expect(mock).toHaveProperty("qr_code");
    expect(mock).toHaveProperty("status_id");
    expect(mock).toHaveProperty("sistem_elektronik_id");
  });
});
