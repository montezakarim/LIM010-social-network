import { components } from '../views/componentesv.js'
export const changeView = (routers) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routers) {
    case '#/':
      {
        container.appendChild(components.login())
      }
      break;
    case '#/register':
      {
        container.appendChild(components.register())
      }
      break;
    // case '#/home':
    //   {
    //     container.appendChild(components.home())
    //   }
    //   break;
    default: break;
  }
}
