const gridDisplay = document.querySelector("#grid")


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
    
    {name: 'yu-yu-hakusho', img:'imgs/yuyu.jpg',},
]

//Randozime
imgsArray.sort(() => 0.5 - Math.random())

console.log(imgsArray)
/*const randomize = () => {
    const cardData = imgsArray()
    cardData.sort(() => Math.random() - 0.5)
    console.log(cardData)
} */

//

function createBoard() {
    for(let i = 0; i < imgsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/capa.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
    }
     
}
createBoard()
