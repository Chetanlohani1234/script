// (function() {
//     // Create a container for the chatbot
//     const chatbotContainer = document.createElement('div');
//     chatbotContainer.id = 'chatbot-container';
//     document.body.appendChild(chatbotContainer);
  
//     // Create an iframe to load the chatbot
//     const iframe = document.createElement('iframe');
//     iframe.src = 'https://realchatbot-mauve.vercel.app/'; // URL of your chatbot
//     iframe.width = '500px';
//     iframe.height = '800px';
//     iframe.style.cssText = 'border:none; position:fixed; bottom:20px; right:20px; border-radius:20px';
  
//     chatbotContainer.appendChild(iframe);
  
//     // Optional: Clean up the chatbot container when the page unloads
//     window.addEventListener('unload', () => {
//       document.body.removeChild(chatbotContainer);
//     });
// })();

(function() {
  // Define the IP address and port where the chatbot API is live
  const apiUrl = 'http://103.61.103.107:11434'; // Replace with your actual IP address and port

  // Define a unique key for validation
  const validKey = '11434'; // Replace with your unique key

  // Get the query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const keyParam = urlParams.get('key');

  // Validate the key
  if (keyParam !== validKey) {
      console.error('Invalid key. Access to the chatbot is not authorized.');
      return;
  }

  // Create a container for the chatbot
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  document.body.appendChild(chatbotContainer);

  // Create an iframe to load the chatbot
  const iframe = document.createElement('iframe');
  iframe.src = `${apiUrl}`; // Use the IP address to load the chatbot
  iframe.width = '500px';
  iframe.height = '800px';
  iframe.style.border = 'none';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.borderRadius = '20px';
  // iframe.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';

  chatbotContainer.appendChild(iframe);

  // Cleanup to remove the chatbot when the component is unmounted
  window.addEventListener('unload', () => {
    document.body.removeChild(chatbotContainer);
  });
})();

