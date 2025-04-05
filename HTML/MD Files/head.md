# HTML Meta Tags, Favicon, and Title - Clean Notes

---

## ✨ Overview
This document explains the purpose and usage of important HTML tags inside the `<head>` section such as:
- Meta tags (character encoding, viewport, compatibility)
- Title tag
- Favicon
- SEO description and keywords
- Linking CSS

Only the `<body>` content is visible to the user, but the `<head>` is vital for SEO, accessibility, responsiveness, and branding.

---

## ✅ Character Encoding
```html
<meta charset="UTF-8">
```
- Sets the character encoding of the document to UTF-8.
- Ensures support for multiple languages and symbols.
- UTF-8 is the standard encoding for web pages.

---

## 🧰 Compatibility Mode
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
- Tells Internet Explorer to use the **latest rendering engine**.
- Helps maintain visual consistency across browsers.

---

## 🌎 Responsive Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Makes the layout responsive to the screen size.
- Especially important for mobile and tablet devices.

---

## 📋 Title Tag
```html
<title>Favicon,Meta,Title</title>
```
- Defines the **title** shown in the browser tab.
- Also used by search engines as the clickable headline.

---

## 🔍 SEO Meta Tags
```html
<meta name="description" content="This website aims to create India's Best Coders">
<meta name="keywords" content="codehelp, Operating System, Computer Science">
```
- `description`: Provides a short summary shown in search engine results.
- `keywords`: Helps define the page content (not very relevant in modern SEO).

---

## 🔧 Linking External CSS
```html
<link rel="stylesheet" href="style.css">
```
- Links the external CSS file for styling the page.

---

## 🌟 Favicon (Shortcut Icon)
```html
<link rel="shortcut icon" href="./logo.png" type="image/x-icon">
```
- Adds a **small icon** in the browser tab.
- Commonly saved as `favicon.ico` or a `.png` image.
- Must be placed in the root directory or a valid path.

---

## 📄 Output (in `<body>`)
```html
<p>The head tag data/content is not visible in the web page, only body tag data is visible in the web page</p>
<p>In the head tag we keep SEO related data is inserted</p>
<h2>Favicon</h2>
<p>For using favicon we can use link tag, we should keep the image inside the root directory in href</p>
<h2>SEO</h2>
<p>Search Engine Optimization: Can be improved/increased by using Meta Tags</p>
```

---

## 🔹 Summary Table
| Tag | Purpose |
|-----|---------|
| `<meta charset="UTF-8">` | Character encoding for multilingual support |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | Use latest browser rendering engine |
| `<meta name="viewport">` | Makes layout responsive |
| `<meta name="description">` | SEO summary for search engines |
| `<meta name="keywords">` | SEO keywords (less used today) |
| `<title>` | Sets browser tab title |
| `<link rel="icon">` | Adds favicon to tab |
| `<link rel="stylesheet">` | Links external CSS |

---

## 🚀 Final Note
- All `<head>` tag content boosts **performance, SEO, responsiveness, and branding**.
- Only `<body>` content is shown to users on the screen.

---

