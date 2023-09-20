// create timer witch will count down from 04:51:16

// let cooldownDate = new Date("September 21, 2023 04:51:16").getTime();



// let dateTimer = setInterval(() => {
//   let now = new Date().getTime();
//   let diff = cooldownDate - now;
//   let seconds = Math.floor((diff / 1000) % 60);
//   let minutes = Math.floor((diff / 1000 / 60) % 60);
//   let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//   if(diff < 0) {
//     clearInterval(timer);
//     document.querySelector(".time").innerHTML = "00:00:00";
//   }
// }, 1000);

// create timer witch will count down from 04:51:16 to 00:00:00 with no date

let time = '04:51:16';
let timer = setInterval(() => {
  [h, m, s] = time.split(':');
  h = Number(h);
  m = Number(m);
  s = Number(s);
  if(s > 0) {
    s--;
  } else if(m > 0) {
    m--;
    s = 59;
  } else if(h > 0) {
    h--;
    m = 59;
    s = 59;
  }
  time = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  document.querySelector('.time').innerHTML = time;
}, 1000);


const sliderItems = document.querySelectorAll('.slider_item');
const mainImage = document.getElementById('main-image');


function changeSlide(e) {
  const activeSlide = document.querySelector('.active');

  mainImage.src = e.style.backgroundImage.split('url("')[1].split('")')[0];
  mainImage.classList.add('flip-in-hor-top');
  
  activeSlide.classList.remove('active');
  e.classList.add('active');
  setTimeout(() => {
    mainImage.classList.remove('flip-in-hor-top');
    console.log('done')
  }, 500);
}

sliderItems.forEach(sliderItem => {
  sliderItem.addEventListener('click', (e) => {
    changeSlide(e.target);
  });
})

function handleChange(e) {
  const color = document.querySelector('.color');
  const size = document.querySelector('.size');
  const active = document.querySelectorAll('.filters_item_picker_content_item.active');
  if (e.target.innerHTML.split('').length > 1) {
    active[0].classList.remove('active');
    color.innerHTML = e.target.innerHTML;
  } else {
    active[1].classList.remove('active');
    size.innerHTML = e.target.innerHTML;
  }
  e.target.classList.add('active');
}


const filters = document.querySelectorAll('.filters_item_picker_content_item').forEach(filter => {
  filter.addEventListener('click', (e) => {
    handleChange(e);
  });
});




