let clicks = 0;
let clicksCertos =0;

//se clicar na tela, contabiliza um click
$(document).on('click', function(e){
    e.preventDefault()
    clicks++
    console.log(clicks)
    console.log(clicksCertos)
})

//botao 1, manda para a segunda tela
$("#botao-um").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela1").css('display', 'none')
    $("#tela2").css('display', 'flex')
})

$("#botao-dois").on('click', function(e){
    e.preventDefault()
    clicks--
    clicksCertos++
    $("#tela2").css('display', 'none')
    // $("#tela2").css('display', 'flex')
})