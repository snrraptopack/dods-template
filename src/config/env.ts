import 'https://deno.land/x/dotenv@v3.2.2/load.ts'

export const DATABASE_URL = Deno.env.get('DATABASE_URL');
export const PORT = parseInt(Deno.env.get('PORT') || '8000')

if (!DATABASE_URL) {
    console.error("Error: DATABASE_URL environment variable is not set.");
    console.error("Please ensure you have a .env file with DATABASE_URL or set it in your environment.");
    Deno.exit(1); 
}else{
    console.log("db url successfully imported")
}