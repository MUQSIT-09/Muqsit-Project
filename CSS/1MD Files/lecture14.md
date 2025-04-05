## Title: CSS Priority Guide

# CSS Priority Guide

This guide explains how **CSS (Cascading Style Sheets)** rules are applied when multiple styles target the same element. There are four key factors:

## 🔑 Key CSS Priority Factors

### 1. Importance (Origin)

- **Inline styles** (`style` attribute) have the **highest** priority.
- Then come **internal styles** (`<style>` tag in `<head>`).
- Then **external stylesheets** (`<link rel="stylesheet">`).
- **Browser default styles** have the **lowest** priority.

> 📌 **With \*\*\*\*****`!important`**, the rule jumps to the top of the priority list.

### 2. Specificity

- The more **specific** a selector is, the more priority it has.
- Order of specificity:
  - `#id` > `.class` > `tag`

```css
/* Example */
#title {
  color: red; /* Most specific */
}
.title {
  color: green;
}
h1 {
  color: blue; /* Least specific */
}
```

### 3. Source Order

- If two rules have the same specificity, the one that appears **later** in the code wins.

```css
/* Both are p tags (same specificity) */
p {
  color: green;
}
p {
  color: blue; /* This will be applied */
}
```

### 4. Inheritance

- Some properties (like `color`, `font-family`) are **inherited** from parent elements.
- Others (like `margin`, `padding`) are **not inherited**.

```html
<div style="color: red;">
  <p>This will be red</p>
</div>
```

---

## 📝 Summary Priority Order

If **no** `!important` is used:

```
Inline > Internal > External > Browser default
```

If **`!important`** is used:

```
!important > Inline > Internal > External
```

In the case of tie (same specificity), **the last declared rule wins**.

---

## 🧪 Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS</title>
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1> CSS it depends on four key factors:</h1>
    <pre>
        1.Importance (Origin)
          Inline styles (style attribute) > Internal styles External styles (<link> tag)
          Browser default styles have the lowest priority.
        2.Specificity
          Specific selectors (like IDs) take precedence over less specific ones (like classes or element selectors).
          Example: #id > .class > tag
        3.Source Order
          When selectors have the same specificity, the one declared last in the code will be applied.
        4.Inheritance
          Some properties (like text color and font) are inherited from parent elements, while others (like margin and padding) are not.
    </pre>
    <pre>
        If you keep important then it is given the most priority
        Otherwise the order is:
        Inline > Internal > External
        Otherwise it also checks the source code and which is on the last of the code that is having more priority.
    </pre>
</body>
</html>
```

---

## 🎯 CSS Selectors Guide

### 🔹 Element Selector

- Selects elements by their tag name.
- Example:

```css
p {
  color: blue;
}
```

### 🔹 ID Selector

- Targets a unique element with a specific `id`.
- Use `#` before the id name.
- Example:

```css
#header {
  background-color: yellow;
}
```

```html
<h1 id="header">Welcome</h1>
```

### 🔹 Class Selector

- Can be used on multiple elements.
- Use `.` before the class name.
- Example:

```css
.card {
  border: 1px solid #ccc;
  padding: 10px;
}
```

```html
<div class="card">Box 1</div>
<div class="card">Box 2</div>
```

### 🔹 Group Selector

- Apply the same styles to multiple elements by separating them with commas.
- Example:

```css
h1, h2, p {
  font-family: Arial, sans-serif;
}
```

---

## ✍️ Font and Colors in CSS

### 🌟 Font Styling

- Use Google Fonts by importing in the `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
```

- Apply in CSS:

```css
p, pre {
  font-style: italic;
  font-size: 20px;
  font-family: "Oswald", serif;
  font-weight: 100;
  line-height: 32px;
}
```

- **Fallback fonts**:

```css
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
```

### 🎨 Color Techniques

1. **Named Colors**
   ```css
   color: red;
   background-color: yellow;
   ```

2. **RGB / RGBA**
   ```css
   background-color: rgb(24, 29, 181);
   background-color: rgba(7, 121, 66, 1);
   ```

3. **Hexadecimal**
   ```css
   background-color: #ad0505;
   ```

4. **HSL / HSLA**
   ```css
   background-color: hsl(0, 100%, 50%);
   background-color: hsla(240, 100%, 50%, 0.3);
   ```

### 🎯 HSL Values Breakdown

```text
1. Hue: 0–360 (0 = red, 120 = green, 240 = blue)
2. Saturation: 0% (gray) to 100% (full color)
3. Lightness: 0% (dark) to 100% (light)
```

> ✅ **HSLA** adds transparency with alpha from 0.0 to 1.0

---

## 🌐 HTML Example with Favicon

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Font And Colors</title>
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
</head>
<body>
    <h1>Font & Colors</h1>
</body>
</html>
```

✅ **Tip**: Use consistent units (`px`, `em`, `rem`) and modern color formats (`rgba`, `hsl`) for better readability and control.

