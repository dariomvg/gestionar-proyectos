import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhoixsxreymjycrdspja.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)