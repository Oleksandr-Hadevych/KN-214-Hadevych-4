function Validate_name(form)
{
    var pattern=(/[A-Za-zА-яа-я]+$/);
    var user=form.customer_name.value;
	if (user=="")
	{
		//alert("Ви не ввели свого імені!");
		return false;
	}
	else if (pattern.test(user)==false)
	{
		alert("Ми не впевнені, що вас звати "+user+"!");
		//Modal.alert({title: 'Увага!',message:'Ми не впевнені, що вас звати "'+user+'"'});
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
		alert("Ви не ввели email!");
		return false;
	}
	else if (pattern.test(email)==false)
	{
		//Modal.alert({title:'Увага!',message:'Ви ввели неправильний email!'});
		alert("Ви ввели неправильний email!");
		return false;
	}
	else
	{	
		return true;
	}
}
Error=()=>
{
	alert("The page is currently unavailable");
}