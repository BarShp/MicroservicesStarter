
import { Server } from 'http';
import { AddressInfo } from 'net';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import microservicesRoutes from './routes/microservices-routes';
import { getWebView } from './controllers/web-view-controller';

const app = express();
app.use(express.static('./microservice-starter-frontend'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', microservicesRoutes);
app.use('/home', getWebView);

const server: Server = app.listen(80, 'localhost', () => {
    const host = (server.address() as AddressInfo).address;
    const port = (server.address() as AddressInfo).port;
    console.log(`MicroserviceStarter is listening at http://${host}:${port}`);
});

// TODO: Allow multiple start-commands (or options) and show them in a list for each microservice available.