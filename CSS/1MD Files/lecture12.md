---

## Title: CSS Priority Guide

# CSS Priority Guide

This guide explains how **CSS (Cascading Style Sheets)** rules are applied when multiple styles target the same element. There are four key factors:

## 🔑 Key CSS Priority Factors

### 1. Importance (Origin)

- **Inline styles** (`style` attribute) have the **highest** priority.
- Then come **internal styles** (`<style>` tag in `<head>`).
- Then **external stylesheets** (`<link rel="stylesheet">`).
- **Browser default styles** have the **lowest** priority.

> 📌 **With ****`!important`**, the rule jumps to the top of the priority list.

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

If **no ****`!important`** is used:

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

✅ **Tip**: Use browser DevTools (Inspect Element) to check which CSS rule is applied and why.

