import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data, error } = await supabase.from('countries').select();

  return {
    countries: data ?? [],
  };
}