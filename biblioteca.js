document.addEventListener("DOMContentLoaded", () => {
    fetchDataAfr();
    fetchDataAme();
    fetchDataAsi();
    fetchDataEur();
    fetchDataOce();
});

const nombrePaisesAfr = [];
const nombrePaisesAme = [];
const nombrePaisesAsi = [];
const nombrePaisesEur = [];
const nombrePaisesOce = [];

class Pais {
    constructor(name, flag) {
        this.name = name;
        this.flag = flag;
    }
}

const mostrarTodo = document.getElementById("mostrarTodo");
mostrarTodo.addEventListener("click", () => {
    arr.forEach(e => {
        e.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        e.style.color = "white";
    });
    mostrarTodo.style.backgroundColor = "white";
    mostrarTodo.style.color = "black";
    biblioteca.innerHTML = "";
    fetchDataAfr();
    fetchDataAme();
    fetchDataAsi();
    fetchDataEur();
    fetchDataOce();
})

const fetchDataAfr = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/africa");
        const data = await res.json();
        //borrando paises
        data.splice(5,2);data.splice(18,1); data.splice(23,1); data.splice
        (25,1); data.splice(28,1); data.splice(29,1); data.splice(35,2);data.splice(40,1); data.splice(44,1);
        //poniendo los paises en un array
        if (nombrePaisesAfr.length === 0) {
            data.forEach(e => {
                nombrePaisesAfr.push(new Pais(e.translations.spa.common.toUpperCase(), e.flags.png))
            })
        }
        //ordenar alfabeticamente el arr
        nombrePaisesAfr.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        const botsFlag = nombrePaisesAfr[3].flag;
        const repCongFlag = nombrePaisesAfr[9].flag;
        const malaFlag = nombrePaisesAfr[28].flag;
        const lesoFlag = nombrePaisesAfr[35].flag;
        const leoFlag = nombrePaisesAfr[41].flag;
        //corrigiendo nombres
        // nombrePaisesAfr.splice(3,1,{name: "BOTSUANA", flag: botsFlag});
        // nombrePaisesAfr.splice(9,1,{name: "REPÚBLICA DEMOCRÁTICA DEL CONGO", flag: repCongFlag});
        // nombrePaisesAfr.splice(28,1,{name: "MALAUI", flag: malaFlag});
        // nombrePaisesAfr.splice(35,1,{name: "LESOTO", flag: lesoFlag});
        // nombrePaisesAfr.splice(41,1,{name: "SIERRA LEONA", flag: leoFlag});
        //ordenar alfabeticamente el arr
        nombrePaisesAfr.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        innerData(data, nombrePaisesAfr);
    } catch {
        
    };
};

const fetchDataAme = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/america");
        const data = await res.json();
        //borrando paises
        data.splice(0,1); data.splice(2,1); data.splice(3,1); data.splice(5,
        3);data.splice(6,3);data.splice(14,7);data.splice(15,1); data.splice(19,1); data.splice(20,1); data.splice(22,2);data.splice(24,1); data.splice(26,2); data.splice(28,1); data.splice(30,1);
        //poniendo los paises en un array
        if (nombrePaisesAme.length === 0) {
            data.forEach(e => {
                nombrePaisesAme.push(new Pais(e.translations.spa.common.toUpperCase(), e.flags.png));
            })
        }
        //ordenar alfabeticamente el arr
        nombrePaisesAme.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        innerData(data, nombrePaisesAme);
    } catch {
    };
};

const fetchDataAsi = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/asia");
        const data = await res.json();
        //borrando paises
        data.splice(9,1); data.splice(12,1); data.splice(24,1); data.splice
        (44,2);
        //poniendo los paises en un array
        if (nombrePaisesAsi.length === 0) {
            data.forEach(e => {
                nombrePaisesAsi.push(new Pais(e.translations.spa.common.toUpperCase(), e.flags.png));
            })
        }
        //ordenar alfabeticamente el arr
        nombrePaisesAsi.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        console.log(nombrePaisesAsi);
        //corrigiendo nombres
        // const arabFlag = [nombrePaisesAsi[1].flag];
        // nombrePaisesAsi.splice(1,1,{name: "ARABIA SAUDITA", flag: arabFlag});
        // nombrePaisesAsi.splice(4,1,{name: "BARÉIN", flag: nombrePaisesAsi[4].flag});
        // const iranFlag = nombrePaisesAsi[1].flag;
        // nombrePaisesAsi.splice(1,1,{name: "IRÁN", flag: iranFlag});
        //ordenar alfabeticamente el arr
        nombrePaisesAsi.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        console.log(nombrePaisesAsi);
        innerData(data, nombrePaisesAsi);
    } catch {
        
    };
};

const fetchDataEur = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await res.json();
        //borrando paises
        data.splice(9,1); data.splice(12,1); data.splice(14,1); data.splice
        (25,2); data.splice(32,1);
        //poniendo los paises en un array
        if (nombrePaisesEur.length === 0) {
            data.forEach(e => {
                nombrePaisesEur.push(new Pais(e.translations.spa.common.toUpperCase(), e.flags.png));
            })
        }
        //ordenar alfabeticamente el arr
        nombrePaisesEur.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        //corrigiendo nombres
        // const feroFlag = nombrePaisesEur[1].flag;
        // const esloFlag = nombrePaisesEur[2].flag;
        // const cheFlag = nombrePaisesEur[16].flag;
        // const rumaFlag = nombrePaisesEur[30].flag;
        // nombrePaisesEur.splice(1,1,{name: "ISLAS FEROE", flag: feroFlag});
        // nombrePaisesEur.splice(2,1,{name: "ESLOVAQUIA", flag: esloFlag});
        // nombrePaisesEur.splice(16,1,{name: "REPÚBLICA CHECA", flag: cheFlag});
        // nombrePaisesEur.splice(30,1,{name: "RUMANÍA", flag: rumaFlag});
        //ordenar alfabeticamente el arr
        nombrePaisesEur.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        innerData(data, nombrePaisesEur);
    } catch {
        
    };
};

const fetchDataOce = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/region/oceania");
        const data = await res.json();
        //borrando paises
        data.splice(1,4);data.splice(2,9);data.splice(3,11);
        //poniendo los paises en un array
        if (nombrePaisesOce.length === 0) {
            data.forEach(e => {
                nombrePaisesOce.push(new Pais(e.translations.spa.common.toUpperCase(), e.flags.png));
            })
        }
        //ordenar alfabeticamente el arr
        nombrePaisesOce.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name > b.name) {
                return 1
            }
            return 0
        })
        innerData(data, nombrePaisesOce);
    } catch {
        
    };
};


const biblioteca = document.querySelector(".biblioteca");
const afrBtn = document.getElementById("afrBtn");
const ameBtn = document.getElementById("ameBtn");
const asiBtn = document.getElementById("asiBtn");
const eurBtn = document.getElementById("eurBtn");
const oceBtn = document.getElementById("oceBtn");
const arr = [afrBtn, ameBtn, asiBtn, eurBtn, oceBtn, mostrarTodo];

const innerData = (data, array) => {
    // agregar paises
    data.forEach((e, i) => {
        biblioteca.innerHTML += 
        `
        <div class="cardBiblio">
            <img class="flagImage" src="${array[i].flag}" alt="flag">
            <p class="nombrePais">${array[i].name}</p>
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

