


const search = document.querySelector('#search')
search.addEventListener('click', () => {
  search.classList.toggle('search-active')
})

const barIcon = document.querySelector('#bar-icon')
const xIcon = document.querySelector('#icon-x')
const logo = document.querySelector('#logo')
const barContent = document.querySelector('#bar-content')
barIcon.addEventListener('click', () => {
  barContent.classList.add('bar-content-active')
  logo.style.display = 'none'
  xIcon.style.display = 'block'
})

xIcon.addEventListener('click', () => {
  barContent.classList.remove('bar-content-active')
  logo.style.display = 'block'
  xIcon.style.display = 'none'
})

$(function () {

  // $('h1').click(function () {
  //     $('.list_U').animate({
  //         maxHeight: '288px'
  //     }, 500);
  // })



  $('h1').click(function(){
      $('.list_U').slideToggle(500);
    })
    




})
