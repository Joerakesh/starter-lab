# 📛 DynamicPage-JSON

A simple dynamic webpage built with HTML, JavaScript, and a local JSON file. It loads user data and displays it on the page without needing a database or backend server.

---

## 📝 Overview

This project demonstrates how to create a dynamic webpage that fetches and displays data from a JSON file using JavaScript. It's perfect for small-scale applications or as a front-end demo of data binding without a framework.

---

## 📂 Project Structure

```
dynamic-page-json/
│
├── index.html       # Main HTML file
├── script.js        # JavaScript logic for loading and rendering data
├── data.json        # JSON file containing user information
└── README.md        # Project documentation
```

---

## 📄 File Descriptions

### `data.json`

Contains an array of user objects with basic information:

```json
[
  {
    "name": "Joe",
    "age": 19,
    "city": "India"
  },
  {
    "name": "Adam",
    "age": 18,
    "city": "San Francisco"
  }
]
```

---

### `index.html`

Basic HTML skeleton with a placeholder div to display user data:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Dynamic Webpage</title>
  </head>
  <body>
    <h1>User List</h1>
    <div id="user-list"></div>

    <script src="script.js"></script>
  </body>
</html>
```

---

### `script.js`

JavaScript file that dynamically loads the JSON data and renders it into the HTML page:

```javascript
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("user-list");
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<strong>${user.name}</strong> - Age: ${user.age}, City: ${user.city}`;
      userList.appendChild(userDiv);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
```

---

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Make sure all files (`index.html`, `script.js`, `data.json`) are in the same folder.
3. Run a local server to avoid CORS issues when using `fetch()`:
   - Using Python:
     ```bash
     python -m http.server
     ```
   - Or use the "Live Server" extension in VS Code.
4. Open your browser and visit:
   ```
   http://localhost:8000
   ```

---
