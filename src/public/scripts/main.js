fetch("/components/header")
  .then((response) => response.text())
  .then((header) => {
    document.getElementsByTagName("head")[0].innerHTML += header;
  });
