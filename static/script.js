var width_ = screen.availWidth;
var height_ = screen.availHeight;


$('#theme').change(function() {
    // this will contain a reference to the checkbox  
     
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
});


$('#menu-toggle').change(function() {
  $('#topMenu').removeClass('showMenu');
  $('#topMenu').addClass('hideMenu');
  $(".IconImg-Mob").css("display","none")
});

$('#menu-toggle1').change(function() {
  $('#topMenu').removeClass('hideMenu');
  $('#topMenu').addClass('showMenu');
  setTimeout(()=>$(".IconImg-Mob").css("display","flex"),400)
        
});


if (width_ <= 767) { //screen.width;
  $('#NameM1T1').html('Rafael Moreira')
  $('#btn1M1').html(`Competências
								<div class="seta seta-direita"></div>`	)
  $('#btn2M1').html(`Curriculum
								<div class="seta seta-direita"></div>`	)
  $('#topMenu').css("min-height",height_+"px")
  $('#topMenu').css("max-height",height_+"px")

}

$("#btn1M1").click((e)=>{
  window.location.href = "#competencias";
})

$('#btn2M1').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = 'static/RafaelMoreira_Curriculo.pdf';
});

$(".projM6").mouseover((e)=>{
  $('#'+e.currentTarget.id+' .modalM6').css('display', 'flex')
})

$(".projM6").mouseout((e)=>{
  $('#'+e.currentTarget.id+' .modalM6').css('display', 'none')
})

$(".projM6").click((e)=>{
  let objAtt = e.currentTarget.getAttribute("details")
  $('#'+objAtt).css('display', 'flex')
  $('#backDetailsM6').css('display', 'block')
})


$(".btnsDetM6 .clsbtnM6").click((e)=>{
  $('.detailsM6').css('display', 'none')
  $('#backDetailsM6').css('display', 'none')
})


$(".detbtnM6").click((e)=>{
  //""
  let templates = ["portfolioV2","dailyLiturgy","bibleAPI","chessGame","chatApp","mailTemplate","foodDev",
    "portfolioV1","safiraShop","geraFolhaAnaltc","documentations","gerencHotelaria"]
  let objAtt = e.currentTarget.getAttribute("page");
  templates.includes(objAtt) ? window.location.href = "projects/"+objAtt+'.html' : alert("Em desenvolvimento");
})




//EASTER EGG
let easterList = [];
$("#logoImgM1").click(()=>{
  let randNumber;

  for (let x = 0; x<100; x++){
    
    randNumber = Math.floor(Math.random() * 20)
    if (!easterList.includes(randNumber)){
      easterList.push(randNumber)
      randNumber = 'easter/'+randNumber+'.jpg';
      break;
    }
    if (x==99){
      randNumber = 'imgs/logoIcon.jpg'
    }

  }
  
  $("#EasterEgg").append( `<div class="EasterImg bounce-in-top" 
  style="background-image: url('./static/${randNumber}');
  left: ${Math.floor(Math.random() * 100)}%;"
  ></div>`);

})
//



// SCROOL EVENT 

window.addEventListener('scroll', function(event) {






  // M2 elements
  
  const imgM2 = returnScrollPosObj("#imgM2")
  if (imgM2.top/(window.pageYOffset) > 1.8){
    imgM2.objeto.style.transform = `scale(1.4)`

  }else if (imgM2.top/(window.pageYOffset) < 2 && imgM2.top/(window.pageYOffset) > 1){
    imgM2.objeto.style.transform = `scale(${imgM2.top/(window.pageYOffset)})`

  }else{
    imgM2.objeto.style.transform = `scale(1)`
  }

  const titleM2 = returnScrollPosObj("#titleM2")
  if (titleM2.position > 0 && titleM2.position < 1000){
    titleM2.objeto.style.transform = `translateX(${titleM2.top - (window.pageYOffset*0.8)}px)`
  }else{
    titleM2.objeto.style.transform = `translateX(0px)`
  }


  const textP1M2 = returnScrollPosObj("#textP1M2")
  if (textP1M2.position > 200 && textP1M2.position < 1000){
    textP1M2.objeto.style.transform = `translateY(${textP1M2.top*0.10}px)`
  }else{
    textP1M2.objeto.style.transform = `translateY(0px)`
  }

  
  const textP2M2 = returnScrollPosObj("#textP2M2")
  if (textP2M2.position > 200 && textP2M2.position < 1000){
    textP2M2.objeto.style.transform = `translateY(${textP2M2.top*0.10}px)`
  }else{
    textP2M2.objeto.style.transform = `translateY(0px)`
  }


 });


 function returnScrollPosObj(query){

  const objHTML = document.querySelector(query)
  const objTop = objHTML.getBoundingClientRect().top
  const objPos = objTop - (window.pageYOffset*0.8)

  return {objeto: objHTML,top: objTop, position: objPos}
 }