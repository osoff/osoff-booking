import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mcnwhggudkiuzfbxuaiu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbndoZ2d1ZGtpdXpmYnh1YWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNjYxMjgsImV4cCI6MjAxMzg0MjEyOH0.H-CGDIH-5tFfD4npq30fLKofq58RkCCLweRi8IfSwIA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
