import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

import { API } from './api/index';

const PORT = 4200;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, "..", 'index.html')).toString();

app.engine('html', (_, options, callback) => {

});

app.set('view engine', 'html');
app.set('views', 'src');

new API(app);

app.get('*.*', express.static(join(__dirname)));

app.get('*', (req, res) => {
    console.log("A client connected.");
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log("Node.js backend listening on http://localhost:" + PORT);
});
