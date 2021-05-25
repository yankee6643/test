/*
jQuery(document).ready(function(){
	var _ = jQuery;

	// file upload preview img
	var _userImageArea = _('#userImageArea'),
		_fileUploadInput = _userImageArea.find('.file-upload input'),
		_userImgArea = _userImageArea.find('.user-image');	
	if(_fileUploadInput.length > 0 && _userImgArea.length > 0){
		if(window.FileReader){
			_fileUploadInput.on('change', function(e){
				var _input = e.target;
				if (_input.files && _input.files[0]) {
					var reader = new FileReader();

					reader.onload = function (e) {
						_userImgArea.attr('src', e.target.result);
					}
					reader.readAsDataURL(_input.files[0]);
				}
			});
		} else {
			if(_userImgArea.hasClass('no-image')){
				_userImgArea.remove();
			}		
		}
	}
});
*/