$(document).ready(function(){
    $('.hamburgerMenu').click(function() {
      $('nav').toggleClass('mobile');
    });

//Combo Slider
    $("#container button").click(function() {
      if($(this).hasClass("prev")){
        plusDivs(-1)
      } else if($(this).hasClass("next")){
        plusDivs(1)
      } else if ($(this).hasClass("demo")){
        var num = Number($(this).text());
        currentDiv(num);
      }
    });


    if ($('.slider').length) {
      var slideIndex = 1;
      showDivs(slideIndex);
    }
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }

    function currentDiv(n) {
      showDivs(slideIndex = n);
    }

    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" w3-red", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " w3-red";
    }

    //Cereal Generator
    $('.cerealGenerator button').click(function() {
        $('.hit').text(randomEl(adjectives)+' '+randomEl(nouns));
        selectElementContents($('.hit')[0]);
    });

    function randomEl(list) {
        var i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    function selectElementContents(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    var adjectives = ["Hot", "Dry", "Cold", "Cooked", "Important", "Whole", "Non", "Grain", "Favorite", "Only", "Eat", "Fortified", "Chief", "Infant", "Fiber", "Main", "Principal", "Bread", "Bran", "Breakfast", "Prepared", "Popular", "Coated", "Sugared", "Sugary", "Unsweetened", "Sweet", "Mixed", "Wheat", "Soggy", "Nutritious", "Refined", "Crispy",  "Crisp", "Coarse", "Warm", "Crunchy", "Dominant", "Flaked", "Delicious", "Cultivated", "Wild", "Instant", "Enriched", "Preferred", "Strained", "Puffed", "Raw", "Valuable", "Brown", "Nuts", "Thick", "Predominant", "Favorite", "Thin", "Flavored", "Boxed", "Hardy", "Healthy", "Uncooked", "Enough", "Presweetened", "Based", "Legume", "Shaped"];
    var nouns = ["Flakes","Holes", "O's", "Puffs", "Crisp", "Smacks", "Squares", "Charms", "Bran", "Delight", "Bits", "Berries", "Crunch", "Toasters", "Balls", "Nut", "Bites", "Munch", "Grahams", "Oats", "Bits"];

    $('.cerealGenerator button').click();
})