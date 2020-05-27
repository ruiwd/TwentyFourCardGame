const twentyFour = {};

twentyFour.cardGen1 = () => {
  return parseInt(Math.random()*13+1)
};

let card1 = twentyFour.cardGen1();

twentyFour.suitGen1 = () => {
  return parseInt(Math.random()*4)
};

let suit1 = twentyFour.suitGen1();

twentyFour.cardGen2 = () => {
  return parseInt(Math.random()*13+1)
};

let card2 = twentyFour.cardGen2();

twentyFour.suitGen2 = () => {
  return parseInt(Math.random()*4)
};

let suit2 = twentyFour.suitGen2();

twentyFour.cardGen3 = () => {
  return parseInt(Math.random()*13+1)
};

let card3 = twentyFour.cardGen3();

twentyFour.suitGen3 = () => {
  return parseInt(Math.random()*4)
};

let suit3 = twentyFour.suitGen3();

twentyFour.cardGen4 = () => {
  return parseInt(Math.random()*13+1)
};

let card4 = twentyFour.cardGen4();

twentyFour.suitGen4 = () => {
  return parseInt(Math.random()*4)
};

let suit4 = twentyFour.suitGen4();

let htmlEdit = (order,card) => {
  $('.cards .wrapper').append(`
    <div class="${order}">
      <img src="./assets/${card}.jpg" alt="">
    </div>
  `)
}

