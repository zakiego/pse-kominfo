export type Endpoint = {
  lastUpdatedDate: string;
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
    nama_perusahaan: string;
    tanggal_daftar: string;
    nomor_tanda_daftar: string;
    qr_code: string;
    status_id: string;
    sistem_elektronik_id: string;
  };
};
