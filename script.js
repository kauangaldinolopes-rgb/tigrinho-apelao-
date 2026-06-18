
const simbolos = ["🍒", "🍋", "🍊", "🍉", "⭐", "🔔"];

function girar() {
  const r1 = simbolos[Math.floor(Math.random() * simbolos.length)];
  const r2 = simbolos[Math.floor(Math.random() * simbolos.length)];
  const r3 = simbolos[Math.floor(Math.random() * simbolos.length)];

  document.getElementById("reel1").textContent = r1;
  document.getElementById("reel2").textContent = r2;
  document.getElementById("reel3").textContent = r3;

  const resultado = document.getElementById("resultado");

  if (r1 === r2 && r2 === r3) {
    resultado.textContent = "🎉 Você ganhou (modo demo)!";
  } else {
    resultado.textContent = "Tente novamente 😄";
  }
}
