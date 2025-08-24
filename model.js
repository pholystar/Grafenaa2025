const anggotaData = {
    Selena: [
    "Mikhayla Pehulisa Beru Bangun", "Ralphy Christian",
    "Aisha Marsetya Ramadhani", "Fathur Zaman", "Alya’ Nafi’ah Azzahra",
    "Muhammad Farhan Ibnu Khasani", "Anisa Setiawati", "Dewi Citra Novianti",
    "Ahmad Wildan Rasya", "Indah Nur Isnaeni"
  ],
  Nebula: [
    "Khansa Felicia Smith", "Yastmine Kayla Machfuly", "Ayu Dwi Ananda",
    "Muhammad Farel Alfhareza", "Faisal Afif Nur Tamam",
    "Dhiannisa Qotrunnada Salsabila Herlani", "Kristine Angel Sitanggang",
    "Raya Jamillah", "Alija Muhammad Haryosasono"
  ],
  Batozar: [
    "Callula Zakira Permadi", "Dextra Gian Arfianto", "Najwa Alya Rahma",
    "Puti Raveena Khairunnisa", "Yasawafi Mahfuzah Surya", "Ladinda Dzihni",
    "Muhammad Fauzan Hermawan", "Ghina Rahil Muthiah",
    "Jihan Aulia Parsa Damarjati", "Putri Fadiyah Salsabila"
  ],
  Ceros: [
    "Silva Fathonah Nur Sholeha", "Kamilah Dewi Azaroh", "Annabel Kezia Liu",
    "Mochamad Syafarijal", "Zaidan Muhammad Athaala", "Nashwa Bunga Arifa",
    "Arnetta Dafina Teja", "Qyura Elsa Syafitri", "Firdaus Ramadhansyah"
  ],
  Sagaras: [
    "Auliya Sabila", "Nadhifa Syakira", "Farid Darmawan",
    "Rafli Ahmad Maulana", "Lubna Tajira Bakhita",
    "Sarrah Justine Putri Azka Rana NZ", "Hanifa Trirasyida",
    "Dio Ardiansyah Efendi", "Shafira Asty Yunita", "Reva Putri Mulyanti"
  ],
  Komet: [
    "Aisya Anindyta Wibowo", "Nadia Aulia Maritza", "Abraham Oktaviander",
    "Fildzah Alya Sifa", "La Ode Muhammad Arkan Hauzan",
    "Crisna Setia Maruli Manurung", "Farel Chandra Saputra",
    "Cantika Purnama Senjarani", "Aurellia Hasni", "Shabina Muthia Nanda"
  ]
  };

  function showAnggota(nama) {
    const list = anggotaData[nama]
      .map((anggota, index) => `<li>${index + 1}. ${anggota}</li>`)
      .join('');
    document.getElementById("anggotaModalLabel").textContent = `Anggota ${nama}`;
    document.getElementById("modalContent").innerHTML = `<ul>${list}</ul>`;
  }

const modal = document.getElementById('detailModal');
  modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const imgSrc = button.getAttribute('data-img-src');
    const modalImage = modal.querySelector('#modalImage');
    modalImage.src = imgSrc;
  });

