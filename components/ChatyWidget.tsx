'use client';

import { useEffect } from 'react';

const ChatyWidget = () => {
  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src*="chaty.linkai.co.jp/widget.js"]');
    if (existingScript) {
      console.log('Chaty script already exists, skipping...');
      return;
    }

    const chatConfig = {
      apiKey: '64fc6bbe-9808-44c5-936d-e53690c5caca',
      baseUrl: 'https://chaty.linkai.co.jp',
      position: 'bottom-right',
      primaryColor: '#3b82f6',
      size: 'standard'
    };

    console.log('Loading Chaty widget with config:', chatConfig);

    // Load Chaty widget script
    const script = document.createElement('script');
    script.src = chatConfig.baseUrl + '/widget.js';
    script.async = true;

    script.onload = () => {
      console.log('Chaty script loaded successfully');
      if (typeof (window as any).ChatyWidget !== 'undefined') {
        try {
          new (window as any).ChatyWidget(chatConfig);
          console.log('ChatyWidget initialized successfully');
        } catch (error) {
          console.error('Error initializing ChatyWidget:', error);
        }
      } else {
        console.error('ChatyWidget not found on window object after script load');
      }
    };

    script.onerror = (error) => {
      console.error('Failed to load Chaty script:', error);
    };

    document.head.appendChild(script);

    // Load widget CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chatConfig.baseUrl + '/widget.css';
    link.onload = () => {
      console.log('Chaty CSS loaded successfully');
    };
    link.onerror = (error) => {
      console.error('Failed to load Chaty CSS:', error);
    };
    document.head.appendChild(link);

    return () => {
      // Cleanup on component unmount
      try {
        const scriptToRemove = document.querySelector('script[src*="chaty.linkai.co.jp/widget.js"]');
        const linkToRemove = document.querySelector('link[href*="chaty.linkai.co.jp/widget.css"]');

        if (scriptToRemove) {
          scriptToRemove.remove();
          console.log('Chaty script removed');
        }
        if (linkToRemove) {
          linkToRemove.remove();
          console.log('Chaty CSS removed');
        }
      } catch (error) {
        console.error('Error during cleanup:', error);
      }
    };
  }, []);

  return null;
};

export default ChatyWidget;