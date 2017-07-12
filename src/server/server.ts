import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../client/.ngfactory/src/server/app.server.module.ngfactory';

import { readFileSync } from 'fs';
import * as express from 'express';
import * as path from 'path';

import { Rest } from './rest/index';

const PORT = 4200;

enableProdMode();

const app = express();

let template = readFileSync(path.join(__dirname, '..', 'client', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };
    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

Rest(app);

app.set('view engine', 'html');
app.set('views', 'src/client')

app.get("/api/lols", function(req, res) {
    res.send("lols");
});

app.get('*.*', express.static(path.join(__dirname, '..', 'client')));

app.get('*', (req, res) => {
    console.log("A client connected.")
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log("Node.js backend listening on http://localhost:" + PORT);
});
