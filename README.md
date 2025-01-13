# MeLi Challenge

## Descripción

Aplicación web que consume la API pública de [Rick and Morty](https://rickandmortyapi.com/documentation/) para mostrar información detallada de los personajes de la serie. La aplicación incluye las siguientes funcionalidades principales:

- Listado de personajes: Los usuarios pueden explorar una lista de personajes obtenidos desde la API, con detalles como nombre, imagen, especie y estado.

- Detalle de personaje: Los usuarios pueden clickear un personaje y acceder al detalle del mismo, con detalles como nombre, imagen, especie, tipo, estado, género, origen, locación y un listado de episodios en el que dicho personaje fue parte. Cada uno de los episodios cuenta con su correspondiente nombre, número de episodio y fecha en que fue trasmitido por primera vez.

- Favoritos: Implementé una funcionalidad que permite a los usuarios marcar y desmarcar personajes como favoritos. Estos se visualizan en una sección dedicada para una experiencia personalizada.

- Filtrado y búsqueda: Desarrollé una barra de búsqueda la cual permite realizar la búsqueda de personajes a través de su nombre, a su vez, implementé dos filtros desplegables los cuales permiten realizar el filtrado de un personaje por su estado y/o especie. Para llevar a cabo la sincronización y persistencia, mientras la sesión está activa, se utilizó un manejador de estados.

- Persistencia de datos: Los personajes marcados como favoritos se almacenan localmente utilizando el LocalStorage del navegador, garantizando que la lista de favoritos se mantenga incluso al recargar la página o cerrar y reabrir la aplicación.

- Diseño responsivo: La interfaz se desarrolló siguiendo principios de diseño responsivo para asegurar una experiencia óptima en distintos dispositivos. Se utilizó metodología [BEM](https://getbem.com/introduction/) para una mayor claridad, organización y estructuración.

## Estructura y Dependencias.

La arquitectura del proyecto se basa en una arquitectura en capas, donde las capas son una separación arbitraria donde separamos nuestros componentes en grupos basados en su tipo.

Para el manejo de las tecnologías, se utilizó:

- TypeScript.
- Vite como empaquetador del proyecto.
- React como librería JavaScript.
- React Router para la generación de rutas dinámicas y estáticas.
- Zustand para el manejo de estado.
- Tanstack/React-Query para fetchear data.
- react-spinners como dependencia externa UI.
- Jest y React Testing Library para test unitarios.

## Instalación.

- Desde la terminal ejecutar el siguiente comando:

```bash
git clone git@github.com:FerDR89/rick-challenge.git
```

- En la raíz del directorio ejecutar el siguiente comando:

```bash
npm install
```

## Ejecución.

Para ejecutar el proyecto de manera local, es necesario ejecutar en la raíz del directorio el siguiente comando:

```bash
npm run dev
```

## Test.

Para ejecutar los test, es necesario ejecutar en la raíz del directorio el siguiente comando:

```bash
npm run test
```
