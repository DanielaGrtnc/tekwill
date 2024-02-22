// 1. Obține prima carte
const deck = [5, 9, 7, 1, 8];
function getFirstCard(deck) {
    return deck[0];
  }  

// 2. Obține a doua carte
const deck2 = [3, 2, 10, 6, 7];
function getSecondCard(deck2) {
    return deck2[1];
  }

  // 3. Schimbă primele două cărți
  const deck3 = [10, 7, 3, 8, 5];
  function swapTopTwoCards(deck3) {
    [deck3[0], deck3[1]] = [deck3[1], deck3[0]];
    return deck3;
  }

  // 4. Renunță la prima carte
  const deck4 = [2, 5, 4, 9, 3];
  function discardTopCard(deck4) {
  const [firstCard, ...remainingDeck] = deck4;
  return [firstCard, remainingDeck];
  }
  
  // 5. Inserează cărți cu fețe
  const deck5 = [5, 4, 7, 10];
  function insertFaceCards(deck5) {
  const faceCards = ['valet', 'damă', 'rege'];
  return [...deck5.slice(0, 1), ...faceCards, ...deck5.slice(1)];
  }

  
  console.log(getFirstCard(deck)); 
  console.log(getSecondCard(deck2)); 
  console.log(swapTopTwoCards(deck3)); 
  console.log(discardTopCard(deck4)); 
  console.log(insertFaceCards(deck5)); 
