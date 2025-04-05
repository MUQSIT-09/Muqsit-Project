# HTML Tags Explanation and Code Walkthrough

This Markdown file contains a structured explanation of HTML tags used in the provided code, including descriptions, key examples, and best practices. It also includes favicon integration notes.

---

## 🔖 **Document Title**

```html
<title>HTML Tags-2</title>
```

Used to define the title of the HTML document, which appears in the browser tab.

---

## 🧱 **Div Tag**

```html
<div class="container" style="background-color: antiquewhite;">This is one of the div</div>
```

- **div** is a non-semantic, block-level tag.
- It is used as a container to group elements.
- Requires CSS for styling and layout changes.

> ✅ It does not affect the layout until styled.

---

## 📦 **Types of Elements**

```html
<ul>
    <li>Block Elements</li>
    <li>Inline Elements</li>
</ul>
```

- These are the two main types of HTML elements.

### 🔳 Block Elements

```html
<p>Paragraph is a block element</p>
```

- Takes full width.
- Starts on a new line.
- Examples: `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<li>`

### 🧬 Inline Elements

```html
<span style="background-color:antiquewhite;">This is My 1st span</span>
<span style="background-color:aquamarine">This is the 2nd span tag</span>
```

- Only occupies space of its content.
- Remains inline with other elements.
- Examples: `<span>`, `<a>`, `<strong>`

### 🔄 Conversion

```css
/* Convert inline to block */
display: block;

/* Convert block to inline */
display: inline;
```

> ✅ Use CSS `display` property to switch between inline/block.

---

## 🧭 **Nav Tag**

```html
<nav style="display: block;">
    <ul style="list-style: none;">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Login</a></li>
    </ul>
</nav>
```

- Semantic tag to group navigational links.
- Usually contains links for routing between pages or within a single page.

---

## 🔗 **Anchor Tags**

```html
<a href="https://www.thecodehelp.in">Chalo Code Help Par</a><br>
<a href="mailto:abdulmuqsit704@gmail.com">E-Mail</a><br>
<a href="tel:8519801753">Call Me</a>
```

- Used for hyperlinking to:
  - External website
  - Email address
  - Telephone number

---

## 🌟 **Common Mistakes to Avoid**

- Wrapping `<ul>` inside a `<p>`: **Not valid HTML**.
- Closing tags mismatch:

```html
<span> ... </span></span> <!-- Extra closing tag -->
```

- Using dots in class names (e.g., `class="container1.0"`): not ideal for CSS.

---

## 🌐 **Favicon Integration**

To add a favicon:

```html
<head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
```

- Save a small image (preferably 16x16 or 32x32) as `favicon.ico` in the project root.
- You can also use PNG or SVG:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

## ✅ Best Practices

- Use semantic tags (`<nav>`, `<header>`, `<footer>`) for better accessibility.
- Keep class names simple and consistent.
- Always close your tags properly.
- Use external CSS for cleaner code.

---



