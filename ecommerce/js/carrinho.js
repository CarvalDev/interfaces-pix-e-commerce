let nome 
let preco 
let imagem
let frete= "R$22.90"

let dadosCartao = ["7854 0908 9090 7654", "Maria F Madalena", "08/26", "123", "126.752.098-90"]

let pagamentos = document.getElementsByName('payment')
let btn = $("#btn-confirma")
btn.css('display', 'none')

console.log(localStorage.getItem('endereco'))



for(var i=0;i<pagamentos.length;i++){
    let value = pagamentos[i].value
    $(pagamentos[i]).on('click', () =>{
        localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
        if(value != 'cartao'){
            console.log(value)
            btn.css('display', 'none')
            document.getElementById('erro-pagamento').innerText = "Forma de pagamento invalída"
        }else{
            document.getElementById('erro-pagamento').innerText = ""
            btn.css('display', 'block')
        }
    })
}

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

$("#btn-confirma").on('click', () => {
    let inputs = document.getElementsByName('input')
    let vazio =0;
    let endereco = ""
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value == ""){
            vazio++
            $(inputs[i]).css('border','red 1px solid')
        }
        else if(i >=3 && inputs[i].value != ""){
            endereco += inputs[i].value + ","
        }
    }
    if(vazio >0){
        console.log('moio')
        document.getElementById('campos-vazios').innerText = "Campos vazios!"
    }else{
        let nome = document.getElementById('nome-prod').innerText
        let preco = document.getElementById('preco-prod').innerText
        let total = parseFloat(preco.split("R$")[1]) + parseFloat(frete.split("R$")[1])
        localStorage.setItem("endereco", endereco)
        
        window.location.href = `checkout-card.php?nome=${nome}&preco=${preco}&frete=${frete}&total=R$${total.toFixed(2)}`
    }
})

$("#btn-confirma-pagamento").on('click', () => {
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -2){
            
                if(arrayLugares[i] == "0"){
                localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
                localStorage.setItem("clicksCertos", parseInt(localStorage.getItem('clicksCertos')) + 1)
                }
                newLC += "1"
        }else if(i == arrayLugares.length-1){
            newLC += arrayLugares[i]
        }
        else{
            newLC += arrayLugares[i] +","
        }
    }
    localStorage.setItem("lugaresCertos", newLC)
    console.log(localStorage.getItem("lugaresCertos"))
    let inputs = document.getElementsByName('input-cartao')
    let vazio =0;
    let errado =0
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value == ""){
            vazio++
            $(inputs[i]).css('border', '1px solid red')
        }
        if(inputs[i].value != dadosCartao[i]){
            errado++
            $(inputs[i]).css('border', '1px solid red')
        }
    }
    if(vazio >0 || errado>0){
        console.log('moio')
        document.getElementById('vazios').innerText = "Campos vazios ou invalidos!"
    }else{
        let nome = document.getElementById('nome-prod').innerText
        let preco = document.getElementById('preco-prod').innerText
        let total =document.getElementById('total').innerText
        localStorage.setItem('finalizou', '1')
        // window.location.href = `done.php?nome=${nome}&preco=${preco}&frete=${frete}&total=${total}`
        document.getElementById('myModal').style.display = 'flex'
    }
})

