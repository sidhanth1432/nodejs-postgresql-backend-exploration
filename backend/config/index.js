import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

const config = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.POSTGRESQL_DB,
    connectionLimit: 50,
    
    dialect: 'postgres',
}
dotenv.config();

export const pool = new Pool(
    
    {
  connectionString: process.env.DATABASE_URL

}


);

export const PORT=process.env.PORT ||8000;
