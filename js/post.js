const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
const postContent = document.getElementById('post-content');

fetch(`https://clothes.sustainatrip.tur.br/wp-json/wp/v2/posts/${postId}?_embed`)
  .then(res => res.json())
  .then(post => {
    const title = post.title.rendered;
    const content = post.content.rendered;
    const featured = post._embedded['wp:featuredmedia']?.[0]?.source_url || '';

    postContent.innerHTML = `
      <h1>${title}</h1>
      <img src="${featured}" alt="${title}">
      <div class="post-body">${content}</div>
    `;
  })
  .catch(err => {
    postContent.innerHTML = '<p>Erro ao carregar o post.</p>';
    console.error(err);
  });
