import path from "path";
import * as fs from "fs";
import { expect, it, describe } from "bun:test";

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
});
