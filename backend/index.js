const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'online',
    mensagem: 'API de Data e Hora — Aula 04 (SENAI)',
    rota_principal: '/data-hora'
  });
});

app.get('/data-hora', (req, res) => {
  const agora = new Date();

  res.json({
    data: agora.toLocaleDateString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'full'
    }),
    hora: agora.toLocaleTimeString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      timeStyle: 'medium'
    }),
    iso: agora.toISOString(),
    fuso: 'America/Sao_Paulo (BRT)'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});