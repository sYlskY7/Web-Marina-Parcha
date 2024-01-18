document.addEventListener("DOMContentLoaded", function () {
  // Agregar función para desplazamiento suave al hacer clic en enlaces del menú
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Agregar función para animación de aparición al desplazarse
  let animatedElements = document.querySelectorAll(".animated");

  function checkInView(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    animatedElements.forEach((element) => {
      if (checkInView(element)) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Llamar a la función de animación cuando se desplaza
  window.addEventListener("scroll", animateOnScroll);


  // Animación para cambiar el logo de color
  let logo = document.querySelector(".logo img");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");
  let header = document.querySelector("header");

  let colorObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            entry.target.id === "inicio" ||
            entry.target.id === "sobre-mi" ||
            entry.target.id === "contacto"
          ) {
            logo.src = "./Assets/logo_blanco.jpg"; // Cambiar a la versión de logo claro
            header.classList.remove("dark-header");
            navLinks.forEach((link) => link.classList.remove("light-link")); // Remover estilo de enlaces claros
          } else {
            logo.src = "./Assets/logo_negro.jpg"; // Cambiar a la versión de logo oscuro
            header.classList.add("dark-header");
            navLinks.forEach((link) => link.classList.add("light-link")); // Agregar estilo de enlaces claros
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    colorObserver.observe(section);
  });

  //Animación de entrada y salida de imágenes en el apartado de servicios al pulsar el botón de Más Información

  // Obtener los elementos necesarios
  let botonMasInfo = document.querySelectorAll(".boton-mas-info");
  let infoOverlay = document.getElementById("info-overlay");
  let infoImagen = document.getElementById("info-imagen");
  let cerrarInfo = document.getElementById("cerrar-info");

  // Agregar un manejador de clic para cada botón "Más Información"
  botonMasInfo.forEach((boton, index) => {
    boton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
      // Obtener la imagen correspondiente
      let imagenURL = `Assets/servicio${index + 1}-info.jpg`;
      infoImagen.src = imagenURL;

      // Mostrar el overlay de información adicional
      infoOverlay.style.display = "block";
    });
  });

  // Agregar un manejador de clic para cerrar la información adicional
  cerrarInfo.addEventListener("click", () => {
    infoOverlay.style.display = "none";
  });
});

//Funcion que inicia el mapa de LeafLet en una ubicación de Cantabria
function initMap() {
  var map = L.map('map').setView([43.386727, -4.120863], 10); // Coordenadas de Cantabria

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

initMap();


// Función para desplegar el menú de móvil
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("menu-open");
  });
});