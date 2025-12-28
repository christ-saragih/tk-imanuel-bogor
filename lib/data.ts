import { BlogPost, Program, Teacher, Testimonial } from "@/types";
import { Award, Music, Puzzle, Shield, Trees, Users } from "lucide-react";

// About Section Data
export const stats = [
  {
    value: "10+",
    label: "Tahun Pengalaman",
    icon: Award,
    color: "text-kid-yellow",
    bg: "bg-yellow-50",
  },
  {
    value: "150+",
    label: "Siswa Aktif",
    icon: Users,
    color: "text-kid-blue",
    bg: "bg-blue-50",
  },
  {
    value: "A",
    label: "Akreditasi Sekolah",
    icon: Shield,
    color: "text-kid-green",
    bg: "bg-green-50",
  },
];

export const values = [
  "Lingkungan belajar yang aman, nyaman, dan inklusif.",
  "Kurikulum berbasis karakter dan kreativitas.",
  "Tenaga pendidik profesional dan penuh kasih sayang.",
  "Fasilitas modern yang mendukung tumbuh kembang anak.",
];

// Program Section Data
export const programsData: Program[] = [
  {
    id: "pg",
    title: "Playgroup",
    age: "2 - 3 Tahun",
    description:
      "Fokus pada stimulasi sensorik, motorik kasar, dan sosialisasi awal dalam lingkungan yang aman.",
    icon: "baby",
    color: "bg-kid-yellow",
  },
  {
    id: "tka",
    title: "TK A",
    age: "4 - 5 Tahun",
    description:
      "Pengenalan literasi dan numerasi dasar melalui bermain, serta pengembangan kemandirian.",
    icon: "palette",
    color: "bg-kid-blue",
  },
  {
    id: "tkb",
    title: "TK B",
    age: "5 - 6 Tahun",
    description:
      "Persiapan masuk SD dengan penguatan calistung (baca tulis hitung) yang menyenangkan.",
    icon: "book",
    color: "bg-kid-red",
  },
];

