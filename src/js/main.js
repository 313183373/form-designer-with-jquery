$(function () {
    const addButton = $('#addButton');
    const dialog = $('#dialog');
    const content = $('#content');

    const fieldList = [];

    dialog.dialog({
        autoOpen: false,
        show: {
            effect: 'blind',
            duration: 100
        },
        hide: {
            effect: 'explode',
            duration: 100
        },
        modal:true,
        buttons: {
            "提交":function(){
                content.append(new Field('你的名字叫什么?','text').toDOM());
                dialog.dialog('close');
            },
            "取消":function(){
                dialog.dialog('close');
            }
        }
    });
    addButton.click(function () {
        dialog.dialog('open');
    });
});