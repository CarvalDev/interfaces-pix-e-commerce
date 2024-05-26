let clicks =0;
let clicksCertos =0;
let lugaresCertos = [true, true, true, true, true, true, true, true, true, true, true, true]
let nomeUsuario;
let dataInicio = new Date()
let tipo = "pix-cieja"
let idTentativa
let idUsuario
let valor
let saldoInt = 200;
let final = false
let telaLogin = true
let inst = false
let chavePreenchida = false
let cpfCerto = "96735261921"
$(document).click(() =>{
    clicks++
    console.log(clicks)
    console.log(clicksCertos)
    if(!telaLogin){
        update()
    }
    console.log(idTentativa)
    

})

const fixValor = valor =>{
    if(valor.length >= 3){
        return `R$ ${valor}`
    }
    if(valor.length == 0){
        return false
    }
    if(valor.length > 0 && valor.length <3){
        return `R$ ${valor},00`
    }
}

const update = () =>{
let ct = clicks + clicksCertos
let ce = clicks
let pp;
let cc;
if (final) cc = '1'
else cc = '0'
let url;

url ='../app/model/atualizarTentativa.php'

let data = new Date()



let diferencaMS =   data -dataInicio


let segundosC = (diferencaMS/1000)
let minutosC = segundosC/60
segundosC = segundosC%60
let horasC = minutosC/60
minutosC = minutosC%60
let tt = parseInt(horasC)+":"+parseInt(minutosC)+":"+parseInt(segundosC)
console.log(tt)
if(clicks == 0){
pp = 1
} else{
pp = 0
}

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
    id: idTentativa
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


const insert =  (idUsuario) =>{
    let ct = clicks + clicksCertos
    let ce = clicks
    let pp;
    let cc;
    let url;
     url ='../app/model/inserirTentativa.php'

    let data = new Date()
    
  
     cc = '0'
    let diferencaMS =   data -dataInicio
    
    
    let segundosC = (diferencaMS/1000)
    let minutosC = segundosC/60
    segundosC = segundosC%60
    let horasC = minutosC/60
    minutosC = minutosC%60
    let tt = parseInt(horasC)+":"+parseInt(minutosC)+":"+parseInt(segundosC)
    console.log(tt)
    if(clicks == 0){
        pp = 0
    } else{
        pp = 0
    }
    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            ct: ct,
            ce: ce,
            pp: pp,
            iu: idUsuario,
            tt:tt,
            cc: cc,
            t:tipo,
           
        },
        url: url,
        async: true,
        
        success: (response) =>{
            console.log(response)
            if(response.id !== undefined){
                
            idTentativa = response.id
            telaLogin = false
            $("#tela-login").css('display', 'none')
            $("#tela-home").css('display','flex')
            $("#body").css('height', '130vh')
            }
            
        },
        error: (e) =>{
            console.log(e)
        }
    })
    console.log(idTentativa)
    
}



const pagamento = (s) =>{
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            id: 1,
            s:s
        },
        url: '../app/model/pagamento.php',
        async: true,
        
        success: async (response) =>{
            if(response.senhaOk){
                $("#senha-ok").html(`<i class="fa-solid  fa-circle-check fs-1 text-success"></i>`)
                document.getElementById('senha-2').id = ""
                $("#finalizado").css('display','flex')
                final = true
                update()
            }else{
                $("#senha-ok").html(`<i class="fa-solid  fa-xmark fs-1 text-danger"></i>`)
            }   
           
        },
        error: (response) =>{
            console.log(response)
            
        }
    })
    }


$("#email").click(() =>{
    if(lugaresCertos[0]){
        clicks--
        clicksCertos++
        lugaresCertos[0] = false
    }
})

$("#senha").click(() =>{
    if(lugaresCertos[1]){
        clicks--
        clicksCertos++
        lugaresCertos[1] = false
    }
})  

$("#senha").click(() =>{
    if(lugaresCertos[1]){
        clicks--
        clicksCertos++
        lugaresCertos[1] = false
    }
})  

$("#entrar").click(() =>{
    if(lugaresCertos[2]){
        clicks--
        clicksCertos++
        lugaresCertos[2] = false
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            e:$("#email").val(),
            s:$("#senha").val()
        },
        url: '../app/model/login.php',
        async: true,
        
        success: async (response) =>{
            if(response.usuario !== undefined){
                nomeUsuario = response.usuario.nome
                insert(response.usuario.id)
                idUsuario = response.usuario.id

            }else{
                document.getElementById('erro-senha').innerText = "Email ou senha incorretos!"
            }
        },
        error: ()=>{
            document.getElementById('erro-senha').innerText = "Erro ao verificar informações!"
        }
    })
})  

