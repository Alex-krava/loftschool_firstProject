//modernizr
(function () {
    if (!Modernizr.input.placeholder) {
        //placeholder ie8
        $('.inputs_back').placeholder();
        //portfolio nth-child ie8
        $('.my_works_images:nth-child(3n+3)').css("margin-right", "0");
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
            $(".inputs_back").removeClass('popup_invalid');
            $(".errors_popup").removeClass('popup_opacity');
            $(".pop_input_second").removeClass('popup_invalid');
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
            toolFirst = $(".error_first"),
            toolSecond = $(".error_second"),
            toolThird = $(".error_third"),
            toolfourth = $(".error_fourth"),
            form = $(".contacts_container"),
            popup = $(".popup_container");

        form.on('submit', function (e) {
            validationForm($(".name_input"), patternName, toolFirst);
            validationForm($(".email_input"), patternEmail, toolThird);
            validationForm($(".message_input"), patternMessage, toolSecond);
            validationForm($(".capcha_input_size"), undefined, toolfourth);//capcha no pattern

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

        popup.on('submit', function (e) {

            validationForm($('.pop_input_first'), toolFirst);
            validFile($('.pop_input_second'), toolSecond);
            validationForm($('.pop_input_third'), toolThird);
            validationForm($('.pop_input_fourth'), toolfourth);

            function validationForm(input, toolt) {
                if (input.val() != "") {
                    input.removeClass('popup_invalid');
                    toolt.removeClass('popup_opacity');
                } else {
                    e.preventDefault();
                    input.addClass('popup_invalid');
                    toolt.addClass('popup_opacity');
                }
            }
            function validFile(input, toolt) {
                if (input.html() != "Загрузите изображение") {
                    input.removeClass('popup_invalid');
                    toolt.removeClass('popup_opacity');
                } else {
                    e.preventDefault();
                    input.addClass('popup_invalid');
                    toolt.addClass('popup_opacity');
                }
            }

        });

        $('.popup_addImage').on('click', function () {
            $('.pop_input_second').removeClass('popup_invalid');
            toolSecond.removeClass('popup_opacity');
        });

        function focus(inp, toolt) {
            inp.keydown(function () {
                inp.removeClass('invalid');
                toolt.removeClass('opacity');
                inp.removeClass('popup_invalid');
                toolt.removeClass('popup_opacity');
            });
        }

        focus($(".name_input"), toolFirst);
        focus($(".email_input"), toolThird);
        focus($(".message_input"), toolSecond);
        focus($(".capcha_input_size"), toolfourth);

        focus($(".pop_input_first"), toolFirst);
        focus($(".pop_input_second"), toolSecond);
        focus($(".pop_input_third"), toolThird);
        focus($(".pop_input_fourth"), toolfourth);

        $(".reset").on('click', function () {
            $(".inputs_back").removeClass('invalid');
            $(".errors").removeClass('opacity');
        })
    }

    return {
        init: init
    }
   
})();

validModule.init();

(function () {
    $('.popup_addImage').on('change', function () {
        var str = $('.popup_addImage').val();
        if (str.lastIndexOf('\\')) {
            var i = str.lastIndexOf('\\') + 1;
        }
        else {
            var i = str.lastIndexOf('/') + 1;
        }
        var filename = str.slice(i);
        var uploaded = $(".popup_addImage_label");

        uploaded.addClass("popup_text_class");
        uploaded.html(filename);
    });
})()

//mobile menu
$(".icon_mobile_menu").on("click", function () {
    $(".items_mobile_menu").toggleClass("displayNone");
})

