const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  function getInfoPenjualan(dataPenjualan) {
    // Validasi tipe data parameter
    if (!Array.isArray(dataPenjualan)) {
      throw new Error('Parameter harus berupa array');
    }
  
    // Inisialisasi variabel untuk menghitung total keuntungan dan total modal
    let totalKeuntungan = 0;
    let totalModal = 0;
  
    // Objek untuk menghitung total penjualan berdasarkan penulis
    const penulisBuku = {};
  
    // Objek untuk menghitung total penjualan berdasarkan produk
    const produkBuku = {};
  
    // Iterasi melalui dataPenjualan
    dataPenjualan.forEach((product) => {
      // Validasi tipe data properti totalTerjual, hargaBeli, dan hargaJual
      if (typeof product.totalTerjual !== 'number' || typeof product.hargaBeli !== 'number' || typeof product.hargaJual !== 'number' || typeof product.sisaStok !== 'number') {
        throw new Error('Properti totalTerjual, hargaBeli, dan hargaJual harus berupa angka');
      }
  
      // Menghitung total keuntungan dan total modal
      totalKeuntungan += product.totalTerjual * (product.hargaJual - product.hargaBeli);
      totalModal += (product.totalTerjual + product.sisaStok) * product.hargaBeli;
  
      // Menghitung total penjualan berdasarkan penulis
      if (!penulisBuku[product.penulis]) {
        penulisBuku[product.penulis] = product.totalTerjual;
      } else {
        penulisBuku[product.penulis] += product.totalTerjual;
      }
  
      // Menghitung total penjualan berdasarkan produk
      if (!produkBuku[product.namaProduk]) {
        produkBuku[product.namaProduk] = product.totalTerjual;
      } else {
        produkBuku[product.namaProduk] += product.totalTerjual;
      }
    });
  
    // Mencari penulis dengan penjualan tertinggi
    let penulisTerlaris = '';
    let penjualanTerlaris = 0;
    for (const penulis in penulisBuku) {
      if (penulisBuku[penulis] > penjualanTerlaris) {
        penulisTerlaris = penulis;
        penjualanTerlaris = penulisBuku[penulis];
      }
    }
  
    // Mencari produk dengan penjualan tertinggi
    let produkBukuTerlaris = '';
    let penjualanProdukTerlaris = 0;
    for (const produk in produkBuku) {
      if (produkBuku[produk] > penjualanProdukTerlaris) {
        produkBukuTerlaris = produk;
        penjualanProdukTerlaris = produkBuku[produk];
      }
    }
  
    // Menghitung persentase keuntungan
    const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);
  
    // Format uang dalam rupiah
    const formatRupiah = (angka) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(angka);
    };
  
    // Membuat object data hasil
    const dataHasil = {
      totalKeuntungan: formatRupiah(totalKeuntungan),
      totalModal: formatRupiah(totalModal),
      persentaseKeuntungan: `${persentaseKeuntungan}%`,
      produkBukuTerlaris,
      penulisTerlaris,
    };
  
    return dataHasil;
  }
  
  // Contoh penggunaan function getInfoPenjualan
  const dataInfoPenjualan = getInfoPenjualan(dataPenjualanNovel);
  console.log(dataInfoPenjualan);