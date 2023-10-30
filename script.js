document.addEventListener("DOMContentLoaded", function () {
    const datosWesen = [
        {
            nombre: "Balam",
            imagen: "https://static.wikia.nocookie.net/grimm/images/7/7a/Balam.png/revision/latest/scale-to-width-down/150?cb=20130422044923",
            tipo: "Felino",
            peligrosidad: "Pacifico",
            descripcion: "Aspecto de jaguar.",
            notasGrimm: "Wesen pacifico comun en America Central."
        },
        {
            nombre: "Blutbad",
            imagen: "https://static.wikia.nocookie.net/grimm/images/1/17/606-Monroe_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063909",
            tipo: "Canido",
            peligrosidad: "Violento",
            descripcion: "Parece un lobo.",
            notasGrimm: "Wesen con instintos violentos."
        },
        {
            nombre: "Gelumcaedus",
            imagen: "https://static.wikia.nocookie.net/grimm/images/d/d0/307-Gelumcaedus.png/revision/latest/scale-to-width-down/150?cb=20131214073807",
            tipo: "Reptil",
            peligrosidad: "Violento",
            descripcion: "Parece un lagarto.",
            notasGrimm: "increíblemente agresivo y peligroso que atacará con poca provocación."
        },
        {
            nombre: "Hollentier",
            imagen: "https://static.wikia.nocookie.net/grimm/images/5/53/602-D.A._Hurtz_woged.jpg/revision/latest/scale-to-width-down/150?cb=20170114184116",
            tipo: "Canido",
            peligrosidad: "Violento",
            descripcion: "Parece un perro del infierno.",
            notasGrimm: "Generalmente se consideran idiotas, a menudo, se les reconoce por tener un largo historial criminal."
        },
        {
            nombre: "Jinnamuru Xunte",
            imagen: "https://static.wikia.nocookie.net/grimm/images/c/ca/215-Jinnamuru_Xunte.png/revision/latest/scale-to-width-down/150?cb=20130323182937",
            tipo: "Insecto",
            peligrosidad: "Peligroso",
            descripcion: " Enormes ojos negros compuestos, piel gris, dientes afilados, garras afiladas y pelos parecidos a moscas.",
            notasGrimm: "Se alimenta de lágrimas como un adicto al opio. Además, Jinnamuru Xunte experimentará efectos de abstinencia en forma de dolores de cabeza aún más intensos si no se alimenta con regularidad."
        },
        {
            nombre: "Klaustreich",
            imagen: "https://static.wikia.nocookie.net/grimm/images/9/93/409-Shaw_woged.jpg/revision/latest/scale-to-width-down/150?cb=20150118170627",
            tipo: "Felino",
            peligrosidad: "Violento",
            descripcion: "Orejas puntiagudas hacia afuera y un hocico felino que termina en una nariz felina rosada. Sus caras y cuerpos están cubiertos de pelaje.",
            notasGrimm: "Las mujeres a menudo encuentran irresistibles a los Klaustreich masculinos. Las mujeres Klaustreich no son tan agresivas ni tan traicioneras como sus homólogos masculinos"
        },
        {
            nombre: "Luison",
            imagen: "https://static.wikia.nocookie.net/grimm/images/6/65/405-Luison.jpg/revision/latest/scale-to-width-down/150?cb=20141122071613",
            tipo: "Lobo",
            peligrosidad: "Neutral",
            descripcion: "Piel alrededor de su cara se vuelve de color naranja pálido y orejas grandes y esponjosas",
            notasGrimm: "Luison puede parecer afable y educado, pero normalmente son codiciosos y buscan hacer una fortuna."
        },
        {
            nombre: "Scharfblicke",
            imagen: "https://static.wikia.nocookie.net/grimm/images/7/70/411-Lily_woged.jpg/revision/latest/scale-to-width-down/150?cb=20150202051058",
            tipo: "Ave",
            peligrosidad: "Pacifico",
            descripcion: "Plumaje parecido al de un búho alrededor de la cara y el cuello, y su cabello se convierte en parte del plumaje",
            notasGrimm: "No se sabe mucho sobre su comportamiento, aparte de que están dispuestos a realizar pequeños trabajos secretos para la gente y nunca volver a hablar del trabajo después."
        },
        {
            nombre: "Skalenzahne",
            imagen: "https://static.wikia.nocookie.net/grimm/images/c/c8/409-Skalenzahne.jpg/revision/latest/scale-to-width-down/150?cb=20150118210913",
            tipo: "Reptil",
            peligrosidad: "Neutral",
            descripcion: "Les crecen escudos de cocodrilo por todo el cuerpo,varían desde un amarillo verdoso hasta un marrón amarillento. Pierden las orejas, que son sustituidas por dos agujeros, uno a cada lado de la cabeza, y pierden el pelo.",
            notasGrimm: "Estas criaturas existen pacíficamente entre la población humana, aunque se ha observado que pueden atacar sin ninguna provocación."
        },
        {
            nombre: "Weten Ogen",
            imagen: "https://static.wikia.nocookie.net/grimm/images/6/60/504-Amos_woged.png/revision/latest/scale-to-width-down/150?cb=20151123015456",
            tipo: "Felino",
            peligrosidad: "Neutral",
            descripcion: "adquieren características felinas junto con un pelaje dorado y gris. Sus caninos también se alargan hasta formar colmillos afilados ",
            notasGrimm: "Son ferozmente protectores con sus hijos y, a menudo, intentarán matar a cualquiera que mate a sus hijos."
        }
    ];

    const listaWesen = document.getElementById("lista-wesen");
    const formularioWesen = document.getElementById("formulario-wesen");
    const botonGuardar = document.getElementById("boton-guardar");
    const botonEliminar = document.getElementById("boton-eliminar");

    function cargarListaWesen() {
        listaWesen.innerHTML = "";
        datosWesen.forEach(function (wesen) {
            const elementoLista = document.createElement("li");
            const imagenWesen = document.createElement("img");
            imagenWesen.src = wesen.imagen;
            imagenWesen.alt = "Miniatura del Wesen";
            imagenWesen.width = 30;
            imagenWesen.height = 30;
            elementoLista.appendChild(imagenWesen);
            elementoLista.appendChild(document.createTextNode(wesen.nombre));
            elementoLista.addEventListener("click", function () {
                mostrarDetallesWesen(wesen.nombre);
                
                listaWesen.querySelectorAll("li").forEach(function (item) {
                    item.classList.remove("selected");
                });
                elementoLista.classList.add("selected");
            });
            listaWesen.appendChild(elementoLista);
        });
    }
    

    function mostrarDetallesWesen(nombreWesen) {
        const wesenSeleccionado = datosWesen.find(function (wesen) {
            return wesen.nombre === nombreWesen;
        });
    
        if (wesenSeleccionado) {
            formularioWesen.nombre.value = wesenSeleccionado.nombre;
            formularioWesen.imagen.value = wesenSeleccionado.imagen;
            formularioWesen.tipo.value = wesenSeleccionado.tipo;
            formularioWesen.peligrosidad.value = wesenSeleccionado.peligrosidad;
            formularioWesen.descripcion.value = wesenSeleccionado.descripcion;
            formularioWesen.notasGrimm.value = wesenSeleccionado.notasGrimm;
            document.getElementById("imagen-previa").src = wesenSeleccionado.imagen;
        }
    }
    

    function limpiarFormulario() {
        formularioWesen.reset();
    }

    cargarListaWesen();

    listaWesen.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const nombreWesen = event.target.textContent;
            mostrarDetallesWesen(nombreWesen);
        }
    });

    botonGuardar.addEventListener("click", function (event) {
        event.preventDefault();
        const nuevoWesen = {
            nombre: formularioWesen.nombre.value,
            imagen: formularioWesen.imagen.value,
            tipo: formularioWesen.tipo.value,
            peligrosidad: formularioWesen.peligrosidad.value,
            descripcion: formularioWesen.descripcion.value,
            notasGrimm: formularioWesen.notasGrimm.value
        };
        datosWesen.push(nuevoWesen);
        cargarListaWesen();
    });

    botonEliminar.addEventListener("click", function (event) {
        event.preventDefault();
        const nombreWesen = formularioWesen.nombre.value;

        const indiceWesenSeleccionado = datosWesen.findIndex(function (wesen) {
            return wesen.nombre === nombreWesen;
        });

        if (indiceWesenSeleccionado !== -1) {
            datosWesen.splice(indiceWesenSeleccionado, 1);
            limpiarFormulario();
            cargarListaWesen();
        }
    });
    function limpiarFormulario() {
        formularioWesen.reset();
        listaWesen.querySelector(".selected").classList.remove("selected");
        document.getElementById("imagen-previa").src = "";
    }
    
    // Agregar un manejador de eventos para el botón "Añadir nuevo Wesen"
    const botonCrear = document.getElementById("boton-crear");
    botonCrear.addEventListener("click", function () {
        limpiarFormulario();
    });
});