let icon_pix = document.getElementsByName('pix')[0]

$(icon_pix).click(() =>{
    if(lugaresCertos[3]){
        clicks--
        clicksCertos++
        lugaresCertos[3] = false
    }   
    $("#tela-home").css('display', 'none')
    $("#tela-pix").css('display', 'flex')
})  


let transferir = document.getElementsByName('transferir-icon')[0]

$(transferir).click(() =>{
    if(lugaresCertos[4]){
        clicks--
        clicksCertos++
        lugaresCertos[4] = false
    }   
    $("#tela-pix").css('display', 'none')
    $("#tela-pix").css('display', 'flex')
    $("#ok").css('display','flex')
    let parte_transferir = document.getElementsByName('parte-transferir')
    for(var i=0;i<parte_transferir.length;i++){
        $(parte_transferir[i]).css('display', 'flex')
    }
})  

$("#chave").click(() =>{
    if(lugaresCertos[5]){
        clicks--
        clicksCertos++
        lugaresCertos[5] = false
    }   
   
})  

$("#inst").click(() =>{
    if(lugaresCertos[7]){
        clicks--
        clicksCertos++
        lugaresCertos[7] = false
    }   
    inst = true
    $("#banco-ok").html(`<i class="fa-solid fa-circle-check fs-1 text-success"></i>`)
})  




$("#chave").keyup(() =>{
    
    if($("#chave").val() == cpfCerto){
        $("#parte-destino").css('display','flex')
        $("#chave-ok").html(`<i class="fa-solid fa-circle-check fs-1 text-success"></i>`)

        document.getElementById('erro-chave').innerText = ""
        chavePreenchida = true
        
    }else if($("#chave").val() != "" && $("#chave").val() != cpfCerto){
        $("#parte-destino").css('display', 'none')
        $("#parte-como").css('display','none')
        $("#buttons").css('display','none')
        document.getElementById('valor').value = ""
        document.getElementById('erro-chave').innerText = "CHAVE INVÁLIDA"
        $("#chave-ok").html(``)
        chavePreenchida = false
    }else{
        document.getElementById('erro-chave').innerText = ""
        $("#chave-ok").html(``)
        $("#parte-como").css('display','none')
        $("#buttons").css('display','none')
        chavePreenchida = false
    }
   
    
}) 

$("#valor").click(() =>{
    if(lugaresCertos[6]){
        clicks--
        clicksCertos++
        lugaresCertos[6] = false
    }   
   
})  

$("#fazer-pix-btn").click(() =>{
    if(lugaresCertos[10]){
        clicks--
        clicksCertos++
        lugaresCertos[10] = false
    }   
    $("#ok-fazer").css('display','flex')
    $("#digitar-senha").css('display','flex')
   
})  



$("#saldo").click(() =>{
    if(lugaresCertos[8]){
        clicks--
        clicksCertos++
        lugaresCertos[8] = false
    }   
   
})  



$("#confirmar").click(() =>{
    if(lugaresCertos[9]){
        clicks--
        clicksCertos++
        lugaresCertos[9] = false
    }   
    $("#tela-pix").css('display','none')
    $("#tela-confirmar").css('display','flex')
    
   
})  


$("#senha-2").click(() =>{
    if(lugaresCertos[11]){
        clicks--
        clicksCertos++
        lugaresCertos[11] = false
    }   
    
    
   
})  

$("#senha-2").keyup(() =>{
    let senha = $("#senha-2").val()
    if(senha.length ==4){
        pagamento(senha)
    }
})


console.log(document.getElementById('saldo'))

setInterval( () =>{
if(document.getElementById('saldo').checked){
    if(inst){
    $("#buttons").css('display', 'flex')
    document.getElementById('erro-inst').innerText = ""
    }
    else {
    document.getElementById('erro-inst').innerText = "SELECIONE UMA INSTITUIÇÃO BANCARIA"
}

}else{
    $("#buttons").css('display', 'none')
    
}
},100)



