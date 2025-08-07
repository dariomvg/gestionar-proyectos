import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhoixsxreymjycrdspja.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey)