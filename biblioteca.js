// document.addEventListener("DOMContentLoaded", () => {
//     fetchData();
// });

// const fetchData = async () => {
//     try {
//         const res = await fetch("https://restcountries.com/v2/all");
//         const data = await res.json();
//         // innerData(data);
//         console.log(data);
//     } catch {
        
//     };
// };

const fetchDataAfr = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/africa");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};

const fetchDataAme = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/america");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};

const fetchDataAsi = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/asia");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};

const fetchDataEur = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};

const fetchDataOce = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/oceania");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};


const biblioteca = document.querySelector(".biblioteca");
const afrBtn = document.getElementById("afrBtn");
const ameBtn = document.getElementById("ameBtn");
const asiBtn = document.getElementById("asiBtn");
const eurBtn = document.getElementById("eurBtn");
const oceBtn = document.getElementById("oceBtn");
const arr = [afrBtn, ameBtn, asiBtn, eurBtn, oceBtn];


const innerData = data => {
    // ordenar paises alfabeticamente
    data.sort((a, b) => {
        if (a.translations.spa.common < b.translations.spa.common) {
            return -1
        }
        if (a.translations.spa.common > b.translations.spa.common) {
            return 1
        }
        return 0
    })
    // agregar paises
    data.forEach((e, i) => {
        biblioteca.innerHTML += 
        `
        <div class="cardBiblio">
            <img class="flagImage" src="${e.flags.png}" alt="flag">
            <p class="nombrePais">${e.translations.spa.common}</p>
        </div>
        `;
    })
};

afrBtn.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    afrBtn.style.backgroundColor = "white";
    afrBtn.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataAfr();
});

ameBtn.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    ameBtn.style.backgroundColor = "white";
    ameBtn.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataAme();
});

asiBtn.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    asiBtn.style.backgroundColor = "white";
    asiBtn.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataAsi();
});

eurBtn.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    eurBtn.style.backgroundColor = "white";
    eurBtn.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataEur();
});

oceBtn.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    oceBtn.style.backgroundColor = "white";
    oceBtn.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataOce();
});