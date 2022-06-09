const check = () => {
  const fd = new FormData();
  const blob = new Blob([new Uint8Array([0])]);
  fd.append("file", blob, "hé.txt");
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      console.log("Reply:", request.response);
    }
  }
  request.open("POST", "/");
  request.send(fd);
};
