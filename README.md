# 🌐 Ejercicios de Programación Web

Repositorio con una serie de ejercicios prácticos desarrollados con **HTML**, **CSS** y **JavaScript**, como parte del curso de Programación Web.

---
 
## 📋 Descripción de la actividad

Este repositorio reúne 10 ejercicios progresivos que abarcan desde la estructura básica de HTML5 hasta la creación de una calculadora funcional con JavaScript, pasando por formato de texto, enlaces, imágenes, secciones semánticas, listas, tablas y formularios accesibles.

---

## 🗂️ Ejercicios

### 📝 Ejercicio 1 — Mi Primera Página HTML ("Hola Mundo")
**Objetivo:** Crear una página HTML básica con el mensaje "¡Hola Mundo!" y alojarla en el servidor local XAMPP, aplicando la estructura mínima de HTML5.

**Conceptos clave:**
- `<!DOCTYPE html>`: declara la versión de HTML (HTML5).
- `<html>`: elemento raíz.
- `<head>`: metadatos de la página.
- `<meta charset="UTF-8">`: permite usar caracteres especiales (ñ, á, emojis).
- `<title>`: define el título en la pestaña del navegador.
- `<body>`: contenido visible.
- `<h1>` y `<p>`: encabezados y párrafos (semántica básica).

**Requisitos previos:** XAMPP instalado, servidor Apache iniciado, Visual Studio Code y un navegador web.

---

### 📝 Ejercicio 2 — Párrafos y Formato Básico
**Objetivo:** Usar `<p>`, `<strong>`, `<em>` y saltos de línea.

**Conceptos clave:**
- `<p>`: define un párrafo de texto (bloque separado).
- `<strong>`: texto importante (negrita semántica).
- `<em>`: texto con énfasis (cursiva semántica).
- `<br>`: salto de línea (sin margen adicional).

---

### 📝 Ejercicio 3 — Enlaces Simples
**Objetivo:** Crear enlaces externos y anclas.

**Conceptos clave:**
- `<a href="url">`: crea hipervínculos.
- `target="_blank"`: abre el enlace en una pestaña nueva.
- `target="_self"`: abre el enlace en la misma pestaña (valor por defecto).

---

### 📝 Ejercicio 4 — Imágenes Básicas
**Objetivo:** Insertar imágenes con atributos.

**Conceptos clave:**
- `<img>`: inserta una imagen (etiqueta autocerrada).
- `src`: ruta de la imagen (ej: `img/paisaje.jpg`).
- `alt`: texto alternativo (accesibilidad y SEO).
- `width`: ancho en píxeles (opcional).

---

### 📝 Ejercicio 5 — Combinando Texto y Enlaces
**Objetivo:** Integrar lo aprendido en los ejercicios anteriores.

**Conceptos clave:**
- `<img>` dentro de `<p>`.
- `<a>` con atributo `href` absoluto (URL completa) y texto descriptivo.

---

### 📝 Ejercicio 6 — Secciones Semánticas Básicas
**Objetivo:** Usar `<header>`, `<footer>` y `<section>`.

**Conceptos clave:**
- `<header>`: cabecera de la página o sección.
- `<section>`: contenido temático agrupado.
- `<footer>`: pie de página (info de contacto, copyright).

---

### 📝 Ejercicio 7 — Listas Anidadas + Enlaces
**Objetivo:** Crear una página de receta usando listas anidadas.

**Conceptos clave:**
- `<ul>`, `<ol>`: listas desordenadas/ordenadas.
- Anidar listas: útil para menús o índices.

---

### 📝 Ejercicio 8 — "Horario de Clases"
**Objetivo:** Diseñar un horario semanal con tablas, estructurando datos con `<thead>` y `<tbody>`.

**Conceptos clave:**
- `<table>`, `<tr>`, `<td>`, `<th>`: filas, celdas y encabezados.
- `<thead>` y `<tbody>`: semántica para datos tabulares.

---

### 📝 Ejercicio 9 — Formulario de Contacto
**Objetivo:** Crear un formulario funcional y accesible, aplicando elementos HTML5 avanzados, CSS externo y conceptos de usabilidad y validación.

**Elementos HTML implementados:**

| Etiqueta/Atributo | Uso en el ejercicio | Teoría |
|---|---|---|
| `<form>` | Contenedor principal del formulario | Métodos (GET/POST), atributo `action` |
| `<fieldset>` + `<legend>` | Agrupar campos temáticos (ej. "Datos Personales") | Mejora accesibilidad y organización |
| `<input>` (tipos variados) | `type="text"`, `email`, `tel`, `date`, `number`, `checkbox`, `radio` | Validación automática con `type="email"` o `required` |
| `<textarea>` | Para mensajes largos | Atributos `rows`, `cols`, y `placeholder` |
| `<select>` + `<option>` | Menú desplegable (ej. "¿Cómo nos conociste?") | Agrupación con `<optgroup>` |
| `<label>` | Asociar texto descriptivo a cada campo (`for="id"`) | Crucial para accesibilidad (screen readers) |
| `<button type="submit">` | Botón de envío | Diferencia entre `type="submit"` y `type="button"` |
| `<datalist>` (opcional) | Sugerencias de autocompletado (ej. ciudades) | Alternativa moderna a `<select>` |

