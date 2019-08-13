// Este es el punto de entrada de tu aplicacion
import { changeView } from './controller/routers.js';

import  { configFirebase } from './firebase/configfirebase.js';
const init = () => {
  configFirebase();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
}

window.addEventListener('load', init);