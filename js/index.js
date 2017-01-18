var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

$("#home").click(function(){
   window.location.href='home.html';
})

$("#travel").click(function(){
   window.location.href='travel.html';
})

$("#photography").click(function(){
   window.location.href='photography.html';
})

$("#lifestyle").click(function(){
   window.location.href='lifestyle.html';
})

$("#portfolio").click(function(){
   window.location.href='portfolio.html';
})

$("#aboutme").click(function(){
   window.location.href='aboutme.html';
})