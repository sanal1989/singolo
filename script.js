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
//Portfolio. Взаимодействие с картинками
const imageBorder = (event) =>{
  document.querySelectorAll('img').forEach((el) => el.classList.remove('imgBorder'));
  event.target.classList.add('imgBorder');
    console.log('border');
}
//Get a quote
function valid (form){
  let subject = form.subject.value;
  let description = form.description.value;
  if(subject==''){
    subject='Без темы';
  }
  if(description==''){
    description='Без описания';
  }
  alert("Письмо отправлено\nТема: "+subject+"\nОписание: "+description);
  // var newWin = window.open("about:blank", "Письмо отправлено", "width=200,height=200");
  // newWin.document.writeln("Письмо отправлено<br>");
  // newWin.document.write("Тема: ");
  // newWin.document.write(subject);
  // newWin.document.write("<br>");
  // newWin.document.write("Описание: ");
  // newWin.document.writeln(description);
}

document.querySelector('.image').addEventListener('click',imageBorder);
document.querySelector('.vPhone').addEventListener('click',inbg);
document.querySelector('.hPhone').addEventListener('click',inbgHP);
document.querySelector('ul').addEventListener('click',inlogger);