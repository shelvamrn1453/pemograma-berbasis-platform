const http = require('http');// Ini memanggil modul bawaan Node.js bernama http, yang bisa bikin web server.
const port = 8000;//Server akan jalan di port 8000, jadi alamatnya nanti: http://localhost:8000
const motoGP = [// array berisi 4 objek
    {
        circuit: 'Losail',
        lokasi: 'Qatar',
        pemenang:{
            namaDepan: 'Andrea',
            namaBelakang: 'Dovizioso',
            negara: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        lokasi: 'Argentine',
        pemenang:{
            namaDepan: 'Cal',
            namaBelakang: 'Crutchlow',
            negara: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        lokasi: 'Spain',
        pemenang:{
            namaDepan: 'Valentino',
            namaBelakang: 'Rossi',
            negara: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        lokasi: 'Italy',
        pemenang:{
            namaDepan: 'Andrea',
            namaBelakang: 'Dovizioso',
            negara: 'Italy'
        }
    },
];

http.createServer((req, res)=>{//bikin server. req = request (apa yang diminta pengguna, misal: /country). res = response (apa yang akan dikirim balik ke browser)
    res.writeHead(200);// kirim header HTTP: 200 = kode sukses
    if(req.url == '/'){
        res.write('<html><body><h2>Data Balapan MotoGP</h2></body></html>');
        let allData_html = '';//buat string kosong tuk menampung teks html
        allData_html += '<ul>';//ini isinya
        for(let i=0; i<motoGP.length; i++){
            let balapan = motoGP[i];//ambil data
            allData_html += '<li>' + 'Sirkuit ' + balapan.circuit + ' berada di ' + balapan.lokasi + '. The winner : ' + balapan.pemenang.namaDepan + ' ' + balapan.pemenang.namaBelakang + ' (' + balapan.pemenang.negara + ')' + '</li>';
        }
        allData_html += '</ul>';
        res.write(allData_html);//tampilkan isi
    }
    
    else if(req.url == '/country'){
        res.write('<html><body><h2>Data motoGP Berdasarkan Negara</h2></body></html>');
        let kelNegara = {};//buat objek kosong yang isiya key(value). key: namaNegara dan value: list negara dan sirkuitnya
        for(let i=0; i<motoGP.length; i++){//ini isinya dgn loop tuk ambil data negara.
            let balapan = motoGP[i];//ambil data di array motoGP masukkan ke wadah balapan. 
            let namaNegara = balapan.pemenang.negara;//ambil data di bagian pemenang lalu ke negara di masukkan ke wadah  namaNegara.

            if(kelNegara[namaNegara] == null){//jika ada negara baru dan belum dapat wadah maka buat wadah baru
                kelNegara[namaNegara] = [];//buat array baru//
            }
            kelNegara[namaNegara].push(balapan);//isi wadahnya diisi oleh data balapan dari array
        }
        //tampilan html
        let allNegara_html = '';//buat string kosong tuk menampung teks html
        for(let namaNegara in kelNegara){//looping per negara//ambil data negara di dalam wadah kelNegara dan 'namaNegara' akan bernilai "Italy", lalu "UK", dll
            allNegara_html += '<h3>' + namaNegara + '</h3>';//ini isinya//menampilkan teks berjudul nama negaranya misal Italy dan UK
            allNegara_html += '<ul>';//mulai list

            //isi list
            let daftarNegara = kelNegara[namaNegara];//wadah yang menampung isi 'kelNegara dan namaNegara' untuk dilooping
            for(let j=0; j<daftarNegara.length; j++){//looping setiap sirkuit di dalam negara
                let balapan = daftarNegara[j];//ambil data di wadah datarNegara
                allNegara_html += '<li>Sirkuit ' + balapan.circuit + ' di ' + balapan.lokasi + '</li>';
            }
            allNegara_html += '</ul>';        
        }
        res.write(allNegara_html);
    }
    
    else if(req.url == '/name'){
        res.write('<html><body><h2>Data Pemenang MotoGP</h2></body></html>');
        let kelPemenang = {};
        for(let i=0; i<motoGP.length; i++){
            let balapan = motoGP[i];
            let namaPemenang = balapan.pemenang.namaDepan + ' ' + balapan.pemenang.namaBelakang;
            if(kelPemenang[namaPemenang] == null){
                kelPemenang[namaPemenang] = [];
            }
            kelPemenang[namaPemenang].push(balapan);
        }
        //tampilan html
        let allPemenang_html = '';
        for(let namaPemenang in kelPemenang){
            allPemenang_html += '<h3>' + namaPemenang + '</h3>';
            allPemenang_html += '<ul>';

            let daftarPemenang = kelPemenang[namaPemenang];
            for(let j=0; j<daftarPemenang.length; j++){
                let balapan = daftarPemenang[j];
                allPemenang_html += '<li>Menang di ' + balapan.circuit + ' (' + balapan.lokasi + ')';
            }
            allPemenang_html += '</ul>';
        }
        res.write(allPemenang_html);
    }   
    
    else{
        res.write('<html><body><h2>Bad Request!</h2></body></html>')
    }
    res.end();//akhiri respons, wajib dipanggil!
}).listen(port,()=>{
    console.log(`server mendengarkan di port ${port}`)
});