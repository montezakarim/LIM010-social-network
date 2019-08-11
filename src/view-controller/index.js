export const changeView = (routers) => {

    const router = routers.substr(2, routers.length - 2);
    const container = document.getElementById('root');
    container.innerHTML = '';
    switch (router) {
    case 'signin':
     container.appendChild(loginView());
     break;
    case 'signup':
     container.appendChild(loginView());
     break;
    default:
     container.appendChild(loginView());
     break;
    }
};


