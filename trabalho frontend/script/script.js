document.addEventListener("DOMContentLoaded", () => {
  const exercicios = {
    peito: [
      "Supino reto com barra solta",
      "Voador frontal na máquina",
      "Apoio sobre o solo",
      "Supino inclinado máquina",
      "Supino inclinado barra solta",
      "Crucifixo reto com halteres",
      "Crucifixo inclinado com halteres",
    ],
    costas: [
      "Puxada frontal",
      "Remada unilateral",
      "Remada com halteres",
      "Levantamento terra",
      "Fly inverso",
      "Flexão lateral do tronco",
    ],
    pernas: [
      "Mesa flexora",
      "Cadeira abdutora",
      "Cadeira adutora",
      "Extensão de quadril com caneleira",
      "Elevação de quadril",
      "Stiff",
    ],
    bracos: [
      "Rosca direta",
      "Rosca Scott",
      "Rosca Arnold",
      "Tríceps testa",
      "Tríceps francês",
      "Tríceps corda",
    ],
    ombro: [
      "Desenvolvimento",
      "Elevação lateral no cabo",
      "Elevação lateral com halteres",
      "Elevação frontal",
      "Flyer invertido",
    ],
  };

  const videos = [
    "https://www.youtube.com/embed/T3M9rCkcBM8",
    "https://www.youtube.com/embed/bkYrwZByCe4",
    "https://www.youtube.com/embed/zhvvoBEd34U",
    "https://www.youtube.com/embed/CZNFhAw7hKs",
    "https://www.youtube.com/embed/mI572un7cRA",
    "https://www.youtube.com/embed/LTx1b8uPUqo",
  ];

  let videoIndex = 0;

  // Função para mostrar exercícios
  function mostrarExercicios() {
    const grupo = document.getElementById("grupoMuscular").value;
    const tabelaExercicios = document.getElementById("tabelaExercicios");

    if (!grupo) {
      tabelaExercicios.innerHTML = "";
      return;
    }

    const listaExercicios = exercicios[grupo];
    let tabelaHTML = `
      <table>
        <thead>
          <tr>
            <th>Grupo Muscular</th>
            <th>Exercício</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="${listaExercicios.length}">
              ${grupo.charAt(0).toUpperCase() + grupo.slice(1)}
            </td>
            <td>${listaExercicios[0]}</td>
          </tr>
    `;

    for (let i = 1; i < listaExercicios.length; i++) {
      tabelaHTML += `
        <tr>
          <td>${listaExercicios[i]}</td>
        </tr>
      `;
    }

    tabelaHTML += `
        </tbody>
      </table>
    `;

    tabelaExercicios.innerHTML = tabelaHTML;
  }

  // Função para trocar o vídeo do carrossel
  function trocarVideo(direcao) {
    videoIndex += direcao;
    if (videoIndex < 0) {
      videoIndex = videos.length - 1;
    } else if (videoIndex >= videos.length) {
      videoIndex = 0;
    }
    document.querySelector(".carousel-video iframe").src = videos[videoIndex];
  }

  // Adicionar eventos ao DOM
  document.getElementById("grupoMuscular").addEventListener("change", mostrarExercicios);

  document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    trocarVideo(-1);
  });

  document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    trocarVideo(1);
  });
});
