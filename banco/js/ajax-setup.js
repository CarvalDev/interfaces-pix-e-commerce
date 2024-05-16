let clicks = 0;
let clicksCertos =0;
let clicouNoInput = false
let clicouNoInputSenha = false
let clicouNoInputPix =false
let clicouNoInputChave =false
let clicouNoInputPagamento =false
let clicouNoInputMensagem = false
let clicouSalvarMsg =false
let clicouEscrever =false
let countClicks =0;
let nome = ""
let id;
let idTentativa;
let mensagem = ""
let saldoInt = 200 
let saldo = `R$ ${saldoInt},00`
let dataInicio = new Date()
let camposComSaldo = document.getElementsByName("saldo-text");
let cpfCerto = "96735261921"
let tentativa = "pix"
let meses = ["JAN", "FEV", "MAR","ABR", "MAI", "JUN", "JUL", "AGO","SET", "OUT", "NOV", "DEZ"]
const resolveData = (num) =>{
    
    if(num.toString().length <2){
        return `0${num}`
    }
    return num
}

$('#salvar-msg-btn').on('click', () =>{
    if(!clicouSalvarMsg){
        clicks--
        clicksCertos++
        clicouSalvarMsg = true
    }
    mensagem = $("#msg-input").val()
    $("#tela7").css('display', 'flex')
    $("#tela-mensagem").css('display', 'none')
    if(mensagem != ""){

        $("#escrever-font").html(`<div id="separator-msg"><p id="mensagem-span">${mensagem}</p><i id="edit-message" class="fa-solid fa-pen-to-square icon-botao"></i></div>`)
        }
        else{
            $("#separator-msg").html(`<span id="escrever-font"><i class="fa-solid fa-message icon-botao"></i> Escrever uma mensagem...</span>`)
        }
        
        
})

$("#msg-input").on('click', ()=>{
    if(!clicouNoInputMensagem){
        clicks--
        clicksCertos++
        clicouNoInputMensagem= true
    }
})
$("#edit-message").on('click', () =>{
    $("#tela7").css('display', 'none')
    $("#tela-mensagem").css('display', 'flex')
})


$("#escrever-font").on('click', () =>{
    if(!clicouEscrever){
        clicks--
        clicksCertos++
        clicouEscrever = true
    }
    $("#tela7").css('display', 'none')
    $("#tela-mensagem").css('display', 'flex')
})
const pagamento = (s) =>{
$.ajax({
    type: 'POST',
    dataType: 'json',
    data: {
        id:id,
        s:s
    },
    url: '../app/model/pagamento.php',
    async: true,
    
    success: async (response) =>{
        if(response.senhaOk){
        console.log(response)
        $("#tela10").css('display', 'none')
        $("#tela11").css('display', 'flex')
        
       update(true)
        setTimeout(() =>{
            document.getElementById('transferindo-font').innerText = "Gerando comprovante..."
        }, 1500)
        setTimeout(() =>{
            $("#tela11").css('display', 'none')
            $("#tela12").css('display', 'flex')
            let dataInicio = new Date()
            let dataComprovante = `${resolveData(dataInicio.getDate())} ${meses[dataInicio.getMonth()]} ${dataInicio.getFullYear()} ${resolveData(dataInicio.getHours())}:${resolveData(dataInicio.getMinutes())}:${resolveData(dataInicio.getSeconds())}`
            document.querySelector(".dataComprovante").innerText = dataComprovante
        }, 3000)
        }else{
            document.getElementById('senha').value = ""
            document.getElementById('erro-senha-font').innerText ="Senha incorreta. Caso não se lembre da sua senha, acesse o menu Segurança para consultá-la."
        }
       
    },
    error: (response) =>{
        console.log(response)
        
    }
})
}

const update = (final) =>{
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
    let iu = id
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            ct: ct,
            ce: ce,
            pp: pp,
            tt:tt,
            cc: cc,
            t:tentativa,
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

const insert = () =>{
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
    let iu = id
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            ct: ct,
            ce: ce,
            pp: pp,
            iu: iu,
            tt:tt,
            cc: cc,
            t:tentativa,
           
        },
        url: url,
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
    console.log(idTentativa)
    
}



