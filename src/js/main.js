$(function () {
    const addButton = $('#addButton');
    const previewButton = $('#preview');
    const dialog = $('#dialog');
    const content = $('#content');

    // content.sortable(); 
    // content.selectable();
    // content.disableSelection();

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
                let type = 'text';
                $(this).find('input').each(function(){
                    type = $(this).prop('checked')?$(this).val():type;
                })
                const f = new Field(type);
                content.append(f.toDOM());
                fieldList.push(f);
                dialog.dialog('close');
            },
            "取消":function(){
                dialog.dialog('close');
            }
        }
    });

    addButton.click(function () {
        dialog.children()[0].checked = true;
        dialog.dialog('open');
    });

    previewButton.click(function(){
        const that = $(this);
        if(that.text() === '预览'){
            addButton.hide();
            that.text('编辑');
            $('h3').prop('contenteditable',false);
        }else{
            addButton.show();
            that.text('预览');
            $('h3').prop('contenteditable',true);
        }
        $('#content').toggleClass('disable');
    })
});

// 快捷键
window.onkeypress = function(e){
    if(e.key === 'f' && e.ctrlKey){
        addButton.click();
    }
    if(e.key === 'v' && e.ctrlKey){
        previewButton.click();
    }
}