**Validación:**
- HTML5: uso de `required`, `pattern` (para regex), y `minlength`/`maxlength`.
- CSS: pseudoclases `:valid`, `:invalid` y `:focus` para feedback visual.

**Conceptos adicionales de CSS:**
- **Variables CSS (`:root`):** mantienen consistencia visual (si cambias `--color-primario`, se actualiza en todos los elementos que lo usen) y facilitan temas oscuros/claros.
- **`box-sizing: border-box`:** evita que el `padding` y `border` de un elemento excedan el ancho/alto definido.
- **Unidades relativas (`fr`, `rem`):** `fr` se usa en Grid para divisiones flexibles (ej. `1fr 1fr` = 2 columnas iguales); `rem` es relativo al tamaño de la raíz (`html`), mejor para accesibilidad que `px`.
- **Pseudoclases (`:hover`, `:focus`):** dan feedback visual al usuario al interactuar con elementos.

---

### 🌡️ Ejercicio 10 — Conversor de Celsius a Fahrenheit
**Objetivo:** Desarrollar una calculadora sencilla que convierta grados Celsius a Fahrenheit usando HTML y JavaScript, mostrando el resultado sin recargar la página.

**Funcionamiento:**
1. El usuario ingresa un valor en grados Celsius en un campo de texto.
2. Al hacer clic en el botón **"Convertir"**, se calcula el equivalente en Fahrenheit con la fórmula:

   **F = (C × 9/5) + 32**

3. El resultado se muestra en una caja de texto con la propiedad `readonly`, evitando que el usuario lo modifique manualmente.

**Validaciones:**
- El campo no puede estar vacío.
- El valor ingresado debe ser numérico.

**Ejemplo de uso:** al ingresar `25` y presionar "Convertir", el resultado mostrado es `77°F`.

## Ejercicio 11: Conversor de Kilómetros a Millas

**Objetivo:** Desarrollar una aplicación web que convierta una distancia en kilómetros a millas usando HTML y JavaScript.

**Descripción del problema:**
El usuario ingresa una distancia en kilómetros en un campo de texto. Al presionar el botón "Convertir", la página calcula el equivalente en millas y lo muestra en una caja de texto `readonly` (no editable manualmente).

**Fórmula utilizada:**
```
M = K × 0.621371
```
Donde `M` es la distancia en millas y `K` es la distancia en kilómetros ingresada.

**Elementos implementados:**
- Campo de entrada para los kilómetros.
- Botón "Convertir".
- Caja de texto `readonly` para mostrar el resultado en millas.
- Validación en JavaScript: el campo no debe estar vacío y el valor debe ser numérico antes de calcular.

**Ejemplo de flujo de uso:**
1. El usuario ingresa `10` en el campo de kilómetros.
2. Al hacer clic en "Convertir", aparece `6.21371` millas en la caja readonly.

---

## Ejercicio 12: Conversor de Pesos Mexicanos (MXN) a Dólares (USD)

**Objetivo:** Crear una calculadora web que convierta pesos mexicanos a dólares estadounidenses usando una tasa de cambio predefinida.

**Descripción del problema:**
El usuario ingresa una cantidad en MXN. Al hacer clic en "Convertir", JavaScript aplica la tasa de cambio y muestra el resultado en USD en una caja `readonly`.

**Fórmula utilizada:**
```
USD = MXN × tasa_de_cambio
```
Se usa una tasa de ejemplo de `0.055` (equivalente aproximado a 1 USD = 18.18 MXN).

**Elementos implementados:**
- Campo de entrada para la cantidad en pesos mexicanos.
- Botón "Convertir".
- Caja de texto `readonly` para mostrar el resultado en dólares.
- Validaciones: campo no vacío, valor numérico y positivo.

**Ejemplo de flujo de uso:**
1. El usuario ingresa `500` en el campo de pesos mexicanos.
2. Al hacer clic en "Convertir", aparece `27.50` USD en la caja readonly.

---

## Ejercicio 13: Verificador de Edad para Votar

**Objetivo:** Desarrollar una calculadora web que determine si una persona puede votar según su edad.

**Descripción del problema:**
El usuario ingresa su edad. Al hacer clic en "Verificar", JavaScript evalúa si es mayor o igual a 18 años y muestra el mensaje correspondiente en una caja `readonly`.

