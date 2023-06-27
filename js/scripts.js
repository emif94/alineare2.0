/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

  //"Urgencias" Alert
  /*Swal.fire({
    title: '<strong>Tenés una urgencia?</strong>',
    icon: 'info',
    html:
      'Contamos con servicio de <b>Urgencias 24hs</b>',
    showCloseButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    focusConfirm: false,
    cancelButtonText:
    'No, gracias',

    footer:` <a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=5492613725884&text=Hola!%20Tengo%20una%20urgencia%20y%20necesito%20un%20turno%20por%20favor." target="_blank"> 
                <i class="fa-solid fa-bolt" style="color: #ffffff;"></i> Turno Urgencia
            </a>`
  })*/

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const navbarTextColor = document.body.querySelectorAll('.navbarItems');
        console.log(navbarTextColor)
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            navbarTextColor.forEach(function(item) {
              item.classList.add('navbarTextColor');
            });
            

        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            navbarTextColor.forEach(function(item) {
              item.classList.remove('navbarTextColor');
            });
            
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
function checkWidget() {
    const widget = document.querySelector('.Widget__FreeLinkLabel-sc-3jr9ts-3');
    if (widget) {
      widget.remove();
    }
  }
  
  setTimeout(checkWidget, 500);
  setTimeout(checkWidget, 1000);
  setTimeout(checkWidget, 4000);
  
  
checkWidget();
// Call the removeWidget function after the page has loaded
/*


//Before After Slider Function -->>>
const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.getElementById('resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
  active = true;
 resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
  active = false;
 resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
  x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
    let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
    before.style.width = transform+"px";
    resizer.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
} */


//Before After Slider Function END--<<<

/*Success Message After Form----------------------->>>*/
/*
const indexBody = document.getElementsByClassName("fullBody");

const submitButton = document.getElementById ("submitButton")
submitButton.addEventListener("click", successForm);

function successForm() {
   document.body.innerHTML= `
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Enviado!</title>
           <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
           <link   rel="stylesheet"    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
           <link rel="preconnect" href="https://fonts.googleapis.com">
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
           <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;1,300&display=swap" rel="stylesheet">
           <style>
               body {
               text-align: center;
               padding: 40px 0;
               background: #dcd5e0;
               }
               h1 {
               color: #600293;
               font-family: 'Plus Jakarta Sans', sans-serif;
               font-weight: 500;
               font-size: 40px;
               margin-bottom: 10px;
               }
               p {
               color: #4f0279;
               font-family: 'Plus Jakarta Sans', sans-serif;
               font-weight: 300;
               font-size:20px;
               font-style: italic;
               margin: 0;
               }
               i {
               color: rgb(5, 88, 5);
               font-size: 100px;
               line-height: 200px;
               margin-left:-15px;
               }
               .card {
               background: #d09eeb;
               padding: 60px;
               border-radius: 30px;
               box-shadow: 0 2px 3px #C8D0D8;
               display: inline-block;
               margin: 0 auto;
               }
               #countdown {
               font-size: 30px;
               margin-top: 20px;
               }    
               .animate__animated.animate__fadeIn {
               --animate-delay: 1s;
               --animate-duration: 10s;
               }
               .animate__animated.animate__zoomInDown {
               --animate-duration: 2s;
               }    
               .animate__animated.animate__tada {
               ---animate-duration: 6s;
                           }
               .animate__animated.animate__shakeY {
               --animate-delay: 1s;
               --animate-duration: 12s;
                           }
           </style>
       </head>
       <body>
           <div class="card animate__animated animate__flipInX">
           <div class="animate__animated animate__zoomInDown" style="border-radius:200px; height:200px; width:200px; background: white; margin:0 auto;">
               <i class="checkmark">✓</i>
           </div>
           <h1>Enviado!</h1> 
           <p>Hemos recibido tu consulta, <br/> Nos comunicaremos en breve!</p>
           
   
           <div class="animate__animated animate__shakeY"><img class="animate__animated animate__fadeIn" style="max-height: 80px; padding-bottom: 0px;"src="/assets/img/alineare-logo-2.svg"></div>
           <div style="color:white; font-size: 15px; font-family:'Plus Jakarta Sans', sans-serif; ;" id="countdown"></div>
           </div>
   
           <script>
           // Countdown function
           function countdown() {
               var seconds = 6;
               var countdownElement = document.getElementById("countdown");
   
               var countdownInterval = setInterval(function() {
               countdownElement.innerHTML = "Redirigiendo..." ;
               seconds--;
               if (seconds < 0) {
                   clearInterval(countdownInterval);
                   window.location.href = "../index.html";
               }
               }, 1000);
           }
   
           // Start countdown on page load
            countdown();
           </script>
       </body>
   </html>`
  
}*/

/*END Success Message After Form------------------->>>*/ 