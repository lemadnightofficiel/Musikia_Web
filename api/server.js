const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuration de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hvfufahfjvknzqkqazfz.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2ZnVmYWhmanZrbnpxa3FhemZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzAyMzc4OSwiZXhwIjoyMDUyNTk5Nzg5fQ.dxaTtiMs5gMlnE35TYuduo9vqIZ7YYj29jZOtZTfY8s';
const supabase = createClient(supabaseUrl, supabaseKey);

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Serveur en cours d\'exécution.' });
});

app.get('/register', (req, res) => {
    res.status(200).json({ message: 'Utilisez une requête POST pour vous inscrire.' });
});

app.post('/register', async (req, res) => {
    const { email, instrument, password } = req.body;

    try {
        // Vérification si l'utilisateur existe déjà
        const { data: existingUser, error: selectError } = await supabase
            .from('users')
            .select('uuid')
            .eq('email', email)
            .single();

        if (selectError && selectError.code !== 'PGRST116') {
            console.error('Erreur lors de la vérification de l\'utilisateur existant :', selectError);
            return res.status(500).json({ error: 'Erreur de base de données', details: selectError });
        }

        if (existingUser) {
            return res.status(400).json({ error: 'Cet email est déjà utilisé' });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        const uuid = uuidv4();

        // Insertion de l'utilisateur
        const { data: newUser, error: insertError } = await supabase
            .from('users')
            .insert([{ uuid, email, instrument, password: hashedPassword }]);

        if (insertError) {
            console.error('Erreur lors de la création de l\'utilisateur :', insertError);
            return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur', details: insertError });
        }

        res.status(201).json({ message: 'Utilisateur enregistré avec succès', uuid });
    } catch (err) {
        console.error('Erreur inattendue :', err);
        res.status(500).json({ error: 'Erreur inattendue', details: err });
    }
});

app.get('/login', (req, res) => {
    res.status(200).json({ message: 'Utilisez une requête POST pour vous connecter.' });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Récupération de l'utilisateur
        const { data: user, error: selectError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();

        if (selectError) {
            console.error('Erreur lors de la récupération de l\'utilisateur :', selectError);
            return res.status(500).json({ error: 'Erreur de base de données', details: selectError });
        }

        if (!user) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        // Vérification du mot de passe
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        // Génération du token JWT
        const accessToken = jwt.sign({ id: user.uuid, email: user.email }, 'secret', { expiresIn: '1h' });
        res.json({ accessToken });
    } catch (err) {
        console.error('Erreur inattendue :', err);
        res.status(500).json({ error: 'Erreur inattendue', details: err });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
