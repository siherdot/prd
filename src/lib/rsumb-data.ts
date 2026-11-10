export type PoliItem = {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
  unggulan?: string[];
  warna: string;
};

export type DokterItem = {
  id: string;
  nama: string;
  spesialis: string;
  idPoli: string;
  namaPoli: string;
  gambar: string;
  jadwal: { hari: string; jam: string }[];
  pengalaman: string;
};

export type FasilitasItem = {
  id: string;
  nama: string;
  kategori: "Darurat & Intensif" | "Penunjang Medis" | "Rawat Inap" | "Umum";
  deskripsi: string;
  gambar: string;
  status: string;
};

export type BeritaItem = {
  id: string;
  judul: string;
  tanggal: string;
  kategori: string;
  ringkasan: string;
  gambar: string;
};

export const RSUMB_INFO = {
  nama: "RSU Mahkota Bidadari",
  grup: "PT. Bidadari Medikal Nusantara",
  slogan: "Kesehatan Anda Merupakan Prioritas Utama Kami",
  akreditasi: "Akreditasi Paripurna LARS DHP — Kemenkes RI",
  alamat:
    "Jl. Sisingamangaraja No. 146, Desa Paluh Manis, Kec. Gebang, Kab. Langkat, Sumatera Utara 20873",
  alamatBinjai:
    "Jl. Perintis Kemerdekaan Pahlawan No. 174 A, Kebun Lada, Kec. Binjai Utara, Kota Binjai",
  telepon: "0812-6937-8222",
  igd: "0853-5926-7962",
  whatsapp: "6281269378222",
  email: "info@rsumahkotabidadari.com",
  statistik: {
    dokterSpesialis: 34,
    dokterUmum: 16,
    tempatTidur: 201,
    tenagaMedis: 300,
    poliklinik: 16,
    penjamin: 32,
  },
} as const;

export const MARQUEE_SHOWCASE = [
  {
    id: "igd",
    title: "Instalasi Gawat Darurat (IGD) 24 Jam",
    subtitle: "Respon Cepat & Tim Dokter Tersertifikasi",
    image: "/assets/facility-241203-bce850dfcd.jpg",
    badge: "24 Jam Siaga",
    prompt: "Saya butuh informasi layanan IGD 24 jam & ambulans darurat",
  },
  {
    id: "cathlab",
    title: "Cathlab — Kateterisasi Jantung & Pembuluh Darah",
    subtitle: "Tindakan Intervensi Kardiovaskular Modern",
    image: "/assets/facility-250106-e1c80a691a.jpg",
    badge: "Layanan Unggulan",
    prompt: "Jadwal konsultasi dokter Spesialis Jantung & tindakan Cathlab",
  },
  {
    id: "obgyn",
    title: "Poliklinik Kebidanan, Kandungan & USG 4D",
    subtitle: "Pemeriksaan Kehamilan, Persalinan & Klinik Laktasi",
    image: "/assets/poli-250711-6287bb6ca0.JPG",
    badge: "Ibu & Anak",
    prompt: "Daftar pemeriksaan kehamilan USG 4D di Poliklinik Obgyn",
  },
  {
    id: "dialisis",
    title: "Unit Hemodialisis (Cuci Darah) Terpadu",
    subtitle: "Didukung Tim Dokter Spesialis Penyakit Dalam & Perawat Bersertifikat",
    image: "/assets/facility-250106-dba699dedd.jpg",
    badge: "BPJS & Umum",
    prompt: "Informasi jadwal layanan cuci darah (Hemodialisis) dengan BPJS",
  },
  {
    id: "mata",
    title: "Operasi Katarak Phacoemulsifikasi",
    subtitle: "Sayatan Minimal ±2mm, Cepat Pulih & Tanpa Jahitan",
    image: "/assets/poli-250710-0e00a4e8f1.JPG",
    badge: "Bedah Mikro",
    prompt: "Konsultasi pemeriksaan mata & operasi katarak Phacoemulsifikasi",
  },
  {
    id: "icu",
    title: "Perawatan Intensif ICU & NICU Sentral",
    subtitle: "Monitor Sentral 24 Jam untuk Pasien Kritis & Bayi Baru Lahir",
    image: "/assets/facility-250106-27e8cf02fd.jpg",
    badge: "Intensif",
    prompt: "Cek ketersediaan ruang perawatan intensif ICU / NICU & Rawat Inap",
  },
  {
    id: "radiologi",
    title: "Radiologi Digital: CT-Scan, Rontgen & USG",
    subtitle: "Pencitraan Medis Presisi Tinggi untuk Diagnosis Akurat",
    image: "/assets/facility-250106-ef5ed6d333.jpg",
    badge: "Diagnostik",
    prompt: "Jadwal pemeriksaan Radiologi CT-Scan dan USG Abdomen",
  },
  {
    id: "fisioterapi",
    title: "Rehabilitasi Medik & Fisioterapi",
    subtitle: "Pemulihan Pasca Stroke, Operasi, Cedera Olahraga & Saraf",
    image: "/assets/poli-250711-ef029a1f68.JPG",
    badge: "Pemulihan",
    prompt: "Jadwal terapi Rehabilitasi Medik & Fisioterapi bersama dr. Benni Azhari, Sp.KFR",
  },
  {
    id: "rawat-inap",
    title: "Kamar Rawat Inap VIP, Kelas I, II & III",
    subtitle: "201 Tempat Tidur Nyaman dengan Standar Keselamatan Pasien Paripurna",
    image: "/assets/Rawat Inap1.jpg",
    badge: "201 Tempat Tidur",
    prompt: "Cek ketersediaan kamar Rawat Inap VIP & Kelas BPJS hari ini",
  },
  {
    id: "lab",
    title: "Laboratorium Patologi Klinik & Bank Darah",
    subtitle: "Hematologi Lengkap, Kimia Klinik, Imunologi & Transfusi Aman",
    image: "/assets/facility-250106-c74c5f834e.jpg",
    badge: "24 Jam",
    prompt: "Informasi paket Medical Check Up (MCU) & pemeriksaan laboratorium",
  },
];

