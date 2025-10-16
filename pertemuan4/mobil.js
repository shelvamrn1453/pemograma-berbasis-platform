let mobil = {
    merk: "toyota",
    tahun: 2020,
    warna: "merah",
    posisi: "sedang berjalan",
    kondisi: function(){
        console.log(`${this.merk} tahun ${this.tahun} ${this.posisi}`);
    }
};
mobil.merk = "honda";
mobil.posisi = "berhenti";

//mengakses properti
console.log(mobil.merk);
console.log(mobil.tahun);
console.log(mobil.warna);

//memanggil method
mobil.kondisi();