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

---

## 🗃️ Estructura del repositorio

```
├── index.html          → Menú principal con enlaces a todos los ejercicios
├── ejercicio1.html
├── ejercicio2.html
├── ...
├── ejercicio10.html
├── css/
│   └── ejercicio10.css
└── js/
    └── ejercicio10.js
```

---

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