export const POLIKLINIK_LIST: PoliItem[] = [
  {
    id: "P03",
    nama: "Poliklinik Penyakit Dalam",
    kategori: "Medik Spesialis",
    deskripsi:
      "Penanganan diabetes melitus, ginjal, hipertensi, lambung, hati (lever), imunitas, dan metabolisme dewasa secara komprehensif.",
    gambar: "/assets/poli-250710-2610b3788d.JPG",
    unggulan: ["Konsultasi Metabolik", "Gastroenterologi", "Skrining Komprehensif"],
    warna: "#7438d0",
  },
  {
    id: "P07",
    nama: "Poliklinik Jantung & Pembuluh Darah",
    kategori: "Kardiovaskular",
    deskripsi:
      "Layanan kardiologi terpadu dilengkapi Echocardiography, EKG, Treadmill Test, serta dukungan tindakan Cathlab.",
    gambar: "/assets/poli-250711-a889d4a7b4.JPG",
    unggulan: ["Echocardiography", "Treadmill & EKG", "Kateterisasi Jantung"],
    warna: "#ba343e",
  },
  {
    id: "P06",
    nama: "Poliklinik Kebidanan & Kandungan (OBGYN)",
    kategori: "Ibu & Anak",
    deskripsi:
      "Pemeriksaan kehamilan rutin, USG 4D untuk memantau tumbuh kembang janin, kelas prenatal, persalinan, dan klinik laktasi.",
    gambar: "/assets/poli-250711-6287bb6ca0.JPG",
    unggulan: ["USG 4D Kehamilan", "Klinik Laktasi", "Persalinan Normal & Caesar"],
    warna: "#d946ef",
  },
  {
    id: "P05",
    nama: "Poliklinik Spesialis Anak (Pediatri)",
    kategori: "Ibu & Anak",
    deskripsi:
      "Pemantauan tumbuh kembang anak 0–18 tahun, imunisasi, perinatologi, gangguan pencernaan, alergi, dan infeksi anak.",
    gambar: "/assets/poli-250710-9ccc72867a.JPG",
    unggulan: ["Tumbuh Kembang", "Perinatologi & NICU", "Konsultasi Gizi Anak"],
    warna: "#16734f",
  },
  {
    id: "P01",
    nama: "Poliklinik Bedah Umum",
    kategori: "Bedah",
    deskripsi:
      "Tindakan operatif maupun non-operatif untuk hernia, apendisitis (usus buntu), hemoroid, tumor jaringan lunak, dan perawatan luka.",
    gambar: "/assets/poli-250711-a90028bb63.JPG",
    unggulan: ["Bedah Digestif Dasar", "Operasi Hernia & Usus Buntu", "Perawatan Luka Modern"],
    warna: "#2563eb",
  },
  {
    id: "P02",
    nama: "Poliklinik Spesialis Mata",
    kategori: "Bedah & Diagnostik",
    deskripsi:
      "Pemeriksaan visus, tonometri, slit lamp, perimetri, hingga operasi katarak modern metode Phacoemulsifikasi sayatan ±2mm.",
    gambar: "/assets/poli-250710-0e00a4e8f1.JPG",
    unggulan: ["Phacoemulsifikasi Katarak", "Tonometri & Slit Lamp", "Glaukoma & Refraksi"],
    warna: "#0891b2",
  },
  {
    id: "P04",
    nama: "Poliklinik THT-KL",
    kategori: "Spesialis",
    deskripsi:
      "Penanganan gangguan telinga, hidung, tenggorokan, kepala, dan leher dengan peralatan diagnostik modern.",
    gambar: "/assets/poli-250710-d2d2a2d3f1.JPG",
    unggulan: ["Endoscopy THT", "Tonsilektomi (Amandel)", "Turbinektomi Sinusitis"],
    warna: "#946200",
  },
  {
    id: "P09",
    nama: "Poliklinik Bedah Saraf",
    kategori: "Bedah",
    deskripsi:
      "Diagnosis dan pembedahan gangguan sistem saraf pusat maupun saraf tepi, trauma kepala, tulang belakang, dan tumor otak.",
    gambar: "/assets/poli-250711-47985cdc52.JPG",
    unggulan: ["Trauma Kepala & Saraf", "Bedah Mikro Saraf", "Manajemen Nyeri Tulang Belakang"],
    warna: "#4c1d95",
  },
  {
    id: "P10",
    nama: "Poliklinik Paru & Pernapasan",
    kategori: "Medik Spesialis",
    deskripsi:
      "Penanganan asma, PPOK, tuberkulosis (TBC), infeksi saluran napas, spirometri fungsi paru, dan terapi inhalasi.",
    gambar: "/assets/poli-250711-125f825c76.JPG",
    unggulan: ["Spirometri Faal Paru", "Terapi Inhalasi", "Penanganan Asma & PPOK"],
    warna: "#0284c7",
  },
  {
    id: "P13",
    nama: "Poliklinik Saraf (Neurologi)",
    kategori: "Medik Spesialis",
    deskripsi:
      "Penanganan stroke, vertigo, nyeri kepala kronis, epilepsi/kejang, Parkinson, demensia, dan gangguan saraf tepi.",
    gambar: "/assets/poli-250711-99456a3764.JPG",
    unggulan: ["Terapi Pasca Stroke", "Manajemen Vertigo & Nyeri", "Neurologi Geriatri"],
    warna: "#6026b5",
  },
  {
    id: "P12",
    nama: "Poliklinik Kulit & Kelamin (Sp.DV)",
    kategori: "Spesialis",
    deskripsi:
      "Konsultasi dan tindakan medis untuk kesehatan kulit, alergi, infeksi jamur/bakteri, rambut, kuku, serta kesehatan venereologi.",
    gambar: "/assets/poli-250711-ec57ad780c.JPG",
    unggulan: ["Dermatologi Klinis", "Alergi & Imunologi Kulit", "Perawatan Kulit Medis"],
    warna: "#db2777",
  },
  {
    id: "P16",
    nama: "Rehabilitasi Medik & Fisioterapi",
    kategori: "Pemulihan",
    deskripsi:
      "Program pemulihan gerak dan fungsi tubuh pasca stroke, pasca operasi, cedera olahraga, skoliosis, osteoarthritis, dan Bell's Palsy.",
    gambar: "/assets/poli-250711-ef029a1f68.JPG",
    unggulan: ["Fisioterapi Pasca Stroke", "Elektroterapi & Latihan", "Rehabilitasi Cedera"],
    warna: "#16a34a",
  },
  {
    id: "P15",
    nama: "Poliklinik Radiologi Diagnostik",
    kategori: "Penunjang Medis",
    deskripsi:
      "Interpretasi pencitraan medis CT-Scan dengan/tanpa kontras, Digital Radiography (Rontgen), dan USG Abdomen oleh dokter Sp.Rad.",
    gambar: "/assets/poli-250711-a154567697.JPG",
    unggulan: ["CT-Scan Kontras", "USG Upper/Lower Abdomen", "Digital X-Ray"],
    warna: "#3b82f6",
  },
  {
    id: "P17",
    nama: "Poliklinik Gigi & Mulut",
    kategori: "Spesialis",
    deskripsi:
      "Perawatan kesehatan gigi, gusi, tambal estetik, scaling karang gigi, dan pencabutan dengan standar sterilisasi tinggi.",
    gambar: "/assets/poli-250714-adae29a660.JPG",
    unggulan: ["Dental Unit Modern", "Scaling & Konservasi", "Sterilisasi Aseptik"],
    warna: "#0d9488",
  },
  {
    id: "P18",
    nama: "Patologi Klinik (Laboratorium)",
    kategori: "Penunjang Medis",
    deskripsi:
      "Pemeriksaan hematologi lengkap, fungsi hati & ginjal, profil lipid, HbA1c, elektrolit, analisis gas darah, dan urinalisis.",
    gambar: "/assets/poli-250714-c7111679d7.JPG",
    unggulan: ["Hematologi & Kimia Klinik", "HbA1c & Profil Jantung", "Layanan Lab 24 Jam"],
    warna: "#7c3aed",
  },
  {
    id: "P19",
    nama: "Unit Hemodialisis (Cuci Darah)",
    kategori: "Layanan Khusus",
    deskripsi:
      "Pelayanan cuci darah rutin maupun Cito bagi pasien gagal ginjal kronik, didampingi konsultan ginjal dan perawat mahir dialisis.",
    gambar: "/assets/poli-250714-91131e97b7.JPG",
    unggulan: ["Mesin Dialisis Modern", "Menerima BPJS & Asuransi", "Supervisi Sp.PD"],
    warna: "#e11d48",
  },
];

