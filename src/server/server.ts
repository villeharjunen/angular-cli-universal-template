import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from './ngfactory/src/app/server/app.server.module.ngfactory'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 4200;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, "..", 'index.html')).toString();

app.engine('html', (_, options, callback) => {
    const opts = { document: template, url: options.req.url };

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get("/api/lols", function(req, res) {
    res.send("lols");
});

app.get('*.*', express.static(join(__dirname, "..")));

app.get('*', (req, res) => {
    console.log("A client connected.")
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log("Node.js backend listening on http://localhost:" + PORT);
});