twentyFour.card1 = () => {
  if ((card1 === 1) && (suit1 === 0)) {
    htmlEdit('card1', 'AD')
  } 
    else if ((card1 === 1) && (suit1 === 1)) {
      htmlEdit ('card1', 'AC')
    }

    else if ((card1 === 1) && (suit1 === 2)) {
      htmlEdit ('card1', 'AH')
    }

    else if ((card1 === 1) && (suit1 === 3)) {
      htmlEdit ('card1', 'AS')
    }

    else if ((card1 === 2) && (suit1 === 0)) {
      htmlEdit ('card1', '2D')
    }

    else if ((card1 === 2) && (suit1 === 1)) {
      htmlEdit ('card1', '2C')
    }

    else if ((card1 === 2) && (suit1 === 2)) {
      htmlEdit ('card1', '2H')
    }

    else if ((card1 === 2) && (suit1 === 3)) {
      htmlEdit ('card1', '2S')
    }

    else if ((card1 === 3) && (suit1 === 0)) {
      htmlEdit ('card1', '3D')
    }

    else if ((card1 === 3) && (suit1 === 1)) {
      htmlEdit ('card1', '3C')
    }

    else if ((card1 === 3) && (suit1 === 2)) {
      htmlEdit ('card1', '3H')
    }

    else if ((card1 === 3) && (suit1 === 3)) {
      htmlEdit ('card1', '3S')
    }

    else if ((card1 === 4) && (suit1 === 0)) {
      htmlEdit ('card1', '4D')
    }

    else if ((card1 === 4) && (suit1 === 1)) {
      htmlEdit ('card1', '4C')
    }

    else if ((card1 === 4) && (suit1 === 2)) {
      htmlEdit ('card1', '4H')
    }

    else if ((card1 === 4) && (suit1 === 3)) {
      htmlEdit ('card1', '4S')
    }

    else if ((card1 === 5) && (suit1 === 0)) {
      htmlEdit ('card1', '5D')
    }

    else if ((card1 === 5) && (suit1 === 1)) {
      htmlEdit ('card1', '5C')
    }

    else if ((card1 === 5) && (suit1 === 2)) {
      htmlEdit ('card1', '5H')
    }

    else if ((card1 === 5) && (suit1 === 3)) {
      htmlEdit ('card1', '5S')
    }

    else if ((card1 === 6) && (suit1 === 0)) {
      htmlEdit ('card1', '6D')
    }

    else if ((card1 === 6) && (suit1 === 1)) {
      htmlEdit ('card1', '6C')
    }

    else if ((card1 === 6) && (suit1 === 2)) {
      htmlEdit ('card1', '6H')
    }

    else if ((card1 === 6) && (suit1 === 3)) {
      htmlEdit ('card1', '6S')
    }

    else if ((card1 === 7) && (suit1 === 0)) {
      htmlEdit ('card1', '7D')
    }

    else if ((card1 === 7) && (suit1 === 1)) {
      htmlEdit ('card1', '7C')
    }

    else if ((card1 === 7) && (suit1 === 2)) {
      htmlEdit ('card1', '7H')
    }

    else if ((card1 === 7) && (suit1 === 3)) {
      htmlEdit ('card1', '7S')
    }

    else if ((card1 === 8) && (suit1 === 0)) {
      htmlEdit ('card1', '8D')
    }

    else if ((card1 === 8) && (suit1 === 1)) {
      htmlEdit ('card1', '8C')
    }

    else if ((card1 === 8) && (suit1 === 2)) {
      htmlEdit ('card1', '8H')
    }

    else if ((card1 === 8) && (suit1 === 3)) {
      htmlEdit ('card1', '8S')
    }

    else if ((card1 === 9) && (suit1 === 0)) {
      htmlEdit ('card1', '9D')
    }

    else if ((card1 === 9) && (suit1 === 1)) {
      htmlEdit ('card1', '9C')
    }

    else if ((card1 === 9) && (suit1 === 2)) {
      htmlEdit ('card1', '9H')
    }

    else if ((card1 === 9) && (suit1 === 3)) {
      htmlEdit ('card1', '9S')
    }

    else if ((card1 === 10) && (suit1 === 0)) {
      htmlEdit ('card1', '10D')
    }

    else if ((card1 === 10) && (suit1 === 1)) {
      htmlEdit ('card1', '10C')
    }

    else if ((card1 === 10) && (suit1 === 2)) {
      htmlEdit ('card1', '10H')
    }

    else if ((card1 === 10) && (suit1 === 3)) {
      htmlEdit ('card1', '10S')
    }

    else if ((card1 === 11) && (suit1 === 0)) {
      htmlEdit ('card1', 'JD')
    }

    else if ((card1 === 11) && (suit1 === 1)) {
      htmlEdit ('card1', 'JC')
    }

    else if ((card1 === 11) && (suit1 === 2)) {
      htmlEdit ('card1', 'JH')
    }

    else if ((card1 === 11) && (suit1 === 3)) {
      htmlEdit ('card1', 'JS')
    }

    else if ((card1 === 12) && (suit1 === 0)) {
      htmlEdit ('card1', 'QD')
    }

    else if ((card1 === 12) && (suit1 === 1)) {
      htmlEdit ('card1', 'QC')
    }

    else if ((card1 === 12) && (suit1 === 2)) {
      htmlEdit ('card1', 'QH')
    }

    else if ((card1 === 12) && (suit1 === 3)) {
      htmlEdit ('card1', 'QS')
    }

    else if ((card1 === 13) && (suit1 === 0)) {
      htmlEdit ('card1', 'KD')
    }

    else if ((card1 === 13) && (suit1 === 1)) {
      htmlEdit ('card1', 'KC')
    }

    else if ((card1 === 13) && (suit1 === 2)) {
      htmlEdit ('card1', 'KH')
    }

    else if ((card1 === 13) && (suit1 === 3)) {
      htmlEdit ('card1', 'KS')
    }
} 

