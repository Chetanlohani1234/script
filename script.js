(function() {
    // Create a container for the chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    document.body.appendChild(chatbotContainer);
  
    // Create an iframe to load the chatbot
    const iframe = document.createElement('iframe');
    iframe.src = 'https://realchatbot-mauve.vercel.app/'; // URL of your chatbot
    iframe.width = '500px';
    iframe.height = '800px';
    iframe.style.cssText = 'border:none; position:fixed; bottom:20px; right:20px; border-radius:20px';
  
    chatbotContainer.appendChild(iframe);
  
    // Optional: Clean up the chatbot container when the page unloads
    window.addEventListener('unload', () => {
      document.body.removeChild(chatbotContainer);
    });
})();
