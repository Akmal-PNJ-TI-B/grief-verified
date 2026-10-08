import { createClient as createSupabaseClient } from "@supabase/supabase-js";

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

export const buatClientServer = createClientServer;
export const createClient = createClientServer;
export default createClientServer;
