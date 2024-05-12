let produtos = document.getElementsByName('produto')
let imgProdutos = document.getElementsByName('img-produto')
let precos = document.getElementsByName("preco")
console.log(produtos[0].innerText)
for(var i=0;i<produtos.length;i++){
    let nomeProduto = produtos[i].innerText
    let url = imgProdutos[i].src
    let preco = precos[i].innerText
    produtos[i].addEventListener('click', () =>{
        console.log(i)
        localStorage.setItem("url", url)
        
        window.location.href = "detail.php?produto="+nomeProduto+"&preco=" + preco 
    })
}