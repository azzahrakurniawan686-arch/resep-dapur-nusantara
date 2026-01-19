const recipes = [
    { 
        title: "Gudeg Yogyakarta", 
        category: "Jawa", 
        image: "gudeg yogyakarta.webp", 
        rating: 4, 
        difficulty: "Menengah", 
        time: "3 Jam", 
        description: "Nangka muda masak manis gurih khas Yogyakarta dengan warna cokelat alami dari daun jati.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "1 kg Nangka muda (gori), potong dadu",
            "1 liter Santan kental",
            "5 butir Telur rebus (kupas kulit)",
            "5 lembar Daun jati (untuk pewarna merah alami)",
            "3 lembar Daun salam",
            "3 cm Lengkuas, memarkan",
            "<br>**BUMBU HALUS:**",
            "15 butir Bawang merah",
            "10 siung Bawang putih",
            "10 butir Kemiri, sangrai",
            "1 sdm Ketumbar",
            "250 g Gula merah, sisir halus",
            "Garam secukupnya",
            "<br>**BAHAN PELENGKAP:**",
            "Sambal goreng krecek",
            "Opor ayam",
            "Areh (santan kental matang)"
        ], 
        steps: [
            "Alasi dasar panci dengan daun jati untuk memberikan warna merah alami pada gudeg.",
            "Tata nangka muda (gori), telur rebus, dan bumbu halus ke dalam panci.",
            "Tuangkan santan kental dan masukkan potongan gula merah yang cukup banyak.",
            "Masak dengan api sangat kecil dan tutup rapat panci (jangan sering diaduk agar nangka tidak hancur).",
            "Masak terus selama 3 jam atau lebih hingga santan benar-benar meresap dan mengering."
        ] 
    },
    { 
        title: "Rendang Daging Sapi", 
        category: "Sumatera", 
        image: "rendang.webp", 
        rating: 5, 
        difficulty: "Sulit", 
        time: "4-5 Jam", 
        description: "Daging sapi yang dimasak perlahan dengan santan dan rempah melimpah.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "1kg Daging sapi",
            "2.5L Santan",
            "<br>**BUMBU CEMPLUNG:**",
            "3 Batang serai",
            "3 Lembar daun jeruk",
            "1 Lembar daun kunyit",
            "<br>**BUMBU HALUS:**",
            "Bawang merah & Putih",
            "Cabai merah keriting",
            "Jahe & Lengkuas",
            "Ketumbar & Kunyit"
        ], 
        steps: [
            "Potong daging sapi searah serat agar tidak mudah hancur saat dimasak lama.",
            "Tumis bumbu halus rendang bersama serai, daun kunyit, dan daun jeruk hingga harum dan berminyak.",
            "Masukkan potongan daging, aduk rata hingga daging berubah warna dan bumbu meresap.",
            "Tuangkan santan sedikit demi sedikit sambil terus diaduk agar santan tidak pecah.",
            "Masak dengan api kecil selama 4-5 jam, aduk sesekali hingga kuah mengering dan bumbu berubah menjadi hitam berminyak."
        ] 
    },
    { 
        title: "Pempek Kapal Selam", 
        category: "Sumatera", 
        image: "pempek palembang.jpg", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "60 Menit", 
        description: "Adonan ikan tenggiri kenyal dengan isian telur utuh.", 
        ingredients: [
            "**BAHAN ADONAN:**",
            "500g Ikan tenggiri giling",
            "400g Tepung sagu",
            "250ml Air es",
            "Garam & Penyedap rasa",
            "<br>**BAHAN ISI & PELENGKAP:**",
            "Telur ayam (untuk isian)",
            "Cuko pempek",
            "Timun iris & Ebi bubuk"
        ], 
        steps: [
            "Campur ikan tenggiri giling dengan air es dan garam, aduk hingga adonan terasa lengket.",
            "Tambahkan tepung sagu sedikit demi sedikit sambil diaduk perlahan (jangan diuleni terlalu kuat agar tidak keras).",
            "Ambil adonan (sekitar 100g), bentuk seperti kantung yang cukup dalam.",
            "Pecahkan satu butir telur ke dalam kantung adonan, lalu rapatkan bagian atasnya dengan hati-hati.",
            "Rebus dalam air mendidih hingga mengapung, tiriskan, lalu goreng hingga berwarna kuning keemasan."
        ] 
    },
    { 
        title: "Soto Lamongan", 
        category: "Jawa", 
        image: "soto lamongan.webp", 
        rating: 5, 
        difficulty: "Mudah", 
        time: "45 Menit", 
        description: "Soto ayam dengan serbuk koya yang gurih.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "1 ekor Ayam kampung",
            "2 Liter air",
            "Lengkuas & Jahe (geprek)",
            "2 Batang serai",
            "<br>**BUMBU HALUS:**",
            "Bawang merah & Putih",
            "Kunyit bakar & Kemiri",
            "Ketumbar & Merica",
            "<br>**PELENGKAP:**",
            "Koya (kerupuk udang + bawang putih goreng)",
            "Soun, Kol, & Telur rebus",
            "Daun seledri & Jeruk nipis"
        ], 
        steps: [
            "Rebus ayam dalam air mendidih bersama jahe dan serai untuk membuat kaldu bening.",
            "Tumis bumbu soto kuning hingga matang sempurna, lalu masukkan ke dalam air rebusan ayam.",
            "Angkat ayam yang sudah empuk, goreng sebentar, lalu suwir-suwir dagingnya.",
            "Siapkan mangkuk berisi soun, kol, dan suwiran ayam, lalu siram dengan kuah panas.",
            "Taburkan bubuk koya di atasnya sebagai ciri khas Lamongan."
        ] 
    },
    { 
        title: "Coto Makassar", 
        category: "Sulawesi", 
        image: "coto makasar.webp", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "90 Menit", 
        description: "Sup daging kacang tanah sangrai.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Daging sapi",
            "Air cucian beras (tajin)",
            "Lengkuas & Serai",
            "<br>**BUMBU HALUS & KACANG:**",
            "200g Kacang tanah (sangrai, kupas, haluskan)",
            "Bawang putih & Bawang merah",
            "Ketumbar & Jintan",
            "Merica & Garam",
            "<br>**PELENGKAP:**",
            "Burasa atau Ketupat",
            "Daun seledri & Bawang goreng",
            "Sambal tauco & Jeruk nipis"
        ], 
        steps: [
            "Rebus daging sapi dan jeroan menggunakan air cucian beras (tajin) hingga teksturnya empuk.",
            "Tumis bumbu rempah (lengkuas, jahe, serai, ketumbar) hingga harum.",
            "Masukkan bumbu tumis dan kacang tanah yang sudah disangrai dan dihaluskan ke dalam air rebusan daging.",
            "Aduk merata hingga kuah mengental dan aroma gurih kacang keluar.",
            "Potong-potong daging, sajikan dalam mangkuk dengan siraman kuah panas dan irisan daun seledri."
        ] 
    },
    { 
        title: "Rawon Surabaya", 
        category: "Jawa", 
        image: "rawon surabaya.webp", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "90 Menit", 
        description: "Sup daging kuah hitam kluwek.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Daging sapi (tetelan/sandung lamur)",
            "2 Batang serai",
            "3 Lembar daun jeruk",
            "<br>**BUMBU HALUS:**",
            "6 buah Kluwek (ambil isinya)",
            "Bawang merah & Putih",
            "Kunyit & Jahe",
            "Ketumbar & Kemiri",
            "<br>**PELENGKAP:**",
            "Tauge pendek mentah",
            "Telur asin & Sambal terasi",
            "Kerupuk udang & Daun bawang"
        ], 
        steps: [
            "Pilih kluwek yang tidak pahit, ambil isinya, lalu rendam dengan air panas dan haluskan bersama bumbu lainnya.",
            "Tumis bumbu halus bersama daun jeruk dan serai hingga aroma kluwek yang khas keluar.",
            "Rebus daging sapi hingga empuk, lalu masukkan bumbu rawon ke dalam kaldu daging.",
            "Masak terus hingga warna kuah berubah menjadi hitam pekat dan bumbu meresap ke daging.",
            "Sajikan dengan tauge pendek mentah, telur asin, sambal terasi, dan kerupuk udang."
        ] 
    },
    { 
        title: "Sate Lilit", 
        category: "Bali", 
        image: "sate lilit.webp", 
        rating: 4, 
        difficulty: "Mudah", 
        time: "40 Menit", 
        description: "Sate ayam lilit batang serai.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Ayam cincang halus",
            "100g Kelapa parut (setengah tua)",
            "12 Batang serai (untuk tusukan)",
            "Minyak kelapa",
            "<br>**BUMBU HALUS:**",
            "Bawang merah & Putih",
            "Cabai merah keriting",
            "Kencur & Kunyit",
            "Terasi bakar & Garam"
        ], 
        steps: [
            "Campurkan ayam cincang dengan kelapa parut dan bumbu Bali (base genep).",
            "Aduk rata adonan hingga benar-benar kalis dan bisa dibentuk.",
            "Ambil segenggam kecil adonan, tempelkan pada batang serai, lalu lilitkan sambil ditekan-tekan agar menempel kuat.",
            "Panggang sate di atas bara api atau wajan datar hingga berwarna kecokelatan dan matang merata.",
            "Aroma serai akan meresap ke dalam daging saat dipanggang, memberikan rasa wangi yang unik."
        ] 
    },
    { 
        title: "Ikan Kuah Kuning", 
        category: "Papua", 
        image: "ikan kuah kuning.webp", 
        rating: 4, 
        difficulty: "Mudah", 
        time: "30 Menit", 
        description: "Ikan segar bumbu kunyit pendamping Papeda.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Ikan tongkol atau kakap",
            "1 Liter air",
            "Perasan jeruk nipis",
            "<br>**BUMBU HALUS:**",
            "Kunyit & Jahe",
            "Bawang putih & Bawang merah",
            "Kemiri & Garam",
            "<br>**BAHAN AROMATIK:**",
            "Daun kemangi",
            "Cabe rawit utuh",
            "Serai & Daun salam"
        ], 
        steps: [
            "Bersihkan ikan dan lumuri dengan air jeruk nipis agar tidak amis.",
            "Tumis bumbu kuning (kunyit, bawang putih, bawang merah) hingga harum, lalu tambahkan air secukupnya.",
            "Masukkan ikan ke dalam air bumbu setelah mendidih.",
            "Tambahkan cabe rawit utuh dan daun kemangi saat ikan hampir matang untuk aroma segar.",
            "Masak sebentar hingga ikan matang sempurna namun tidak hancur, sajikan panas bersama papeda."
        ] 
    },
    { 
        title: "Papeda", 
        category: "Papua", 
        image: "papeda.webp", 
        rating: 5, 
        difficulty: "Mudah", 
        time: "15 Menit", 
        description: "Bubur sagu kenyal khas Papua.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "250g Tepung sagu asli",
            "1 Liter air",
            "<br>**BAHAN TAMBAHAN:**",
            "1 buah Jeruk nipis",
            "Garam secukupnya"
        ], 
        steps: [
            "Larutkan tepung sagu dengan sedikit air dingin dan perasan jeruk nipis di dalam wadah tahan panas.",
            "Siapkan air yang benar-benar mendidih (100°C).",
            "Tuangkan air mendidih perlahan ke dalam larutan sagu sambil diaduk cepat searah.",
            "Aduk terus hingga warna sagu berubah dari putih menjadi bening dan teksturnya sangat kental/lengket.",
            "Gunakan sepasang sumpit untuk menggulung papeda saat akan dipindahkan ke mangkuk berisi kuah kuning."
        ] 
    },
    { 
        title: "Mie Aceh", 
        category: "Sumatera", 
        image: "mie aceh.webp", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "30 Menit", 
        description: "Mie bumbu kari pedas.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Mie kuning basah",
            "150g Daging sapi atau Udang",
            "750ml Kaldu sapi",
            "<br>**BUMBU HALUS (KARI):**",
            "Cabai merah kering",
            "Bawang merah & Putih",
            "Jintan & Ketumbar",
            "Kapulaga & Kunyit",
            "<br>**PELENGKAP:**",
            "Acar bawang merah",
            "Emping melinjo",
            "Irisan daun bawang & Kol"
        ], 
        steps: [
            "Tumis bumbu halus (cabai kering, bawang, rempah kari) hingga harum dan matang.",
            "Masukkan potongan daging atau udang, masak hingga berubah warna.",
            "Tambahkan sedikit air/kaldu, kol, dan tauge, masak hingga sayuran agak layu.",
            "Masukkan mie kuning basah, kecap manis, dan kecap asin. Aduk rata hingga bumbu meresap ke dalam mie.",
            "Sajikan mie dalam kondisi sedikit nyemek (berkuah kental) dengan acar bawang merah dan emping."
        ] 
    },
    { 
        title: "Ketupat Kandangan", 
        category: "Kalimantan", 
        image: "ketupat kandangan.webp", 
        rating: 4, 
        difficulty: "Menengah", 
        time: "60 Menit", 
        description: "Ikan gabus asap kuah santan.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "1 ekor Ikan Haruan (Gabus)",
            "Ketupat siap pakai",
            "1 Liter santan kental",
            "<br>**BUMBU HALUS:**",
            "Bawang merah & Putih",
            "Kemiri & Kunyit",
            "Kayu manis & Cengkeh",
            "Lengkuas & Jahe"
        ], 
        steps: [
            "Bakar atau asap ikan gabus hingga matang dan memiliki aroma asap yang kuat.",
            "Masak santan bersama bumbu halus (kemiri, kunyit, kayu manis) hingga mendidih.",
            "Masukkan ikan gabus asap ke dalam kuah santan, kecilkan api agar bumbu meresap.",
            "Siapkan ketupat di piring, hancurkan sedikit ketupat menggunakan tangan (ciri khas makannya).",
            "Siram ketupat dengan kuah santan dan sajikan dengan ikan gabus di atasnya."
        ] 
    },
    { 
        title: "Pallubasa", 
        category: "Sulawesi", 
        image: "pallubasa.webp", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "90 Menit", 
        description: "Daging kuah kelapa sangrai.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Daging sapi",
            "1 Liter air",
            "<br>**BUMBU & KELAPA:**",
            "100g Kelapa parut (sangrai hingga cokelat, haluskan)",
            "Bawang merah & Putih",
            "Cabai merah",
            "Ketumbar & Merica",
            "<br>**PELENGKAP:**",
            "Kuning telur ayam kampung (alas)",
            "Bawang goreng"
        ], 
        steps: [
            "Rebus daging sapi hingga empuk, potong dadu, lalu sisihkan kaldu rebusannya.",
            "Tumis bumbu rempah hingga harum, lalu masukkan ke dalam air kaldu daging.",
            "Tambahkan kelapa parut yang sudah disangrai cokelat dan dihaluskan (serundeng halus) ke dalam kuah.",
            "Masak hingga kuah mengental dan berwarna cokelat pekat.",
            "Sajikan panas dan tambahkan satu kuning telur mentah di atasnya untuk rasa yang lebih creamy (alas)."
        ] 
    },
    { 
        title: "Ayam Taliwang", 
        category: "Bali", 
        image: "ayam taliwang.webp", 
        rating: 5, 
        difficulty: "Menengah", 
        time: "60 Menit", 
        description: "Ayam bakar pedas Lombok.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "1 ekor Ayam kampung muda",
            "Minyak goreng",
            "<br>**BUMBU HALUS:**",
            "Cabai rawit & Cabai keriting",
            "Bawang merah & Putih",
            "Terasi bakar",
            "Kencur & Tomat",
            "Gula merah & Garam"
        ], 
        steps: [
            "Bakar ayam setengah matang di atas bara api, lalu tekan-tekan agar tulang ayam agak remuk (melebar).",
            "Goreng bumbu halus (cabai dan terasi banyak), lalu lumurkan ke seluruh badan ayam.",
            "Bakar kembali ayam yang sudah berbumbu hingga matang sempurna dan bumbu meresap ke dalam daging.",
            "Oleskan sisa bumbu selama proses pembakaran agar rasa pedasnya semakin kuat.",
            "Sajikan dengan plecing kangkung sebagai pendamping wajib khas Lombok/NTB."
        ] 
    },
    { 
        title: "Sate Madura", 
        category: "Jawa", 
        image: "sate madura copy.webp", 
        rating: 5, 
        difficulty: "Mudah", 
        time: "45 Menit", 
        description: "Sate ayam bumbu kacang.", 
        ingredients: [
            "**BAHAN UTAMA:**",
            "500g Dada ayam (potong dadu)",
            "Tusuk sate secukupnya",
            "Kecap manis",
            "<br>**BUMBU KACANG:**",
            "250g Kacang tanah goreng",
            "Bawang putih & Kemiri",
            "Gula merah & Garam",
            "<br>**PELENGKAP:**",
            "Lontong",
            "Irisan bawang merah & Cabai rawit",
            "Jeruk limau"
        ], 
        steps: [
            "Tusuk potongan ayam pada bilah bambu, sisipkan sedikit lemak ayam di tengahnya agar lebih gurih.",
            "Haluskan kacang tanah goreng bersama bawang putih dan kemiri, tambahkan air dan kecap manis, masak hingga berminyak.",
            "Celupkan sate mentah ke dalam sedikit bumbu kacang dan kecap sebelum dibakar.",
            "Bakar sate di atas bara api hingga matang kecokelatan sambil sesekali dibalik dan dioles kecap.",
            "Sajikan sate dengan siraman bumbu kacang melimpah, irisan bawang merah mentah, dan lontong."
        ] 
    },
    { 
        title: "Tinutuan", 
        category: "Sulawesi", 
        image: "tinutan.webp", 
        rating: 4, 
        difficulty: "Mudah", 
        time: "40 Menit", 
        description: "Bubur sayur Manado.", 
        ingredients: [
            "**BAHAN BUBUR:**",
            "200g Beras",
            "200g Labu kuning (potong dadu)",
            "1 buah Jagung manis (pipil)",
            "<br>**BAHAN SAYUR:**",
            "Bayam & Kangkung",
            "Daun gedi (jika ada)",
            "Kemangi",
            "<br>**PELENGKAP:**",
            "Ikan asin goreng",
            "Sambal roa",
            "Perkedel jagung"
        ], 
        steps: [
            "Masak beras bersama air hingga menjadi bubur yang agak lembek.",
            "Masukkan potongan labu kuning dan pipilan jagung manis, masak hingga labu melunak dan menyatu dengan bubur.",
            "Tambahkan sayuran (bayam, kangkung, daun gedi jika ada) ke dalam panci.",
            "Aduk perlahan hingga sayuran layu dan bubur berubah warna menjadi kekuningan alami dari labu.",
            "Sajikan dengan pelengkap sambal roa, ikan asin goreng, dan perkedel jagung."
        ] 
    }
];
const container = document.getElementById("recipeContainer");

