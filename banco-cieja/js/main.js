let clicks =0;
let clicksCertos =0;
let lugaresCertos = [true, true, true, true]
let nomeUsuario;
let dataInicio = new Date()
let tipo = "pix-cieja"
let idTentativa
$(document).click(() =>{
    clicks++
    console.log(clicks)
    console.log(clicksCertos)
})


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
            $("#tela-login").css('display', 'none')
            $("#tela-home").css('display','flex')
            $("#body").css('height', '108vh')
            }
            
        },
        error: (e) =>{
            console.log(e)
        }
    })
    console.log(idTentativa)
    
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

