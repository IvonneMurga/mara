const pages = [
    { image: "https://i.pinimg.com/736x/d5/d1/78/d5d17838c94bae3f7125f3ac55277fce.jpg", text: "Hola uwu" },
    { image: "https://i.pinimg.com/736x/00/e6/6c/00e66c0823cef5e6c02af33b1d4a2b0f.jpg", text: "¿Mucho texto? Toca aquí xd uwu" },
    { image: "https://i.pinimg.com/736x/59/61/ed/5961ed889af7a20d109e0e9c16072ee3.jpg", text: "Perdón por todas las veces que olvidé que eres un gatito panzón uu" },
    { image: "https://i.pinimg.com/736x/e2/d0/ae/e2d0aef260a8903e441f65a622ec9e70.jpg", text: "Imagen de Justin bebé para no abrumar" },
    { image: "https://i.pinimg.com/736x/ca/2a/b6/ca2ab669abf7320bdaf8ad2343a05b9d.jpg", text: "Perdón por no haber cuidado tu vulnerabilidad como corresponde. Debo aprender a darme paz para ofrecerla, sin lastimar, ni forzar. Espero mejorar." },
    { image: "https://i.pinimg.com/736x/4e/6e/5c/4e6e5c76ab20e6aec9305494fff93b4b.jpg", text: "Después de eso podríamos hablar si aún quieres (habías dicho cuando me terminaste que querías que seamos amigas), y sino no pasa nada. Lo que te haga bien." }, 
    { image: "https://i.pinimg.com/736x/f9/e1/82/f9e1822ab75d7ca361a6f137c68ef7c4.jpg", text: "Espero que tengas una semana muy bonita, puedas estar tranquila, y feliz uwu abracitos uwu 🫂🫂" }
];

let currentPage = 0;

function updatePage() {
    document.getElementById("image").src = pages[currentPage].image;
    document.getElementById("text").innerText = pages[currentPage].text;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

// Inicializar la primera página
updatePage();