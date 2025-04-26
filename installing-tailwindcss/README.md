# Tailwind CSS Setup in HTML Using CLI

This guide walks through the steps to set up and test Tailwind CSS in a plain HTML project using the Tailwind CLI.
It follows the official Tailwind CSS documentation and demonstrates a minimal, development-ready setup.

## Important Notes:

- Make sure Node.js and npm are installed before beginning.
- This setup is great for quick testing or prototyping.
- Use '--watch' for live updates when editing your CSS file.

## Step 1: Install Tailwind CSS and CLI

Use npm to install Tailwind CSS and the CLI tool:

    npm install tailwindcss @tailwindcss/cli

## Step 2: Create Input CSS File

Create a file named 'input.css' with the following content:

    @import "tailwindcss";

## Step 3: Compile CSS Using Tailwind CLI

Run the following command in your terminal:

    npx @tailwindcss/cli -i ./input.css -o ./output.css --watch

This compiles 'input.css' into 'output.css' and watches for any changes.

## Step 4: Link CSS in Your HTML File

Include the compiled CSS in your HTML file:

    <link href="./output.css" rel="stylesheet">

## Example HTML:

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tailwind CSS Test</title>
      <link href="./output.css" rel="stylesheet">
    </head>
    <body>
      <h1 class="text-3xl font-bold text-center mt-10">Hello, Tailwind!</h1>
    </body>
    </html>

End of Guide
