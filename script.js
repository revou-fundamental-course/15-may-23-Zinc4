/*
Fungsi hitungLuas(), mengambil nilai sisi dari input dengan 
id "sisi", menghitung luas persegi dengan rumus sisi * sisi, 
dan menampilkan hasilnya di input dengan id "output_luas". 
Selain itu, nilai sisi juga ditampilkan di input dengan id "sisi1" dan "sisi2".*/
function hitungLuas() {
  let sisi = parseInt(document.getElementById("sisi").value);
  let hasil = sisi * sisi;
  document.getElementById("output_luas").value = hasil;
  document.getElementById("sisi1").value = sisi;
  document.getElementById("sisi2").value = sisi;
}

/*
hitungKeliling(), mengambil nilai sisi dari input dengan id "sisi-keliling-i", 
menghitung keliling persegi dengan rumus 4 * sisi, dan menampilkan hasilnya di 
input dengan id "output_keliling".*/
function hitungKeliling() {
  let sisi = parseInt(document.getElementById("sisi-keliling-i").value);
  let hasil = 4 * sisi;
  document.getElementById("output_keliling").value = hasil;
  document.getElementById("sisi-keliling").value = sisi;
}
