class Dosen {
    namaKampus = "Telu"
    constructor(nama) {
        console.log(`Nama Dosen ${nama}`);
        this._nama = nama;
    };

    halo() {
        document.write(`Halo nama saya ${this.nama} beraslah dari kampus ${this.namaKampus}`);
    }

    get nama() {
        let namabaru;
        namabaru = this._nama
        return namabaru;
    }

    set nama(value) {
        if (value.length < 3) {
            alert('Tolong masukkan nama ya adik adik :v');
            return;
        }
        this._nama = value;
    }
}

let dosen1 = new Dosen('zaki');
dosen1.nama = 'muhammad <br/>';
document.write(`Nama Dosen : ${dosen1.nama}`)
dosen1.halo();


// Inheritens atau pewarisan 
class Hewan {
    static habitat = 'darat';
    constructor(nama) {
        this.nama = nama;
    }
    // Menthod 
    Jalan() {
        document.write(`${this.nama} berjalan`);
    }
    static berhenti() {
        document.write('<br/> Hewan melakukan rem depan')
    }
}

class Burung extends Hewan {
    constructor(nama, warna) {
        super(nama);
        this.warna = warna;
        
    }
    Terbang() {
        document.write(`${this.nama} Terbang`);
    }
    Jalan() {
        super.Jalan();
        document.write(`<br/>`);
        document.write(`${this.nama} berwarna ${this.warna} sedang Berlari <br/>`); //Overrding constructor
        this.Terbang();

    }
}

// let elang = new Burung('Burung Elang', 'Ireng');
// elang.Jalan();
// document.write(Hewan.habitat);
// Hewan.berhenti();
document.write(Burung.habitat);
Burung.berhenti();

// private and protected
class Counter {
    #count = 0; 
    #increment() {
        return this.#count++;
    }
    getIncrement() {
        this.#increment();
    }
    getCount() {
        return this.#count;
    }
}

let counter = new Counter();
counter.getIncrement();
counter.getIncrement();
// counter.count = 1000;
document.write(`Count berisi ${counter.getCount()}`);

class kampus {
    constructor(nama, matkul) {
        this.nama = nama
        this.matkul = matkul 
    }

    Dosen(){
        document.write(`saya adalah ${this.nama} dan saya adalah dosen ${this.matkul}<br/>`)
    }
}

class donatur extends kampus{
    mahasiswa() {
        document.write(`nama saya ${this.nama} saya adalah mahasiswa tahun pertama`)
    }
}

let data1 = new kampus('zaki', 'statistika');
data1.Dosen();
let data2 = new donatur('zidan');
data2.mahasiswa();

class TraficLight {
    constructor(warna) {
        this._warna = warna || "merah"; 
        console.log(`warna lampu ${this._warna}`);
    }

    get warna() {
        return this._warna;
    }

    set warna(val) {
        if (!val) {
            console.warn("jika warna tidak diisi maka default merah");
            this._warna = "merah";
        } else {
            this._warna = val;
        }
    }
}

let color = new TraficLight(); 
color.warna = ''; 
document.write(`<br/>Warna lampu : ${color.warna}`);


class person {
    name;

    constructor(name){
        this.name = name;
    }

    introduceyourself(){
        document.write(`<br/> Nama saya ${this.name}`);
    }

}

let me = new person('Muhammad');
me.introduceyourself();

class profesor extends person{
    Dosen;

    constructor(name, matkul){
        super(name)
        this.matkul = matkul;
    }

    perkenalan(){
        console.log(`Nama saya ${this.name} saya adalah dosen matakuliah ${this.matkul}`);
        document.write(`<br/> Nama saya ${this.name} saya adalah dosen matakuliah ${this.matkul}`);

    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
        document.write(grade);

    }
}

const dika = new profesor('dika', 'statistika');
dika.perkenalan();

dika.grade("my paper");