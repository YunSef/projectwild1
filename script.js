/*function open close menu mobile*/

const menuBurger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu__mobile');
menuBurger.addEventListener('click', function(event){
    menuMobile.classList.toggle('visible');
})

/*function meter*/

/*const gaugeArray = ["meter_gauge1", "meter_gauge2", "meter_gauge3", "meter_gauge4"];
const gameImgArray = ["game_img1", "game_img2", "game_img3", "game_img4"];*/
const game1 = document.querySelector('#game_img1');
const game2 = document.querySelector("#game_img2");
const game3 = document.querySelector("#game_img3");
const game4 = document.querySelector("#game_img4");

const meterGauge1 = document.querySelector("#meter_gauge1");
const meterGauge2 = document.querySelector("#meter_gauge2");
const meterGauge3 = document.querySelector("#meter_gauge3");
const meterGauge4 = document.querySelector("#meter_gauge4");
function meter (){
let gameCount1 = 0;
let gameCount2 = 0;
let gameCount3 = 0;
let gameCount4 = 0;
const gameCountTotal = gameCount1 + gameCount2 + gameCount3 + gameCount4;


game1.addEventListener('click', function(){
    gameCount1++;
    return gameCount1;
});
game2.addEventListener('click', function(){
    gameCount2++;
    return gameCount2;
});
game3.addEventListener('click', function (){
    return gameCount3;
});
game4.addEventListener('click', function(){
    gameCount4++;
    return gameCount4;
});
console.log(gameCount1);
console.log(gameCount2);
console.log(gameCount3);
console.log(gameCount4);
console.log(gameCountTotal);

meterGauge1.style.width = `${parseInt(gameCount1) / 100 * gameCountTotal}%`;
meterGauge2.style.width = `${parseInt(gameCount2) / 100 * gameCountTotal}%`;
meterGauge3.style.width = `${parseInt(gameCount3) / 100 * gameCountTotal}%`;
meterGauge4.style.width = `${parseInt(gameCount4) / 100 * gameCountTotal}%`;
}