// js/blog.js
console.log("Blog criativo carregado 🌟");

const postsContainer = document.getElementById('posts');
const apiUrl = 'https://clothes.sustainatrip.tur.br/wp-json/wp/v2/posts?_embed';

fetch(apiUrl)
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'post-card';

      const title = post.title.rendered;
      const excerpt = post.excerpt.rendered;
      const featured = post._embedded['wp:featuredmedia']?.[0]?.source_url || '';

      card.innerHTML = `
        <a href="post.html?id=${post.id}">
          <img src="${featured}" alt="${title}">
          <h2>${title}</h2>
          <div class="excerpt">${excerpt}</div>
        </a>
      `;
      postsContainer.appendChild(card);
    });
  })
  .catch(err => {
    postsContainer.innerHTML = `<p>Erro ao carregar os posts.</p>`;
    console.error(err);
  });
