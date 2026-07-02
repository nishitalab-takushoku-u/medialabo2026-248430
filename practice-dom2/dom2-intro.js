function changeDom() {
    // ① 「ヨット」を追加
    let l = document.createElement('li');
    l.textContent = 'ヨット';
    let u = document.querySelector('ul#kazoeuta');
    u.insertAdjacentElement('beforeend', l);

    // ② 画像を変更
    let i = document.querySelector('img#bluemoon');
    i.setAttribute('src', 'bluemoon.jpg');

    // ③ リンクを追加
    let a = document.createElement('a');
    a.textContent = '拓殖大学HP';
    a.setAttribute('href', 'https://www.takushoku-u.ac.jp');

    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend', a);

    // ④ 「もち」を削除
    l = document.querySelector('li#mochi');
    l.remove();

    // ⑤ 「合戦」のリストを削除
    u = document.querySelector('ul#kassen');
    u.remove();

    // ⑥ 新しいリストを作成
    u = document.createElement('ul');

    p = document.querySelector('p#primary');
    p.insertAdjacentElement('afterend', u);

    // 赤
    l = document.createElement('li');
    l.textContent = '赤';
    u.insertAdjacentElement('beforeend', l);

    // 緑
    l = document.createElement('li');
    l.textContent = '緑';
    u.insertAdjacentElement('beforeend', l);

    // 青
    l = document.createElement('li');
    l.textContent = '青';
    u.insertAdjacentElement('beforeend', l);
}
    let b = document.querySelector('button#henkou');
    b.addEventListener('click', changeDom);
