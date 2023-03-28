import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data, error } = await supabase.from('countries').select('id, name').eq('name', 'Canada');

  return {
    countries: data ?? [],
  };
}