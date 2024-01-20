function comprar(){

    let bilhete = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(bilhete.value == 'pista'){

        comprarPista(quantidade);

    } else{
        if(bilhete.value == 'superior'){

            comprarSuperior(quantidade);

        } else{

            comprarInferior(quantidade);

        }
    } 
}

function comprarPista(quantidade){

    let pista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > pista){

        alert('Quantidade Indisponivel para tipo pista');

    } else{

        pista = pista - quantidade;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra bem sucedida! :) ');

    }
}

function comprarSuperior(quantidade){

    let superior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > superior){

        alert('Quantidade indisponivel para tipo superior');

    } else{

        superior = superior - quantidade;
        document.getElementById('qtd-superior').textContent = superior;
        alert('Compra bem sucedida! :) ');
    }
}

function comprarInferior(quantidade){

    let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > inferior){

        alert('Quantidade indisponivel para tipo inferior');

    } else{

        inferior = inferior - quantidade;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert('Compra bem sucedida! :)');
    }
}