// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function validate_register_form(form)
{
  var username = $(".user_username",form).val();
  var password = $(".user_password",form).val();
  var user_reg = /^[A-Za-z]+$/;
  var space_reg = /\s/;
  $(".errors",form).html("");
  var flag = true;
  if($.trim(username).length ==0)
  {
     error = "Please enter Username";
     flag = false;
     $(".user_name_error",form).html(error);
  }
  else if(username.length>50)
  {
     error = "Username should be of maximum 50 characters";
     flag = false;
     $(".user_name_error",form).html(error);
  }
  else if(!username.match(user_reg))
  {
     error = "Username should conatin only letters/numbers.";
     flag = false;
     $(".user_name_error",form).html(error);
  }

  if($.trim(password).length ==0)
  {
     error = "Please enter Password";
     flag = false;
     $(".user_password_error",form).html(error);
  }
  else if(password.length<6 || password.length>32)
  {
     error = "Please enter password between 6 to 32 characters.";
     flag = false;
     $(".user_password_error",form).html(error);
  }
  else if(password.match(space_reg))
  {
     error = "Password should not contain spaces.";
     flag = false;
     $(".user_password_error",form).html(error);
  }
  if(!flag)
  {
	$(".user_password",form).html("");
  }

  return flag;
}

function show_popup(id,title)
{
	$( "#"+id ).dialog({width:"400px",
		modal: true,
		title: title,
		resizable:false,
		draggable:false,
		close: function(){
			$(".errors",$(this)).html("");
		}
	});
}

