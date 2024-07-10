function avaliarRespostas() {
    const select1 = document.getElementById('selectMenu');
    const select2 = document.getElementById('pergunta2');
    const select3 = document.getElementById('pergunta3');
    const resultado = document.getElementById('baixoResultado');

    let pontos = 0;
    if (select1.value === '4') {
      pontos++;
    }
    if (select2.value === '2') {
      pontos++;
    }
    if (select3.value === '3') {
      pontos++;
    }
    
    alert(`Você acertou ${pontos} de 3 perguntas!`)
    }

  if(resultado.value == 3){
  alert("Parabéns você acertou todas as perguntas!")
    }
    else{
        resultado.value
    }