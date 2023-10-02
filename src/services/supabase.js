import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uprlgqcfnoihaaughsyf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcmxncWNmbm9paGFhdWdoc3lmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxMDE0MDgsImV4cCI6MjAwOTY3NzQwOH0.-06u0qfncVrmjSRgJwayhGFsLdazefafj9A0Zw07e-Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
