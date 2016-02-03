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
            capcha = $(".capcha_input_size"),
            submit = $(".submit"),
            reset = $(".reset"),
            inputs = $(".inputs_back"),
            tool = $(".errors"),
            toolName = $(".error_name"),
            toolQues = $(".error_ques"),
            toolMail = $(".error_mail"),
            toolCap = $(".error_capcha"),
            form = $(".contacts_container");

     
        form.on('submit', function (e) {

            validationForm(name, patternName, toolName);
            validationForm(email, patternEmail, toolMail);
            validationForm(message, patternMessage, toolQues);
            //validationForm(capcha, null ,toolCap); //No pattern

                function validationForm(input, pattern, toolt) {
                    if (input.val() != "") {
                        if (input.val().search(pattern) == 0) {
                            input.removeClass('invalid');
                            toolt.removeClass('opacity');
                        } else {
                            e.preventDefault();
                            input.addClass('invalid');
                            toolt.addClass('opacity');
                        }
                    } else {
                        e.preventDefault();
                        input.addClass('invalid');
                        toolt.addClass('opacity');
                    }
                }

        });

        function focus(inp, toolt) {
            inp.focus(function () {
                inp.removeClass('invalid');
                toolt.removeClass('opacity');
            });
        }

        focus(name, toolName);
        focus(email, toolMail);
        focus(message, toolQues);
        focus(capcha, toolCap);

        reset.on('click', function () {
            inputs.removeClass('invalid');
            tool.removeClass('opacity');
        })
    }

    return {
        init: init
    }
   
})();

validModule.init();