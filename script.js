let level = 1;

function startGame(game){

    if(game === 1){

        document.getElementById("gameArea").innerHTML = `
        <h2>❤️ Hearts Pakdo ❤️</h2>
        <p>15 hearts collect karo Didi 🎀</p>
        <div id="heartBox"></div>
        <h3 id="score">Hearts: 0/15</h3>
        `;

        let score = 0;

        let heartBox = document.getElementById("heartBox");

        let timer = setInterval(()=>{

            let heart = document.createElement("button");

            heart.innerHTML="❤️";

            heart.style.width="50px";
            heart.style.height="50px";
            heart.style.margin="5px";
            heart.style.fontSize="25px";
            heart.style.background="#ff4fa0";

            heart.onclick=function(){

                score++;

                document.getElementById("score").innerHTML=
                "Hearts: "+score+"/15";

                heart.remove();


                if(score>=15){

                    clearInterval(timer);

                    document.getElementById("gameArea").innerHTML=
                    `
                    <h2>🎉 Congratulations Didi 🎉</h2>
                    <p>Game 1 Complete ❤️</p>
                    `;

                    unlockGame(2);
                }

            };


            heartBox.appendChild(heart);


            setTimeout(()=>{
                heart.remove();
            },3000);


        },800);

    }

}



function unlockGame(num){

    let btn=document.getElementById("game"+num);

    if(btn){
        btn.disabled=false;
        btn.innerHTML="🔓 Game "+num;
    }

}
function startGame(game){

    if(game === 2){

        document.getElementById("gameArea").innerHTML = `
        <h2>🎀 Bow Catch Game 🎀</h2>
        <p>10 cute bows pakdo Didi ❤️</p>
        <div id="bowBox"></div>
        <h3 id="bowScore">Bows: 0/10</h3>
        `;

        let score = 0;
        let bowBox = document.getElementById("bowBox");


        let timer = setInterval(()=>{

            let bow = document.createElement("button");

            bow.innerHTML="🎀";

            bow.style.width="60px";
            bow.style.height="60px";
            bow.style.margin="5px";
            bow.style.fontSize="30px";
            bow.style.background="#ffb6d9";


            bow.onclick=function(){

                score++;

                document.getElementById("bowScore").innerHTML =
                "Bows: "+score+"/10";

                bow.remove();


                if(score>=10){

                    clearInterval(timer);

                    document.getElementById("gameArea").innerHTML=
                    `
                    <h2>🎀 Great Didi 🎀</h2>
                    <p>Bow Game Complete ❤️</p>
                    `;

                    unlockGame(3);

                }

            };


            bowBox.appendChild(bow);


            setTimeout(()=>{
                bow.remove();
            },2500);


        },900);

    }

}
