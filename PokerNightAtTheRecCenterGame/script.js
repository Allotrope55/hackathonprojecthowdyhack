suits = ["Spades ", "Clubs ", "Hearts ", "Diamonds "]; //the suits list
cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]; //the card value/face list
alreadyTaken = []; //list that will be filled with values to make sure there aren't any duplicates
playerCardOneString = ""; //value that will hold combination of value and suit for player
playerCardTwoString = ""; 
revCardOneString = ""; //value that will hold combination of value and suit for rev
revCardTwoString = ""; 
revCardOneArray = []; //array that splits the values from the rev card string so they can be easily compared
revCardTwoArray = []; 
x = 0; //stores the value random number as an integer to get an index from the values list
y = 0; //stores the suit random number as an integer to get an index from the suits list
dealingAllCards = "false"; //initializes the variable that makes the while loop for the nested while loops work
playerCardOneDealt = "false"; //value that ends the player card while loop when turned true
playerCardTwoDealt = "false"; 
revCardOneDealt = "false"; //value that ends the rev card while loop when turned true
revCardTwoDealt = "false";  
middleTableCardCounter = 0; //counter to loop through the different table cards
middleTableCardOne = ""; //value that will hold combination of value and suit for the table
middleTableCardTwo = ""; 
middleTableCardThree = ""; 
middleTableCardFour = ""; 
middleTableCardFive = ""; 
middleTableCardOneDealt = "false"; //value that ends the table card while loop when turned true
middleTableCardTwoDealt = "false"; 
middleTableCardThreeDealt = "false"; 
middleTableCardFourDealt = "false"; 
middleTableCardFiveDealt = "false"; 
highCard = "false"; //stores if the player has a high card
highCardValue = 0; //stores the point value of a potential high card
onePair = "false"; //stores if the player has a pair
onePairValue = 0; //stores the point value of a potential pair
twoPair = "false"; //stores if the player has a two pair
twoPairValue = 0; //stores the point values of a potential two pair
threeOfAKind = "false"; //stores if the player has a three of a kind
threeOfAKindValue = ""; //stores the point value of a potential three of a kind
straight = "false"; //stores if the player has a straight
straightValue = 0; //stores the point value of a potential straight
flush = "false"; //stores if the player has a flush
flushValue = 0; //stores the point value of a potential flush
fullHouse = "false"; //stores if the player has a full house
fullHouseValue = 0; //stores the point value of a potential full house
fourOfAKind = "false"; //stores if the player has a four of a kind
fourOfAKindValue = 0; //stores the point value of a potential four of a kind
straightFlush = "false"; //stores if the player has a straight flush
straightFlushValue = 0; //stores the point value of a potential straight flush
royalFlush = "false"; //stores if the player has a royal flush
cardValueArray = [];
cardSuitArray = [];
oneCounter = 0;
twoCounter = 0;
threeCounter = 0;
fourCounter = 0;
fiveCounter = 0; 
sixCounter = 0;
sevenCounter = 0;
eightCounter = 0;
nineCounter = 0;
tenCounter = 0;
jackCounter = 0;
queenCounter = 0;
kingCounter = 0;
aceCounter = 0;
spadesCounter = 0;
clubsCounter = 0;
heartsCounter = 0;
diamondsCounter = 0;
counterFunctionValue = "";
counterFunctionSuit = "";
revHasDrawn = "false";
revHighCard = "false"; //stores if the player has a high card
revHighCardValue = 0; //stores the point value of a potential high card
revOnePair = "false"; //stores if the player has a pair
revOnePairValue = 0; //stores the point value of a potential pair
revTwoPair = "false"; //stores if the player has a two pair
revTwoPairValue = 0; //stores the point values of a potential two pair
revThreeOfAKind = "false"; //stores if the player has a three of a kind
revThreeOfAKindValue = ""; //stores the point value of a potential three of a kind
revStraight = "false"; //stores if the player has a straight
revStraightValue = 0; //stores the point value of a potential straight
revFlush = "false"; //stores if the player has a flush
revFlushValue = 0; //stores the point value of a potential flush
revFullHouse = "false"; //stores if the player has a full house
revFullHouseValue = 0; //stores the point value of a potential full house
revFourOfAKind = "false"; //stores if the player has a four of a kind
revFourOfAKindValue = 0; //stores the point value of a potential four of a kind
revStraightFlush = "false"; //stores if the player has a straight flush
revStraightFlushValue = 0; //stores the point value of a potential straight flush
revRoyalFlush = "false"; //stores if the player has a royal flush
revOneCounter = 0;
revTwoCounter = 0;
revThreeCounter = 0;
revFourCounter = 0;
revFiveCounter = 0; 
revSixCounter = 0;
revSevenCounter = 0;
revEightCounter = 0;
revNineCounter = 0;
revTenCounter = 0;
revJackCounter = 0;
revQueenCounter = 0;
revKingCounter = 0;
revAceCounter = 0;
revSpadesCounter = 0;
revClubsCounter = 0;
revHeartsCounter = 0;
revDiamondsCounter = 0;
dealCardsButtonRef = document.getElementById("dealCardsButtonDiv") //obtains a reference to the dealCardsButtonDiv
var card = ""; //value variable that gets added into the card strings
var suit = ""; //suit variable that gets added into the card strings
winner = "";


