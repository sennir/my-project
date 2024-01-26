const qrspic = document.createElement('img');

// kuvan tiedostopolku
qrspic.src = 'img/qrs.png';

qrspic.height = 200;
qrspic.width = 200;

// kuvan sijainti
qrspic.style.position = 'absolute';
qrspic.style.left = '600px';
qrspic.style.top = '0px';

// kuva sivustolle
document.body.appendChild(qrspic);