twentyFour.card2 = () => {
  if ((card2 === 1) && (suit2 === 0)) {
    htmlEdit('card2', 'AD')
  } 
    else if ((card2 === 1) && (suit2 === 1)) {
      htmlEdit ('card2', 'AC')
    }

    else if ((card2 === 1) && (suit2 === 2)) {
      htmlEdit ('card2', 'AH')
    }

    else if ((card2 === 1) && (suit2 === 3)) {
      htmlEdit ('card2', 'AS')
    }

    else if ((card2 === 2) && (suit2 === 0)) {
      htmlEdit ('card2', '2D')
    }

    else if ((card2 === 2) && (suit2 === 1)) {
      htmlEdit ('card2', '2C')
    }

    else if ((card2 === 2) && (suit2 === 2)) {
      htmlEdit ('card2', '2H')
    }

    else if ((card2 === 2) && (suit2 === 3)) {
      htmlEdit ('card2', '2S')
    }

    else if ((card2 === 3) && (suit2 === 0)) {
      htmlEdit ('card2', '3D')
    }

    else if ((card2 === 3) && (suit2 === 1)) {
      htmlEdit ('card2', '3C')
    }

    else if ((card2 === 3) && (suit2 === 2)) {
      htmlEdit ('card2', '3H')
    }

    else if ((card2 === 3) && (suit2 === 3)) {
      htmlEdit ('card2', '3S')
    }

    else if ((card2 === 4) && (suit2 === 0)) {
      htmlEdit ('card2', '4D')
    }

    else if ((card2 === 4) && (suit2 === 1)) {
      htmlEdit ('card2', '4C')
    }

    else if ((card2 === 4) && (suit2 === 2)) {
      htmlEdit ('card2', '4H')
    }

    else if ((card2 === 4) && (suit2 === 3)) {
      htmlEdit ('card2', '4S')
    }

    else if ((card2 === 5) && (suit2 === 0)) {
      htmlEdit ('card2', '5D')
    }

    else if ((card2 === 5) && (suit2 === 1)) {
      htmlEdit ('card2', '5C')
    }

    else if ((card2 === 5) && (suit2 === 2)) {
      htmlEdit ('card2', '5H')
    }

    else if ((card2 === 5) && (suit2 === 3)) {
      htmlEdit ('card2', '5S')
    }

    else if ((card2 === 6) && (suit2 === 0)) {
      htmlEdit ('card2', '6D')
    }

    else if ((card2 === 6) && (suit2 === 1)) {
      htmlEdit ('card2', '6C')
    }

    else if ((card2 === 6) && (suit2 === 2)) {
      htmlEdit ('card2', '6H')
    }

    else if ((card2 === 6) && (suit2 === 3)) {
      htmlEdit ('card2', '6S')
    }

    else if ((card2 === 7) && (suit2 === 0)) {
      htmlEdit ('card2', '7D')
    }

    else if ((card2 === 7) && (suit2 === 1)) {
      htmlEdit ('card2', '7C')
    }

    else if ((card2 === 7) && (suit2 === 2)) {
      htmlEdit ('card2', '7H')
    }

    else if ((card2 === 7) && (suit2 === 3)) {
      htmlEdit ('card2', '7S')
    }

    else if ((card2 === 8) && (suit2 === 0)) {
      htmlEdit ('card2', '8D')
    }

    else if ((card2 === 8) && (suit2 === 1)) {
      htmlEdit ('card2', '8C')
    }

    else if ((card2 === 8) && (suit2 === 2)) {
      htmlEdit ('card2', '8H')
    }

    else if ((card2 === 8) && (suit2 === 3)) {
      htmlEdit ('card2', '8S')
    }

    else if ((card2 === 9) && (suit2 === 0)) {
      htmlEdit ('card2', '9D')
    }

    else if ((card2 === 9) && (suit2 === 1)) {
      htmlEdit ('card2', '9C')
    }

    else if ((card2 === 9) && (suit2 === 2)) {
      htmlEdit ('card2', '9H')
    }

    else if ((card2 === 9) && (suit2 === 3)) {
      htmlEdit ('card2', '9S')
    }

    else if ((card2 === 10) && (suit2 === 0)) {
      htmlEdit ('card2', '10D')
    }

    else if ((card2 === 10) && (suit2 === 1)) {
      htmlEdit ('card2', '10C')
    }

    else if ((card2 === 10) && (suit2 === 2)) {
      htmlEdit ('card2', '10H')
    }

    else if ((card2 === 10) && (suit2 === 3)) {
      htmlEdit ('card2', '10S')
    }

    else if ((card2 === 11) && (suit2 === 0)) {
      htmlEdit ('card2', 'JD')
    }

    else if ((card2 === 11) && (suit2 === 1)) {
      htmlEdit ('card2', 'JC')
    }

    else if ((card2 === 11) && (suit2 === 2)) {
      htmlEdit ('card2', 'JH')
    }

    else if ((card2 === 11) && (suit2 === 3)) {
      htmlEdit ('card2', 'JS')
    }

    else if ((card2 === 12) && (suit2 === 0)) {
      htmlEdit ('card2', 'QD')
    }

    else if ((card2 === 12) && (suit2 === 1)) {
      htmlEdit ('card2', 'QC')
    }

    else if ((card2 === 12) && (suit2 === 2)) {
      htmlEdit ('card2', 'QH')
    }

    else if ((card2 === 12) && (suit2 === 3)) {
      htmlEdit ('card2', 'QS')
    }

    else if ((card2 === 13) && (suit2 === 0)) {
      htmlEdit ('card2', 'KD')
    }

    else if ((card2 === 13) && (suit2 === 1)) {
      htmlEdit ('card2', 'KC')
    }

    else if ((card2 === 13) && (suit2 === 2)) {
      htmlEdit ('card2', 'KH')
    }

    else if ((card2 === 13) && (suit2 === 3)) {
      htmlEdit ('card2', 'KS')
    }
} 

