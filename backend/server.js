// Importation des dépendances nécessaires
const express = require('express');               // Framework pour créer des serveurs web HTTP
const nodemailer = require('nodemailer');         // Module pour l'envoi d'emails
const cors = require('cors');                     // Middleware pour autoriser les requêtes cross-origin (CORS)
const bodyParser = require('body-parser');        // Middleware pour parser les corps de requête JSON

// Initialisation de l'application Express
const app = express();

// Application des middlewares
app.use(cors());                                  // Active CORS pour toutes les routes
app.use(bodyParser.json());                       // Permet de parser les corps de requêtes en JSON

// Configuration du transporteur mail via Nodemailer
const transporter = nodemailer.createTransport({
  host: 'localhost',                              // Hôte du serveur SMTP local (ex: Maildev ou Mailhog)
  port: 1025,                                     // Port utilisé par le serveur SMTP local
  secure: false,                                  // Pas de connexion sécurisée (TLS/SSL)
  ignoreTLS: true,                                // Ignore le STARTTLS même s’il est proposé
  tls: { rejectUnauthorized: false }              // Ne vérifie pas le certificat SSL (utile en dev/local)
});

// Définition d'une route POST pour recevoir les messages du formulaire de contact
app.post('/api/contact', (req, res) => {
  console.log('Reçu formulaire:', req.body);      // Log du contenu reçu dans la requête

  // Déstructuration des champs envoyés par le frontend
  const { name, subject, message } = req.body;

  // Configuration des options de l'email à envoyer
  const mailOptions = {
    from: 'no-reply@monsite.com',                 // Adresse émettrice fictive
    to: 'test@localhost',                         // Destinataire (doit être capturé par un serveur mail local)
    subject: subject,                             // Sujet de l’email
    text: `Message de ${name} :\n\n${message}`    // Corps de l’email formaté en texte brut
  };

  // Envoi de l'email avec Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Gestion d’erreur côté serveur
      console.error('Erreur lors de l\'envoi du mail :', error);
      return res.status(500).send({ error: 'Erreur lors de l\'envoi du mail.' });
    }
    // Réponse positive en cas de succès
    res.send({ message: 'Mail envoyé avec succès !' });
  });
});

// Démarrage du serveur sur le port défini
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});