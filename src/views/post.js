//  import { addPost } from '../firebase/controllerdata.js';

export const listPosts = (data) => {
  const div = document.createElement('div');
  // div.classList.add('tabla');
  const posts = `
      <div class="form-post">
        <p>${data.privacity}</p>
        <p>${data.userName}</p>
        <div class="form-post">
            <p>${data.notes}</p>
        </div>
      </div>`;
  div.innerHTML = posts;
  return div;
};
