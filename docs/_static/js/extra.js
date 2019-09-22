function loadjs () {
   var url = document.getElementsByClassName('page_edit_url')[0].href.split('docs')[1];
    // var url = document.URL.replace(/http\S+\.org\//gi, '').replace(/#\S+$/gi, '').slice(0, -1);
   var script = document.createElement('script');
   script.src = `https://api.github.com/repos/SM2-wiki/SM2-wiki/commits?path=docs${url}&callback=foo`;
   document.getElementsByClassName('page_info')[0].setAttribute('href', `https://github.com/SM2-wiki/SM2-wiki/blob/master/docs/${url}`);
   document.getElementsByClassName('edit_history')[0].setAttribute('href', `https://github.com/SM2-wiki/SM2-wiki/commits/master/docs/${url}`);
   script.src = `https://api.github.com/repos/SM2-wiki/SM2-wiki/commits?path=docs/${url}&callback=foo`;
   document.getElementsByTagName('head')[0].appendChild(script);
   
   $.getJSON(`https://api.github.com/repos/SM2-wiki/SM2-wiki/commits?path=docs${url}&callback=foo`, function (data) {
        var ti = new Date(data[0].commit.author.date).toLocaleString('zh-CN', { timeZone: "Asia/Shanghai", hour12: false });
        document.getElementsByClassName('facts_modified')[0].innerHTML = (ti);
   })
   
   if (url == "/index.md") {
   // HomePage
    document.getElementsByClassName('edit_history')[0].setAttribute('href', `https://github.com/SM2-wiki/SM2-wiki/commits/master/docs/index.md`);
    script.src = `https://api.github.com/repos/SM2-wiki/SM2-wiki/commits?path=docs/index.md&callback=foo`;
    document.getElementsByTagName('head')[0].appendChild(script);
   } else if (typeof(url) != 'undefined') {
   document.getElementsByClassName('edit_history')[0].setAttribute('href', `https://github.com/SM2-wiki/SM2-wiki/commits/master/docs${url}`);
     script.src = `https://api.github.com/repos/SM2-wiki/SM2-wiki/commits?path=docs${url}&callback=foo`;
   document.getElementsByTagName('head')[0].appendChild(script);
   } else {
      document.getElementsByClassName('edit_history')[0].setAttribute('href', `https://github.com/SM2-wiki/SM2-wiki/commits/master`);
      document.getElementsByClassName('facts_modified')[0].innerHTML = ('最近没更新过这个页面');
      document.getElementsByClassName('page_contributors')[0].innerHTML = ('本页面是自动生成的');
      document.getElementsByClassName('page_edit_url')[0].setAttribute('href', `#`);
   }
}




