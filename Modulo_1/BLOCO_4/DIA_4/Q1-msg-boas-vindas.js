let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  function saudacoes (info) {
      return ('Bem-vinda, ' + info.personagem)
  }
  console.log(saudacoes(info))