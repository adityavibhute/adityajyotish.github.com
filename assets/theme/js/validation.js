$(document).ready(function(){
	$("#Fname, #emailAddr, #mobNumber").on("keypress", function(e) {
	    if (e.target.id == "Fname" && e.which === 32 && !this.value.length){
	        e.preventDefault();
	    }
	    if(e.which === 32 && e.target.id !== "Fname"){
	    	e.preventDefault();
	    }
	});
})
function isFieldEmpty(param){
	var id = "#" + param, cls = "." + param;
	var chkField = $(id).val();
	if(chkField == ""){
		$(id).addClass("errorBorder");
		$(id).next().next().addClass("hide");
		$(id).next().removeClass("hide");	
		return false;
	}
	else if(param == 'emailAddr' && chkField !== ""){
		$(id).next().addClass("hide");
		emailValidation(chkField, id);
	}
	else if(param == 'mobNumber' && chkField !== ""){
		$(id).next().addClass("hide");
		mobValid(chkField, id);
	}else{
		$(id).removeClass("errorBorder");
		$(id).next().addClass("hide");	
		return true;
	}
}
function submitForm(){
	isFieldEmpty('Fname');
	isFieldEmpty('emailAddr');
	isFieldEmpty('mobNumber');
}
function emailValidation(vals,id){
	var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(reg.test(String(vals).toLowerCase())){
		$(id).next().next().addClass("hide");
		$(id).removeClass("errorBorder");
		return true;
	}else{
		$(id).next().next().removeClass("hide");
		return false
	}
}
function mobValid(vals,id){
	if(vals.length < 10 || vals.length > 13){
		$(id).addClass("errorBorder");
		$(id).next().addClass("hide");	
		$(id).next().next().removeClass("hide");				
		return false;
	}
	$(id).removeClass("errorBorder");
	$(id).next().addClass("hide");
	$(id).next().next().addClass("hide");				
	return true;	
}