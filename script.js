//Header
const inlogger = (event) =>{
  document.querySelectorAll('li').forEach(li=>li.style.background ='')
  event.target.parentElement.style.background = 'red';
  console.log('click');
}

 
// Slider. Активация экранов телефонов
let screenOnVP = false;
const inbg = (event) =>{
  if(screenOnVP == false){
    document.querySelector('.picture').style.background = 'black';
    screenOnVP =true;
  }else{
    document.querySelector('.picture').style.background = 'url(\'assets/image/verticalphone/Layer\ 6.png\')';
    screenOnVP =false;
  }
}
let screenOnHP = false;
const inbgHP = (event) =>{
  if(screenOnHP == false){
    document.querySelector('.darkDisplay').style.background = 'url(\'assets/image/horisontalphone/Layer\ 5.svg\')';
    screenOnHP =true;
  }else{
    document.querySelector('.darkDisplay').style.background='url(\'assets/image/horisontalphone/ScreenGP.png\')';
    screenOnHP =false;
  }
}

const imageBorder = (event) =>{
  document.querySelectorAll('img').forEach((el) => el.classList.remove('imgBorder'));
  event.target.classList.add('imgBorder');
    console.log('border');
}

document.querySelector('.image').addEventListener('click',imageBorder);
document.querySelector('.vPhone').addEventListener('click',inbg);
document.querySelector('.hPhone').addEventListener('click',inbgHP);
document.querySelector('ul').addEventListener('click',inlogger);