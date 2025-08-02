import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vxunlfzupxeaccgmuchy.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4dW5sZnp1cHhlYWNjZ211Y2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzA4NzIsImV4cCI6MjA2OTY0Njg3Mn0.3wUCeCXiW6NCMQyQa6GRMZV5RxDW_sJF0GbEa_SOCZk";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
