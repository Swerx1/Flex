const scrollMenu= document.querySelector('.HeaderOfFirstBlock');
window.addEventListener('scroll', function (e){

    if(window.pageYOffset > screen.height-200){
        scrollMenu.style.background = '#2e3784';
    }
    else{ scrollMenu.style.background = 'none';}
})

const playBT = document.querySelector('.OvalRadius');
const myVideo= document.getElementById('MyVidos')
playBT.addEventListener('click', function (e){

    if(myVideo.paused){
        myVideo.play();
    }else{
        myVideo.pause();
    }
})
const month = document.querySelector('.LeftButtonOf7Block');
const year = document.querySelector('.RightButtonOf7Block');
month.addEventListener('click', function (e){
    month.style.background = '#50E3C2';
    month.style.borderRadius = '23px';
    year.style.background = 'none';
    for(let i=0; i<textYearAfter.length; i++) {
        textYear[i].innerHTML="$"+(i+1)+"9";
        textYearAfter[i].innerHTML = "/ month";
    }
})
const textYear = document.querySelectorAll('.TypeOfDollar');
const textYearAfter = document.querySelectorAll('.TypeOfAfterDollar')
year.addEventListener('click', function (e){
    year.style.background = '#50E3C2';
    year.style.borderRadius = '23px';
    month.style.background = 'none';
    for(let i=0; i<textYearAfter.length; i++) {
        textYear[i].innerHTML="$"+(i+1)+"90";
        textYearAfter[i].innerHTML = "/ year";
    }
})
const card = document.querySelectorAll('.CardWithPrice');
const leftRect = document.querySelector('.Rectangl');
const rigthRect = document.querySelector('.BlueRectangl');

card[0].addEventListener('click', function (e){
    leftRect.style.background = '#50E3C2';
    rigthRect.style.background = 'none';
})
card[1].addEventListener('click', function (e){
    leftRect.style.background = 'none';
    rigthRect.style.background = '#50E3C2';
})

let vseValyuti;
fetch('https://developerhub.alfabank.by:8273/partner/1.0.0/public/nationalRates')
    .then(response => response.json())
    .then(currencyExchange =>{
        vseValyuti = currencyExchange;
        const money = {
            usd :{},
            eur:{},
            rub:{}
        }
        money.usd = vseValyuti.rates.find((rate)=> rate.iso ==='USD')
        money.eur = vseValyuti.rates.find((rate)=> rate.iso ==='EUR')
        money.rub = vseValyuti.rates.find((rate)=> rate.iso ==='RUB')
        document.querySelector('.currency-usd').innerHTML = money.usd.rate;
        document.querySelector('.currency-eur').innerHTML = money.eur.rate;
        document.querySelector('.currency-rub').innerHTML = money.rub.rate;
    })