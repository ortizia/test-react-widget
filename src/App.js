import React, { useEffect } from "react";

import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

import logo from "./assets/images/logo.png";
import MessageHTML from "./MessageHTML";
import "./widget.css";

function App() {
  useEffect(() => {
    addResponseMessage(
      "Hola, me llamo BAUTI! Soy tu Asistente Virtual. ¿En qué puedo ayudarte?"
    );
    addResponseMessage('Escribe "ayuda" para ver el menú de servicios.');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    fetch("http://localhost:5000/consulta-json?consulta="+newMessage, {
      method: "GET",
      headers: new Headers(),
      mode:'cors'
    })
      .then((res) => res.json())
      .then((data) => {
        // if(false){
        if(data.tipo === 'texto'){
          addResponseMessage(data.respuesta);
        } else {
          // data.respuesta = '<ul class="list-group list-group-flush"><li class="list-group-item"><b>Subsecretaría de Familia</b><br>Dirección Provincial de Articulación Técnica Territorial.</li><li class="list-group-item">Material descargable <b>Ley Provincial 1.634 Régimen Especial de Protección Integral para Personas Discapacitadas</b><br>Descargar el material <a href="https://mindesarrolloytrabajo.neuquen.gob.ar/wp-content/uploads/2020/03/Ley-1634.pdf" target="_blank">aquí</a></li></ul>'
          // data.respuesta = 'Hola, me llamo <b>Bauti</b> y soy tu Asistente Virtual. ¿En qué te puedo ayudar? Escribe <b>ayuda</b> para ver servicios.';
          renderCustomComponent(MessageHTML, {message: data.respuesta}, true) 
        }
      });
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        senderPlaceHolder="Ingrese su consulta"
        title="BAUTI"
        subtitle="Bot AUTónomo Inteligente"
      />
    </div>
  );
}

export default App;
