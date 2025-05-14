const btn = document.getElementById('missions-btn');
btn.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.era-nav').classList.toggle('active');
  btn.classList.toggle('active');    // ← this line makes the red stick
});

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  });