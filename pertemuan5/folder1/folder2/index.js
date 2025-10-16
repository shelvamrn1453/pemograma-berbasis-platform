//impor modul
const {cetakNama, Usia, dataSiswa} = require('../../siswa');
//'./'digunakan untuk memanggil file di dalam folder dan menrun di luar folder
//'../../' digunkan untuk memanggil tapi file index di dalam folder bukan di luar
//gunakan isinya
console.log(cetakNama("shelva"));
console.log("Usia:", Usia);
console.log(dataSiswa.infoSiswa());