export const DOKTER_LIST: DokterItem[] = [
  {
    id: "DR18",
    nama: "dr. Hasinah, M.Ked(Card), Sp.JP",
    spesialis: "Spesialis Jantung & Pembuluh Darah",
    idPoli: "P07",
    namaPoli: "Poliklinik Jantung",
    gambar: "/assets/doctor-240920-ca006a9a24.jpg",
    jadwal: [
      { hari: "Selasa & Kamis", jam: "08.30 – 13.30 WIB" },
    ],
    pengalaman: "Kardiologi Klinis & Sindrom Koroner Akut",
  },
  {
    id: "DR19",
    nama: "dr. Petrus Suranta Pinem, M.Ked(Cardio), Sp.JP(K)",
    spesialis: "Konsultan Jantung & Pembuluh Darah",
    idPoli: "P07",
    namaPoli: "Poliklinik Jantung",
    gambar: "/assets/doctor-250410-f38feae19f.JPG",
    jadwal: [
      { hari: "Selasa", jam: "14.30 – 16.00 WIB" },
      { hari: "Sabtu", jam: "09.00 – 11.00 WIB" },
    ],
    pengalaman: "Kardiologi Intervensi & Cathlab",
  },
  {
    id: "DR20",
    nama: "dr. Sheila Dhiene Putri, Sp.JP",
    spesialis: "Spesialis Jantung & Pembuluh Darah",
    idPoli: "P07",
    namaPoli: "Poliklinik Jantung",
    gambar: "/assets/doctor-240920-433f3d3aeb.jpg",
    jadwal: [
      { hari: "Senin & Rabu", jam: "10.00 – 13.30 WIB" },
      { hari: "Jumat", jam: "09.00 – 12.00 WIB" },
    ],
    pengalaman: "Ekokardiografi & Gagal Jantung",
  },
  {
    id: "DR06",
    nama: "dr. Heri Hendri, Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    idPoli: "P03",
    namaPoli: "Poliklinik Penyakit Dalam",
    gambar: "/assets/doctor-240920-d9f4431952.jpg",
    jadwal: [
      { hari: "Senin & Selasa", jam: "13.00 – 17.00 WIB" },
      { hari: "Jumat", jam: "13.30 – 17.00 WIB" },
    ],
    pengalaman: "Penyakit Dalam & Metabolik",
  },
  {
    id: "DR07",
    nama: "dr. Yahsarul Ikhsan Nst, Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    idPoli: "P03",
    namaPoli: "Poliklinik Penyakit Dalam",
    gambar: "/assets/doctor-250708-497accfa3b.JPG",
    jadwal: [
      { hari: "Rabu & Sabtu", jam: "09.00 – 12.00 WIB" },
      { hari: "Jumat", jam: "08.30 – 11.30 WIB" },
    ],
    pengalaman: "Penyakit Dalam, Ginjal & Hipertensi",
  },
  {
    id: "DR09",
    nama: "dr. Erni Erdoris Ginting, M.Ked(PD), Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    idPoli: "P03",
    namaPoli: "Poliklinik Penyakit Dalam",
    gambar: "/assets/doctor-240920-ee64cb0038.jpg",
    jadwal: [
      { hari: "Senin", jam: "08.30 – 13.00 WIB" },
      { hari: "Rabu", jam: "08.30 – 12.00 WIB" },
      { hari: "Kamis", jam: "09.00 – 12.00 WIB" },
    ],
    pengalaman: "Diabetes Melitus & Gastroenterologi",
  },
  {
    id: "DR08",
    nama: "dr. Farik Zarmal, Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    idPoli: "P03",
    namaPoli: "Poliklinik Penyakit Dalam",
    gambar: "/assets/doctor-240920-e9f45f8c4f.jpg",
    jadwal: [
      { hari: "Selasa", jam: "08.00 – 13.00 WIB" },
      { hari: "Rabu", jam: "13.30 – 16.00 WIB" },
      { hari: "Kamis & Jumat", jam: "08.30 – 12.30 WIB" },
    ],
    pengalaman: "Penyakit Dalam & Infeksi Tropis",
  },
  {
    id: "DR16",
    nama: "dr. Trishna, Sp.OG",
    spesialis: "Spesialis Kebidanan & Kandungan",
    idPoli: "P06",
    namaPoli: "Poliklinik Obgyn",
    gambar: "/assets/doctor-240920-b123e935d3.jpg",
    jadwal: [
      { hari: "Senin & Kamis", jam: "11.30 – 13.30 WIB" },
      { hari: "Sabtu", jam: "10.00 – 12.00 WIB" },
    ],
    pengalaman: "Kehamilan, USG 4D & Persalinan",
  },
  {
    id: "DR17",
    nama: "dr. Edwar Ayub, Sp.OG(K)",
    spesialis: "Konsultan Kebidanan & Kandungan",
    idPoli: "P06",
    namaPoli: "Poliklinik Obgyn",
    gambar: "/assets/doctor-240920-dc412894b0.jpg",
    jadwal: [
      { hari: "Senin & Kamis", jam: "14.00 – 16.00 WIB" },
    ],
    pengalaman: "Obstetri Ginekologi Konsultan",
  },
  {
    id: "DR34",
    nama: "dr. Juni Hardi Tarigan, Sp.OG",
    spesialis: "Spesialis Kebidanan & Kandungan",
    idPoli: "P06",
    namaPoli: "Poliklinik Obgyn",
    gambar: "/assets/doctor-241108-60199b3380.jpg",
    jadwal: [
      { hari: "Selasa & Rabu", jam: "08.00 – 12.00 WIB" },
      { hari: "Jumat", jam: "08.00 – 10.00 WIB" },
    ],
    pengalaman: "Kesehatan Ibu Hamil & Reproduksi",
  },
  {
    id: "DR13",
    nama: "dr. Vivianna, M.Ked(Ped), Sp.A",
    spesialis: "Spesialis Kesehatan Anak",
    idPoli: "P05",
    namaPoli: "Poliklinik Anak",
    gambar: "/assets/doctor-240920-be9bb48ebe.jpg",
    jadwal: [
      { hari: "Selasa & Jumat", jam: "08.00 – 10.00 WIB" },
    ],
    pengalaman: "Pediatri & Tumbuh Kembang Anak",
  },
  {
    id: "DR14",
    nama: "dr. Mahadian Ismail Nasution, Sp.A",
    spesialis: "Spesialis Kesehatan Anak",
    idPoli: "P05",
    namaPoli: "Poliklinik Anak",
    gambar: "/assets/doctor-241202-fc932759b8.JPG",
    jadwal: [
      { hari: "Senin & Selasa", jam: "08.00 – 10.00 WIB" },
      { hari: "Jumat", jam: "12.00 – 14.00 WIB" },
      { hari: "Sabtu", jam: "10.00 – 11.00 WIB" },
    ],
    pengalaman: "Perinatologi, Imunisasi & Nutrisi Anak",
  },
  {
    id: "DR15",
    nama: "dr. Andry Miraza, M.Kes., M.Ked(Ped), Sp.A",
    spesialis: "Spesialis Kesehatan Anak",
    idPoli: "P05",
    namaPoli: "Poliklinik Anak",
    gambar: "/assets/doctor-250808-3662d3f101.JPG",
    jadwal: [
      { hari: "Rabu, Kamis & Sabtu", jam: "08.00 – 10.00 WIB" },
    ],
    pengalaman: "Kesehatan Anak & Infeksi Pediatrik",
  },
  {
    id: "DR01",
    nama: "dr. Azwarto Lubis, Sp.B",
    spesialis: "Spesialis Bedah Umum",
    idPoli: "P01",
    namaPoli: "Poliklinik Bedah Umum",
    gambar: "/assets/doctor-240802-b5fb4aaea9.jpg",
    jadwal: [
      { hari: "Senin & Sabtu", jam: "09.00 – 10.30 WIB" },
    ],
    pengalaman: "Bedah Umum & Trauma",
  },
  {
    id: "DR02",
    nama: "dr. Muhammad Aulia Erizal, Sp.B",
    spesialis: "Spesialis Bedah Umum",
    idPoli: "P01",
    namaPoli: "Poliklinik Bedah Umum",
    gambar: "/assets/doctor-240919-20c30c2833.jpg",
    jadwal: [
      { hari: "Selasa", jam: "10.00 – 11.30 WIB" },
      { hari: "Rabu", jam: "13.00 – 14.30 WIB" },
    ],
    pengalaman: "Bedah Umum & Laparoskopi Dasar",
  },
  {
    id: "DR03",
    nama: "dr. Jos Arno M. Silitonga, Sp.B",
    spesialis: "Spesialis Bedah Umum",
    idPoli: "P01",
    namaPoli: "Poliklinik Bedah Umum",
    gambar: "/assets/doctor-240920-70ed672e1e.jpg",
    jadwal: [
      { hari: "Kamis & Jumat", jam: "13.30 – 15.00 WIB" },
    ],
    pengalaman: "Bedah Umum & Operasi Jaringan Lunak",
  },
  {
    id: "DR05",
    nama: "dr. Disfahan Sinulingga, Sp.BS",
    spesialis: "Spesialis Bedah Saraf",
    idPoli: "P09",
    namaPoli: "Poliklinik Bedah Saraf",
    gambar: "/assets/doctor-240920-54bf4a52e8.jpg",
    jadwal: [
      { hari: "Selasa", jam: "08.00 – 10.00 WIB" },
    ],
    pengalaman: "Bedah Saraf Pusat & Tepi",
  },
  {
    id: "DR23",
    nama: "dr. Syarifah Yusriani, M.Ked(Oph), Sp.M",
    spesialis: "Spesialis Mata (Ophthalmologist)",
    idPoli: "P02",
    namaPoli: "Poliklinik Mata",
    gambar: "/assets/doctor-240920-1795cf2b1a.jpg",
    jadwal: [
      { hari: "Selasa, Rabu & Kamis", jam: "13.45 – 17.00 WIB" },
    ],
    pengalaman: "Bedah Katarak Phacoemulsifikasi",
  },
  {
    id: "DR24",
    nama: "dr. T. Siti Harliza Zubaidah, Sp.M",
    spesialis: "Spesialis Mata (Ophthalmologist)",
    idPoli: "P02",
    namaPoli: "Poliklinik Mata",
    gambar: "/assets/doctor-240920-6b555d2788.jpg",
    jadwal: [
      { hari: "Senin", jam: "13.00 – 16.00 WIB" },
      { hari: "Selasa, Jumat & Sabtu", jam: "09.00 – 12.00 WIB" },
    ],
    pengalaman: "Kesehatan Mata & Refraksi",
  },
  {
    id: "DR10",
    nama: "dr. Rika Febrianti, Sp.THT-KL",
    spesialis: "Spesialis THT-KL",
    idPoli: "P04",
    namaPoli: "Poliklinik THT-KL",
    gambar: "/assets/doctor-240920-0879168382.jpg",
    jadwal: [
      { hari: "Senin", jam: "13.30 – 16.00 WIB" },
      { hari: "Jumat", jam: "10.00 – 12.00 WIB" },
    ],
    pengalaman: "Endoskopi THT & Bedah Kepala Leher",
  },
  {
    id: "DR11",
    nama: "dr. Agussalim, M.Ked(ORL-HNS), Sp.THT-KL",
    spesialis: "Spesialis THT-KL",
    idPoli: "P04",
    namaPoli: "Poliklinik THT-KL",
    gambar: "/assets/doctor-240920-006ef00603.jpg",
    jadwal: [
      { hari: "Selasa & Kamis", jam: "08.30 – 11.30 WIB" },
      { hari: "Sabtu", jam: "10.00 – 13.00 WIB" },
    ],
    pengalaman: "Telinga, Hidung, Tenggorokan & Sinus",
  },
  {
    id: "DR25",
    nama: "dr. Donal Anjar Simanjuntak, M.Ked(Paru), Sp.P(K)",
    spesialis: "Konsultan Paru & Pernapasan",
    idPoli: "P10",
    namaPoli: "Poliklinik Paru",
    gambar: "/assets/doctor-240920-5c69e5c63e.jpg",
    jadwal: [
      { hari: "Selasa & Kamis", jam: "12.00 – 14.00 WIB" },
      { hari: "Sabtu", jam: "09.00 – 11.00 WIB" },
    ],
    pengalaman: "Pulmonologi Intervensi & Asma/PPOK",
  },
  {
    id: "DR27",
    nama: "dr. Irina Damayanti, M.Ked(DV), Sp.DV",
    spesialis: "Spesialis Kulit & Kelamin",
    idPoli: "P12",
    namaPoli: "Poliklinik Kulit & Kelamin",
    gambar: "/assets/doctor-240920-1e38f2ecd3.jpg",
    jadwal: [
      { hari: "Senin, Rabu & Jumat", jam: "14.00 – 16.00 WIB" },
    ],
    pengalaman: "Dermatologi & Venereologi",
  },
  {
    id: "DR30",
    nama: "dr. Rita Sibarani, M.Ked(Neu), Sp.S",
    spesialis: "Spesialis Saraf (Neurologi)",
    idPoli: "P13",
    namaPoli: "Poliklinik Saraf",
    gambar: "/assets/doctor-240920-387da2aaa0.jpg",
    jadwal: [
      { hari: "Selasa", jam: "14.30 – 17.00 WIB" },
      { hari: "Sabtu", jam: "09.00 – 14.00 WIB" },
    ],
    pengalaman: "Stroke, Vertigo & Gangguan Saraf",
  },
  {
    id: "DR32",
    nama: "dr. Benni Azhari, Sp.KFR",
    spesialis: "Spesialis Kedokteran Fisik & Rehabilitasi",
    idPoli: "P16",
    namaPoli: "Rehabilitasi Medik",
    gambar: "/assets/doctor-240920-d5cb55fdc1.jpg",
    jadwal: [
      { hari: "Selasa, Kamis & Jumat", jam: "14.00 – 17.00 WIB" },
      { hari: "Rabu & Sabtu", jam: "08.00 – 13.30 WIB" },
    ],
    pengalaman: "Fisiatri, Pemulihan Pasca Stroke & Nyeri",
  },
  {
    id: "DR21",
    nama: "dr. Ardiana Annisa, Sp.Rad",
    spesialis: "Spesialis Radiologi",
    idPoli: "P15",
    namaPoli: "Poliklinik Radiologi",
    gambar: "/assets/doctor-240920-fbb3aff470.jpg",
    jadwal: [
      { hari: "Senin", jam: "15.00 – 17.00 WIB" },
      { hari: "Selasa & Rabu", jam: "11.00 – 13.00 WIB" },
    ],
    pengalaman: "CT-Scan, USG & Pencitraan Diagnostik",
  },
  {
    id: "DR33",
    nama: "drg. Nur Suri Wulandari",
    spesialis: "Dokter Gigi",
    idPoli: "P17",
    namaPoli: "Poliklinik Gigi",
    gambar: "/assets/doctor-240920-3e94985b1f.jpg",
    jadwal: [
      { hari: "Selasa, Jumat & Sabtu", jam: "10.00 – 11.30 WIB" },
    ],
    pengalaman: "Kesehatan Gigi, Gusi & Mulut",
  },
];

