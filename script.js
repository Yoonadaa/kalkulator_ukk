// Deklarasi variabel
let currentInput = "";
let lastOperation = "";
let lastResult = 0;

// Fungsi untuk menampilkan angka dan operator pada layar
function display() {
  const displayText = currentInput.replace(/[*]/g, '×').replace(/[\/]/g, '÷');
  document.getElementById("box").innerText = displayText;
  document.getElementById("last_operation_history").innerText = lastOperation.replace(/[*]/g, '×').replace(/[\/]/g, '÷');
}

// Fungsi untuk menghapus satu karakter dari input
function backspace_remove() {
  currentInput = currentInput.slice(0, -1);
  display();
}

// Fungsi untuk membersihkan input
function button_clear() {
  currentInput = "";
  lastOperation = "";
  lastResult = 0;
  display();
}

// Fungsi untuk menangani angka dan operator yang ditekan
function button_number(value) {
  if (value === "=") {
    // Jika tombol sama dengan ditekan, hitung hasilnya
    calculateResult();
  } else {
    // Tambahkan angka atau operator ke input saat ini
    currentInput += value
    display();
  }
}

// Fungsi untuk menghitung hasil operasi
function calculateResult() {
  try {
    // Evaluasi ekspresi matematika
    lastResult = eval(currentInput);
    lastOperation = currentInput + "=";
    currentInput = String(lastResult);
    display();
  } catch (error) {
    // Tangkap kesalahan jika ada
    currentInput = "Error";
    display();
  }
}

// Panggil fungsi display saat halaman dimuat
window.onload = display;
