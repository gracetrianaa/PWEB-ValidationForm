const namaInput = document.getElementById("nama");
const nrpInput = document.getElementById("nrp");
const suggestionsDiv = document.getElementById("suggestions");
const asalKotaInput = document.getElementById("asal-kota");
const alamatInput = document.getElementById("alamat");
const databaseForm = document.getElementById("database-form");

// Daftar suggestions
const rekomendasi = {
  Gracetriana: {
    asalKota: "Surakarta",
    alamat: "Keputih Tegal Timur",
  },
  "Dian Sastro": {
    asalKota: "Jakarta",
    alamat: "BME Selatan",
  },
};

namaInput.addEventListener("input", () => {
  const inputText = namaInput.value;
  suggestionsDiv.innerHTML = "";

  if (inputText.length > 0) {
    for (const nama in rekomendasi) {
      if (nama.toLowerCase().includes(inputText.toLowerCase())) {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = nama;
        suggestionItem.addEventListener("click", () => {
          namaInput.value = nama;
          asalKotaInput.value = rekomendasi[nama].asalKota;
          alamatInput.value = rekomendasi[nama].alamat;
          suggestionsDiv.style.display = "none";
        });
        suggestionsDiv.appendChild(suggestionItem);
      }
    }
    suggestionsDiv.style.display = "block";
  } else {
    suggestionsDiv.style.display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (event.target !== namaInput && event.target !== suggestionsDiv) {
    suggestionsDiv.style.display = "none";
  }
});

databaseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Periksa apakah semua kolom telah diisi
  if (
    !namaInput.value ||
    !nrpInput.value ||
    !asalKotaInput.value ||
    !alamatInput.value
  ) {
    alert("Mohon isi semua kolom!");
  }
});
