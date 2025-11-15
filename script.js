// ... segunda sección ...

// !!! filtro de estaciones

function filtro_botones(boton_x){
  boton_x.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('seleccionado')) {
      boton.classList.remove('seleccionado');
    } else {
      boton_x.forEach(b => b.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');
    }
  });
});
}

// todos los botones 
const boton_estacion = document.querySelectorAll('.segunda-seccion .botones-estaciones .boton');
filtro_botones(boton_estacion);


// !!! para hacer funcionar el carrusel de las estaciones

// se sellecionan los elementos 

const carrusel = document.querySelector('.carrusel-estaciones');
const imagenes = document.querySelectorAll('.carrusel-estaciones .img');
const boton_anterior = document.querySelector('.boton-anterior');
const boton_siguiente = document.querySelector('.boton-siguiente');

// variable para ver la posición
let posicion = 0; //let permite que la variable cambie
const cantidadImagenes = imagenes.length;

// función para mover las imágenes
function mover_carrusel(c, p) {
  // Actualizamos la propiedad transform para mover las imágenes
  c.style.transform = `translateX(-${p * 290}px)`; // El 290px es el ancho de cada imagen
}

// si hay un evento en el botón anterior
boton_anterior.addEventListener('click', () => {
  if (posicion > 0) {
    posicion--; // desplaza una posición hacia la izquierda
  } else {
    posicion = cantidadImagenes - 1; // vuelve a la última imagen
  }
  mover_carrusel(carrusel, posicion);
});

// evento para el botón siguiente
boton_siguiente.addEventListener('click', () => {
  if (posicion < cantidadImagenes - 1) {
    posicion++; // desplaza una posición hacia la derecha
  } else {
    posicion = 0; // vuelve a la primera imagen
  }
  mover_carrusel(carrusel, posicion);
});





// !!! botones de familia

// Seleccionamos todos los botones
const boton_familia = document.querySelectorAll('.tercera-seccion .botones-familia .boton');
filtro_botones(boton_familia);


// !!! carrusel de familia


// se sellecionan los elementos necesarios
const carrusel_familia = document.querySelector('.carrusel-familia');
const imagenes_familia = document.querySelectorAll('.carrusel-familia .img');
const boton_anterior_familia = document.querySelector('.boton-anterior-dos');
const boton_siguiente_familia = document.querySelector('.boton-siguiente-dos');

// variable para ver la posición
let posicion_dos = 0; //let permite que la variable cambie
const cantidad_imagenes_dos = imagenes.length;

// si hay un evento en el botón anterior
boton_anterior_familia.addEventListener('click', () => {
  if (posicion_dos > 0) {
    posicion_dos--; // desplaza una posición hacia la izquierda
  } else {
    posicion_dos = cantidad_imagenes_dos - 1; // vuelve a la última imagen
  }
  mover_carrusel(carrusel_familia, posicion_dos);
});

// evento para el botón siguiente
boton_siguiente_familia.addEventListener('click', () => {
  if (posicion_dos < cantidad_imagenes_dos - 1) {
    posicion_dos++; // desplaza una posición hacia la derecha
  } else {
    posicion_dos = 0; // vuelve a la primera imagen
  }
  mover_carrusel(carrusel_familia, posicion_dos);
});












// !!! carrusel de videos

const items = document.querySelectorAll(".cuarta-seccion .contenedor-carrusel-videos .carrusel-videos .item");
let index = 1; // arranca el segundo como activo (el del medio)

function actualizar_carrusel() {
  items.forEach((item, i) => item.classList.remove("active"));
  items[index].classList.add("active");
}

actualizar_carrusel();

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % items.length;
  actualizar_carrusel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  actualizar_carrusel();
});


// !!! botones de videos

const carrusel_videos = document.querySelector(".carrusel-videos");
const items2 = document.querySelectorAll(".carrusel-videos .item");

const boton_anterior_videos = document.querySelector(".boton-anterior-tres");
const boton_siguiente_videos = document.querySelector(".boton-siguiente-tres");

// arranca en el del medio
let index2 = 1;

// ancho REAL de cada item (el tuyo)
const ANCHO_ITEM = 420 + 60; // width + gap

function actualizar_carrusel_videos() {
  // quitar active
  items2.forEach(i => i.classList.remove("active"));
  items2[index2].classList.add("active");

  // mover carrusel
  const offset = (index2 * ANCHO_ITEM) - (carrusel_videos.clientWidth / 2) + (ANCHO_ITEM / 2);
  carrusel_videos.style.transform = `translateX(-${offset}px)`;
}

actualizar_carrusel_videos();

boton_siguiente_videos.addEventListener("click", () => {
  index2 = (index2 + 1) % items2.length;
  actualizar_carrusel_videos();
});

boton_anterior_videos.addEventListener("click", () => {
  index2 = (index2 - 1 + items2.length) % items2.length;
  actualizar_carrusel_videos();
});


// !!! lista de sugerencia en busqueda

const input = document.getElementById("ciudad-de-salida");
const lista = document.getElementById("sugerencias");

const opciones = [
  "Cancún, México",
  "Ciudad de México",
  "Guadalajara, México",
  "Monterrey, México",
  "Tulum, México",
  "Playa del Carmen, México"
];

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  
  lista.innerHTML = "";

  const filtrados = opciones.filter(op => 
    op.toLowerCase().includes(texto)
  );

  if (filtrados.length === 0 || texto === "") {
    lista.style.display = "none";
    return;
  }

  filtrados.forEach(op => {
    const li = document.createElement("li");
    li.textContent = op;
    li.onclick = () => {
      input.value = op;
      lista.style.display = "none";
    };
    lista.appendChild(li);
  });

  lista.style.display = "block";
});



// registro

document.getElementById("formulario-registro").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (nombre === "" || email === "" || password === "") {
        alert("Completá todos los campos.");
        return;
    }

    document.getElementById("formulario-registro").reset();
});
