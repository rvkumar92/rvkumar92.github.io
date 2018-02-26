(function(){
  var scrollPosition = window.scrollY || document.body.scrollTop;

  var selectors = document.querySelectorAll('.resume-header ul li a');
  for(var i=0; i<selectors.length; i++){
      selectors[i].addEventListener('click', function(event){
       var listItem = event.target.parentNode.parentNode.children;
        for(let item of listItem){
        item.children[0].classList.remove('active')
        }
        event.target.classList.add('active');
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'});   
      }, false);
  }

  var navButton = document.querySelector('.opennav');
  navButton.addEventListener('click', function(event){
      var navbar = document.querySelector('.resume-header-mobile');
      navbar.classList.toggle('hide');
  });
  document.querySelector('.close').addEventListener('click', function(event){
    document.querySelector('.resume-header-mobile').classList.add('hide');
  });

})();

$(window).scroll(function(){
    var scrollDistance = $(window).scrollTop();    
    $('.container .content section').each(function(index){        
        if($(this).position().top <= scrollDistance){            
            $('.resume-header ul li a.active').removeClass('active');
            $('.resume-header a').eq(index).addClass('active');
        }
    });
})

$(window).scroll(function(){
    var scrollDistance = $(window).scrollTop();    
    $('.container .content section').each(function(index){        
        if($(this).position().top <= scrollDistance){            
            $('.resume-header-mobile ul li a.active').removeClass('active');
            $('.resume-header-mobile a').eq(index).addClass('active');
        }
    });
});


