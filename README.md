# rh.validate.js
js常用的输入验证+提示框
author：lzf;
#使用说明：
在头部引入js文件<br>
<pre> //<script src = "../rh.validate.js"></script></pre>
#验证函数
rhvaildate.isName(string,int);//string被验证值,int最多字符数，默认最少1个；汉子字符；<br>
rhvaildate.iisMobilePhone(number);//numner被验证电话号码；<br>
rhvaildate.iisEmail(string);//string被验email字符串；<br>
rhvaildate.iisHans(string,int，int);//验证是否为汉字,后面数字为最少字符和最多字符,可不填，默认为0和空<br>
rhvaildate.iisNumber(string,int，int);//验证是否为数字,后面数字为最少字符和最多字符,可不填，默认为0和空；<br>
rhvaildate.iisText(string,int，int);//验证输入文本长度,后面数字为最少字符和最多字符,可不填，默认为0和空；<br>
#提示函数
rhtips.tips(msg,time);//msg自定义提示文字，time时间，例如time = 2000，表示提示信息显示两秒；<br>
rhtips.alert(msg,fun1,fun2);//msg自定义提示文字，fun1为确认回调函数，fun2为取消按钮回调函数，可省略，不做任何处理；<br>


