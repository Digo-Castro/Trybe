const listaEstados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function geraOpcoes() {
  for (index = 0; index < listaEstados.length; index += 1) {
    const criaOpcao = document.createElement('option');
    criaOpcao.innerText = listaEstados[index];
    document.getElementById('estados').appendChild(criaOpcao);
  }
}

geraOpcoes()
const itensInput = document.getElementsByTagName('input');
const itensTextarea = document.getElementsByTagName('textarea');
const itensSelect = document.getElementsByTagName('select');


function limpar() {
  for (let index = itensInput.length; index > 0; index -= 1) {
    if ((index - 1) === 5 || (index - 1) === 6) {
      itensInput[5].checked = true;
    } else {
      itensInput[(index - 1)].value = '';
    }
  }
  for (let index = itensTextarea.length; index > 0; index -= 1) {
    itensTextarea[(index - 1)].value = '';
  }
  for (let index = itensSelect.length; index > 0; index -= 1) {
    itensSelect[(index-1)].value = '';
  }
}

const bntLimpar = document.getElementById('limpar');
bntLimpar.addEventListener('click', limpar);

function gerarCurriculo() {
  let itemNome = document.createElement('p');
  itemNome.innerHTML = `<span>Nome: </span> ${itensInput[0].value}`;
  itemNome.className = 'dados';
  document.getElementById('curriculo').appendChild(itemNome);
  let itemCPF = document.createElement('p');
  itemCPF.innerHTML = `<span>CPF: </span> ${itensInput[2].value}`;
  itemCPF.className = 'dados';
  document.getElementById('curriculo').appendChild(itemCPF);
  let itemEmail = document.createElement('p');
  itemEmail.innerHTML = `<span>E-mail: </span> ${itensInput[1].value}`;
  itemEmail.className = 'dados';
  document.getElementById('curriculo').appendChild(itemEmail);
  let itemEndereco = document.createElement('p');
  itemEndereco.innerHTML = `<span>Endereço: </span> ${itensInput[3].value}`;
  itemEndereco.className = 'dados';
  document.getElementById('curriculo').appendChild(itemEndereco);
  let itemCidade = document.createElement('p');
  itemCidade.innerHTML = `<span>Cidade: </span> ${itensInput[4].value}`;
  itemCidade.className = 'dados';
  document.getElementById('curriculo').appendChild(itemCidade);
  let itemEstado = document.createElement('p');
  itemEstado.innerHTML = `<span>Estado: </span> ${itensSelect[0].value}`;
  itemEstado.className = 'dados';
  document.getElementById('curriculo').appendChild(itemEstado);
  let itemTipo = document.createElement('p');
  if (itensInput[5].checked === true) {
    itemTipo.innerHTML = `<span>Tipo: </span> ${itensInput[5].value}`;
  } else {
    itemTipo.innerHTML= `<span>Tipo: </span> ${itensInput[6].value}`;
  }
  itemTipo.className = 'dados';
  document.getElementById('curriculo').appendChild(itemTipo);
  let itemResumo = document.createElement('p');
  itemResumo.innerHTML = `<span>Resumo: </span> ${itensTextarea[0].value}`;
  itemResumo.className = 'dados';
  document.getElementById('curriculo').appendChild(itemResumo);
  let itemCargo = document.createElement('p');
  itemCargo.innerHTML = `<span>Cargo: </span> ${itensInput[7].value}`;
  itemCargo.className = 'dados';
  document.getElementById('curriculo').appendChild(itemCargo);
  let itemDescricao = document.createElement('p');
  itemDescricao.innerHTML = `<span>Atividades: </span> ${itensTextarea[1].value}`;
  itemDescricao.className = 'dados';
  document.getElementById('curriculo').appendChild(itemDescricao);
  let itemDataInicio = document.createElement('p');
  itemDataInicio.innerHTML = `<span>Data de início: </span> ${itensInput[8].value}`;
  itemDataInicio.className = 'dados';
  document.getElementById('curriculo').appendChild(itemDataInicio);
}

const btnGerar = document.getElementById('gerar');
btnGerar.addEventListener('click', gerarCurriculo);