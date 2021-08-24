import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.API_PORT || '3001',
	cors: process.env.CORS || 'localhost:3000',
};

export default config;