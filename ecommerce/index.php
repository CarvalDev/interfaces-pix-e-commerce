<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - MultiShop</title>
    <link rel="stylesheet" href="./css/login.css">
</head>
<body>
    <div id="login-page">
      <h1>MultiShop</h1>
      <form id="login-form" action="./login.php" method="post">
        <div>
          <label for="email-cpf-cnpj">Já sou cliente</label>
          <input type="text" id="email" name="e" placeholder="E-mail" required />
        </div>
        <div>
          <label for="password">Senha</label>
          <input type="password" id="password" name="s" placeholder="••••••••" required />
          <input type="hidden" id="ct" name="clicksTotais">
          <input type="hidden" id="ce" name="clicksErrados">
          <input type="hidden" id="tt" name="tempoTentativa">

        </div>
        <div>
          <button id="login">ACESSAR CONTA</button>
          <?php if(isset($_GET['erro'])){
            ?>
          <h4 style="color: rgb(226, 29, 29);">Email ou senha incorretos!</h4>
          <?php
          }
          ?>
        </div>
        <div>
          <p>Acesse sua conta MultiShop através de suas redes sociais.</p>
          <button type="button" id="social-login">PROSSEGUIR</button>
        </div>
        <div>
          <a href="#">Esqueci minha senha</a>
        </div>
      </form>
    </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

  <script src="./js/geral.js"></script>
  <script>
    let dataInicio = new Date()
    const resolveData = (num) =>{
    
    if(num.toString().length <2){
        return `0${num}`
    }
    return num
}
console.log(dataInicio.getMonth())
    let stringData = `${dataInicio.getFullYear()}-${resolveData(dataInicio.getMonth() +1) }-${resolveData(dataInicio.getDate())} ${resolveData(dataInicio.getHours())}:${resolveData(dataInicio.getMinutes())}:${resolveData(dataInicio.getSeconds())}`
    localStorage.setItem("dataInicio", stringData)
  </script>
</html>