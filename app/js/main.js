//placeholder ie8
(function () {
    if (!Modernizr.input.placeholder) {
        $('.inputs_back').placeholder();
    }
})();
//popup
var popupModule = (function () {
    var init = function () {
        _setUpListners();
    }

    var _setUpListners = function () {
        var addImage = $('.my_works_addImg');
        var container = $('.popup_container');
        var close = $('.popup_close');

        addImage.on('click', function (e) {
            e.preventDefault();
            if (container.hasClass('displayNone')) {
                container.removeClass('displayNone');
            }
        });
        close.on('click', function () {
            container.addClass('displayNone');
        });
    }

    return {
        init: init
    }
})();

popupModule.init();

//validation contacts

var validModule = (function () {
    var init = function () {
        _setUpListners();
    }
    var _setUpListners = function () {
        var patternName = "[a-zA-Zа-яА-Я]+",
            patternEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
            patternMessage = "[a-zA-Zа-яА-Я]+",
            name = $(".name_input"),
            email = $(".email_input"),
            message = $(".message_input"),
            submit = $(".submit"),
            reset = $(".reset"),
            inputs = $(".inputs_back");
            form = $(".contacts_container");
     
        form.on('submit', function (e) {
            if (e.target.submit) {
                validationForm(name, patternName);
                validationForm(email, patternEmail);
                validationForm(message, patternMessage);

                function validationForm(input, pattern) {
                    if (input.val() != "") {
                        if (input.val().search(pattern) == 0) {
                            input.removeClass('invalid');
                        } else {
                            e.preventDefault();
                            input.addClass('invalid');
                        }
                    } else {
                        e.preventDefault();
                        input.addClass('invalid');
                    }
                }

            }
        });

        inputs.focus(function () {
            inputs.removeClass('invalid');
        });
        reset.on('click', function () {
            inputs.removeClass('invalid');
        })
    }

    return {
        init: init
    }
   
})();

validModule.init();