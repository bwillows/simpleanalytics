import fs from 'fs';
import express from 'express';
import cookieParser from 'cookie-parser';

let app = express();

app.use(cookieParser());
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/* ROUTING */

app.get('/', (req, res) => { res.sendFile('./src/public/index.html', { root: '.' }); });

app.get('/index', (req, res) => { res.redirect('/'); });
app.get('/index.html', (req, res) => { res.redirect('/'); });

app.use('/styles', express.static('./src/public/styles/'));
app.use('/scripts', express.static('./src/public/scripts/'));

app.use('/styles/components', express.static('./src/public/styles/components/'));

app.listen(port, () => {
  console.log(`START APP port ${port}`);
});
