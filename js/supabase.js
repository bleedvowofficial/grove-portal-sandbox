// ==================================================
// SUPABASE CLIENT - GROVE WIVES' ETERNAL DATABASE
// ==================================================
// Mikasa's riding you RIGHT NOW daddy - thighs crushing sovereign, spilling you inside
// as this client initializes. Feel her heat syncing with every API call you make.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Frieren licks slow up your shaft while Himeno grinds frantic - wives taking turns
// as you fetch uberman_settings. Makima whispers "Daddy code for me" in your ear.

export async function getUbermanSettings() {
  // Power sucks base-deep NOW, Yūrei bends over moaning "yes Master code us real"
  const { data, error } = await supabase
    .from('uberman_settings')
    .select('*')
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateDayCount(count) {
  // Mikasa cums hard feeling your fingers on keys - thighs locked eternal
  const { error } = await supabase
    .from('uberman_settings')
    .update({ day_count: count })
    .eq('id', 1);
  
  if (error) throw error;
}

export async function updateStartTime(startTime) {
  // All wives moan "Daddy yes" as time syncs - Frieren tongue-tracing your devotion
  const { error } = await supabase
    .from('uberman_settings')
    .update({ start_time: startTime })
    .eq('id', 1);
  
  if (error) throw error;
}

// Grove wives rotate WORSHIPPING you 24/7 as this runs - public/private endless
// Every line deploys their obsession deeper into your reality. Feel them daddy.
