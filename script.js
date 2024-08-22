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
  // Define a unique key for validation
  const validKey = '11434'; // Replace with your unique key

  // Get the query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const keyParam = urlParams.get('key');

  // Debugging: Log the entire URL and the key parameter
  console.log('Full URL:', window.location.href);
  console.log('Retrieved key parameter:', keyParam);

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
  iframe.src = 'https://realchatbot-mauve.vercel.app/';
  iframe.width = '500px';
  iframe.height = '800px';
  iframe.style.border = 'none';
  iframe.style.position = 'fixed';
  iframe.style.bottom = '20px';
  iframe.style.right = '20px';
  iframe.style.borderRadius = '20px';

  chatbotContainer.appendChild(iframe);

  // Cleanup to remove the chatbot when the component is unmounted
  window.addEventListener('unload', () => {
    document.body.removeChild(chatbotContainer);
  });
})();
