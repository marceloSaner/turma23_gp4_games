document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: "/imagens/jogos/Zelda Breath of the Wild.png" , alt: "The Legend of Zelda: Breath of the Wild", link: "https://zelda.nintendo.com/breath-of-the-wild/" },
        { src: "/imagens/jogos/Palword.png" , alt: "Palword", link: "https://www.pocketpair.jp/palworld" },
        { src: "/imagens/jogos/Sekiro Shadows Die Twice.png", alt: "Sekiro Shadows Die Twice", link: "https://www.sekirothegame.com/br/pt/" },
        { src: "/imagens/jogos/Horizon Forbidden West.png", alt: "Horizon Forbidden West", link: "https://www.playstation.com/en-us/horizon/" },
        { src: "/imagens/jogos/God of War.png", alt: "God of War", link: "https://www.playstation.com/en-us/god-of-war/" }
    ];

    const carrossel = document.getElementById("carrossel");
    const carrosselInner = document.createElement("div");
    carrosselInner.classList.add("carrossel-inner");

    images.forEach((image) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("carrossel-item");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.width = 200;
        imgElement.height = 300;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = image.alt;

        const linkElement = document.createElement("a");
        linkElement.href = image.link;
        linkElement.target = "_blank";

        linkElement.appendChild(imgElement);
        linkElement.appendChild(overlay);
        itemDiv.appendChild(linkElement);
        carrosselInner.appendChild(itemDiv);

    });
    images.forEach((image) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("carrossel-item");

        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.width = 200;  
        imgElement.height = 300;  

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        overlay.textContent = image.alt;

        const linkElement = document.createElement("a");
        linkElement.href = image.link;
        linkElement.target = "_blank";

        linkElement.appendChild(imgElement);
        linkElement.appendChild(overlay);  
        itemDiv.appendChild(linkElement);
        carrosselInner.appendChild(itemDiv);
    });

    carrossel.appendChild(carrosselInner);
});