for(var i =0;i<camposComSaldo.length;i++){
    camposComSaldo[i].innerText = saldo
}

document.getElementById("chave-um").value = "Nome, CPF/CNPJ ou chav..."

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

$("#email").on('click', (e) =>{
    e.preventDefault()
    if(!clicouNoInput){
    clicksCertos++
    clicks--
    clicouNoInput = true
    }   
})

$("#password").on('click', (e) =>{
    if(!clicouNoInputSenha){
    e.preventDefault()
    clicksCertos++
    clicks--
    clicouNoInputSenha = true
    }
})

$("#entrar-btn").on('click', function(e){
    e.preventDefault()
    let email = $("#email").val()
    let senha = $("#password").val()
    clicks--
    
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            e:email,
            s:senha
        },
        url: '../app/model/login.php',
        async: true,
        
        success: async (response) =>{
            
            if(response.error !== undefined){
                document.getElementById("message-error").innerText = "Email ou senha incorretos!"
                clicks++
            }else{
                $("#login").css('display', 'none')
                $("#tela1").css('display', 'flex')
                clicksCertos++
                
                nome = response.usuario.nome
                id = response.usuario.id
                insert()
                document.getElementById("nome-span").innerText = nome
            }
            console.log(response)
        },
        error: (response) =>{
            console.log(response)
            document.getElementById("message-error").innerText = "Erro ao verificar informações"
        }
    })
})

$(document).on('click', function(e){
    e.preventDefault()
    clicks++
    if(idTentativa != undefined) setInterval(update(),100)
    
    console.log(clicks)
    console.log(clicksCertos)
})

//tela1
$("#botao-um").on('click', async function(e){
    e.preventDefault()
    
    if(countClicks == 0){
        clicks--
        clicksCertos++
        countClicks++
    }
    $("#tela1").css('display', 'none')
    $("#tela2").css('display', 'flex')
})
//tela2
$("#returnTela1").on('click',function(e){
    e.preventDefault()
    $("#tela2").css('display', 'none')
    $("#tela1").css('display', 'flex')
})
$("#botao-dois").on('click', function(e){
    e.preventDefault()
    if(countClicks ==1){
    clicks--
    clicksCertos++
    countClicks++
    }
    $("#tela2").css('display', 'none')
    $("#tela3").css('display', 'flex')
})
//tela3
$("#returnTela2").on('click',function(e){
    e.preventDefault()
    $("#tela3").css('display', 'none')
    $("#tela2").css('display', 'flex')
})
$("#valor-pix").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInputPix){
    clicks--
    clicksCertos++
    clicouNoInputPix = true
    }
    
    
   
    
})




$("#botao-tres").on('click', function(e){
    e.preventDefault()
    
    
    let valorTransferencia = $("#valor-pix").val()
    
    if(valorTransferencia == "R$" || valorTransferencia == "R$ "){
        document.getElementById("message-error-saldo").innerText = "Por favor digite um valor"
        
    }else{
    valorTransferencia = valorTransferencia.split(' ')[1]
    if(valorTransferencia.includes(".")){
        valorTransferencia = valorTransferencia.replaceAll(".","")
    }
    // valorTransferencia = valorTransferencia.replaceAll(',','.')
    
    if(parseFloat(valorTransferencia.replaceAll(",",".")) > saldoInt){
        document.getElementById("message-error-saldo").innerText = "Saldo insuficiente"
    }
    else{
    valorTransferencia = fixValor(valorTransferencia)
    let camposValorTransferencia = document.getElementsByName("valor-transferencia")
    for(var i =0;i<camposValorTransferencia.length;i++){
        
        camposValorTransferencia[i].innerText = valorTransferencia
    }
    if(countClicks == 2){
    clicks--
    clicksCertos++
    countClicks++
    }
    clicouNoInputPix = false
    $("#tela3").css('display', 'none')
    $("#tela4").css('display', 'flex')
    }
    }
})


