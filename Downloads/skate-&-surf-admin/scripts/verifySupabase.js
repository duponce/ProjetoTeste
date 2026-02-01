import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('Testing connection to:', supabaseUrl);
console.log('Using Key:', supabaseAnonKey ? supabaseAnonKey.substring(0, 15) + '...' : 'MISSING');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    // Try to get public config or just a simple query
    // We'll try to sign up with a fake user to see if the key is accepted, 
    // OR just checking if the client initializes without throwing is useless (it's lazy).
    // Let's try to fetch session (should be null, but no error)
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
       console.error('Connection failed with error:', error.message);
       // If the key is invalid, we usually get a specific error about JWT or API key
    } else {
       console.log('Connection successful! Session fetch returned no error.');
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testConnection();
