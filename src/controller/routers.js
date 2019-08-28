import { components } from '../views/components.js';
<<<<<<< HEAD
=======
import { getPost } from '../module/controllerdata.js';

// rutas
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
export const changeView = (routers) => {
  const containerGlobal = document.getElementById('container-global');
  containerGlobal.innerHTML = '';
  switch (routers) {
<<<<<<< HEAD
    case '#/':
      {
        container.appendChild(components.login())
      }
=======
    case '#/': containerGlobal.appendChild(components.login());
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
      break;
    case '#/register': containerGlobal.appendChild(components.register());
      break;
    case '#/home':
<<<<<<< HEAD
      {
        container.appendChild(components.home())
      }
=======
      // eslint-disable-next-line no-case-declarations
      const callback = (objData) => {
        containerGlobal.innerHTML = '';
        containerGlobal.appendChild(components.home(objData));
      };
      getPost(callback);
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
      break;
    case '#/profile': containerGlobal.appendChild(components.profile());
      break;
    default: containerGlobal.appendChild(components.login());
      break;
  }
};