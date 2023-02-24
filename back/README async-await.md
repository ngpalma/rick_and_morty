# HW 06: AsyncAwait | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **💻 Rick & Morty App**

### **📝 INTRO**

En esta homework vamos a seguir trabajando en nuetra App de Rick & Morty del lado del servidor. En base a las rutas asincrónicas ya creadas, vamos a pasarlas de promesas a AsyncAwait.

Las rutas que tenemos creadas hasta el momento son:

-  GET onSearch
-  GET Detail
-  GET favorites
-  POST favorites
-  DELETE favorites

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1**

### **GET Search**

1. Dirígete a tu carpeta **`controllers`** y modifica la función **`getCharById`** de modo tal que utilices async/await y no promesas.

2. Para manejar correctamente el error, envuelve el contenido de esta función en un **try-catch** en el caso de que la promesa falle, envuelve el código dentro del bloque try-catch.

<br />

---

### **👩‍💻 EJERCICIO 2**

### **GET Detail**

1. Dirígete a tu carpeta **`controllers`** y modifica la función **`getCharDetail`** de modo tal que utilices async/await y no promesas.

2. Para manejar correctamente el error, envuelve el contenido de esta función en un **try-catch** en el caso de que la promesa falle, envuelve el código dentro del bloque try-catch.

<br />

---

### **👀 COMPROBEMOS...**

Levanta el servidor con el comando:

```bash
    npm start
```

Una vez levantado, verifica lo siguiente:

</br >

### **FRONTEND**

### **ACTIONS**

Haremos un par de cambios en el lado frontend:

1. La action `addFavorites`, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que envíe el personaje favorito al endpoint con el método POST **http://localhost:3001/rickandmorty/fav**.

2. La action `removeFavorites`, ahora debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que elimine el personaje favorito con el método DELETE al endpoint **http://localhost:3001/rickandmorty/fav/:id**.

3. Crea una action `getFavorites`, debe ser una función asíncrona, promisificada con async/await, manejando errores con try/catch que solicite el personaje favorito con el método GET al endpoint **http://localhost:3001/rickandmorty/fav**.

4. Levanta también tu aplicación en **http://localhost:3000** para ver tu aplicación Rick & Morty funcionando completamente.

---

</br >

## **🚨 A TENER EN CUENTA**

Si tu servidor no está levantado, o si los links no fueron bien escritos, tu aplicación no funcionará correctamente.

</br >

---

¡Felicitaciones! Ahora tienes una comunicación front-back completa!🥳🥳
