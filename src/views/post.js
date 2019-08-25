export const listPosts = (data) => {
  const containerOnePost = document.createElement('div');
  const templateOnePost = `
      <div class="form-post">
        <p>${data.privacity}</p>
        <p>${data.userName}</p>
        <div class="form-post">
            <p>${data.notes}</p>
        </div>
      </div>`;
  containerOnePost.innerHTML = templateOnePost;
  return containerOnePost;
};
