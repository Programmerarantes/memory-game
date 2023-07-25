const gridDisplay = document.querySelector("#grid")
const insertText = document.querySelector('#insert-text')
const result = document.querySelector('#result')
const reloadBtn = document.querySelector('#reload')
let cardSelect = []
let cardSelectId = []
const cardWon = []


//the array with the images objects
const imgsArray = [
    {name: 'berserk', img:'imgs/berserk.jpg',},

    {name: 'demon-slayer', img:'imgs/demonslayer.png',},
    
    {name: 'dororo', img:'imgs/dororo.png',},
    
    {name: 'fullmental-alquimist', img:'imgs/fullmetal.jpg',},
    
    {name: 'jujutsu-kaisen', img:'imgs/jujutsu.png',},
    
    {name: 'one-punch', img:'imgs/onepunch.jpg',},

    {name: 'yu-gi-oh',img:'imgs/yugi.png',},
    
    {name: 'yu-yu-hakusho', img:'imgs/yuyu.jpg',},

    {name: 'berserk', img:'imgs/berserk.jpg',},

    {name: 'demon-slayer', img:'imgs/demonslayer.png',},
    
    {name: 'dororo', img:'imgs/dororo.png',},
    
    {name: 'fullmental-alquimist', img:'imgs/fullmetal.jpg',},
    
    {name: 'jujutsu-kaisen', img:'imgs/jujutsu.png',},
    
    {name: 'one-punch', img:'imgs/onepunch.jpg',},

    {name: 'yu-gi-oh',img:'imgs/yugi.png',},
    
    {name: 'yu-yu-hakusho', img:'imgs/yuyu.jpg',}
]

//Randozime
imgsArray.sort(() => 0.5 - Math.random())

/*const randomize = () => {
    const cardData = imgsArray()
    cardData.sort(() => Math.random() - 0.5)
    console.log(cardData)
} */

//printing the imagens on html

function createBoard() {
    for(let i = 0; i < imgsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/capa.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
     
}
//
function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const cardOneId = cardSelectId[0]
    const cardTwoId = cardSelectId[1]
    console.log(cards)
    console.log("check for match!")
    if(cardOneId == cardTwoId) {
        cards[cardOneId].setAttribute('src', 'imgs/capa.png')
        cards[cardTwoId].setAttribute('src', 'imgs/capa.png')
        alert("You have clicked the same image")
    }
    else if(cardSelect[0] === cardSelect[1]) {
        alert("You found a match!")
        cards[cardOneId].setAttribute('src', 'imgs/white.png')
        cards[cardTwoId].setAttribute('src', 'imgs/white.png')
        cards[cardOneId].removeEventListener('click', flipCard)
        cards[cardTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardSelect)
    } else {
        cards[cardOneId].setAttribute('src', 'imgs/capa.png')
        cards[cardTwoId].setAttribute('src', 'imgs/capa.png')
        alert("Sorry try again")
    }
    result.textContent = cardWon.length
    cardSelect = []
    cardSelectId = []

    if(cardWon.length == imgsArray.length/2) {
        result.textContent = "Congratulations!"
    }
}


//
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardSelect.push(imgsArray[cardId].name)
    cardSelectId.push(cardId)
    if(this.src.includes('imgs/capa.png')){return null}
    this.setAttribute('src', imgsArray[cardId].img)
    console.log(imgsArray[cardId])
    if(cardSelect.length === 2) {
        setTimeout( checkMatch, 500)
 
    }

}
createBoard()

reloadBtn.addEventListener('click', () => {
    location.reload()
})