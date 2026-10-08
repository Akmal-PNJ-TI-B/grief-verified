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

