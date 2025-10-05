'use client';

import { useEffect } from 'react';

const ChatyWidget = () => {
  useEffect(() => {
    const chatConfig = {
      apiKey: '64fc6bbe-9808-44c5-936d-e53690c5caca',
      baseUrl: 'https://chaty.linkai.co.jp',
      position: 'bottom-right',
      primaryColor: '#3b82f6',
      size: 'standard'
    };

    // Load Chaty widget script
    const script = document.createElement('script');
    script.src = chatConfig.baseUrl + '/widget.js';
    script.onload = () => {
      if (typeof window.ChatyWidget !== 'undefined') {
        new window.ChatyWidget(chatConfig);
      }
    };
    document.head.appendChild(script);

    // Load widget CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chatConfig.baseUrl + '/widget.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup on component unmount
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return null;
};

export default ChatyWidget;