# Flask Hello App

A simple web application using Flask that renders a greeting with your name.

## 🧱 Project Structure

```
flask-hello-app/
│
├── app.py
└── templates/
    └── index.html
```

---

## 🚀 Getting Started

### 1. Clone or Create the Project Directory

```bash
mkdir flask-hello-app
cd flask-hello-app
```

### 2. Install Flask

```bash
pip install flask
```

---

## 📝 Create the Files

### 🔹 app.py

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    name = "Joe Rakesh"
    return render_template("index.html", name=name)

if __name__ == '__main__':
    app.run(debug=True)
```

---

### 🔹 templates/index.html

Create a folder named `templates`, and inside it, add this file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello, {{ name }}!</h1>
  </body>
</html>
```

---

## ▶️ Run the App

In the terminal, make sure you're in the project folder and run:

```bash
python app.py
```

You should see output like:

```
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

Then open your browser and go to:

```
http://127.0.0.1:5000/
```

You’ll see:

```
Hello, Joe Rakesh!
```

---

## 🧹 Notes

- Make sure `index.html` is inside a folder named `templates`.
- Use `debug=True` only during development.
