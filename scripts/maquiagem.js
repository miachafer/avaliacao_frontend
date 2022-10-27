var maquiagens = []

if (localStorage.getItem('maquiagens')){
    maquiagens = JSON.parse(localStorage.getItem('maquiagens'))
}

var produtosNoCarrinho = []

if (localStorage.getItem('produtosNoCarrinho')) {
    produtosNoCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho'))
}

function carregarMaquiagens() {

    let txt = ''

    for (let i = 0; i < maquiagens.length; i++) {
        var maquiagem = maquiagens[i]
        txt += 
            `
            <div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                <img src="${maquiagem.imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${maquiagem.nome}</h5>
                        <p class="card-text">Preço: <span id="preco">${maquiagem.preco.toFixed(2)}</span></p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-cart"></i> Adicionar ao carrinho</i></a>
                    </div>
                </div>
            </div>
            `
    }

    document.getElementsByClassName('row')[0].innerHTML = txt

    // Recuperar botões de adicionar ao carrinho
    const botoesAdicionaAoCarrinho = document.querySelectorAll(".btn")

    // Recuperar lista de nomes e preços de produtos
    const nomesDosProdutos = document.querySelectorAll(".card-title")
    const precosDosProdutos = document.querySelectorAll("#preco")

    // Adicionar event listener a todos os botões
    for (let i = 0; i < botoesAdicionaAoCarrinho.length; i++) {
        const botao = botoesAdicionaAoCarrinho[i]
        const produtoSelecionado = nomesDosProdutos[i]
        const precoProdutoSelecionado = precosDosProdutos[i]
        
        // Adicionando event listener e função onclick
        botao.addEventListener("click", function () {

            if (produtosNoCarrinho != null) {
                for (let i = 0; i < produtosNoCarrinho.length; i++) {
                    const produto = produtosNoCarrinho[i];
                    
                    // Aqui conferimos se o item já está no carrinho
                    if (produto.produto == produtoSelecionado.innerHTML) {
                        alert("Esse produto já está no carrinho.")
                        return false
                    }  
                }

                var produtoNoCarrinho = {
                    produto: produtoSelecionado.innerHTML,
                    preco: parseFloat(precoProdutoSelecionado.innerHTML),
                    quantidade: 1,
                    total: parseFloat(precoProdutoSelecionado.innerHTML)
                }
                produtosNoCarrinho.push(produtoNoCarrinho)
                localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho))
                
                alert("Produto adicionado ao carrinho.")
                window.location.reload()

            } else {
                var produtoNoCarrinho = {
                    produto: produtoSelecionado.innerHTML,
                    preco: parseFloat(precoProdutoSelecionado.innerHTML),
                    quantidade: 1,
                    total: parseFloat(precoProdutoSelecionado.innerHTML)
                }
                produtosNoCarrinho.push(produtoNoCarrinho)
                localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho))

                alert("Produto adicionado ao carrinho.")
                window.location.reload()
            }
        })    
    }    

}