export const FASILITAS_LIST: FasilitasItem[] = [
  {
    id: "facility-1",
    nama: "Instalasi Gawat Darurat (IGD) 24 Jam",
    kategori: "Darurat & Intensif",
    deskripsi:
      "Layanan darurat medis 24 jam penuh dengan 16 dokter umum tersertifikasi ATLS/ACLS dan sistem triase cepat tanggap.",
    gambar: "/assets/facility-241203-bce850dfcd.jpg",
    status: "Siaga 24 Jam",
  },
  {
    id: "facility-15",
    nama: "Cathlab — Kateterisasi Jantung",
    kategori: "Darurat & Intensif",
    deskripsi:
      "Tindakan diagnostik dan intervensi pembuluh darah jantung (pasang ring/stent) tanpa harus dirujuk ke luar kota.",
    gambar: "/assets/facility-250106-e1c80a691a.jpg",
    status: "Unggulan",
  },
  {
    id: "facility-5",
    nama: "Intensive Care Unit (ICU)",
    kategori: "Darurat & Intensif",
    deskripsi:
      "Ruang perawatan intensif dengan ventilator dan central patient monitor untuk pemantauan ketat 24 jam.",
    gambar: "/assets/facility-250106-27e8cf02fd.jpg",
    status: "Tersedia",
  },
  {
    id: "facility-6",
    nama: "NICU (Neonatal Intensive Care Unit)",
    kategori: "Darurat & Intensif",
    deskripsi:
      "Perawatan intensif khusus bayi baru lahir dan prematur hingga usia 30 hari dengan inkubator modern.",
    gambar: "/assets/facility-250106-df2569d49e.jpg",
    status: "Tersedia",
  },
  {
    id: "facility-16",
    nama: "Unit Hemodialisis (Cuci Darah)",
    kategori: "Penunjang Medis",
    deskripsi:
      "Layanan cuci darah bagi pasien rawat jalan maupun rawat inap dengan mesin dialisis berstandar Kemenkes RI.",
    gambar: "/assets/facility-250106-dba699dedd.jpg",
    status: "BPJS & Umum",
  },
  {
    id: "facility-4",
    nama: "Instalasi Radiologi & CT-Scan",
    kategori: "Penunjang Medis",
    deskripsi:
      "Dilengkapi CT-Scan (kontras & non-kontras), Computerized Radiography (Rontgen digital), dan USG 4D/Abdomen.",
    gambar: "/assets/facility-250106-ef5ed6d333.jpg",
    status: "24 Jam",
  },
  {
    id: "facility-7",
    nama: "Laboratorium Patologi Klinik",
    kategori: "Penunjang Medis",
    deskripsi:
      "Pemeriksaan hematologi, kimia darah, elektrolit, imunoserologi, dan mikrobiologi klinis dengan akurasi tinggi.",
    gambar: "/assets/facility-250106-c74c5f834e.jpg",
    status: "24 Jam",
  },
  {
    id: "facility-8",
    nama: "Instalasi Farmasi 24 Jam",
    kategori: "Penunjang Medis",
    deskripsi:
      "Pelayanan resep obat rawat jalan & rawat inap, konseling informasi obat oleh apoteker klinis tanpa henti.",
    gambar: "/assets/facility-250106-4a2e119650.jpg",
    status: "24 Jam",
  },
  {
    id: "facility-2",
    nama: "Ruang Rawat Inap (VIP, Kelas I, II, III)",
    kategori: "Rawat Inap",
    deskripsi:
      "Kapasitas 201 tempat tidur bersih dan nyaman untuk pemulihan optimal pasien bersama keluarga.",
    gambar: "/assets/facility-250106-dcd6e87f41.jpg",
    status: "201 TT",
  },
  {
    id: "facility-9",
    nama: "Kamar Bersalin (VK) & Kebidanan",
    kategori: "Rawat Inap",
    deskripsi:
      "Ruang pertolongan persalinan normal maupun risiko tinggi yang terhubung langsung dengan kamar operasi & NICU.",
    gambar: "/assets/facility-250106-21119d0633.jpg",
    status: "Siaga 24 Jam",
  },
  {
    id: "facility-11",
    nama: "Bank Darah Rumah Sakit (BDRS)",
    kategori: "Penunjang Medis",
    deskripsi:
      "Menjamin ketersediaan stok darah transfusi yang aman, teruji saring, dan siap pakai setiap saat.",
    gambar: "/assets/facility-241203-11b0534a0b.jpg",
    status: "Siaga 24 Jam",
  },
  {
    id: "facility-18",
    nama: "Instalasi Gizi & Konsultasi Diet",
    kategori: "Umum",
    deskripsi:
      "Penyediaan nutrisi medis yang terukur sesuai kondisi klinis dan status metabolisme setiap pasien rawat inap.",
    gambar: "/assets/facility-250710-22203e3869.JPG",
    status: "Terstandar",
  },
];