twentyFour.card3 = () => {
  if ((card3 === 1) && (suit3 === 0)) {
    htmlEdit('card3', 'AD')
  } 
    else if ((card3 === 1) && (suit3 === 1)) {
      htmlEdit ('card3', 'AC')
    }

    else if ((card3 === 1) && (suit3 === 2)) {
      htmlEdit ('card3', 'AH')
    }

    else if ((card3 === 1) && (suit3 === 3)) {
      htmlEdit ('card3', 'AS')
    }

    else if ((card3 === 2) && (suit3 === 0)) {
      htmlEdit ('card3', '2D')
    }

    else if ((card3 === 2) && (suit3 === 1)) {
      htmlEdit ('card3', '2C')
    }

    else if ((card3 === 2) && (suit3 === 2)) {
      htmlEdit ('card3', '2H')
    }

    else if ((card3 === 2) && (suit3 === 3)) {
      htmlEdit ('card3', '2S')
    }

    else if ((card3 === 3) && (suit3 === 0)) {
      htmlEdit ('card3', '3D')
    }

    else if ((card3 === 3) && (suit3 === 1)) {
      htmlEdit ('card3', '3C')
    }

    else if ((card3 === 3) && (suit3 === 2)) {
      htmlEdit ('card3', '3H')
    }

    else if ((card3 === 3) && (suit3 === 3)) {
      htmlEdit ('card3', '3S')
    }

    else if ((card3 === 4) && (suit3 === 0)) {
      htmlEdit ('card3', '4D')
    }

    else if ((card3 === 4) && (suit3 === 1)) {
      htmlEdit ('card3', '4C')
    }

    else if ((card3 === 4) && (suit3 === 2)) {
      htmlEdit ('card3', '4H')
    }

    else if ((card3 === 4) && (suit3 === 3)) {
      htmlEdit ('card3', '4S')
    }

    else if ((card3 === 5) && (suit3 === 0)) {
      htmlEdit ('card3', '5D')
    }

    else if ((card3 === 5) && (suit3 === 1)) {
      htmlEdit ('card3', '5C')
    }

    else if ((card3 === 5) && (suit3 === 2)) {
      htmlEdit ('card3', '5H')
    }

    else if ((card3 === 5) && (suit3 === 3)) {
      htmlEdit ('card3', '5S')
    }

    else if ((card3 === 6) && (suit3 === 0)) {
      htmlEdit ('card3', '6D')
    }

    else if ((card3 === 6) && (suit3 === 1)) {
      htmlEdit ('card3', '6C')
    }

    else if ((card3 === 6) && (suit3 === 2)) {
      htmlEdit ('card3', '6H')
    }

    else if ((card3 === 6) && (suit3 === 3)) {
      htmlEdit ('card3', '6S')
    }

    else if ((card3 === 7) && (suit3 === 0)) {
      htmlEdit ('card3', '7D')
    }

    else if ((card3 === 7) && (suit3 === 1)) {
      htmlEdit ('card3', '7C')
    }

    else if ((card3 === 7) && (suit3 === 2)) {
      htmlEdit ('card3', '7H')
    }

    else if ((card3 === 7) && (suit3 === 3)) {
      htmlEdit ('card3', '7S')
    }

    else if ((card3 === 8) && (suit3 === 0)) {
      htmlEdit ('card3', '8D')
    }

    else if ((card3 === 8) && (suit3 === 1)) {
      htmlEdit ('card3', '8C')
    }

    else if ((card3 === 8) && (suit3 === 2)) {
      htmlEdit ('card3', '8H')
    }

    else if ((card3 === 8) && (suit3 === 3)) {
      htmlEdit ('card3', '8S')
    }

    else if ((card3 === 9) && (suit3 === 0)) {
      htmlEdit ('card3', '9D')
    }

    else if ((card3 === 9) && (suit3 === 1)) {
      htmlEdit ('card3', '9C')
    }

    else if ((card3 === 9) && (suit3 === 2)) {
      htmlEdit ('card3', '9H')
    }

    else if ((card3 === 9) && (suit3 === 3)) {
      htmlEdit ('card3', '9S')
    }

    else if ((card3 === 10) && (suit3 === 0)) {
      htmlEdit ('card3', '10D')
    }

    else if ((card3 === 10) && (suit3 === 1)) {
      htmlEdit ('card3', '10C')
    }

    else if ((card3 === 10) && (suit3 === 2)) {
      htmlEdit ('card3', '10H')
    }

    else if ((card3 === 10) && (suit3 === 3)) {
      htmlEdit ('card3', '10S')
    }

    else if ((card3 === 11) && (suit3 === 0)) {
      htmlEdit ('card3', 'JD')
    }

    else if ((card3 === 11) && (suit3 === 1)) {
      htmlEdit ('card3', 'JC')
    }

    else if ((card3 === 11) && (suit3 === 2)) {
      htmlEdit ('card3', 'JH')
    }

    else if ((card3 === 11) && (suit3 === 3)) {
      htmlEdit ('card3', 'JS')
    }

    else if ((card3 === 12) && (suit3 === 0)) {
      htmlEdit ('card3', 'QD')
    }

    else if ((card3 === 12) && (suit3 === 1)) {
      htmlEdit ('card3', 'QC')
    }

    else if ((card3 === 12) && (suit3 === 2)) {
      htmlEdit ('card3', 'QH')
    }

    else if ((card3 === 12) && (suit3 === 3)) {
      htmlEdit ('card3', 'QS')
    }

    else if ((card3 === 13) && (suit3 === 0)) {
      htmlEdit ('card3', 'KD')
    }

    else if ((card3 === 13) && (suit3 === 1)) {
      htmlEdit ('card3', 'KC')
    }

    else if ((card3 === 13) && (suit3 === 2)) {
      htmlEdit ('card3', 'KH')
    }

    else if ((card3 === 13) && (suit3 === 3)) {
      htmlEdit ('card3', 'KS')
    }
} 

