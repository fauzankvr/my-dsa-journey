class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    // this.table[index] = value
    let buket = this.table[index];
    if (!buket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = buket.find((item) => item[0] == key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        buket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    // return this.table[index]
    let buket = this.table[index];
    console.log(buket);
    if (buket) {
      const sameKey = buket.find((item) => item[0] == key);
      if (sameKey) {
        return sameKey[1];
      }
    }
  }

  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let newtable = new HashTable(20);
newtable.set("name", "fauzan");
newtable.set("age", 18);
newtable.set("anme", "haris");
newtable.set("amne", "faaaris");

newtable.get("namef");

// newtable.display()
