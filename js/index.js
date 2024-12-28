
fetch('info.0.json')
  .then((response) => response.json())
  .then((data) => {
    document.body.removeAttribute('hidden');

    document.title = data.title;

    document.getElementById('title').innerHTML = data.title;
    document.getElementById('num').innerHTML = data.num;

    document.getElementById('img').src = data.img;
    document.getElementById('img').alt = data.alt;
    document.getElementById('img').title = data.alt;

    document.getElementById('alt').innerHTML = data.alt;
  })
  .catch((error) => console.error('Error fetching the comic:', error));