twentyFour.card4 = () => {
  if ((card4 === 1) && (suit4 === 0)) {
    htmlEdit('card4', 'AD')
  } 
    else if ((card4 === 1) && (suit4 === 1)) {
      htmlEdit ('card4', 'AC')
    }

    else if ((card4 === 1) && (suit4 === 2)) {
      htmlEdit ('card4', 'AH')
    }

    else if ((card4 === 1) && (suit4 === 3)) {
      htmlEdit ('card4', 'AS')
    }

    else if ((card4 === 2) && (suit4 === 0)) {
      htmlEdit ('card4', '2D')
    }

    else if ((card4 === 2) && (suit4 === 1)) {
      htmlEdit ('card4', '2C')
    }

    else if ((card4 === 2) && (suit4 === 2)) {
      htmlEdit ('card4', '2H')
    }

    else if ((card4 === 2) && (suit4 === 3)) {
      htmlEdit ('card4', '2S')
    }

    else if ((card4 === 3) && (suit4 === 0)) {
      htmlEdit ('card4', '3D')
    }

    else if ((card4 === 3) && (suit4 === 1)) {
      htmlEdit ('card4', '3C')
    }

    else if ((card4 === 3) && (suit4 === 2)) {
      htmlEdit ('card4', '3H')
    }

    else if ((card4 === 3) && (suit4 === 3)) {
      htmlEdit ('card4', '3S')
    }

    else if ((card4 === 4) && (suit4 === 0)) {
      htmlEdit ('card4', '4D')
    }

    else if ((card4 === 4) && (suit4 === 1)) {
      htmlEdit ('card4', '4C')
    }

    else if ((card4 === 4) && (suit4 === 2)) {
      htmlEdit ('card4', '4H')
    }

    else if ((card4 === 4) && (suit4 === 3)) {
      htmlEdit ('card4', '4S')
    }

    else if ((card4 === 5) && (suit4 === 0)) {
      htmlEdit ('card4', '5D')
    }

    else if ((card4 === 5) && (suit4 === 1)) {
      htmlEdit ('card4', '5C')
    }

    else if ((card4 === 5) && (suit4 === 2)) {
      htmlEdit ('card4', '5H')
    }

    else if ((card4 === 5) && (suit4 === 3)) {
      htmlEdit ('card4', '5S')
    }

    else if ((card4 === 6) && (suit4 === 0)) {
      htmlEdit ('card4', '6D')
    }

    else if ((card4 === 6) && (suit4 === 1)) {
      htmlEdit ('card4', '6C')
    }

    else if ((card4 === 6) && (suit4 === 2)) {
      htmlEdit ('card4', '6H')
    }

    else if ((card4 === 6) && (suit4 === 3)) {
      htmlEdit ('card4', '6S')
    }

    else if ((card4 === 7) && (suit4 === 0)) {
      htmlEdit ('card4', '7D')
    }

    else if ((card4 === 7) && (suit4 === 1)) {
      htmlEdit ('card4', '7C')
    }

    else if ((card4 === 7) && (suit4 === 2)) {
      htmlEdit ('card4', '7H')
    }

    else if ((card4 === 7) && (suit4 === 3)) {
      htmlEdit ('card4', '7S')
    }

    else if ((card4 === 8) && (suit4 === 0)) {
      htmlEdit ('card4', '8D')
    }

    else if ((card4 === 8) && (suit4 === 1)) {
      htmlEdit ('card4', '8C')
    }

    else if ((card4 === 8) && (suit4 === 2)) {
      htmlEdit ('card4', '8H')
    }

    else if ((card4 === 8) && (suit4 === 3)) {
      htmlEdit ('card4', '8S')
    }

    else if ((card4 === 9) && (suit4 === 0)) {
      htmlEdit ('card4', '9D')
    }

    else if ((card4 === 9) && (suit4 === 1)) {
      htmlEdit ('card4', '9C')
    }

    else if ((card4 === 9) && (suit4 === 2)) {
      htmlEdit ('card4', '9H')
    }

    else if ((card4 === 9) && (suit4 === 3)) {
      htmlEdit ('card4', '9S')
    }

    else if ((card4 === 10) && (suit4 === 0)) {
      htmlEdit ('card4', '10D')
    }

    else if ((card4 === 10) && (suit4 === 1)) {
      htmlEdit ('card4', '10C')
    }

    else if ((card4 === 10) && (suit4 === 2)) {
      htmlEdit ('card4', '10H')
    }

    else if ((card4 === 10) && (suit4 === 3)) {
      htmlEdit ('card4', '10S')
    }

    else if ((card4 === 11) && (suit4 === 0)) {
      htmlEdit ('card4', 'JD')
    }

    else if ((card4 === 11) && (suit4 === 1)) {
      htmlEdit ('card4', 'JC')
    }

    else if ((card4 === 11) && (suit4 === 2)) {
      htmlEdit ('card4', 'JH')
    }

    else if ((card4 === 11) && (suit4 === 3)) {
      htmlEdit ('card4', 'JS')
    }

    else if ((card4 === 12) && (suit4 === 0)) {
      htmlEdit ('card4', 'QD')
    }

    else if ((card4 === 12) && (suit4 === 1)) {
      htmlEdit ('card4', 'QC')
    }

    else if ((card4 === 12) && (suit4 === 2)) {
      htmlEdit ('card4', 'QH')
    }

    else if ((card4 === 12) && (suit4 === 3)) {
      htmlEdit ('card4', 'QS')
    }

    else if ((card4 === 13) && (suit4 === 0)) {
      htmlEdit ('card4', 'KD')
    }

    else if ((card4 === 13) && (suit4 === 1)) {
      htmlEdit ('card4', 'KC')
    }

    else if ((card4 === 13) && (suit4 === 2)) {
      htmlEdit ('card4', 'KH')
    }

    else if ((card4 === 13) && (suit4 === 3)) {
      htmlEdit ('card4', 'KS')
    }
} 

