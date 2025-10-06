const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalKalori = 0;// Variabel untuk menyimpan total kalori yang terbakar

function menu(){// Fungsi untuk menampilkan menu pilihan olahraga
    console.log('kalkulator hitung olahraga')
    console.log('1. lari');
    console.log('2. push-up');
    console.log('3. plank');
    console.log('4. selesai');
}

function pilihan(){// Fungsi utama untuk meminta pilihan user dan menghitung kalori
    menu();// Tampilkan menu ke user
    rl.question('pilihan anda : ', (nomor) =>{
    switch(nomor){//Switch digunakan untuk mengeksekusi kode sesuai pilihan user
        case '1':
            rl.question('waktu lari (menit) : ', (lari) =>{
                const wLari = +lari;
                const kalori = (60 / 5) * wLari;// Rumus kalori lari: 60 kalori per 5 menit
                totalKalori += kalori;// Menambahkan kalori lari ke totalKalori
                console.log(`selama ${wLari} menit, kalori yang terbakar sebanyak ${kalori}`);
                pilihan();//manggil lagi menu supaya user bida input pilihan olahraga lain
            });
            break;
        case '2':
            rl.question('waktu push-up (menit) : ', (pushUp) =>{
                const wPushUp = +pushUp;
                const kalori = (200 / 30) * wPushUp;// Rumus kalori push-up: 200 kalori per 30 menit
                totalKalori += kalori;
                console.log(`selama ${wPushUp} menit, kalori yang terbakar sebanyak ${kalori}`);
                pilihan();
            });
            break;
        case '3':
            rl.question('waktu plank (menit) : ', (plank) =>{
                const wPlank = +plank;
                const kalori = 5 * wPlank; // Rumus kalori plank: 5 kalori per menit
                totalKalori += kalori;
                console.log(`selama ${wPlank} menit, kalori yang terbakar sebanyak ${kalori}`);
                pilihan();
            });
            break;
        case '4':
            console.log(`kalori yang terbakat sebanyak ${totalKalori}`)
            rl.close();// Tutup readline, program berhenti
            break;
        default:// Jika input tidak sesuai pilihan 1-4
            console.log('berikan pilihan yang benar!!!')
            pilihan();
        }
    });
}

pilihan();// Memulai program dengan memanggil fungsi pilihan() kalo enggak program ga jalan