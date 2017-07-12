import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core';
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

import { Rest } from './rest/index';

const PORT = 4200;

const app = express();

app.engine('html', ()=>{});

app.set('view engine', 'html');
app.set('views', 'src');

Rest(app);

app.get('*.*', express.static(join(__dirname)));

app.get('*', (req, res) => {
    console.log("A client connected.");
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log("Node.js development backend listening on http://localhost:" + PORT);
});
