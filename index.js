var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", onButtonClick);

function onButtonClick() {
  const search = document.form1.textBox1.value;;
  fetch('https://api.github.com/search/repositories?q='+search, {
    method: 'GET' // or 'PUT'
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    // console.log('Success:', response)
    const yenElem  = document.getElementById("yen");
     // document.write('今の日本円 -> ' + response.rates.JPY);
     //onsole.log(JSON.stringify(yenElem));
    let tags = '';
    for (var i = 0; i < response.items.length; i++) {
      tags += '<div class="name">' + response.items[i].name + '</div>' + '<div class="url">' + response.items[i].clone_url + '</div>';
    }
     //debugger
    yenElem.innerHTML = tags;
     //https://api.fixer.io/latest?base=USD
  });
}
//target = 'intern';



//debugger
