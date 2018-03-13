// submitボタンのDOM取得する
var submitBtn = document.getElementById("submit");
// クリックイベントを登録する
submitBtn.addEventListener("click", onButtonClick);
//クッリクしたあとの処理
function onButtonClick() {
  //検索内容の取得
  const search = document.retrieval.textBox.value;
  fetch('https://api.github.com/search/repositories?q=' + search + '&sort=stars&order=desc', {
    method: 'GET' // or 'PUT'
  }).then(res => res.json())
  .then(response => {
    const contantElem  = document.getElementById("contant");
    let tags = '';
    for (var i = 0; i < response.items.length; i++) {
      /*tags += '<div class="name">'+ 'NAME : '  + response.items[i].name +  '</div>' + '<div class="star">' + '⭐️ : ' + response.items[i].stargazers_count + '</div>'
      + '</div>' + '<div class="url">'+ 'URL : '  + response.items[i].url + '</div>';
      */
      tags += '<div class="name">'+ 'NAME : '  + response.items[i].name +  '</div>' + '<div class="star">' + '⭐️ : ' + response.items[i].stargazers_count + '</div>'
      + '</div>' + `<a href="${response.items[i].clone_url}" class="url">`+ response.items[i].clone_url + '</a>';
    }
    contantElem.innerHTML = tags;
  });
}



//お助けコマンド
//debugger
