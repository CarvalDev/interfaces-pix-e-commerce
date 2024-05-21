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
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==4){
                if(arrayLugares[i] == "0"){
                    localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
                    localStorage.setItem("clicksCertos", parseInt(localStorage.getItem('clicksCertos')) + 1) 
                }
                newLC += "1,"
            }else{
                newLC += arrayLugares[i] +","
            }
        }
        localStorage.setItem("lugaresCertos", newLC)
        console.log(localStorage.getItem("lugaresCertos"))
        window.location.href = "detail.php?produto="+nomeProduto+"&preco=" + preco 
    })
    imgProdutos[i].addEventListener('click', () =>{
        console.log(i)
        localStorage.setItem("url", url)
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==4){
                if(arrayLugares[i] == "0"){
                    localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
                    localStorage.setItem("clicksCertos", parseInt(localStorage.getItem('clicksCertos')) + 1) 
                }
                newLC += "1,"
            }else{
                newLC += arrayLugares[i] +","
            }
        }
        localStorage.setItem("lugaresCertos", newLC)
        console.log(localStorage.getItem("lugaresCertos"))
        window.location.href = "detail.php?produto="+nomeProduto+"&preco=" + preco 
    })
}