function renderRecipes(data) {
    container.innerHTML = "";
    data.forEach(recipe => {
        let starHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= recipe.rating) {
                starHtml += '<span style="color: #f1c40f;">★</span>';
            } else {
                starHtml += '<span style="color: #ddd;">★</span>';
            }
        }

        const card = document.createElement("div");
        card.className = "recipe-card";
        card.onclick = () => openModal(recipe);
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" onerror="this.src='https://via.placeholder.com/300x200'">
            <div class="content">
                <h3>${recipe.title}</h3>
                <div class="stars">${starHtml}</div>
                <p><small>${recipe.category} | ⏱️ ${recipe.time}</small></p>
            </div>
        `;
        container.appendChild(card);
    });
}

function openModal(recipe) {
    const modal = document.getElementById("recipeModal");
    
    // 1. Mengisi Data Dasar
    document.getElementById("modalTitle").innerText = recipe.title;
    document.getElementById("modalImage").src = recipe.image;
    document.getElementById("modalDescription").innerText = recipe.description;
    document.getElementById("modalMeta").innerText = `⏱️ ${recipe.time} | 📊 ${recipe.difficulty} | 📍 ${recipe.category}`;

    // 2. MENGISI BAHAN-BAHAN (Gunakan kode baru ini di sini)
    const ingredientsList = document.getElementById("modalIngredients");
    ingredientsList.innerHTML = recipe.ingredients.map(i => {
        // Cek apakah ini judul kategori (BAHAN/BUMBU/PELENGKAP) atau ada baris baru <br>
        if (i.includes("<br>") || i.includes("BAHAN") || i.includes("BUMBU") || i.includes("PELENGKAP")) {
            // Jika YA: Hilangkan titik bullet dan geser ke kiri agar sejajar
            return `<li style="list-style-type: none; margin-left: -20px; margin-top: 10px;">${i}</li>`;
        }
        // Jika TIDAK: Tampilkan sebagai list biasa dengan titik bullet
        return `<li>${i}</li>`;
    }).join("");

    // 3. Mengisi Cara Memasak (Tetap pakai li agar muncul nomor otomatis dari <ol>)
    const stepsList = document.getElementById("modalSteps");
    stepsList.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");

    // 4. Menampilkan Modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById("recipeModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Kembalikan scroll halaman utama
}

function closeModal() {
    document.getElementById("recipeModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Fitur Search
document.getElementById("searchInput").addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const cat = document.getElementById("categoryFilter").value;
    const filtered = recipes.filter(r => r.title.toLowerCase().includes(val) && (cat === "all" || r.category === cat));
    renderRecipes(filtered);
});

// Fitur Filter Wilayah
document.getElementById("categoryFilter").addEventListener("change", () => {
    document.getElementById("searchInput").dispatchEvent(new Event('input'));
});

// Tutup modal jika klik di luar box
window.onclick = (e) => { if (e.target.className === "modal") closeModal(); };

// Tombol Hero
function scrollToRecipes() { document.getElementById("recipes").scrollIntoView({ behavior: "smooth" }); }

// Tampilkan semua resep saat pertama kali dibuka
window.onload = () => renderRecipes(recipes);