document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        innerData(data);
    } catch {
        
    };
};

const biblioteca = document.querySelector(".biblioteca");

const innerData = data => {
    data.forEach(e => {
        biblioteca.innerHTML += 
        `
        <div class="cardBiblio">
            <img class="flagImage" src="${e.flag}" alt="flag">
            <p class="nombrePais">${e.name}</p>
        </div>
        `
    });
}