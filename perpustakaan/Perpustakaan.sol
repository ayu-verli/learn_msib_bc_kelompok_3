// SPDX-License-Identifier: UNLICENSED 
// Smart Contract untuk Perpustakaan

pragma solidity ^0.8.0;

contract Perpustakaan {
    // Struktur data untuk informasi buku
    struct Buku {
        string judul;
        uint tahunDibuat;
        string penulis;
    }

    // Penyimpanan data buku berdasarkan ISBN
    mapping(string => Buku) public bukuDatabase;

    // Daftar admin
    address public admin;

    // Konstruktor untuk mengatur admin awal
    constructor() {
        admin = msg.sender; // Pengirim kontrak pertama kali adalah admin
    }

    // Modifier untuk membatasi akses hanya untuk admin
    modifier hanyaAdmin() {
        require(msg.sender == admin, "Hanya admin yang dapat mengakses");
        _;
    }

    // Fungsi untuk menambah buku baru
    function tambahBuku(string memory judul, uint tahunDibuat, string memory penulis) public hanyaAdmin {
        string memory isbn = generateUniqueISBN(judul, penulis);
        bukuDatabase[isbn] = Buku(judul, tahunDibuat, penulis);
    }

    // Fungsi untuk memperbarui informasi buku
    function perbaruiBuku(string memory isbn, string memory judul, uint tahunDibuat, string memory penulis) public hanyaAdmin {
        require(bukuDatabase[isbn].tahunDibuat != 0, "Buku tidak ditemukan");
        bukuDatabase[isbn] = Buku(judul, tahunDibuat, penulis);
    }

    // Fungsi untuk menghapus buku
    function hapusBuku(string memory isbn) public hanyaAdmin {
        delete bukuDatabase[isbn];
    }

    // Fungsi untuk mendapatkan informasi buku berdasarkan ISBN
    function getDataBuku(string memory isbn) public view returns (string memory, uint, string memory) {
        Buku memory buku = bukuDatabase[isbn];
        require(buku.tahunDibuat != 0, "Buku tidak ditemukan");
        return (buku.judul, buku.tahunDibuat, buku.penulis);
    }

    // Fungsi internal untuk menghasilkan ISBN yang unik
    function generateUniqueISBN(string memory judul, string memory penulis) internal view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(judul, penulis, block.timestamp));
        return string(abi.encodePacked("ISBN-", hash));
    }
}
