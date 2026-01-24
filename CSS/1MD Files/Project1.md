# Recipe Webpage - HTML & CSS Concepts

This Markdown file contains **key concepts, explanations, and best practices** for the recipe webpage. Perfect for quick revision.

---

## What is the Recipe Webpage?
The webpage displays **food items** (e.g., Noodles, Nan), their **ingredients**, **recipe steps**, and provides **interactive clickable images**.  
It uses HTML for **structure** and CSS for **layout, styling, and interactivity**.

---

## HTML Concepts

### 1. Container
- `.container` wraps the entire page.
- Centers content and sets **full width** for layout.
- Background uses a **gradient** for visual appeal.

---

### 2. Navigation (Navbar)
- `<nav>` contains **logo (`#navlogo`)** and **links (`.navitems a`)**.
- Uses **flexbox** (`display: flex`) for horizontal layout.
- `justify-content: space-around` distributes links evenly.
- Logo is styled with **large font size** and colored text.

---

### 3. Recipe Items
- Each recipe is wrapped in `.item`:
  - **`.leftbox`** → Text content (title, ingredients, recipe steps).
  - **`.rightbox`** → Image with **hover overlay**.
- **Flexbox** aligns left and right sections side by side.
- `.leftbox` uses **column flex-direction** and spacing between headings.

---

### 4. Ingredients and Recipe Lists
- Ingredients → unordered list (`<ul>` with `.Ingredientsbox` class).
- Recipe steps → ordered list (`<ol>` with `.Recipebox` class).
- Lists are styled with **font-size** for readability.

---

### 5. Image Overlay
- `.overlay` is **hidden by default** (`opacity: 0`).
- Appears on hover using `.rightbox:hover .overlay` (`opacity: 1`).
- Uses **absolute positioning** inside relative parent `.rightbox`.
- Flexbox centers overlay text vertically and horizontally.
- Adds **rounded corners** and semi-transparent background.

---

### 6. Footer
- `<footer>` contains `.footerbox` and `#footerpara`.
- Background matches navbar gradient.
- Text is centered and colored **azure** for consistency.

---

## CSS Concepts

### 1. Global Styles
- `* { margin:0; padding:0; box-sizing:border-box; }` → Reset and box-sizing.
- `a { text-decoration:none; }` → Remove link underlines.

---

### 2. Layout with Flexbox
- `#navlist` → `display: flex; justify-content: space-around` for navbar links.
- `.item` → `display: flex; justify-content: space-around; align-items: center` for recipe items.
- `.leftbox` → `flex-direction: column; gap: 20px` for vertical spacing.

---

### 3. Container & Content Box
- `.container` → full width, gradient background.
- `.contentbox` → centered, column layout, padding, **box-shadow** for elevation.
- `gap` between `.item`s ensures spacing.

---

### 4. Images & Hover Effects
- `.rightbox img` → fixed width and height, rounded corners, smooth transition (`transition: all 0.6s linear`).
- `.rightbox:hover` → **scale effect** (`transform: scale(1.1)`).
- `.overlay` → semi-transparent background, rounded corners, hidden by default, appears on hover.
- `.overlay span` → text centered, colored azure.

---

### 5. Typography
- `.leftbox h2` → title font-size: 2rem.
- `.Ingredientsbox` & `.Recipebox` → font-size: 1.2rem.

---

### 6. Navbar & Footer Styling
- `.navcontainer` → gradient background, flexbox for centering content.
- `.footerbox` → same gradient as navbar for consistency.
- Text in navbar and footer → **large, colored (azure), readable**.

---

## Best Practices
- Use **flexbox** for horizontal and vertical alignment.
- Use **relative parent + absolute child** for overlays.
- Use **hover effects** for interactive images.
- Consistent use of **gradients and colors** improves UI.
- Maintain spacing using `gap`, `padding`, and `margin`.
- Reset global styles with `* { margin:0; padding:0; box-sizing:border-box; }`.

---

## Key Concepts Summary

| Concept                     | Purpose |
|------------------------------|---------|
| `.container`                | Wraps entire page, gradient background |
| `.contentbox`               | Centered main content with shadow and padding |
| `.item`                     | Recipe layout (flex, horizontal alignment) |
| `.leftbox`                  | Text content, vertical flex layout |
| `.rightbox`                 | Image container with overlay and hover effects |
| `.overlay`                  | Appears on hover, absolute positioning, centered text |
| `.Ingredientsbox` / `.Recipebox` | List styling with proper font size |
| `.navcontainer` / `#navlist` | Navbar layout and spacing |
| `.footerbox` / `#footerpara` | Footer layout and color consistency |
| Hover & Scale Effects       | Interactive image effects |
| Box Shadow & Padding        | Visual elevation and spacing |

---

### Real-world Use Cases
- **Hover overlay** → E-commerce call-to-action.
- **Flexbox layout** → Align text and images neatly.
- **Box-shadow & padding** → Adds depth and readability.
- **Navbar & Footer** → Consistent UI for site navigation and branding.
