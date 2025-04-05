# CSS Size Units

## 📏 Percentage (%)
- **Relative to parent element.**
- Useful for responsive design.

```css
.box {
  width: 50%; /* 50% of its parent width */
}
```

### Example:
```html
<div class="parent">
  <div class="child">Child</div>
</div>
```

---

## 🖥 Viewport Units (vw, vh)
- `vw`: 1% of the **viewport width**.
- `vh`: 1% of the **viewport height**.

### Example:
```css
.container {
  width: 50vw; /* 50% of viewport width */
  height: 100vh; /* 100% of viewport height */
}
```

---

## 🔡 EM & REM Units

### EM (Relative to parent font size)
- If parent font-size is `10px`, then `1em = 10px`
- Scales **with nesting**.

### REM (Relative to root HTML font size)
- Based on `html` tag's font-size.
- Avoids compounding issues.

### Example:
```css
html { font-size: 16px; }

.box { font-size: 2em; } /* relative to parent */

#firstpara {
  font-size: 5rem; /* 5 * 16 = 80px */
}
```

---

## 🧮 Pixels (px)
- Absolute unit, fixed in size.
- Not responsive.

---

## 🧩 Physical vs Logical Pixels

### Physical Pixels
- Actual dots on screen.
- Fixed by device resolution (e.g. 1920x1080).

### Logical Pixels
- Scaled for web by browsers for consistency.
- A 100px CSS element may use 200+ physical pixels on high-DPI displays.

#### 📐 Formula:
```
Logical Pixels = Physical Pixels / Device Pixel Ratio (DPR)
```

---

## 🔍 PPI vs GPI

### PPI (Pixels Per Inch)
- Used in **digital screens**.
- Higher = Sharper images.
- e.g. iPhone ~326 PPI

### GPI (Grids Per Inch)
- Used in **printing, scanning, CAD**.
- Higher = More precision in print/scan.
- e.g. PCB design may use 10 GPI.

---

## ✅ Best Practices
- Use `em` or `rem` for font sizing.
- Use `%`, `vw`, `vh` for layout flexibility.
- Combine relative units for responsiveness.
- Avoid using only `px` for modern responsive designs.

---

### Fun Fact 💡
A 1em inside a 2em element becomes 2x the base size!
So be mindful of **nested scaling** when using `em`.

---

Want a cheat sheet image for these units? Just say the word! 😄