export const PAKET_MCU = [
  {
    nama: "Paket Standar I",
    hargaAwal: "Rp805.000",
    hargaPromo: "Rp400.000",
    item: [
      "Gula Darah Puasa",
      "Kolesterol Total, HDL, LDL & Trigliserida",
      "Asam Urat",
      "Gratis Konsultasi Dokter Sp.PD / Sp.JP",
    ],
  },
  {
    nama: "Paket Silver",
    hargaAwal: "Rp1.890.000",
    hargaPromo: "Rp1.000.000",
    populer: true,
    item: [
      "Hematologi Lengkap & Urinalisis",
      "Gula Darah, Profil Lipid Lengkap & Asam Urat",
      "Fungsi Hati (SGOT/SGPT) & Ginjal (Ureum/Kreatinin)",
      "Rekam Jantung (EKG) & Rontgen Thorax",
      "Konsultasi Spesialis Penyakit Dalam & Jantung",
    ],
  },
  {
    nama: "Paket Platinum",
    hargaAwal: "Rp4.160.000",
    hargaPromo: "Rp2.500.000",
    item: [
      "Seluruh Pemeriksaan Paket Silver + HbA1c",
      "Tiroid (T3 & T4), HBsAg, Albumin, Bilirubin",
      "USG Upper & Lower Abdomen Lengkap",
      "EKG & Foto Rontgen Dada (Thorax)",
      "Konsultasi Lengkap Sp.PD & Sp.JP",
    ],
  },
];

