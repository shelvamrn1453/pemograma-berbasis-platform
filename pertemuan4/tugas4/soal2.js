var motoGP = [
    {
        circuit: 'Losail',
        lokasi: 'Qatar',
        winner:{
            namaDepan: 'Andrea',
            namaBelakang: 'Dovizioso',
            negara: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        lokasi: 'Argentine',
        winner:{
            namaDepan: 'Cal',
            namaBelakang: 'Crutchlow',
            negara: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        lokasi: 'Sapin',
        winner:{
            namaDepan: 'Valentino',
            namaBelakang: 'Rossi',
            negara: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        lokasi: 'Italy',
        winner:{
            namaDepan: 'Andrea',
            namaBelakang: 'Dovizioso',
            negara: 'Italy'
        }
    },
];

let hasil = {}; //membuat objek kosong dulu untuk menyimpan hasil akhir yang nanti diisi data negara2
for (let i=0; i<motoGP.length; i++){
    let negara = motoGP[i].winner.negara;//mengambil Dari tiap data, kita ambil nama negaranya.
    
    
    if (!hasil[negara]){//mencek Apakah negara itu sudah ada di hasil
        hasil[negara] = {//kalau belum ada kita buat isinya
            winningCircuits: [],//ini isinya
            totalMenang: 0
        };
    }
    hasil[negara].winningCircuits.push({
        nama: `${motoGP[i].winner.namaDepan} ${motoGP[i].winner.namaBelakang}`,// Gabungkan nama depan & belakang
        winLocation: `${motoGP[i].circuit}, ${motoGP[i].lokasi}`// Gabungkan sirkuit dan lokasi
    });

    hasil[negara].totalMenang++;// Tambah total kemenangan untuk negara tersebut
}
console.dir(hasil, { depth : null, colors : true });
//console.dir() = menampilkan objek secara mendalam (sampai ke isi dalam objeknya).
//depth: null = tampilkan semua tingkat kedalaman (tidak disingkat [Object]).
//colors: true = tampilkan warna agar lebih mudah dibaca di terminal VS Code.