$("#returnTela3").on('click',function(e){
    e.preventDefault()
    $("#tela4").css('display', 'none')
    console.log("asas")
    $("#tela2").css('display', 'flex')
})

$("#returnTela4").on('click',function(e){
    e.preventDefault()
    $("#tela5").css('display', 'none')
    $("#tela4").css('display', 'flex')
})

$("#chave-um").on('click', function(e){
    e.preventDefault()
    if(countClicks ==3){
    clicks--
    clicksCertos++
    countClicks++
    }
    $("#tela4").css('display', 'none')
    $("#tela5").css('display', 'flex')
})

$(".chave-input-certo").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInputChave){
    clicks--
    clicksCertos++
    clicouNoInputChave = true
    }
   
    
})

$("#returnTela5").on('click',function(e){
    e.preventDefault()
    $("#tela6").css('display', 'none')
    $("#tela5").css('display', 'flex')
})



$("#transferir-btn").on('click', function(e){
    if($("#chave-input").val() != cpfCerto){
        document.getElementById("erro-cpf-font").innerText = "Chave invalida"
    }else{
    e.preventDefault()
    if(countClicks == 4){
    clicks--
    clicksCertos++
    countClicks++
    }
    clicouNoInputChave = false
    
    $("#tela5").css('display', 'none')
    $("#tela6").css('display', 'flex')
    }
})



$(".instituicao").on('click', function(e){
    e.preventDefault()
    if(countClicks == 5){
    clicks--
    clicksCertos++
    countClicks++
    }
    $("#tela6").css('display', 'none')
    $("#tela7").css('display', 'flex')
})


$("#returnTela6").on('click',function(e){
    e.preventDefault()
    $("#tela7").css('display', 'none')
    $("#tela6").css('display', 'flex')
})


$("#continue-btn").on('click', function(e){
    e.preventDefault()
    if(mensagem != "" && countClicks == 6){
    clicks--
    clicksCertos++
}
countClicks++
    $("#tela7").css('display', 'none')
    $("#tela8").css('display', 'flex')
})

$("#returnTela7Msg").on('click',function(e){
    e.preventDefault()
    $("#tela-mensagem").css('display', 'none')
    $("#tela7").css('display', 'flex')
})

$("#returnTela7").on('click',function(e){
    e.preventDefault()
    $("#tela8").css('display', 'none')
    $("#tela7").css('display', 'flex')
})

$("#returnTela8").on('click',function(e){
    e.preventDefault()
    $("#tela9").css('display', 'none')
    $("#tela8").css('display', 'flex')
})

$("#returnTela9").on('click',function(e){
    e.preventDefault()
    $("#tela10").css('display', 'none')
    $("#tela9").css('display', 'flex')
})

$(".saldo-conta").on('click', function(e){
    e.preventDefault()
    if(countClicks == 7){
    clicks--
    clicksCertos++
    countClicks++
    }
    $("#tela8").css('display', 'none')
    $("#tela9").css('display', 'flex')
})

$("#transferir-final-btn").on('click', function(e){
    e.preventDefault()
    if(countClicks == 8){
    clicks--
    clicksCertos++
    countClicks++
    }
    $("#tela9").css('display', 'none')
    $("#tela10").css('display', 'flex')
})


$("#senha").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInputPagamento){
    clicks--
    clicksCertos++
    clicouNoInputPagamento = true
    }
     
   
    
})

$("#alterar").on('click', ()=>{
    $("#tela7").css('display', 'none')
    $("#tela3").css('display', 'flex')
})

$("#senha").on('keyup', async function(e){
    e.preventDefault()
    let senha = $("#senha").val()
    if(senha.length == 4){
        pagamento(senha)
        
    }
})

$("#tela12").on('click', function(e){
    e.preventDefault()
    // clicks--
    // clicksCertos++
    // $("#tela12").css('display', 'none')
    // $("#tela1").css('display', 'flex')
    window.location.reload()
})


