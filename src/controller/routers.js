import { components } from '../views/components.js'
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
    case '#/home':
      {
        container.appendChild(components.home())
      }
      break;
    case '#/profile':
      {
        container.appendChild(components.profile())
      }
      break;

    default: 
    {
      container.appendChild(components.home())
    }
      break;
  }
}