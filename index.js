// submitボタンのDOM取得する
const submitBtn = document.getElementById("submit");

// クリックイベントを登録する
submitBtn.addEventListener("click", onButtonClick);

//クッリクしたあとの処理
function onButtonClick() {
  //検索内容の取得
  const search = document.retrieval.textBox.value;
  fetch('https://api.github.com/search/repositories?q=' + search + '&sort=stars&order=desc', {
    method: 'GET'
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    const contantElem  = document.getElementById("contant");
    let tags = '';
    for (var i = 0; i < response.items.length; i++) {

      tags += '<div class="name">'+ 'NAME : '  + response.items[i].name +  '</div>' + '<div class="star">' + '⭐️ : ' + response.items[i].stargazers_count + '</div>'
      + '</div>' + `<a href="${response.items[i].clone_url}" class="url">`+ response.items[i].clone_url + '</a>';

      contantElem.innerHTML = tags;
    }
  });
}

//お助けコマンド
//debugger