function dealCards() //deals the initial set of cards
{
  console.log("Hi"); //makes sure the dealCards function starts

  dealCardsButtonRef.style.display = "none"; //makes the deal cardsFunctionButton disappear so that the player won't press it again
  dealingAllCards = "true"; //value that makes it possible to loop through all the different nested while loops
  while (dealingAllCards == "true") { //while loop that loops through all the nested while loops
    while (playerCardOneDealt != "true") { //while loop that deals the first player card
      x = Math.floor(Math.random() * 14) //randomizes the card's value
      y = Math.floor(Math.random() * 4) //randomizes the card's suit
    
      card = cards[x]; // pulls the card's value from the list and its face if it has one
      suit = suits[y]; //pulls the card's suit from the list
      

      playerCardOne = suit + card; //puts the suit and the card value and if there a face into the same variable
      console.log(playerCardOne); //prints out the variable of the combined suit and card value to the console
      if (!(alreadyTaken.includes(playerCardOne))) //checks with an array to make sure the card suit and value obtained this loop hasn't already been taken
        {
          alreadyTaken.push(playerCardOne); //appends the string of the player card to the alreadyTaken array
          document.getElementById("playerCardOneDiv").innerHTML = playerCardOne; //assigns the player the card they got
          playerCardOneDealt = "true" //will end the loop of the firsst 
          counterFunction(card, suit);
          
          
        } 
    }
    while (playerCardTwoDealt != "true") { 
      x = Math.floor(Math.random() * 14)
      y = Math.floor(Math.random() * 4)
    
      card = cards[x];
      suit = suits[y];
      playerCardTwo = suit + card; 
      console.log(playerCardTwo); 
      if (!(alreadyTaken.includes(playerCardTwo)))
        {
          alreadyTaken.push(playerCardTwo);
          document.getElementById("playerCardTwoDiv").innerHTML = playerCardTwo;
          playerCardTwoDealt = "true"
          counterFunction(card, suit);
          dealingAllCards = "false";
          }
        } 
         dealingAllCards = "false";
    }
    console.log(alreadyTaken);
    middleTableCardDeal();

    }
    

  
  function revDealCards()
  {
    while (revCardOneDealt != "true") {
      let x = Math.floor(Math.random() * 14)
      let y = Math.floor(Math.random() * 4)
    
      let card = cards[x];
      let suit = suits[y];
      
    
      let revCardOne = suit + card;
      console.log(revCardOne); 
      if (!(alreadyTaken.includes(revCardOne)))
      {
        alreadyTaken.push(revCardOne);
        document.getElementById("revCardOneDiv").innerHTML = revCardOne;
        revCardOneArray = revCardOneString.split(" ")
        revCardOneDealt = "true"
      } 
    }
    while (revCardTwoDealt != "true") {
      let x = Math.floor(Math.random() * 14)
      let y = Math.floor(Math.random() * 4)
    
      let card = cards[x];
      let suit = suits[y];
    
      let revCardTwo = suit + card; 
      console.log(revCardTwo); 
      if (!(alreadyTaken.includes(revCardTwo)))
        {
          alreadyTaken.push(revCardTwo);
          document.getElementById("revCardTwoDiv").innerHTML = revCardTwo;
          revCardTwoArray = revCardTwoString.split(" ")
          revCardTwoDealt = "true"
        } 
        revHasDrawn = "true";
  }
  }

  function counterFunction(counterFunctionValue, counterFunctionSuit) {
    if (counterFunctionValue == "1"){
      oneCounter += 1;
    }
    else if (counterFunctionValue == "2"){
      twoCounter += 1;
    }
    else if (counterFunctionValue == "3"){
      threeCounter += 1;
    }
    else if (counterFunctionValue == "4"){
      fourCounter += 1;
    }
    else if (counterFunctionValue == "5"){
      fiveCounter += 1;
    }
    else if (counterFunctionValue == "6"){
      sixCounter += 1;
    }
    else if (counterFunctionValue == "7"){
      sevenCounter += 1;
    }
    else if (counterFunctionValue == "8"){
      eightCounter += 1;
    }
    else if (counterFunctionValue == "9"){
      nineCounter += 1;
    }
    else if (counterFunctionValue == "10"){
      tenCounter += 1;
    }
    else if (counterFunctionValue == "11"){
      jackCounter += 1;
    }
    else if (counterFunctionValue == "12"){
      queenCounter += 1;
    }
    else if (counterFunctionValue == "13"){
      kingCounter += 1;
    }
    else if (counterFunctionValue == "14"){
      aceCounter += 1;
    }
    if (counterFunctionSuit == "Spades") {
      spadesCounter += 1
    }
    else if (counterFunctionSuit == "Clubs") {
      clubsCounter += 1
    }
    else if (counterFunctionSuit == "Diamonds") {
      diamondsCounter += 1
    }
    else if (counterFunctionSuit == "Hearts") {
      heartsCounter += 1
    }
  }


  function revCounterFunction(counterFunctionValue, counterFunctionSuit) {
    if (counterFunctionValue == "1"){
      revOneCounter += 1;
    }
    else if (counterFunctionValue == "2"){
      revTwoCounter += 1;
    }
    else if (counterFunctionValue == "3"){
      revThreeCounter += 1;
    }
    else if (counterFunctionValue == "4"){
      revFourCounter += 1;
    }
    else if (counterFunctionValue == "5"){
      revFiveCounter += 1;
    }
    else if (counterFunctionValue == "6"){
      revSixCounter += 1;
    }
    else if (counterFunctionValue == "7"){
      revSevenCounter += 1;
    }
    else if (counterFunctionValue == "8"){
      revEightCounter += 1;
    }
    else if (counterFunctionValue == "9"){
      revNineCounter += 1;
    }
    else if (counterFunctionValue == "10"){
      revTenCounter += 1;
    }
    else if (counterFunctionValue == "11"){
      revJackCounter += 1;
    }
    else if (counterFunctionValue == "12"){
      revQueenCounter += 1;
    }
    else if (counterFunctionValue == "13"){
      revKingCounter += 1;
    }
    else if (counterFunctionValue == "14"){
      revAceCounter += 1;
    }
    if (counterFunctionSuit == "Spades") {
      revSpadesCounter += 1
    }
    else if (counterFunctionSuit == "Clubs") {
      revClubsCounter += 1
    }
    else if (counterFunctionSuit == "Diamonds") {
      revDiamondsCounter += 1
    }
    else if (counterFunctionSuit == "Hearts") {
      revHeartsCounter += 1
    }
  }
    
  
  function comboChecker() {
    if ((spadesCounter == 5) || (clubsCounter == 5) || (diamondsCounter == 5) || (heartsCounter == 5)) {
      if ((aceCounter == 1) && (kingCounter == 1) && (queenCounter == 1) && (jackCounter == 1) && (tenCounter == 1)) 
        royalFlush = "true"
      }
      else if ((twoCounter == 1) && (threeCounter == 1) && (fourCounter == 1) && (fiveCounter == 1) && (sixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((sevenCounter == 1) && (threeCounter == 1) && (fourCounter == 1) && (fiveCounter == 1) && (sixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((sevenCounter == 1) && (eightCounter == 1) && (fourCounter == 1) && (fiveCounter == 1) && (sixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((sevenCounter == 1) && (eightCounter == 1) && (nineCounter == 1) && (fiveCounter == 1) && (sixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((sevenCounter == 1) && (eightCounter == 1) && (nineCounter == 1) && (tenCounter == 1) && (sixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((sevenCounter == 1) && (eightCounter == 1) && (nineCounter == 1) && (tenCounter == 1) && (jackCounter == 1)) {
      straightFlush = "true"
      }
      else if ((queenCounter == 1) && (eightCounter == 1) && (nineCounter == 1) && (tenCounter == 1) && (jackCounter == 1)) {
      straightFlush = "true"
      }
      else if ((queenCounter == 1) && (kingCounter == 1) && (nineCounter == 1) && (tenCounter == 1) && (jackCounter == 1)) {
        straightFlush = "true"
        }
        else if ((queenCounter == 1) && (kingCounter == 1) && (aceCounter == 1) && (tenCounter == 1) && (jackCounter == 1)) {
          straightFlush = "true"
          }
    else if ((oneCounter > 1) || (twoCounter > 1) || (threeCounter > 1) || (fourCounter > 1) || (fiveCounter > 1) || (sixCounter > 1) || (sevenCounter > 1) || (eightCounter > 1) || (nineCounter > 1) || (tenCounter > 1) || (jackCounter > 1) || (queenCounter > 1) || (kingCounter > 1) || (aceCounter > 1)) {
      if ((oneCounter > 2) || (twoCounter > 2) || (threeCounter > 2) || (fourCounter > 2) || (fiveCounter > 2) || (sixCounter > 2) || (sevenCounter > 2) || (eightCounter > 2) || (nineCounter > 2) || (tenCounter > 2) || (jackCounter > 2) || (queenCounter > 2) || (kingCounter > 2) || (aceCounter > 2)) {
        if ((oneCounter > 3) || (twoCounter > 3) || (threeCounter > 3) || (fourCounter > 3) || (fiveCounter > 3) || (sixCounter > 3) || (sevenCounter > 3) || (eightCounter > 3) || (nineCounter > 3) || (tenCounter > 3) || (jackCounter > 3) || (queenCounter > 3) || (kingCounter > 3) || (aceCounter > 3)) {
          if (oneCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 1
          }
          else if (twoCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 2
          }
          else if (threeCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 3
          }
          else if (fourCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 4
          }
          else if (fiveCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 5
          }
          else if (sixCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 6
          }
          else if (sevenCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 7
          }
          else if (eightCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 8
          }
          else if (nineCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 9
          }
          else if (tenCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 10
          }
          else if (jackCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 11
          }
          else if (queenCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 12
          }
          else if (kingCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 13
          }
          else if (aceCounter == 4) {
            fourOfAKind = "true"
            fourOfAKindValue = 14
          }
        }
        else if (((oneCounter == 3) || (twoCounter == 3) || (threeCounter == 3) || (fourCounter == 3) || (fiveCounter == 3) || (sixCounter == 3) || (sevenCounter == 3) || (eightCounter == 3) || (nineCounter == 3) || (tenCounter == 3) || (jackCounter == 3) || (queenCounter == 3) || (kingCounter == 3) || (aceCounter == 3)) && ((oneCounter == 2) || (twoCounter == 2) || (threeCounter == 2) || (fourCounter == 2) || (fiveCounter == 2) || (sixCounter == 2) || (sevenCounter == 2) || (eightCounter == 2) || (nineCounter == 2) || (tenCounter == 2) || (jackCounter == 2) || (queenCounter == 2) || (kingCounter == 2) || (aceCounter == 2))) {
          if (oneCounter == 3)
          {
            fullHouse = "true";
            if (twoCounter == 2){
              fullHouseValue = (3 + (2 * 2)) 
            }
            else if (threeCounter == 2){
              fullHouseValue = (3 + (3 * 2)) 
            }
            else if (fourCounter == 2){
              fullHouseValue = (3 + (4 * 2)) 
            }
            else if (fiveCounter == 2){
              fullHouseValue = (3 + (5 * 2)) 
            }
            else if (sixCounter == 2){
              fullHouseValue = (3 + (6 * 2)) 
            }
            else if (sevenCounter == 2){
              fullHouseValue = (3 + (7 * 2)) 
            }
            else if (eightCounter == 2){
              fullHouseValue = (3 + (8 * 2)) 
            }
            else if (nineCounter == 2){
              fullHouseValue = (3 + (9 * 2)) 
            }
            else if (tenCounter == 2){
              fullHouseValue = (3 + (10 * 2)) 
            }
            else if (jackCounter == 2){
              fullHouseValue = (3 + (11 * 2)) 
            }
            else if (queenCounter == 2){
              fullHouseValue = (3 + (12 * 2)) 
            }
            else if (kingCounter == 2){
              fullHouseValue = (3 + (13 * 2)) 
            }
            else if (aceCounter == 2){
              fullHouseValue = (3 + (14 * 2)) 
            }
          }
        else if (twoCounter == 3)
            {
              fullHouse = "true";
              if (twoCounter == 2){
                fullHouseValue = (6 + (1 * 2)) 
              }
              else if (threeCounter == 2){
                fullHouseValue = (6 + (3 * 2)) 
              }
              else if (fourCounter == 2){
                fullHouseValue = (6 + (4 * 2)) 
              }
              else if (fiveCounter == 2){
                fullHouseValue = (6 + (5 * 2)) 
              }
              else if (sixCounter == 2){
                fullHouseValue = (6 + (6 * 2)) 
              }
              else if (sevenCounter == 2){
                fullHouseValue = (6 + (7 * 2)) 
              }
              else if (eightCounter == 2){
                fullHouseValue = (6 + (8 * 2)) 
              }
              else if (nineCounter == 2){
                fullHouseValue = (6 + (9 * 2)) 
              }
              else if (tenCounter == 2){
                fullHouseValue = (6 + (10 * 2)) 
              }
              else if (jackCounter == 2){
                fullHouseValue = (6 + (11 * 2)) 
              }
              else if (queenCounter == 2){
                fullHouseValue = (6 + (12 * 2)) 
              }
              else if (kingCounter == 2){
                fullHouseValue = (6 + (13 * 2)) 
              }
              else if (aceCounter == 2){
                fullHouseValue = (6 + (14 * 2)) 
              }
            }
        else if (threeCounter == 3)
              {
                fullHouse = "true";
                if (twoCounter == 2){
                  fullHouseValue = (9 + (1 * 2)) 
                }
                else if (oneCounter == 2){
                  fullHouseValue = (9 + (1 * 2)) 
                }
                else if (fourCounter == 2){
                  fullHouseValue = (9 + (4 * 2)) 
                }
                else if (fiveCounter == 2){
                  fullHouseValue = (9 + (5 * 2)) 
                }
                else if (sixCounter == 2){
                  fullHouseValue = (9 + (6 * 2)) 
                }
                else if (sevenCounter == 2){
                  fullHouseValue = (9 + (7 * 2)) 
                }
                else if (eightCounter == 2){
                  fullHouseValue = (9 + (8 * 2)) 
                }
                else if (nineCounter == 2){
                  fullHouseValue = (9 + (9 * 2)) 
                }
                else if (tenCounter == 2){
                  fullHouseValue = (9 + (10 * 2)) 
                }
                else if (jackCounter == 2){
                  fullHouseValue = (9 + (11 * 2)) 
                }
                else if (queenCounter == 2){
                  fullHouseValue = (9 + (12 * 2)) 
                }
                else if (kingCounter == 2){
                  fullHouseValue = (9 + (13 * 2)) 
                }
                else if (aceCounter == 2){
                  fullHouseValue = (9 + (14 * 2)) 
                }
              }
        else if (fourCounter == 3)
                {
                  fullHouse = "true";
                  if (twoCounter == 2){
                    fullHouseValue = (12 + (1 * 2)) 
                  }
                  else if (oneCounter == 2){
                    fullHouseValue = (12 + (1 * 2)) 
                  }
                  else if (threeCounter == 2){
                    fullHouseValue = (12 + (3 * 2)) 
                  }
                  else if (fiveCounter == 2){
                    fullHouseValue = (12 + (5 * 2)) 
                  }
                  else if (sixCounter == 2){
                    fullHouseValue = (12 + (6 * 2)) 
                  }
                  else if (sevenCounter == 2){
                    fullHouseValue = (12 + (7 * 2)) 
                  }
                  else if (eightCounter == 2){
                    fullHouseValue = (12 + (8 * 2)) 
                  }
                  else if (nineCounter == 2){
                    fullHouseValue = (12 + (9 * 2)) 
                  }
                  else if (tenCounter == 2){
                    fullHouseValue = (12 + (10 * 2)) 
                  }
                  else if (jackCounter == 2){
                    fullHouseValue = (12 + (11 * 2)) 
                  }
                  else if (queenCounter == 2){
                    fullHouseValue = (12 + (12 * 2)) 
                  }
                  else if (kingCounter == 2){
                    fullHouseValue = (12 + (13 * 2)) 
                  }
                  else if (aceCounter == 2){
                    fullHouseValue = (12 + (14 * 2)) 
                  }
                }
        else if (fiveCounter == 3)
                  {
                    fullHouse = "true";
                    if (twoCounter == 2){
                      fullHouseValue = (15 + (2 * 2)) 
                    }
                    else if (threeCounter == 2){
                      fullHouseValue = (15 + (3 * 2)) 
                    }
                    else if (fourCounter == 2){
                      fullHouseValue = (15 + (4 * 2)) 
                    }
                    else if (oneCounter == 2){
                      fullHouseValue = (15 + (1 * 2)) 
                    }
                    else if (sixCounter == 2){
                      fullHouseValue = (15 + (6 * 2)) 
                    }
                    else if (sevenCounter == 2){
                      fullHouseValue = (15 + (7 * 2)) 
                    }
                    else if (eightCounter == 2){
                      fullHouseValue = (15 + (8 * 2)) 
                    }
                    else if (nineCounter == 2){
                      fullHouseValue = (15 + (9 * 2)) 
                    }
                    else if (tenCounter == 2){
                      fullHouseValue = (15 + (10 * 2)) 
                    }
                    else if (jackCounter == 2){
                      fullHouseValue = (15 + (11 * 2)) 
                    }
                    else if (queenCounter == 2){
                      fullHouseValue = (15 + (12 * 2)) 
                    }
                    else if (kingCounter == 2){
                      fullHouseValue = (15 + (13 * 2)) 
                    }
                    else if (aceCounter == 2){
                      fullHouseValue = (15 + (14 * 2)) 
                    }
                  }
        else if (sixCounter == 3)
                    {
                      fullHouse = "true";
                      if (twoCounter == 2){
                        fullHouseValue = (18 + (2 * 2)) 
                      }
                      else if (threeCounter == 2){
                        fullHouseValue = (18 + (3 * 2)) 
                      }
                      else if (fourCounter == 2){
                        fullHouseValue = (18 + (4 * 2)) 
                      }
                      else if (fiveCounter == 2){
                        fullHouseValue = (18 + (5 * 2)) 
                      }
                      else if (oneCounter == 2){
                        fullHouseValue = (18 + (1 * 2)) 
                      }
                      else if (sevenCounter == 2){
                        fullHouseValue = (18 + (7 * 2)) 
                      }
                      else if (eightCounter == 2){
                        fullHouseValue = (18 + (8 * 2)) 
                      }
                      else if (nineCounter == 2){
                        fullHouseValue = (18 + (9 * 2)) 
                      }
                      else if (tenCounter == 2){
                        fullHouseValue = (18 + (10 * 2)) 
                      }
                      else if (jackCounter == 2){
                        fullHouseValue = (18 + (11 * 2)) 
                      }
                      else if (queenCounter == 2){
                        fullHouseValue = (18 + (12 * 2)) 
                      }
                      else if (kingCounter == 2){
                        fullHouseValue = (18 + (13 * 2)) 
                      }
                      else if (aceCounter == 2){
                        fullHouseValue = (18 + (14 * 2)) 
                      }
                    }
        else if (sevenCounter == 3)
                      {
                        fullHouse = "true";
                        if (twoCounter == 2){
                          fullHouseValue = (21 + (2 * 2)) 
                        }
                        else if (threeCounter == 2){
                          fullHouseValue = (21 + (3 * 2)) 
                        }
                        else if (fourCounter == 2){
                          fullHouseValue = (21 + (4 * 2)) 
                        }
                        else if (fiveCounter == 2){
                          fullHouseValue = (21 + (5 * 2)) 
                        }
                        else if (sixCounter == 2){
                          fullHouseValue = (21 + (6 * 2)) 
                        }
                        else if (oneCounter == 2){
                          fullHouseValue = (21 + (1 * 2)) 
                        }
                        else if (eightCounter == 2){
                          fullHouseValue = (21 + (8 * 2)) 
                        }
                        else if (nineCounter == 2){
                          fullHouseValue = (21 + (9 * 2)) 
                        }
                        else if (tenCounter == 2){
                          fullHouseValue = (21 + (10 * 2)) 
                        }
                        else if (jackCounter == 2){
                          fullHouseValue = (21 + (11 * 2)) 
                        }
                        else if (queenCounter == 2){
                          fullHouseValue = (21 + (12 * 2)) 
                        }
                        else if (kingCounter == 2){
                          fullHouseValue = (21 + (13 * 2)) 
                        }
                        else if (aceCounter == 2){
                          fullHouseValue = (21 + (14 * 2)) 
                        }
                      }
        else if (eightCounter == 3)
                        {
                          fullHouse = "true";
                          if (twoCounter == 2){
                            fullHouseValue = (24 + (2 * 2)) 
                          }
                          else if (threeCounter == 2){
                            fullHouseValue = (24 + (3 * 2)) 
                          }
                          else if (fourCounter == 2){
                            fullHouseValue = (24 + (4 * 2)) 
                          }
                          else if (fiveCounter == 2){
                            fullHouseValue = (24 + (5 * 2)) 
                          }
                          else if (sixCounter == 2){
                            fullHouseValue = (24 + (6 * 2)) 
                          }
                          else if (sevenCounter == 2){
                            fullHouseValue = (24 + (7 * 2)) 
                          }
                          else if (oneCounter == 2){
                            fullHouseValue = (24 + (1 * 2)) 
                          }
                          else if (nineCounter == 2){
                            fullHouseValue = (24 + (9 * 2)) 
                          }
                          else if (tenCounter == 2){
                            fullHouseValue = (24 + (10 * 2)) 
                          }
                          else if (jackCounter == 2){
                            fullHouseValue = (24 + (11 * 2)) 
                          }
                          else if (queenCounter == 2){
                            fullHouseValue = (24 + (12 * 2)) 
                          }
                          else if (kingCounter == 2){
                            fullHouseValue = (24 + (13 * 2)) 
                          }
                          else if (aceCounter == 2){
                            fullHouseValue = (24 + (14 * 2)) 
                          }
                        }
        else if (nineCounter == 3)
                          {
                            fullHouse = "true";
                            if (twoCounter == 2){
                              fullHouseValue = (27 + (2 * 2)) 
                            }
                            else if (threeCounter == 2){
                              fullHouseValue = (27 + (3 * 2)) 
                            }
                            else if (fourCounter == 2){
                              fullHouseValue = (27 + (4 * 2)) 
                            }
                            else if (fiveCounter == 2){
                              fullHouseValue = (27 + (5 * 2)) 
                            }
                            else if (sixCounter == 2){
                              fullHouseValue = (27 + (6 * 2)) 
                            }
                            else if (sevenCounter == 2){
                              fullHouseValue = (27 + (7 * 2)) 
                            }
                            else if (eightCounter == 2){
                              fullHouseValue = (27 + (8 * 2)) 
                            }
                            else if (oneCounter == 2){
                              fullHouseValue = (27 + (1 * 2)) 
                            }
                            else if (tenCounter == 2){
                              fullHouseValue = (27 + (10 * 2)) 
                            }
                            else if (jackCounter == 2){
                              fullHouseValue = (27 + (11 * 2)) 
                            }
                            else if (queenCounter == 2){
                              fullHouseValue = (27 + (12 * 2)) 
                            }
                            else if (kingCounter == 2){
                              fullHouseValue = (27 + (13 * 2)) 
                            }
                            else if (aceCounter == 2){
                              fullHouseValue = (27 + (14 * 2)) 
                            }
                          }
        else if (tenCounter == 3)
                            {
                              fullHouse = "true";
                              if (twoCounter == 2){
                                fullHouseValue = (30 + (2 * 2)) 
                              }
                              else if (threeCounter == 2){
                                fullHouseValue = (30 + (3 * 2)) 
                              }
                              else if (fourCounter == 2){
                                fullHouseValue = (30 + (4 * 2)) 
                              }
                              else if (fiveCounter == 2){
                                fullHouseValue = (30 + (5 * 2)) 
                              }
                              else if (sixCounter == 2){
                                fullHouseValue = (30 + (6 * 2)) 
                              }
                              else if (sevenCounter == 2){
                                fullHouseValue = (30 + (7 * 2)) 
                              }
                              else if (eightCounter == 2){
                                fullHouseValue = (30 + (8 * 2)) 
                              }
                              else if (nineCounter == 2){
                                fullHouseValue = (30 + (9 * 2)) 
                              }
                              else if (oneCounter == 2){
                                fullHouseValue = (30 + (1 * 2)) 
                              }
                              else if (jackCounter == 2){
                                fullHouseValue = (30 + (11 * 2)) 
                              }
                              else if (queenCounter == 2){
                                fullHouseValue = (30 + (12 * 2)) 
                              }
                              else if (kingCounter == 2){
                                fullHouseValue = (30 + (13 * 2)) 
                              }
                              else if (aceCounter == 2){
                                fullHouseValue = (30 + (14 * 2)) 
                              }
                            }
        else if (jackCounter == 3)
                              {
                                fullHouse = "true";
                                if (twoCounter == 2){
                                  fullHouseValue = (33 + (2 * 2)) 
                                }
                                else if (threeCounter == 2){
                                  fullHouseValue = (33 + (3 * 2)) 
                                }
                                else if (fourCounter == 2){
                                  fullHouseValue = (33 + (4 * 2)) 
                                }
                                else if (fiveCounter == 2){
                                  fullHouseValue = (33 + (5 * 2)) 
                                }
                                else if (sixCounter == 2){
                                  fullHouseValue = (33 + (6 * 2)) 
                                }
                                else if (sevenCounter == 2){
                                  fullHouseValue = (33 + (7 * 2)) 
                                }
                                else if (eightCounter == 2){
                                  fullHouseValue = (33 + (8 * 2)) 
                                }
                                else if (nineCounter == 2){
                                  fullHouseValue = (33 + (9 * 2)) 
                                }
                                else if (tenCounter == 2){
                                  fullHouseValue = (33 + (10 * 2)) 
                                }
                                else if (oneCounter == 2){
                                  fullHouseValue = (33 + (1 * 2)) 
                                }
                                else if (queenCounter == 2){
                                  fullHouseValue = (33 + (12 * 2)) 
                                }
                                else if (kingCounter == 2){
                                  fullHouseValue = (33 + (13 * 2)) 
                                }
                                else if (aceCounter == 2){
                                  fullHouseValue = (33 + (14 * 2)) 
                                } 
                              }
        else if (queenCounter == 3)
                                {
                                  fullHouse = "true";
                                  if (twoCounter == 2){
                                    fullHouseValue = (36 + (2 * 2)) 
                                  }
                                  else if (threeCounter == 2){
                                    fullHouseValue = (36 + (3 * 2)) 
                                  }
                                  else if (fourCounter == 2){
                                    fullHouseValue = (36 + (4 * 2)) 
                                  }
                                  else if (fiveCounter == 2){
                                    fullHouseValue = (36 + (5 * 2)) 
                                  }
                                  else if (sixCounter == 2){
                                    fullHouseValue = (36 + (6 * 2)) 
                                  }
                                  else if (sevenCounter == 2){
                                    fullHouseValue = (36 + (7 * 2)) 
                                  }
                                  else if (eightCounter == 2){
                                    fullHouseValue = (36 + (8 * 2)) 
                                  }
                                  else if (nineCounter == 2){
                                    fullHouseValue = (36 + (9 * 2)) 
                                  }
                                  else if (tenCounter == 2){
                                    fullHouseValue = (36 + (10 * 2)) 
                                  }
                                  else if (jackCounter == 2){
                                    fullHouseValue = (36 + (11 * 2)) 
                                  }
                                  else if (oneCounter == 2){
                                    fullHouseValue = (36 + (1 * 2)) 
                                  }
                                  else if (kingCounter == 2){
                                    fullHouseValue = (36 + (13 * 2)) 
                                  }
                                  else if (aceCounter == 2){
                                    fullHouseValue = (36 + (14 * 2)) 
                                  }
                                }
        else if (kingCounter == 3)
                                  {
                                    fullHouse = "true";
                                    if (twoCounter == 2){
                                      fullHouseValue = (39 + (2 * 2)) 
                                    }
                                    else if (threeCounter == 2){
                                      fullHouseValue = (39 + (3 * 2)) 
                                    }
                                    else if (fourCounter == 2){
                                      fullHouseValue = (39 + (4 * 2)) 
                                    }
                                    else if (fiveCounter == 2){
                                      fullHouseValue = (39 + (5 * 2)) 
                                    }
                                    else if (sixCounter == 2){
                                      fullHouseValue = (39 + (6 * 2)) 
                                    }
                                    else if (sevenCounter == 2){
                                      fullHouseValue = (39 + (7 * 2)) 
                                    }
                                    else if (eightCounter == 2){
                                      fullHouseValue = (39 + (8 * 2)) 
                                    }
                                    else if (nineCounter == 2){
                                      fullHouseValue = (39 + (9 * 2)) 
                                    }
                                    else if (tenCounter == 2){
                                      fullHouseValue = (39 + (10 * 2)) 
                                    }
                                    else if (jackCounter == 2){
                                      fullHouseValue = (39 + (11 * 2)) 
                                    }
                                    else if (queenCounter == 2){
                                      fullHouseValue = (39 + (12 * 2)) 
                                    }
                                    else if (oneCounter == 2){
                                      fullHouseValue = (39 + (1 * 2)) 
                                    }
                                    else if (aceCounter == 2){
                                      fullHouseValue = (39 + (14 * 2)) 
                                    }
                                  }
        else if (aceCounter == 3)
                                    {
                                      fullHouse = "true";
                                      if (twoCounter == 2){
                                        fullHouseValue = (42 + (2 * 2)) 
                                      }
                                      else if (threeCounter == 2){
                                        fullHouseValue = (42 + (3 * 2)) 
                                      }
                                      else if (fourCounter == 2){
                                        fullHouseValue = (42 + (4 * 2)) 
                                      }
                                      else if (fiveCounter == 2){
                                        fullHouseValue = (42 + (5 * 2)) 
                                      }
                                      else if (sixCounter == 2){
                                        fullHouseValue = (42 + (6 * 2)) 
                                      }
                                      else if (sevenCounter == 2){
                                        fullHouseValue = (42 + (7 * 2)) 
                                      }
                                      else if (eightCounter == 2){
                                        fullHouseValue = (42 + (8 * 2)) 
                                      }
                                      else if (nineCounter == 2){
                                        fullHouseValue = (42 + (9 * 2)) 
                                      }
                                      else if (tenCounter == 2){
                                        fullHouseValue = (42 + (10 * 2)) 
                                      }
                                      else if (jackCounter == 2){
                                        fullHouseValue = (42 + (11 * 2)) 
                                      }
                                      else if (queenCounter == 2){
                                        fullHouseValue = (42 + (12 * 2)) 
                                      }
                                      else if (kingCounter == 2){
                                        fullHouseValue = (42 + (13 * 2)) 
                                      }
                                      else if (oneCounter == 2){
                                        fullHouseValue = (42 + (1 * 2)) 
                                      }
                                    }
        }
        else if ((oneCounter == 3) || (twoCounter == 3) || (threeCounter == 3) || (fourCounter == 3) || (fiveCounter == 3) || (sixCounter == 3) || (sevenCounter == 3) || (eightCounter == 3) || (nineCounter == 3) || (tenCounter == 3) || (jackCounter == 3) || (queenCounter == 3) || (kingCounter == 3) || (aceCounter == 3)) {
          threeOfAKind = "true"
          if (oneCounter == 3) {
            threeOfAKindValue = 1;
          }
          else if (twoCounter == 3) {
            threeOfAKindValue = 2;
          }
          else if (threeCounter == 3) {
            threeOfAKindValue = 3;
          }
          else if (fourCounter == 3) {
            threeOfAKindValue = 2;
          }
          else if (fiveCounter == 3) {
            threeOfAKindValue = 5;
          }
          else if (sixCounter == 3) {
            threeOfAKindValue = 6;
          }
          else if (sevenCounter == 3) {
            threeOfAKindValue = 7;
          }
          else if (eightCounter == 3) {
            threeOfAKindValue = 8;
          }
          else if (nineCounter == 3) {
            threeOfAKindValue = 9;
          }
          else if (tenCounter == 3) {
            threeOfAKindValue = 10;
          }
          else if (jackCounter == 3) {
            threeOfAKindValue = 11;
          }
          else if (queenCounter == 3) {
            threeOfAKindValue = 12;
          }
          else if (kingCounter == 3) {
            threeOfAKindValue = 13;
          }
          else if (aceCounter == 3) {
            threeOfAKindValue = 14;
          }

      }

    }
    else if((twoCounter == 2) || (threeCounter == 2) || (fourCounter == 2) || (fiveCounter == 2) || (sixCounter == 2) || (sevenCounter == 2) || (eightCounter == 2) || (nineCounter == 2) || (tenCounter == 2) || (jackCounter == 2) || (queenCounter == 2) || (kingCounter == 2) || (aceCounter == 2)){
      onePair = "true";
      if (twoCounter == 2) {
        onePairValue = 2;
      }
      else if (threeCounter == 2) {
        onePairValue = 3;
      }
      else if (fourCounter == 2) {
        onePairValue = 4;
      }
      else if (fiveCounter == 2) {
        onePairValue = 5;
      }
      else if (sixCounter == 2) {
        onePairValue = 6;
      }
      else if (sevenCounter == 2) {
        onePairValue = 7;
      }
      else if (eightCounter == 2) {
        onePairValue = 8;
      }
      else if (nineCounter == 2) {
        onePairValue = 9;
      }
      else if (tenCounter == 2) {
        onePairValue = 10;
      }
      else if (jackCounter == 2) {
        onePairValue = 11;
      }
      else if (queenCounter == 2) {
        onePairValue = 12;
      }
      else if (kingCounter == 2) {
        onePairValue = 13;
      }
      else if (aceCounter == 2) {
        onePairValue = 14;
      }
    }
    else if (aceCounter = 1) {
      highCardValue = 14;
    } 
    else if (kingCounter = 1) {
      highCardValue = 13;
    } 
    else if (queenCounter = 1) {
      highCardValue = 12;
    } 
    else if (jackCounter = 1) {
      highCardValue = 11;
    } 
    else if (tenCounter = 1) {
      highCardValue = 10;
    } 
    else if (nineCounter = 1) {
      highCardValue = 9;
    } 
    else if (eightCounter = 1) {
      highCardValue = 8;
    } 
    else if (sevenCounter = 1) {
      highCardValue = 7;
    } 
    else if (sixCounter = 1) {
      highCardValue = 6;
    } 
    else if (fiveCounter = 1) {
      highCardValue = 5;
    } 
    else if (fourCounter = 1) {
      highCardValue = 4;
    } 
    else if (threeCounter = 1) {
      highCardValue = 3;
    } 
    else if (twoCounter = 1) {
      highCardValue = 2;
    } 
    }
    if (revHasDrawn != "true") {
    
    }
    else if (revHasDrawn = "true")
    {
      
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  function revComboChecker() {
    if ((revSpadesCounter == 5) || (revClubsCounter == 5) || (revDiamondsCounter == 5) || (revHeartsCounter == 5)) {
      if ((revAceCounter == 1) && (revKingCounter == 1) && (revQueenCounter == 1) && (revJackCounter == 1) && (revTenCounter == 1)) 
        royalFlush = "true"
      }
      else if ((revTwoCounter == 1) && (revThreeCounter == 1) && (revFourCounter == 1) && (revFiveCounter == 1) && (revSixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revSevenCounter == 1) && (revThreeCounter == 1) && (revFourCounter == 1) && (revFiveCounter == 1) && (revSixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revSevenCounter == 1) && (revEightCounter == 1) && (revFourCounter == 1) && (revFiveCounter == 1) && (revSixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revSevenCounter == 1) && (revEightCounter == 1) && (revNineCounter == 1) && (revFiveCounter == 1) && (revSixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revSevenCounter == 1) && (revEightCounter == 1) && (revNineCounter == 1) && (revTenCounter == 1) && (revSixCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revSevenCounter == 1) && (revEightCounter == 1) && (revNineCounter == 1) && (revTenCounter == 1) && (revJackCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revQueenCounter == 1) && (revEightCounter == 1) && (revNineCounter == 1) && (revTenCounter == 1) && (revJackCounter == 1)) {
      straightFlush = "true"
      }
      else if ((revQueenCounter == 1) && (revKingCounter == 1) && (revNineCounter == 1) && (revTenCounter == 1) && (revJackCounter == 1)) {
        straightFlush = "true"
        }
        else if ((revQueenCounter == 1) && (revKingCounter == 1) && (revAceCounter == 1) && (revTenCounter == 1) && (revJackCounter == 1)) {
          straightFlush = "true"
          }
    else if ((revOneCounter > 1) || (revTwoCounter > 1) || (revThreeCounter > 1) || (revFourCounter > 1) || (revFiveCounter > 1) || (revSixCounter > 1) || (revSevenCounter > 1) || (revEightCounter > 1) || (revNineCounter > 1) || (revTenCounter > 1) || (revJackCounter > 1) || (revQueenCounter > 1) || (revKingCounter > 1) || (revAceCounter > 1)) {
      if ((revOneCounter > 2) || (revTwoCounter > 2) || (revThreeCounter > 2) || (revFourCounter > 2) || (revFiveCounter > 2) || (revSixCounter > 2) || (revSevenCounter > 2) || (revEightCounter > 2) || (revNineCounter > 2) || (revTenCounter > 2) || (revJackCounter > 2) || (revQueenCounter > 2) || (revKingCounter > 2) || (revAceCounter > 2)) {
        if ((revOneCounter > 3) || (revTwoCounter > 3) || (revThreeCounter > 3) || (revFourCounter > 3) || (revFiveCounter > 3) || (revSixCounter > 3) || (revSevenCounter > 3) || (revEightCounter > 3) || (revNineCounter > 3) || (revTenCounter > 3) || (revJackCounter > 3) || (revQueenCounter > 3) || (revKingCounter > 3) || (revAceCounter > 3)) {
          if (revOneCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 1
          }
          else if (revTwoCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 2
          }
          else if (revThreeCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 3
          }
          else if (revFourCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 4
          }
          else if (revFiveCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 5
          }
          else if (revSixCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 6
          }
          else if (revSevenCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 7
          }
          else if (revEightCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 8
          }
          else if (revNineCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 9
          }
          else if (revTenCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 10
          }
          else if (revJackCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 11
          }
          else if (revQueenCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 12
          }
          else if (revKingCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 13
          }
          else if (revAceCounter == 4) {
            revFourOfAKind = "true"
            revFourOfAKindValue = 14
          }
        }
        else if (((revOneCounter == 3) || (revTwoCounter == 3) || (revThreeCounter == 3) || (revFourCounter == 3) || (revFiveCounter == 3) || (revSixCounter == 3) || (revSevenCounter == 3) || (revEightCounter == 3) || (revNineCounter == 3) || (revTenCounter == 3) || (revJackCounter == 3) || (revQueenCounter == 3) || (revKingCounter == 3) || (revAceCounter == 3)) && ((revOneCounter == 2) || (revTwoCounter == 2) || (revThreeCounter == 2) || (revFourCounter == 2) || (revFiveCounter == 2) || (revSixCounter == 2) || (revSevenCounter == 2) || (revEightCounter == 2) || (revNineCounter == 2) || (revTenCounter == 2) || (revJackCounter == 2) || (revQueenCounter == 2) || (revKingCounter == 2) || (revAceCounter == 2))) {
          if (revOneCounter == 3)
          {
            revFullHouse = "true";
            if (revTwoCounter == 2){
              revFullHouseValue = (3 + (2 * 2)) 
            }
            else if (revThreeCounter == 2){
              revFullHouseValue = (3 + (3 * 2)) 
            }
            else if (revFourCounter == 2){
              revFullHouseValue = (3 + (4 * 2)) 
            }
            else if (revFiveCounter == 2){
              revFullHouseValue = (3 + (5 * 2)) 
            }
            else if (revSixCounter == 2){
              revFullHouseValue = (3 + (6 * 2)) 
            }
            else if (revSevenCounter == 2){
              revFullHouseValue = (3 + (7 * 2)) 
            }
            else if (revEightCounter == 2){
              revFullHouseValue = (3 + (8 * 2)) 
            }
            else if (revNineCounter == 2){
              revFullHouseValue = (3 + (9 * 2)) 
            }
            else if (revTenCounter == 2){
              revFullHouseValue = (3 + (10 * 2)) 
            }
            else if (revJackCounter == 2){
              revFullHouseValue = (3 + (11 * 2)) 
            }
            else if (revQueenCounter == 2){
              revFullHouseValue = (3 + (12 * 2)) 
            }
            else if (revKingCounter == 2){
              revFullHouseValue = (3 + (13 * 2)) 
            }
            else if (revAceCounter == 2){
              revFullHouseValue = (3 + (14 * 2)) 
            }
          }
        else if (revTwoCounter == 3)
            {
              revFullHouse = "true";
              if (revTwoCounter == 2){
                revFullHouseValue = (6 + (1 * 2)) 
              }
              else if (revThreeCounter == 2){
                revFullHouseValue = (6 + (3 * 2)) 
              }
              else if (revFourCounter == 2){
                revFullHouseValue = (6 + (4 * 2)) 
              }
              else if (revFiveCounter == 2){
                revFullHouseValue = (6 + (5 * 2)) 
              }
              else if (revSixCounter == 2){
                revFullHouseValue = (6 + (6 * 2)) 
              }
              else if (revSevenCounter == 2){
                revFullHouseValue = (6 + (7 * 2)) 
              }
              else if (revEightCounter == 2){
                FullHouseValue = (6 + (8 * 2)) 
              }
              else if (revNineCounter == 2){
                revFullHouseValue = (6 + (9 * 2)) 
              }
              else if (revTenCounter == 2){
                fullHouseValue = (6 + (10 * 2)) 
              }
              else if (revJackCounter == 2){
                revFullHouseValue = (6 + (11 * 2)) 
              }
              else if (revQueenCounter == 2){
                revFullHouseValue = (6 + (12 * 2)) 
              }
              else if (revKingCounter == 2){
                revFullHouseValue = (6 + (13 * 2)) 
              }
              else if (revAceCounter == 2){
                revFullHouseValue = (6 + (14 * 2)) 
              }
            }
        else if (revThreeCounter == 3)
              {
                revFullHouse = "true";
                if (revTwoCounter == 2){
                  revFullHouseValue = (9 + (1 * 2)) 
                }
                else if (revOneCounter == 2){
                  revFullHouseValue = (9 + (1 * 2)) 
                }
                else if (revFourCounter == 2){
                  revFullHouseValue = (9 + (4 * 2)) 
                }
                else if (revFiveCounter == 2){
                  revFullHouseValue = (9 + (5 * 2)) 
                }
                else if (revSixCounter == 2){
                  revFullHouseValue = (9 + (6 * 2)) 
                }
                else if (revSevenCounter == 2){
                  revFullHouseValue = (9 + (7 * 2)) 
                }
                else if (revEightCounter == 2){
                  revFullHouseValue = (9 + (8 * 2)) 
                }
                else if (revNineCounter == 2){
                  revFullHouseValue = (9 + (9 * 2)) 
                }
                else if (revTenCounter == 2){
                  revFullHouseValue = (9 + (10 * 2)) 
                }
                else if (revJackCounter == 2){
                  revFullHouseValue = (9 + (11 * 2)) 
                }
                else if (revQueenCounter == 2){
                  revFullHouseValue = (9 + (12 * 2)) 
                }
                else if (revKingCounter == 2){
                  revFullHouseValue = (9 + (13 * 2)) 
                }
                else if (revAceCounter == 2){
                  revFullHouseValue = (9 + (14 * 2)) 
                }
              }
        else if (revFourCounter == 3)
                {
                  revFullHouse = "true";
                  if (revTwoCounter == 2){
                    revFullHouseValue = (12 + (1 * 2)) 
                  }
                  else if (revOneCounter == 2){
                    revFullHouseValue = (12 + (1 * 2)) 
                  }
                  else if (revThreeCounter == 2){
                    revFullHouseValue = (12 + (3 * 2)) 
                  }
                  else if (revFiveCounter == 2){
                    revFullHouseValue = (12 + (5 * 2)) 
                  }
                  else if (revSixCounter == 2){
                    revFullHouseValue = (12 + (6 * 2)) 
                  }
                  else if (revSevenCounter == 2){
                    revFullHouseValue = (12 + (7 * 2)) 
                  }
                  else if (revEightCounter == 2){
                    revFullHouseValue = (12 + (8 * 2)) 
                  }
                  else if (revNineCounter == 2){
                    revFullHouseValue = (12 + (9 * 2)) 
                  }
                  else if (revTenCounter == 2){
                    revFullHouseValue = (12 + (10 * 2)) 
                  }
                  else if (revJackCounter == 2){
                    revFullHouseValue = (12 + (11 * 2)) 
                  }
                  else if (revQueenCounter == 2){
                    revFullHouseValue = (12 + (12 * 2)) 
                  }
                  else if (revKingCounter == 2){
                    revFullHouseValue = (12 + (13 * 2)) 
                  }
                  else if (revAceCounter == 2){
                    revFullHouseValue = (12 + (14 * 2)) 
                  }
                }
        else if (revFiveCounter == 3)
                  {
                    revFullHouse = "true";
                    if (revTwoCounter == 2){
                      revFullHouseValue = (15 + (2 * 2)) 
                    }
                    else if (revThreeCounter == 2){
                      revFullHouseValue = (15 + (3 * 2)) 
                    }
                    else if (revFourCounter == 2){
                      revFullHouseValue = (15 + (4 * 2)) 
                    }
                    else if (revOneCounter == 2){
                      revFullHouseValue = (15 + (1 * 2)) 
                    }
                    else if (revSixCounter == 2){
                      revFullHouseValue = (15 + (6 * 2)) 
                    }
                    else if (revSevenCounter == 2){
                      revFullHouseValue = (15 + (7 * 2)) 
                    }
                    else if (revEightCounter == 2){
                      revFullHouseValue = (15 + (8 * 2)) 
                    }
                    else if (revNineCounter == 2){
                      revFullHouseValue = (15 + (9 * 2)) 
                    }
                    else if (revTenCounter == 2){
                      revFullHouseValue = (15 + (10 * 2)) 
                    }
                    else if (revJackCounter == 2){
                      fullHouseValue = (15 + (11 * 2)) 
                    }
                    else if (revQueenCounter == 2){
                      revFullHouseValue = (15 + (12 * 2)) 
                    }
                    else if (revKingCounter == 2){
                      revFullHouseValue = (15 + (13 * 2)) 
                    }
                    else if (revAceCounter == 2){
                      revFullHouseValue = (15 + (14 * 2)) 
                    }
                  }
        else if (revSixCounter == 3)
                    {
                      revFullHouse = "true";
                      if (revTwoCounter == 2){
                        revFullHouseValue = (18 + (2 * 2)) 
                      }
                      else if (revThreeCounter == 2){
                        revFullHouseValue = (18 + (3 * 2)) 
                      }
                      else if (revFourCounter == 2){
                        revFullHouseValue = (18 + (4 * 2)) 
                      }
                      else if (revFiveCounter == 2){
                        revFullHouseValue = (18 + (5 * 2)) 
                      }
                      else if (revOneCounter == 2){
                        revFullHouseValue = (18 + (1 * 2)) 
                      }
                      else if (revSevenCounter == 2){
                        revFullHouseValue = (18 + (7 * 2)) 
                      }
                      else if (revEightCounter == 2){
                        revFullHouseValue = (18 + (8 * 2)) 
                      }
                      else if (revNineCounter == 2){
                        revFullHouseValue = (18 + (9 * 2)) 
                      }
                      else if (revTenCounter == 2){
                        revFullHouseValue = (18 + (10 * 2)) 
                      }
                      else if (revJackCounter == 2){
                        revFullHouseValue = (18 + (11 * 2)) 
                      }
                      else if (revQueenCounter == 2){
                        revFullHouseValue = (18 + (12 * 2)) 
                      }
                      else if (revKingCounter == 2){
                        revFullHouseValue = (18 + (13 * 2)) 
                      }
                      else if (revAceCounter == 2){
                        revFullHouseValue = (18 + (14 * 2)) 
                      }
                    }
        else if (revSevenCounter == 3)
                      {
                        revFullHouse = "true";
                        if (revTwoCounter == 2){
                          revFullHouseValue = (21 + (2 * 2)) 
                        }
                        else if (revThreeCounter == 2){
                          revFullHouseValue = (21 + (3 * 2)) 
                        }
                        else if (revFourCounter == 2){
                          revFullHouseValue = (21 + (4 * 2)) 
                        }
                        else if (revFiveCounter == 2){
                          revFullHouseValue = (21 + (5 * 2)) 
                        }
                        else if (revSixCounter == 2){
                          revFullHouseValue = (21 + (6 * 2)) 
                        }
                        else if (revOneCounter == 2){
                          revFullHouseValue = (21 + (1 * 2)) 
                        }
                        else if (revEightCounter == 2){
                          revFullHouseValue = (21 + (8 * 2)) 
                        }
                        else if (revNineCounter == 2){
                          revFullHouseValue = (21 + (9 * 2)) 
                        }
                        else if (revTenCounter == 2){
                          revFullHouseValue = (21 + (10 * 2)) 
                        }
                        else if (revJackCounter == 2){
                          revFullHouseValue = (21 + (11 * 2)) 
                        }
                        else if (revQueenCounter == 2){
                          revFullHouseValue = (21 + (12 * 2)) 
                        }
                        else if (revKingCounter == 2){
                          revFullHouseValue = (21 + (13 * 2)) 
                        }
                        else if (revAceCounter == 2){
                          revFullHouseValue = (21 + (14 * 2)) 
                        }
                      }
        else if (revEightCounter == 3)
                        {
                          revFullHouse = "true";
                          if (revTwoCounter == 2){
                            revFullHouseValue = (24 + (2 * 2)) 
                          }
                          else if (revThreeCounter == 2){
                            revFullHouseValue = (24 + (3 * 2)) 
                          }
                          else if (revFourCounter == 2){
                            revFullHouseValue = (24 + (4 * 2)) 
                          }
                          else if (revFiveCounter == 2){
                            revFullHouseValue = (24 + (5 * 2)) 
                          }
                          else if (revSixCounter == 2){
                            revFullHouseValue = (24 + (6 * 2)) 
                          }
                          else if (revSevenCounter == 2){
                            revFullHouseValue = (24 + (7 * 2)) 
                          }
                          else if (revOneCounter == 2){
                            revFullHouseValue = (24 + (1 * 2)) 
                          }
                          else if (revNineCounter == 2){
                            revFullHouseValue = (24 + (9 * 2)) 
                          }
                          else if (revTenCounter == 2){
                            revFullHouseValue = (24 + (10 * 2)) 
                          }
                          else if (revJackCounter == 2){
                            revFullHouseValue = (24 + (11 * 2)) 
                          }
                          else if (revQueenCounter == 2){
                            revFullHouseValue = (24 + (12 * 2)) 
                          }
                          else if (revKingCounter == 2){
                            revFullHouseValue = (24 + (13 * 2)) 
                          }
                          else if (revAceCounter == 2){
                            revFullHouseValue = (24 + (14 * 2)) 
                          }
                        }
        else if (revNineCounter == 3)
                          {
                            revFullHouse = "true";
                            if (revTwoCounter == 2){
                              revFullHouseValue = (27 + (2 * 2)) 
                            }
                            else if (revThreeCounter == 2){
                              revFullHouseValue = (27 + (3 * 2)) 
                            }
                            else if (revFourCounter == 2){
                              revFullHouseValue = (27 + (4 * 2)) 
                            }
                            else if (revFiveCounter == 2){
                              revFullHouseValue = (27 + (5 * 2)) 
                            }
                            else if (revSixCounter == 2){
                              revFullHouseValue = (27 + (6 * 2)) 
                            }
                            else if (revSevenCounter == 2){
                              revFullHouseValue = (27 + (7 * 2)) 
                            }
                            else if (revEightCounter == 2){
                              revFullHouseValue = (27 + (8 * 2)) 
                            }
                            else if (revOneCounter == 2){
                              revFullHouseValue = (27 + (1 * 2)) 
                            }
                            else if (revTenCounter == 2){
                              revFullHouseValue = (27 + (10 * 2)) 
                            }
                            else if (revJackCounter == 2){
                              revFullHouseValue = (27 + (11 * 2)) 
                            }
                            else if (revQueenCounter == 2){
                              revFullHouseValue = (27 + (12 * 2)) 
                            }
                            else if (revKingCounter == 2){
                              revFullHouseValue = (27 + (13 * 2)) 
                            }
                            else if (revAceCounter == 2){
                              revFullHouseValue = (27 + (14 * 2)) 
                            }
                          }
        else if (revTenCounter == 3)
                            {
                              revFullHouse = "true";
                              if (revTwoCounter == 2){
                                revFullHouseValue = (30 + (2 * 2)) 
                              }
                              else if (revThreeCounter == 2){
                                revFullHouseValue = (30 + (3 * 2)) 
                              }
                              else if (revFourCounter == 2){
                                revFullHouseValue = (30 + (4 * 2)) 
                              }
                              else if (revFiveCounter == 2){
                                revFullHouseValue = (30 + (5 * 2)) 
                              }
                              else if (revSixCounter == 2){
                                rexFullHouseValue = (30 + (6 * 2)) 
                              }
                              else if (revSevenCounter == 2){
                                recFullHouseValue = (30 + (7 * 2)) 
                              }
                              else if (revEightCounter == 2){
                                revFullHouseValue = (30 + (8 * 2)) 
                              }
                              else if (revNineCounter == 2){
                                revFullHouseValue = (30 + (9 * 2)) 
                              }
                              else if (revOneCounter == 2){
                                revFullHouseValue = (30 + (1 * 2)) 
                              }
                              else if (revJackCounter == 2){
                                revFullHouseValue = (30 + (11 * 2)) 
                              }
                              else if (revQueenCounter == 2){
                                revFullHouseValue = (30 + (12 * 2)) 
                              }
                              else if (revKingCounter == 2){
                                revFullHouseValue = (30 + (13 * 2)) 
                              }
                              else if (revAceCounter == 2){
                                revFullHouseValue = (30 + (14 * 2)) 
                              }
                            }
        else if (revJackCounter == 3)
                              {
                                revFullHouse = "true";
                                if (revTwoCounter == 2){
                                  revFullHouseValue = (33 + (2 * 2)) 
                                }
                                else if (revThreeCounter == 2){
                                  revFullHouseValue = (33 + (3 * 2)) 
                                }
                                else if (revFourCounter == 2){
                                  revFullHouseValue = (33 + (4 * 2)) 
                                }
                                else if (revFiveCounter == 2){
                                  revFullHouseValue = (33 + (5 * 2)) 
                                }
                                else if (revSixCounter == 2){
                                  revFullHouseValue = (33 + (6 * 2)) 
                                }
                                else if (revSevenCounter == 2){
                                  revFullHouseValue = (33 + (7 * 2)) 
                                }
                                else if (revEightCounter == 2){
                                  revFullHouseValue = (33 + (8 * 2)) 
                                }
                                else if (revNineCounter == 2){
                                  revFullHouseValue = (33 + (9 * 2)) 
                                }
                                else if (revTenCounter == 2){
                                  revFullHouseValue = (33 + (10 * 2)) 
                                }
                                else if (revOneCounter == 2){
                                  revFullHouseValue = (33 + (1 * 2)) 
                                }
                                else if (revQueenCounter == 2){
                                  revFullHouseValue = (33 + (12 * 2)) 
                                }
                                else if (revKingCounter == 2){
                                  revFullHouseValue = (33 + (13 * 2)) 
                                }
                                else if (revAceCounter == 2){
                                  revFullHouseValue = (33 + (14 * 2)) 
                                } 
                              }
        else if (revQueenCounter == 3)
                                {
                                  revFullHouse = "true";
                                  if (revTwoCounter == 2){
                                    revFullHouseValue = (36 + (2 * 2)) 
                                  }
                                  else if (revThreeCounter == 2){
                                    revFullHouseValue = (36 + (3 * 2)) 
                                  }
                                  else if (revFourCounter == 2){
                                    revFullHouseValue = (36 + (4 * 2)) 
                                  }
                                  else if (revFiveCounter == 2){
                                    revFullHouseValue = (36 + (5 * 2)) 
                                  }
                                  else if (revSixCounter == 2){
                                    revFullHouseValue = (36 + (6 * 2)) 
                                  }
                                  else if (revSevenCounter == 2){
                                    revFullHouseValue = (36 + (7 * 2)) 
                                  }
                                  else if (revEightCounter == 2){
                                    revFullHouseValue = (36 + (8 * 2)) 
                                  }
                                  else if (revNineCounter == 2){
                                    revFullHouseValue = (36 + (9 * 2)) 
                                  }
                                  else if (tenCounter == 2){
                                    revFullHouseValue = (36 + (10 * 2)) 
                                  }
                                  else if (revJackCounter == 2){
                                    revFullHouseValue = (36 + (11 * 2)) 
                                  }
                                  else if (revOneCounter == 2){
                                    revFullHouseValue = (36 + (1 * 2)) 
                                  }
                                  else if (revKingCounter == 2){
                                    revFullHouseValue = (36 + (13 * 2)) 
                                  }
                                  else if (revAceCounter == 2){
                                    revFullHouseValue = (36 + (14 * 2)) 
                                  }
                                }
        else if (revKingCounter == 3)
                                  {
                                    
                                    if (revTwoCounter == 2){
                                      revFullHouseValue = (39 + (2 * 2)) 
                                    }
                                    else if (revThreeCounter == 2){
                                      revFullHouseValue = (39 + (3 * 2)) 
                                    }
                                    else if (revFourCounter == 2){
                                      revFullHouseValue = (39 + (4 * 2)) 
                                    }
                                    else if (revFiveCounter == 2){
                                      revFullHouseValue = (39 + (5 * 2)) 
                                    }
                                    else if (revSixCounter == 2){
                                      revFullHouseValue = (39 + (6 * 2)) 
                                    }
                                    else if (revSevenCounter == 2){
                                      revFullHouseValue = (39 + (7 * 2)) 
                                    }
                                    else if (revEightCounter == 2){
                                      revFullHouseValue = (39 + (8 * 2)) 
                                    }
                                    else if (revNineCounter == 2){
                                      revFullHouseValue = (39 + (9 * 2)) 
                                    }
                                    else if (revTenCounter == 2){
                                      revFullHouseValue = (39 + (10 * 2)) 
                                    }
                                    else if (revJackCounter == 2){
                                      revFullHouseValue = (39 + (11 * 2)) 
                                    }
                                    else if (revQueenCounter == 2){
                                      revFullHouseValue = (39 + (12 * 2)) 
                                    }
                                    else if (revOneCounter == 2){
                                      revFullHouseValue = (39 + (1 * 2)) 
                                    }
                                    else if (revAceCounter == 2){
                                      revFullHouseValue = (39 + (14 * 2)) 
                                    }
                                  }
        else if (revAceCounter == 3)
                                    {
                                      revFullHouse = "true";
                                      if (revTwoCounter == 2){
                                        revFullHouseValue = (42 + (2 * 2)) 
                                      }
                                      else if (revThreeCounter == 2){
                                        revFullHouseValue = (42 + (3 * 2)) 
                                      }
                                      else if (revFourCounter == 2){
                                        revFullHouseValue = (42 + (4 * 2)) 
                                      }
                                      else if (revFiveCounter == 2){
                                        revFullHouseValue = (42 + (5 * 2)) 
                                      }
                                      else if (revSixCounter == 2){
                                        revFullHouseValue = (42 + (6 * 2)) 
                                      }
                                      else if (revSevenCounter == 2){
                                        revFullHouseValue = (42 + (7 * 2)) 
                                      }
                                      else if (revEightCounter == 2){
                                        revFullHouseValue = (42 + (8 * 2)) 
                                      }
                                      else if (revNineCounter == 2){
                                        revFullHouseValue = (42 + (9 * 2)) 
                                      }
                                      else if (revTenCounter == 2){
                                        revFullHouseValue = (42 + (10 * 2)) 
                                      }
                                      else if (revJackCounter == 2){
                                        revFullHouseValue = (42 + (11 * 2)) 
                                      }
                                      else if (revQueenCounter == 2){
                                        revFullHouseValue = (42 + (12 * 2)) 
                                      }
                                      else if (revKingCounter == 2){
                                        revFullHouseValue = (42 + (13 * 2)) 
                                      }
                                      else if (revOneCounter == 2){
                                        revFullHouseValue = (42 + (1 * 2)) 
                                      }
                                    }
        }
        else if (((revOneCounter == 3) || (revTwoCounter == 3) || (revThreeCounter == 3) || (revFourCounter == 3) || (revFiveCounter == 3) || (revSixCounter == 3) || (revSevenCounter == 3) || (revEightCounter == 3) || (revNineCounter == 3) || (revTenCounter == 3) || revJjackCounter == 3) || (revQueenCounter == 3) || (revKingCounter == 3) || (revAceCounter == 3)) {
          revThreeOfAKind = "true"
          if (revOneCounter == 3) {
            revThreeOfAKindValue = 1;
          }
          else if (revTwoCounter == 3) {
            revThreeOfAKindValue = 2;
          }
          else if (revThreeCounter == 3) {
            revThreeOfAKindValue = 3;
          }
          else if (revFourCounter == 3) {
            revThreeOfAKindValue = 2;
          }
          else if (revFiveCounter == 3) {
            revThreeOfAKindValue = 5;
          }
          else if (revSixCounter == 3) {
            revThreeOfAKindValue = 6;
          }
          else if (revSevenCounter == 3) {
            revThreeOfAKindValue = 7;
          }
          else if (revEightCounter == 3) {
            revThreeOfAKindValue = 8;
          }
          else if (revNineCounter == 3) {
            revThreeOfAKindValue = 9;
          }
          else if (revTenCounter == 3) {
            revThreeOfAKindValue = 10;
          }
          else if (revJackCounter == 3) {
            revThreeOfAKindValue = 11;
          }
          else if (revQueenCounter == 3) {
            revThreeOfAKindValue = 12;
          }
          else if (revKingCounter == 3) {
            revThreeOfAKindValue = 13;
          }
          else if (revAceCounter == 3) {
            revThreeOfAKindValue = 14;
          }

      }

    }
    else if((revTwoCounter == 2) || (revThreeCounter == 2) || (revFourCounter == 2) || (revFiveCounter == 2) || (revSixCounter == 2) || (revSevenCounter == 2) || (revEightCounter == 2) || (revNineCounter == 2) || (revTenCounter == 2) || (revJackCounter == 2) || (revQueenCounter == 2) || (revKingCounter == 2) || (revAceCounter == 2)){
      revOnePair = "true";
      if (revTwoCounter == 2) {
        revOnePairValue = 2;
      }
      else if (revThreeCounter == 2) {
        revOnePairValue = 3;
      }
      else if (revFourCounter == 2) {
        revOnePairValue = 4;
      }
      else if (revFiveCounter == 2) {
        revOnePairValue = 5;
      }
      else if (revSixCounter == 2) {
        revOnePairValue = 6;
      }
      else if (revSevenCounter == 2) {
        revOnePairValue = 7;
      }
      else if (revEightCounter == 2) {
        revOnePairValue = 8;
      }
      else if (revNineCounter == 2) {
        revOnePairValue = 9;
      }
      else if (revTenCounter == 2) {
        revOnePairValue = 10;
      }
      else if (revJackCounter == 2) {
        revOnePairValue = 11;
      }
      else if (revQueenCounter == 2) {
        revOnePairValue = 12;
      }
      else if (revKingCounter == 2) {
        revOnePairValue = 13;
      }
      else if (revAceCounter == 2) {
        revOnePairValue = 14;
      }
    }
    else if (revAceCounter = 1) {
      revHighCardValue = 14;
    } 
    else if (revKingCounter = 1) {
      revHighCardValue = 13;
    } 
    else if (revQueenCounter = 1) {
      revHighCardValue = 12;
    } 
    else if (revJackCounter = 1) {
      revHighCardValue = 11;
    } 
    else if (revTenCounter = 1) {
      revHighCardValue = 10;
    } 
    else if (revNineCounter = 1) {
      revHighCardValue = 9;
    } 
    else if (revEightCounter = 1) {
      revHighCardValue = 8;
    } 
    else if (revSevenCounter = 1) {
      revHighCardValue = 7;
    } 
    else if (revSixCounter = 1) {
      revHighCardValue = 6;
    } 
    else if (revFiveCounter = 1) {
      revHighCardValue = 5;
    } 
    else if (revFourCounter = 1) {
      revHighCardValue = 4;
    } 
    else if (revThreeCounter = 1) {
      revHighCardValue = 3;
    } 
    else if (revTwoCounter = 1) {
      revHighCardValue = 2;
    } 
    }
    if (revHasDrawn != "true") {
      revDealCards()
    }
    else if (revHasDrawn = "true")
    {
      
    }
  }
  
  function winnerDecision() {
    if (royalFlush = "true")
    {
      if (revRoyalFlush = "true")
      {
        winner = "Tie"
      }
      else {
        winner = "Player"
      }
    }
    else if (revRoyalFlush = "true") {
      winner = "Rev"
    }
    else if (straightFlush = "true")
    {
      if 
    }
  }


  function middleTableCardDeal(){
    if (middleTableCardCounter == 0)
    {
      while (middleTableCardOneDealt != "true") {
        let x = Math.floor(Math.random() * 14)
        let y = Math.floor(Math.random() * 4)
      
        let card = cards[x];
        let suit = suits[y];
      
        let middleTableCardOne = suit + card;
        console.log(middleTableCardOne); 
        if (!(alreadyTaken.includes(middleTableCardOne)))
          {
            alreadyTaken.push(middleTableCardOne);
            document.getElementById("middleTableCardOneDiv").innerHTML = middleTableCardOne;
            counterFunction(card, suit);
            revCounterFunction(card, suit);
            middleTableCardOneDealt = "true"
            
          } 
      }
      while (middleTableCardTwoDealt != "true") {
        let x = Math.floor(Math.random() * 14)
        let y = Math.floor(Math.random() * 4)
      
        let card = cards[x];
        let suit = suits[y];
      
        let middleTableCardTwo = suit + card;
        console.log(middleTableCardTwo); 
        if (!(alreadyTaken.includes(middleTableCardTwo)))
          {
            alreadyTaken.push(middleTableCardTwo);
            counterFunction(card, suit);
            revCounterFunction(card, suit);
            document.getElementById("middleTableCardTwoDiv").innerHTML = middleTableCardTwo;
            playerCardTwoDealt = "true"
            
            
          } 
      }
      while (middleTableCardThreeDealt != "true") {
        let x = Math.floor(Math.random() * 14)
        let y = Math.floor(Math.random() * 4)
        
        let card = cards[x];
        let suit = suits[y];
        
        let middleTableCardThree = suit + card;
        console.log(middleTableCardThree); 
        if (!(alreadyTaken.includes(middleTableCardThree)))
          {
            alreadyTaken.push(middleTableCardThree);
            counterFunction(card, suit);
            revCounterFunction(card, suit);
            document.getElementById("middleTableCardThreeDiv").innerHTML = middleTableCardThree;
            playerCardThreeDealt = "true"
          } 
      }
      comboChecker();
    } 
  }
  /*
    else if (middleTableCardCounter == 1)
      {
        while (middleTableCardTwoDealt != "true") {
          let x = Math.floor(Math.random() * 14)
          let y = Math.floor(Math.random() * 4)
        
          let card = cards[x];
          let suit = suits[y];
        
          let middleTableCardTwo = suit + card;
          console.log(middleTableCardTwo); 
          if (!(alreadyTaken.includes(middleTableCardTwo)))
            {
              alreadyTaken.push(middleTableCardTwo);
              playerCardTwoDealt = "true"
              document.getElementById("middleTableCardTwoDiv").innerHTML = middleTableCardTwo;
              middleTableCardTwoArray = middleTableCardTwo.split(" ")
              checkForStraightsArray.push(middleTableCardTwoArray[1]);
              if (playerCardOneArray[0] == middleTableCardTwoArray[0])
                {
                  flushCounter = flushCounter + 1
                }
            } 
        }
      }
    else if (middleTableCardCounter == 2)
      {
        while (middleTableCardThreeDealt != "true") {
          let x = Math.floor(Math.random() * 14)
          let y = Math.floor(Math.random() * 4)
          
          let card = cards[x];
          let suit = suits[y];
          
          let middleTableCardThree = suit + card;
          console.log(middleTableCardThree); 
          if (!(alreadyTaken.includes(middleTableCardThree)))
            {
              alreadyTaken.push(middleTableCardThree);
              playerCardThreeDealt = "true"
              document.getElementById("middleTableCardThreeDiv").innerHTML = middleTableCardThree;
              middleTableCardThreeArray = middleTableCardThree.split(" ")
              checkForStraightsArray.push(middleTableCardThreeArray[1]);
              checkForStraightsArray = checkForStraightsArray.sort(function(a, b){return b-a})
              if (playerCardOneArray[0] == middleTableCardThreeArray[0])
                {
                  flushCounter = flushCounter + 1
                }
            } 
        }
      }
      
        
      console.log(alreadyTaken);
      

  } */
/*
  function diningDollarBets() {

  }
*/

