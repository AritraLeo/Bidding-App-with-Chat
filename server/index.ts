import express from 'express';
import 'dotenv';
import http from 'http';
const app = express();

async function start() {
    const httpServer = http.createServer(app);
    const PORT = process.env.PORT || 6000;

    httpServer.listen(PORT, () => {
        console.log('Server running at PORT' + PORT);
    })
}

start();

