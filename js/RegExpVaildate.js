;"use strict";
/*
@boolean woff true||false,设定是否去掉首尾空格
 */
var RegExpVaildate = {
	rule:{
		"mobile":/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/,	//检查手机号
		"email":/^[\w\+\-]+(\.[\w\+\-]+)*@[a-z\d\-]+(\.[a-z\d\-]+)*\.([a-z]{2,4})$/i,	//检查email
		"qq":/^[1-9][0-9]{4,10}$/,	//检查QQ号
		"hans":/^[\u4e00-\u9fa5]{1,}$/,	//检查是否为汉字
		"number":/^[0-9]*$/
	},
	mobile:function(str,woff){
		return RegExpVaildate.validate(str,'mobile',woff);
	},
	email:function(str,woff){
		return RegExpVaildate.validate(str,'email',woff);
	},
	qq:function(str,woff){
		return RegExpVaildate.validate(str,'qq',woff);
	},
	hans:function(str,woff){
		return RegExpValidate.validate(str,'hans',woff);
	},
	number:function(str,woff){
		return RegExpValidate.validate(str,'number',woff);
	},
	trim:function(str){
		return str ? str.replace(/^\s+|\s+$/g,"") : str;
	},
	isEmpty:function(str){
		 return str == null || typeof str == "undefined" || RegExpVaildate.trim(str) == "" ? true : false;
	},
	validate:function(str,regkey,woff){
		woff ? str = RegExpVaildate.trim(str,woff) : "";
		return RegExpVaildate['rule'][regkey].test(str);
	},
	idcard:function(id) { //身份证号码校验
	   // 1 "验证通过!", 0 //校验不通过
		var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
		//号码规则校验
		//500382198602100304
		console.log(id);
		if(!format.test(id)){
			return {'status':0,'msg':'身份证号码不合规'};
		}
		//区位码校验
		
		//出生年月日校验   前正则限制起始年份为1900;
		var year = id.substr(6,4),//身份证年
		    month = id.substr(10,2),//身份证月
		    date = id.substr(12,2),//身份证日
		    time = Date.parse(month+'-'+date+'-'+year),//身份证日期时间戳date
		    now_time = Date.parse(new Date()),//当前时间戳
		    dates = (new Date(year,month,0)).getDate();//身份证当月天数
			console.log(time+'s');
		    console.log(now_time+'n');
		if(time>now_time||date>dates){
			return {'status':0,'msg':'出生日期不合规'}
		}
		//校验码判断
		var c = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);   //系数
    	var b = new Array('1','0','X','9','8','7','6','5','4','3','2');  //校验码对照表
		var id_array = id.split("");
		var sum = 0;
		for(var k=0;k<17;k++){
			sum+=parseInt(id_array[k])*parseInt(c[k]);
		}
		if(id_array[17].toUpperCase() != b[sum%11].toUpperCase()){
			return {'status':0,'msg':'身份证校验码不合规'}
		}
		return {'status':1,'msg':'校验通过'}
	}
}

