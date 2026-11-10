"use client";

import React, { useState, useMemo } from "react";
import {
  RSUMB_INFO,
  MARQUEE_SHOWCASE,
  POLIKLINIK_LIST,
  DOKTER_LIST,
  FASILITAS_LIST,
  PAKET_MCU,
  BERITA_LIST,
  PENJAMIN_LIST,
  GRUP_RS_LIST,
} from "@/lib/rsumb-data";

export function LandingPortal() {
  // Interactive Hero Composer state (DesainPakeAI style)
  const [prompt, setPrompt] = useState("");
  const [modeLayanan, setModeLayanan] = useState<"umum" | "bpjs">("bpjs");
  const [selectedPoliId, setSelectedPoliId] = useState<string>("all");
  const [selectedHari, setSelectedHari] = useState<string>("Semua");

  // Interactive Anti-Slop comparison slider state (Capability Card 1)
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Filterable Poliklinik & Dokter state
  const [searchDokter, setSearchDokter] = useState("");
  const [filterPoliDokter, setFilterPoliDokter] = useState<string>("all");

  // Booking Modal / Quick Action state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingNama, setBookingNama] = useState("");
  const [bookingTelepon, setBookingTelepon] = useState("");
  const [bookingPoli, setBookingPoli] = useState("Poliklinik Penyakit Dalam");
  const [bookingTanggal, setBookingTanggal] = useState("");

  // Smart matching inside Hero Composer
  const matchedResults = useMemo(() => {
    const q = prompt.trim().toLowerCase();
    if (!q && selectedPoliId === "all") return [];
    return DOKTER_LIST.filter((d) => {
      const matchPoli =
        selectedPoliId === "all" || d.idPoli === selectedPoliId;
      const matchHari =
        selectedHari === "Semua" ||
        d.jadwal.some((j) =>
          j.hari.toLowerCase().includes(selectedHari.toLowerCase())
        );
      if (!q) return matchPoli && matchHari;
      const hay =
        `${d.nama} ${d.spesialis} ${d.namaPoli} ${d.pengalaman}`.toLowerCase();
      return matchPoli && matchHari && hay.includes(q);
    }).slice(0, 4);
  }, [prompt, selectedPoliId, selectedHari]);

  // Filtered doctors in directory section
  const filteredDoctors = useMemo(() => {
    return DOKTER_LIST.filter((d) => {
      const matchPoli =
        filterPoliDokter === "all" || d.idPoli === filterPoliDokter;
      const q = searchDokter.trim().toLowerCase();
      if (!q) return matchPoli;
      return (
        matchPoli &&
        `${d.nama} ${d.spesialis} ${d.namaPoli} ${d.pengalaman}`
          .toLowerCase()
          .includes(q)
      );
    });
  }, [searchDokter, filterPoliDokter]);

  const handleComposerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      prompt.trim() ||
      "Halo Admin RSU Mahkota Bidadari, saya ingin mendaftar konsultasi poliklinik.";
    const penjaminText =
      modeLayanan === "bpjs" ? "Pasien BPJS / JKN (NIK KTP)" : "Pasien Umum / Asuransi";
    const msg = `Halo Admin *${RSUMB_INFO.nama}*,\n\nSaya ingin konsultasi / daftar berobat:\n• *Jenis Layanan:* ${penjaminText}\n• *Kebutuhan / Keluhan:* ${text}\n\nMohon informasi jadwal dokter dan antrean. Terima kasih.`;
    window.open(
      `https://wa.me/${RSUMB_INFO.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleQuickPrompt = (text: string, poliId = "all") => {
    setPrompt(text);
    if (poliId !== "all") setSelectedPoliId(poliId);
    const el = document.getElementById("landing-hero-prompt");
    if (el) el.focus();
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Admin *${RSUMB_INFO.nama}*,\n\n*PENDAFTARAN RAWAT JALAN ONLINE*\n• *Nama Pasien:* ${bookingNama}\n• *No. WhatsApp:* ${bookingTelepon}\n• *Poliklinik Tujuan:* ${bookingPoli}\n• *Rencana Tanggal:* ${bookingTanggal || "Segera"}\n• *Penjamin:* ${modeLayanan === "bpjs" ? "BPJS Kesehatan (JKN/UHC)" : "Umum / Asuransi Rekanan"}\n\nMohon konfirmasi nomor antrean saya. Terima kasih.`;
    window.open(
      `https://wa.me/${RSUMB_INFO.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setBookingModalOpen(false);
  };

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-dpai-chrome text-dpai-ink font-landing [&_*:not(svg):not(path)]:box-border">
      {/* Skip link */}
      <a
        className="fixed top-0 left-4 z-[100] -translate-y-full bg-dpai-ink px-4 py-3 text-dpai-caption text-white no-underline transition-transform focus:translate-y-3"
        href="#hero"
      >
        Lewati ke konten utama
      </a>

      {/* 1. ANNOUNCEMENT TOPBAR (Exact DesainPakeAI structure) */}
      <aside
        className="relative z-20 border-b border-dpai-violet-dark/25 bg-dpai-violet text-white"
        aria-label="Pengumuman Layanan Rumah Sakit"
      >
        <div className="relative z-[1] mx-auto flex min-h-9 w-[calc(100%-2rem)] max-w-[82.625rem] items-center justify-between gap-6 py-1.5 text-dpai-caption font-medium leading-snug max-[760px]:flex-col max-[760px]:justify-center max-[760px]:gap-1.5 max-[760px]:py-2 max-[760px]:text-center">
          <p className="m-0 flex min-w-0 items-center gap-2.5 text-[0.8125rem] leading-[1.2rem]">
            <span
              className="grid size-6 shrink-0 place-items-center overflow-hidden rounded-full bg-white/15 p-0.5"
              aria-hidden="true"
            >
              <img
                src="/dpai/announcement-megaphone.png"
                alt=""
                className="size-full scale-[1.35] object-contain"
              />
            </span>
            <span>
              Layanan UHC &amp; JKN BPJS Kesehatan cukup gunakan{" "}
              <strong className="font-bold underline decoration-white/50 underline-offset-2">
                NIK / KTP
              </strong>{" "}
              — Akreditasi Paripurna LARS DHP.
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] font-bold leading-none tracking-[0.06em] text-white uppercase">
              <span
                className="size-2 rounded-full bg-dpai-signal animate-pulse"
                aria-hidden="true"
              />
              IGD 24 Jam
            </span>
            <dl
              className="m-0 flex shrink-0 items-center gap-4 border-l border-white/25 pl-4 font-sans leading-none tabular-nums max-[640px]:gap-3"
              aria-label="Statistik rumah sakit"
            >
              <div className="flex items-center gap-1.5">
                <dt className="text-[0.75rem] font-semibold text-white/70">
                  Spesialis
                </dt>
                <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-white">
                  {RSUMB_INFO.statistik.dokterSpesialis} Dokter
                </dd>
              </div>
              <div className="flex items-center gap-1.5 border-l border-white/25 pl-4">
                <dt className="text-[0.75rem] font-semibold text-white/70">
                  Kapasitas
                </dt>
                <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-white">
                  {RSUMB_INFO.statistik.tempatTidur} Bed
                </dd>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 border-l border-white/25 pl-4">
                <dt className="text-[0.75rem] font-semibold text-white/70">
                  Poliklinik
                </dt>
                <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-white">
                  {RSUMB_INFO.statistik.poliklinik} Unit
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </aside>

      {/* 2. NAVBAR (Exact DesainPakeAI structure + RSUMB logo) */}
      <header className="sticky top-0 z-30 border-b border-dpai-line/60 bg-dpai-chrome/90 backdrop-blur-md">
        <nav
          className="relative mx-auto flex h-16 w-[calc(100%-2rem)] max-w-[82.625rem] items-center justify-between font-sans sm:h-20 sm:w-[calc(100%-3rem)]"
          aria-label="Navigasi utama"
        >
          <div className="flex items-center">
            <a
              href="#hero"
              className="inline-flex shrink-0 items-center gap-2.5 font-display text-dpai-title-sm font-bold tracking-dpai-display text-dpai-ink no-underline"
            >
              <img
                src="/assets/logo-mahkota1.png"
                alt="Logo RSU Mahkota Bidadari"
                className="h-10 w-10 rounded-lg object-contain bg-white p-0.5 ring-1 ring-dpai-line"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[1.15rem] tracking-[-0.04em]">
                  mahkota<span className="text-dpai-violet">bidadari</span>
                </span>
                <span className="mt-0.5 font-mono text-[0.62rem] font-semibold tracking-[0.08em] text-dpai-muted uppercase">
                  Bidadari Medikal Group
                </span>
              </div>
            </a>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 min-[960px]:flex">
              <a
                className="text-dpai-body-sm font-medium text-dpai-muted no-underline transition-colors hover:text-dpai-ink"
                href="#capabilities"
              >
                Keunggulan
              </a>
              <a
                className="text-dpai-body-sm font-medium text-dpai-muted no-underline transition-colors hover:text-dpai-ink"
                href="#poliklinik"
              >
                Poliklinik (16)
              </a>
              <a
                className="text-dpai-body-sm font-medium text-dpai-muted no-underline transition-colors hover:text-dpai-ink"
                href="#dokter"
              >
                Jadwal Dokter (34)
              </a>
              <a
                className="text-dpai-body-sm font-medium text-dpai-muted no-underline transition-colors hover:text-dpai-ink"
                href="#fasilitas"
              >
                Fasilitas &amp; MCU
              </a>
              <a
                className="text-dpai-body-sm font-medium text-dpai-muted no-underline transition-colors hover:text-dpai-ink"
                href="#berita"
              >
                Berita
              </a>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={`tel:${RSUMB_INFO.igd}`}
              className="hidden min-h-10 items-center gap-1.5 rounded-dpai-action border border-dpai-danger-line bg-dpai-danger-soft px-4 text-dpai-body-sm font-semibold text-dpai-danger no-underline transition-colors hover:bg-dpai-danger hover:text-white sm:inline-flex"
            >
              <span className="size-2 rounded-full bg-current animate-ping" />
              IGD: {RSUMB_INFO.igd}
            </a>
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-dpai-action border border-dpai-violet-hover bg-dpai-violet px-5 text-dpai-label font-semibold text-white shadow-dpai-action transition-[background,transform] hover:-translate-y-px hover:bg-dpai-violet-hover active:scale-[0.97]"
            >
              Daftar Online
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* 3. HERO SECTION + AI-STYLE TRIAGE & APPOINTMENT COMPOSER */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate mx-auto flex w-[calc(100%-3rem)] max-w-[82.625rem] flex-col items-center pt-[clamp(3rem,6vw,5.5rem)] pb-[clamp(2.5rem,5vw,4.5rem)] text-center max-[640px]:w-[calc(100%-1.5rem)] max-[640px]:pt-8 max-[640px]:pb-8"
          id="hero"
        >
          <div
            aria-hidden="true"
            className="dpai-landing-hero-grid pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[38rem]"
          />
          <div
            aria-hidden="true"
            className="dpai-landing-hero-aurora pointer-events-none absolute left-1/2 -top-40 -z-10 h-[34rem] w-[64rem] -translate-x-1/2 rounded-full blur-3xl max-[640px]:-top-28 max-[640px]:h-[24rem] max-[640px]:w-[32rem]"
          />

          {/* Accreditation pill */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-dpai-violet-line bg-dpai-violet-soft/80 px-3.5 py-1.5 text-dpai-caption font-semibold text-dpai-violet-dark shadow-xs">
            <img
              src="/assets/LARS2.png"
              alt="LARS DHP"
              className="h-4 w-auto object-contain"
            />
            <span>Terakreditasi Paripurna Bintang 5 — LARS DHP Kemenkes RI</span>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center animate-[dpai-landing-enter_400ms_ease-out_both]">
            <h1
              className="m-0 max-w-[19ch] font-display text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[0.96] font-semibold tracking-[-0.055em] text-dpai-ink [&>span]:block max-[640px]:max-w-none max-[640px]:text-[clamp(2rem,8.5vw,2.75rem)] max-[640px]:leading-[1.02]"
              id="hero-title"
            >
              <span>Layanan Medis Terpadu</span>
              <span>
                Bebas{" "}
                <span className="relative inline-block">
                  ANTRE LAMA
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[-0.06em] top-[55%] h-[0.08em] min-h-1 rounded-full bg-dpai-danger"
                  />
                </span>
              </span>
            </h1>
            <p className="mt-4 max-w-[40rem] text-dpai-body-lg text-dpai-muted max-[640px]:text-dpai-body">
              {RSUMB_INFO.slogan}. Didukung{" "}
              <strong className="font-semibold text-dpai-ink">
                34 Dokter Spesialis
              </strong>
              , Cathlab Jantung, Hemodialisis, USG 4D, dan IGD Siaga 24 Jam di
              Langkat &amp; Binjai.
            </p>
          </div>

          {/* Interactive Composer Box (DesainPakeAI signature prompt box adapted for Smart Hospital Triage) */}
          <div className="mt-9 w-full animate-[dpai-landing-enter_400ms_ease-out_both] max-[640px]:mt-6">
            <div className="mx-auto w-full max-w-[46rem]">
              <div className="overflow-hidden rounded-2xl bg-dpai-chrome text-dpai-ink ring-1 ring-dpai-line shadow-dpai-composer transition-shadow duration-200 focus-within:ring-2 focus-within:ring-dpai-violet">
                <form onSubmit={handleComposerSubmit}>
                  <div className="p-3.5 max-[640px]:p-2.5">
                    <label
                      className="sr-only"
                      htmlFor="landing-hero-prompt"
                    >
                      Ceritakan keluhan medis, cari dokter spesialis, atau pilih poliklinik
                    </label>
                    <textarea
                      autoComplete="off"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="block max-h-52 w-full min-w-0 resize-none overflow-y-auto border-0 bg-transparent px-3 py-2.5 text-left text-dpai-body-lg leading-[1.55] text-dpai-ink caret-dpai-violet placeholder:text-dpai-muted focus:outline-none min-h-24"
                      id="landing-hero-prompt"
                      maxLength={1000}
                      placeholder="Ketik keluhan medis, nama dokter spesialis, atau layanan (contoh: nyeri dada, kontrol gula darah, USG 4D kehamilan, operasi katarak)..."
                      rows={3}
                    />

                    {/* Toolbar inside composer */}
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-dpai-line/60 pt-2.5 px-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Toggle BPJS / Umum */}
                        <div
                          role="group"
                          aria-label="Jenis penjamin pasien"
                          className="inline-flex items-center gap-0.5 rounded-lg bg-dpai-paper p-0.5 ring-1 ring-dpai-line/70"
                        >
                          <button
                            type="button"
                            onClick={() => setModeLayanan("bpjs")}
                            className={`inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-md px-2.5 text-dpai-caption font-semibold transition-colors ${
                              modeLayanan === "bpjs"
                                ? "bg-dpai-chrome text-dpai-positive shadow-xs"
                                : "text-dpai-muted hover:text-dpai-ink"
                            }`}
                          >
                            <span className="size-2 rounded-full bg-dpai-positive" />
                            BPJS / KTP
                          </button>
                          <button
                            type="button"
                            onClick={() => setModeLayanan("umum")}
                            className={`inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-md px-2.5 text-dpai-caption font-semibold transition-colors ${
                              modeLayanan === "umum"
                                ? "bg-dpai-chrome text-dpai-violet-dark shadow-xs"
                                : "text-dpai-muted hover:text-dpai-ink"
                            }`}
                          >
                            Umum / Asuransi
                          </button>
                        </div>

                        {/* Poli selector */}
                        <select
                          aria-label="Pilih Poliklinik"
                          value={selectedPoliId}
                          onChange={(e) => setSelectedPoliId(e.target.value)}
                          className="min-h-8 cursor-pointer rounded-lg border border-dpai-line bg-dpai-paper px-2.5 text-dpai-caption font-medium text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                        >
                          <option value="all">Semua Poliklinik (16)</option>
                          {POLIKLINIK_LIST.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.nama}
                            </option>
                          ))}
                        </select>

                        {/* Hari selector */}
                        <select
                          aria-label="Pilih Hari Praktik"
                          value={selectedHari}
                          onChange={(e) => setSelectedHari(e.target.value)}
                          className="min-h-8 cursor-pointer rounded-lg border border-dpai-line bg-dpai-paper px-2.5 text-dpai-caption font-medium text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                        >
                          {[
                            "Semua",
                            "Senin",
                            "Selasa",
                            "Rabu",
                            "Kamis",
                            "Jumat",
                            "Sabtu",
                          ].map((h) => (
                            <option key={h} value={h}>
                              Hari: {h}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-center gap-3 ml-auto">
                        <span className="font-mono text-dpai-caption font-semibold text-dpai-muted tabular-nums">
                          {matchedResults.length > 0
                            ? `${matchedResults.length} dokter cocok`
                            : "Siap konsultasi"}
                        </span>
                        <button
                          type="submit"
                          aria-label="Kirim & Daftar via WhatsApp"
                          className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl bg-dpai-violet-dark px-4 text-dpai-caption font-semibold text-white shadow-dpai-press transition-[background-color,transform] duration-150 hover:bg-dpai-violet-hover active:scale-[0.96]"
                        >
                          <span>Konsultasi WA</span>
                          <svg
                            aria-hidden="true"
                            className="size-4 fill-none stroke-current stroke-2"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Live Instant Doctor Recommendations inside Composer when user types or selects */}
                {matchedResults.length > 0 && (
                  <div className="border-t border-dpai-line bg-dpai-paper/90 px-4 py-3 text-left">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-mono text-[0.68rem] font-bold tracking-[0.06em] text-dpai-violet uppercase">
                        Rekomendasi Dokter Spesialis &amp; Jadwal Praktik
                      </span>
                      <a
                        href="#dokter"
                        className="text-dpai-caption font-semibold text-dpai-violet no-underline hover:underline"
                      >
                        Lihat semua 34 dokter →
                      </a>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {matchedResults.map((dok) => (
                        <div
                          key={dok.id}
                          className="flex items-center gap-3 rounded-xl border border-dpai-line bg-white p-2.5 shadow-2xs"
                        >
                          <img
                            src={dok.gambar}
                            alt={dok.nama}
                            className="size-12 shrink-0 rounded-lg object-cover object-top bg-dpai-desk"
                          />
                          <div className="min-w-0 flex-1">
                            <strong className="block truncate text-dpai-caption font-bold text-dpai-ink">
                              {dok.nama}
                            </strong>
                            <span className="block truncate text-[0.7rem] font-medium text-dpai-violet">
                              {dok.spesialis}
                            </span>
                            <span className="mt-0.5 block truncate font-mono text-[0.65rem] text-dpai-muted">
                              {dok.jadwal[0]?.hari}: {dok.jadwal[0]?.jam}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick suggestion chips below composer (Exact DesainPakeAI style) */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 max-[640px]:mt-4 max-[640px]:gap-1.5">
                {[
                  {
                    label: "Cek Jantung & Cathlab (Sp.JP)",
                    text: "Saya ingin konsultasi pemeriksaan jantung, EKG / Echocardiography di Poliklinik Jantung",
                    poli: "P07",
                  },
                  {
                    label: "USG 4D Kehamilan (Sp.OG)",
                    text: "Saya ingin daftar pemeriksaan kehamilan & USG 4D di Poliklinik Obgyn",
                    poli: "P06",
                  },
                  {
                    label: "Penyakit Dalam & Diabetes (Sp.PD)",
                    text: "Saya ingin kontrol gula darah, hipertensi & fungsi ginjal di Poliklinik Penyakit Dalam",
                    poli: "P03",
                  },
                  {
                    label: "Operasi Katarak Phaco (Sp.M)",
                    text: "Saya ingin konsultasi operasi katarak metode Phacoemulsifikasi dengan dokter Spesialis Mata",
                    poli: "P02",
                  },
                  {
                    label: "Tumbuh Kembang Anak (Sp.A)",
                    text: "Saya ingin konsultasi kesehatan & imunisasi anak dengan dokter Spesialis Anak",
                    poli: "P05",
                  },
                ].map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleQuickPrompt(chip.text, chip.poli)}
                    className="inline-flex min-h-9 cursor-pointer items-center rounded-full border border-dpai-line bg-dpai-chrome/85 px-3.5 text-dpai-label font-medium text-dpai-muted backdrop-blur-sm transition-[background-color,border-color,color,transform] duration-150 ease-out hover:-translate-y-px hover:border-dpai-violet/40 hover:bg-dpai-chrome hover:text-dpai-ink active:scale-[0.97]"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. MARQUEE COLLECTION SHOWCASE (Exact DesainPakeAI #templates marquee with real /home/siherdot/asset photos) */}
        <section
          aria-labelledby="landing-collection-title"
          className="border-y border-dpai-line bg-dpai-paper pt-8 pb-7 max-[640px]:pt-6 max-[640px]:pb-5"
          id="templates"
        >
          <div className="mx-auto mb-3 flex w-[calc(100%-3rem)] max-w-[82.625rem] items-center justify-between max-[640px]:w-[calc(100%-1.5rem)]">
            <h2
              className="font-mono text-dpai-caption font-bold tracking-[0.08em] text-dpai-muted uppercase"
              id="landing-collection-title"
            >
              Galeri Fasilitas &amp; Layanan Unggulan RSU Mahkota Bidadari
            </h2>
            <span className="font-mono text-dpai-caption text-dpai-violet font-semibold">
              Klik kartu untuk pilih layanan →
            </span>
          </div>

          <div className="dpai-landing-collection-viewport py-3">
            <div
              className="dpai-landing-collection-track flex w-max gap-5"
              style={
                { "--collection-duration": "68s" } as React.CSSProperties
              }
            >
              {[0, 1].map((loopIdx) => (
                <ul
                  key={loopIdx}
                  aria-hidden={loopIdx === 1}
                  className="m-0 flex shrink-0 list-none gap-5 p-0"
                >
                  {MARQUEE_SHOWCASE.map((item) => (
                    <li key={`${loopIdx}-${item.id}`} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => handleQuickPrompt(item.prompt)}
                        className="group relative block h-[17.5rem] w-[28rem] cursor-pointer overflow-hidden rounded-2xl border border-dpai-line bg-dpai-desk p-0 text-left shadow-dpai-popover transition-transform duration-200 ease-out hover:-translate-y-1.5 max-[640px]:h-[12.5rem] max-[640px]:w-[19.5rem]"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="block size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-dpai-ink/80 px-3 py-1 font-mono text-[0.68rem] font-bold tracking-[0.05em] text-white backdrop-blur-sm uppercase">
                          {item.badge}
                        </span>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-dpai-ink/95 via-dpai-ink/70 to-transparent px-4 pt-12 pb-3.5 text-white">
                          <strong className="block font-display text-dpai-body font-semibold leading-snug">
                            {item.title}
                          </strong>
                          <span className="mt-0.5 block text-dpai-caption text-white/80">
                            {item.subtitle}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="#poliklinik"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white px-4 text-dpai-caption font-semibold text-dpai-ink no-underline ring-1 ring-dpai-line transition-colors hover:bg-dpai-desk"
            >
              Lihat semua 16 Poliklinik &amp; Fasilitas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6s6 4.419 6 6-6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>

        {/* 5. CAPABILITIES BENTO GRID (Exact DesainPakeAI 4-card bento layout + interactive comparison slider) */}
        <section
          aria-labelledby="capabilities-title"
          className="relative bg-white py-24 max-[760px]:py-14"
          id="capabilities"
        >
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[82.625rem] max-[640px]:w-[calc(100%-1.5rem)]">
            <h2
              className="mx-auto mb-12 max-w-[48rem] text-center font-display text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[0.98] tracking-dpai-display text-dpai-ink max-[640px]:mb-8 max-[640px]:text-[2.35rem]"
              id="capabilities-title"
            >
              Transformasi Layanan Kesehatan Modern
            </h2>

            <div className="grid grid-cols-2 gap-7 max-[960px]:grid-cols-1 max-[640px]:gap-5">
              {/* CARD 0: Interactive Slider Comparison (Antrean Konvensional vs Digitalisasi Mobile JKN & NIK KTP) */}
              <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dpai-line/80 bg-dpai-paper">
                <div className="flex h-[25rem] min-w-0 items-center overflow-hidden px-8 pt-8 max-[640px]:h-[21rem] max-[640px]:px-4 max-[640px]:pt-4">
                  <div className="m-auto w-full max-w-[39rem]">
                    <div className="group relative h-[18.5rem] touch-pan-y overflow-hidden rounded-2xl border border-dpai-line bg-white shadow-[0_0.75rem_2rem_rgba(31,41,35,0.1)] select-none">
                      {/* Right / Base Layer: Manual / Old Queue */}
                      <div className="absolute inset-0 overflow-hidden bg-dpai-violet-soft p-5">
                        <div className="relative flex items-center justify-between gap-2">
                          <span className="flex items-center gap-1.5 font-mono text-[0.6rem] font-bold tracking-[0.12em] text-dpai-danger uppercase">
                            <i className="size-3 rounded-full bg-dpai-danger" />{" "}
                            Cara Lama · Antre Loket Manual
                          </span>
                          <span className="rounded-full bg-dpai-danger px-2.5 py-0.5 font-mono text-[0.55rem] font-bold text-white">
                            Lambat
                          </span>
                        </div>
                        <div className="relative mt-3">
                          <span className="font-display text-[1rem] font-bold leading-tight text-slate-800">
                            Berkas Fotokopi Menumpuk
                          </span>
                          <p className="mb-0 mt-0.5 text-[0.65rem] text-slate-500">
                            Harus datang subuh, bawa map berkas &amp; kartu fisik
                          </p>
                        </div>
                        <div className="relative mt-3 grid grid-cols-2 gap-2.5">
                          <div className="rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 p-3 text-white shadow-md">
                            <span className="text-[0.58rem] text-white/80">
                              Waktu Tunggu Loket
                            </span>
                            <strong className="mt-1 block text-[0.95rem]">
                              90–120 Menit
                            </strong>
                            <small className="text-[0.55rem] text-rose-100">
                              Verifikasi berkas manual
                            </small>
                          </div>
                          <div className="rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 p-3 text-white shadow-md">
                            <span className="text-[0.58rem] text-white/80">
                              Kepastian Jadwal
                            </span>
                            <strong className="mt-1 block text-[0.95rem]">
                              Tidak Pasti
                            </strong>
                            <small className="text-[0.55rem] text-amber-100">
                              Rawan antrean penuh
                            </small>
                          </div>
                        </div>
                        <div className="relative mt-3 rounded-xl border border-rose-200 bg-white/80 p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[0.62rem] font-semibold text-slate-700">
                              Keluhan Pasien Konvensional
                            </span>
                            <span className="rounded-full bg-rose-50 px-2 text-[0.55rem] font-semibold text-rose-600">
                              Birokrasi Rumit
                            </span>
                          </div>
                          <p className="mt-1.5 mb-0 text-[0.62rem] text-slate-600">
                            Lupa bawa fotokopi kartu BPJS atau surat rujukan
                            membuat pendaftaran tertunda.
                          </p>
                        </div>
                        <span className="absolute bottom-2.5 right-3 font-mono text-[0.55rem] font-bold tracking-[0.08em] text-dpai-danger uppercase">
                          Antre Konvensional
                        </span>
                      </div>

                      {/* Left / Clipped Layer: RSU Mahkota Bidadari Fast Track JKN / NIK */}
                      <div
                        className="absolute inset-0 overflow-hidden bg-white p-5"
                        style={{
                          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                        }}
                      >
                        <div className="flex items-center justify-between border-b border-dpai-line pb-2">
                          <span className="font-mono text-[0.58rem] font-semibold tracking-[0.1em] text-dpai-muted uppercase">
                            Transformasi Digital · Top 5 Nasional BPJS
                          </span>
                          <span className="flex items-center gap-1 font-mono text-[0.58rem] font-semibold text-dpai-positive">
                            <i className="size-2 rounded-full bg-dpai-positive" />{" "}
                            Aktif 24 Jam
                          </span>
                        </div>
                        <div className="mt-3">
                          <span className="font-display text-[1rem] font-semibold leading-tight text-dpai-ink">
                            Fast-Track NIK/KTP &amp; Mobile JKN
                          </span>
                          <p className="mb-0 mt-0.5 text-[0.64rem] text-dpai-muted">
                            Tanpa fotokopi berkas — Mudah, Cepat, dan Setara
                          </p>
                        </div>
                        <div className="mt-3 grid grid-cols-2 border-y border-dpai-line py-2.5">
                          <div className="border-r border-dpai-line pr-3">
                            <span className="block text-[0.58rem] text-dpai-muted">
                              Check-in Pendaftaran
                            </span>
                            <strong className="mt-0.5 block font-mono text-[0.95rem] font-bold text-dpai-ink">
                              &lt; 3 Menit
                            </strong>
                            <small className="text-[0.56rem] font-semibold text-dpai-positive">
                              Cukup Tunjukkan KTP / NIK
                            </small>
                          </div>
                          <div className="pl-3">
                            <span className="block text-[0.58rem] text-dpai-muted">
                              Kapasitas Poliklinik
                            </span>
                            <strong className="mt-0.5 block font-mono text-[0.95rem] font-bold text-dpai-ink">
                              300+ Pasien/Hari
                            </strong>
                            <small className="text-[0.56rem] text-dpai-muted">
                              16 Poliklinik Spesialis
                            </small>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between rounded-xl bg-dpai-positive-soft px-3 py-2.5">
                          <div>
                            <strong className="block text-[0.65rem] font-semibold text-dpai-ink">
                              Juara Terfavorit FAST Competition BPJS
                            </strong>
                            <small className="block text-[0.58rem] text-dpai-muted">
                              Integrasi Antrean Online, Rekam Medis &amp; Farmasi
                            </small>
                          </div>
                          <span className="rounded-md bg-dpai-positive px-2 py-1 font-mono text-[0.55rem] font-bold text-white">
                            Terverifikasi
                          </span>
                        </div>
                        <span className="absolute bottom-2.5 left-3 font-mono text-[0.55rem] font-bold tracking-[0.08em] text-dpai-positive uppercase">
                          Standar RSU Mahkota Bidadari
                        </span>
                      </div>

                      {/* Range slider input */}
                      <input
                        aria-label="Geser untuk membandingkan layanan manual dan digitalisasi RSU Mahkota Bidadari"
                        className="peer absolute inset-0 z-20 m-0 h-full w-full cursor-ew-resize opacity-0"
                        type="range"
                        min={8}
                        max={92}
                        value={sliderPos}
                        onChange={(e) => setSliderPos(Number(e.target.value))}
                      />

                      {/* Slider Handle */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(35,33,38,0.25),0_0_0.75rem_rgba(35,33,38,0.2)]"
                        style={{ left: `${sliderPos}%` }}
                      >
                        <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-dpai-line bg-white text-dpai-ink shadow-lg">
                          <svg
                            className="size-4 fill-none stroke-current stroke-[1.8]"
                            viewBox="0 0 16 16"
                          >
                            <path d="m6 4-3 4 3 4M10 4l3 4-3 4" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-9 pb-10 pt-4 max-[640px]:px-5 max-[640px]:pb-7">
                  <span className="grid size-12 place-items-center rounded-full bg-white text-dpai-danger shadow-2xs">
                    <svg
                      aria-hidden="true"
                      className="size-5 fill-none stroke-current stroke-[1.8]"
                      viewBox="0 0 24 24"
                    >
                      <path d="m5 12 4 4L19 6M4 4h6M14 20h6" />
                    </svg>
                  </span>
                  <h3 className="mb-0 mt-5 font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-dpai-danger">
                    Bebas Antre Rumit (Cukup NIK / KTP)
                  </h3>
                  <p className="mb-0 mt-3 max-w-[34rem] text-[1.02rem] leading-[1.6] text-dpai-ink">
                    Geser panel di atas: kami memangkas birokrasi berkas manual
                    dengan sistem antrean Mobile JKN, UHC Prioritas, dan
                    reservasi WhatsApp langsung.
                  </p>
                </div>
              </article>

              {/* CARD 1: Vertical Auto-Scrolling Facilities & Poliklinik Showcase */}
              <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dpai-line/80 bg-dpai-paper">
                <div
                  aria-hidden="true"
                  className="flex h-[25rem] min-w-0 items-center overflow-hidden px-8 pt-8 max-[640px]:h-[21rem] max-[640px]:px-4 max-[640px]:pt-4"
                >
                  <div className="m-auto w-full max-w-[40rem]">
                    <div className="h-[20rem] overflow-hidden rounded-[0.9rem] [mask-image:linear-gradient(to_bottom,transparent_0,black_5%,black_95%,transparent_100%)]">
                      <div className="dpai-landing-foundation-track flex flex-col gap-3">
                        {[0, 1].map((dup) => (
                          <div
                            key={dup}
                            className="grid shrink-0 grid-cols-3 gap-3 max-[520px]:grid-cols-2"
                          >
                            {POLIKLINIK_LIST.slice(0, 9).map((poli) => (
                              <div
                                key={`${dup}-${poli.id}`}
                                className="overflow-hidden rounded-xl border border-dpai-line bg-white p-2 text-left shadow-2xs"
                              >
                                <span
                                  className="relative block aspect-[4/3] overflow-hidden rounded-lg"
                                  style={{ backgroundColor: poli.warna }}
                                >
                                  <img
                                    src={poli.gambar}
                                    alt={poli.nama}
                                    loading="lazy"
                                    className="absolute inset-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-[0.4rem] object-cover object-center shadow-sm"
                                  />
                                </span>
                                <span className="mt-2 flex min-w-0 items-center justify-between gap-1">
                                  <span className="truncate font-mono text-[0.7rem] font-semibold text-dpai-ink">
                                    {poli.nama.replace("Poliklinik ", "")}
                                  </span>
                                  <span
                                    className="size-2.5 shrink-0 rounded-full"
                                    style={{ backgroundColor: poli.warna }}
                                  />
                                </span>
                                <span className="mt-0.5 block font-mono text-[0.52rem] font-semibold tracking-[0.06em] text-dpai-muted uppercase">
                                  {poli.kategori}
                                </span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-9 pb-10 pt-4 max-[640px]:px-5 max-[640px]:pb-7">
                  <span className="grid size-12 place-items-center rounded-full bg-white text-dpai-positive shadow-2xs">
                    <svg
                      aria-hidden="true"
                      className="size-5 fill-none stroke-current stroke-[1.8]"
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="4" width="6" height="6" rx="1" />
                      <rect x="14" y="4" width="6" height="6" rx="1" />
                      <rect x="4" y="14" width="6" height="6" rx="1" />
                      <rect x="14" y="14" width="6" height="6" rx="1" />
                    </svg>
                  </span>
                  <h3 className="mb-0 mt-5 font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-dpai-positive">
                    16 Poliklinik &amp; Fasilitas Unggulan
                  </h3>
                  <p className="mb-0 mt-3 max-w-[34rem] text-[1.02rem] leading-[1.6] text-dpai-ink">
                    Mulai dari Cathlab Jantung, Hemodialisis, Bedah Saraf,
                    Phacoemulsifikasi Mata, USG 4D Obgyn, hingga Rehabilitasi
                    Medik dalam satu atap.
                  </p>
                </div>
              </article>

              {/* CARD 2: Insurance & Bidadari Network Beam (Exact DesainPakeAI Agent Beam layout) */}
              <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dpai-line/80 bg-dpai-paper">
                <div
                  aria-hidden="true"
                  className="flex h-[25rem] min-w-0 items-center overflow-hidden px-8 pt-8 max-[640px]:h-[21rem] max-[640px]:px-4 max-[640px]:pt-4"
                >
                  <div className="m-auto grid w-full max-w-[38rem] grid-cols-[minmax(0,1fr)_3.5rem_minmax(8.5rem,0.48fr)] items-center gap-3 max-[560px]:grid-cols-1">
                    <ul className="m-0 grid list-none grid-cols-3 gap-2 p-0">
                      {PENJAMIN_LIST.slice(0, 8).map((p) => (
                        <li
                          key={p.nama}
                          className="flex min-w-0 flex-col items-center gap-1.5 rounded-xl bg-white/85 px-2.5 py-3 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
                        >
                          <span
                            className="grid size-8 place-items-center rounded-full text-xs font-extrabold text-white shadow-xs"
                            style={{ backgroundColor: p.warna }}
                          >
                            {p.nama.slice(0, 2).toUpperCase()}
                          </span>
                          <span className="w-full truncate text-[0.66rem] font-semibold leading-4 text-dpai-ink">
                            {p.nama}
                          </span>
                        </li>
                      ))}
                      <li className="flex min-w-0 flex-col items-center justify-center rounded-xl bg-dpai-ink px-2 py-3 text-center text-white">
                        <strong className="font-display text-dpai-title-sm font-semibold leading-none">
                          32+
                        </strong>
                        <span className="mt-1 font-mono text-[0.58rem] text-white/65">
                          penjamin
                        </span>
                      </li>
                    </ul>

                    <div className="relative flex items-center justify-center self-stretch max-[560px]:h-6">
                      <i className="dpai-landing-agent-beam absolute inset-x-0 top-1/2 h-px overflow-hidden bg-dpai-line" />
                    </div>

                    <div className="relative flex flex-col items-center text-center">
                      <div className="dpai-landing-agent-support-halo relative flex h-24 w-36 flex-col items-center justify-center gap-1 rounded-2xl bg-dpai-ink px-3 text-white shadow-[0_1rem_2.5rem_rgba(35,33,38,0.18)]">
                        <img
                          src="/assets/logo-mahkota1.png"
                          alt=""
                          className="size-8 rounded-md bg-white p-0.5 object-contain"
                        />
                        <strong className="font-display text-[0.82rem] font-bold tracking-[-0.04em]">
                          mahkota<span className="text-dpai-signal">bidadari</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-9 pb-10 pt-4 max-[640px]:px-5 max-[640px]:pb-7">
                  <span className="grid size-12 place-items-center rounded-full bg-white text-dpai-violet shadow-2xs">
                    <svg
                      aria-hidden="true"
                      className="size-5 fill-none stroke-current stroke-[1.8]"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="7" cy="12" r="3" />
                      <circle cx="17" cy="7" r="3" />
                      <circle cx="17" cy="17" r="3" />
                      <path d="m9.7 10.7 4.6-2.4m-4.6 5 4.6 2.4" />
                    </svg>
                  </span>
                  <h3 className="mb-0 mt-5 font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-dpai-violet">
                    Menerima BPJS, Jasa Raharja &amp; 32+ Asuransi
                  </h3>
                  <p className="mb-0 mt-3 max-w-[34rem] text-[1.02rem] leading-[1.6] text-dpai-ink">
                    Terhubung langsung dengan BPJS Kesehatan (JKN/UHC), BPJS
                    Ketenagakerjaan, Jasa Raharja, Mandiri Inhealth, Prudential,
                    AdMedika, dan korporat.
                  </p>
                </div>
              </article>

              {/* CARD 3: Standar Mutu Paripurna + PROTOKOL.md (Exact DesainPakeAI DESIGN.md card style) */}
              <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dpai-line/80 bg-dpai-paper">
                <div
                  aria-hidden="true"
                  className="flex h-[25rem] min-w-0 items-center overflow-hidden px-8 pt-8 max-[640px]:h-[21rem] max-[640px]:px-4 max-[640px]:pt-4"
                >
                  <div className="m-auto grid w-full max-w-[39rem] grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-2xl border border-dpai-line bg-white shadow-sm max-[480px]:grid-cols-1">
                    <div className="border-r border-dpai-line bg-dpai-ink p-5 font-mono text-dpai-caption leading-6 text-white/65">
                      <strong className="text-white">MUTU-PARIPURNA.md</strong>
                      <p className="mt-4 text-dpai-signal">## Standar Klinis</p>
                      <p>
                        <span className="text-dpai-violet-line">--akreditasi:</span>{" "}
                        Paripurna ★★★★★
                      </p>
                      <p>
                        <span className="text-dpai-violet-line">--lembaga:</span>{" "}
                        LARS DHP Kemenkes
                      </p>
                      <p>
                        <span className="text-dpai-violet-line">--igd-response:</span>{" "}
                        &lt; 5 menit
                      </p>
                      <p className="mt-3 text-white/45">
                        Patient safety &amp; infeksi terkendali.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <div className="rounded-xl border border-dpai-line p-4 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <img
                            src="/assets/paripurna.png"
                            alt="Akreditasi Paripurna"
                            className="h-10 w-auto object-contain"
                          />
                          <div>
                            <strong className="block text-dpai-caption font-bold text-dpai-ink">
                              LARS DHP Paripurna
                            </strong>
                            <span className="block text-[0.68rem] text-dpai-muted">
                              Mutu &amp; Keselamatan Pasien
                            </span>
                          </div>
                        </div>
                        <span className="mt-4 inline-flex rounded-xl bg-dpai-violet px-3 py-1.5 text-dpai-caption font-semibold text-white">
                          201 Tempat Tidur Siaga
                        </span>
                      </div>
                      <p className="mb-0 mt-3 font-mono text-dpai-caption font-semibold text-dpai-positive">
                        ✓ Terverifikasi Kemenkes RI
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-9 pb-10 pt-4 max-[640px]:px-5 max-[640px]:pb-7">
                  <span className="grid size-12 place-items-center rounded-full bg-white text-dpai-info shadow-2xs">
                    <svg
                      aria-hidden="true"
                      className="size-5 fill-none stroke-current stroke-[1.8]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 4h14v16H5zM8 8h8M8 12h5M8 16h7" />
                    </svg>
                  </span>
                  <h3 className="mb-0 mt-5 font-display text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-dpai-info">
                    Akreditasi Paripurna LARS DHP
                  </h3>
                  <p className="mb-0 mt-3 max-w-[34rem] text-[1.02rem] leading-[1.6] text-dpai-ink">
                    Protokol keselamatan pasien, pencegahan infeksi, dan mutu
                    pelayanan klinis tertinggi yang terstandarisasi di seluruh
                    jaringan RS Bidadari.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 6. POLIKLINIK SPESIALIS SECTION (Using /home/siherdot/asset poli photos) */}
        <section
          id="poliklinik"
          className="border-t border-dpai-line bg-dpai-paper py-20 max-[760px]:py-14"
        >
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[82.625rem] max-[640px]:w-[calc(100%-1.5rem)]">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-dpai-caption font-bold tracking-[0.08em] text-dpai-violet uppercase">
                  16 Unit Rawat Jalan &amp; Diagnostik
                </span>
                <h2 className="mt-2 mb-0 font-display text-dpai-title-lg font-semibold tracking-dpai-display text-dpai-ink">
                  Poliklinik Spesialis Terpadu
                </h2>
              </div>
              <p className="m-0 max-w-md text-dpai-body-sm text-dpai-muted">
                Pilih poliklinik untuk melihat dokter spesialis yang bertugas
                atau langsung buat janji temu via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {POLIKLINIK_LIST.map((poli) => (
                <div
                  key={poli.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-dpai-line bg-white shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-dpai-popover"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dpai-desk">
                    <img
                      src={poli.gambar}
                      alt={poli.nama}
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <span
                      className="absolute top-3 left-3 rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-white shadow-xs"
                      style={{ backgroundColor: poli.warna }}
                    >
                      {poli.kategori}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="m-0 font-display text-[1.1rem] font-bold leading-snug text-dpai-ink">
                      {poli.nama}
                    </h3>
                    <p className="mt-2 mb-4 flex-1 text-dpai-caption leading-relaxed text-dpai-muted">
                      {poli.deskripsi}
                    </p>
                    {poli.unggulan && (
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {poli.unggulan.map((u) => (
                          <span
                            key={u}
                            className="rounded-md bg-dpai-paper px-2 py-0.5 font-mono text-[0.64rem] font-medium text-dpai-ink ring-1 ring-dpai-line/80"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto flex items-center gap-2 pt-2 border-t border-dpai-line/60">
                      <a
                        href="#dokter"
                        onClick={() => setFilterPoliDokter(poli.id)}
                        className="flex-1 rounded-lg bg-dpai-paper py-2 text-center text-dpai-caption font-semibold text-dpai-ink no-underline transition-colors hover:bg-dpai-desk"
                      >
                        Lihat Dokter
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setBookingPoli(poli.nama);
                          setBookingModalOpen(true);
                        }}
                        className="cursor-pointer rounded-lg bg-dpai-violet px-3 py-2 text-dpai-caption font-semibold text-white transition-colors hover:bg-dpai-violet-hover"
                      >
                        Daftar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. DIREKTORI DOKTER SPESIALIS & JADWAL PRAKTIK (Using /home/siherdot/asset doctor photos) */}
        <section
          id="dokter"
          className="border-t border-dpai-line bg-white py-20 max-[760px]:py-14"
        >
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[82.625rem] max-[640px]:w-[calc(100%-1.5rem)]">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-dpai-caption font-bold tracking-[0.08em] text-dpai-positive uppercase">
                  Tim Medis Ahli &amp; Berpengalaman
                </span>
                <h2 className="mt-2 mb-0 font-display text-dpai-title-lg font-semibold tracking-dpai-display text-dpai-ink">
                  Jadwal Praktik Dokter Spesialis
                </h2>
              </div>

              {/* Filter & Search Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <input
                  type="search"
                  value={searchDokter}
                  onChange={(e) => setSearchDokter(e.target.value)}
                  placeholder="Cari nama dokter / spesialis..."
                  className="min-h-10 w-64 rounded-xl border border-dpai-line bg-dpai-paper px-3.5 text-dpai-body-sm text-dpai-ink placeholder:text-dpai-muted focus:outline-2 focus:outline-dpai-violet max-[640px]:w-full"
                />
                <select
                  aria-label="Filter Poliklinik Dokter"
                  value={filterPoliDokter}
                  onChange={(e) => setFilterPoliDokter(e.target.value)}
                  className="min-h-10 cursor-pointer rounded-xl border border-dpai-line bg-dpai-paper px-3.5 text-dpai-body-sm font-medium text-dpai-ink focus:outline-2 focus:outline-dpai-violet max-[640px]:w-full"
                >
                  <option value="all">Semua Poliklinik</option>
                  {POLIKLINIK_LIST.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.nama}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDoctors.map((dok) => (
                <div
                  key={dok.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-dpai-line bg-dpai-paper/60 transition-all duration-200 hover:border-dpai-violet-line hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5 p-4 pb-3">
                    <img
                      src={dok.gambar}
                      alt={dok.nama}
                      loading="lazy"
                      className="size-16 shrink-0 rounded-2xl border border-dpai-line object-cover object-top bg-white shadow-2xs"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="inline-block rounded-md bg-dpai-violet-soft px-2 py-0.5 font-mono text-[0.62rem] font-bold text-dpai-violet-dark">
                        {dok.namaPoli}
                      </span>
                      <h3 className="mt-1 mb-0 truncate font-display text-[1rem] font-bold text-dpai-ink" title={dok.nama}>
                        {dok.nama}
                      </h3>
                      <p className="m-0 truncate text-dpai-caption font-medium text-dpai-muted">
                        {dok.spesialis}
                      </p>
                    </div>
                  </div>

                  <div className="mx-4 mb-3 flex-1 rounded-xl border border-dpai-line/80 bg-white p-3">
                    <span className="block font-mono text-[0.62rem] font-bold tracking-[0.06em] text-dpai-muted uppercase">
                      Jadwal Praktik
                    </span>
                    <ul className="mt-1.5 m-0 list-none space-y-1 p-0">
                      {dok.jadwal.map((j, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-between gap-2 text-dpai-caption"
                        >
                          <span className="font-semibold text-dpai-ink">
                            {j.hari}
                          </span>
                          <span className="font-mono text-[0.7rem] text-dpai-positive font-semibold">
                            {j.jam}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-4 pb-4">
                    <button
                      type="button"
                      onClick={() => {
                        setBookingPoli(`${dok.namaPoli} — ${dok.nama}`);
                        setBookingModalOpen(true);
                      }}
                      className="w-full cursor-pointer rounded-xl border border-dpai-line bg-white py-2 text-dpai-caption font-semibold text-dpai-ink transition-colors hover:border-dpai-violet hover:bg-dpai-violet hover:text-white"
                    >
                      Buat Janji Temu
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FASILITAS MEDIS & PAKET MEDICAL CHECK UP (MCU) */}
        <section
          id="fasilitas"
          className="border-t border-dpai-line bg-dpai-paper py-20 max-[760px]:py-14"
        >
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[82.625rem] max-[640px]:w-[calc(100%-1.5rem)]">
            <div className="mb-10 text-center">
              <span className="font-mono text-dpai-caption font-bold tracking-[0.08em] text-dpai-violet uppercase">
                Penunjang Medis 24 Jam &amp; Rawat Inap
              </span>
              <h2 className="mt-2 mb-0 font-display text-dpai-title-lg font-semibold tracking-dpai-display text-dpai-ink">
                Fasilitas Rumah Sakit &amp; Paket MCU
              </h2>
            </div>

            {/* Facility Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FASILITAS_LIST.map((fas) => (
                <div
                  key={fas.id}
                  className="overflow-hidden rounded-2xl border border-dpai-line bg-white shadow-2xs"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-dpai-desk">
                    <img
                      src={fas.gambar}
                      alt={fas.nama}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                    <span className="absolute top-2.5 right-2.5 rounded-full bg-dpai-ink/85 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold text-dpai-signal backdrop-blur-xs">
                      {fas.status}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-[0.64rem] font-semibold text-dpai-violet uppercase">
                      {fas.kategori}
                    </span>
                    <h3 className="mt-1 mb-1.5 font-display text-[1.02rem] font-bold text-dpai-ink">
                      {fas.nama}
                    </h3>
                    <p className="m-0 text-dpai-caption leading-relaxed text-dpai-muted">
                      {fas.deskripsi}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paket Medical Check Up (MCU) Promo Cards */}
            <div className="mt-14 rounded-2xl border border-dpai-violet-line bg-white p-8 shadow-xs max-[640px]:p-5">
              <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-dpai-positive-soft px-3 py-1 font-mono text-dpai-caption font-bold text-dpai-positive">
                    Diskon s/d 50% · Gratis Konsultasi Spesialis
                  </span>
                  <h3 className="mt-2 mb-0 font-display text-dpai-title font-bold text-dpai-ink">
                    Paket Medical Check Up (MCU) Terpadu
                  </h3>
                </div>
                <p className="m-0 max-w-md text-dpai-body-sm text-dpai-muted">
                  Deteksi dini risiko jantung, diabetes, kolesterol, fungsi
                  hati, dan ginjal dengan harga hemat.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {PAKET_MCU.map((pkt) => (
                  <div
                    key={pkt.nama}
                    className={`flex flex-col rounded-2xl border p-6 ${
                      pkt.populer
                        ? "border-dpai-violet bg-dpai-violet-soft/35 ring-1 ring-dpai-violet"
                        : "border-dpai-line bg-dpai-paper/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="font-display text-dpai-title-sm font-bold text-dpai-ink">
                        {pkt.nama}
                      </strong>
                      {pkt.populer && (
                        <span className="rounded-full bg-dpai-violet px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-white">
                          Terpopuler
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-extrabold text-dpai-violet-dark">
                        {pkt.hargaPromo}
                      </span>
                      <span className="font-mono text-dpai-caption text-dpai-muted line-through">
                        {pkt.hargaAwal}
                      </span>
                    </div>
                    <ul className="my-5 flex-1 list-none space-y-2 p-0">
                      {pkt.item.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-2 text-dpai-body-sm text-dpai-ink"
                        >
                          <span className="mt-0.5 text-dpai-positive font-bold">
                            ✓
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        setBookingPoli(`Medical Check Up — ${pkt.nama}`);
                        setBookingModalOpen(true);
                      }}
                      className="w-full cursor-pointer rounded-xl bg-dpai-ink py-2.5 text-dpai-caption font-semibold text-white transition-colors hover:bg-dpai-violet"
                    >
                      Pilih {pkt.nama}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9. BERITA & KEGIATAN + JARINGAN RS BIDADARI GROUP */}
        <section
          id="berita"
          className="border-t border-dpai-line bg-white py-20 max-[760px]:py-14"
        >
          <div className="mx-auto w-[calc(100%-3rem)] max-w-[82.625rem] max-[640px]:w-[calc(100%-1.5rem)]">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-dpai-caption font-bold tracking-[0.08em] text-dpai-violet uppercase">
                  Kabar Terbaru &amp; Edukasi Kesehatan
                </span>
                <h2 className="mt-2 mb-0 font-display text-dpai-title-lg font-semibold tracking-dpai-display text-dpai-ink">
                  Berita &amp; Kegiatan Rumah Sakit
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BERITA_LIST.map((b) => (
                <article
                  key={b.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-dpai-line bg-dpai-paper/50 transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-dpai-desk">
                    <img
                      src={b.gambar}
                      alt={b.judul}
                      loading="lazy"
                      className="size-full object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-dpai-violet px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-white">
                      {b.kategori}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <time className="font-mono text-dpai-caption text-dpai-muted">
                      {b.tanggal}
                    </time>
                    <h3 className="mt-1.5 mb-2 font-display text-[1.1rem] font-bold leading-snug text-dpai-ink">
                      {b.judul}
                    </h3>
                    <p className="m-0 flex-1 text-dpai-body-sm leading-relaxed text-dpai-muted">
                      {b.ringkasan}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Jaringan RS Bidadari Group */}
            <div className="mt-16">
              <h3 className="mb-5 font-display text-dpai-title-sm font-bold text-dpai-ink">
                Jaringan Rumah Sakit Bidadari Group (Sumatera Utara &amp; Aceh)
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {GRUP_RS_LIST.map((rs) => (
                  <div
                    key={rs.nama}
                    className="overflow-hidden rounded-xl border border-dpai-line bg-dpai-paper p-3"
                  >
                    <img
                      src={rs.gambar}
                      alt={rs.nama}
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-lg object-cover bg-white"
                    />
                    <strong className="mt-2.5 block font-display text-dpai-body-sm font-bold text-dpai-ink">
                      {rs.nama}
                    </strong>
                    <span className="mt-0.5 block text-dpai-caption text-dpai-muted">
                      {rs.kota}
                    </span>
                    <span className="mt-1.5 inline-block rounded-md bg-white px-2 py-0.5 font-mono text-[0.62rem] font-semibold text-dpai-violet ring-1 ring-dpai-line">
                      {rs.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 10. BOTTOM DARK CTA BANNER (Exact DesainPakeAI .dpai-landing-capability-cta) */}
            <div className="relative mt-16 overflow-hidden rounded-[1.25rem] bg-dpai-ink px-8 py-12 text-center text-white max-[640px]:rounded-2xl max-[640px]:px-5 max-[640px]:py-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-35"
                style={{
                  background:
                    "radial-gradient(circle at 20% 30%, #7438d0 0%, transparent 55%), radial-gradient(circle at 80% 70%, #46d695 0%, transparent 50%)",
                }}
              />
              <div className="relative z-[1] mx-auto max-w-[42rem]">
                <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 font-mono text-dpai-caption font-semibold text-dpai-signal">
                  Siap Melayani 24 Jam · BPJS &amp; Umum
                </span>
                <h3 className="mt-3 mb-0 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-dpai-display">
                  Jadwalkan Kunjungan Anda Hari Ini
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-dpai-body text-white/75">
                  Daftar rawat jalan tanpa antre lama atau hubungi Instalasi
                  Gawat Darurat (IGD) kami untuk penanganan darurat medis.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(true)}
                    className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-dpai-surface bg-dpai-violet px-6 text-dpai-body font-semibold text-white no-underline shadow-[inset_0_1px_0_#ffffff70,inset_0_-2px_0_#0000001f,0_0.75rem_2rem_rgba(139,92,246,0.3)] transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-dpai-violet-hover active:scale-[0.96]"
                  >
                    Daftar Rawat Jalan Online
                    <svg
                      aria-hidden="true"
                      className="size-4 fill-none stroke-current stroke-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
                    </svg>
                  </button>
                  <a
                    href={`https://wa.me/${RSUMB_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-dpai-surface border border-white/25 bg-white/10 px-6 text-dpai-body font-semibold text-white no-underline backdrop-blur-xs transition-colors hover:bg-white/20"
                  >
                    Chat WhatsApp ({RSUMB_INFO.telepon})
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-dpai-line bg-dpai-paper py-12 text-dpai-body-sm text-dpai-muted">
        <div className="mx-auto flex w-[calc(100%-3rem)] max-w-[82.625rem] flex-col justify-between gap-8 md:flex-row max-[640px]:w-[calc(100%-1.5rem)]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/logo-mahkota1.png"
                alt="Logo RSU Mahkota Bidadari"
                className="size-9 rounded-lg bg-white p-0.5 object-contain ring-1 ring-dpai-line"
              />
              <strong className="font-display text-dpai-title-sm font-bold text-dpai-ink">
                RSU Mahkota Bidadari
              </strong>
            </div>
            <p className="mt-3 text-dpai-caption leading-relaxed">
              {RSUMB_INFO.alamat}
            </p>
            <p className="mt-1 text-dpai-caption">
              <strong>Telp / WA:</strong> {RSUMB_INFO.telepon} ·{" "}
              <strong>IGD 24 Jam:</strong> {RSUMB_INFO.igd}
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <strong className="block font-mono text-dpai-caption font-bold text-dpai-ink uppercase">
                Layanan Utama
              </strong>
              <ul className="mt-2.5 m-0 list-none space-y-1.5 p-0 text-dpai-caption">
                <li>
                  <a href="#poliklinik" className="text-dpai-muted no-underline hover:text-dpai-ink">
                    16 Poliklinik Spesialis
                  </a>
                </li>
                <li>
                  <a href="#dokter" className="text-dpai-muted no-underline hover:text-dpai-ink">
                    34 Dokter Spesialis
                  </a>
                </li>
                <li>
                  <a href="#fasilitas" className="text-dpai-muted no-underline hover:text-dpai-ink">
                    Cathlab &amp; Hemodialisis
                  </a>
                </li>
                <li>
                  <a href="#fasilitas" className="text-dpai-muted no-underline hover:text-dpai-ink">
                    Paket Medical Check Up
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <strong className="block font-mono text-dpai-caption font-bold text-dpai-ink uppercase">
                Akreditasi &amp; Mitra
              </strong>
              <div className="mt-2.5 flex items-center gap-3">
                <img
                  src="/assets/paripurna.png"
                  alt="Paripurna"
                  className="h-11 w-auto object-contain"
                />
                <img
                  src="/assets/LARS2.png"
                  alt="LARS DHP"
                  className="h-11 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 w-[calc(100%-3rem)] max-w-[82.625rem] border-t border-dpai-line pt-6 text-center font-mono text-dpai-caption">
          © {new Date().getFullYear()} {RSUMB_INFO.nama} ({RSUMB_INFO.grup}). Hak Cipta Dilindungi.
        </div>
      </footer>

      {/* MODAL PENDAFTARAN ONLINE */}
      {bookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-booking-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-dpai-ink/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-dpai-line bg-white shadow-dpai-popover">
            <div className="flex items-center justify-between border-b border-dpai-line bg-dpai-paper px-6 py-4">
              <div>
                <span className="font-mono text-[0.65rem] font-bold text-dpai-violet uppercase">
                  Pendaftaran Tanpa Antre
                </span>
                <h3
                  id="modal-booking-title"
                  className="m-0 font-display text-dpai-title-sm font-bold text-dpai-ink"
                >
                  Daftar Rawat Jalan Online
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setBookingModalOpen(false)}
                className="cursor-pointer rounded-lg p-1.5 text-dpai-muted hover:bg-dpai-desk hover:text-dpai-ink"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4 p-6">
              <div>
                <label className="mb-1 block text-dpai-caption font-semibold text-dpai-ink">
                  Nama Lengkap Pasien (Sesuai KTP)
                </label>
                <input
                  type="text"
                  required
                  value={bookingNama}
                  onChange={(e) => setBookingNama(e.target.value)}
                  placeholder="Contoh: Budi Santoso"
                  className="w-full rounded-xl border border-dpai-line bg-dpai-paper px-3.5 py-2.5 text-dpai-body-sm text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                />
              </div>

              <div>
                <label className="mb-1 block text-dpai-caption font-semibold text-dpai-ink">
                  Nomor WhatsApp Aktif
                </label>
                <input
                  type="tel"
                  required
                  value={bookingTelepon}
                  onChange={(e) => setBookingTelepon(e.target.value)}
                  placeholder="Contoh: 081269378222"
                  className="w-full rounded-xl border border-dpai-line bg-dpai-paper px-3.5 py-2.5 text-dpai-body-sm text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                />
              </div>

              <div>
                <label className="mb-1 block text-dpai-caption font-semibold text-dpai-ink">
                  Poliklinik / Layanan Tujuan
                </label>
                <input
                  type="text"
                  required
                  value={bookingPoli}
                  onChange={(e) => setBookingPoli(e.target.value)}
                  className="w-full rounded-xl border border-dpai-line bg-dpai-paper px-3.5 py-2.5 text-dpai-body-sm text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                />
              </div>

              <div>
                <label className="mb-1 block text-dpai-caption font-semibold text-dpai-ink">
                  Rencana Tanggal Kunjungan
                </label>
                <input
                  type="date"
                  value={bookingTanggal}
                  onChange={(e) => setBookingTanggal(e.target.value)}
                  className="w-full rounded-xl border border-dpai-line bg-dpai-paper px-3.5 py-2.5 text-dpai-body-sm text-dpai-ink focus:outline-2 focus:outline-dpai-violet"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="cursor-pointer rounded-xl border border-dpai-line px-4 py-2.5 text-dpai-caption font-semibold text-dpai-muted hover:bg-dpai-paper"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="cursor-pointer rounded-xl bg-dpai-violet px-5 py-2.5 text-dpai-caption font-semibold text-white shadow-dpai-action hover:bg-dpai-violet-hover"
                >
                  Kirim Pendaftaran via WA
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
