const readline = require ('readline');// Import modul readline untuk menerima input dari user via console

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});// Membuat interface readline, input dari keyboard (stdin), output ke console (stdout)

console.log("tes nilai apakah lolos, gagal, atau dipertimbangkan");
rl.question('Nilai Coding : ', (nilai1) => {
    const nilaiCo = +nilai1;// Mengubah input string menjadi number, karna readline itu pasti string nilainya
    let kategoriCo = "";// Deklarasi variabel untuk menyimpan hasil kategori coding, awalnya kosong
    rl.question('Nilai Interview : ', (nilai2) => {
        const nilaiIntv = nilai2.toUpperCase();// Mengubah input menjadi huruf besar supaya input 'a' atau 'A' sama-sama diterima
        let kategoriIntv = "";// Deklarasi variabel untuk menyimpan hasil kategori interview, awalnya kosong

        if (nilaiCo >= 80){
            kategoriCo = 'LOLOS';
        }else if (nilaiCo >= 60){
            kategoriCo = 'DIPERTIMBANGKAN';
        }else {
            kategoriCo = 'GAGAL';
        }

        if (nilaiIntv === 'A' || nilaiIntv === 'B'){
            kategoriIntv = 'LOLOS interview';
        } else{
            kategoriIntv = 'GAGAL tes interview';
        }

        if ((kategoriCo === 'LOLOS' || kategoriCo === 'DIPERTIMBANGKAN') && kategoriIntv === 'LOLOS interview'){
            console.log ('Selamat Kamu Berhasil Menjadi Calon Programmer');
        }else {
            console.log ('Maaf Kamu Belum Berhasil Menjadi Calon Prorammer')
        }

        rl.close();
    })
})