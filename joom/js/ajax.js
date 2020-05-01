
$(document).ready(function () {
    $("#btn").click(function (e) { // Устанавливаем событие отправки для формы с id=form
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        $.ajax({
            url: "/php/bd.php", //url page
            type: "POST", //метод отправки
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            },
            success: function (data) { //Данные отправлены успешно
				alert("В тебе все вийде!");
                $('#result_form').html('OK');
                return false;
            },
            error: function (data) { // Данные не отправлены
                // alert(data);
                $('#result_form').html('Ошибка. Данные не отправлены.');
                return false;
            }
        });
    });
});