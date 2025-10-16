const penjumlahan = require('./folder1/penjumlahan');
const pengurangan = require('./folder1/folder2/pengurangan');
const perkalian = require('./folder1/folder2/folder3/perkalian');
const pembagian = require('./folder1/folder2/folder3/folder4/perbagian');

console.log('\n========================================');
console.log('      KALKULATOR SEDERHANA');
console.log('========================================\n');

// Angka yang mau dihitung
const angka1 = 30;
const angka2 = 6;

console.log(`Angka pertama  : ${angka1}`);
console.log(`Angka kedua    : ${angka2}`);
console.log('----------------------------------------');

// Pakai modul penjumlahan dari folder1/folder2/
const hasilTambah = penjumlahan(angka1, angka2);
console.log(`Penjumlahan    : ${angka1} + ${angka2} = ${hasilTambah}`);

// Pakai modul pengurangan dari folder1/folder2/folder3/
const hasilKurang = pengurangan(angka1, angka2);
console.log(`Pengurangan    : ${angka1} - ${angka2} = ${hasilKurang}`);

// Pakai modul perkalian dari folder1/folder2/folder3/folder4/
const hasilKali = perkalian(angka1, angka2);
console.log(`Perkalian      : ${angka1} x ${angka2} = ${hasilKali}`);

// Pakai modul pembagian dari folder1/folder2/folder3/folder4/
const hasilBagi = pembagian(angka1, angka2);
console.log(`Pembagian      : ${angka1} / ${angka2} = ${hasilBagi}`);