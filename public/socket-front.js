/* eslint-disable require-jsdoc */
import enviaTextoEditor from './documento.js';
// eslint-disable-next-line no-unused-vars
const socket = io();


function emitirTextoEditado(texto) {
  socket.emit('texto_editor', texto);
};

socket.on('texto_editor_cliente', (texto) => {
  enviaTextoEditor(texto);
});

export default emitirTextoEditado;
