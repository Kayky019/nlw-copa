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
    "2 WIN",
    "Grupo G",
    createGame("brazil", "2 x 0", "serbia") +
      createGame("brazil", "1 x 0", "switzerland") +
      createGame("brazil", "0 x 1", "cameroon")
  ) +
  createCard(
    "WIN",
    "Oitavas de final",
    createGame("brazil", "4 x 1", "corea")
  ) +
  createCard(
    "LOST",
    "Quartas de final",
    createGame("brazil", "1(2)x(4)1", "croatia")
  ) +
  createCard (
    "WHAIT",
    "THE WINNER?",
    createGame("argentina", "3(4)x3(2)", "france")
  ) +
 createCard (
   "WINNER",
   "ARGENTINA",
   createGame("argentina", "WINNER", "ARGENTINA)
   )
