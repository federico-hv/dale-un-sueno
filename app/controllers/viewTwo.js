var args = arguments[0] || {};

//args.nombre+' '+args.apellido+' '+args.descripcion+' '+args.foto+' '+args.deseo;

//alert(args.nombre+' '+args.apellido);

$.backButton.addEventListener('click',closeView);

$.buttonDale.addEventListener('click',openThirdView);


function bindData(){
	$.name.text = args.nombre.toUpperCase()+' '+args.apellido.toUpperCase();
	$.labelDeseoDos.text = args.deseo;
	$.labelDescrip.text = args.descripcion;
	if(args.foto.indexOf('http')!=-1){
		$.carita.image = args.foto;
	}
	else{
		$.carita.image = '/images/caritas/'+args.foto;
	}
}

function openThirdView(){
	var three = Alloy.createController('viewThree',args).getView();

	three.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
}

function closeView(){
	$.viewTwo.close();
}


bindData();