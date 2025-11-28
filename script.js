document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! 🥰";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
        // === Setelah header di paragraf pertama pada artikel  berubah ketika diklik ===
    const targetParagraph = document.querySelector("article:first-of-type > p");

    document.querySelector("article:first-of-type").addEventListener("click", () => {
        targetParagraph.textContent = 
            "HTML ngajarin satu hal: jangan lupa nutup tag, nanti hidupmu juga eror.";
    });
    });

    document.addEventListener("keydown", (event) => {``
        if(event.key === "d") {                       
            document.body.classList.toggle("dark");
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    });
    // === Ukuran font navbar akan berubah saat tombol F ditekan ===
    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            const navList = document.querySelector("nav ul");
            navList.style.fontSize =
            navList.style.fontSize === "26px" ? "18px" : "26px";
        }
    });

    // === Background halaman akan berubah tiap di scroll 200px ===
    let lastScrollChange = 0;
    const colors = ["#9ce096ff", "#51df4aff", "#edfabeff", "#bae3e6ff", "#b0e6f2ff"];
    let colorIndex = 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY - lastScrollChange >= 200) {
            colorIndex = (colorIndex + 1) % colors.length;
            document.body.style.backgroundColor = colors[colorIndex];
            lastScrollChange = window.scrollY;
        }
    });
});