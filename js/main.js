$(window).on("load",function(){
    $(".preloader").addClass("loaded");
 })

$(document).ready(function () {

  // nav toggle
  $(".nav-toggle").click(function(){
    $(".header .nav").slideToggle();
  })
  $(".header .nav a").click(function(){
    if($(window).width() < 768){
       $(".header .nav").slideToggle();
    }
  })

  // fixed header 
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".header").addClass("fixed");
    }
    else{
      $(".header").removeClass("fixed");
    }
  })

  // smooth scrolling tüm linkler için
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    //  jQuery's animate() method 
  
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  } // End if
});
  
    //  lightbox img max height ayarlama
    const wHeight = $(window).height();
    $(".lightbox-img").css("max-height",wHeight+"px");

    // lightbox 
   
    $(".work-item-inner").click(function() {
        index = $(this).parent(".work-item").index();
        $(".lightbox").addClass("open");
        lightboxSlideShow();
      });
 
   
    $(".lightbox .prev").click(function() {
        if (index === 0) {
          index = totalWorkItems - 1;
        } else {
          index--;
        }
        lightboxSlideShow();
      });
      
      $(".lightbox .next").click(function() {
        if (index === totalWorkItems - 1) {
          index = 0;
        } else {
          index++;
        }
        lightboxSlideShow();
      });

   
    //lightbox kapat
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })

    // img-box dışına tıklandığında fotoğrafı kapatmak için
   $(".lightbox").click(function(event){
     if($(event.target).hasClass("lightbox")){
          $(this).removeClass("open");
     }
   })
})

const totalWorkItems = $(".work-item").length;

function lightboxSlideShow() {
  const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
  const category = $(".work-item").eq(index).find("h4").html();
  $(".lightbox-img").attr("src", imgSrc);
  $(".lightbox-category").html(category);
  $(".lightbox-counter").html((index + 1) + "/" + totalWorkItems);
}

// Contact Me Form Control
$(document).ready(function() {
  $("#myForm").validate({
  rules: {
    name: "required",
    email: {
    required: true,
    email: true
    },
    message: {
    required: true,
    minlength: 10
    }
  },
  messages: {
    name: "Lütfen adınızı girin",
    email: {
    required: "Lütfen e-posta adresinizi girin",
    email: "Lütfen geçerli bir e-posta adresi girin"
    },
    message: {
    required: "Lütfen bir mesaj girin",
    minlength: "En az 10 karakter girin"
    }
  }
  });
});

$(document).ready(function() {
  $("#myForm").validate({
    // validation ayarları
  });

  $("#myForm").submit(function(event) {
    event.preventDefault(); // formun varsayılan gönderimini engelle
    if ($("#myForm").valid()) {
    // form doğrulama kurallarını geçti, formu gönder
    $(this).unbind('submit').submit();
    }
  });
  });