export const BERITA_LIST: BeritaItem[] = [
  {
    id: "NEWS-23",
    judul: "Grand Opening RSU Putri Bidadari Aceh — Ekspansi Layanan Bidadari Group",
    tanggal: "23 Oktober 2025",
    kategori: "Bidadari Group",
    ringkasan:
      "RSU Putri Bidadari Aceh di bawah naungan Bidadari Group resmi beroperasi di Jl. Soekarno-Hatta, Aceh Besar untuk memperluas akses layanan kesehatan rujukan.",
    gambar: "/assets/news-251111-213e024750.jpg",
  },
  {
    id: "NEWS-22",
    judul: "Implementasi & Supervisi Program Universal Health Coverage (UHC) Prioritas",
    tanggal: "26 September 2025",
    kategori: "Layanan JKN",
    ringkasan:
      "Cukup gunakan NIK/KTP untuk akses layanan kesehatan yang Mudah, Cepat, dan Setara bagi masyarakat yang terdaftar dalam program JKN/UHC.",
    gambar: "/assets/news-250926-8cd14f0054.jpg",
  },
  {
    id: "NEWS-21",
    judul: "Operasi Katarak Modern Metode Phacoemulsifikasi Tanpa Jahitan",
    tanggal: "29 November 2024",
    kategori: "Layanan Unggulan",
    ringkasan:
      "Tindakan operasi katarak mutakhir dengan sayatan mikro ±2mm yang minim risiko dan mempercepat pemulihan penglihatan pasien.",
    gambar: "/assets/news-231129-45dc38abc8.jpg",
  },
  {
    id: "NEWS-14",
    judul: "Juara Terfavorit Nasional FAST Competition Faskes BPJS Kesehatan",
    tanggal: "15 Oktober 2024",
    kategori: "Penghargaan",
    ringkasan:
      "Komitmen penuh digitalisasi antrean Mobile JKN dan transformasi mutu layanan mengantarkan RSU Bidadari masuk Top 5 Nasional.",
    gambar: "/assets/news-231125-e22bb73e0e.jpg",
  },
  {
    id: "NEWS-02",
    judul: "Hadirnya Layanan Rehabilitasi Medik & Fisioterapi Terpadu",
    tanggal: "12 Agustus 2024",
    kategori: "Fasilitas Baru",
    ringkasan:
      "Ditangani langsung oleh dokter spesialis Sp.KFR dan fisioterapis berpengalaman untuk pemulihan pasca stroke, operasi, serta cedera otot/sendi.",
    gambar: "/assets/news-231124-a3812d06d9.jpg",
  },
  {
    id: "NEWS-01",
    judul: "Seminar & Workshop Kegawatdaruratan Kardiovaskular Bersama IDI",
    tanggal: "25 Juli 2024",
    kategori: "Ilmiah & Medis",
    ringkasan:
      "Peningkatan kompetensi tenaga medis dalam penanganan sindrom koroner akut, gagal jantung akut, dan pembacaan EKG darurat.",
    gambar: "/assets/news-231124-25c47cae25.jpg",
  },
];

