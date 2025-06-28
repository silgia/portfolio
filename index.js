console.log("Hello from index.js")

const nama = prompt('siapa nama kamu?')
console.log('Nama kamu adalah'+ nama )

var umur = parseInt(prompt('Berapa umur kamu?'))
console.log('Umur kamu adalah'+ umur)

if (Number.isNaN(umur)) {
    alert('umur harus berupa angka!')
}
// tipe data
// `var` untuk variabel yang bisa diubah
// `let` untuk variabel yang bisa diubah, tapi lebih baik digunakan dalam blok
// `const` untuk variabel yang tidak bisa diubah

let tinggi = prompt('Berapa tinggi badan kamu?')
console.log('Tinggi badan kamu adalah'+ tinggi)

tinggi = parseInt(prompt('Berapa tinggi badan kamu sekarang?'))
console.log('Tinggi kamu sekarang adalah'+ tinggi)

// perlu konversi tipe data

console.log('tipe data nama:', typeof nama);
console.log('tipedata umur:', typeof umur);
console.log('tipe data tinggi:', typeof tinggi);