import './style.css';

// Seleccionamos el contenedor principal del DOM
document.querySelector('#app').innerHTML = `
  <div>
    <h1>CRUD de Posts</h1>
    <div>
      <form id="postForm">
        <input type="text" id="postTitle" placeholder="Título" required />
        <input type="number" id="postViews" placeholder="Vistas" required />
        <button type="submit">Crear Post</button>
      </form>
    </div>
    <div id="postsContainer"></div>
  </div>
`;

const API_URL = '';
const postForm = document.querySelector('#postForm');
const postsContainer = document.querySelector('#postsContainer');

// Función para obtener los posts
todo: 'Implementar función para obtener y mostrar los posts desde el backend';

// Función para crear un post
todo: 'Implementar función para crear un nuevo post';

// Función para actualizar un post
todo: 'Implementar función para actualizar un post existente';

// Función para eliminar un post
todo: 'Implementar función para eliminar un post';
