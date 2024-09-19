# Links-App-NodeMongo
Este proyecto es una aplicación web CRUD (Crear, Leer, Actualizar, Eliminar) para administrar tus enlaces favoritos. Desarrollada con Node.js, MongoDB y Handlebars, la aplicación permite a los usuarios almacenar, editar, y gestionar sus links de manera sencilla e intuitiva.

## Tecnologías Utilizadas

- **Node.js**: Plataforma del lado del servidor para ejecutar JavaScript.
- **Express**: Framework web para Node.js, usado para manejar rutas y middlewares.
- **MongoDB**: Base de datos NoSQL donde se almacenan los links.
- **Mongoose**: ODM (Object Data Modeling) para interactuar con MongoDB.
- **Handlebars**: Motor de plantillas para renderizar las vistas dinámicamente.
- **Passport.js**: Utilizado para la autenticación local de usuarios (inicio y cierre de sesión).
- **bcryptjs**: Para encriptar las contraseñas de los usuarios.
- **connect-flash**: Middleware para mostrar mensajes flash (de éxito o error).

## Características

- **Autenticación de usuarios**: Registro e inicio de sesión utilizando Passport.js.
- **Gestión de links**: Los usuarios pueden crear, leer, actualizar y eliminar sus links favoritos.
- **Mensajes flash**: Retroalimentación visual para el usuario tras cada acción (como agregar o eliminar un link).
- **Diseño de vistas con Handlebars**: Frontend básico y funcional con plantillas dinámicas.
- **CRUD completo**: Gestión completa de los datos almacenados en MongoDB.

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/usuario/crud-links-favoritos.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con los siguientes valores:
4. Inicia la aplicación:
 ```bash
 npm run dev
 ```

5. Abre tu navegador y visita `http://localhost:3000`.

## Agradecimientos

Un especial agradecimiento a **Fazt**, creador de contenido sobre desarrollo de software, por sus tutoriales y recursos que han sido de gran ayuda para aprender y mejorar mis habilidades de programación. ¡Gracias por compartir tu conocimiento con la comunidad!

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes ideas para mejorar la aplicación, no dudes en abrir un issue o enviar un pull request.

## Imagenes de la web

![InitialPage](https://github.com/user-attachments/assets/d72bca24-d3e9-4347-ad7d-b1d614c37ffa)

![PageAddLinks](https://github.com/user-attachments/assets/91704e27-6b73-4452-8b57-0b330d41638f)

![PageLinks](https://github.com/user-attachments/assets/7c74a877-3998-4758-ad88-630885679d1b)
