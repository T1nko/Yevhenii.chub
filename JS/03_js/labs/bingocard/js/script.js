const usedNums = new Array(76);
const reload = document.getElementById('reload')


function init() {
    initCards();
    reload.onclick = initCards;
}

function initCards(){
    cleanUsedNums();
    for (let i = 0; i < 24; i++) {
        getCard(i);
   }
   return false;
}

function cleanUsedNums(){
    for(let i = 0, len = usedNums.length; i <len; i++){
        usedNums[i] = undefined;
    }
}


function getCard(n) {
    const square = "square" + n;
    const colNums = [
        0,1,2,3,4,
        0,1,2,3,4,
        0,1,3,4,
        0,1,2,3,4,
        0,1,2,3,4
    ];
    
    
    let randomNum;
    do {
        randomNum = 15 * colNums[n] + generateRandom(15);
    } while(usedNums[randomNum])

    usedNums[randomNum] = true;
    document.getElementById(square).innerHTML = randomNum;


}

function generateRandom(n) {
    return  Math.floor(Math.random() * n) + 1
}

init();
