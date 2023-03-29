import { supabase } from "$lib/supabaseClient";

export async function load() {
  let { players } = await supabase.from('rpg_player').select();

  return {
    players: data ?? [],
  };
}