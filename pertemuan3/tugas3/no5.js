const ps = require ('prompt-sync');
const prompt = ps();

let tarif = 0;// Inisialisasi variabel tarif dengan nilai 0

console.log('hitung tarif tiket Disnet Island')
let tinggiB = Number(prompt('Tinggi Badan (cm) : '));
let umur = Number(prompt('Umur : '));

if (umur < 1){
    console.log('Dilarang Masuk');// Jika anak di bawah 1 tahun, dilarang masuk
}else if (umur < 3){//Tarif dasar untuk anak umur 1-2 tahun
    tarif = 30000;
    if(tinggiB > 70){// Jika tinggi lebih dari 70 cm, tarif bertambah 10.000
        tarif += 10000;
    }
} else if (umur < 7){// Tarif dasar untuk anak umur 3-6 tahun
    tarif = 40000;
    if(tinggiB > 120){// Jika tinggi lebih dari 120 cm, tarif bertambah 15.000
        tarif += 15000;
    }
}else if (umur < 10){// Tarif dasar untuk anak umur 7-9 tahun
    tarif = 50000;
    if(tinggiB > 150){// Jika tinggi lebih dari 150 cm, tarif bertambah 20.000

        tarif += 20000;
    }
}else{
    tarif = 80000; // Tarif untuk anak umur 10 tahun ke atas
}

console.log(`tarif anda Rp.${tarif}`);