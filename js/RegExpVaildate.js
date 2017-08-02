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
		var rule ={
			'format':/^[1-9]\d{16}[0-9X]$/,
			'birthday':/^[1-2][0-9]{3}(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))$/  //没有判断大小月的情况
		}
		//号码规则校验
		if(!rule.format.test(id)){
			return {'status':0,'msg':'格式错误:18位,X大写,不得有空格'};
		}
		//省份校验
		var province_code = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
		if(!province_code[parseInt(id.substr(0,2))]){
			return {'status':0,'msg':'省份代码错误'}
		}
		//区位码校验
		
		//出生年月日校验
		var now_year = parseInt((new Date()).getFullYear());
		var year = parseInt(id.substr(6,4));
		var birthday = id.substr(6,8);
		if(!rule.birthday.test(birthday)||year<1800||year>now_year){
			return {'status':0,'msg':'出生日期填写错误'}
		}
		//校验码判断
		var c = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);   //系数
    	var b = new Array(1,0,'X',9,8,7,6,5,4,3,2);  //校验码对照表
		var id_array = id.split("");
		var sum = 0;
		for(var k=0;k<17;k++){
			sum+=parseInt(id_array[k])*parseInt(c[k]);
		}
		if(id_array[17] != b[sum%11]){
			return {'status':0,'msg':'身份证校验错误'}
		}
		return {'status':1,'msg':'校验通过'}
	}
}