$('#valor').keyup(() =>{
    if($("#valor").val() != "R$" && $("#valor").val() != "R$ "){
        let valorTransferencia = $("#valor").val()
        valorTransferencia = valorTransferencia.split(' ')[1]
        if(valorTransferencia.includes(".")){
            valorTransferencia = valorTransferencia.replaceAll(".","")
        }
        // valorTransferencia = valorTransferencia.replaceAll(',','.')
        console.log(valorTransferencia)
        if(parseFloat(valorTransferencia.replaceAll(",",".")) > saldoInt){
            document.getElementById("message-error-saldo").innerText = "Saldo insuficiente"
            $("#valor-ok").html(`<i class="fa-solid  fa-xmark fs-1 text-danger"></i>`)
            
            $('#parte-como').css('display', 'none')
        }else{
        $("#valor-ok").html(`<i class="fa-solid fa-circle-check fs-1 text-success"></i>`)
        document.getElementById("message-error-saldo").innerText = ""
        valor = fixValor(valorTransferencia)
        document.getElementById('valor-trans').innerText = valor
        if(chavePreenchida)
        $('#parte-como').css('display', 'flex')
        
        }
    }else{
        $("#valor-ok").html(``)
        $('#parte-como').css('display', 'none')
    }
    console.log($("#valor").val() + "aaa")
})

$("#cancelar").click(() =>{
    $("#tela-pix").css('display','none')
    $("#tela-home").css('display',' flex')
    document.getElementById('chave').value = ""
    document.getElementById('valor').value = "R$"
    $('#banco-ok').html(``)
    $("#parte-destino").css('display','none')
    $('#parte-como').css('display','none')
    $('#buttons').css('display','none')
    $("#chave-ok").css('display','none')
    $("#valor-ok").css('display','none')
    $("#ok").css('display','none')
    let parte_transferir = document.getElementsByName('parte-transferir')
    for(var i=0;i<parte_transferir.length;i++){
        $(parte_transferir[i]).css('display', 'none')
    }
    inst = false
})
let senha2 = document.getElementsByName('senha-2')[0]
$("#voltar").click(() =>{
    $("#tela-confirmar").css('display','none')
    $("#tela-home").css('display','flex')
    
    document.getElementById('chave').value = ""
    document.getElementById('valor').value = "R$"
    senha2.value = ""
    senha2.id = "senha-2"
    $("#senha-ok").html(``)
    $('#banco-ok').html(``)
    $("#parte-destino").css('display','none')
    $('#parte-como').css('display','none')
    $('#buttons').css('display','none')
    $("#chave-ok").css('display','none')
    $("#valor-ok").css('display','none')
    $("#ok").css('display','none')
    $("#digitar-senha").css('display','none')
    $("#ok-fazer").css('display','none')
    $("#finalizado").css('display','none')
    let parte_transferir = document.getElementsByName('parte-transferir')
    for(var i=0;i<parte_transferir.length;i++){
        $(parte_transferir[i]).css('display', 'none')
    }
    inst = false
})

$("#cancelar-2").click(() =>{
    $("#tela-confirmar").css('display','none')
    $("#tela-home").css('display',' flex')
    document.getElementById('chave').value = ""
    document.getElementById('valor').value = "R$"
    senha2.value = ""
    senha2.id = "senha-2"
    $("#senha-ok").html(``)
    $('#banco-ok').html(``)
    $("#parte-destino").css('display','none')
    $('#parte-como').css('display','none')
    $('#buttons').css('display','none')
    $("#chave-ok").css('display','none')
    $("#valor-ok").css('display','none')
    $("#ok").css('display','none')
    $("#digitar-senha").css('display','none')
    $("#ok-fazer").css('display','none')
    $("#finalizado").css('display','none')
    let parte_transferir = document.getElementsByName('parte-transferir')
    for(var i=0;i<parte_transferir.length;i++){
        $(parte_transferir[i]).css('display', 'none')
    }
    inst = false
})


$("#mostrar").click(() =>{
    $("#mostrar").css('display', 'none')
    $("#ocultar").css('display', 'block')
    $("#senha").attr('type', 'text')
    clicks--
    
    
})

$("#ocultar").click(() =>{
    $("#ocultar").css('display', 'none')
    $("#mostrar").css('display', 'block')
    $("#senha").attr('type', 'password')
    clicks--
    
    
})



$("#mostrar-2").click(() =>{
    $("#mostrar-2").css('display', 'none')
    $("#ocultar-2").css('display', 'block')
    $(senha2).attr('type', 'text')
    clicks--
    
    
})

$("#ocultar-2").click(() =>{
    $("#ocultar-2").css('display', 'none')
    $("#mostrar-2").css('display', 'block')
    $(senha2).attr('type', 'password')
    clicks--
    
    
})
