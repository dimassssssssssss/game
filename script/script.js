const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'), 
      slides = document.querySelectorAll('.slide'),
      fades = document.querySelectorAll('.fade')


let index = 0;

const activeSlide = n => {
  for(slide of slides)   {
      slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const nextSlide = () => {
  if(index == slides.length -1){
    index = 0;
    activeSlide(index);    
  } else {
    index++;
    activeSlide(index);
  }
}

const prevSlide = () => {
  if(index == 0){
    index = slides.length -1
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

$(function() {
  $('.lang').click(function(){
    $('.menu-open').toggleClass('show-menu')
  })
});

$(function() {
  $('.page').click(function(){
    $('.site-menu').toggleClass('site-menu-show')
  })
});