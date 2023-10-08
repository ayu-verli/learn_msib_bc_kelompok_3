const { ethers } = require("ethers");
const assert = require('assert');

async function main() {
  const [owner, nonAdmin] = await ethers.getSigners();

  const Perpustakaan = await ethers.getContractFactory("Perpustakaan");
  const perpustakaan = await Perpustakaan.deploy();
  await perpustakaan.deployed();

  // Tambah buku (Happy Path)
  await perpustakaan.tambahBuku("Judul Buku", 2023, "Penulis", { gasLimit: 6000000 });

  // Verifikasi bahwa buku telah ditambahkan dengan benar
  const buku = await perpustakaan.getDataBuku("0x792def3d4d5c8348f3869a2050467fbb73db22b1b81f8d5d1b899c69a00a46cf");
  console.log("Info Buku:", buku);

  // Tambah buku (Sad Path - Non-admin)
  try {
    await perpustakaan.connect(nonAdmin).tambahBuku("Judul Buku 2", 2023, "Penulis 2");
    console.error("Operasi ini seharusnya gagal.");
  } catch (error) {
    // Verifikasi bahwa kesalahan yang diharapkan terjadi
    assert(error.message.includes("revert"), "Operasi seharusnya menghasilkan revert");
    console.log("Error:", error.message);
  }

  // Eksekusi fungsi lain dan pengujian sesuai kebutuhan
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
