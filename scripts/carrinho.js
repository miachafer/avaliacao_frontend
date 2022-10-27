var produtosNoCarrinho = []

if (localStorage.getItem('produtosNoCarrinho')) {
    produtosNoCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho'))
}

function mostraProdutosNoCarrinho() {

    let txt = ''
    if (localStorage.getItem('produtosNoCarrinho')) {
        produtosNoCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho'))

        var totalCarrinho = 0.0

        for (let i = 0; i < produtosNoCarrinho.length; i++) {
            var produto = produtosNoCarrinho[i]
            var totalProduto = produto.preco * produto.quantidade
            totalCarrinho += totalProduto
            txt +=
                `<tr>
                    <td>${produto.produto}</td>
                    <td>${produto.preco.toFixed(2)}</td>
                    <td><input type="number" class="form-control" value="${produto.quantidade}"></td>
                    <td>${totalProduto.toFixed(2)}</td>
                    <td><a href="#" class="btn btn-danger" onclick="remover(${i})"><i class="bi bi-x-circle"></i></a></td>
                    <th><a href="#" class="btn btn-success" onclick="atualizaQuantidade(${i})"><i class="bi bi-check-circle"></i></a></th>
                </tr>`
        }

        txt += `
            <h6 class="display-6">Total: <span>${totalCarrinho.toFixed(2)}</span>
            <br>
            <button type="button" class="btn btn-outline-primary" onclick="finalizarCompra()">Finalizar compra</button>`

    } else {
        txt = "Você ainda não tem itens no seu carrinho."
    }

    if (produtosNoCarrinho.length == 0) {
        txt = "Você ainda não tem itens no seu carrinho."
    }

    document.getElementsByTagName('tbody')[0].innerHTML = txt
}

function atualizaQuantidade(i) {

    // Copiar os produtos do carrinho (localStorage) para uma lista provisória
    let listaProvisoriaDeProdutos = []

    produtosNoCarrinho.forEach(produto => {
        listaProvisoriaDeProdutos.push(produto)
    });

    // Atualizar a quantidade de produtos na lista provisória
    var inputQuantidade = parseInt(document.querySelectorAll('.form-control')[i].value)

    if (inputQuantidade < 0) {
        alert("Insira uma quantidade positiva.")
        window.location.reload()
    } else if (inputQuantidade == 0) {
        alert("Para excluir um item do carrinho, basta clicar no ícone vermelho com um xis.")
        window.location.reload()
    } else {

        listaProvisoriaDeProdutos[i].quantidade = inputQuantidade

        // Excluir os produtos do carrinho (localStorage)
        localStorage.removeItem(produtosNoCarrinho)

        // Adicionar a lista provisória aos produtos do carrinho (localStorage)
        produtosNoCarrinho = listaProvisoriaDeProdutos
        localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho))

        window.location.reload()
    }
}

function remover(i) {

    // Copiar os produtos do carrinho (localStorage) para uma lista provisória
    let listaProvisoriaDeProdutos = []

    produtosNoCarrinho.forEach(produto => {
        listaProvisoriaDeProdutos.push(produto)
    });

    // Atualizar a lista provisória de produtos retirando o item a ser excluído
    listaProvisoriaDeProdutos.splice(i, 1)

    // Excluir os produtos do carrinho (localStorage)
    localStorage.removeItem(produtosNoCarrinho)

    // Adicionar a lista provisória aos produtos do carrinho (localStorage)
    produtosNoCarrinho = listaProvisoriaDeProdutos
    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho))

    window.location.reload()
}

function finalizarCompra() {

    // Apaga os itens do carrinho e redireciona para a página de sucesso
    let listaVazia = []

    localStorage.removeItem(produtosNoCarrinho)

    produtosNoCarrinho = listaVazia

    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho))
    
    document.location.href = "compra_finalizada.html"
}