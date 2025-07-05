// senha-checker.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarSenha(senha) {
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
  const temMinimo = senha.length >= 8;

  const pontos = [temMaiuscula, temMinuscula, temNumero, temEspecial, temMinimo].filter(Boolean).length;

  if (!senha) return "Digite uma senha!";
  if (pontos <= 2) return "🔴 Senha fraca";
  if (pontos <= 4) return "🟠 Senha média";
  return "🟢 Senha forte";
}

function iniciarVerificacao() {
  rl.question("Digite sua senha: ", (input) => {
    const resultado = verificarSenha(input);
    console.log("\nResultado:", resultado);
    rl.close();
  });
}

iniciarVerificacao();
