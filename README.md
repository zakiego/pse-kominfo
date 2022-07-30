# Daftar PSE Kominfo

<div style="display: flex; align-items: center">

<img style="margin-right: 10px" src="https://github.com/zakiego/pse-kominfo/actions/workflows/update.yml/badge.svg" href="https://github.com/zakiego/pse-kominfo/actions/workflows/update.yml" alt="Update Data"/>

 <img src="https://github.com/zakiego/pse-kominfo/actions/workflows/test.yml/badge.svg" href="https://github.com/zakiego/pse-kominfo/actions/workflows/test.yml" alt="Test"/>

</div>

> **Note**
>
> Halo, karena ada pembatasan query API, untuk sementara update data tidak bisa dilakukan, lengkapnya ada di https://github.com/zakiego/pse-kominfo/issues/4

<!-- AUTO-GENERATED-CONTENT:START (FILE:src=./last-updated.md) -->
<!-- The below content is automatically added from ./last-updated.md -->
Data terakhir diperbarui pada: **Minggu, 31 Juli 2022 00.25.04 Waktu Indonesia Barat**
<!-- AUTO-GENERATED-CONTENT:END -->

Daftar Penyelenggara Sistem Elektronik yang dikumpulkan dari API [pse.kominfo.go.id](https://pse.kominfo.go.id). Diperbarui setiap 1 jam sekali menggunakan [Github Action](/.github/workflows/update.yml)

## Bagaimana Cara Menjalankannya?

Dijalankan di atas [Bun](https://bun.sh)

> **Warning**
>
> Bun test is still WIP

```bash
bun install
bun src/index.ts
bun wiptest
```

List API yang digunakan ada di [api.json](/api.json)

Data ada pada folder [data](/data/)

Format yang tersedia:

- CSV
- JSON

Versi [Google Sheets](https://docs.google.com/spreadsheets/d/1BvCZOFRFe2CBpxG_UF3Q6_ylW_qNU3nk6tE349xJNLo)

![image](https://user-images.githubusercontent.com/78015359/179427918-d80305f7-ad94-474b-9aa5-509fed740283.png)
