import { endpointList } from "../src/utils";

describe("API Link", () => {
  const api = endpointList();

  it("should be conatain same local", () => {
    const asing = "ASING";
    const lokal = "LOKAL";

    expect(api.asing.terdaftar).toContain(asing);
    expect(api.asing.dicabut).toContain(asing);
    expect(api.asing.dihentikanSementara).toContain(asing);

    expect(api.lokal.terdaftar).toContain(lokal);
    expect(api.lokal.dicabut).toContain(lokal);
    expect(api.lokal.dihentikanSementara).toContain(lokal);
  });

  it("should be conatain same status", () => {
    const terdaftar = "TERDAFTAR";
    const dicabut = "DICABUT";
    const dihentikanSementara = "DIHENTIKAN_SEMENTARA";

    expect(api.asing.terdaftar).toContain(terdaftar);
    expect(api.asing.dicabut).toContain(dicabut);
    expect(api.asing.dihentikanSementara).toContain(dihentikanSementara);

    expect(api.lokal.terdaftar).toContain(terdaftar);
    expect(api.lokal.dicabut).toContain(dicabut);
    expect(api.lokal.dihentikanSementara).toContain(dihentikanSementara);
  });
});
