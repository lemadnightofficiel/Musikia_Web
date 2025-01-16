const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid'); // Importez uuid
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données SQLite', err);
    } else {
        console.log('Connecté à la base de données SQLite');

        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                uuid VARCHAR(255) PRIMARY KEY,
                email VARCHAR(80) NOT NULL UNIQUE,
                instrument VARCHAR(20) NOT NULL,
                password VARCHAR(50) NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error('Erreur lors de la création de la table `users`', err);
            } else {
                console.log('Table `users` prête à être utilisée');
            }
        });
    }
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Serveur en cours d\'exécution.' });
});

app.get('/register', (req, res) => {
    res.status(200).json({ message: 'Utilisez une requête POST pour vous inscrire.' });
});

app.post('/register', async (req, res) => {
    const { email, instrument, password } = req.body;

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        if (row) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const uuid = uuidv4();
        db.run(
            'INSERT INTO users (uuid, email, instrument, password) VALUES (?, ?, ?, ?)',
            [uuid, email, instrument, hashedPassword],
            function (err) {
                if (err) {
                    return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
                }
                res.status(201).json({ message: 'Utilisateur enregistré avec succès', uuid });
            }
        );
    });
});

app.get('/login', (req, res) => {
    res.status(200).json({ message: 'Utilisez une requête POST pour vous connecter.' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de base de données' });
        }
        if (!row) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        const validPassword = await bcrypt.compare(password, row.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        const accessToken = jwt.sign({ id: row.uuid, email: row.email }, 'secret', { expiresIn: '1h' });
        res.json({ accessToken });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});