export const features = [
  {
    title: "Musik & Gerak",
    icon: Music,
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    title: "Outdoor Learning",
    icon: Trees,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Logic Games",
    icon: Puzzle,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
];

// Teacher Section Data
export const teachersData: Teacher[] = [
  {
    id: "bu-rini",
    name: "Ibu Rini Hartati",
    role: "Kepala Sekolah & Konsultan Pendidikan",
    photo: "https://picsum.photos/seed/rini/400/400",
    shortBio:
      "Berpengalaman 15 tahun di dunia PAUD dengan pendekatan kasih sayang.",
    fullBio:
      "Ibu Rini mendedikasikan hidupnya untuk dunia pendidikan anak usia dini. Beliau percaya bahwa setiap anak adalah bintang yang memiliki sinarnya sendiri. Pendekatan beliau menggabungkan kedisiplinan lembut dengan kebebasan berekspresi.",
    education: "S2 Psikologi Pendidikan Anak, Universitas Indonesia",
    experience: "15 Tahun",
    funFact: "Suka sekali mendongeng dengan suara karakter yang berbeda-beda!",
    quote:
      "Mendidik pikiran tanpa mendidik hati adalah bukan pendidikan sama sekali.",
    color: "bg-kid-yellow",
  },
  {
    id: "kak-budi",
    name: "Kak Budi Santoso",
    role: "Guru Sentra Alam & Olahraga",
    photo: "https://picsum.photos/seed/budi/400/400",
    shortBio:
      "Enerjik dan kreatif, mengajak anak mencintai alam dan bergerak aktif.",
    fullBio:
      "Kak Budi adalah favorit anak-anak saat kegiatan outdoor. Dengan latar belakang pendidikan olahraga dan kecintaannya pada alam, Kak Budi mengajarkan keberanian, kerja sama tim, dan rasa ingin tahu melalui eksplorasi lingkungan.",
    education: "S1 Pendidikan Jasmani & Rekreasi",
    experience: "8 Tahun",
    funFact: "Bisa menirukan suara 10 jenis hewan dengan sangat mirip.",
    quote: "Anak yang bergerak adalah anak yang belajar.",
    color: "bg-kid-green",
  },
  {
    id: "miss-sarah",
    name: "Miss Sarah Johnson",
    role: "Guru Bahasa Inggris & Seni",
    photo: "https://picsum.photos/seed/sarahj/400/400",
    shortBio:
      "Native speaker yang mengajarkan bahasa melalui lagu dan seni lukis.",
    fullBio:
      'Miss Sarah membawa nuansa internasional ke dalam kelas. Beliau menggunakan metode "Art & Language" di mana anak-anak belajar kosakata bahasa Inggris sambil membuat karya seni yang indah. Suasana kelasnya selalu penuh warna dan nyanyian.',
    education: "Bachelor of Arts in Early Childhood Education",
    experience: "6 Tahun",
    funFact:
      "Hobi melukis wajah (face painting) saat acara ulang tahun sekolah.",
    quote: "Creativity is intelligence having fun.",
    color: "bg-kid-red",
  },
  {
    id: "bu-amel",
    name: "Ibu Amel",
    role: "Guru Sentra Balok & Matematika",
    photo: "https://picsum.photos/seed/amel/400/400",
    shortBio: "Ahli membuat logika matematika terasa seperti permainan seru.",
    fullBio:
      "Ibu Amel memiliki bakat khusus dalam mengenalkan angka dan logika kepada anak usia dini tanpa paksaan. Melalui permainan balok dan puzzle, beliau menanamkan dasar pemecahan masalah yang kuat.",
    education: "S1 PG-PAUD",
    experience: "10 Tahun",
    funFact: "Kolektor mainan LEGO dan sering membawanya ke kelas.",
    quote:
      "Setiap masalah punya solusi jika kita melihatnya dari sudut pandang berbeda.",
    color: "bg-kid-blue",
  },
];

// Gallery Section Data
export const images = [
  {
    src: "https://picsum.photos/seed/kid1/600/400",
    class: "col-span-1 md:col-span-2 row-span-2",
  },
  { src: "https://picsum.photos/seed/kid2/300/300", class: "col-span-1" },
  { src: "https://picsum.photos/seed/kid3/300/300", class: "col-span-1" },
  { src: "https://picsum.photos/seed/kid4/300/300", class: "col-span-1" },
  { src: "https://picsum.photos/seed/kid5/300/300", class: "col-span-1" },
];

// Testimonial Section Data
export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Sarah Pratiwi",
    role: "Bunda dari Kenzo (TK B)",
    content:
      "Sejak sekolah di sini, Kenzo jadi jauh lebih percaya diri dan mandiri. Metode belajarnya sangat menyenangkan, tidak membuat anak merasa tertekan. Gurunya sabar luar biasa!",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    id: 2,
    name: "Pak Dimas Anggara",
    role: "Ayah dari Luna (Playgroup)",
    content:
      "Fasilitasnya sangat aman dan bersih. Saya tenang meninggalkan anak saya di sini. Laporan perkembangan harian via aplikasi juga sangat membantu kami memantau aktivitas Luna.",
    rating: 5,
    image: "https://picsum.photos/seed/dimas/100/100",
  },
  {
    id: 3,
    name: "Ibu Ratna Dewi",
    role: "Bunda dari Arka (TK A)",
    content:
      "Anak saya dulu pemalu, sekarang jadi aktif ikut kegiatan seni dan musik. TK Imanuel Bogor benar-benar tempat yang tepat untuk tumbuh kembang karakter anak.",
    rating: 5,
    image: "https://picsum.photos/seed/ratna/100/100",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "tips-bekal-sehat",
    title: "5 Ide Bekal Sehat & Lucu untuk Anak TK",
    excerpt:
      "Bingung mau bawain bekal apa? Yuk intip ide bekal 4 sehat 5 sempurna yang pasti disukai si kecil.",
    content:
      "Mempersiapkan bekal untuk anak memang tantangan tersendiri bagi para Bunda. Seringkali anak bosan dengan menu yang itu-itu saja. Artikel ini akan membahas 5 resep praktis bento karakter yang tidak hanya lucu tapi juga bergizi tinggi. Mulai dari nasi kepal bentuk panda, hingga sate buah-buahan segar.\n\nTips pertama adalah melibatkan anak dalam pemilihan menu. Biarkan mereka memilih buah atau sayur kesukaan mereka. Kedua, gunakan cetakan makanan yang lucu untuk membuat bentuk-bentuk menarik. Ketiga, pastikan komposisi gizi seimbang antara karbohidrat, protein, dan serat.\n\nJangan lupa untuk selalu menyertakan air putih yang cukup agar anak tetap terhidrasi selama beraktivitas di sekolah.",
    author: "Bunda Sarah (Ahli Gizi)",
    date: "12 Mei 2025",
    category: "Parenting",
    image: "https://picsum.photos/seed/bekal/600/400",
    tags: ["Kesehatan", "Resep", "Gizi Anak"],
  },
  {
    id: "manfaat-sensory-play",
    title: "Mengapa Sensory Play Penting untuk Balita?",
    excerpt:
      "Bermain berantakan ternyata punya segudang manfaat untuk perkembangan otak anak, lho!",
    content:
      "Sensory play atau permainan sensorik adalah aktivitas yang merangsang indra anak. Mulai dari menyentuh tekstur pasir, mencium aroma, hingga mendengar bunyi-bunyian. Aktivitas ini sangat krusial untuk membangun koneksi saraf di otak (sinapsis) yang mendukung kemampuan kognitif, motorik halus, dan penyelesaian masalah.\n\nManfaat utama sensory play antara lain: meningkatkan perkembangan bahasa, melatih motorik halus dan kasar, menenangkan anak yang cemas, dan mengajarkan metode ilmiah dasar (sebab-akibat).",
    author: "Ms. Rini (Kepala Sekolah)",
    date: "28 April 2025",
    category: "Edukasi",
    image: "https://picsum.photos/seed/sensory/600/400",
    tags: ["Montessori", "Tumbuh Kembang", "Motorik"],
  },
  {
    id: "kegiatan-field-trip",
    title: "Keseruan Kunjungan ke Pemadam Kebakaran",
    excerpt:
      "Intip keseruan murid TK B belajar menjadi pemadam kebakaran cilik sehari!",
    content:
      "Minggu lalu, siswa-siswi TK B Bintang Ceria melakukan kunjungan edukatif ke Dinas Pemadam Kebakaran Kota Bogor. Anak-anak belajar tentang bahaya api, cara menyelamatkan diri, dan bahkan mencoba menyemprotkan air dari selang pemadam! Kegiatan ini bertujuan melatih keberanian dan mengenalkan profesi.\n\nPara petugas pemadam kebakaran dengan ramah menjelaskan peralatan yang mereka gunakan. Anak-anak juga diajak berkeliling naik mobil pemadam kebakaran. Sungguh pengalaman yang tak terlupakan!",
    author: "Admin Sekolah",
    date: "15 April 2025",
    category: "Kegiatan",
    image: "https://picsum.photos/seed/firefighter/600/400",
    tags: ["Field Trip", "Outdoor Learning", "Event"],
  },
];

export const socialMediaLinks = {
  instagram: "https://instagram.com/tkimanuelbogor",
  facebook: "https://facebook.com/tkimanuelbogor",
  youtube: "https://youtube.com/tkimanuelbogor",
  whatsapp: "https://wa.me/6281234567890",
};
