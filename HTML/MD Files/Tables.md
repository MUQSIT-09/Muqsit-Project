    # HTML Tables Explained

This document explains the structure and elements of HTML tables using examples. It also includes concepts like `rowspan`, `colspan`, and best practices.

---

## 🧾 What is a Table?

An HTML `<table>` represents tabular data in rows and columns.

```html
<table>
  <tr>
    <td>Data</td>
  </tr>
</table>
```

---

## 🧠 Table Sections

### 🔹 `<thead>` – Table Head

Used for the heading of the table.

### 🔸 `<tbody>` – Table Body

Contains the main content of the table.

### 🔻 `<tfoot>` – Table Footer

Used to display summary or totals.

---

## 🔄 `rowspan` and `colspan`

- `rowspan` lets a cell span multiple rows.
- `colspan` lets a cell span multiple columns.

```html
<td rowspan="2">Spanning 2 rows</td>
<td colspan="3">Spanning 3 columns</td>
```

---

## 📌 Simple Table Example

```html
<table border="1">
  <tr>
    <td>Column1</td>
    <td>Column2</td>
    <td>Column3</td>
  </tr>
  <tr>
    <td rowspan="2">Row 1 Cell 1</td>
    <td>Row 1 Cell 2</td>
    <td>Row 1 Cell 3</td>
  </tr>
  <tr>
    <td>Row 2 Cell 2</td>
    <td>Row 2 Cell 3</td>
  </tr>
  <tr>
    <td colspan="3">Row 3 Cell 1</td>
  </tr>
</table>
```

---

## 👨‍💼 Employee Table Example

```html
<table border="1">
  <thead>
    <tr>
      <td>No</td>
      <td>Full Name</td>
      <td>Position</td>
      <td>Salary</td>
      <td rowspan="4">Type</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bill Gates</td>
      <td>Microsoft</td>
      <td>$1000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Steve Jobs</td>
      <td>Apple</td>
      <td>$1200</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry Page</td>
      <td>Google</td>
      <td>$1100</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Mark Zuckerberg</td>
      <td>Facebook</td>
      <td>$1300</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Expenses:</td>
      <td>$4600</td>
    </tr>
  </tfoot>
</table>
```

---

## 🌍 Nested Demographics Table

This table uses complex combinations of `rowspan` and multiple data levels:

```html
<table border="1">
  <thead>
    <th>Country</th>
    <th>State</th>
    <th>City</th>
    <th>Street</th>
    <th>Male</th>
    <th>Female</th>
    <th>Others</th>
  </thead>
  <tbody>
    <!-- Kerala Section -->
    <tr>
      <td rowspan="8">1</td>
      <td rowspan="4">Kerala</td>
      <td rowspan="2">Cochin</td>
      <td>New Street</td>
      <td>500</td>
      <td>600</td>
      <td>6</td>
    </tr>
    <tr>
      <td>Main Street</td>
      <td>300</td>
      <td>288</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="2">Trivandrum</td>
      <td>Guru Street</td>
      <td>500</td>
      <td>200</td>
      <td>10</td>
    </tr>
    <tr>
      <td>TVK Street</td>
      <td>500</td>
      <td>600</td>
      <td>2</td>
    </tr>

    <!-- Maharashtra Section -->
    <tr>
      <td rowspan="4">Maharashtra</td>
      <td rowspan="2">Mumbai</td>
      <td>Krisha Street</td>
      <td>700</td>
      <td>850</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Main Street</td>
      <td>500</td>
      <td>600</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="2">Surat</td>
      <td>New Street</td>
      <td>500</td>
      <td>600</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Billa Street</td>
      <td>500</td>
      <td>600</td>
      <td>2</td>
    </tr>

    <!-- Alaska Section -->
    <tr>
      <td rowspan="2">2</td>
      <td rowspan="2">Alaska</td>
      <td rowspan="2">AKA Central</td>
      <td>New Street</td>
      <td>200</td>
      <td>210</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Cross Street</td>
      <td>1000</td>
      <td>1050</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
```

---

## 🛠️ Best Practices

- 📐 Always use `<thead>`, `<tbody>`, and `<tfoot>` for semantic clarity.
- 🪄 Use `scope="col"` or `scope="row"` on `<th>` for accessibility.
- ✅ Use `caption` for describing tables.
- 📱 Make tables responsive using scrollable divs or media queries.
- 🧪 Test `rowspan` and `colspan` values for proper visual layout.

---



