const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Restaurar tema salvo
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Salvar tema
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});