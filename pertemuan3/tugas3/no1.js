//menggunakan sekaliagus meamnggil modul bernama "prompt-sync"
//"require()" itu untuk mengambil file atau modul lain supaya bisa dipakai disini
//"prompt=sync" itu modul tambahan di Node.js untuk buat input dari user
const ps  = require ("prompt-sync");
const prompt = ps();//menjalankan fungsi "ps()" yang diambil dari modul tadi dan hasilnya disimpan ke variabel "prompt"
//nah jadi sekarang kita bisa pakai alat bernama "prompt" dipakai buat nanya ke user

let pangkat = "";//deklasai variabel pangkat, Awalnya pangkat dikosongkan karena nanti akan diisi berdasarkan kondisi.

console.log("tes apakah anda anggota mafia?")
let nama = prompt('Nama : ');
let umur = Number(prompt('Usia : '));
let tempatTinggal = prompt('Alamat : ').toLowerCase();//"tolowercase mengubah input user jadi lowercase, supaya nanti perbandingan string tidak sensitif huruf besar/kecil."
let tabungan = Number(prompt('jumlah tabungan (dolar) : '));

if ((umur >= 40) && (tempatTinggal === 'nevada' || tempatTinggal === 'new york' || tempatTinggal === 'havana') && tabungan >= 10000000){
    pangkat = 'Don';
}else if ((umur >= 25 && umur <= 40) && (tempatTinggal === 'new jersey' || tempatTinggal === 'manhattan' || tempatTinggal === 'nevada') && tabungan >= 1000000 && tabungan <= 2000000){
    pangkat = 'Underboss';
}else if ((umur >= 18 && umur <= 24) && (tempatTinggal === 'california' || tempatTinggal === 'detroit' || tempatTinggal === 'boston') && tabungan < 1000000){
    pangkat = 'Capo';
}

if (pangkat){//Di JavaScript, string kosong "" dianggap false. Jadi if (pangkat) hanya akan true jika pangkat diisi jika inputan memenuhi kondisi2 tersebut. jika memenuhi masuk ke 'if'pertama, jika tidak ke 'else
    console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}`);
}else{
    console.log(`${nama} tidak mencurigakan`)
}