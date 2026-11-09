const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let correspondences = [
    {
        id: 'ND-CR-1403-8821',
        sender: 'کارشناس فروش (مریم تهرانی)',
        receiver: 'مهندسی و R&D',
        subject: 'استعلام امکان‌سنجی پوشش پلیمری مخزن',
        date: '۱۴۰۵/۰۸/۱۱',
        status: 'در انتظار پاسخ (مهلت ۴۸س)',
        replies: []
    }
];

app.get('/api/correspondences', (req, res) => {
    res.json(correspondences);
});

app.post('/api/correspondences', (req, res) => {
    const newDoc = {
        id: `ND-CR-1403-${Math.floor(1000 + Math.random() * 9000)}`,
        ...req.body,
        date: new Date().toLocaleDateString('fa-IR'),
        replies: []
    };
    correspondences.unshift(newDoc);
    res.json({ success: true, data: newDoc });
});

app.listen(PORT, () => {
    console.log(`Nazoos Dana CRM Server running on port ${PORT}`);
});