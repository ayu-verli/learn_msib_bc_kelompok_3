// SPDX-License-Identifier: UNLICENSED
//melakukan testing pada perpustakaan.sol

pragma solidity ^0.8.0;

import "./Perpustakaan.sol"; // Impor kontrak utama

contract PerpustakaanTest {
    Perpustakaan private perpustakaan; // Buat variabel untuk menyimpan instansiasi kontrak utama

    constructor() {
        perpustakaan = new Perpustakaan(); // Instansiasi kontrak utama
    }

    // Fungsi untuk menguji tambah buku
    function testTambahBuku() public {
        // Persiapkan data buku
        string memory judul = "Harry Potter";
        uint tahunDibuat = 1997;
        string memory penulis = "J.K. Rowling";

        // Panggil fungsi tambah buku dari kontrak utama
        perpustakaan.tambahBuku(judul, tahunDibuat, penulis);

        // Periksa apakah buku telah ditambahkan dengan benar
        (string memory judulHasil, uint tahunHasil, string memory penulisHasil) = perpustakaan.getDataBuku("ISBN-123456");
        assert(keccak256(abi.encodePacked(judulHasil)) == keccak256(abi.encodePacked(judul)));
        assert(tahunHasil == tahunDibuat);
        assert(keccak256(abi.encodePacked(penulisHasil)) == keccak256(abi.encodePacked(penulis)));
    }

    // Fungsi untuk menguji update buku
function testUpdateBuku() public {
    // Persiapkan data buku
    string memory judulBaru = "Harry Potter and the Chamber of Secrets";
    uint tahunDibuatBaru = 1998;
    string memory penulisBaru = "J.K. Rowling";

    // Panggil fungsi update buku dari kontrak utama
    perpustakaan.perbaruiBuku("ISBN-123456", judulBaru, tahunDibuatBaru, penulisBaru);

    // Periksa apakah buku telah diperbarui dengan benar
    (string memory judulHasil, uint tahunHasil, string memory penulisHasil) = perpustakaan.getDataBuku("ISBN-123456");
    assert(keccak256(abi.encodePacked(judulHasil)) == keccak256(abi.encodePacked(judulBaru)));
    assert(tahunHasil == tahunDibuatBaru);
    assert(keccak256(abi.encodePacked(penulisHasil)) == keccak256(abi.encodePacked(penulisBaru)));
}

// Fungsi untuk menguji hapus buku
function testHapusBuku() public {
    // Panggil fungsi hapus buku dari kontrak utama
    perpustakaan.hapusBuku("ISBN-123456");

    // Periksa apakah buku telah dihapus dengan benar
    (string memory judulHasil, uint tahunHasil, string memory penulisHasil) = perpustakaan.getDataBuku("ISBN-123456");
    assert(keccak256(abi.encodePacked(judulHasil)) == keccak256(abi.encodePacked("")));
    assert(tahunHasil == 0);
    assert(keccak256(abi.encodePacked(penulisHasil)) == keccak256(abi.encodePacked("")));
}

// Fungsi untuk menguji get data buku berdasarkan ISBN
function testGetDataBuku() public view {
    // Panggil fungsi get data buku dari kontrak utama
    (string memory judulHasil, uint tahunHasil, string memory penulisHasil) = perpustakaan.getDataBuku("ISBN-123456");

    // Periksa apakah data buku sesuai dengan yang diharapkan
    assert(keccak256(abi.encodePacked(judulHasil)) == keccak256(abi.encodePacked("Harry Potter and the Chamber of Secrets")));
    assert(tahunHasil == 1998);
    assert(keccak256(abi.encodePacked(penulisHasil)) == keccak256(abi.encodePacked("J.K. Rowling")));
}
}
