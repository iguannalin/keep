window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }
  const container = document.getElementById("container");
  const cursor = document.getElementById("cursor");
  const grasses = ["⺌", "丶", "⺍", "灬", "艹"];
  let index = 0;
  let os = 50;
  let interval;
  

  function createWindow(mX, mY) {
    // cursor.style.visibility = "visible";
    let grass = grasses[getRandomInt(0,grasses.length)];
    const text = `<!DOCTYPE html><html> <head> <title>keep</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://iguannalin.github.io/keep/index.css"/></head> <body><div id="container"></div> <div id="grassy">${grass}</div></body><script>//setTimeout(window.close, 1500);</script></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    const wLeft = getRandomInt(mX-os, mX+os);
    const wTop = getRandomInt(mY-os, mY+os);
    window.open(blobUrl, '_blank', `popup,width=${10},height=${10},left=${wLeft},top=${wTop}`);
    window.URL.revokeObjectURL(blobUrl);
    console.log(window.screenX, window.screenY);
    index++;
  }
  
  // cursor graphic code from -- https://stackoverflow.com/a/74122325
  let root = document.documentElement;
  root.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX - os/2 + "px";
    cursor.style.top = e.clientY - os/2 + "px";
    // cursor.style.backgroundColor = `rgba(${getRandomInt(209, 250)}, 230, 0, 0.65)`;
    
    // root.style.setProperty('--mouse-x', e.clientX - os/2 + "px");
    // root.style.setProperty('--mouse-y', e.clientY - os/2 + "px");
  });

  document.addEventListener("mousedown", (e) => { for (let i = 0; i < 10; i++) setTimeout(() => createWindow(e.screenX, e.screenY), getRandomInt(250,1000)) });
  // document.addEventListener("mouseup", () => cursor.style.visibility = "hidden");

  // if (index < 5) interval = setInterval(createWindow, 250);
  // else clearInterval(interval);
});