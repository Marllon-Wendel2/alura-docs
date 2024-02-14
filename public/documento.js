/* eslint-disable require-jsdoc */
import {emitirTextoEditado} from './socket-front.js';
const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditado(textoEditor.value);
});

function enviaTextoEditor(texto) {
  textoEditor.value = texto;
};

export {enviaTextoEditor};
