var args = arguments[0] || {};


$.backButton.addEventListener('click',closeView);

$.callButton.addEventListener('click',makePhoneCall);

$.mailButton.addEventListener('click',sendMail);

function closeView(){

	var one = Alloy.createController('index').getView();

	one.open({
		activityEnterAnimation : Ti.App.Android.R.anim.slide_in_right,
        activityExitAnimation : Ti.Android.R.anim.slide_out_left
	});
	$.viewThree.close();

}

function makePhoneCall(){
	var intent = Ti.Android.createIntent({
	    action: Ti.Android.ACTION_CALL,
	    data: 'tel:+56224805972'
	});
	Ti.Android.currentActivity.startActivity(intent);
}


function sendMail() {
 
    var emailDialog = Ti.UI.createEmailDialog();
    emailDialog.subject = 'Dale! un sueño a '+args.nombre+' '+args.apellido+'.';
    emailDialog.toRecipients = ['contacto@fnh.cl'];
    emailDialog.messageBody = '';
    //var f = Ti.Filesystem.getFile('cricket.wav');
    //emailDialog.addAttachment(f);
    emailDialog.open();

}