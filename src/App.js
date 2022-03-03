import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';
import './widget.css'

function App() {
  useEffect(() => {
    addResponseMessage('Hola, me llamo BAUTI! Soy tu Asistente Virtual. ¿En qué puedo ayudarte?');
    addResponseMessage('Escribe "ayuda" para ver el menú de servicios.')
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="BAUTI"
          subtitle="Bot AUTónomo Inteligente"
        />
      </div>
    );
}

export default App;
