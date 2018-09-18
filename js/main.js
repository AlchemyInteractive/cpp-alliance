document.addEventListener('DOMContentLoaded', function(event) {
  var navHamburger = document.getElementById('nav-hamburger');
  var navItems = document.getElementById('nav-items');

  navHamburger.addEventListener('click', function(e) {
    navHamburger.classList.toggle('active');
    navItems.classList.toggle('active');
  });

});

