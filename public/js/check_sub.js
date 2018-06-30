function check(){
	var title = document.getElementById("title");
	var message = document.getElementById("message");
	var year = document.getElementById("year");
	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var tips = document.getElementById("tips");
	if(title.value == ""){
		tips.innerHTML = "请输入合法的标题";
		return false;
	}else if(message.value == ""){
		tips.innerHTML = "请输入合法的备注";
		return false;
	}else if(year.value == ""){
		tips.innerHTML = "请输入合法的年份";
		return false;
	}else if(month.value == ""){
		tips.innerHTML = "请输入合法的月份";
		return false;
	}else if(day.value == ""){
		tips.innerHTML = "请输入合法的日期";
		return false;
	}
	return true;
}
