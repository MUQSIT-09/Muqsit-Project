# HTML Media Tags Explained

This document explains how to use various media-related HTML tags such as `<img>`, `<audio>`, `<video>`, and `<iframe>`. Each tag is explained with an example and purpose.

---

## 🖼️ `<img>` Tag

```html
<img src="logo.png" alt="Taj Not Found" height="125px" loading="lazy">
```

- **`src`**: Specifies the path to the image.
- **`alt`**: Alternate text if the image doesn't load.
- **`height`**: Controls the height of the image.
- **`loading="lazy"`**: Improves performance by delaying the loading of images until they are in the viewport.

> ✅ **Best Practice**: Always include `alt` for accessibility and `loading="lazy"` for better performance.

---

## 🎵 `<audio>` Tag

```html
<audio src="audio.mp3" controls></audio>
```

OR

```html
<audio controls>
    <source src="audio.mp3" type="audio/mp3">
</audio>
```

- **`controls`**: Adds play/pause UI.
- **`source`** tag: Allows specifying multiple formats for better compatibility.

> ✅ **Best Practice**: Always include the `<source>` element to support fallback formats.

---

## 🎥 `<video>` Tag

```html
<video src="video.mp4" height="500px" controls></video>
```

OR

```html
<video controls height="500px">
    <source src="video.mp4" type="video/mp4">
</video>
```

- **`controls`**: Adds play/pause UI.
- **`height`**: Sets the video display height.

> ✅ **Best Practice**: Always provide fallback `<source>` tags with `type` for broader browser compatibility.

---

## 🌐 `<iframe>` Tag

```html
<iframe src="https://muqsit-09.github.io/dicegame/" width="300px" height="200px"></iframe>
```

- Embeds another webpage into your current webpage.

### 🗺️ Embedding Google Maps:

```html
<iframe src="https://www.google.com/maps/embed?..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

### ▶️ Embedding YouTube Video:

```html
<iframe src="https://www.youtube.com/embed/dSJM4Gyh8jE"></iframe>
```

> ✅ **Best Practice**:

- Use `loading="lazy"` for performance.
- Add `allowfullscreen` to videos or map embeds.
- Avoid fixed dimensions; use responsive layouts when possible.

---

## 🌟 Additional Best Practices

- 🧭 Use `title` and `meta` tags in `<head>` for SEO and accessibility.
- 💾 Compress media files to improve loading time.
- 📱 Ensure responsiveness using CSS (`max-width: 100%`) or CSS frameworks.
- 🔐 Use secure URLs (`https`) for all `src` values.
- 🎯 Use descriptive filenames (e.g., `product-demo.mp4` instead of `vid1.mp4`).

---



