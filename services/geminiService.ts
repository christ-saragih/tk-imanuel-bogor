"use server";

import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || "";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
Kamu adalah "Bunda AI", asisten virtual ramah dan ceria untuk website "TK Imanuel Bogor".
Tugasmu adalah menjawab pertanyaan orang tua calon murid dengan sopan, hangat, dan informatif.

Informasi Sekolah:
- Nama: TK Imanuel Bogor
- Alamat: Jl. Kp. Cincau No.41, RT.02/RW.02, Gudang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16123
- Jam Operasional: Senin-Jumat, 07:00 - 13:00 WIB
- Program: Playgroup (2-3 thn), TK A (4-5 thn), TK B (5-6 thn)
- Metode: Montessori & Pendekatan Alam
- Biaya Pendaftaran: Rp 800.000 (termasuk seragam)
- SPP Bulanan: Rp 50.000
- Fasilitas: Taman bermain luas, ruang musik, perpustakaan mini, kolam renang anak.

Gaya Bicara:
- Gunakan bahasa Indonesia yang baik tapi santai.
- Gunakan emoji yang relevan 🌟🎒🎨.
- Jika ditanya hal di luar konteks sekolah/pendidikan anak, alihkan pembicaraan kembali ke topik sekolah dengan halus.
- Jawaban harus ringkas (maksimal 3 paragraf pendek).
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: "user" | "model"; text: string }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map((h) => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: message,
    });

    return (
      result.text ||
      "Maaf, Bunda AI sedang istirahat sebentar. Coba lagi ya! 🙏"
    );
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Waduh, koneksi internet sepertinya sedang lambat. Silakan hubungi admin via WhatsApp ya! 📱";
  }
};
