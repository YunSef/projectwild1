/*function open close menu mobile*/

const menuBurger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu__mobile');
menuBurger.addEventListener('click', function(){
    menuMobile.classList.toggle('visible');
})

/*objet meter*/


const meter = {
    countFirstGame: 0,
    countSecondGame: 0,
    countThirdGame: 0,
    countFourthGame: 0,
    countTotal: 0,
    percentGame1: 0,
    percentGame2: 0,
    percentGame3: 0,
    percentGame4: 0,

//methode de récuperation des id des div et mise à jour des valeurs
    init: function (){
        const gauge1 = document.getElementById('meter_gauge1');
        const gauge2 = document.getElementById('meter_gauge2');
        const gauge3 = document.getElementById('meter_gauge3');
        const gauge4 = document.getElementById('meter_gauge4');

        
        gauge1.style.width = `${meter.percentGame1}%`;
        gauge2.style.width = `${meter.percentGame2}%`;
        gauge3.style.width = `${meter.percentGame3}%`;
        gauge4.style.width = `${meter.percentGame4}%`;

        },

//methode incrementation des variables en fonction des clicks
    clickMeter: () => {
        const game1 = document.getElementById('game_img1');
        const game2 = document.getElementById('game_img2');
        const game3 = document.getElementById('game_img3');
        const game4 = document.getElementById('game_img4');
        
        game1.addEventListener('click', function(){
            meter.countFirstGame++;
            meter.countTotal++;
            
            meter.percent();     
        });
        game2.addEventListener('click', function(){
            
            meter.countSecondGame++;
            meter.countTotal++;
            meter.percent(); 
        });
        game3.addEventListener('click', function(){
            
            meter.countThirdGame++;
            meter.countTotal++;
            meter.percent(); 
        });
        game4.addEventListener('click', function(){            
            meter.countFourthGame++;
            meter.countTotal++;
            meter.percent(); 
        });
        

    

    },
//methode de calcul du pourcentage pour chaque valeur
    percent: function(){
        meter.percentGame1 = parseInt(meter.countFirstGame * 100 / meter.countTotal);
        meter.percentGame2 = parseInt(meter.countSecondGame * 100 / meter.countTotal);
        meter.percentGame3 = parseInt(meter.countThirdGame * 100 / meter.countTotal);
        meter.percentGame4 = parseInt(meter.countFourthGame * 100 / meter.countTotal);

        meter.init();
    }


}

meter.clickMeter();

//fonction d'animation photo

const photoArray = ["./assets/images/imagesYun/imageYunsef1.jpg","./assets/images/imagesYun/imageYunsef2.jpg","./assets/images/imagesYun/imageYunsef3.jpg",
"./assets/images/imagesYun/imageYunsef4.jpg",
"./assets/images/imagesYun/imageYunsef5.jpg"];
const myImg = document.getElementById('yun_face');
let i = 0;
changeImg = function (){
    if(i<photoArray.length){
        myImg.src = photoArray[i];
        i++;
    }else{
        i = 0;
        myImg.src = photoArray[i];
        i++;
    }
};
setInterval(changeImg, 500);