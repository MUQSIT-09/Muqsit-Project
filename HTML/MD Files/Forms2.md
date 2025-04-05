# HTML Forms Examples with Code and Output

This markdown file presents **three detailed HTML forms** along with a breakdown of their code and what each form does.

---

## 🧾 Form 1: Event Registration

### 🔍 Description

This form collects basic registration details from users who wish to join an event. It includes name, email, phone number, occupation, topics of interest, and comments.

### 💻 Code

```html
<form>
    <label for="name">Name:</label><br>
    <input type="text" name="name" id="name"><br><br>

    <label for="email">Email:</label><br>
    <input type="text" name="email" id="email"><br><br>

    <label for="phone">Phone:</label><br>
    <input type="tel" name="phone" id="phone"><br><br>

    <label for="occupation">Occupation</label><br>
    <select name="occupation" id="occupation">
        <option value="student">Student</option>
        <option value="professional">Professional</option>
        <option value="other">Other</option>
    </select><br><br>

    <fieldset>
        <legend>Topics Of Interest:</legend>
        <input type="checkbox" name="checkbox1" id="checkbox1">
        <label for="checkbox1">HTML</label><br>

        <input type="checkbox" name="checkbox2" id="checkbox2">
        <label for="checkbox2">CSS</label><br>

        <input type="checkbox" name="checkbox3" id="checkbox3">
        <label for="checkbox3">JS</label>
    </fieldset>

    <label for="comments">Comments:</label><br>
    <textarea name="comments" id="comments"></textarea>

    <input type="submit" value="Register">
</form>
```

### 🧾 Output Preview

- Text fields for name, email, and phone.
- A dropdown to select occupation.
- Checkboxes to choose topics (HTML, CSS, JS).
- A textarea for additional comments.
- A register button.

---

## 📄 Form 2: Job Application

### 🔍 Description

This form is designed for job seekers to apply by uploading resumes, specifying experience, skills, education, and availability.

### 💻 Code

```html
<form>
    <label for="name">Name:</label><br>
    <input type="text" name="name" id="name"><br><br>

    <label for="email">Email:</label><br>
    <input type="text" name="email" id="email"><br><br>

    <label for="phone">Phone:</label><br>
    <input type="tel" name="phone" id="phone"><br><br>

    <label for="resume">Resume:</label><br>
    <input type="file" name="resume" id="resume"><br><br>

    <label for="counter">Experience (in years):</label><br>
    <input type="number" name="counter" id="counter" min="0" max="50"><br><br>

    <fieldset>
        <legend>Skills:</legend>
        <input type="checkbox" name="checkbox1" id="checkbox1">
        <label for="checkbox1">HTML</label><br>
        <input type="checkbox" name="checkbox2" id="checkbox2">
        <label for="checkbox2">CSS</label><br>
        <input type="checkbox" name="checkbox3" id="checkbox3">
        <label for="checkbox3">JS</label><br>
    </fieldset>

    <label for="Education">Highest Education:</label><br>
    <select name="Education" id="Education">
        <option value="HighSchool">HighSchool</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Graduation">Graduation</option>
    </select><br><br>

    <fieldset>
        <legend>Availability:</legend>
        <input type="radio" name="radio" id="radio4" value="full">
        <label for="radio4">Full-Time</label><br>
        <input type="radio" name="radio" id="radio5" value="part">
        <label for="radio5">Part-Time</label><br>
    </fieldset>

    <label for="Additionalcomment">Additional Comments: </label><br>
    <textarea name="Additionalcomment" id="Additionalcomment"></textarea><br>

    <input type="submit" value="Submit Application">
</form>
```

### 🧾 Output Preview

- Text input fields for name, email, phone.
- File upload for resume.
- Experience entry via number input.
- Skills with checkboxes.
- Dropdown for education level.
- Radio buttons for job availability.
- Textarea for additional comments.
- Submit button.

---

## 🧾 Form 3: Complex Form

### 🔍 Description

A multi-section form capturing personal, address, and additional information.

### 💻 Code

```html
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">

        <label for="email">Email:</label>
        <input type="text" name="email" id="email">

        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone">

        <label for="dob">Date Of Birth:</label>
        <input type="date" id="dob" name="dob">

        <input type="radio" name="gender" id="radio6" value="male">
        <label for="radio6">Male</label>

        <input type="radio" name="gender" id="radio7" value="female">
        <label for="radio7">Female</label>

        <label for="Countryname">Country</label>
        <select name="Countryname" id="Countryname">
            <option value="India">India</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Luxembourg">Luxembourg</option>
        </select>
    </fieldset>

    <fieldset>
        <legend>Address</legend>
        <label for="Street">Street</label>
        <input type="text" name="Street" id="Street"><br>
        <label for="city">City</label>
        <input type="text" name="city" id="city"><br>
        <label for="state">State</label>
        <input type="text" name="state" id="state"><br>
        <label for="zipcode">Zipcode</label>
        <input type="text" name="zipcode" id="zipcode">
    </fieldset>

    <fieldset>
        <legend>Other Information</legend>
        <label for="comments">Comments</label><br>   
        <textarea name="comments" id="comments">Write Here Your Comments</textarea><br>
        <input type="checkbox" name="tandc" id="tandc">
        <label for="tandc">I agree to the terms of service</label>
    </fieldset>

    <input type="submit" name="Submit" id="Submit">
</form>
```

### 🧾 Output Preview

- Sections: Personal Information, Address, and Other Info.
- Gender selection using radio buttons.
- Dropdown for country.
- Fields for address.
- Comment box and terms agreement checkbox.
- Submit button.

---



