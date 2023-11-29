document.getElementById('form').addEventListener('submit', function (event) { // Seleciona o formulário pelo ID e lê o submit
    event.preventDefault();//zerar o formulário

    const input1 = parseInt(document.getElementById('input1').value);//define a variável seleciona o input define que é inteiro 
    const input2 = parseInt(document.getElementById('input2').value);//define a variável seleciona o input define que é inteiro

    if (input1 < input2) {
        document.getElementById('mensagem').textContent = 'Ok, B maior que A.';//condicional que apresenta mensagem ok quando b maior que a.
        document.getElementById('mensagem').style.color = 'green';//Pega o campo mensagem e transforma a cor segundo a condicional
    } else {
        document.getElementById('mensagem').textContent = 'Erro, A maior que B.';//condicional que apresenta mensagem erro quando a maior que b.
        document.getElementById('mensagem').style.color = 'red';///Pega o campo mensagem e transforma a cor segundo a condicional
    }
});