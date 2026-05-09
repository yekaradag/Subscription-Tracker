const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// JSON verilerini okuyabilmek için middleware
app.use(express.json());

// Frontend dosyalarını (HTML, CSS, JS) dışarıya açmak için
app.use(express.static(path.join(__dirname, '../frontend')));

// Temel bir test rotası (API'nin çalışıp çalışmadığını kontrol etmek için)
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Abonelik Takip Sistemi API'si aktif!",
        timestamp: new Date()
    });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`🚀 Sunucu şu adreste çalışıyor: http://localhost:${PORT}`);
    console.log(`📁 Statik dosyalar sunuluyor: ${path.join(__dirname, '../frontend')}`);
});