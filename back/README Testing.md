# HW 07: Testing | Integración

## **🕒 Duración estimada**

x minutos

<br />

---

## **😛 Rick & Morty App**

### **📌 INTRO**

🤓 **¡Bienvenido a la última homework del Módulo 3!** 🥳

En esta homework construiremos algunos test para validar que nuestro proyecto esté funcionando correctamente. Te enseñaremos a construir algunos, pero tu puedes crear todos los que gustes.

---

<br />

## **📋 INSTRUCCIONES**

En esta homeword aprenderás a testear las rutas de tu **Back-End**. También te dejaremos información de cómo testear tu **Front-End**, pero esto será un **💪Extra Credit💪**.

1. Asegúrate que en el **`package.json`** de tu proyecto **Back-End**:

   1. Tengas instaladas las siguientes librerías:

      -  jest
      -  supertest

   2. Tengas el siguiente **script**:

      ```bash
         "test": "jest --detectOpenHandles"
      ```

1. Asegúrate de tener instaladas las siguientes librerías en el **`package.json`** de tu proyecto **Front-End**:
   -  @testing-library/jest-dom
   -  @testing-library/react
   -  @testing-library/user-event

---

<br />

## **HOMEWORK | Testing Back-End**

### **👩‍💻 EJERCICIO 01**

1. Dirígete al directorio donde guardes el proyecto Back-End de `Rick & Morty`, ábrelo en tu VSC e ingresa a la carpeta **`/src/test`**.

2. Dentro de esta carpeta crea un archivo con el nombre **index.test.js**. Dentro de este archivo debes importar lo siguiente:

   ```javascript
   const app = require('../app');
   const session = require('supertest');
   const agent = session(app);
   ```

3. Una vez que hayas hecho esto, crea una función **describe** con el mensaje "_Test de RUTAS_".

4. En el callback de este **describe** haremos el testing de todas nuestras rutas! Continua con los siguientes pasos.

<br />

---

### **👩‍💻 EJERCICIO 02 | GET rickandmorty/{id}**

1. Crea un **describe** con el mensaje '**`GET rickandmorty/{id}`**'.

2. En su **callback** tendrás que testear tres cosas:

   1. Primer test:

      -  Crea un **it** con el mensaje '**`Responde con status: 200`**'.

      -  En su **callback** pega el siguiente código:

         ```javascript
         agent.get('/rickandmorty/1').expect(200);
         ```

         > [**NOTA**]: esto nos permitirá validar si esta ruta responde con un status **200** cuando la petición se realiza correctamente.

   2. Segundo test:

      -  Crea un **it** con el mensaje '**`Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"`**'.

      -  Aquí tendrás que volver a copiar el código anterior, pero trabajarás con promesas. Si esta promesa se cumple correctamente tendrás que validar que el resultado contenga (en su propiedad **body**) un objeto con las propiedades correspondientes.

         > [**PISTA**]: podrías obtener las propiedades utilizando el método **keys** de los objetos, y luego hacer una validación individual de cada propiedad con la fución [**`toContain`**](https://jestjs.io/docs/using-matchers#arrays-and-iterables).

   3. Tercer test:

      -  Crea un **it** con el mensaje '**`Si hay un error responde con status: 500`**'.

      -  En su **callback** pega el siguiente código:

         ```javascript
         agent.get('/rickandmorty/IDqueNoExiste').expect(500);
         ```

         > [**NOTA**]: presta atención. Esta vez, a la URL, no le hemos pasado un ID existente. Por lo que estamos forzando a que la ruta tenga un error.

<br />

---

### **👩‍💻 EJERCICIO 03 | Demás rutas**

Hasta ahora haz aprendido a testar una ruta GET. Te invitamos a que continues con este proceso en las demas rutas y valides que todo funcione como debería!

<br />

---

## **💪 EXTRA CREDIT | Testing Front-End**

1. Dirígete a la carpeta **`/src/test`**.

2. Dentro de esta carpeta crea un archivo con el nombre **`index.test.js`**.

3. Te invitamos a que revises los **`Recursos adicionales`** para investigar como testear un **Front-End** con React y Jest.

## **🔎 Recursos adicionales**

-  Documentación [**Matchers From Jest**](https://jestjs.io/docs/using-matchers)
-  Documentación [**React-Jest Testing**](https://testing-library.com/docs/react-testing-library/intro/)
-  Documentación [**Jest - Enzyme**](https://enzymejs.github.io/enzyme/docs/guides/jest.html)

</br >

---

🚀🥳¡FELICITACIONES!🚀🥳 Completaste el M3. Nos vemos en Bases de Datos!
