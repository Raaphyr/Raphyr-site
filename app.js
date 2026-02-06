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

  document.getElementById("titulo").textContent = t.titulo;
  document.getElementById("descricao").textContent = t.descricao;
  document.getElementById("titulo-projetos").textContent = t.projetos;
  document.getElementById("nome-projeto1").textContent = t.nomeProjeto1;
  document.getElementById("desc-projeto1").textContent = t.descProjeto1;
  document.getElementById("titulo-skills").textContent = t.skills;
  document.getElementById("titulo-contato").textContent = t.contato;

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
