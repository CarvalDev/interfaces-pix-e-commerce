let clicks = 0;
let clicksCertos =0;
let clicouNoInput = false
let nome = ""
let id;
let saldo = "R$ 200,00"
let dataInicio = new Date()

document.getElementById("chave-um").value = "Nome, CPF/CNPJ ou chav..."

//se clicar na tela, contabiliza um click

$("#entrar-btn").on('click', function(e){
    e.preventDefault()
    let email = $("#email").val()
    let senha = $("#password").val()
    console.log(email)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        data: {
            e:email,
            s:senha
        },
        url: '../app/controllers/login.php',
        async: true,
        
        success: (response) =>{
            
            if(response.error !== undefined){
                document.getElementById("message-error").innerText = "Email ou senha incorretos!"
            
            }else{
                $("#login").css('display', 'none')
                $("#tela1").css('display', 'flex')
                
                nome = response.usuario.nome
                id = response.usuario.id
                clicks =0
                clicksCertos = 0
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
    console.log(clicks)
    console.log(clicksCertos)
})

//tela1
$("#botao-um").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela1").css('display', 'none')
    $("#tela2").css('display', 'flex')
})
//tela2
$("#botao-dois").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela2").css('display', 'none')
    $("#tela3").css('display', 'flex')
})
//tela3

$("#valor-pix").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInput){
    clicks--
    clicksCertos++
    clicouNoInput = true
    }
   
    
})


$("#botao-tres").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    clicouNoInput = false
    $("#tela3").css('display', 'none')
    $("#tela4").css('display', 'flex')
})
$("#chave-um").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela4").css('display', 'none')
    $("#tela5").css('display', 'flex')
})

$(".chave-input-certo").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInput){
    clicks--
    clicksCertos++
    clicouNoInput = true
    }
   
    
})

$("#transferir-btn").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    clicouNoInput = false
    $("#tela5").css('display', 'none')
    $("#tela6").css('display', 'flex')
})

$(".instituicao").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela6").css('display', 'none')
    $("#tela7").css('display', 'flex')
})

$("#continue-btn").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela7").css('display', 'none')
    $("#tela8").css('display', 'flex')
})
$(".saldo-conta").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela8").css('display', 'none')
    $("#tela9").css('display', 'flex')
})

$("#transferir-final-btn").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela9").css('display', 'none')
    $("#tela10").css('display', 'flex')
})


$("#senha").on('click', function(e){
    e.preventDefault()
    if(!clicouNoInput){
    clicks--
    clicksCertos++
    clicouNoInput = true
    }
   
    
})

$("#senha").on('keyup', function(e){
    e.preventDefault()
    if($("#senha").val().length == 4){
        $("#tela10").css('display', 'none')
        $("#tela11").css('display', 'flex')
        let ct = clicks + clicksCertos
        let ce = clicks
        let pp;
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
                iu: iu,
                tt:tt
            },
            url: '../app/controllers/inserirTentativa.php',
            async: true,
            
            success: (response) =>{
                setTimeout(() =>{
                    document.getElementById('transferindo-font').innerText = "Gerando comprovante..."
                }, 1500)
                setTimeout(() =>{
                    $("#tela11").css('display', 'none')
                    $("#tela12").css('display', 'flex')
                }, 3000)
            },
            error: (e) =>{
                console.log(e)
            }
        })
        
    }
})

$("#tela12").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela12").css('display', 'none')
    $("#tela1").css('display', 'flex')
})


