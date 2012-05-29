function validate_contact_form(form)
{
  var name = $(".contact_name",form).val();
  var email = $(".contact_email",form).val();
  var info = $(".contact_short_info",form).val();
  var email_reg_ex = /^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i;
  $(".errors",form).html("");
  var flag = true;
  if($.trim(name).length ==0)
  {
     error = "Please enter Name.";
     flag = false;
     $(".name_error",form).html(error);
  }
  else if(name.length>50)
  {
     error = "Name should be of maximum 50 characters";
     flag = false;
     $(".name_error",form).html(error);
  }
  if($.trim(info).length ==0)
  {
     error = "Please enter short info.";
     flag = false;
     $(".short_info_error",form).html(error);
  }
  else if(info.length>500)
  {
     error = "Short info should be of maximum 500 characters";
     flag = false;
     $(".short_info_error",form).html(error);
  }
  if($.trim(email).length ==0)
  {
     error = "Please enter email.";
     flag = false;
     $(".email_error",form).html(error);
  }
  else if(!email.match(email_reg_ex))
  {
     error = "Please enter valid email address.";
     flag = false;
     $(".email_error",form).html(error);
  }
  return flag;
  
}


$(function(){
  	$(".edit_contact_link").click(function(){
	  $.get("edit/"+$(this).attr("id"), function(data){
			$("body").append($(data));
		},"html")	
	})

})
