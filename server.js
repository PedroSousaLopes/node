require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require ('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true, // Usa o novo parser de URLs (recomendado)
  useUnifiedTopology: true, // Usa o novo mecanismo de gerenciamento de conexões
}).then(()=>
  console.log('conecetei a base de dados'),
  app.emit("Pronto"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on("Pronto",()=>{
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})
