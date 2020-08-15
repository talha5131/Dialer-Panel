(function($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        $(window).on('click', function() {
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker', function(ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click', function(e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on('click', function(e) {
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click', function(e) {
            e.stopPropagation();
        });


    } catch (er) { console.log(er); }
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function() {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }


})(jQuery);
$('#submit').click(function() {
    var fName = $('#fName').val();
    var lName = $('#lName').val();
    var company = $('#company').val();
    var rank = $('#rank').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var website = $('#website').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var postCode = $('#postCode').val();
    var country = $('#country').val();
    var companyHistory = $('#companyHistory').val();
    var requirements = $('#requirements').val();

    // var clientsData = [];
    // // console.log(clientsData);

    // // var clientsDataUpdate = localStorage.getItem('clientData', JSON.parse['clientsData']);
    var clientsDataUpdate = JSON.parse(localStorage['clientsData']);
    // clientsDataUpdate.push(5)
    // console.log(clientsDataUpdate)
    // event.preventDefault();

    clientsDataUpdate.push({
        "firstName": fName,
        "lastName": lName,
        "companyName": company,
        "rank": rank,
        "email": email,
        "phone": phone,
        "address": address,
        "website": website,
        "city": city,
        "state": state,
        "postCode": postCode,
        "country": country,
        "companyHistory": companyHistory,
        "requirements": requirements,
    });

    // clientsDataUpdate.pop();

    // // To Set The Value In Local Memory
    var JSONClientsData = JSON.stringify(clientsDataUpdate);
    localStorage.setItem('clientsData', JSONClientsData);

    // // To Get The Value From The Local Storage
    // // console.log(localStorage.getItem('clientData', JSON.parse['clientsData']));

});