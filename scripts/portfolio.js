let divProjetos = document.getElementById('projetos');

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.portfolio.map((e) => {
            divProjetos.innerHTML += `
            <div class="portfolio-item padd-15">
                <div class="portfolio-item-inner shadow-dark">
                    <div class="portfolio-img">
                        <a class="post">${e.titulo}</a>
                        <img src="${e.imagem}" alt="">
                    </div>
                </div>
                <div class="btns">
                        <a class="btn" target="_blank" href="${e.github}">GitHub</a>
                        <a class="btn" target="_blank" href="${e.site}">Live Mode</a>
                    </div>
            </div>
          
          <div class="modal">
            <div class="popup-image">
              <span class="close">&times;</span>
              <img alt="Image Portfolio">
            </div>
          </div>
               
        `;
            });
            document.querySelectorAll('.portfolio-img img').forEach(image => {
                image.onclick = () => {
                    document.querySelector('.modal').style.display = 'block';
                    document.querySelector('.modal img').src = image.getAttribute('src');
                };
            });

            document.querySelector('.close').onclick = () => {
                document.querySelector('.modal').style.display = 'none';
            };
        });
    });