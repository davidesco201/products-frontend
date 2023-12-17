# Products Frontend

Este es el servicio frontend de la aplicación, construido con React, que presenta un catálogo de productos y permite realizar diversas acciones. A continuación, se detallan las características del servicio y los pasos para su instalación y ejecución.

## Características

- **Mostrar Catálogo de Productos:**
  - Lista los productos con información detallada, incluyendo nombre, descripción y precio.

- **Filtrar por Categoría:**
  - Ofrece la posibilidad de filtrar los productos por categoría, facilitando la búsqueda de productos específicos.

- **Agregar al Carrito de Compras:**
  - Permite a los usuarios agregar productos al carrito de compras.

## Instalación

1. **Descargar el Proyecto:**

   Puedes descargar el proyecto directamente desde GitHub o clonarlo utilizando Git:

   ```bash
   git clone https://github.com/davidesco201/products-frontend.git
   ```

2. **Instalar Dependencias:**

   Navega hasta el directorio del proyecto e instala las dependencias ejecutando el siguiente comando:

   ```bash
   npm install
   ```

   Esto instalará las dependencias necesarias, incluyendo React, Axios y React Router.

3. **Configurar la URL de la API:**

   Crea un archivo llamado `.env` en la raíz del proyecto y configura la URL de la API:

   ```env
   VITE_API=http://localhost:3000
   ```

## Ejecución

1. **Iniciar la Aplicación:**

   Para iniciar la aplicación, ejecuta el siguiente comando:

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173) o en el puerto que se encuentre disponible.

2. **Abrir en el Navegador:**

   Abre tu navegador y accede a [http://localhost:5173](http://localhost:5173) para interactuar con la aplicación.

## Estructura del Proyecto

- **`src`:** Contiene el código fuente de la aplicación React.
  - **`api`:** Configuración de Axios para realizar solicitudes HTTP.
  - **`assest/icons`:** Iconos utilizados en la aplicación.
  - **`assest/styles`:** Estilos y hojas de estilo de la aplicación.
  - **`components`:** Componentes reutilizables.
  - **`pages`:** Páginas de la aplicación.
  - **`router`:** Configuración de las rutas de la aplicación.
  - **`main.jsx`:** Punto de entrada de la aplicación.

## Dependencias

- **Axios:** Para realizar solicitudes HTTP a la API.
- **React:** Biblioteca principal de la aplicación.
- **React Router DOM:** Para la navegación entre páginas en la aplicación.

## Scripts

- **`npm run dev`:** Inicia el servidor de desarrollo.
- **`npm run build`:** Construye la aplicación para producción.
- **`npm run lint`:** Ejecuta eslint para revisar el código.

## Autor

- [David Alejandro Espitia | davidesco201](https://github.com/davidesco201)

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes encontrar más detalles en el archivo `LICENSE`.
