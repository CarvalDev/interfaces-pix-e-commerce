let tipo = "E-commerce"

let lugaresCertos = [false];





const update = (final) =>{
    let ct = parseInt(localStorage.getItem("clicks")) + parseInt(localStorage.getItem("clicksCertos"))
    let ce = parseInt(localStorage.getItem("clicks"))
    let pp;
    let cc;
    if (final) cc = '1'
    else cc = '0'
    let url;

    url ='../app/model/atualizarTentativa.php'

    let data = new Date()
    let string = localStorage.getItem("dataInicio")
    let dataInicio = new Date(string)
    
    dataInicio = new Date(string)
  
     
    let diferencaMS =   data -dataInicio
    
    
    let segundosC = (diferencaMS/1000)
    let minutosC = segundosC/60
    segundosC = segundosC%60
    let horasC = minutosC/60
    minutosC = minutosC%60
    let tt = parseInt(horasC)+":"+parseInt(minutosC)+":"+parseInt(segundosC)
    console.log(tt)
    if(ce == 0){
        pp = 1
    } else{
        pp = 0
    }
    let id = localStorage.getItem("id")
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            ct: ct,
            ce: ce,
            pp: pp,
            tt:tt,
            cc: cc,
            t:tipo,
            id: id
        },
        url: '../app/model/atualizarTentativa.php',
        async: true,
        
        success: (response) =>{
            console.log(response)
            if(response.id !== undefined){
                
            idTentativa = response.id
            }
            
        },
        error: (e) =>{
            console.log(e)
        }
    })
}




if(localStorage.getItem("lugaresCertos") == undefined){
    localStorage.setItem("lugaresCertos", "0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0")
    localStorage.setItem("clicksCertos", "0")
    localStorage.setItem("clicks", '0')
    console.log("fodase")
    //
}
$(document).click(() => {
    let final;
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    if(arrayLugares[arrayLugares.length -1] == "1"){
        final = true
    }else{
        false
    }
   localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) +1) 
   console.log("clicks " + localStorage.getItem("clicks"))
   console.log("certos "+ localStorage.getItem("clicksCertos"))
   if(localStorage.getItem("id") != undefined){
        update(final)
   }
})


$("#email").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==0){
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
})

$("#password").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==1){
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
})

$("#login").click(() =>{
    
    

    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==2){
            if(arrayLugares[i] == "0"){
                localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
                localStorage.setItem("clicksCertos", parseInt(localStorage.getItem('clicksCertos')) + 1)
                document.getElementById("ct").value = parseInt(localStorage.getItem("clicks")) + parseInt(localStorage.getItem("clicksCertos"))
                document.getElementById("ce").value = parseInt(localStorage.getItem("clicks"))

                let data = new Date()
                let string = localStorage.getItem("dataInicio")
                let dataInicio = new Date(string)
                let stringData = `${dataInicio.getFullYear()}-${resolveData(dataInicio.getMonth() +1)}-${resolveData(dataInicio.getDate())} ${resolveData(dataInicio.getHours())}:${resolveData(dataInicio.getMinutes())}:${resolveData(dataInicio.getSeconds())}`
                dataInicio = new Date(stringData)
                console.log(stringData)
                let diferencaMS =   data -dataInicio
                
                console.log(diferencaMS)
                let segundosC = (diferencaMS/1000)
                let minutosC = segundosC/60
                segundosC = segundosC%60
                let horasC = minutosC/60
                minutosC = minutosC%60
                let tt = parseInt(horasC)+":"+parseInt(minutosC)+":"+parseInt(segundosC)

    document.getElementById('tt').value = tt 
            }
            newLC += "1,"
        }else{
            newLC += arrayLugares[i] +","
        }
    }
    localStorage.setItem("lugaresCertos", newLC)
    console.log(localStorage.getItem("lugaresCertos"))
})

$("#comprar-link").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==3){
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
})

$("#btn-adicionar").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==5){
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
})

$("#btn-checkout").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==6){
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
})

let inputsInfos = document.getElementsByName('input')
if(inputsInfos.length >0){
    $(inputsInfos[0]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==7){
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
    })
    $(inputsInfos[1]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==8){
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
    })
    $(inputsInfos[2]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==9){
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
    })
    $(inputsInfos[3]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==10){
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
    })
    $(inputsInfos[4]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==11){
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
    })
    $(inputsInfos[5]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==12){
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
    })
    $(inputsInfos[6]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==13){
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
    })
    $(inputsInfos[7]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==14){
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
    })
}

$("#cartao-btn").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==15){
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
})
$("#btn-confirma").click(() =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            newLC += arrayLugares[i]
        }else if(i ==16){
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
})

let inputsCartao = document.getElementsByName('input-cartao')

if(inputsCartao.length > 0){
    $(inputsCartao[0]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==17){
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
    })
    $(inputsCartao[1]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==18){
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
    })
    $(inputsCartao[2]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==19){
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
    })
    $(inputsCartao[3]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==20){
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
    })
    $(inputsCartao[4]).click(() =>{
        let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
        let newLC = ""
        for(var i =0;i<arrayLugares.length;i++){
            if(i == arrayLugares.length -1){
                newLC += arrayLugares[i]
            }else if(i ==21){
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
    })
}

$("#final-btn").click(async () =>{
    let arrayLugares =localStorage.getItem("lugaresCertos").split(",")
    let newLC = ""
    localStorage.setItem("clicks", parseInt(localStorage.getItem("clicks")) -1)
    localStorage.setItem("clicksCertos", parseInt(localStorage.getItem('clicksCertos')) + 1)
    for(var i =0;i<arrayLugares.length;i++){
        if(i == arrayLugares.length -1){
            
            
            newLC += "1"
        }else{
            newLC += arrayLugares[i] +","
        }
    }
    localStorage.setItem("lugaresCertos", newLC)
    let nome = document.getElementById('nome-prod').innerText
        let preco = document.getElementById('preco-prod').innerText
        let total =document.getElementById('total').innerText
    window.location.href = `done.php?nome=${nome}&preco=${preco}&frete=${frete}&total=${total}`
    console.log(localStorage.getItem("lugaresCertos"))
})



