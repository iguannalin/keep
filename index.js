window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  const grasses = ["⺌", "丶", "⺍", "灬", "艹"];
  let index = 0;
  let interval;

  function createWindow() {
    let rw = getRandomInt(200,500);
    let rh = getRandomInt(300,500);
    let grass = grasses[getRandomInt(0,grasses.length)];
    const text = `<!DOCTYPE html><html> <head> <title>keep</title> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="https://iguannalin.github.io/keep/index.css"/></head> <body><div id="overlay"></div> <div id="grassy">${grass}</div></body><script>setTimeout(window.close, 200);</script></html>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank', `popup,width=${100},height=${100},left=${rw},top=${rh}`);
    window.URL.revokeObjectURL(blobUrl);
    index++;
  }

  if (index < 5) interval = setInterval(createWindow, 250);
  else clearInterval(interval);
});