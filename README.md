# Daftar PSE Kominfo

<div style="display: flex; align-items: center">

<img style="margin-right: 10px" src="https://github.com/zakiego/pse-kominfo/actions/workflows/update.yml/badge.svg" href="https://github.com/zakiego/pse-kominfo/actions/workflows/update.yml" alt="Update Data"/>

 <img src="https://github.com/zakiego/pse-kominfo/actions/workflows/test.yml/badge.svg" href="https://github.com/zakiego/pse-kominfo/actions/workflows/test.yml" alt="Test"/>

</div>

> **Note**
>
> Update: masalah https://github.com/zakiego/pse-kominfo/issues/4 sudah di-fix

<!-- AUTO-GENERATED-CONTENT:START (FILE:src=./last-updated.md) -->
<!-- The below content is automatically added from ./last-updated.md -->
Data terakhir diperbarui pada: **Kamis, 15 September 2022 11.08.36 Waktu Indonesia Barat**
<!-- AUTO-GENERATED-CONTENT:END -->

Daftar Penyelenggara Sistem Elektronik yang dikumpulkan dari API [pse.kominfo.go.id](https://pse.kominfo.go.id). Diperbarui setiap 1 jam sekali menggunakan [Github Action](/.github/workflows/update.yml)

## Bagaimana Cara Menjalankannya?

Pertama, clone terlebih dahulu projectnya.

```bash
git clone https://github.com/zakiego/pse-kominfo
cd pse-kominfo
```

Setelah itu, jalankan scriptnya.

Kamu bisa menggunakan npm, yarn, atau pnpm. Tapi saya sedang menebar benih pnpm dan sebaiknya kamu mengikuti. 😜

```bash
pnpm install
pnpm start
pnpm test
```

Catatan: Untuk menginstall pnpm bisa melihat di sini [pnpm.io/installation](https://pnpm.io/installation).

## List API

List API yang digunakan -- lihat [api.json](/api.json).

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./api.json) -->
<!-- The below code snippet is automatically added from ./api.json -->
```json
{
  "lastUpdatedDate": "https://pse.kominfo.go.id/static/json-static/generationInfo.json",
  "lokal": {
    "terdaftar": "https://pse.kominfo.go.id/static/json-static/LOKAL_TERDAFTAR/0.json",
    "dicabut": "https://pse.kominfo.go.id/static/json-static/LOKAL_DICABUT/0.json",
    "dihentikanSementara": "https://pse.kominfo.go.id/static/json-static/LOKAL_DIHENTIKAN_SEMENTARA/0.json"
  },
  "asing": {
    "terdaftar": "https://pse.kominfo.go.id/static/json-static/ASING_TERDAFTAR/0.json",
    "dicabut": "https://pse.kominfo.go.id/static/json-static/ASING_DICABUT/0.json",
    "dihentikanSementara": "https://pse.kominfo.go.id/static/json-static/ASING_DIHENTIKAN_SEMENTARA/0.json"
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Data

Data ada pada folder [data](/data/)

Format yang tersedia:

- CSV
- JSON

Versi [Google Sheets](https://docs.google.com/spreadsheets/d/1BvCZOFRFe2CBpxG_UF3Q6_ylW_qNU3nk6tE349xJNLo)

![image](https://user-images.githubusercontent.com/78015359/179427918-d80305f7-ad94-474b-9aa5-509fed740283.png)

## Test

Terdapat 2 tes yang ada di project ini

1. [\_\_test\_\_\/src/data/master.test.ts](https://github.com/zakiego/pse-kominfo/blob/main/__test__/src/data/master.test.ts) -- untuk memastikan bahwa format data tidak ada yang berubah
2. [\_\_test\_\_\/api.test.ts](https://github.com/zakiego/pse-kominfo/blob/main/__test__/api.test.ts) -- untuk memastikan bahwa API tidak berubah
