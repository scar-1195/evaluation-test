
# Evaluación para Desarrollador JR

Este proyecto consiste en una aplicación de CRUD de posts desarrollada en Vanilla JS. El objetivo es evaluar tus habilidades para completar y mejorar la funcionalidad existente.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu equipo:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [JSON Server](https://github.com/typicode/json-server)

---

## Pasos para configurar y ejecutar la aplicación

### Paso 1: Clonar el repositorio

Clona este repositorio en tu máquina local ejecutando el siguiente comando:

```bash
git clone https://github.com/scar-1195/evaluation-test.git
```

### Paso 2: Instalar los módulos de Node

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

### Paso 3: Ejecutar el servidor de JSON Server

Inicia el servidor de JSON Server para simular un backend. Ejecuta el siguiente comando:

```bash
npm run back
```

El servidor estará disponible en: `http://localhost:3000/posts`.

### Paso 4: Ejecutar el servidor de desarrollo

Inicia el servidor de desarrollo para cargar la aplicación en el navegador:

```bash
npm run dev
```

Accede a la aplicación en el navegador a través de la URL que se mostrará en la terminal (generalmente `http://localhost:5173`).

---

## Objetivo de la evaluación

### Tareas principales:

1. Implementar las siguientes funcionalidades en `main.js`:

   - **Obtener y mostrar posts desde el backend**.
   - **Crear un nuevo post a través del formulario**.
   - **Editar un post existente al hacer clic en el botón "Editar"**.
   - **Eliminar un post al hacer clic en el botón "Eliminar"**.

2. Agregar la lógica para renderizar los posts en el contenedor `#postsContainer`.

## Recursos útiles

- [JSON Server Docs](https://github.com/typicode/json-server)
- [Vite.js Docs](https://vitejs.dev/)

---

¡Buena suerte!
