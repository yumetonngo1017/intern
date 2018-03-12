fetch('https://api.fixer.io/latest?base=USD', {
  method: 'GET' // or 'PUT'
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
  // console.log('Success:', response)
   // document.write('今の日本円 -> ' + response.rates.JPY);
   var yenElem  = document.getElementById("yen");
   yenElem.innerHTML = response.rates.JPY;
});
