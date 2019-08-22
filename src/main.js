import { changeView } from './controller/routers.js';
import { configFirebase } from './module/configfirebase.js';

const init = () => {
  configFirebase();
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);
