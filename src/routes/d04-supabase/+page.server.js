import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data } = await supabase.from('countries').select();

  return {
    countries: data ?? [],
  };
}