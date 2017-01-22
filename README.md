# num-to-chinese-num
Translate a num(integer or long integer) to Simplified Chinese numerals.
1.Import this js file:

&lt;script type="text/javascript" src="../Num2CNCharacter.js"&gt;&lt;/script&gt;
2.This function accept a num, it will parse to an integer, an return a string:

var result = Num2CNCharacter.translate(val);

3.E.g:

&lt;script type="text/javascript"&gt;
     (function(){
				var d = document;
				var originalNumObj = d.getElementById("number_input");
				originalNumObj.addEventListener("change",function(e){
					var val = originalNumObj.value;
					var result = Num2CNCharacter.translate(val);
					d.getElementById("output_text").innerHTML = result;
				},false);
			})();
&lt;/script&gt;

4.Example in the folder 'demo/num2CNCharacter.html'.

将一个正整数转换为简体中文大写的类。
1.引入该js：

&lt;script type="text/javascript" src="../Num2CNCharacter.js"&gt;&lt;/script&gt;

2.传入一个数字，计算后将返回一个字符串：

var result = Num2CNCharacter.translate(val);

3.整体如下：

&lt;script type="text/javascript"&gt;
     (function(){
				var d = document;
				var originalNumObj = d.getElementById("number_input");
				originalNumObj.addEventListener("change",function(e){
					var val = originalNumObj.value;
					var result = Num2CNCharacter.translate(val);
					d.getElementById("output_text").innerHTML = result;
				},false);
			})();
&lt;/script&gt;
4.示例在：demo/num2CNCharacter.html中
