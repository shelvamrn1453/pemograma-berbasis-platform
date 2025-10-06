// const orang = {
//   nama: "Sinta",
//   biasa: function() {
//     console.log(this.nama); // "Sinta"
//   },
//   panah: () => {
//     console.log(this.nama); // undefined (karena arrow function tidak punya this sendiri)
//   }
// };

// orang.biasa();
// orang.panah();

// function sapa(nama) {
//   return "Halo, " + nama;
// }

// console.log(sapa("Ani")); // Halo, Ani

// const sapa = (nama) => {
//   return "Halo, " + nama;
// };

// console.log(sapa("Budi")); // Halo, Budi

const orang = {
  nama: "Ani",
  biasa: function() {
    console.log(this.nama); // Ani
  },
  panah: () => {
    console.log(this.nama); // undefined
  }
};

orang.biasa(); // Ani
orang.panah(); // undefined

function tambah(a, b) {
    return a + b;
}

const tambah = (a, b) => a + b;