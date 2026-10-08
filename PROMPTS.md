# Jurnal Prompt

Catat prompt penting selama membangun aplikasi: apa yang kamu minta, hasilnya, dan perbaikan yang dilakukan. Beri tanda **[SENDIRI]** untuk prompt yang kamu tulis sendiri (bukan dari lembar kerja).

## US-01 Katalog dari database

**Prompt:**
Baca AGENTS.md dan docs/user-stories.md bagian US-01.

Ubah app/page.jsx supaya daftar produk diambil dari tabel "produk" di Supabase, di sisi server, memakai SUPABASE_URL dan SUPABASE_SECRET_KEY dari environment variable. Buat koneksi Supabase untuk server di folder lib/supabase.

Tampilkan produk dengan komponen KartuProduk yang sudah ada, tanpa mengubah tampilannya. Kalau gagal mengambil data, tampilkan pesan error yang jelas di halaman. Kalau tabel kosong, tampilkan tulisan "Belum ada produk". Hapus CatatanBelumAktif dari halaman ini.
**Hasil:**
Viewed user-stories.md:1-100
Viewed rancangan-teknis.md:1-69
Viewed schema.sql:1-49
Viewed DESIGN.md:1-52
Viewed page.jsx:1-37
Viewed KartuProduk.jsx:1-25
Ran command: List lib and app directory (`Get-ChildItem -Path lib, app`)
Viewed package.json:1-25
Viewed .env.example:1-14
Viewed .env.local:1-13
Ran command: List components (`Get-ChildItem -Path components`)
Ran command: List docs directory (`Get-ChildItem -Path docs`)
Viewed checklist-keamanan.md:1-14
Viewed checklist-pengujian.md:1-27
Viewed page.jsx:1-41
Ran command: List admin files (`Get-ChildItem -Path app/admin -Recurse`)
Viewed page.jsx:1-28
Ran command: Check lib/supabase path (`Test-Path lib/supabase`)
Ran command: Search for supabase references (`Select-String -Path "docs/*", "app/*", "components/*", "lib/*" -Pattern "supabase" -ErrorAction SilentlyContinue`)
Viewed problem-statement.md:1-83
Viewed skema-database.md:1-27
Viewed PRD.md:1-60
Ran command: Test Supabase connection (`node -e "
const { createClient } = require('@supabase/supabase-js');
require('fs');
const env = require('fs').readFileSync('.env.local', 'utf8');
const lines = env.split('\n');
let url = '', key = '';
for (const line of lines) {
  if (line.startsWith('SUPABASE_URL=')) url = line.split('=')[1].trim();
  if (line.startsWith('SUPABASE_SECRET_KEY=')) key = line.split('=')[1].trim();
}
console.log('Testing Supabase with URL:', url);
const supabase = createClient(url, key);
supabase.from('produk').select('*').then(res => {
  console.log('Result:', JSON.stringify(res, null, 2));
}).catch(err => {
  console.error('Error:', err);
});
"`)
Viewed data-contoh.js:1-60
Viewed CatatanBelumAktif.jsx:1-10
Viewed TabelProduk.jsx:1-47
Viewed page.jsx:1-29
Viewed globals.css:1-34
Viewed Input.jsx:1-16
Viewed Tombol.jsx:1-26
Ran command: Search for 'Belum ada' string (`Select-String -Path "app/**/*", "components/**/*" -Pattern "Belum ada"`)
Ran command: Search for 'Belum ada' (`Get-ChildItem -Path app, components -Recurse -File | Select-String -Pattern "Belum ada"`)
Ran command: Check doc references for caching (`Select-String -Path "docs/*", "AGENTS.md" -Pattern "cache|dynamic|revalidate"`)
Viewed layout.jsx:1-30
Created server.js
Created index.js
Viewed page.jsx:1-37
Created page.jsx
Ran command: Next.js build test (`npm run build`)

Saya sedang menjalankan proses build (`npm run build`) untuk memverifikasi perubahan dan koneksi Supabase. Saya akan memeriksa hasilnya segera setelah selesai.

Checked task Next.js build test
Timed 10 seconds

Proses build sedang berjalan. Saya menunggu hasil kompilasi.

Checked task Next.js build test
Timed 15 seconds

Masih menunggu build selesai.

Checked task Next.js build test

Menunggu proses build selesai.

Created server.js
Ran command: Run npm run build (`npm run build`)

Menjalankan ulang `npm run build` setelah perbaikan import. Sedang menunggu hasil build.

