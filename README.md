# GPT Sham API

Este proyecto utiliza Puppeteer y NestJS para automatizar la interacción con el sitio web de chatGPT y proporcionar una API REST para interactuar con él.

## Requisitos

- Node.js (versión recomendada: 18.15 o superior)
- npm (versión recomendada: 9.6.2 o superior)

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
```

2. Cambia al directorio del proyecto e instala las dependencias:

```bash
cd tu_repositorio
npm install
```

3. Configura las variables de entorno. Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y rellena las variables necesarias:

```bash
cp .env.example .env
```

Edita el archivo `.env` y configura las variables de entorno según tus necesidades.

## Ejecución

Para iniciar el servidor en modo de desarrollo, ejecuta el siguiente comando:

```bash
npm run start:dev
```

La API estará disponible en `http://localhost:3000`.

## API

La API proporciona los siguientes puntos finales para interactuar con el sitio web:

- `POST /:clientId`: Crea una nueva sesión de navegador para el cliente especificado.
- `DELETE /:clientId`: Cierra la sesión del navegador para el cliente especificado.
- Otros endpoints para interactuar con el sitio web (añade detalles de los endpoints adicionales aquí)
