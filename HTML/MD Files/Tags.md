# 🌐 HTML Tags Overview

This document serves as a clean and structured explanation of various HTML tags with examples, outputs, and usage tips — including favicon support.

---

## 🏷️ What is an HTML Tag?
An **HTML tag** is a markup entity that defines the structure, meaning, semantics, and formatting of content on a web page.

---

## 🔠 Heading Tags
```html
<h1> to <h6>
```
Used to define headings, where `<h1>` is the most important and `<h6>` the least.

### Example:
```html
<h1>This is an H1</h1>
<h2>This is an H2</h2>
...
<h6>This is an H6</h6>
```

---

## 📛 Should We Use Multiple `<h1>` Tags?
> ❌ Avoid using multiple `<h1>` tags in a single page.
> ✅ Use one `<h1>` to represent the main heading for accessibility and SEO.

---

## 🔗 Anchor Tag `<a>`
Used to create hyperlinks to other pages, emails, phone numbers, bookmarks, etc.

### Example:
```html
<a href="https://www.google.com">Google</a>
<a href="mailto:example@gmail.com">Email</a>
<a href="tel:+918519801753">Phone</a>
```

---

## 📋 Lists
### Unordered List:
```html
<ul>
  <li>Item</li>
</ul>
```
### Ordered List:
```html
<ol>
  <li>Item</li>
</ol>
```
### Description List:
```html
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>
```

---

## 🧾 Table Tag `<table>`
Used to represent tabular data.

### Example:
```html
<table>
  <tr><td>Serial No</td><td>Name</td><td>Age</td></tr>
  <tr><td>1</td><td>Lingi</td><td>64</td></tr>
</table>
```

---

## 🖼️ Image Tag `<img>`
Used to embed images in a webpage.

```html
<img src="image.jpg" alt="Description">
```

- `src` - Path to the image
- `alt` - Alternative text

---

## ✍️ Formatting Tags

| Tag     | Purpose               |
|---------|------------------------|
| `<b>`   | Bold text              |
| `<strong>` | Important text       |
| `<i>`   | Italic text            |
| `<u>`   | Underlined text        |
| `<s>`   | Strikethrough text     |
| `<sup>` | Superscript            |
| `<pre>` | Preserves whitespace   |

---

## 🏗️ Semantic & Structural Tags

### `<aside>`
For content indirectly related to the main content (e.g., sidebars).

### `<footer>`
Defines footer content (e.g., author info, copyright).

```html
<footer>
  <p>© 2024 Example</p>
</footer>
```

### `<article>`
Self-contained content that can be independently reused.

```html
<article>
  <h2>March 3, 2018</h2>
  <p>Rainy day.</p>
</article>
```

### `<section>`
Logical sections of a document with their own heading.

### `<nav>`
Navigation links section.

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
```

---

## 🌟 Favicon Tag
Favicons appear on the browser tab next to the title.

### HTML Code:
```html
<head>
  <title>My Web Page</title>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
```

- Use `.ico`, `.png`, or `.svg` formats
- Suggested size: 16×16 or 32×32 px

---

## ✅ Summary
This HTML demo covered:
- Structure using headings and lists
- Formatting text
- Creating links and inserting images
- Using semantic and structural tags like `<article>`, `<nav>`, `<footer>`
- Adding favicons

---

> 🧠 Tip: Always validate your HTML using tools like [W3C Validator](https://validator.w3.org/)!

