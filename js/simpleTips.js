;"use strict";
var simpleTips = {
	/*
	@msg[string],提示信息
	@time[int],停留时长，默认为3秒,
	 */
	tips : function(msg,time){
		var simpleTips = document.createElement('div'),body = document.body;
		simpleTips.setAttribute('style','position:fixed;z-index:10000;top: 30%;width: 160px;left: 50%;margin-left: -60px;text-align: center; background-color: #484848;border-radius:4px;color: #ffffff;font-size: 18px;line-height:22px; word-break: break-all;font-family: "Microsoft Yahei",Arial, Verdana, Helvetica, sans-serif;');
		simpleTips.innerHTML = '<p style="margin: 10px;">'+msg+'</p>';
		if (time == ''||time == undefined) {time = 3000;}
		body.appendChild(simpleTips);
		setTimeout(function(){
			body.removeChild(simpleTips);
		},time);
	},
	/*
	@msg[string],提示信息，必须
	@title[string],提示标题，非必须，默认为信息
	@fun1[object],确定按钮函数
	@fun2[object],取消按钮函数
	 *//
	alert : function(msg,title,fun1,fun2){
		var simpleAlert = document.createElement('div'),
			body = document.body,
			cover = document.createElement('div'),
		    title = title||"信息";
		simpleAlert.setAttribute('style','position: fixed;z-index: 10000;top: 30%;width: 260px;left: 50%;margin-left: -130px;height: auto;background-color: #FFFFFF;');
		simpleAlert.innerHTML  = 
			'<div style="padding: 0 80px 0 20px;height:42px;line-height:42px;color: #333333;font-size: 14px; border-bottom:1px solid #EEE;background-color:#F8F8F8;text-align: left;">'+title+'</div>'+
			'<div style="padding: 20px;font-size: 16px;">'+msg+'</div>'+
			'<div style="padding: 0 10px 12px 10px;text-align: right;">'+
			'<button type="button" id="rh_confirm_button" style="background-color: #2e8ded;border: none;padding: 0;height: 28px;padding: 0 15px;margin: 0 6px;font-size: 14px;color: #ffffff;font-weight: 700;border-radius: 2px;cursor:pointer;">确认</button>'+
			'<button type="button" id="rh_cancel_button" style="background-color: #2e8ded;border: none;padding: 0;height: 28px;padding: 0 15px;margin: 0 6px;font-size: 14px;color: #ffffff;font-weight: 700;border-radius: 2px;cursor:pointer;">取消</button>'+
			'</div>';
		cover.setAttribute('style','position: fixed;z-index: 9990;top: 0;left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,.3);');
		body.appendChild(simpleAlert);
		body.appendChild(cover);
		document.getElementById('rh_confirm_button').onclick = function(){
			if(typeof fun1 === 'function'){
				fun1();
			}
			body.removeChild(cover);
			body.removeChild(simpleAlert);
		}
		document.getElementById('rh_cancel_button').onclick = function(){
			if(typeof fun2 === 'function'){
				fun2();
			}
			body.removeChild(cover);
			body.removeChild(simpleAlert);
		}
	}
}