document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const reset = document.getElementById("reset");
const mostrar = document.getElementById("mostrar");
const input = document.querySelector(".input");
const moreInfo = document.querySelector(".moreInfo");


const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        adivinar(data);
        reset.addEventListener("click", () => {
            location.reload();
            input.value = "";
        })
    } catch {
        
    };
};

const letraSeleccionada = document.querySelector(".letraSeleccionada");
const imageContainer = document.querySelector(".imageContainer");
let rand = Math.random() * 250;
console.log(parseInt(rand));
const nombrePaises = [];


const adivinar = data => {
    let poblacion = data[parseInt(rand)].population;
    let poblacionPoint = new Intl.NumberFormat("es-ES").format(poblacion)

    input.value = ""
    // pasar todos los nombre a un arr en mayus
    data.forEach(e => {
        let nombreMayus = e.name.toUpperCase();
        nombrePaises.push(nombreMayus);
    });
    let paisSelec = nombrePaises[parseInt(rand)]
    console.log(paisSelec);

    mostrar.addEventListener("click", () => {
        input.style.color = "white";
        input.value = paisSelec;
    })

    imageContainer.innerHTML += `<img class="flagImage" src="${data[parseInt(rand)].flag}">`
    
    // pasar texto a mayuscula
    input.addEventListener("input", () => {
        const inputMayus = input.value.toUpperCase();
        input.value = inputMayus;
        if (input.value === paisSelec) {
            setTimeout(() => {
                input.style.color = "greenyellow";
                input.value = "¡CORRECTO!";
                if (input.value !== "¡CORRECTO!") {
                    input.style.color = "white";
                }
                moreInfo.innerHTML = 
                `
                <p>Capital: ${data[parseInt(rand)].capital}.</p>
                <p>Lenguaje: ${data[parseInt(rand)].languages[0].name}.</p>
                <p>Continente: ${data[parseInt(rand)].subregion}.</p>
                <p>Población: ${poblacionPoint}</p>
                `
                moreInfo.click()
                moreInfo.focus()
            }, 500);
        };
    });
};