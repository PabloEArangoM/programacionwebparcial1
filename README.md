# Lista de Tareas (React + Vite)

App sencilla de lista de tareas hecha con React. Permite:
1. Mostrar las tareas
2. Agregar tareas
3. Marcar una tarea como terminada
4. Borrar una tarea

## Desarrollo local

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y súbele este proyecto:
   ```bash
   git init
   git add .
   git commit -m "primer commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
   git push -u origin main
   ```

2. Abre `vite.config.js` y cambia `base: '/nombre-del-repo/'` por el nombre real de tu repositorio, por ejemplo:
   ```js
   base: '/NOMBRE_DEL_REPO/',
   ```

3. Ejecuta el despliegue (ya está configurado en `package.json` con `gh-pages`):
   ```bash
   npm run deploy
   ```
   Esto compila el proyecto (`vite build`) y sube la carpeta `dist` a la rama `gh-pages`.

4. En GitHub, ve a **Settings > Pages** y en "Build and deployment" selecciona:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` / `/ (root)`

5. Tu app quedará disponible en:
   `https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/`

> Nota: si el repo se llama distinto a "nombre-del-repo", no olvides ajustar el `base` en `vite.config.js` antes de hacer deploy, o los assets (CSS/JS) no cargarán.
