## 💾 Project Title: CodeHunter – Learning Hub

---

### 🔹 1. Basic HTML Setup

#### ✍️ Description:
Defines the structure of the HTML document with a title.

#### 💻 Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
```

#### ✅ Output:
Sets the page title as "Document" (visible in browser tab).

---

### 🔹 2. Header Section

#### ✍️ Description:
Top section with the main heading welcoming users.

#### 💻 Code:
```html
<body>
    <header>
        <h1>Welcome to CodeHunter</h1>
    </header><br><br>
```

#### ✅ Output:
Displays "Welcome to CodeHunter" at the top.

---

### 🔹 3. Logo and Navigation Menu

#### ✍️ Description:
Two-column layout: one side shows a logo, the other side shows navigation links.

#### 💻 Code:
```html
<table>
  <tr>
    <td>
      <img src="logo.png" alt="logo" height="200px" width="200px">
    </td>
    <td>
      <nav>
        <ul>
          <li><a href="#Roadmapvedios">RoadMaps</a></li>
          <li><a href="#OperatingSystem">Operating System</a></li>
          <li><a href="#DBMSsection">DBMS</a></li>
          <li><a href="#DSAsection">DSA</a></li>
          <li><a href="#WebDevSection">Web Devlopment</a></li>
        </ul>
      </nav>
    </td>
  </tr>
</table><br><br>
```

#### ✅ Output:
Displays a logo image and navigation links side by side.

---

### 🔹 4. About Section

#### ✍️ Description:
Gives an introduction or description of what CodeHunter is.

#### 💻 Code:
```html
<main>
  <section>
    <h2>About CodeHunter</h2>
    <p>Lorem ipsum dolor sit amet consectetur...</p>
  </section><br><br>
```

#### ✅ Output:
Paragraph with dummy text describing the website.

---

### 🔹 5. Additional Media (Audio & Video)

#### ✍️ Description:
Shows an audio and video file side by side.

#### 💻 Code:
```html
<section>
  <h2>Additional Media</h2>
  <table>
    <tr>
      <td>
        <audio src="audio.mp3" controls></audio>
      </td>
      <td>
        <video width="250px" height="200px" controls autoplay muted>
          <source src="vedio.mp4" type="video/mp4">
        </video>
      </td>
    </tr>
  </table><br><br>
</section>
```

#### ✅ Output:
- Playable audio file  
- Autoplay muted video

---

### 🔹 6. Roadmap Videos Section

#### ✍️ Description:
Displays a grid of YouTube videos (same video repeated for demo).

#### 💻 Code:
```html
<section id="Roadmapvedios">
  <h2>RoadMap Videos</h2>
  <table>
    <tr>
      <td>
        <iframe src="https://www.youtube.com/embed/dSJM4Gyh8jE" height="250px" width="450px"></iframe>
      </td>
      ...
    </tr>
    ...
  </table>
</section><br><br>
```

#### ✅ Output:
YouTube video grid showing 6 video previews.

---

### 🔹 7. Operating System Section

#### ✍️ Description:
Similar layout for Operating System video lectures.

#### 💻 Code:
```html
<section id="OperatingSystem">
  <h2>Operating System Videos</h2>
  <table>
    <tr>
      <td><iframe src="..." height="250px" width="450px"></iframe></td>
      ...
    </tr>
  </table>
</section><br><br>
```

#### ✅ Output:
OS video resources shown in grid format.

---

### 🔹 8. DBMS Section

#### ✍️ Description:
Video resources for database topics.

#### 💻 Code:
```html
<section id="DBMSsection">
  <h2>DataBase Managemnet System Videos</h2>
  ...
</section><br><br>
```

#### ✅ Output:
DBMS tutorial videos

---

### 🔹 9. DSA Section

#### ✍️ Description:
Data Structure and Algorithm resources section.

#### 💻 Code:
```html
<section id="DSAsection">
  <h2>Data Structure Algorithm Videos</h2>
  ...
</section><br><br>
```

#### ✅ Output:
DSA YouTube videos embedded

---

### 🔹 10. Web Development Section

#### ✍️ Description:
Videos for learning HTML, CSS, JavaScript, etc.

#### 💻 Code:
```html
<section id="WebDevSection">
  <h2>Web Devlopment Videos</h2>
  ...
</section><br><br>
```

#### ✅ Output:
Video learning resources for Web Development.

---

### 🔹 11. Footer Section

#### ✍️ Description:
Shows copyright.

#### 💻 Code:
```html
<footer>
  <p>© Abdul Muqsit. All rights Reserved</p>
</footer>
```

#### ✅ Output:
Footer with name and copyright.

---

### 🌐 Add Favicon (Optional)

#### ✍️ Description:
Add this in the `<head>` to show a tab icon.

#### 💻 Code:
```html
<link rel="icon" type="image/png" href="favicon.png">
```

