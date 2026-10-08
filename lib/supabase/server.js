import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Membuat client Supabase di sisi server untuk pengunjung
 * menggunakan SUPABASE_URL dan SUPABASE_SECRET_KEY.
 * Kunci rahasia melewati RLS sehingga aman digunakan untuk membaca data publik di server.
 */
export function createClientServer() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "SUPABASE_URL dan SUPABASE_SECRET_KEY belum diatur di environment variable."
    );
  }

  return createSupabaseClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/**
 * Membuat client Supabase sesi admin menggunakan @supabase/ssr dan cookies.
 * Menggunakan SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY.
 * Digunakan untuk autentikasi (login, logout, ganti password) dan mutasi data admin.
 */
export async function createClientSesi() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !publishableKey) {
    throw new Error(
      "SUPABASE_URL dan SUPABASE_PUBLISHABLE_KEY belum diatur di environment variable."
    );
  }

  return createServerClient(supabaseUrl, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Abaikan jika dipanggil dari Server Component saat rendering
        }
      },
    },
  });
}

export const buatClientServer = createClientServer;
export const createClient = createClientServer;
export const buatClientSesi = createClientSesi;
export const createAdminSessionClient = createClientSesi;

export default createClientServer;
