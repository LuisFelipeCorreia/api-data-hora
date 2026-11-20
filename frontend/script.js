// Depois do deploy no Render, substitua a URL abaixo pelo link do seu serviço no Render:
const API_URL = 'https://api-data-hora.vercel.app';

const elStatus = document.getElementById('status');
const elHora = document.getElementById('hora');
const elData = document.getElementById('data');
const elIso = document.getElementById('iso');
const btnAtualizar = document.getElementById('btn-atualizar');

async function buscarDataHora() {
  elStatus.textContent = 'Consultando servidor...';

  try {
    const resposta = await fetch(API_URL);
    if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);

    const dados = await resposta.json();
    elStatus.textContent = `● Online (${dados.fuso})`;
    elHora.textContent = dados.hora;
    elData.textContent = dados.data;
    elIso.textContent = `ISO 8601: ${dados.iso}`;
  } catch (erro) {
    elStatus.textContent = '● Falha ao conectar na API';
    elHora.textContent = 'Erro';
    elData.textContent = 'Verifique se o servidor Express está ativo.';
    elIso.textContent = erro.message;
  }
}

btnAtualizar.addEventListener('click', buscarDataHora);
buscarDataHora();