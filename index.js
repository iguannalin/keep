window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const cursor = document.getElementById("cursor");
  let os = 100;
  
  function createWindow(mX, mY) {
    const text = `<!DOCTYPE html><html> <head> <title>keep</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://iguannalin.github.io/keep/index.css"/></head> <body><div id="container"><div id="cursor"></div></div></body><script>let c=document.getElementById("cursor");cTop=0;setInterval(() => {c.style.top=cTop+'px';cTop++;},50);setTimeout(window.close, 2000);</script></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    const wLeft = getRandomInt(mX-os, mX+os);
    const wTop = getRandomInt(mY-os, mY+os);
    window.open(blobUrl, '_blank', `popup,width=${10},height=${10},left=${wLeft},top=${wTop}`);
    window.URL.revokeObjectURL(blobUrl);
  }
  
  window.addEventListener("mousemove", e => {
    cursor.style.visibility = "visible";
    cursor.style.left = e.clientX - 25 + "px";
    cursor.style.top = e.clientY - 25 + "px";
  });

  document.addEventListener("mousedown", (e) => { for (let i = 0; i < getRandomInt(7,15); i++) setTimeout(() => createWindow(e.screenX, e.screenY), getRandomInt(500,2000)) });
});