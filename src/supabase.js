import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; //https://tigyhwmifxytvyxoazzr.supabase.co ??
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZ3lod21pZnh5dHZ5eG9henpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4MTUwMTMsImV4cCI6MTk3NjM5MTAxM30.GcRUIt2YmiQDutJOf1DX2-Cm05-kCwG5WHrVOLRXgjE  ????
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
