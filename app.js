const root = document.documentElement;
const btnTema = document.getElementById("btnTema");
const btnIdioma = document.getElementById("btnIdioma");
const btnTopo = document.getElementById("btnTopo");
const ano = document.getElementById("ano");

// ================= ANO AUTOMÁTICO =================
ano.textContent = new Date().getFullYear();

// ================= TEMA =================

// tema padrão: escuro
let temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
  root.setAttribute("data-tema", temaSalvo);
} else {
  root.setAttribute("data-tema", "escuro");
  localStorage.setItem("tema", "escuro");
}

btnTema.addEventListener("click", () => {
  const temaAtual = root.getAttribute("data-tema");

  if (temaAtual === "escuro") {
    root.removeAttribute("data-tema");
    localStorage.setItem("tema", "claro");
  } else {
    root.setAttribute("data-tema", "escuro");
    localStorage.setItem("tema", "escuro");
  }
});

// ================= IDIOMA =================

const textos = {
  pt: {
    titulo: "Olá, eu sou Raphael Álem, desenvolvedor front-end júnior.",
    descricao:
      "Atualmente estudo HTML, CSS, JavaScript, React, Vue e Angular, criando projetos próprios para praticar e evoluir minhas habilidades. Gosto de desenvolver interfaces simples, modernas e funcionais, sempre buscando melhorar a experiência do usuário.",

    projetos: "Projetos",
    nomeProjeto1: "Site com tema claro e escuro",
    descProjeto1: "Projeto em HTML, CSS e JavaScript com troca de tema.",

    skills: "Skills",
    contato: "Contato",
  },

  en: {
    titulo: "Hi, I’m Raphael Álem, a junior front-end developer.",
    descricao:
      "I am currently studying HTML, CSS, JavaScript, React, Vue, and Angular, building personal projects to practice and improve my skills. I enjoy creating simple, modern, and functional interfaces, always aiming to enhance user experience.",

    projetos: "Projects",
    nomeProjeto1: "Light and dark theme website",
    descProjeto1:
      "Project built with HTML, CSS and JavaScript featuring theme switching.",

    skills: "Skills",
    contato: "Contact",
  },
};

let idiomaAtual = localStorage.getItem("idioma") || "pt";

function trocarIdioma() {
  const t = textos[idiomaAtual];

  const titulo = document.getElementById("titulo");
  const descricao = document.getElementById("descricao");
  const tituloProjetos = document.getElementById("titulo-projetos");
  const nomeProjeto1 = document.getElementById("nome-projeto1");
  const descProjeto1 = document.getElementById("desc-projeto1");
  const tituloSkills = document.getElementById("titulo-skills");
  const tituloContato = document.getElementById("titulo-contato");

  if (titulo) titulo.textContent = t.titulo;
  if (descricao) descricao.textContent = t.descricao;
  if (tituloProjetos) tituloProjetos.textContent = t.projetos;
  if (nomeProjeto1) nomeProjeto1.textContent = t.nomeProjeto1;
  if (descProjeto1) descProjeto1.textContent = t.descProjeto1;
  if (tituloSkills) tituloSkills.textContent = t.skills;
  if (tituloContato) tituloContato.textContent = t.contato;

  btnIdioma.textContent = idiomaAtual === "pt" ? "🇺🇸" : "🇧🇷";

  localStorage.setItem("idioma", idiomaAtual);
}

btnIdioma.addEventListener("click", () => {
  idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
  trocarIdioma();
});

// inicia idioma salvo
trocarIdioma();

// ================= BOTÃO VOLTAR AO TOPO =================

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================= SKILLS =================

const listaSkills = document.getElementById("lista-skills");

