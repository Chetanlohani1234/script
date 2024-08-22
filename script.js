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
  // Define the valid key for validation
  const validKey = '11434'; // Replace with your unique key

  // Function to get the key parameter from the script URL
  const getKeyFromScriptURL = () => {
    const script = document.currentScript; // Get the current script element
    const url = new URL(script.src);
    return url.searchParams.get('key'); // Retrieve the key parameter
  };

  // Get the key from the script URL
  const keyParam = getKeyFromScriptURL();

  // Check if the key is valid
  if (keyParam === validKey) {
    // Create a container for the chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.id = 'chatbot-container';
    document.body.appendChild(chatbotContainer);

    // Create an iframe to load the chatbot
    const iframe = document.createElement('iframe');
    iframe.src = 'https://realchatbot-mauve.vercel.app/'; // URL of the chatbot
    iframe.width = '500px';
    iframe.height = '800px';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '20px';
    iframe.style.right = '20px';
    iframe.style.borderRadius = '20px';

    chatbotContainer.appendChild(iframe);

    // Optional: Cleanup to remove the chatbot when the component is unmounted
    window.addEventListener('unload', () => {
      document.body.removeChild(chatbotContainer);
    });
  } else {
    console.error('Invalid key. Access to the chatbot is not authorized.');
  }
})();

