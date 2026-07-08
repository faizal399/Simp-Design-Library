function Preview({ item }) {
  const cleanCode = item?.code || "";

  const srcDoc = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="flex items-center justify-center min-h-screen p-4 bg-transparent">
    ${cleanCode}
  </body>
</html>`;

  return (
    <iframe
      srcDoc={srcDoc}
      sandbox="allow-scripts"
      style={{ height: "100%", width: "100%" }}
      className="rounded-md border-0"
    />
  );
}

export default Preview;