const skills = [
  {
    nome: "HTML",
    icone:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    nome: "CSS",
    icone:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    nome: "JavaScript",
    icone:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  },
  {
    nome: "React",
    icone:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    nome: "Vue",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    nome: "Angular",
    icone:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
];

listaSkills.innerHTML = "";

skills.forEach((skill) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <img src="${skill.icone}" alt="Ícone ${skill.nome}" />
    <span>${skill.nome}</span>
  `;

  listaSkills.appendChild(li);
});

// ================= PROJETOS (CARROSSEL) =================

const projetos = [
  {
    nome: "HDC Host — Hosting Services Website",
    descricaoPT:
      "Site institucional de uma empresa fictícia de hospedagem, desenvolvido para apresentar serviços, planos e formulário de contato, com layout moderno e responsivo.",
    descricaoEN:
      "Institutional website for a fictional hosting company, built to showcase services, pricing plans, and a contact form, using a modern and responsive layout.",
    imagens: ["hdc-01.png", "hdc-02.png", "hdc-03.png"],
    deploy: "https://raaphyr.github.io/HDC-Host-Project/",
    github: "https://github.com/Raaphyr/HDC-Host-Project",
  },
  {
    nome: "Restaurant Reservation Form",
    descricaoPT:
      "Formulário de reserva de mesas para restaurante, focado em organização de dados, usabilidade e clareza visual.",
    descricaoEN:
      "Restaurant table reservation form focused on data organization, usability, and visual clarity.",
    imagens: ["form.png"],
    deploy: "https://raaphyr.github.io/Form-Project/",
    github: "https://github.com/Raaphyr/Form-Project",
  },
  {
    nome: "Clone da Home do Instagram",
    descricaoPT:
      "Clone da página inicial do Instagram, reproduzindo o layout de login e elementos visuais da interface original.",
    descricaoEN:
      "Clone of Instagram’s home page, recreating the login layout and visual elements of the original interface.",
    imagens: ["insta.png"],
    deploy: "",
    github:
      "https://github.com/Raaphyr/frontend-estudos/tree/main/08_CLONE_HOME_INSTA",
  },
  {
    nome: "Newsletter",
    descricaoPT:
      "Página de inscrição em newsletter com troca de tema claro e escuro, focada em simplicidade e experiência do usuário.",
    descricaoEN:
      "Newsletter subscription page with light and dark theme switching, focused on simplicity and user experience.",
    imagens: ["Newsletter-claro.png", "Newsletter-escuro.png"],
    deploy: "",
    github:
      "https://github.com/Raaphyr/frontend-estudos/tree/main/11_Newsletter",
  },
];

const carrossel = document.getElementById("carrossel-projetos");
let indiceProjeto = 0;

function renderProjeto() {
  const projeto = projetos[indiceProjeto];
  const idioma = idiomaAtual;

  const descricao = idioma === "pt" ? projeto.descricaoPT : projeto.descricaoEN;

  carrossel.innerHTML = `
    <div class="projeto-card">
      <h3>${projeto.nome}</h3>

      <img src="img/${projeto.imagens[0]}" alt="Imagem do projeto ${projeto.nome}" />

      <p>${descricao}</p>

      <div class="botoes-projeto">
        ${
          projeto.github
            ? `<a href="${projeto.github}" target="_blank" class="btn">GitHub</a>`
            : ""
        }
        ${
          projeto.deploy
            ? `<a href="${projeto.deploy}" target="_blank" class="btn primario">Ver projeto</a>`
            : ""
        }
      </div>
    </div>
  `;
}

document.getElementById("btn-prev").addEventListener("click", () => {
  indiceProjeto = indiceProjeto === 0 ? projetos.length - 1 : indiceProjeto - 1;
  renderProjeto();
});

document.getElementById("btn-next").addEventListener("click", () => {
  indiceProjeto = indiceProjeto === projetos.length - 1 ? 0 : indiceProjeto + 1;
  renderProjeto();
});

// Atualizar quando trocar idioma
const trocarIdiomaOriginal = trocarIdioma;
trocarIdioma = function () {
  trocarIdiomaOriginal();
  renderProjeto();
};

renderProjeto();
