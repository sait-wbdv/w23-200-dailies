import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  
  let { data, error } = await supabase
    .from('magic_item')
    .select()
    .eq('id', params.id);

    console.log(error);
  return {
    magicItem: data[0] ?? []
  };
}