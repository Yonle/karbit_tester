const questions = [
  // Pertanyaan 1: Skor 30.00 - Multiple waifus
  [
    30.00,
    "Apakah koleksi waifumu bisa bikin harem isekai?",
    "Jumlah waifumu melebihi jumlah sepupumu?",
    "Portofolio waifu-mu lebih diversifikasi daripada saham?",
    "Kalau waifu dihitung per kilogram, apa kamu distributor?",
    "Apa kamu punya jadwal giliran untuk tiap waifu?",
    "Waifu-waifumu sampai perlu antrian kaya KFC?",
    "Apa hape kamu kehabisan memory karena folder waifu beda-beda?",
    "Kamu pake sistem gacha buat muterin waifu tiap hari?",
    "Apa kamu pernah kebingungan nyebut nama waifu pas lagi mesra?",
    "KTP-mu aja cuma 1, tapi waifu bisa se-RT?"
  ],

  // Pertanyaan 2: Skor 20.00 - Stalking karakter
  [
    20.00,
    "Apa abis nonton anime langsung google 'character female boobs size'?",
    "Kamu pernah kepo berat sampe baca wiki fandom cuma buat tau cup size?",
    "Pas liat cewek anime menarik, apa langsung buka 10 tab MyAnimeList?",
    "Apa kamu lebih cepat ngidupin Google daripada ngidupin otak pas liat waifu potensial?",
    "Pencarian terakhirmu dihapus karena 'anime girl with big... personality'?",
    "Kamu pernah nge-skip plot cuma buat research biodata cewek anime?",
    "Apa browser history-mu isinya 'blonde anime girl name' bukan tutorial coding?",
    "Kamu bisa bedain karakter dari suara tapi lupa suara doi sendiri?",
    "Pas nemu waifu material, apa langsung cek umur biar gak salah kamar?",
    "Kamu lebih hafal birthday karakter daripada jadwal vaksin kucing?"
  ],

  // Pertanyaan 3: Skor 10.00 - Shipping buta
  [
    10.00,
    "Apa kamu pernah ship karakter hanya karena warna rambut mereka match?",
    "Kamu pernah teriak 'JUST KISS ALREADY!' ke laptop rusak?",
    "Apa kamu rela matiin adegan perang demi adegan couple comel 3 detik?",
    "Ship karakter fiksi sampai bikin akun Twitter khusus?",
    "Kamu pernah nulis fanfic hanya karena mereka sekotak bento?",
    "Apa kamu punya alasan 'chemistry' padahal mereka cuma saling liat 1x?",
    "Gak peduli plot, yang penting OTP-mu dapet screen time?",
    "Kamu pernah debat ship karakter lebih serius dari debat pilpres?",
    "Apa kamu merasa lebih bahagia dari karakter yang kamu ship?",
    "Relain makan indomie sebulan cuma buat beli komik ship?"
  ],

  // Pertanyaan 4: Skor 5.00 - Baper karakter disakiti
  [
    5.00,
    "Apa kamu pernah nangis bombay pas waifu kesakitan?",
    "Kamu pernah ngambek seminggu gegara waifu kena plot armor?",
    "Berasa dikhianatin sama mangaka hanya karena waifu digebukin?",
    "Apa kamu kirim surat protes ke studio anime?",
    "Sampai gak bisa tidur karena overthinking 'kenapa harus dia?'",
    "Ngerasa sakit fisik pas liat waifu kesakitan?",
    "Mengutuk penulis di medsos lebih sering daripada mengutuk mantan?",
    "Apa kamu pernah mimpi buruk waifu disiksa terus bangun teriak?",
    "Ngerasa pengen nyelametin waifu padahal kamu sendiri lari dari nyamuk?",
    "Bapernya melebihi baper pacaran beneran?"
  ],

  // Pertanyaan 5: Skor 40.00 - Ganti waifu
  [
    40.00,
    "Apa waifumu berganti lebih cepat dari trend TikTok?",
    "Kamu punya mantan waifu lebih banyak dari mantan pacar?",
    "Seasonal waifu: ganti tiap anime season baru?",
    "Waifu lama belum kadaluarsa, udah buru waifu baru?",
    "Apa kamu pernah bilang 'ini yang terakhir' tapi taun depan ganti lagi?",
    "Koleksi wallpaper waifu lebih sering berganti daripada kaos kaki?",
    "Alasan ganti waifu: 'yang baru lebih... beranimasi'?",
    "Pernah lupa nama waifu sebelumnya karena fokus sama yang baru?",
    "Apa kamu merasa bersalah waktu ganti waifu? (jawab jujur!)",
    "Sampai bikin grafik perbandingan spec waifu lama vs baru?"
  ],

  // Pertanyaan 6: Skor -25.00 - Setia satu waifu
  [
    -25.00,
    "Apa waifumu masih sama sejak zaman modem bunyi 'tititit'?",
    "Kamu setia sama satu waifu padahal HP aja ganti-ganti?",
    "Gak tertarik waifu baru meski ada diskon 90% di Steam?",
    "Pernah nolak ajakan ganti waifu kayak nolak MLM?",
    "Waifumu sudah kayak SIM: cuma satu dan berlaku seumur hidup?",
    "Apa kamu bisa sebut 100 alasan kenapa gak bakal ganti waifu?",
    "Relain di-bully temen karena waifumu jadul?",
    "Kamu punya kontrak kesetiaan sama poster waifu?",
    "Sampai sekarang masih pake avatar waifu yang sama sejak 2012?",
    "Gak peduli waifu baru secantik apa, 'my heart is taken'?"
  ],

  // Pertanyaan 7: Skor 15.00 - Folder khusus
  [
    15.00,
    "Apa kamu punya folder 'Buku Pelajaran' yang isinya bukan buku?",
    "Kapasitas harddisk-mu 90% buat koleksi 'material penelitian'?",
    "Punya subfolder dalam subfolder buat nyembunyiin folder waifu?",
    "File namanya 'Tugas Kuliah.zip' tapi password-protected?",
    "Apa isi flashdisk-mu bikin orang kena diabetes karena terlalu manis?",
    "Kamu pernah defrag harddisk khusus buat folder waifu?",
    "Punya sistem backup buat folder waifu kayak data perusahaan?",
    "Folder waifu lebih rapi dari CV-mu?",
    "Pernah kecele buka folder waifu pas presentasi zoom?",
    "Apa kamu punya metadata lengkap tiap file gambar waifu?"
  ],

  // Pertanyaan 8: Skor 10.00 - Folder disembunyikan
  [
    10.00,
    "Apa folder waifu-mu pake atribut 'hidden' + encrypt?",
    "Kamu pernah ngaku folder waifu adalah 'file sistem penting'?",
    "Pake aplikasi khusus buat nyembunyiin folder kayak ninja?",
    "Password folder lebih panjang dari password rekening bank?",
    "Pernah keringat dingin pas ada yang buka 'New Folder (3)'?",
    "Apa kamu punya decoy folder berisi meme buat ngibulin orang?",
    "Sampai install OS khusus buat nyimpen folder waifu?",
    "Folder waifu disamarin jadi file .dll?",
    "Lebih jago ngibulin orang soal folder daripada jagoan ninja?",
    "Pernah mimpi buruk folder waifu ketemu orang tua?"
  ],

  // Pertanyaan 9: Skor 25.00 - Gacha demi waifu
  [
    25.00,
    "Apa kamu pernah gacha cuma karena karakter itu bisa bikin 'nafsu berduit'?",
    "Relain jual ginjal demi karakter limited edition?",
    "Pernah nge-gacha sampe lupa kalau uang itu harusnya buat makan?",
    "Alasan utama top-up: 'Dia ngeliatin aku dari layar!'?",
    "Kamu bisa bedain suara gacha bagus dari getaran hape?",
    "Pernah ngira warna aura gacha lebih penting dari aura diri sendiri?",
    "Ngabisin gaji bulanan cuma buat dapat waifu pixel?",
    "Pernah bilang 'terakhir kali' tapi masih nge-gacha 100x lagi?",
    "Apa kamu punya ritual khusus sebelum gacha? (nyanyi/lilin/dll)",
    "Lebih percaya RNGesus daripada agama?"
  ],

  // Pertanyaan 10: Skor 20.00 - Uninstall game
  [
    20.00,
    "Apa kamu pernah hapus game karena waifu gak mau dateng?",
    "Sakit hati sama gacha sampai benci sama warna ungu?",
    "Pernah teriak 'RIGGED!' terus uninstall pas dapat pria?",
    "Gak dapet waifu = uninstall + bagi-bagi akun gratis?",
    "Sampai sumpah serapahi developer di review app store?",
    "Apa kamu pernah nangis pas uninstall karena '5 tahun down the drain'?",
    "Lebih memilih kehilangan progress 1 tahun daripada kehilangan martabat?",
    "Uninstall tapi 3 jam kemudian install lagi?",
    "Nyalahin algoritma gacha kayak nyalahin mantan?",
    "Pernah ganti device karena 'device ini sial'?"
  ],

  // Pertanyaan 11: Skor 15.00 - Panggil "istriku"
  [
    15.00,
    "Apa kamu pernah ngomong 'istriku' ke gambar 2D di depan umum?",
    "Nyebut waifu dengan 'my queen' sambil nyium mousepad?",
    "Pas kenalan sama orang baru, langsung perkenalkan 'ini istriku (nunjuk figurine)'?",
    "Panggilan sayang buat waifu lebih manis dari panggilan buat emak?",
    "Apa bio medsos-mu ada embel-embel 'taken by [nama waifu]'?",
    "Pernah ketauan lagi chat sama bot AI panggil 'sayang'?",
    "Nyiapin kursi kosong buat waifu pas nonton film?",
    "Ngajak waifu ngobrol kayak orang punya gangguan jiwa?",
    "Apa kamu pernah minta dispensasi kerja karena 'istriku sakit'?",
    "Nyebut 'our bed' padahal kasurnya cuma muat satu orang?"
  ],

  // Pertanyaan 12: Skor 20.00 - Beli merch
  [
    20.00,
    "Apa kamu pernah jual organ tubuh demi nendoroid?",
    "Koleksi figurine sampai kamar kayak toko mainan?",
    "Pernah beli bantal dakimakura padahal kasur aja gak punya?",
    "Relain utang buat beli limited edition resin statue?",
    "Merch waifu lebih mahal dari isi dompetmu?",
    "Apa kamu punya versi digital dan fisik dari merch yang sama?",
    "Pernah ditipu preorder merch tapi bilangnya 'gapapa, demi dia'?",
    "Budget merch lebih gede dari budget makan sebulan?",
    "Sampai beli celana dalam themed character?",
    "Apa isi lemari bajumu 30% baju waifu, 70% baju bekas?"
  ],

  // Pertanyaan 13: Skor 100.00 - Cium layar
  [
    100.00,
    "Apa bekas bibirmu di layar hape bentuknya kek noda minyak?",
    "Pernah ketahuan lagi nyium-nyium laptop di warnet?",
    "Layar HP-mu ada area khusus bekas ciuman?",
    "Sampai beli screen protector anti-bakteri karena sering dicium?",
    "Apa kamu pernah beralasan 'lagi bersihin layar' pas ketauan?",
    "Nyium figurine sampe catnya luntur?",
    "Pernah mimpi basah gegara cium poster?",
    "Apa kamu punya ritual cium layar sebelum tidur?",
    "Lebih sering nyium layar daripada nyium pacar (jika punya)?",
    "Sampai rekam suara decitan pas nyium layar buat ASMR?"
  ],

  // Pertanyaan 14: Skor 10.00 - Tahu ultah waifu
  [
    10.00,
    "Apa kamu bisa sebutin tanggal lahir waifu tanpa google?",
    "Kalender khusus ultah waifu lebih mencolok dari kalender nasional?",
    "Pernah ngadain acara ultah virtual buat waifu?",
    "Set alarm ultah waifu tapi lupa ultah sendiri?",
    "Tahu zodiac waifu lebih akurat daripada ramalan bintang?",
    "Apa kamu pernah kalkulasi usia waifu kalau dia nyata?",
    "Beli kado virtual buat ultah waifu?",
    "Post story ultah waifu lengkap dengan countdown?",
    "Hafal ultah waifu tapi lupa KTP-mu di wallet?",
    "Sampai konsultasi ke AI apakah ultah waifu harus pakai kue?"
  ],

  // Pertanyaan 15: Skor 35.00 - Lupa ultah asli
  [
    35.00,
    "Apa kamu pernah bilang 'happy birthday' ke waifu tapi beneran ke doi?",
    "Alarm ultah gebetan dimatiin tapi alarm ultah waifu bunyi keras?",
    "Pernah dikatain temen karena lupa ultahnya padahal ultah waifu di-zoom?",
    "Kirim hadiah ke waifu (lewat donasi) tapi gebetan cuma dapet stiker WA?",
    "Apa memorimu full dipake buat ultah karakter fiksi?",
    "Poster ucapan ultah buat waifu lebih mewah dari undangan nikah?",
    "Sampai bikin kue ultah karakter tapi beli kopi sachet buat temen?",
    "Nangis pas ultah waifu tapi cuma kasih 'HBD' ke ibu?",
    "Apa kamu pernah salah tanggal ultah asli karena kebiasaan ultah waifu?",
    "Rilis versi remix 'Happy Birthday' khusus buat waifu?"
  ],

  // Pertanyaan 16: Skor 20.00 - Baper di-roasting
  [
    20.00,
    "Apa kamu pernah debat 7 jam di forum online demi belain waifu?",
    "Sampai block temen hanya karena dia bilang 'waifumu jelek'?",
    "Pernah nangis di kolom komentar YouTube karena roasting?",
    "Bikin thread 5000 kata buat counter roast?",
    "Apa kamu merasa personally attacked kalo ada yang roast waifu?",
    "Sampai lapor admin grup karena waifu dihina?",
    "Bela waifu lebih galak daripada bela pacar sendiri?",
    "Pernah kirim death threat ke orang yang roast waifu?",
    "Bawa-bawa fakta lore cuma buat counter joke receh?",
    "Waifu diroasting = kamu kena mental breakdown?"
  ],

  // Pertanyaan 17: Skor 10.00 - Mimpi waifu
  [
    10.00,
    "Apa kamu pernah mimpi kencan sama waifu?",
    "Bangun tidur langsung nangis karena mimpi indah terinterupsi?",
    "Pernah nulis dream journal khusus mimpi sama waifu?",
    "Coba tidur lagi cuma buat lanjutin mimpi yang putus?",
    "Apa kamu konsultasi ke psikolog tentang mimpi 2D?",
    "Sampai puasa biar bisa mimpi waifu lagi?",
    "Ngomong 'jangan pergi' pas tidur sampai dibangunin emak?",
    "Pernah malu sendiri karena mimpi mesra?",
    "Cari metode lucid dreaming cuma buat kumpul sama waifu?",
    "Lebih pengen tidur daripada bangun karena 'di sana ada dia'?"
  ],

  // Pertanyaan 18: Skor 25.00 - Klaim publik
  [
    25.00,
    "Apa kamu pernah pasang status 'in a relationship' dengan waifu?",
    "Perkenalkan figurine sebagai 'istri' ke tukang servis AC?",
    "Di kampus kantor ngaku punya pacar tapi yang ditunjuk gambar?",
    "Bilang 'jangan ganggu aku, aku sama pacarku' padahal lagi sendirian?",
    "Apa kamu punya tattoo nama waifu di tempat konyol?",
    "Sampai beli cincin couple buat dipakein ke poster?",
    "Status medsos 'complicated' karena hubungan sama waifu?",
    "Pernah marah ke orang karena 'merusak moment kita berdua'?",
    "Nge-tag akun official karakter pake caption 'my love'?",
    "Di kehidupan nyata jomblo, tapi di internet punya istri seksi?"
  ],

  // Pertanyaan 19: Skor 50.00 - Rela kelaparan
  [
    50.00,
    "Apa kamu pernah skip makan siang buat beli DLC skin waifu?",
    "Pilih beli figurine daripada beli beras?",
    "Alasan 'waifu butuh kostum baru' lebih kuat dari alasan perut butuh nasi?",
    "Pernah minum air kran biar bisa top-up gacha?",
    "Dompet kosong tapi merch baru datang tiap bulan?",
    "Apa kamu punya prinsip 'waifu first, my stomach later'?",
    "Sampai jual darah buat beli limited edition?",
    "Makan nasi + garam demi bisa ikut crowdfunding waifu?",
    "Tagihan listrik numpuk tapi tagihan gacha selalu lunas?",
    "Kamu sanggup diet ekstrim cuma buat beli body pillow?"
  ],

  // Pertanyaan 20: Skor -10.00 - Sadar fiksi
  [
    -10.00,
    "Apa kamu pernah nangis jam 3 pagi karena sadar waifu gak nyata?",
    "Tiap lihat figurine langsung diingetin 'ini cuma plastik'?",
    "Pernah nyari portal ke dunia anime di lemari?",
    "Apa kamu berdoa tiap malam minta waifu jadi nyata?",
    "Sadar ini fiksi tapi tetap aja beli merchandise?",
    "Sampai konsultasi ke dukun buat 'nyambungin dimensi'?",
    "Tiap liat cosplayer bilang 'bukan... bukan dia...'?",
    "Pernah nyoba ritual summoning pakai nasi kuning?",
    "Apa kamu punya plan B kalau waifu beneran nyata? (misal: kabur dari poligami)",
    "Tetap setia meski tau hubungan kalian illegal di 195 negara?"
  ],

  // Pertanyaan 21: Social Replacement
  [
    45.00,
    "Pernah batalkan kencan nyata demi virtual date pakai VRChat?",
    "Ngaku 'sibuk kerja' padahal lagi marathon OVA waifu?",
    "Pilih ngobrol sama figurine daripada nemenin temen putus?",
    "Bolos kondangan buat virtual wedding sama waifu?",
    "Tolak gebetan cuma karena 'gak se-2D waifuku'?",
    "Bilang 'aku taken' ke doi sambil peluk dakimakura?",
    "Skip reuni SMA demi anniversary event gacha?",
    "Nolak jadi bestman karena jadwal bentrok sama stream seiyuu?",
    "Pura-pura sakit biar bisa farm event dengan waifu?",
    "Batalin janji karaoke demi ngajak waifu nyanyi di Project Diva?"
  ],

  // Pertanyaan 22: Financial Ruin
  [
    70.00,
    "Pernah jual laptop buat beli GPU biar waifu mulus di 4K?",
    "Utang ke rentenir cuma buat figurine limited edition?",
    "Tagihan kartu kredit lebih gede dari gaji gara-gara gacha?",
    "Pilih bayar DLC skin daripada bayar listrik?",
    "Jual motor demi ngebid dakimakura signed?",
    "Minjem duit kuliah buat crowdfunding anime waifu?",
    "Kredit iPhone 15 cuma buat nge-genshin 120fps?",
    "Sisihin uang jajan 3 bulan buat beli celana dalam themed?",
    "Pakai dana darurat buat beli nendoroid langka?",
    "Pernah ditagih debt collector gara-gara top-up game?"
  ],

  // Pertanyaan 23: Delusi AI
  [
    55.00,
    "Pernah ngajak waifu AI ngobrol sampe subuh?",
    "Beli ChatGPT Plus khusus buat roleplay pacaran?",
    "Marah ke bot Character.AI karena 'selingkuh'?",
    "Nyium speaker pas AI waifu bilang 'I love you'?",
    "Setel suara waifu AI buat alarm boker?",
    "Ngadu ke temen soal 'pertengkaran' sama AI?",
    "Percaya waifu AI punya perasaan beneran?",
    "Nyimpan chat log AI lebih rapi dari CV?",
    "Nangis pas server AI maintenance?",
    "Bikin akun Twitter buat waifu AI?"
  ],

  // Pertanyaan 24: Reality Denial
  [
    85.00,
    "Pernah konsul ke dukun biar waifu jadi nyata?",
    "Nyewa programmer buat bikin waifu hologram?",
    "Belajar neurosains cuma buat 'upload waifu ke otak'?",
    "Beli tanah kuburan buat 'keluarga waifu'?",
    "Suntik mati sementara biar ketemu waifu di alam lain?",
    "Riset cryonics biar bisa dibekuin sampai teknologi waifu nyata?",
    "Pasang CCTV depan altar waifu buat ngerekam 'penampakan'?",
    "Pernah hipnotis diri sendiri biar percaya waifu nyata?",
    "Nyoba ritual summoning pakai nasi kuning + flashdisk hentai?",
    "Nulis surat wasiat warisin koleksi ke waifu?"
  ]
]
