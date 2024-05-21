<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <title>MultiShop - Loja Online</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">  

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
<?php  
        require_once('./partials/header.html')
    ?>


    <!-- Breadcrumb Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-12">
                <nav class="breadcrumb bg-light mb-30">
                    <a class="breadcrumb-item text-dark" href="#">Home</a>
                    <a class="breadcrumb-item text-dark" href="#">Comprar</a>
                    <span class="breadcrumb-item active">Checkout</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->


    <!-- Checkout Start -->
    <div class="container-fluid">
        <div class="row px-xl-5" >
            <div class="col-lg-8">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Endereço</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label>Primeiro Nome</label>
                            <input name="input" class="form-control" type="text" placeholder="Nome"
                            required="required" data-validation-required-message="Please enter your email" >
                            
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Sobrenome</label>
                            <input name="input" class="form-control" type="text" placeholder="Sobrenome"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        <div class="col-md-6 form-group">
                            <label>E-mail</label>
                            <input name="input" class="form-control" type="text" placeholder="email@gmail.com"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                       
                        <div class="col-md-6 form-group">
                            <label>CEP</label>
                            <input name="input" class="form-control" id="logr" type="text" placeholder="CEP"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Logradouro</label>
                            <input name="input" class="form-control" id="logr" type="text" placeholder="Endereço"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        
                       
                        <div class="col-md-6 form-group">
                            <label>Cidade</label>
                            <input name="input" class="form-control" id="cidade" type="text" placeholder="Cidade"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Estado</label>
                            <input name="input" class="form-control" id="estado" type="text" placeholder="Estado"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Número</label>
                            <input name="input" class="form-control" id="num" type="text" placeholder="Número"
                            required="required" data-validation-required-message="Please enter your email" >
                        </div>
                        <div class="col-md-12 d-flex w-100 justify-content-center align-items-center form-group">
                            <h4 id="campos-vazios" class="text-danger"></h4>
                        </div>
                        <div class="col-md-12">
                           
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="col-lg-4">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Pedido</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom">
                        <h6 class="mb-3">Produto</h6>
                        <div class="d-flex justify-content-between">
                            <p id="nome-prod"><?=$_GET['nome']?></p>
                            <p id="preco-prod"><?=$_GET['preco']?></p>
                        </div>
                        
                    </div>
                    <div class="border-bottom pt-3 pb-2">
                        <div class="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6><?=$_GET['preco']?></h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Frete</h6>
                            <h6 class="font-weight-medium" id="frete">A calcular</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5 id="total"><?=$_GET['preco']?></h5>
                        </div>
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Pagamento</span></h5>
                    <div class="bg-light p-30">
                        <div class="form-group">
                            <h5>Selecione uma forma de pagamento</h5>
                            <div class="custom-control custom-radio">
                                <input type="radio" value="cartao" class="custom-control-input" name="payment" id="paypal">
                                <label class="custom-control-label" id="cartao-btn" for="paypal">Cartão</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" value="pix" class="custom-control-input" name="payment" id="directcheck">
                                <label class="custom-control-label" for="directcheck">PIX</label>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" value="boleto" class="custom-control-input" name="payment" id="banktransfer">
                                <label class="custom-control-label" for="banktransfer">Boleto</label>
                            </div>
                        </div>
                        <p id="erro-pagamento"></p>
                        <button id="btn-confirma" class="btn btn-block btn-primary font-weight-bold py-3">Confirmar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->


    <?php 
        require_once("./partials/footer.html")
    ?>


    <!-- Back to Top -->
    <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>


    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Contact Javascript File -->
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <script src="js/carrinho.js"></script>
    <script>
        let freteOk = false
        const fixTotal = () =>{
            let total =document.getElementById("total").innerText.split("R$")[1]
            total =(parseFloat(total) + 22.90)
            console.log(total)
            document.getElementById("total").innerText = "R$"+total.toFixed(2)
            freteOk = true
        }
        setInterval(() =>{
        if($("#logr").val() != "" 
        && $("#cidade").val() != ""
        && $("#estado").val() != ""
        && $("#num").val() != ""
        ){
            document.getElementById("frete").innerText = "R$22.90"
            if(!freteOk){
                fixTotal()
            }
        }
    },1000)
    localStorage.setItem('endereco', undefined)
    </script>
    <script src="js/geral.js"></script>
</body>

</html>