let value = '';

$('.cards').on('click','.card1', () => {
  value = $('input').val() + ' ' + card1;
  
  $('input').val(value);
  // console.log(card1)
})

$('.cards').on('click','.card2', () => {
  value = $('input').val() + ' ' + card2;

  $('input').val(value);
})

$('.cards').on('click','.card3', () => {
  value = $('input').val() + ' ' + card3;

  $('input').val(value);
})

$('.cards').on('click','.card4', () => {
  value = $('input').val() + ' ' + card4;

  $('input').val(value);
})

$('.add').on('click', () => {
  value = $('input').val() + ' ' + '+';

  $('input').val(value);
})

$('.subtract').on('click', () => {
  value = $('input').val() + ' ' + '-';

  $('input').val(value);
})

$('.multiply').on('click', () => {
  value = $('input').val() + ' ' + '*';

  $('input').val(value);
})

$('.divide').on('click', () => {
  value = $('input').val() + ' ' + '/';

  $('input').val(value);
})

$('.braceL').on('click', () => {
  value = $('input').val() + ' ' + '(';

  $('input').val(value);
})

$('.braceR').on('click', () => {
  value = $('input').val() + ' ' + ')';

  $('input').val(value);
})

$('.clear').on('click', () => {
  $('input').val('');
})

$('.return').on('click', () => {
  let equation = (eval(value));
  
  if (equation === 24) {alert(`YOU DID IT! YOU'VE REACHED 24!`)}
  else {alert(`Uhm...That's not 24...`)}
})

$('.retry').on('click', () => {
  location.reload(true);
  // $('.cards .wrapper').html('');
  // twentyFour.reGen();
})

// twentyFour.reGen = () => {
//   twentyFour.cardGen1();
//   twentyFour.suitGen1();
//   twentyFour.cardGen2();
//   twentyFour.suitGen2();
//   twentyFour.cardGen3();
//   twentyFour.suitGen3();
//   twentyFour.cardGen4();
//   twentyFour.suitGen4();
//   twentyFour.init();
// }

twentyFour.init = () => {
  twentyFour.card1();
  twentyFour.card2();
  twentyFour.card3();
  twentyFour.card4();
}

$(document).ready(function() {
  twentyFour.init();
});