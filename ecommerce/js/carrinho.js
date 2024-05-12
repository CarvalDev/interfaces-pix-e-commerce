let nome 
let preco 
let imagem

$("#btn-adicionar").on('click', function(e){
    e.preventDefault()
     nome = document.getElementById("produto-nome").innerText
     preco = document.getElementById("produto-preco").innerText
    imagem = document.getElementById("imagem").src
    localStorage.setItem("carrinho", imagem)
    window.location.href = `cart.php?nome=${nome}&preco=${preco}`
})

$("#btn-checkout").on('click', function(e){
    e.preventDefault()
    let url = window.location.href
    url = url.replace("cart", "checkout")
    window.location.href = url
    
})

