import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://supabase.com/dashboard/project/vjtzqyxcqbxpeofdbegz",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqdHpxeXhjcWJ4cGVvZmRiZWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0NTg1NTUsImV4cCI6MjA3NTAzNDU1NX0.2Li4GZkNEHIKeT8X4p5sIEuy1axqdyDam6upPnqQDjI"
)

let { data, error } = await supabase.from("users").select("*")

export default supabase