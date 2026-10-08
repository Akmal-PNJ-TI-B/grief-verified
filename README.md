# Katalog UMKM + Order WhatsApp

Template workshop vibe coding Creative Hub App Talent (CHAT) 2026. Repo ini berisi tampilan aplikasi katalog UMKM; tugasmu merangkainya menjadi sistem utuh dengan bantuan AI: database, login admin, keamanan, dan pemesanan lewat WhatsApp.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FUSERNAME%2Fkatalog-umkm)

> Untuk pengelola repo: ganti `USERNAME` pada link tombol di atas dengan akun GitHub pemilik repo template ini.

## Langkah awal

1. **Salin repo ke akun GitHub-mu.** Klik tombol **Deploy with Vercel** di atas. Vercel akan membuat repo baru di akun GitHub-mu dan langsung men-deploy-nya. Setelah selesai, buka link Vercel-mu: katalog tampil dengan data contoh.
2. **Buat proyek Supabase.** Masuk ke [supabase.com](https://supabase.com) dengan akun GitHub, lalu buat proyek baru. Simpan password database di tempat aman.
3. **Siapkan database.** Di Supabase, buka **SQL Editor**, tempel seluruh isi `docs/schema.sql`, lalu klik **Run**. Tabel `produk` beserta data awal akan terbentuk.
4. **Siapkan akun admin.** Ikuti panduan akun admin yang dibagikan mentor. Setelah itu matikan pendaftaran akun baru di **Authentication > Sign In / Providers**.
5. **Isi environment variable di Vercel.** Buka proyekmu di Vercel > **Settings > Environment Variables**, lalu isi tiga variabel dari `.env.example`. Nilainya ada di Supabase > **Project Settings > API**. Setelah itu lakukan **Redeploy**.
6. **Clone repo ke laptop.**

   ```bash
   git clone https://github.com/<akunmu>/<nama-repo>.git
   cd <nama-repo>
   npm install
   ```

7. **Buat file `.env.local`.** Salin `.env.example` menjadi `.env.local`, lalu isi dengan nilai yang sama seperti di Vercel.
8. **Jalankan di laptop.**

   ```bash
   npm run dev
   ```

   Buka `http://localhost:3000`.

## Alur kerja

Kerjakan satu user story setiap kali, lalu simpan dan kirim perubahan:

```bash
git add .
git commit -m "US-01: katalog dari database"
git push
```

Setiap `git push`, Vercel otomatis men-deploy versi terbaru. Cek hasilnya di link Vercel-mu.

Urutan yang disarankan: US-01, US-02, US-03, US-04, US-05, US-06, lalu fitur bonus. Daftar lengkap ada di `docs/user-stories.md`.

## Status Pengerjaan Fitur (User Story)

### Fitur Wajib (Selesai)
- [x] **US-01 Katalog dari database:** Menampilkan semua produk dari tabel `produk` di Supabase di sisi server secara dinamis.
- [x] **US-02 Detail produk:** Menampilkan detail satu produk di `/produk/[id]` dari database Supabase, dan menampilkan halaman 404 jika produk tidak ditemukan.
- [x] **US-03 Pesan via WhatsApp:** Tombol "Pesan via WhatsApp" membuka tautan WhatsApp ke nomor toko dengan pesan otomatis berisi nama dan harga produk dalam format rupiah di tab baru.
- [x] **US-04 Login admin:** Login pemilik toko menggunakan Supabase Auth (`@supabase/ssr` & cookies) diproses di Server Action, dilengkapi tombol Keluar yang mengakhiri sesi.
- [x] **US-05 Ganti password:** Fitur ganti password admin di `/admin/password` diproses di Server Action dengan validasi server (minimal 8 karakter dan konfirmasi cocok).
- [x] **US-06 Proteksi halaman admin:** Memproteksi seluruh rute `/admin` menggunakan `proxy.js` di root proyek dan memverifikasi sesi login admin pada Server Action mutasi.

### Fitur Bonus
- [ ] **US-07:** List produk di halaman admin dari database
- [ ] **US-08:** Tambah produk (harus terkunci login)
- [ ] **US-09:** Ubah produk (harus terkunci login)
- [ ] **US-10:** Hapus produk (harus terkunci login)
- [ ] **US-11:** Filter kategori atau pencarian
- [ ] **US-12:** Pilih jumlah atau varian
- [ ] **US-13:** Bisa di-install di HP (PWA)
- [ ] **US-14:** Deskripsi produk dibuat AI

## Isi repo

| File atau folder | Isi |
| --- | --- |
| `AGENTS.md` | Aturan untuk AI agent, dibaca sebelum setiap prompt |
| `DESIGN.md` | Panduan warna, huruf, dan komponen |
| `PROMPTS.md` | Jurnal prompt, wajib diisi |
| `docs/` | Problem statement, PRD, user story, rancangan teknis, skema database, checklist |
| `lib/toko.js` | Nama toko, nomor WhatsApp, alamat, jam buka |
| `lib/supabase/` | Koneksi Supabase server (koneksi server & sesi admin) |
| `proxy.js` | Proteksi rute admin (Next.js 16) |
| `app/` | Halaman aplikasi & Server Actions |
| `components/` | Komponen tampilan |

## Menyesuaikan dengan usahamu

- Identitas toko: ubah `lib/toko.js`.
- Warna: ubah bagian `@theme` di `app/globals.css` (lihat `DESIGN.md`).
- Produk: ubah langsung di Supabase > **Table Editor > produk**.

## Aturan penting

- Jangan menyimpan kunci atau password di kode, dan jangan push file `.env.local`.
- Jangan memberi awalan `NEXT_PUBLIC_` pada environment variable.
- Isi `PROMPTS.md` setiap menyelesaikan fitur.

## Sebelum mengumpulkan

1. Jalankan semua poin di `docs/checklist-keamanan.md` dan `docs/checklist-pengujian.md` pada link Vercel.
2. Lengkapi bagian di bawah ini.
3. Push perubahan terakhir sebelum batas waktu.

## Tentang aplikasi ini

- **Nama usaha:** Nasi Cumi Hitam Madura Pak Kris
- **Pembuat:** 
- **Link aplikasi:** 
- **Fitur yang diselesaikan:** US-01 sampai US-06 (Seluruh fitur wajib selesai)
- **Fitur bonus yang dikerjakan:**
  - [ ] US-07 List produk di halaman admin dari database
  - [ ] US-08 Tambah produk (harus terkunci login)
  - [ ] US-09 Ubah produk (harus terkunci login)
  - [ ] US-10 Hapus produk (harus terkunci login)
  - [ ] US-11 Filter kategori atau pencarian
  - [ ] US-12 Pilih jumlah atau varian
  - [ ] US-13 Bisa di-install di HP (PWA)
  - [ ] US-14 Deskripsi produk dibuat AI
