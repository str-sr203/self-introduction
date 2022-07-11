let str = [
       "大城礎良 (おおしろ　そら)<br>",
       "沖縄県<br>",
       "21歳<br>",
       "男<br>",
       "学問分野 : エネルギー環境工学<br>",
       "かに座<br>",
       "好きな食べ物 : 海鮮系<br>",
       "好きな歌手 : 宇多田ヒカル<br>",
       "好きな色 : 青<br>",
       "好きな動物 : イエティ<br>",
       "好きなアニメ : 進撃の巨人<br>",
       "やってみたいこと : グランピング<br>",
       "行ってみたい場所 : 東京スカイツリー<br>",
       "得意なスポーツ : バドミントン<br>"
      ];

//ターミナル内に一行ずつ出力
count = 0;
function setTextLine(){
	if (str.length >= count) {
        text = "";

	    for (i=0; i<count; i++){ 
            text += "C:¥Users¥unknown>" + str[i];
        }

	    txt.innerHTML = text;
        count++;

	    setTimeout(setTextLine,1500);
    }
}
setTextLine();

//カーソルの点滅
function cursor(){
    target = document.getElementById("cursor");
    if (target.className == "") {
        target.className = "transparent";
    }else {
        target.className = "";
    }
    setTimeout(cursor, 550);
} 
cursor();

//モーダル表示
const modal = document.getElementById('modal');
const image = document.getElementById("modal-image");
function buttonClick(num){
    modal.style.display = 'block';
    if (num === 1){
        image.src="image/myphoto.jpg";
    }else if(num === 2) {
        image.src="image/sea.jpg";
    }else if(num === 3) {
        image.src="image/sea2.jpg";
    }else if(num === 4) {
        image.src="image/waterfall.jpg";
    }else if(num === 5) {
        image.src="image/eisa.jpg";
    }
}

// モーダルを非表示
const closeBtn = document.getElementById('modal-close');
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});
window.addEventListener('click', function(e){
    if (e.target == modal) {
      modal.style.display = 'none';
    }
});