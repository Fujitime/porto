---
title: Condensed Audio di Arch Linux dan turunannya
description: Ingin belajar bahasa dengan cepat? Mulailah dengan listening dari audio, cara super efektif!
publishedAt: 2024-03-20T03:16:28.267Z
slug: Condensed Audio
image: /images/maxresdefault.jpg
isPublish: true
category: Tech
---
\-﻿----------------------

Sebelum lanjut, pastikan kalian sudah tahu apa itu **Metode Immersion**. Jika belum, klik [di sini](https://fuji-halim-rabani.netlify.app/posts/Metode%20Immersion).

![otakudes](/images/maxresdefault.jpg "otakudes")

Podcast adalah salah satu media terbaik untuk belajar bahasa karena percakapannya berjalan konstan tanpa jeda, tanpa background musik, dan tanpa gangguan. Ini membuat input bahasa lebih maksimal dan efektif.

> **No fek-fek, no teori-teori—real experience!**

Untuk contoh kali ini, kita akan menggunakan bahasa Jepang dan anime sebagai sumber video.

### Kenapa Listening Dari Anime Saja Kurang?

Setiap kali nonton anime, setengah waktu "terbuang" untuk mendengarkan opening, efek suara random, atau hanya beberapa jeda.

Kita bisa mengubah suara dari anime menjadi audio mirip podcast, full percakapan.

- - -

## Langkah-langkah Membuat Audio Condensed dari Anime

### **Step 1: Download Video**

Dalam contoh ini, kita menggunakan anime. Untuk membuat audio condensed, kamu butuh bahan mentah: video anime. Kalau belum punya, download dulu dari situs seperti (maaf, illegal, dosa tanggung sendiri):

* [Nyaa.si](https://nyaa.si) (diblokir Kominfo, pastikan pakai DNS lain)
* [Otakudesu](https://otakudesu.lol)

![otakudes](/images/0700f73a-1a10-43e2-b467-3f1703f64893.jpeg "otakudes")

### **Step 2: Download Subtitle**

Kamu juga perlu subtitle. Situs favorit gweh adalah [jimaku.cc](https://jimaku.cc).

Pastikan subtitle-nya dalam format **SRT** atau **ASS**, biar bisa diproses nanti.

![jimaku](/images/screenshot-from-2025-03-20-11-37-24.png "jimaku")

### **Step 3: Install Tools yang Dibutuhkan**

Biar ngga ribet, cuma butuh beberapa alat ini:

* **FFmpeg** → Untuk mengolah audio dan video.
* **Python + Subs2cia** → Untuk mengekstrak subtitle dan mengatur audionya.

Kalau belum punya FFmpeg dan Python, install dulu:

```bash
sudo pacman -S ffmpeg python
pip install subs2cia
```

### **Step 4: Convert Video Jadi Condensed Audio**

1. **Siapkan Video dan Subtitle**\
   Taruh video dan subtitle (SRT/ASS) dalam satu folder.
2. **Jalankan Perintah Ini di Terminal**

   ```bash
   subs2cia condense -i "video.mkv" --srt "subtitle.srt" -o "output_audio.flac"

   # Kalau mau format MP3 (FLAC lebih disarankan karena much better):
   subs2cia condense -i "video.mkv" --srt "subtitle.srt" -o "output_audio.mp3"
   ```

   **Tips**: Disarankan untuk rename file terlebih dahulu untuk menghindari error dan mempermudah command.

![Terminal](/images/screenshot-from-2025-03-20-11-52-57.png "Terminal")

### **Cek Hasilnya**

Dari 25 menit episode anime, kamu bakal dapet sekitar 15 menit audio full percakapan. ngga ada opening, ngga ada background noise, ngga ada jeda. Hanya omongan karakter.

Y﻿oi.

Jika ada pertanyaan atau kendala, Tidak perlu ragu untuk bertanya di kolom komentar. Saya akan bantu (sebisanya)

#RagumuRugimu:V