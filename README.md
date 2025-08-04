# Training_oop-1
# OOP JavaScript - Kampus & Hewan Simulation

Ini adalah project JavaScript kecil-kecilan yang menjelaskan konsep OOP (Object-Oriented Programming) pake bahasa JavaScript. Script ini mencakup berbagai konsep dasar kayak:

- Class
- Constructor
- Inheritance (pewarisan)
- Getter & Setter
- Static property/method
- Private field
- Method overriding
- Dan beberapa interaksi DOM (kayak `document.write()` & `alert()`)

---

## Struktur Kelas

### 1. `Dosen`
Class ini mewakili dosen dari kampus tertentu.

- **Properties**:
  - `namaKampus` (default: `"Telu"`)
  - `_nama`: Nama dosennya
- **Method**:
  - `halo()`: Menampilkan sapaan dosen dan nama kampus
  - `get nama()`: Getter untuk `_nama`
  - `set nama(value)`: Setter dengan validasi minimal 3 huruf

### 2. `Hewan`
Class dasar untuk hewan.

- **Static Property**:
  - `habitat = 'darat'`
- **Methods**:
  - `Jalan()`: Menampilkan bahwa hewan sedang jalan
  - `static berhenti()`: Menampilkan bahwa hewan berhenti (static method)

### 3. `Burung` (extends `Hewan`)
Contoh pewarisan (inheritance) + override method.

- **Properties**:
  - `warna`
- **Methods**:
  - `Jalan()`: Override method `Jalan()` dari class `Hewan` + memanggil method `Terbang()`
  - `Terbang()`: Menampilkan bahwa burung terbang

### 4. `Counter`
Contoh penggunaan field **private** menggunakan `#`.

- **Private Field**:
  - `#count`
- **Private Method**:
  - `#increment()`
- **Public Methods**:
  - `getIncrement()`
  - `getCount()`

### 5. `kampus` dan `donatur`
Contoh pewarisan lain dengan tema pendidikan.

- `kampus`: Class dasar dengan properti nama dan matkul
- `donatur`: Subclass yang mewakili mahasiswa

### 6. `TraficLight`
Class untuk simulasi lampu lalu lintas.

- **Properties**:
  - `_warna`
- **Getter/Setter**:
  - Tidak lengkap. Getter/setter-nya harusnya `get warna()` dan `set warna(val)`

### 7. `person` dan `profesor`
Contoh pewarisan untuk manusia dan peran dosen.

- `person`:
  - Property: `name`
  - Method: `introduceyourself()`
- `profesor` (extends `person`):
  - Property: `matkul`
  - Method:
    - `perkenalan()`: Menampilkan info dosen
    - `grade(paper)`: Memberikan nilai acak 1-4
