import { supabase } from "$lib/supabaseClient";

export async function load() {
  let playerData = await supabase.from('rpg_player').select();
  let itemData = await supabase.from('rpg_item').select();

  return {
    players: playerData.data ?? [],
    items: itemData.data ?? [],
  };
}