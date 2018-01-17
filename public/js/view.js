/* UI Helper Functions */


function validateUserRegistrationForm() {
	console.log(`# validating user registration...`);
	$("#user_registration_form").validate({
		rules: {
			input_user_firstname: {
				required: true
			},
			input_user_lastname: {
				required: true
			},
			input_user_email: {
				required: true,
				email: true
			},
			input_user_password: {
				required: true,
				minlength: 5
			},
			input_user_password_confirm: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			}
		},
		//For custom messages
		messages: {
			user_firstname: {
				required: "Enter firstname",
				minlength: "Enter at least 5 characters"
			},
			curl: "Enter your website",
		},
		errorElement: 'div',
		errorPlacement: function (error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	});
}

// encode a string to base64
function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
		function toSolidBytes(match, p1) {
			return String.fromCharCode('0x' + p1);
		}));
}

// decode a base64-encoded string
function b64DecodeUnicode(str) {
	// Going backwards: from bytestream, to percent-encoding, to original string.
	return decodeURIComponent(atob(str).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

// yep, these are globals
var currentUserID;
var currentGiftID;
var currentCategoryID;


// document load
$(document).ready(function () {
	console.log(`# Loading view module...`);


	// user registration clicked
	$('body').on('click', '#user_registration_submit', event => {
		event.preventDefault();
		event.stopPropagation();
		let button = $(event.currentTarget);

		validateUserRegistrationForm();

	});
});