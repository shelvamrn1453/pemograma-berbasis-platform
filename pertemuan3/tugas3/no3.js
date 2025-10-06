const ps  = require ("prompt-sync");
const prompt = ps();

let nomorPunggung = Number(prompt('Nomor Punggung Pemain : '));
let posisi = "";

if (nomorPunggung % 2 === 0){
    posisi = 'Target Attacker';
    if (nomorPunggung >= 50 && nomorPunggung <= 100){
        posisi += ', Berhak dipilih menjadi capten team';
    }
}else {
    posisi = 'Defender';
    if (nomorPunggung > 90){
        posisi += ', Playmaker';
    }
    if (nomorPunggung % 3 === 0 && nomorPunggung % 5 === 0){
        posisi += ', Keeper';
    }
}

console.log(`nomor punggung ${nomorPunggung}, ${posisi}`);