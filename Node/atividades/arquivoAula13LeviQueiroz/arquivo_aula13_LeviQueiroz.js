const express = require('express');
const app = require('./rotas/app');
const segundaRota = require('./rotas/segundaRota');
const arquivoAula13 = express();

arquivoAula13.use(express.json());

arquivoAula13.use('/app', app);
arquivoAula13.use('/segundaRota', segundaRota);

arquivoAula13.get('/', (req, res)=>{
    res.send('Wake up samurai, we have a city to burn!');
});

arquivoAula13.listen(1357, ()=>{
    console.log('Server http://localhost:1357 is running...')
})