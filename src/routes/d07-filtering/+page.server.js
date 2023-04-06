import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { data, error } = await supabase
    .from('magic_item')
    .select()
    .order('weight_value', { ascending: false, nullsFirst: false })
    .limit(10);

  console.log(error);

  return {
    magicItems: data ?? null
  };
}