(function ($) {
    // ������ ��Ʈ ���� js
    if ($('a.btn-size-chart')) {
        $('a.btn-size-chart').click(function () {
            var _chart = $('#sizeChart');
            if (_chart) {
                if (_chart.css('display') == 'block') {
                    _chart.hide();
                } else {
                    var _parent = $(this).parent('td');
                    var add_po = { top : 40, left: -352 };
                    var _css = { 'top': (_parent.offset().top + add_po.top) + 'px', 'left': (_parent.offset().left + add_po.left) + 'px' };
                    _chart.css(_css).show();
                }
                return false;
            }
        })
    }
    if ($('#sizeChart a.btn-close-layer')) {
        $('#sizeChart a.btn-close-layer').click(function () {
            $('#sizeChart').hide();
        });
    }
    
    //��ǰ���� �� �̵�
    jQuery(".detailTab a").on('click', function(e){
		e.preventDefault();
		jQuery("html,body").animate({scrollTop:jQuery(this.hash).offset().top - 70},300);
	});
    
    //���ÿϷ� ��ư
    jQuery(".sel-btn a").html("���ÿϷ�");
    
})(jQuery);

//�����̹���
$("#multi_img img").mouseenter(function(){
    var thumb = $(this).attr("src");
    $("#zoom").attr("src",thumb);
});


