const textArea = document.querySelector('.areadotexto'); //cria a variavel textArea, seleciona a classe 'areadotexto'
const retangulo = document.querySelector('.retanguloforma'); //cria a variavel retangulo, seleciona a classe 'retanguloforma'
const mensagem = document.querySelector('.retangulotxt'); //cria a variavel mensagem, seleciona a classe 'retangulotxt'

//  A letra "e" é convertida para "enter"
//  A letra "i" é convertida para "imes"
//  A letra "a" é convertida para "ai"
//  A letra "o" é convertida para "ober"
//  A letra "u" é convertida para "ufat" 

function btnEncriptar() { //função executada quando clica em criptografar
    const textoEncriptado = encriptar(textArea.value); //pega o texto digitado na textArea e executa a função encriptar, e armazena em 'textoEncriptado'
    exibirMensagem(textoEncriptado); //chama a função exibirMensagem (do textoEncriptado) na tela
    textArea.value = ""; //limpa a área do texto pra digitar de novo
}

function encriptar(stringEncriptada) { //aqui acontece a encriptação do texto
    let matrizCodigo = [['e', 'enter'], ['i','imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]; //aqui a matriz (array de arrays?) substitui as letras pelas palavras correspondentes
    stringEncriptada = stringEncriptada.toLowerCase(); //pega as letras digitadas e reduz pra caixa baixa

    for(let i = 0; i < matrizCodigo.length; i++) { //esse for percorre cada par de valores na matriz, um por um(?)
        if(stringEncriptada.includes(matrizCodigo[i][0])) { //verifica se o texto contém a letra que se quer substituir(?)
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);//aqui cada letra verificada que pode ser substituida será pela versão codificada
        }
    }
    return stringEncriptada; //depois de codificar todo o texto retorna o resultado
}

function btnDesencriptar() { //mesma coisa que encriptar, só que clicando em descriptografar
    const textoDesencriptado = desencriptar(textArea.value); //pega o texto encriptado e volta ele ao normal
    exibirMensagem(textoDesencriptado);
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {//aqui acontece tudo o que acontece na função encriptar ao contrário, ele vai verificar as palavras que substituiram as letras e trocar pelas vogais originais na palavra codificada
    let matrizCodigo = [['e', 'enter'], ['i','imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
function exibirMensagem(texto) { // função responsável por mostrar o texto codificado/descodificado no retângulo. os querySelector pegaram os elementos que estavam na tela e ocultaram com a função style.display=none
    // Esconde a imagem e os textos originais
    document.querySelector('.imgmorgana').style.display = 'none';
    document.querySelector('.retangulotit').style.display = 'none';
    document.querySelector('.retangulotxt').style.display = 'none';

    // Remove mensagem anterior, se existir
    const mensagemExistente = document.querySelector('.mensagem-final');//aqui foi criada uma classe 'mensagem-final' no js? 
    if (mensagemExistente) { // se essa classe existir
        mensagemExistente.remove(); //será removida
    }
    
    const botaoExistente = document.querySelector('.botao-copiar');
    if (botaoExistente) {
        botaoExistente.remove();
    }

    // Cria um novo parágrafo para mostrar a mensagem codificada/decodificada
    let novaMensagem = document.createElement('p');
    novaMensagem.classList.add('mensagem-final'); //o que é classList.add?
    novaMensagem.textContent = texto;
    
    // Cria o botão de copiar
    let botaoCopiar = document.createElement('button');
    botaoCopiar.classList.add('botao-copiar');
    botaoCopiar.textContent = 'Copiar';

    // Função de copiar para a área de transferência
    botaoCopiar.addEventListener('click', function() {
        navigator.clipboard.writeText(texto).then(function() {
            alert('Mensagem copiada!');
        }, function() {
            alert('Falha ao copiar a mensagem.');
        });
    });

    // Exibe a mensagem e o botão no retângulo
    retangulo.appendChild(novaMensagem);
    retangulo.appendChild(botaoCopiar);
}

