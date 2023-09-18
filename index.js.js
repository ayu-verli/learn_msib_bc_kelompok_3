 // Membuat Variabel
 let nama = "ayu";
 let umur = 30;
 let tinggi = 160.2;

 // Membuat Konstanta
 const PI = 3.14;
 const GRAVITASI = 9.81;

 //Membuat Aray
 let hobbies = ['berenang', 'membaca', 'mendaki'];

 // Membuat Objek
 let person = {
    name: nama,
    age: umur,
    height: tinggi
 };

 // Kondisional if-else
 if (umur >= 18) {
    console.log(`${nama} adalah dewasa.`);
} else {
    console.log(`${nama} adalah remaja.`);
}

// Switch case
let hari = 5;
switch (hari) {
    case 1:
        console.log("Minggu");
        break;
    case 2:
        console.log("Senin");
        break;
    case 3:
        console.log("Selasa");
        break;
    case 4:
        console.log("Rabu");
        break;
    case 5:
        console.log("Kamis");
        break;
    case 6:
        console.log("Jumat");
        break;
    case 7:
        console.log("sabtu");
        break;
    default:
        console.log("Hari tidak valid");
        break;
}

// Menampilkan array dan objek
console.log("Hobi: " + hobbies.join(", ")); // Output: "Hobi: berenang, membaca, mendaki"
console.log("Informasi Orang:");
console.log(`Nama: ${person.name}`);
console.log(`Umur: ${person.age}`);
console.log(`Tinggi: ${person.height}`);

//Perulangan
//Menggunakan for loop, while loop, do while loop

//For loop
//Menampilkan setiap hobi dalam array 'hobbies'
console.log("Hobi:");
for (let i = 0; i < hobbies.length; i++) {
  console.log(`- ${hobbies[i]}`);
}

//While loop
//Menampilkan dari angka 1 sampai 5
let i = 1;
console.log("While Loop:");
while (i <= 5) {
  console.log(i);
  i++;
}

// Do while loop
//Menampilkan dari angka 1 sampai 5
let j = 1;
console.log("Do-While Loop:");
do {
  console.log(j);
  j++;
} while (j <= 5);

//penggunaan fungsi
function displayAgeMessage(nama, umur) {
    if (umur >= 18) {
      console.log(`${nama} adalah dewasa.`);
    } else {
      console.log(`${nama} adalah remaja.`);
    }
  }
  
  // Memanggil fungsi
  displayAgeMessage(nama, umur);
  
