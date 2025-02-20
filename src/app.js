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

app.get('/scripts/analytics-:clientID*.js', (req, res) => { 
  console.log(req.params.clientID);
  res.sendFile('./src/public/scripts/analytics.js', { root: '.' });

 });

 

app.get('/', (req, res) => { res.sendFile('./src/public/index.html', { root: '.' }); });

app.get('/index', (req, res) => { res.redirect('/'); });
app.get('/index.html', (req, res) => { res.redirect('/'); });


app.get('/auth', (req, res) => { res.sendFile('./src/public/auth.html', { root: '.' }); });
app.get('/auth.html', (req, res) => { res.redirect('/auth'); });


app.use('/styles', express.static('./src/public/styles/'));

app.get('/components/:file', (req, res) => { 
  res.setHeader('Content-Type', 'text/html');
  res.sendFile('./src/public/components/' + req.params.file, { root: '.' }); 
});

app.use('/scripts', express.static('./src/public/scripts/'));

app.use('/styles/components', express.static('./src/public/styles/components/'));


app.listen(port, () => {
  console.log(`START APP port ${port}`);
});
