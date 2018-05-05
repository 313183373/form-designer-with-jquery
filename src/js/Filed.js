class Field {
    constructor(type) {
        this.name = type === 'text' ? '请输入字段' : '请输入日期';
        this.type = type;
    }


    toDOM() {
        const d = $('<div>', {
            class: 'field',
        });

        const h = $('<h3>', {
            text: this.name,
            contenteditable: true,
        }).appendTo(d);

        h.on('input', () => {
            this.name = h.text();
        })

        const i = $('<input>', {
            type: 'text',
            'data-type': this.type,
        }).appendTo(d);

        const b = $('<button>', {
            text: '删除'
        }).appendTo(d);

        b.click(function(){
            d.remove();
        })

        b.hide();

        d.hover(function(){
            b.show();
        },function(){
            b.hide();
        })

        if (i.data('type') === 'date') {
            i.datepicker({
                showAnim: 'slideDown'
            });
        }

        return d;
    }
}