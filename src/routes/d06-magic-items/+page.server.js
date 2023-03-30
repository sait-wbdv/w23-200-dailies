import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data, error } = await supabase.from('magic_item').select();

  console.log(error);

  return {
    magicItems: data ?? null
  };
}