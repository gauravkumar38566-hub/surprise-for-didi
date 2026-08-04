function startGame(game){

    if(game === 1){

        document.getElementById("gameArea").innerHTML = `
        <h2>❤️ Hearts Pakdo ❤️</h2>
        <p>15 hearts collect karo Didi 🎀</p>
        <div id="heartBox"></div>
        <h3 id="score">Hearts: 0/15</h3>
        `;

        let score = 0;
        let box = document.getElementById("heartBox");

        let timer = setInterval(()=>{

            let heart = document.createElement("button");

            heart.innerHTML="❤️";

            heart.onclick=function(){

                score++;

                document.getElementById("score").innerHTML =
                "Hearts: "+score+"/15";

                heart.remove();

                if(score>=15){

                    clearInterval(timer);

                    document.getElementById("gameArea").innerHTML=
                    "🎉 Game 1 Complete ❤️";

                    unlockGame(2);
                }
            };

            box.appendChild(heart);

        },800);

    }



    if(game === 2){

        document.getElementById("gameArea").innerHTML = `
        <h2>🎀 Bow Catch Game 🎀</h2>
        <p>10 bows pakdo Didi ❤️</p>
        <div id="bowBox"></div>
        <h3 id="bowScore">Bows: 0/10</h3>
        `;


        let score = 0;
        let box = document.getElementById("bowBox");


        let timer = setInterval(()=>{

            let bow = document.createElement("button");

            bow.innerHTML="🎀";


            bow.onclick=function(){

                score++;

                document.getElementById("bowScore").innerHTML =
                "Bows: "+score+"/10";

                bow.remove();


                if(score>=10){

                    clearInterval(timer);

                    document.getElementById("gameArea").innerHTML=
                    "🎉 Game 2 Complete 🎀";

                    unlockGame(3);

                }

            };


            box.appendChild(bow);


        },900);

    }

}



function unlockGame(num){

    let btn=document.getElementById("game"+num);

    if(btn){

        btn.disabled=false;
        btn.innerHTML="🔓 Game "+num;

    }

}
