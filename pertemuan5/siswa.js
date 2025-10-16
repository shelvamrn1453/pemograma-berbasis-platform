//fungsi
function cetakNama(nama){
    return `hai, nama saya ${nama}`;
}

//variabel
const Usia = 18;

//objek
const dataSiswa = {
    NIM: "20240040075",
    infoSiswa(){
        return "NIM : " + this.NIM;
    }
};

//ekspor semua sekaligus
module.exports = {cetakNama, Usia, dataSiswa};//ini adalah modul yang akan di eksport