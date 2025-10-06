let buah = [
    ['apel', 10000],
    ['semangka', 15000],
    ['pisang', 7000],
    ['jeruk', 12000]
];
console.log(`${buah[2][1]}`)

for(let fruits of buah){
    console.log(`nama: ${fruits[0]}, harga: ${fruits[1]}`);
}

// for (let b=0; b<buah.length; b++){
//     for(let k=0; k<buah[b].length; k++){
//         console.log(buah[b][k]);
//     }
// }