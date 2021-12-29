$(function () {
    // Submit Form Event
    var $form = $('.vd_form');
    $form.on('submit',(e)=>{
        e.preventDefault();
        let data = $form.serializeArray();
        let allInfo = {};
        $.each(data,function (i,d) {
            if (d.name == 'partnerCode') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'partnerGoodCatalog') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'patnerProductCode') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'vd_product_name') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'vd_delivery') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'firstName') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'lastName') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'phone') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'email') {
                allInfo[d.name] = d.value;
            }
            if (d.name == 'price') {
                allInfo[d.name] = Number(d.value);
            }
        })

        var collectInfo = {
            partnerCode: allInfo['partnerCode'],
            partnerProductCode: allInfo['patnerProductCode'],
            orderNum: 'vdrs-' + new Date().getTime(),
            clientInfo : [{
                "lastName" : allInfo['lastName'],
                "firstName" : allInfo['firstName'],
                "phone" : allInfo['phone'],
                "email" : allInfo['email'],
            }],
            items  : [{
                "name" : allInfo['vd_product_name'],
                "price" : Number(allInfo['price']),
                "quantity" : 1,
                "partnerGoodCatalog" : allInfo['partnerGoodCatalog'],
            }],
        };
        vd.create(collectInfo);
    })

    // Events
    $('.trigger_ico').on('click',()=>{
        $('.vd_popup').toggle('show');
    })

    // Pattern to digits
    $form.find('[name="price"], [name="phone"]').inputFilter(function(value) {
        return /^\d*$/.test(value);    // Allow digits only, using a RegExp
    });
})

$.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
            this.value = "";
        }
    });
};
