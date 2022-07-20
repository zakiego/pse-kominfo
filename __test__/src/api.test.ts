import { expect, it, describe } from "bun:test";
import { endpointList } from "../../src/utils";

function toContain(str: string, substr: string) {
  return str.includes(substr);
}

// test api link should be contain
describe("API Link", () => {
  const api = endpointList();

  it("should be conatain same local", () => {
    const asing = "filter[lokalitas]=ASING";
    const lokal = "filter[lokalitas]=LOKAL";

    expect(toContain(api.asing.terdaftar, asing)).toBe(true);
    expect(toContain(api.asing.dicabut, asing)).toBe(true);
    expect(toContain(api.asing.dihentikanSementara, asing)).toBe(true);

    expect(toContain(api.lokal.terdaftar, lokal)).toBe(true);
    expect(toContain(api.lokal.dicabut, lokal)).toBe(true);
    expect(toContain(api.lokal.dihentikanSementara, lokal)).toBe(true);
  });

  it("should be conatain same status", () => {
    const terdaftar = "filter[status_id]=TERDAFTAR";
    const dicabut = "filter[status_id]=DICABUT";
    const dihentikanSementara =
      "filter[status_id]=SUSPENDED_BY_TAKEL,SUSPENDED_BY_PAI";

    expect(toContain(api.asing.terdaftar, terdaftar)).toBe(true);
    expect(toContain(api.asing.dicabut, dicabut)).toBe(true);
    expect(toContain(api.asing.dihentikanSementara, dihentikanSementara)).toBe(
      true,
    );

    expect(toContain(api.lokal.terdaftar, terdaftar)).toBe(true);
    expect(toContain(api.lokal.dicabut, dicabut)).toBe(true);
    expect(toContain(api.lokal.dihentikanSementara, dihentikanSementara)).toBe(
      true,
    );
  });
});
