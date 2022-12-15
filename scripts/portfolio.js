const projeto = [
    {
        "titulo": "Tela de login - Tegra",
        "imagem": "images/projetos/port-telategra.gif",
        "github": "https://github.com/leonardoPetruncko/TegraFOOD",
        "site":   "https://tegra-login-food-lp.netlify.app",
    },
    {
        "titulo": "Pokédex + API",
        "imagem": "images/projetos/port-pokedex.gif",
        "github": "https://github.com/leonardoPetruncko/Pokedex",
        "site":   "https://pokedexjs-lp.netlify.app",
    },
    {
        "titulo": "Movie Seach + api",
        "imagem": "images/projetos/port_movie.gif",
        "github": "https://github.com/leonardoPetruncko/Movie-Search",
        "site":   "https://moviesearch-lp.netlify.app",
    },
    {
        "titulo": "Order Sumary - FrontEndMentor",
        "imagem": "images/projetos/port9.gif",
        "github": "https://github.com/leonardoPetruncko/Order-Summary-FrontendMentor",
        "site":   "https://order-summary-front-lp.netlify.app",
    },
    {
        "titulo": "Advice Generator + API - FrontEndMentor",
        "imagem": "images/projetos/port-advice.gif",
        "github": "https://github.com/leonardoPetruncko/Advice-Generator",
        "site":   "https://advice-generator-lp.netlify.app",
    },
    {
        "titulo": "Alura Midi Sons",
        "imagem": "images/projetos/alura-midi-js.gif",
        "github": "https://github.com/leonardoPetruncko/Alura-midi",
        "site":   "https://sons-midi-lp.netlify.app",
    },
    {
        "titulo": "Tela de Login",
        "imagem": "images/projetos/port-telalogin.gif",
        "github": "https://github.com/leonardoPetruncko/Tela-de-login",
        "site":   "https://tela-login-lp.netlify.app",
    }
    ,
    {
        "titulo": "Pousada Secreta",
        "imagem": "images/projetos/pousada.gif",
        "github": "https://github.com/leonardoPetruncko/Pousada",
        "site":   "https://pousada-lp.netlify.app",
    },
    {
        "titulo": "Estacionamento Front-End + API",
        "imagem": "images/projetos/port 2.gif",
        "github": "https://github.com/leonardoPetruncko/Projeto_Estacionamento",
        "site":   "https://traco-estacionamento-lp.netlify.app",
    },
    {
        "titulo": "VaxG UFTM - Analises de Vacinas",
        "imagem": "images/projetos/port6.gif",
        "github": "https://github.com/leonardoPetruncko/Projeto-VaxG-UFTM",
        "site":   "https://vaxg-uftm-lp.netlify.app/",
    }
    ,
    {
        "titulo": "Portfolio de Artes",
        "imagem": "images/projetos/port.gif",
        "github": "https://github.com/leonardoPetruncko/Portfolio-Gabriel",
        "site":   "https://portfolio-rajast-lp.netlify.app/",
    },
    {
        "titulo": "CRUD JavaFX + JDBC",
        "imagem": "images/projetos/port 4.gif",
        "github": "https://github.com/leonardoPetruncko/JavaFX_JDBC",
        "site": "",
    }
]

console.table(projeto)

const elementoParaInserirProjetos = document.getElementById('projetos')

projeto.forEach(arrayProjetos => {
    elementoParaInserirProjetos.innerHTML += `

                     <div class="portfolio-item padd-15">
                            <div class="portfolio-item-inner shadow-dark">
                                <div class="portfolio-img">
                                    <a class="post">${arrayProjetos.titulo}</a>
                                    <img src="${arrayProjetos.imagem}" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="modal">
                        <div class="popup-image">
                            <span>&times;</span>
                            <img alt="Image Portfolio">

                            <div class="btns">
                                <a class="btn-git" target="_blank"
                                    href="${arrayProjetos.github}">GitHub</a>
                                <a class="btn-site" target="_blank" 
                                href="${arrayProjetos.site}">Live Mode</a>
                            </div>
                        </div>
                    </div>
                    
    `
})

document.querySelectorAll('.portfolio-img img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal img').src = image.getAttribute('src');
    }
});

document.querySelector('.modal .popup-image span').onclick = () => {
    document.querySelector('.modal').style.display = 'none'
}
