let skorSiswa = [
    {
        nama : 'Andi',
        skor : 90
    },
    {
        nama :'Rudi',
        skor : 80
    },
    {
        nama : 'Dira',
        skor : 100
    }
]

let nilaiTerbesar = skorSiswa[0];
for (let i=1; i<skorSiswa.length; i++){
    if (skorSiswa[i].skor > nilaiTerbesar.skor){
        nilaiTerbesar = skorSiswa[i];
    }
}
console.log(`nilai terbesar diraih oleh ${nilaiTerbesar.nama} dengan skor ${nilaiTerbesar.skor}`)