export type Endpoint = {
  lokal: EndpointStatus;
  asing: EndpointStatus;
};

type EndpointStatus = {
  terdaftar: string;
  dicabut: string;
  dihentikanSementara: string;
};

export type Resp = {
  meta: Meta;
  jsonapi: { version: string };
  links: {
    first: string;
    last: string;
    next: string;
  };
  data: Data[];
};

type Meta = {
  page: {
    currentPage: number;
    from: number;
    lastPage: number;
    perPage: number;
    to: number;
    total: number;
  };
};

type Data = {
  type: string;
  id: string;
  attributes: {
    nomor_pb_umku: string;
    nama: string;
    website: string;
    sektor: string;
    nama_tampil_badan_hukum: string;
    nama_perusahaan: string;
    tanggal_daftar: string;
    tanggal_terbit: string;
    nomor_tanda_daftar: string;
    qr_code: string;
    status_id: string;
    sistem_elektronik_id: string;
    keterangan: string;
    lokalitas: string;
  };
  links: {
    string;
  };
};
