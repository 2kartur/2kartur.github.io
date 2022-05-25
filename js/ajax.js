$( document ).ready(function() {
    $("#btn").click(
        function(){
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(), 
        success: function(response) {
            result = $.parseJSON(response);
            $('#result_form').html('' +
                '<strong>Результат</strong><br><br>\n' +
                '<p>Периметр фундаменту:'+result.X*result.Y+' м</p>\n' +
                '<p>Площа фундаменту:'+result.X*result.Y*result.H+' м<sup>2</sup></p>\n' +
                '<p>Об\'єм бетону:'+result.X*result.Y*result.H*result.A+' м<sup>3</sup></p>');
        },
        error: function(response) {
            $('#result_form').html('Помилка. Дані не відправляються');
        }
    });
}
