// Code your solutions in this file


function writeCards(names, ocassion) {
    let thank =[];

    for (let i = 0; i < names.length; i++) {
        thank.push(`Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`)
    };

    return thank;
};

function countDown(count) {
    let number = count;
    
    while (number >=0){
        console.log(number--);
    }
}