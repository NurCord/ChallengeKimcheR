# Desafío para Software Engineers

Nombre postulante: Nuria Candela Córdoba 

Link a la app en producción: [CountrySearch](https://challenge-kimche-r.vercel.app/)

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Contact](#contact)

## Technologies

---

A list of technologies used within the project:

* [React](https://es.reactjs.org/): Version 16.13.1
* [Styled Components](https://styled-components.com/): Version 5.3.5
* [graphql](https://es.redux.js.org/): Version 16.6.0
* [country-flags-svg](https://www.npmjs.com/package/country-flags-svg): Version 1.1.6
* [Apollo Client](https://www.apollographql.com/docs/react/): Version 3.6.9

---

## Installation

---

A little intro about the installation.

```
$ git clone https://github.com/NurCord/ChallengeKimcheR.git
$ cd ../path/to/the/file/ChallengeKimcheR
$ npm install
$ npm start
```

## Contact

---

<ul>
  <li>
    <label>Nuria Candela Córdoba</label>
    <a href="https://github.com/NurCord">GitHub</a>
    <a href="https://www.linkedin.com/in/nuria-candela-cordoba-a14135224/">LinkedIn</a>
  </li>
</ul>

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

Primero lo que haría es usar el modelo relacional, en donde extraería los datos relevantes, cada tabla con su respectiva Primary key (la cual debe ser unica por cada fila), utilizaria campos con datos booleanos dependiendo la asistencia, utilizaria tablas como una de Usuario con sus datos y otra con el mes dia y año, las uniria en una tabla intermedia, en donde haría las peticiones lo mas exactas posibles para acortar el rango de busqueda y optimizar el tiempo. Tambien haría una limpieza cada año y solo dejaria un porcentaje del mismo.
