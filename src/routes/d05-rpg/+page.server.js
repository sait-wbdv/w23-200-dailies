import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { players } = await supabase.from('rpg_player').select();
  let { items } = await supabase.from('rpg_items').select();

  return {
    players: players ?? [],
    items: items ?? []
  };
}