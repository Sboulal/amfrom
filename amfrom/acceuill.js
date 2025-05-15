document.querySelectorAll('li > a.menu-arrow').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le lien de suivre son href

        // Trouver le sous-menu frère
        const subMenu = this.nextElementSibling.querySelector('ul');
        
        // Basculer la visibilité du sous-menu
        if (subMenu) {
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
            } else {
                subMenu.style.display = 'block';
            }
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner tous les éléments avec la classe 'titre-li'
  const titres = document.querySelectorAll('.titre-li');
  
  // Ajouter un écouteur d'événement clic à chaque titre
  titres.forEach(function(titre) {
    titre.addEventListener('click', function() {
      // Trouver l'élément parent (li)
      const parentLi = this.parentElement;
      const isActive = parentLi.classList.contains('active');
      
      // Fermer tous les éléments ouverts
      const allLi = document.querySelectorAll('li');
      allLi.forEach(function(li) {
        li.classList.remove('active');
      });
      
      // Si l'élément n'était pas déjà actif, l'ouvrir
      // Sinon, il reste fermé (puisqu'on a déjà tout fermé)
      if (!isActive) {
        parentLi.classList.add('active');
      }
    });
  });
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // let i;
  // let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function() {
  const authButton = document.getElementById('authButton');
  const authForm = document.getElementById('authForm');
  const loginForm = document.getElementById('loginForm');
  const closeAuthForm = document.getElementById('closeAuthForm');
  document.getElementById('authButton').addEventListener('click', function() {
    // document.getElementById('authForm').style.display = 'block';
    document.querySelector('.textcenter').classList.add('hidden');
});

document.getElementById('closeAuthForm').addEventListener('click', function() {
    document.getElementById('authForm').style.display = 'none';
    document.querySelector('.textcenter').classList.remove('hidden');
});
  
  // Toggle authentication form when button is clicked
  authButton.addEventListener('click', function() {
    if (authForm.style.display === 'block') {
        authForm.style.display = 'none';
        authButton.style.display = 'inline-block';
    } else {
        authForm.style.display = 'block';
        authButton.style.display = 'none'; // Masque le bouton
    }
});

closeAuthForm.addEventListener('click', function() {
    authForm.style.display = 'none';
    authButton.style.display = 'inline-block'; // Réaffiche le bouton
});
  
  // Handle form submission
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      alert(`Authentication attempt with username: ${username}`);
      
      // Clear the form
      loginForm.reset();
  });
});


document.querySelector('.btn-menu button').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});

document.querySelectorAll('.deroulant').forEach(function(item) {
  item.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Toggle mobile menu
  navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navMenu.setAttribute('data-visible', !isExpanded);
  });

  // Handle submenu accessibility
  const hasSubmenus = document.querySelectorAll('.has-submenu');

  hasSubmenus.forEach(item => {
      const link = item.querySelector('a');
      const submenu = item.querySelector('.submenu');

      link.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) { // Mobile behavior
              e.preventDefault();
              const isExpanded = this.getAttribute('aria-expanded') === 'true';
              this.setAttribute('aria-expanded', !isExpanded);
              submenu.style.display = isExpanded ? 'none' : 'block';
          }
          // On desktop, hover will handle it
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.setAttribute('data-visible', 'false');
      }
  });
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


