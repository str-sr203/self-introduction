//ターミナル内に一行ずつ出力
str = ["大城礎良 (おおしろ　そら)<br>",
       "沖縄県<br>",
       "21歳<br>",
       "学問分野 : エネルギー環境工学<br>",
       "かに座<br>",
       "好きな食べ物 : 海鮮系<br>",
       "好きな歌手 : 宇多田ヒカル<br>",
       "やってみたいこと : グランピング<br>",
       "得意なスポーツ : バドミントン<br>",
       "",
       "これからよろしくお願いいたします。<br>"
      ]

count = 0;
function setTextLine()
{
	if (str.length >= count) {
        text = "";

	    for (i=0; i<count; i++){ 
            text += "C:¥Users¥unknown>" + str[i] 
        };

	    test.innerHTML = text;
        count++;

	    setTimeout("setTextLine()",1300);
    }
}
setTextLine();

//カーソルの点滅
const cursor = () => {
    target = document.getElementById("cursor");
    if (target.className == "") {
        target.className = "transparent";
    }else {target.className = "";}
    setTimeout(cursor, 550);
} 
cursor();

function buttonClick(){
    alert('Click');
}
