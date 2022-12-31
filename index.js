document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const reset = document.getElementById("reset");
const mostrar = document.getElementById("mostrar");
const input = document.querySelector(".input");
const moreInfo = document.querySelector(".moreInfo");
const point = document.querySelector(".point");
let contador = sessionStorage.getItem("contador");
point.innerHTML = `PUNTOS: <span style="color: greenyellow;">${contador}</span>`
if (typeof contador === "object") point.innerHTML = `puntos: 0`

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        adivinar(data);
        reset.addEventListener("click", () => {
            location.reload();
            input.value = "";
        });
    } catch {
        
    };
};

const imageContainer = document.querySelector(".imageContainer");
let rand = Math.random() * 184;
console.log(parseInt(rand));
const nombrePaises = [];

const adivinar = data => {
    
    //eliminación de paises
    /* anguilla */data.splice(7, 1); /* bermuda */data.splice(23, 1); /* caribe neerlandes */data.splice(25, 1);/*bouvet */data.splice(27, 1);/*territorio britanico del oceano indico */data.splice(28, 1);/*islas virgenes de eeuu */data.splice(30, 1);/*cabo verde */data.splice(37, 1);/*islas caiman */data.splice(37, 1);/*isla de navidad */data.splice(41, 1);/*islas cocos */data.splice(41, 1);/*comoras */data.splice(42, 1); /*islas cook */data.splice(44, 1);/*curazao */data.splice(47, 1);/*dominica */data.splice(51, 1);/*fiji */data.splice(61, 1);/*polinesia francesa */data.splice(64, 1);/*territorios australes y antarticos franceses */data.splice(64, 1);/*grenada */data.splice(72, 1);/*guadaloupe */data.splice(72, 1);/*guam */data.splice(72, 1);/*guernsey */data.splice(73, 1);/* Islas Heard y McDonald */data.splice(77, 1);/*isla de man */data.splice(88, 1); /*jersey */data.splice(92, 1); /*kiribati*/ data.splice(95, 1); /* macao*/ data.splice(106, 1); /*maldivas */data.splice(110, 1); /*islas marshall*/data.splice(112, 1);/*martinica */ data.splice(112, 1); /*mauricio*/ data.splice(113, 1); /*mayote*/ data.splice(113, 1); /*micronesia */ data.splice(114, 1); /*monserrat */ data.splice(118, 1); /*nauru */ data.splice(122, 1);/*nueva caledonia */ data.splice(124, 1); /*niue */ data.splice(128, 1); /*isla norfolk */ data.splice(128, 1); /*islas marianas del norte */ data.splice(129, 1); /*palau */ data.splice(132, 1); /*islas pitcairn */ data.splice(138, 1); /*pais reunion */ data.splice(143, 1); /*san bartolome */ data.splice(146, 1); /*santa elena */ data.splice(146, 1); /*san cristobal y nieves */ data.splice(146, 1); /*santa lucia */ data.splice(146, 1); /*saint martin  */ data.splice(146, 1); /*san pedro y miquelon */ data.splice(146, 1); /*san vicente y granadinas */ data.splice(146, 1); /*samoa */ data.splice(146, 1); /*santo tome y principe  */ data.splice(147, 1); /*seychelles */ data.splice(150, 1); /*sint maarten */ data.splice(152, 1); /*islas georgias y sandinwch */ data.splice(157, 1); /*svalbard */ data.splice(163, 1); /*islas tokelau  */data.splice(173, 1); /*tonga */ data.splice(173, 1); /*islas turks y caicos  */ data.splice(177, 1); /*tuvalu */ data.splice(177, 1); /*vanuatu */ data.splice(184, 1); /*wallis y fortuna */ data.splice(186, 1); /*alandia */ data.splice(1, 1); /*aruba */ data.splice(10, 1); /*samoa americana */ data.splice(3, 1); /*islas virgenes r. unido */ data.splice(26, 1);
    /*estados unidos 2 */ data.splice(25, 1); /*malvinas */ data.splice(54, 1);
    //agregar puntos al nro de poblacion
    let poblacion = data[parseInt(rand)].population;
    let poblacionPoint = new Intl.NumberFormat("es-ES").format(poblacion)

    input.focus()
    input.value = ""
    // pasar todos los nombre a un arr en mayus
    data.forEach(e => {
        let nombreMayus = e.translations.es.toUpperCase();
        nombrePaises.push(nombreMayus);
    });

    //cambiando nombre al correcto español
    nombrePaises.splice(13, 1, "BARÉIN"); nombrePaises.splice(23, 1, "BOTSUANA"); nombrePaises.splice(38, 1, "REPÚBLICA DEMOCRÁTICA DEL CONGO"); nombrePaises.splice(54, 1, "ISLAS FEROE"); nombrePaises.splice(70, 1, "HAITÍ"); nombrePaises.splice(71, 1, "CIUDAD DEL VATICANO"); nombrePaises.splice(79, 1, "IRÁN"); nombrePaises.splice(90, 1, "KIRGUISTÁN"); nombrePaises.splice(94, 1, "LESOTO"); nombrePaises.splice(100, 1, "MACEDONIA DEL NORTE"); nombrePaises.splice(102, 1, "MALAUI"); nombrePaises.splice(104, 1, "MALÍ"); nombrePaises.splice(137, 1, "RUMANÍA"); nombrePaises.splice(144, 1, "SIERRA LEONA"); nombrePaises.splice(146, 1, "ESLOVAQUIA"); nombrePaises.splice(150, 1, "SUDÁFRICA"); nombrePaises.splice(157, 1, "ESUATINI"); nombrePaises.splice(141, 1, "ARABIA SAUDITA");
    //pais seleccionado
    let paisSelec = nombrePaises[parseInt(rand)];
    console.log(paisSelec);

    mostrar.addEventListener("click", () => {
        input.style.color = "white";
        input.value = paisSelec;
        input.readOnly = true;
        moreInfo.innerHTML = 
                `
                <p>Capital: ${data[parseInt(rand)].capital}.</p>
                <p>Lenguaje: ${data[parseInt(rand)].languages[0].name}.</p>
                <p>Continente: ${data[parseInt(rand)].region}.</p>
                <p>Población: ${poblacionPoint}</p>
                <p style="color: greenyellow;">Mas info: <a style="color: lightblue;" target="_blank" href="https://es.wikipedia.org/wiki/${paisSelec.toLowerCase()}">CLICK AQUÍ</a></p>
                `
    })

    imageContainer.innerHTML += `<img alt="flag" class="flagImage" src="${data[parseInt(rand)].flag}">`
    
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
                <p>Continente: ${data[parseInt(rand)].region}.</p>
                <p>Población: ${poblacionPoint}</p>
                <p style="color: greenyellow;">Mas info: <a style="color: lightblue;" target="_blank" href="https://es.wikipedia.org/wiki/${paisSelec.toLowerCase()}">CLICK AQUÍ</a></p>
                `
                contador++;
                point.innerHTML = `PUNTOS: <span style="color: greenyellow;">${contador}</span>`;
                sessionStorage.setItem("contador", contador);
                reset.focus();
                input.readOnly = true;
            }, 500);
        };
    });
};