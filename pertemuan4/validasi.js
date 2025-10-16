//data dari form
let inputMobil = {
    merk: "suzuki",
    tahun: 2022,
    warna: "biru"
};
inputMobil.merk = "";

//validasi sederhana
if(inputMobil.merk && inputMobil.tahun){
    console.log("data siap dikirim ke database:", inputMobil);
}else{
    console.log("data tidak lengkap");
}