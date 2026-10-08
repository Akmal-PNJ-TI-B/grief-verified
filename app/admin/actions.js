"use server";

import { redirect } from "next/navigation";
import { createClientSesi } from "@/lib/supabase/server";

export async function login(prevState, formData) {
  // Tangani pemanggilan via useActionState atau form action langsung
  const data = formData instanceof FormData ? formData : prevState;
  const email = data?.get?.("email")?.toString().trim();
  const password = data?.get?.("password")?.toString();

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  try {
    const supabase = await createClientSesi();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: "Email atau password salah. Silakan coba lagi." };
    }
  } catch (err) {
    return {
      error:
        "Terjadi kesalahan saat memproses login: " +
        (err?.message || "Silakan coba lagi."),
    };
  }

  redirect("/admin");
}

export const masuk = login;

export async function keluar() {
  try {
    const supabase = await createClientSesi();
    await supabase.auth.signOut();
  } catch (err) {
    console.error("Gagal mengakhiri sesi:", err);
  }

  redirect("/admin/login");
}

export const logout = keluar;

export async function gantiPassword(prevState, formData) {
  const data = formData instanceof FormData ? formData : prevState;
  const passwordBaru = data?.get?.("password_baru")?.toString();
  const konfirmasiPassword = data?.get?.("konfirmasi_password")?.toString();

  if (!passwordBaru || !konfirmasiPassword) {
    return { error: "Semua kolom password wajib diisi." };
  }

  if (passwordBaru.length < 8) {
    return { error: "Password baru minimal 8 karakter." };
  }

  if (passwordBaru !== konfirmasiPassword) {
    return { error: "Password baru dan konfirmasi password tidak sama." };
  }

  try {
    const supabase = await createClientSesi();

    // Verifikasi bahwa admin sedang login
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: "Kamu harus login terlebih dahulu." };
    }

    const { error } = await supabase.auth.updateUser({
      password: passwordBaru,
    });

    if (error) {
      return { error: "Gagal mengganti password: " + error.message };
    }

    return { success: "Password berhasil diganti." };
  } catch (err) {
    return {
      error:
        "Terjadi kesalahan saat mengganti password: " +
        (err?.message || "Silakan coba lagi."),
    };
  }
}

export const updatePassword = gantiPassword;
