function createGame(player1, hour, player2) {
  return `
    <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
     </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Grupo A",
    createGame("catar", "13:00", "equador"
  )) +
  createCard(
    "21/11",
    "Grupo B",
    createGame("england", "10:00", "irã") +
      createGame("eua", "16:00", "wales")
  ) +
  createCard("22/11", "Grupo C", 
  createGame("argentina", "07:00", "arabia") +
  createGame("mexico", "13:00", "polonia")) +

  createCard("22/11", "Grupo D",
  createGame("dinamarca", "10:00", "tunisia") +
  createGame("france", "16:00", "australia")
  ) +

  createCard("23/11", "Grupo E", 
  createGame("germany", "10:00", "japan") +
  createGame("spain", "13:00", "costa")
  ) +

  createCard("23/11", "Grupo F", 
  createGame("marrocos", "07:00", "croatia") +
  createGame("belgica", "16:00", "canada"))
