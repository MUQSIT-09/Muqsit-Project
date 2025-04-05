```html
<!--
  🌐 Full HTML Tutorial in One File
  Covers: HTML, tags, elements, head, body, favicon, and examples
-->

<!DOCTYPE html> <!-- Declares that this is an HTML5 document -->

<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Makes page responsive -->
    <title>My First HTML Project</title> <!-- Title shown in browser tab -->

    <!-- ✅ Favicon Example (Make sure favicon.png is in your folder) -->
    <link rel="icon" type="image/png" href="favicon.png">

    <!-- Example: Adding external CSS -->
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>

<body>

    <!-- 🧠 What is HTML? -->
    <h1>What is HTML?</h1>
    <p>HTML (HyperText Markup Language) defines the structure or skeleton of a web page.
       It labels content such as paragraphs, headings, videos, buttons, etc.</p>

    <!-- 🏷️ What is an HTML Tag? -->
    <h1>What is an HTML Tag?</h1>
    <p>HTML tags are keywords inside angle brackets, like &lt;p&gt;, &lt;h1&gt;, &lt;img&gt;, etc.</p>

    <!-- Example of Tags -->
    <h2>Example Tags</h2>
    <p>This is a &lt;p&gt; tag.</p>
    <h3>This is an &lt;h3&gt; tag.</h3>
    <a href="#">This is an &lt;a&gt; (anchor) tag.</a>

    <!-- 🧩 What is an HTML Element? -->
    <h1>What is an HTML Element?</h1>
    <p>An HTML element = Opening tag + Content + Closing tag</p>

    <!-- Example of Elements -->
    <h2>Element Example</h2>
    <p>This is a paragraph element with some content.</p>
    <button>Click Me</button>

    <!-- 🔖 What is <!DOCTYPE html>? -->
    <h1>What is &lt;!DOCTYPE html&gt;?</h1>
    <p>This declaration tells the browser that the file uses HTML5 standard.</p>

    <!-- 🧠 What is the <head>? -->
    <h1>What is &lt;head&gt;?</h1>
    <p>The head contains metadata like title, favicon, CSS/JS links, SEO tags, etc.</p>

    <!-- 🖥️ What is the <body>? -->
    <h1>What is &lt;body&gt;?</h1>
    <p>The body contains all the visible content of a webpage.</p>

    <!-- 🎯 More Examples -->
    <h1>More Examples</h1>

    <!-- Image Example -->
    <h2>Image Example</h2>
    <img src="https://via.placeholder.com/150" alt="Placeholder Image">

    <!-- List Example -->
    <h2>List Example</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <!-- Table Example -->
    <h2>Table Example</h2>
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

    <!-- Favicon Output Simulation -->
    <h2>Favicon Output</h2>
    <p>Check your browser tab — you'll see a small icon (favicon.png) next to the title "My First HTML Project".</p>

</body>
</html>
