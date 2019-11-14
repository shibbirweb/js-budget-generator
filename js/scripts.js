$(document).ready(function () {
    //all items
    var items = [];

    //form submit
    $('#productInputForm').on('submit', function (event) {
        event.preventDefault();
        let item = {};
        $(this).serializeArray().forEach(_item => {
            item[_item.name] = _item.value
        });
        //push into item
        items.push(item)

        //update table
        updateView();

        //reset form
        this.reset();
    })

    //update view
    function updateView() {

        let itemLength = items.length;

        let output = '';

        for (let i = 0; i < itemLength; i++){
            output +=
            '<tr>' +
                '<th scope="row">' + (i + 1) +'</th>\n' +
                '<td>Name</td>\n' +
                'td>Price</td>\n' +
                '<td>Quantity</td>\n' +
                '<td>Line total</td>\n' +
                '<td>Action</td>' +
            '</tr>'
        }

        $('.product-table tbody').html(output)

    }


});