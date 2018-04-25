(function ($) {

    $.fn.softkeys = function(options) {

        var settings = $.extend({
                layout : [],
                target : '',
                rowSeperator : 'p',
                buttonWrapper : 'button'
            },  options);

        var createRow = function(obj, buttons) {
                for (var i = 0; i < buttons.length; i++) {
                    createButton(obj, buttons[i]);
                }

                obj.append('<'+settings.rowSeperator+'></p>');
            },

            createButton = function(obj, button) {
                var character = '',
                    type = 'letter',
                    styleClass = '';

                switch(typeof button) {
                    case 'array' :
                case 'object' :
                        if(typeof button[0] !== 'undefined') {
                            character += '<span class="btn_first">'+button[0]+'</span>';
                        }
                        if(typeof button[1] !== 'undefined') {
                            character += '<span class="btn_sec">'+button[1]+'</span>';
                        }
                        type = 'symbol';
                        break;

                    case 'string' :
                        switch(button) {
                            case 'capslock' :
                                character = '<span class="btn_first">caps</span>';
                                type = 'capslock';
                                break;

                            case 'shift' :
                                character = '<span class="btn_first">shift</span>';
                                type = 'shift';
                                break;

                            case 'return' :
                                character = '<span class="btn_first">return</span>';
                                type = 'return';
                                break;

                            case 'tab' :
                                character = '<span class="btn_first">tab</span>';
                                type = 'tab';
                                break;

                            case 'space' :
                                character = '<span class="btn_first">space</span>';
                                type = 'space';
                                styleClass = 'softkeys__btn--space';
                                break;

                            case 'delete' :
                                character = '<span class="btn_first">delete</span>';
                                type = 'delete';
                                break;

                            default :
                                character = button;
                                type = 'letter';
                                break;
                        }

                        break;
                }

                obj.append('<'+settings.buttonWrapper+' class="softkeys__btn  '+styleClass+'" data-type="'+type+'">'+character+'</'+settings.buttonWrapper+'>');
            },

            bindKeyPress = function(obj) {
                obj.children(settings.buttonWrapper).on('click touchstart', function(event){
                    event.preventDefault();

                    var character = '',
                        type = $(this).data('type'),
                        targetValue = $(settings.target).val();

                    switch(type) {
                        case 'capslock' :
                            toggleCase(obj);
                            break;

                        case 'shift' :
                            toggleCase(obj);
                            toggleAlt(obj);
                            break;

                        case 'return' :
                            character = '\n';
                            break;

                        case 'tab' :
                            character = '\t';
                            break;

                        case 'space' :
                            character = ' ';
                            break;

                        case 'delete' :
                            targetValue = targetValue.substr(0, targetValue.length - 1);
                            break;

                        case 'symbol' :
                            if(obj.hasClass('softkeys--alt')) {
                                character = $(this).children('span').eq(1).html();
                            } else {
                                character = $(this).children('span').eq(0).html();
                            }
                            break;

                        case 'letter' :
                            character = $(this).html();

                            if(obj.hasClass('softkeys--caps')) {
                                character = character.toUpperCase();
                            }
                            break;
                    }
					//赋值
                    $(settings.target).focus().val(targetValue + character);
                });
            },

            toggleCase = function(obj) {
                obj.toggleClass('softkeys--caps');
            },

            toggleAlt = function(obj) {
                obj.toggleClass('softkeys--alt');
            };

        return this.each(function(){
            for (var i = 0; i < settings.layout.length; i++) {
                createRow($(this), settings.layout[i]);
            }

            bindKeyPress($(this));
        });
    };

}(jQuery));