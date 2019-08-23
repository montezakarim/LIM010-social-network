import { components } from '../views/components.js';
import { getPost } from '../firebase/controllerdata.js';

// rutas
export const changeView = (routers) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routers) {
    case '#/': container.appendChild(components.login());
      break;
    case '#/register': container.appendChild(components.register());
      break;
    case '#/home':
      const callback = (objData) => {
      container.innerHTML='';
      container.appendChild(components.home(objData));
      };
      getPost(callback);
      break;
    case '#/profile': container.appendChild(components.profile());
      break;
    default: container.appendChild(components.login());
      break;
  }
};
