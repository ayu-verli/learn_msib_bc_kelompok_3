 // Membuat Variabel
 let nama = "ayu";
 let umur = 25;
 let tinggi = 160.2;

 // Membuat Konstanta
 const PI = 3.14;
 const GRAVITASI = 9.81;

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
