const sha256 = require('sha256');

class Block {
    constructor(index, previousHash, timestamp, data, hash, nonce) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
        this.nonce = nonce;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "0", Date.now(), "Genesis Block", "0000", 0);
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = this.calculateHash(newBlock);
        this.chain.push(newBlock);
    }

    calculateHash(block) {
        return sha256(block.index + block.previousHash + block.timestamp + JSON.stringify(block.data) + block.nonce).toString();
    }

    mineBlock(newBlockDifficulty) {
        let nonce = 0;
        while (true) {
            let hashAttempt = this.calculateHash({
                index: this.chain.length,
                previousHash: this.getLastBlock().hash,
                timestamp: Date.now(),
                data: 'New Block',
                nonce: nonce
            });

            if (hashAttempt.substr(0, newBlockDifficulty) === '0'.repeat(newBlockDifficulty)) {
                return new Block(this.chain.length, this.getLastBlock().hash, Date.now(), 'New Block', hashAttempt, nonce);
            }

            nonce++;
        }
    }

    validateChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== this.calculateHash(currentBlock)) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}

let Ayuchain = new Blockchain();
Ayuchain.addBlock(Ayuchain.mineBlock(4));
Ayuchain.addBlock(Ayuchain.mineBlock(4));

// Test the Chain
console.log(JSON.stringify(Ayuchain, null, 4));
console.log("Is the blockchain valid? " + Ayuchain.validateChain());