export const PENJAMIN_LIST = [
  { nama: "BPJS Kesehatan", kategori: "JKN / UHC", warna: "#00875a" },
  { nama: "BPJS Ketenagakerjaan", kategori: "JKK / Pusat Layanan Kecelakaan Kerja", warna: "#16734f" },
  { nama: "Jasa Raharja", kategori: "BUMN Kecelakaan Lalu Lintas", warna: "#2563eb" },
  { nama: "Mandiri Inhealth", kategori: "Asuransi Kesehatan", warna: "#0284c7" },
  { nama: "Prudential", kategori: "Asuransi Jiwa & Kesehatan", warna: "#ba343e" },
  { nama: "AdMedika", kategori: "Third Party Administrator (TPA)", warna: "#7438d0" },
  { nama: "BNI Life", kategori: "Asuransi Kesehatan", warna: "#d98a06" },
  { nama: "Allianz / Manulife / AXA", kategori: "Asuransi Swasta Nasional", warna: "#4c1d95" },
  { nama: "Sinarmas MSIG & Garda Medika", kategori: "Asuransi & Korporat", warna: "#dc2626" },
];

export const GRUP_RS_LIST = [
  {
    nama: "RSU Mahkota Bidadari",
    kota: "Gebang, Kab. Langkat — Sumatera Utara",
    status: "Pusat Layanan Utama",
    gambar: "/assets/mahkota.jpeg",
  },
  {
    nama: "RSU Bidadari Binjai",
    kota: "Binjai Utara, Kota Binjai — Sumatera Utara",
    status: "201 TT · Cathlab & Hemodialisis",
    gambar: "/assets/RSUB.PNG",
  },
  {
    nama: "RSU Bidadari Batubara",
    kota: "Kab. Batubara — Sumatera Utara",
    status: "Jaringan Bidadari Group",
    gambar: "/assets/slide1.jpeg",
  },
  {
    nama: "RSU Putri Bidadari Langkat",
    kota: "Stabat, Kab. Langkat — Sumatera Utara",
    status: "Jaringan Bidadari Group",
    gambar: "/assets/slide2.jpeg",
  },
  {
    nama: "RSU Putri Bidadari Aceh",
    kota: "Darul Imarah, Aceh Besar — Aceh",
    status: "Grand Opening 2025",
    gambar: "/assets/news-251111-213e024750.jpg",
  },
];
