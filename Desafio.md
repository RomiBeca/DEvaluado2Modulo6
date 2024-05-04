Desafío número #02 - Fecha: 12-04-2024 - Día 4 Introducción a Node.js

Contarás con el siguiente array de servicios:

data/services.data.js

```js
export const services = [
  {
    name: "Web Development",
    description: "We create web applications with the latest technologies.",
    url: "/services/web-development",
  },
  {
    name: "Mobile Development",
    description: "We create mobile applications with the latest technologies.",
    url: "/services/mobile-development",
  },
  {
    name: "DevOps",
    description: "We create CI/CD pipelines with the latest technologies.",
    url: "/services/devops",
  },
  {
    name: "QA",
    description: "We create test cases with the latest technologies.",
    url: "/services/qa",
  },
  {
    name: "UX/UI",
    description: "We create designs with the latest technologies.",
    url: "/services/ux-ui",
  },
  {
    name: "Training",
    description: "We create training with the latest technologies.",
    url: "/services/training",
  },
  {
    name: "Consulting",
    description: "We create consulting with the latest technologies.",
    url: "/services/consulting",
  },
  {
    name: "Outsourcing",
    description: "We create outsourcing with the latest technologies.",
    url: "/services/outsourcing",
  },
];

```

1. Crea un servidor con Express utilizando el motor de plantillas Handlebars. (1 puntos) ✔
2. Crea dos partials, uno para el navbar y otro para el footer. (2 puntos) ✔
3. Crea una página de servicios con un listado de servicios, debes utilizar el array de servicios proporcionado previamente. (2 puntos)✔
4. Crea una página de servicio con la descripción del servicio seleccionado. (2 puntos)❓
5. Crea una página de error 404 en caso de que el servicio no exista. (2 puntos)✔
6. Utiliza archivos estáticos para tus css, js y bootstrap y vincúnlalos a tu layout. (1 puntos)✔

Notas:

- La ruta de services será: `/services`✔
- La ruta para service será: `/services/:service` debes utilizar los query params para renderizar un servicio. (en el array de objetos tienes un campo url que puedes utilizar para los enlaces del frontend)
- Puedes utilizar tus propios estilos en css pero es importante que vincules Bootstrap mediante instalación `npm i bootstrap`, no puedes utilizar CDNs✔
- Sientete libre de utilizar cualquier partials adicional o cualquier nueva funcionalidad que consideres necesaria, pero recuerda que solo se evalúa lo solicitado en el desafío.
