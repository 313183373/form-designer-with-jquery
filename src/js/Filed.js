class Field {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }


    toDOM(){
        const d = $('<div>',{
            class:'field',
        });
        
        $('<h1>',{
            text:this.name
        }).appendTo(d);

        $('<input>',{
            type:this.type,
        }).appendTo(d);

        return d;
    }
}