const express = require("express");
const app = express();
const PORT = 3000;

// Örnek öğrenci verileri
const students = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Steve" }
];

// Middleware: JSON body parser
app.use(express.json());

// Tüm öğrencileri JSON formatında döndüren route
app.get("/students", (req, res) => {
    res.json(students);
});

// Belirli bir öğrenci hakkında bilgi döndüren route (ID'ye göre)
app.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    student ? res.json(student) : res.status(404).json({ error: "Öğrenci bulunamadı" });
});

// Sunucuyu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
