let saveFile = () => {
  const name = document.getElementById('fname');
  const email = document.getElementById('email');
  const addr = document.getElementById('addr');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zip = document.getElementById('zip');
  const cardname = document.getElementById('cardname');
  const cardnumber = document.getElementById('cardnumber');
  const expiremonth = document.getElementById('expiremonth');
  const expireyear = document.getElementById('expireyear');
  const cvv = document.getElementById('cvv');

  let data = `
  Name: ${name.value}
  Email: ${email.value}
  Address: ${addr.value}
  City: ${city.value}
  State: ${state.value}
  Zip: ${zip.value}
  Card name: ${cardname.value}
  Cardnumber : ${cardnumber.value}
  Expir emonth: ${expiremonth.value}
  Expire year: ${expireyear.value}
  CVV: ${cvv.value}
  `;

  const convert = new Blob([data], { type: 'text/plain' });
  const sFileName = 'database.txt';

  let newLink = document.createElement('a');
  newLink.download = sFileName;
  newLink.href = window.URL.createObjectURL(convert);
  newLink.style.display = 'none';
  document.body.appendChild(newLink);
  newLink.click();
};

