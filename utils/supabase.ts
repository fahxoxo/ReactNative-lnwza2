import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://ozwxlzywqtaykrdbbdox.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96d3hsenl3cXRheWtyZGJiZG94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MzU1MTgsImV4cCI6MjA4NjAxMTUxOH0.7dMaPQMkpTG7ryshWx9ze_gXZRqPZIIAtSUBAwtp5g8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
