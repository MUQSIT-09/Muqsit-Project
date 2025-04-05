# 🌐 First HTML Project – HTML Basics with Code, Description & Output

This markdown file introduces you to HTML using simple explanations, code snippets, and expected output.

---

## 🧠 What is HTML?

HTML (HyperText Markup Language) defines the **structure** of a webpage — like the skeleton of a body.

### 💻 Code:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello HTML</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### 📆 Output:
**Hello HTML**  
This is a paragraph.

---

## 🎟️ What is an HTML Tag?

HTML **tags** are keywords inside angle brackets `< >`. They tell the browser how to display content.

### 💻 Code:
```html
<h1>This is a heading</h1>
<p>This is a paragraph</p>
```

### 📆 Output:
**This is a heading**  
This is a paragraph

---

## 🧹 What is an HTML Element?

An HTML **element** includes:
- Opening tag
- Content
- Closing tag

### 💻 Code:
```html
<p>This is an HTML element</p>
```

### 📆 Output:
This is an HTML element

---

## 🔖 What is `<!DOCTYPE html>`?

`<!DOCTYPE html>` tells the browser that this document follows HTML5 standards.

### 💻 Code:
```html
<!DOCTYPE html>
```

> 📝 Output: No visible output — it works internally to help the browser render the page correctly.

---

## 🧠 What is `<head>`?

The `<head>` contains **metadata** like title, favicon, charset, styles, scripts, etc.

### 💻 Code:
```html
<head>
  <title>My Webpage</title>
  <meta charset="UTF-8">
</head>
```

> 📝 Output: These are not visible in the browser content area but affect the tab and behavior.

---

## 🖥️ What is `<body>`?

The `<body>` holds all the visible content of the webpage.

### 💻 Code:
```html
<body>
  <h1>Main Content</h1>
  <p>This appears in the browser window.</p>
</body>
```

### 📆 Output:
**Main Content**  
This appears in the browser window.

---

## 🌟 How to Add a Favicon?

A **favicon** is a small icon shown in the browser tab next to the title.

### 💻 Code:
```html
<head>
  <link rel="icon" type="image/png" href="favicon.png">
  <title>My Site</title>
</head>
```

> 📌 Output: A small icon (favicon.png) will show in the browser tab. Make sure the icon exists in your project folder.

---

## 📸 Image Example

### 💻 Code:
```html
<img src="https://via.placeholder.com/100" alt="Example Image">
```

### 📆 Output:
![Example Image](https://via.placeholder.com/100)

---

## 📋 List Example

### 💻 Code:
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### 📆 Output:
- HTML  
- CSS  
- JavaScript

---

## 📊 Table Example

### 💻 Code:
```html
<table border="1">
  <tr>
    <th>Tag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>&lt;p&gt;</td>
    <td>Paragraph tag</td>
  </tr>
  <tr>
    <td>&lt;img&gt;</td>
    <td>Image tag</td>
  </tr>
</table>
```

### 📆 Output:

| Tag    | Description    |
|--------|----------------|
| `<p>`  | Paragraph tag  |
| `<img>`| Image tag      |

---

## ✅ Summary Table

| Concept   | Description                |
|-----------|----------------------------|
| HTML      | Structure of webpage       |
| Tag       | Keyword in angle brackets  |
| Element   | Opening + content + closing|
| Head      | Metadata section           |
| Body      | Visible content section    |
| Favicon   | Small icon in browser tab  |

---

> ✨ Keep exploring more tags like `<a>`, `<div>`, `<span>`, and attributes like `class`, `id`, etc. Practice makes perfect!

