import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(`mongodb+srv://Kelven:Kelven08@waiterappdb.omocnle.mongodb.net/test`)
  .then(()=> {
    const port = 3001;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    server.listen(port, ()=> {
      console.log(`Server is running on http://localhost:${port}`);
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

  })
  .catch(() => console.log('Erro ao conectar com servidor'))
