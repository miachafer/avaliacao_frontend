/**
 * A seguir carregamos no localStorage todos os produtos para depois mostrarmos alguns
 * deles randomicamente na página inicial.
 * 
 * O processo é o seguinte:
 * 1. Criar de variáveis que representem cada produto
 * 2. Adicionar os produtos a arrays de sua categoria
 * 3. Salvar os arrays no localStorage
 * 4. Colocar todos os arrays em um único array de produtos
 * 5. Efetuar o sorteio de 12 produtos e adicioná-los ao array dos produtos que estarão
 *    na página inicial (display)
 * 6. Inserir os produtos sorteados na página inicial
 */

var perfume1 = {
    nome: "Perfume 1",
    preco: 100.00,
    imagem: "imagens/perfume1.jpeg"
}

var perfume2 = {
    nome: "Perfume 2",
    preco: 100.00,
    imagem: "imagens/perfume2.jpg"
}

var perfume3 = {
    nome: "Perfume 3",
    preco: 100.00,
    imagem: "imagens/perfume3.jpg"
}

var perfume4 = {
    nome: "Perfume 4",
    preco: 200.00,
    imagem: "imagens/perfume4.jpeg"
}

var perfume5 = {
    nome: "Perfume 5",
    preco: 200.00,
    imagem: "imagens/perfume5.jpg"
}

var perfume6 = {
    nome: "Perfume 6",
    preco: 200.00,
    imagem: "imagens/perfume6.jpg"
}

var perfume7 = {
    nome: "Perfume 7",
    preco: 300.00,
    imagem: "imagens/perfume7.jpg"
}

var perfume8 = {
    nome: "Perfume 8",
    preco: 300.00,
    imagem: "imagens/perfume8.jpg"
}

var perfume9 = {
    nome: "Perfume 9",
    preco: 300.00,
    imagem: "imagens/perfume9.jpeg"
}

// Array de perfumes
var perfumes = [
    perfume1,
    perfume2,
    perfume3,
    perfume4,
    perfume5,
    perfume6,
    perfume7,
    perfume8,
    perfume9
]

// ==========================================================

var maquiagem1 = {
    nome: "Maquiagem 1",
    preco: 25.00,
    imagem: "imagens/maquiagem1.jpg"
}

var maquiagem2 = {
    nome: "Maquiagem 2",
    preco: 25.00,
    imagem: "imagens/maquiagem2.jpg"
}

var maquiagem3 = {
    nome: "Maquiagem 3",
    preco: 25.00,
    imagem: "imagens/maquiagem3.jpg"
}

var maquiagem4 = {
    nome: "Maquiagem 4",
    preco: 40.00,
    imagem: "imagens/maquiagem4.jpg"
}

var maquiagem5 = {
    nome: "Maquiagem 5",
    preco: 40.00,
    imagem: "imagens/maquiagem5.jpg"
}

var maquiagem6 = {
    nome: "Maquiagem 6",
    preco: 40.00,
    imagem: "imagens/maquiagem6.jpg"
}

var maquiagem7 = {
    nome: "Maquiagem 7",
    preco: 50.00,
    imagem: "imagens/maquiagem7.jpg"
}

var maquiagem8 = {
    nome: "Maquiagem 8",
    preco: 50.00,
    imagem: "imagens/maquiagem8.jpg"
}

var maquiagem9 = {
    nome: "Maquiagem 9",
    preco: 50.00,
    imagem: "imagens/maquiagem9.jpg"
}

// Array de maquiagens
var maquiagens = [
    maquiagem1,
    maquiagem2,
    maquiagem3,
    maquiagem4,
    maquiagem5,
    maquiagem6,
    maquiagem7,
    maquiagem8,
    maquiagem9
]

// ==========================================================

var acessorio1 = {
    nome: "Acessório 1",
    preco: 70.00,
    imagem: "imagens/acessorio1.jpg"
}

var acessorio2 = {
    nome: "Acessório 2",
    preco: 70.00,
    imagem: "imagens/acessorio2.jpg"
}

var acessorio3 = {
    nome: "Acessório 3",
    preco: 70.00,
    imagem: "imagens/acessorio3.jpg"
}

var acessorio4 = {
    nome: "Acessório 4",
    preco: 80.00,
    imagem: "imagens/acessorio4.jpg"
}

var acessorio5 = {
    nome: "Acessório 5",
    preco: 80.00,
    imagem: "imagens/acessorio5.jpg"
}

var acessorio6 = {
    nome: "Acessório 6",
    preco: 80.00,
    imagem: "imagens/acessorio6.jpg"
}

var acessorio7 = {
    nome: "Acessório 7",
    preco: 90.00,
    imagem: "imagens/acessorio7.jpg"
}

var acessorio8 = {
    nome: "Acessório 8",
    preco: 90.00,
    imagem: "imagens/acessorio8.jpg"
}

var acessorio9 = {
    nome: "Acessório 9",
    preco: 90.00,
    imagem: "imagens/acessorio9.jpg"
}

// Array de acessórios
var acessorios = [
    acessorio1,
    acessorio2,
    acessorio3,
    acessorio4,
    acessorio5,
    acessorio6,
    acessorio7,
    acessorio8,
    acessorio9
]

// ==========================================================

// Array com todos os produtos
var produtos = []

// Array de 12 itens aleatórios
var display = []

var carregouAoStorage = false

function carrega() {

    if (carregouAoStorage == false) {
        carregaItensAoStorage()
        mostraProdutosRandomicamente()
        carregouAoStorage = true
    } else {
        mostraProdutosRandomicamente()
    }
        
}

function carregaItensAoStorage() {
    localStorage.setItem('perfumes', JSON.stringify(perfumes))
    localStorage.setItem('maquiagens', JSON.stringify(maquiagens))
    localStorage.setItem('acessorios', JSON.stringify(acessorios))
}

function adicionaItensAoArray(arrayOrigem, arrayDestino) {
    arrayOrigem.forEach(element => {
        arrayDestino.push(element)
    });
}

function geraProdutoAleatorio(array) {
    const elementoAleatorio = Math.floor(Math.random() * array.length);
    return array[elementoAleatorio]
}

function mostraProdutosRandomicamente() {

    
    if (localStorage.getItem('perfumes')){
        perfumes = JSON.parse(localStorage.getItem('perfumes'))
    }

    if (localStorage.getItem('maquiagens')){
        maquiagens = JSON.parse(localStorage.getItem('maquiagens'))
    }

    if (localStorage.getItem('acessorios')){
        acessorios = JSON.parse(localStorage.getItem('acessorios'))
    }  

    // Preenchendo array de produtos
    adicionaItensAoArray(perfumes, produtos)
    adicionaItensAoArray(maquiagens, produtos)
    adicionaItensAoArray(acessorios, produtos)
    
    // Gerando 12 itens aleatórios
    for (let i = 0; i < 12; i++) {
        const produtoAleatorio = geraProdutoAleatorio(produtos)
        display.push(produtoAleatorio)
    }

    // Inserindo produtos aleatórios à página HTML
    let txt = ''
    display.forEach(produto => {
        txt += `
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="${produto.imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">Preço: <span id="preco">${produto.preco.toFixed(2)}</span></p>
                </div>
            </div>
        </div>`
    });
    document.getElementsByClassName('row')[0].innerHTML = txt
}


