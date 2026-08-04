const message = `💖 Dear Didi,

Aap meri life ki sabse special didi ho ❤️

Thank you hamesha mera saath dene ke liye.

Aaj ka mission 😎

👇

15 Hearts pakdo aur Surprise unlock karo!

Love You Didi 💖`;

let i = 0;

function typeWriter() {
  if (i < message.length) {
    document.getElementById("typewriter").innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

window.onload = () => {
  typeWriter();

  for (let j = 0; j < 25; j++) {
    const h = document.createElement("div");
    h.className = "floatHeart";
    h.innerHTML = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(h);
  }
};

let score = 0;

document.getElementById("startBtn").onclick = function () {

  this.style.display = "none";

  document.getElementById("game").style.display = "block";

  createHeart();

};

function createHeart() {

  if (score >= 15) {

    alert("🎉 Congratulations Didi! 💖\n\nYou are the World's Best Sister ❤️🥹");

    return;

  }

  const heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 250 + "px";

  heart.style.top = Math.random() * 220 + "px";

  heart.onclick = function () {

    score++;

    document.getElementById("score").innerText = score;

    heart.remove();

    createHeart();

  };

  document.getElementById("playArea").appendChild(heart);

}
