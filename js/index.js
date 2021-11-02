$(document).ready(function(){
  $('li.nav-item').on('click', function(){
    $('li.nav-item').not(this).removeClass('nav-link-show').toggle()
    $(this).toggleClass('nav-link-show')
  })

  
  function copyToClipboard(element) {

  }
})