**Condición de validación:**
- Edad ≥ 18 → `"Puedes votar"`
- Edad < 18 → `"No puedes votar"`

**Elementos implementados:**
- Campo de entrada para la edad.
- Botón "Verificar".
- Caja de texto `readonly` para mostrar el resultado.
- Validaciones: campo no vacío y valor numérico positivo.

**Ejemplo de flujo de uso:**
1. El usuario ingresa `20` en el campo de edad → resultado: `"Puedes votar"`.
2. El usuario ingresa `16` en el campo de edad → resultado: `"No puedes votar"`.

---

## Ejercicio 14: Estadísticas de un Conjunto de Números (Arreglos)

**Objetivo:** Desarrollar una página web que, a partir de una lista de números ingresados por el usuario, calcule el número mayor, el menor y el promedio utilizando arreglos en JavaScript.

**Parte teórica: Arreglos y métodos en JavaScript**

Un **arreglo** es una estructura de datos que permite almacenar múltiples valores en una sola variable. Se crean con corchetes `[]`, por ejemplo: `let numeros = [10, 20, 30];`.

Métodos utilizados en este ejercicio:

| Método | Uso |
|---|---|
| `split(",")` | Divide la cadena de texto ingresada en un arreglo de subcadenas, usando la coma como delimitador. |
| `map(Number)` | Convierte cada elemento del arreglo (texto) a tipo número. |
| `Math.max(...arreglo)` | Devuelve el valor más grande del arreglo (usando spread operator `...` para pasar los elementos como argumentos). |
| `Math.min(...arreglo)` | Devuelve el valor más pequeño del arreglo. |
| `reduce()` | Suma todos los elementos del arreglo para luego calcular el promedio dividiendo entre la cantidad de elementos. |

**Descripción del problema:**
El usuario ingresa varios números separados por comas. Al hacer clic en "Calcular", JavaScript separa el texto en un arreglo, lo convierte a números y calcula el mayor, el menor y el promedio, mostrando cada resultado en su propia caja `readonly`.

**Elementos implementados:**
- Campo de entrada para los números (separados por comas).
- Botón "Calcular".
- Tres cajas de texto `readonly`: número mayor, número menor y promedio.
- Validaciones: campo no vacío y valores numéricos válidos.

**Ejemplo de flujo de uso:**
1. El usuario ingresa `10, 20, 30, 40, 50`.
2. Al hacer clic en "Calcular": Mayor = `50`, Menor = `10`, Promedio = `30`.

---

## Ejercicio 15: Estadísticas de Calificaciones de Estudiantes (Objetos)

**Objetivo:** Desarrollar una página web que, a partir de los datos de varios estudiantes (nombre y calificación), calcule el promedio general e identifique al estudiante con la calificación más alta y más baja, utilizando objetos en JavaScript.

**Parte teórica: Objetos en JavaScript**

Un **objeto** es una estructura de datos que almacena una colección de propiedades, cada una formada por un par clave-valor. Son útiles para representar entidades con varios atributos, como un estudiante con su nombre y calificación:

```js
let estudiante = {
  nombre: "Juan",
  calificacion: 85
};
```

Se puede acceder a sus valores con notación de punto (`estudiante.nombre`) o de corchetes (`estudiante['calificacion']`).

En este ejercicio, cada estudiante se representa como un objeto, y todos los objetos se almacenan dentro de un arreglo:

```js
let estudiantes = [
  { nombre: "Juan", calificacion: 85 },
  { nombre: "Ana", calificacion: 92 },
  { nombre: "Luis", calificacion: 78 }
];
```

**Descripción del problema:**
El usuario ingresa los datos de varios estudiantes. Al hacer clic en el botón correspondiente, JavaScript recorre el arreglo de objetos para calcular la calificación promedio, y determina el nombre del estudiante con la calificación más alta y más baja, mostrando cada resultado en una caja `readonly`.

**Elementos implementados:**
- Campos de entrada para nombre y calificación de cada estudiante.
- Botón para calcular resultados.
- Cajas de texto `readonly` para mostrar: promedio general, estudiante con la calificación más alta, y estudiante con la calificación más baja.

**Ejemplo de flujo de uso:**
1. Se ingresan los estudiantes: Juan (85), Ana (92), Luis (78).
2. Al calcular: Promedio = `85`, Más alta = `Ana`, Más baja = `Luis`.


## 🔗 Cómo ver el proyecto

| Recurso | Enlace |
|---|---|
| 💻 Repositorio (código) | https://github.com/22161260-source/EJERCICIOS-1-10 |
| 🌍 Página publicada (GitHub Pages) | https://22161260-source.github.io/EJERCICIOS-1-10/ |

---

## 🛠️ Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 👩‍💻 Autora

**Ivonee Montserrat Vargas Vicente**


