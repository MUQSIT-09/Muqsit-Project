# Display Property in CSS

## What is the Display Property?
The **display** property in CSS defines how elements are displayed (rendered) on the web page. It determines the layout behavior of an element—whether it will behave as a block, inline, or something in between.

---

## Common Display Types

### 1. Block Elements
Block elements start on a new line and stretch the full width available.

**Characteristics:**
- Starts on a new line.
- Takes full width of the container.
- Custom `width` and `height` **are respected**.
- Custom `margin` and `padding` **are respected**.

**Example:**
```html
<div>This is a block element</div>
<p>This is also a block element</p>
```

---

### 2. Inline Elements
Inline elements do not start on a new line and only take up as much width as necessary.

**Characteristics:**
- Flows with text on the same line.
- `width` and `height` are **not respected**.
- `margin` and `padding` are **only respected horizontally**.

**Example:**
```html
<span>This is an inline element</span>
```

---

### 3. Inline-Block
A hybrid of inline and block:

**Characteristics:**
- Flows inline (like `inline`).
- Allows setting `width`, `height`, `margin`, and `padding` (like `block`).

**Example:**
```html
<span style="display: inline-block; width: 150px; height: 80px; border: 1px solid blue;">Box</span>
```

---

## Box-Sizing Property

### box-sizing: border-box (Best Practice)
- Includes `padding` and `border` inside the defined width and height.
- Prevents elements from growing beyond intended size.

**Example:**
```css
* {
    box-sizing: border-box;
}
```

---

## Real Example from Code:
```html
<div>Welcome To CodeHunters</div>
<div>Welcome To CodeHunters2.0</div>

<span>Welcome To CodeHunters</span>
<span>Welcome To CodeHunters2.0</span>
```

---

## Best Practices:
- Use `border-box` to make element sizing predictable.
- Use `inline-block` when you need inline layout with block features.
- Reset default browser styles using universal selector `* { margin: 0; padding: 0; }`

---

## Favicon Usage (for HTML Head)
```html
<link rel="icon" type="image/png" href="favicon.png">
```
Replace `favicon.png` with your actual file path.

---

## Summary Table
| Display Type    | Starts New Line | Custom Width/Height | Custom Margin/Padding |
|-----------------|-----------------|----------------------|------------------------|
| Block           | Yes             | Yes                  | Yes                    |
| Inline          | No              | No                   | Only horizontal        |
| Inline-block    | No              | Yes                  | Yes                    |

---

> 💡 Tip: Always inspect your elements using browser dev tools to understand their display behavior in real-time.

