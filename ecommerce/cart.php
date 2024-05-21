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
                    <span class="breadcrumb-item active">Carrinho</span>
                </nav>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->


    <!-- Cart Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-lg-8 table-responsive mb-5">
                <table class="table table-light table-borderless table-hover text-center mb-0">
                    <thead class="thead-dark">
                        <tr>
                            <th>Produtos</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                        <?php  
                        if(!isset($_GET['nome'])){
                            ?>
                        <tr>
                            <td>Sem produtos</td>
                        </tr>
                        <?php 
                        }else{
                        ?>
                        <tr>
                            <td class="align-middle"><img id="imagem" src="" alt="" style="width: 50px;"><?=$_GET['nome']?></td>
                            <td class="align-middle"><?=$_GET['preco']?></td>
                            <td class="align-middle">
                                <div class="input-group quantity mx-auto" style="width: 100px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-minus" >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control form-control-sm bg-secondary border-0 text-center" value="1">
                                    <div class="input-group-btn">
                                        <button class="btn btn-sm btn-primary btn-plus">
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle">R$150</td>
                            <td class="align-middle"><button class="btn btn-sm btn-danger"><i class="fa fa-times"></i></button></td>
                        </tr>
                        <?php 
                        }
                        ?>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <form class="mb-30" action="">
                    <div class="input-group">
                        <input type="text" class="form-control border-0 p-4" placeholder="Código Cupom">
                        <div class="input-group-append">
                            <button class="btn btn-primary">Cupom</button>
                        </div>
                    </div>
                </form>
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Resumo</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="border-bottom pb-2">
                        <div class="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <?php 
                            if(isset($_GET['preco'])){
                            ?>
                            <h6><?=$_GET['preco']?></h6>
                            <?php 
                            }else{
                            ?>
                            <h6>R$0.00</h6>
                            <?php 
                            }
                            ?>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Frete</h6>
                            <h6 class="font-weight-medium">A calcular</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <?php 
                            if(isset($_GET['preco'])){
                            ?>
                            <h6><?=$_GET['preco']?></h6>
                            <?php 
                            }else{
                            ?>
                            <h6>R$0.00</h6>
                            <?php 
                            }
                            ?>
                        </div>
                        <?php 
                        if(isset($_GET['preco'])){
                        ?>
                        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" id="btn-checkout">Fazer Checkout</button>
                        <?php  
                        }else{
                        ?>
                        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3">Fazer Checkout</button>
                        <?php 
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Cart End -->


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
    <script>
        document.getElementById("imagem").src =localStorage.getItem("carrinho")
    </script>
    <script src="js/carrinho.js"></script>
    <script src="js/geral.js"></script>
</body>

</html>