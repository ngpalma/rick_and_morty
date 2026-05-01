# Rick & Morty App

Aplicación full-stack para explorar los personajes de la serie Rick & Morty. Consume la [API pública de Rick & Morty](https://rickandmortyapi.com/) y permite registrarse, iniciar sesión, navegar todos los personajes con filtros y paginado, ver el detalle de cada uno y gestionar una lista de favoritos persistida en base de datos.

---

## Tecnologías

### Frontend
| Tecnología | Versión |
|---|---|
| React | 18 |
| Redux + Redux Thunk | 4 + 2 |
| React Router DOM | 6 |
| Axios | 1 |
| CSS Modules | — |

### Backend
| Tecnología | Versión |
|---|---|
| Node.js + Express | 4 |
| Sequelize | 6 |
| PostgreSQL | — |
| JSON Web Token | 9 |

---

## Requisitos previos

- Node.js 18+
- PostgreSQL corriendo localmente
- Base de datos llamada `rickandmorty` creada en PostgreSQL

```sql
CREATE DATABASE rickandmorty;
```

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/ngpalma/rick_and_morty.git
cd rick_and_morty
```

### 2. Configurar variables de entorno

Crear o editar el archivo `back/.env`:

```env
DB_USER=tu_usuario_postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
PORT=3001
JWT_SECRET=tu_secreto_jwt
SECRET=tu_secreto_crypto
```

### 3. Instalar dependencias

```bash
# Backend
cd back
npm install

# Frontend
cd ../front
npm install
```

---

## Ejecución

Abrir dos terminales:

```bash
# Terminal 1 — Backend (puerto 3001)
cd back
npm start

# Terminal 2 — Frontend (puerto 3000)
cd front
npm start
```

La aplicación queda disponible en `http://localhost:3000`.

> En el primer arranque Sequelize sincroniza los modelos con la base de datos automáticamente (`alter: true`), sin borrar datos existentes.

---

## Funcionalidades

### Autenticación
- Registro con email y contraseña
- Login con JWT (token válido por 7 días)
- Sesión persistida en `localStorage` — al recargar la página no se pierde la sesión
- Logout limpia el token y redirige al login

### Personajes
- Listado completo de los 826 personajes de la serie con **paginado** (20 por página)
- Filtros combinables por:
  - Nombre (búsqueda con debounce)
  - Estado (Vivo / Muerto / Desconocido)
  - Género (Masculino / Femenino / Sin género / Desconocido)
  - Especie (Humano / Alien / Humanoide / Robot / Animal)
- Vista de detalle con imagen, estado, especie, género y origen
- Indicador de estado con color (verde = vivo, rojo = muerto, gris = desconocido)

### Favoritos
- Agregar y quitar favoritos desde cualquier card con el botón ♡ / ♥
- Los favoritos se persisten en la base de datos por usuario
- Página de favoritos con filtro por género y orden por ID (ascendente / descendente)

---

## Estructura del proyecto

```
rick_and_morty/
├── back/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── charactersControllers/
│   │   │   │   ├── getAllCharacters.js   # Paginado + filtros
│   │   │   │   └── getCharDetail.js     # Detalle de un personaje
│   │   │   ├── favoritesControllers/
│   │   │   │   ├── getFavs.js
│   │   │   │   ├── postFav.js
│   │   │   │   └── deleteFav.js
│   │   │   └── usersControllers/
│   │   │       ├── login.js
│   │   │       ├── register.js
│   │   │       └── users.js
│   │   ├── middleware/
│   │   │   └── auth.js                  # Validación de JWT
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Favorite.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   ├── usersRoutes.js
│   │   │   ├── charactersRouters.js
│   │   │   └── favoritesRoutes.js
│   │   ├── helpers/
│   │   │   └── index.js                 # Hash de contraseña + JWT utils
│   │   ├── app.js
│   │   └── db.js
│   ├── index.js
│   └── package.json
│
└── front/
    ├── src/
    │   ├── components/
    │   │   ├── Nav.jsx
    │   │   ├── Form.jsx                 # Login
    │   │   ├── RegisterForm.jsx
    │   │   ├── Cards.jsx                # Home con filtros y paginado
    │   │   ├── Card.jsx
    │   │   ├── Detail.jsx
    │   │   ├── Favorites.jsx
    │   │   └── styles.module.css
    │   ├── redux/
    │   │   ├── store.js
    │   │   ├── actions.js
    │   │   ├── reducer.js
    │   │   └── types.js
    │   ├── App.js
    │   └── index.css
    └── package.json
```

---

## API — Endpoints

Todas las rutas excepto login y register requieren el header:

```
Authorization: Bearer <token>
```

### Usuarios

| Método | Ruta | Body | Descripción |
|---|---|---|---|
| `POST` | `/users/login` | `{ email, password }` | Login. Devuelve `{ token, user }` |
| `POST` | `/users/register` | `{ email, password }` | Registro de nuevo usuario |

### Personajes

| Método | Ruta | Query params | Descripción |
|---|---|---|---|
| `GET` | `/characters` | `page, name, status, gender, species` | Listado paginado con filtros |
| `GET` | `/characters/detail/:id` | — | Detalle de un personaje |

### Favoritos

| Método | Ruta | Body | Descripción |
|---|---|---|---|
| `GET` | `/favorites` | — | Favoritos del usuario autenticado |
| `POST` | `/favorites` | `{ id, name, image, species, gender }` | Agregar favorito |
| `DELETE` | `/favorites/:id` | — | Quitar favorito |

---

## Modelo de base de datos

```
User
├── id          UUID (PK)
├── email       STRING (único)
├── password    STRING (hash HMAC-SHA256)
└── salt        STRING

Favorite
├── id          INTEGER (PK, ID del personaje en la API)
├── name        STRING
├── species     STRING
├── gender      STRING
└── image       STRING

user_favorite (tabla de unión N:M)
├── UserId
└── FavoriteId
```

---

## Seguridad

- Las contraseñas se hashean con **HMAC-SHA256** usando un salt aleatorio de 128 bytes — nunca se almacenan en texto plano.
- Los tokens JWT expiran a los **7 días**.
- Todas las rutas de datos están protegidas por el middleware de autenticación.
- El `userId` siempre se extrae del token verificado en el servidor, nunca del body o query params del cliente.
