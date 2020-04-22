function Validate_name(form)
{
    var pattern=(/[A-Za-zА-яа-я]+$/);
    var user=form.customer_name.value;
    var  fail=false;
	if (user=="")
	{
		return false;
	}
	else if (pattern.test(user)==false)
	{
		alert('Ми не впевнені, що вас звати "'+user+'"');
		return false;
	}
	else
	{	
		return true;
	}
}
function Validate_email(form)
{
	var pattern=/^\w+([\._-]?\w+)*@\w+([\._-]?\w+)*(\.\w{2,3})+$/;
	var email=form.email.value;
	if (email=="")
	{
		alert('Ви не ввели email!');
		return false;
	}
	else if (pattern.test(email)==false)
	{
		alert('Ви ввели неправильний email!');
		return false;
	}
	else
	{	
		return true;
	}
}