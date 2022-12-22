document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const reset = document.getElementById("reset")
const mostrar = document.getElementById("mostrar")

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v2/all")
        const data = await res.json()
        adivinar(data)
        reset.addEventListener("click", () => {
            location.reload()
        })
    } catch {
        
    };
};

const letraSeleccionada = document.querySelector(".letraSeleccionada");
const imageContainer = document.querySelector(".imageContainer");

let rand = Math.random() * 100;
const nombrePaises = [];


const adivinar = data => {
    // pasar todos los nombre a un arr en mayus
    data.forEach(e => {
        let nombreMayus = e.name.toUpperCase();
        nombrePaises.push(nombreMayus);
    });
    let paisSelec = nombrePaises[parseInt(rand)]
    console.log(paisSelec);

    mostrar.addEventListener("click", () => {
        letraSeleccionada.innerText = paisSelec
    })

    imageContainer.innerHTML += `<img class="flagImage" src="${data[parseInt(rand)].flag}">`
    

    const letra = document.querySelectorAll(".letra");
    letra.forEach(e => {
    e.addEventListener("click", () => {
        letraSeleccionada.innerText += 
        `${e.textContent}`
        if (letraSeleccionada.textContent === paisSelec) {
            setTimeout(() => {
                letraSeleccionada.style.textDecoration = "none"
                letraSeleccionada.innerHTML = "BIEN AHÍ PERRI LE PEGASTE"
            }, 500);
        }
    });
});
};



const tecladoContainer = document.querySelector(".tecladoContainer");
const paisContainer = document.querySelector(".paisContainer");

const ar =  "Q W E R T Y U I O P A S D F G H J K L Ñ Z X C V B N M";
const newAr = ar.split(" ");

newAr.forEach(e => {
    tecladoContainer.innerHTML += `<button class="letra">${e}</button>`
});
tecladoContainer.innerHTML += "<button class='letraEspecial'>⌫</button>";
tecladoContainer.innerHTML += "<button class='letraEspecial2'>☒☒</button>";
tecladoContainer.innerHTML += "<button class='letraEspecial3'>ESPACIO</button>";

const letraEspecial = document.querySelector(".letraEspecial");
const letraEspecial2 = document.querySelector(".letraEspecial2");
const letraEspecial3 = document.querySelector(".letraEspecial3");

letraEspecial.addEventListener("click", () => {
    let borrado = letraSeleccionada.textContent.slice(0, -1);
    letraSeleccionada.innerHTML = borrado;
});

letraEspecial2.addEventListener("click", () => {
    letraSeleccionada.innerHTML = "";
});

letraEspecial3.addEventListener("click", () => {
    letraSeleccionada.innerHTML += `&nbsp;`
});