Timed 20 seconds
Viewed page.jsx:1-60
Edited page.jsx
Ran command: Build Next.js with force-dynamic (`npm run build`)
Ran command: Start Next.js production server on port 3005 (`npx next start -p 3005`)
Ran command: Fetch homepage from server (`node -e "fetch('http://localhost:3005').then(r => r.text()).then(t => console.log('Length:', t.length, 'Contains Kopi:', t.includes('Kopi Bubuk Robusta'), 'Contains Belum ada produk:', t.includes('Belum ada produk'), 'Contains CatatanBelumAktif:', t.includes('Masih data contoh'))).catch(e => console.error(e))"`)
Killed task Start Next.js production server on port 3005

Pekerjaan untuk **US-01: Katalog dari database** telah selesai.

### File yang Dibuat dan Diubah
1. [`lib/supabase/server.js`](file:///c:/Users/RENTAL/Documents/grief-verified/lib/supabase/server.js)
   - Membuat inisialisasi client Supabase di sisi server menggunakan `SUPABASE_URL` dan `SUPABASE_SECRET_KEY` dari environment variable.
2. [`lib/supabase/index.js`](file:///c:/Users/RENTAL/Documents/grief-verified/lib/supabase/index.js)
   - Mengekspor koneksi Supabase server agar mudah diimpor dari folder `@/lib/supabase`.
3. [`app/page.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/app/page.jsx)
   - Mengubah halaman katalog menjadi Server Component async.
   - Mengambil data produk dari tabel `produk` di Supabase secara dinamis (`force-dynamic`).
   - Menampilkan produk menggunakan komponen [`KartuProduk`](file:///c:/Users/RENTAL/Documents/grief-verified/components/KartuProduk.jsx) bawaan tanpa mengubah tampilannya.
   - Menampilkan pesan error jika query database gagal.
   - Menampilkan teks `"Belum ada produk"` jika tabel kosong.
   - Menghapus komponen `CatatanBelumAktif` dan referensi ke `data-contoh.js`.

---

### Cara Mengetes
1. Jalankan aplikasi secara lokal:
   ```bash
   npm run dev
   ```
2. Buka `http://localhost:3000` di browser:
   - Pastikan produk dari Supabase (seperti *Kopi Bubuk Robusta*, *Keripik Singkong Balado*, dll.) tampil dengan foto, kategori, nama, dan harga rupiah.
   - Pastikan komponen `CatatanBelumAktif` sudah tidak muncul di halaman.
3. Buka Network Tab di DevTools browser (F12) lalu muat ulang halaman:
   - Pastikan tidak ada request langsung ke domain `supabase.co` dari browser (semua data diambil di server).
**Perbaikan:**

## US-02 Detail produk

**Prompt:**
Baca docs/user-stories.md bagian US-02.

Ubah app/produk/[id]/page.jsx supaya mengambil satu produk dari tabel "produk" di Supabase berdasarkan id di URL, di sisi server, memakai koneksi Supabase yang sudah dibuat di lib/supabase. Kalau produk tidak ditemukan, panggil notFound(). Jangan ubah tampilannya. Hapus CatatanBelumAktif dari halaman ini, tapi biarkan tombol WhatsApp.
**Hasil:**
Viewed page.jsx:1-41
Viewed not-found.jsx:1-12
Created page.jsx
Ran command: Build project for US-02 verification (`npm run build`)
Ran command: Start Next.js server on port 3006 (`npx next start -p 3006`)
Ran command: Test product detail endpoints (`node -e "
async function test() {
  const r1 = await fetch('http://localhost:3006/produk/1');
  const t1 = await r1.text();
  console.log('Produk 1 status:', r1.status);
  console.log('Produk 1 has Kopi:', t1.includes('Kopi Bubuk Robusta'));
  console.log('Produk 1 has CatatanBelumAktif:', t1.includes('Tombol pesan belum berfungsi'));
  console.log('Produk 1 has WhatsApp button:', t1.includes('Pesan via WhatsApp'));

  const r2 = await fetch('http://localhost:3006/produk/9999');
  const t2 = await r2.text();
  console.log('Produk 9999 status:', r2.status);
  console.log('Produk 9999 has not found:', t2.includes('Halaman tidak ditemukan'));

  const r3 = await fetch('http://localhost:3006/produk/abc');
  const t3 = await r3.text();
  console.log('Produk abc status:', r3.status);
  console.log('Produk abc has not found:', t3.includes('Halaman tidak ditemukan'));
}
test();
"`)
Killed task Start Next.js server on port 3006

Pekerjaan untuk **US-02: Detail produk** telah selesai.

### File yang Diubah
- [`app/produk/[id]/page.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/app/produk/%5Bid%5D/page.jsx)
  - Mengambil data produk dari tabel `produk` di Supabase berdasarkan parameter `id` URL di sisi server menggunakan `createClientServer()` dari `lib/supabase/server`.
  - Memanggil `notFound()` jika produk tidak ditemukan di database atau jika parameter `id` tidak valid.
  - Mempertahankan tampilan, struktur elemen, dan tombol [`TombolWhatsApp`](file:///c:/Users/RENTAL/Documents/grief-verified/components/TombolWhatsApp.jsx).
  - Menghapus komponen `CatatanBelumAktif` dan referensi ke `data-contoh.js`.

---

### Cara Mengetes
1. Jalankan server lokal jika belum berjalan:
   ```bash
   npm run dev
   ```
2. Buka salah satu halaman produk yang ada di database, misalnya:
   - `http://localhost:3000/produk/1`
   - Pastikan informasi produk (foto, kategori, nama, harga rupiah, dan deskripsi) tampil dengan benar.
   - Pastikan tombol "Pesan via WhatsApp" tetap ada dan komponen `CatatanBelumAktif` sudah hilang.
3. Buka halaman produk dengan ID yang tidak ada atau ID acak, misalnya:
   - `http://localhost:3000/produk/9999`
   - Pastikan halaman menampilkan tampilan *"Halaman tidak ditemukan"* (404).
**Perbaikan:**

## US-03 Pesan via WhatsApp

**Prompt:**
Baca docs/rancangan-teknis.md bagian "Pesan WhatsApp (US-03)".

Ubah components/TombolWhatsApp.jsx menjadi tautan yang membuka https://wa.me/ ke nomor di lib/toko.js, dengan pesan otomatis berisi nama dan harga produk dalam format rupiah. Pesan di-encode dengan encodeURIComponent dan dibuka di tab baru. Pertahankan tampilan tombolnya. Hapus CatatanBelumAktif yang menyebut US-03 di halaman detail produk.
**Hasil:**
Viewed toko.js:1-10
Viewed format.js:1-8
Viewed TombolWhatsApp.jsx:1-13
Viewed PROMPTS.md:1-172
Viewed page.jsx:1-55
Created TombolWhatsApp.jsx
Ran command: Build project for US-03 (`npm run build`)
Ran command: Start Next.js server on port 3007 (`npx next start -p 3007`)
Ran command: Verify WhatsApp link on /produk/1 (`node -e "
fetch('http://localhost:3007/produk/1')
  .then(r => r.text())
  .then(t => {
    const waMatch = t.match(/href=\"(https:\/\/wa\.me\/[^\"]+)\"/);
    console.log('WhatsApp Link:', waMatch ? waMatch[1] : 'NOT FOUND');
    console.log('Target _blank:', t.includes('target=\"_blank\"'));
    console.log('Rel noopener:', t.includes('rel=\"noopener noreferrer\"'));
    console.log('Button text:', t.includes('Pesan via WhatsApp'));
    console.log('CatatanBelumAktif present:', t.includes('Tombol pesan belum berfungsi'));
  });
"`)
Ran command: Test WhatsApp link output (`node -e 'fetch("http://localhost:3007/produk/1").then(r => r.text()).then(t => { console.log("Has wa.me:", t.includes("wa.me")); console.log("Has blank:", t.includes("_blank")); console.log("Has Catatan:", t.includes("Tombol pesan belum berfungsi")); })'`)
Ran command: Fetch /produk/1 HTML (`curl.exe -s http://localhost:3007/produk/1`)
Killed task Start Next.js server on port 3007

Pekerjaan untuk **US-03: Pesan via WhatsApp** telah selesai.

### File yang Diubah
- [`components/TombolWhatsApp.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/components/TombolWhatsApp.jsx)
  - Mengubah elemen `<button>` menjadi elemen tautan `<a>` dengan atribut `target="_blank"` dan `rel="noopener noreferrer"`.
  - Mengarahkan tautan ke format `https://wa.me/<nomor>?text=<pesan>` menggunakan `nomorWhatsApp` dari [`lib/toko.js`](file:///c:/Users/RENTAL/Documents/grief-verified/lib/toko.js).
  - Pesan otomatis diformat dengan nama dan harga produk dalam format rupiah ([`lib/format.js`](file:///c:/Users/RENTAL/Documents/grief-verified/lib/format.js)) dan di-encode menggunakan `encodeURIComponent`.
  - Mempertahankan tampilan dan kelas styling tombol asli.
- [`app/produk/[id]/page.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/app/produk/%5Bid%5D/page.jsx)
  - Memastikan komponen `CatatanBelumAktif` yang menyebutkan US-03 sudah tidak ada di halaman detail produk.

---

### Cara Mengetes
1. Jalankan aplikasi secara lokal jika belum berjalan:
   ```bash
   npm run dev
   ```
2. Buka halaman detail salah satu produk, misalnya `http://localhost:3000/produk/1`.
3. Klik tombol **"Pesan via WhatsApp"**:
   - Pastikan tab baru terbuka menuju alamat `https://wa.me/628559901167?text=...`.
   - Pastikan teks pesan WhatsApp otomatis terisi nama produk dan harganya, contoh:
     `Halo, saya ingin memesan Kopi Bubuk Robusta 250 g (Rp 45.000).`
**Perbaikan:**

## US-04 Login admin

**Prompt:**
Baca AGENTS.md bagian aturan keamanan dan docs/user-stories.md bagian US-04.

Buat login admin memakai Supabase Auth (email dan password) dengan @supabase/ssr dan cookie, memakai SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY. Login diproses dengan Server Action di app/admin/actions.js dan disambungkan ke form di app/admin/login/page.jsx. Login berhasil diarahkan ke /admin; login gagal menampilkan pesan error yang jelas di halaman login. Buat juga tombol "Keluar" di components/NavAdmin.jsx berfungsi: mengakhiri sesi lalu kembali ke /admin/login. Jangan ubah tampilan. Hapus CatatanBelumAktif dari halaman login.
**Hasil:**
Ran command: Inspect @supabase/ssr (`node -e "
const ssr = require('@supabase/ssr');
console.log('SSR exports:', Object.keys(ssr));
"`)
Ran command: Read @supabase/ssr types (`node -e "
const fs = require('fs');
const pkg = require('./node_modules/@supabase/ssr/package.json');
console.log('main:', pkg.main, 'types:', pkg.types);
const dts = fs.readFileSync('./node_modules/@supabase/ssr/dist/index.d.ts', 'utf8');
console.log(dts.slice(0, 1000));
"`)
Ran command: Read module index.d.ts (`node -e "
const fs = require('fs');
const dts = fs.readFileSync('./node_modules/@supabase/ssr/dist/module/index.d.ts', 'utf8');
console.log(dts.slice(0, 1000));
"`)
Ran command: Read createServerClient.d.ts (`node -e "
const fs = require('fs');
const dts = fs.readFileSync('./node_modules/@supabase/ssr/dist/module/createServerClient.d.ts', 'utf8');
console.log(dts);
"`)
Viewed page.jsx:1-29
Viewed NavAdmin.jsx:1-19
Ran command: Search for use client (`Get-ChildItem -Path app, components -Recurse -File | Select-String -Pattern "use client"`)
Viewed page.jsx:1-43
Ran command: Check Supabase Auth users (`node -e "
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
let url = '', secret = '', pub = '';
for (const line of env.split('\n')) {
  if (line.startsWith('SUPABASE_URL=')) url = line.split('=')[1].trim();
  if (line.startsWith('SUPABASE_SECRET_KEY=')) secret = line.split('=')[1].trim();
  if (line.startsWith('SUPABASE_PUBLISHABLE_KEY=')) pub = line.split('=')[1].trim();
}
const adminClient = createClient(url, secret);
adminClient.auth.admin.listUsers().then(({ data, error }) => {
  if (error) console.error('List users error:', error);
  else console.log('Users count:', data.users.length, 'Users:', data.users.map(u => ({ id: u.id, email: u.email })));
});
"`)
Created server.js
Created actions.js
Created page.jsx
Created NavAdmin.jsx
Ran command: Build project for US-04 (`npm run build`)
Ran command: Start Next.js server on port 3008 (`npx next start -p 3008`)
Ran command: Test login page HTML (`node -e "
async function test() {
  const res = await fetch('http://localhost:3008/admin/login');
  const text = await res.text();
  console.log('Login page status:', res.status);
  console.log('Contains Masuk admin:', text.includes('Masuk admin'));
  console.log('Contains CatatanBelumAktif:', text.includes('Login belum berfungsi'));
  console.log('Contains Email input:', text.includes('name=\"email\"'));
  console.log('Contains Password input:', text.includes('name=\"password\"'));
  console.log('Contains Masuk button:', text.includes('Masuk'));
}
test();
"`)
Created test_login.mjs
Ran command: Run test_login.mjs (`node "C:\Users\RENTAL\.gemini\antigravity\brain\5b6ff0b0-0fe0-4311-91fe-f52deee8f8a1\scratch\test_login.mjs"`)
Created test_action.mjs
Ran command: Run test_action.mjs (`node "C:\Users\RENTAL\.gemini\antigravity\brain\5b6ff0b0-0fe0-4311-91fe-f52deee8f8a1\scratch\test_action.mjs"`)
Ran command: Test wrong credentials on Supabase (`node --input-type=module -e "
import { readFileSync } from 'fs';
import { createServerClient } from '@supabase/ssr';

const env = readFileSync('.env.local', 'utf8');
for (const line of env.split('\n')) {
  const [k, ...v] = line.split('=');
  if (k && v.length) process.env[k.trim()] = v.join('=').trim();
}

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_PUBLISHABLE_KEY;

const cookiesStore = new Map();
const supabase = createServerClient(url, key, {
  cookies: {
    getAll() {
      return Array.from(cookiesStore.entries()).map(([name, value]) => ({ name, value }));
    },
    setAll(cookiesToSet) {
      cookiesToSet.forEach(({ name, value }) => cookiesStore.set(name, value));
    }
  }
});

async function run() {
  console.log('Testing wrong credentials...');
  const res1 = await supabase.auth.signInWithPassword({
    email: 'wrong@example.com',
    password: 'wrongpassword'
  });
  console.log('Wrong credentials error message:', res1.error ? res1.error.message : 'no error');
}

run().catch(console.error);
"`)
Killed task Start Next.js server on port 3008

Pekerjaan untuk **US-04: Login admin** telah selesai.

### File yang Dibuat dan Diubah
1. [`lib/supabase/server.js`](file:///c:/Users/RENTAL/Documents/grief-verified/lib/supabase/server.js)
   - Menambahkan fungsi `createClientSesi` yang menggunakan `createServerClient` dari `@supabase/ssr`, `cookies` dari `next/headers`, serta `SUPABASE_URL` dan `SUPABASE_PUBLISHABLE_KEY` untuk mengelola sesi admin (autentikasi dan cookie login).
2. [`app/admin/actions.js`](file:///c:/Users/RENTAL/Documents/grief-verified/app/admin/actions.js)
   - Membuat Server Action `login` (alias `masuk`) yang memvalidasi input email/password, melakukan `signInWithPassword` melalui Supabase Auth, menampilkan pesan error jika gagal, dan mengarahkan ke `/admin` jika berhasil.
   - Membuat Server Action `keluar` (alias `logout`) yang memanggil `signOut()` dan mengarahkan kembali ke `/admin/login`.
3. [`app/admin/login/page.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/app/admin/login/page.jsx)
   - Menyambungkan form login ke Server Action menggunakan `useActionState`.
   - Menampilkan pesan error yang jelas jika kredensial salah atau gagal login.
   - Menghapus komponen `CatatanBelumAktif`.
   - Mempertahankan tata letak dan kelas tampilan asli.
4. [`components/NavAdmin.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/components/NavAdmin.jsx)
   - Menghubungkan tombol "Keluar" ke Server Action `keluar` menggunakan form action server tanpa mengubah styling tampilan.

---

### Cara Mengetes
1. Jalankan aplikasi secara lokal jika belum berjalan:
   ```bash
   npm run dev
   ```
2. Buka `http://localhost:3000/admin/login` di browser:
   - Pastikan komponen `CatatanBelumAktif` sudah tidak ada di halaman login.
3. Uji login gagal:
   - Masukkan email atau password yang salah, lalu klik **Masuk**.
   - Pastikan muncul pesan error yang jelas (misalnya *"Email atau password salah. Silakan coba lagi."*).
4. Uji login berhasil:
   - Masukkan email dan password akun admin Supabase yang valid, lalu klik **Masuk**.
   - Browser akan diarahkan ke halaman `/admin`.
5. Uji tombol "Keluar":
   - Pada navigasi admin di `/admin`, klik tombol **Keluar**.
   - Sesi akan diakhiri dan browser akan dialihkan kembali ke `/admin/login`.
**Perbaikan:**

## US-05 Ganti password

**Prompt:**
Baca docs/user-stories.md bagian US-05.

Buat Server Action ganti password di app/admin/actions.js untuk admin yang sedang login, memakai Supabase Auth. Validasi di server: password baru minimal 8 karakter dan harus sama dengan konfirmasi. Tampilkan pesan berhasil atau pesan error yang jelas di halaman. Sambungkan ke form di app/admin/password/page.jsx tanpa mengubah tampilannya. Hapus CatatanBelumAktif dari halaman ini.
**Hasil:**
Viewed page.jsx:1-43
Created actions.js
Created page.jsx
Ran command: Build project for US-05 (`npm run build`)
Ran command: Start Next.js server on port 3009 (`npx next start -p 3009`)
Created test_password.mjs
Ran command: Run test_password.mjs (`node "C:\Users\RENTAL\.gemini\antigravity\brain\5b6ff0b0-0fe0-4311-91fe-f52deee8f8a1\scratch\test_password.mjs"`)
Ran command: Test gantiPassword validations (`node --input-type=module -e "
import { gantiPassword } from './app/admin/actions.js';

async function testValidation() {
  const fd1 = new FormData();
  fd1.append('password_baru', '12345');
  fd1.append('konfirmasi_password', '12345');
  const res1 = await gantiPassword(null, fd1);
  console.log('Short password result:', res1);

  const fd2 = new FormData();
  fd2.append('password_baru', '12345678');
  fd2.append('konfirmasi_password', '12345679');
  const res2 = await gantiPassword(null, fd2);
  console.log('Mismatch password result:', res2);
}

testValidation().catch(console.error);
"`)
Killed task Start Next.js server on port 3009

Pekerjaan untuk **US-05: Ganti password** telah selesai.

### File yang Diubah
1. [`app/admin/actions.js`](file:///c:/Users/RENTAL/Documents/grief-verified/app/admin/actions.js)
   - Menambahkan Server Action `gantiPassword` (alias `updatePassword`).
   - Melakukan validasi di server: memastikan kolom terisi, password baru minimal 8 karakter, dan password baru cocok dengan konfirmasi password.
   - Memeriksa sesi admin yang sedang login (`supabase.auth.getUser()`) sebelum melakukan mutasi data sesuai aturan keamanan.
   - Memperbarui password menggunakan Supabase Auth (`supabase.auth.updateUser({ password })`).
   - Mengembalikan pesan sukses atau pesan error yang jelas.
2. [`app/admin/password/page.jsx`](file:///c:/Users/RENTAL/Documents/grief-verified/app/admin/password/page.jsx)
   - Menyambungkan form ke Server Action `gantiPassword` menggunakan `useActionState`.
   - Menampilkan notifikasi pesan berhasil (`state.success`) atau pesan error (`state.error`) dengan token desain Tailwind yang konsisten.
   - Menghapus komponen `CatatanBelumAktif` tanpa mengubah tata letak form dan navigasi.

---

### Cara Mengetes
1. Jalankan aplikasi secara lokal:
   ```bash
   npm run dev
   ```
2. Buka `http://localhost:3000/admin/login`, lalu login dengan kredensial admin yang valid.
3. Setelah masuk, buka menu atau halaman `http://localhost:3000/admin/password`:
   - Pastikan komponen `CatatanBelumAktif` sudah tidak ada di halaman ini.
4. Uji validasi error:
   - Masukkan password baru kurang dari 8 karakter (misal: `12345`), klik **Simpan password** -> Muncul pesan error *"Password baru minimal 8 karakter."*
   - Masukkan password baru minimal 8 karakter tetapi konfirmasinya berbeda, klik **Simpan password** -> Muncul pesan error *"Password baru dan konfirmasi password tidak sama."*
5. Uji ganti password berhasil:
   - Masukkan password baru yang valid (minimal 8 karakter) dan konfirmasi yang sama, klik **Simpan password**.
   - Muncul notifikasi hijau *"Password berhasil diganti."*
6. Uji login kembali:
   - Klik **Keluar**, lalu coba masuk kembali di `/admin/login` menggunakan password baru.
**Perbaikan:**

## US-06 Proteksi halaman admin

**Prompt:**

**Hasil:**

**Perbaikan:**

## Debugging dan fitur bonus

Tambahkan bagian baru untuk setiap error yang kamu perbaiki atau fitur bonus yang kamu kerjakan.
