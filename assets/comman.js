/******** ONly Leter no space and no special character **********/

function isFloatNumber(item,evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode==46)
    {
        var regex = new RegExp(/\./g)
        var count = $(item).val().match(regex).length;
        if (count > 1)
        {
            return false;
        }
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function lettersOnly() 
{
            var charCode = event.keyCode;

            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32)

                return true;
            else
                return false;
}
function emailValidatePersonalDetails(e) {
        var k;
        document.all ? k = e.keyCode : k = e.which;
        if ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 46 || k == 64 || k == 45 || k == 95  || k == 43 || (k >= 48 && k <= 57)) {
            return true;
        } else {
            return false;
        }
    }
function numericaOnly() 
{
            var charCode = event.keyCode;
            
            if ((charCode > 48 && charCode <= 57) || charCode == 8)

                return true;
            else
                return false;
}


/* Remove Dubal space bar */ 

function isWhiteSpace(char) {
  return (/\s/).test(char);
}
function willCreateWhitespaceSequence(evt) {
  var willCreateWSS = false;
  if (isWhiteSpace(evt.key)) {
  
    var elmInput = evt.currentTarget;
    var content = elmInput.value;

    var posStart = elmInput.selectionStart;
    var posEnd = elmInput.selectionEnd;

    willCreateWSS = (
         isWhiteSpace(content[posStart - 1] || '')
      || isWhiteSpace(content[posEnd] || '')
    );
  }
  return willCreateWSS;
}

function isAlfa(evt) {

  evt = (evt || window.event);
  var charCode = (evt.which || evt.keyCode);

  return ((
       (charCode > 32)
    && (charCode < 65 || charCode > 90)
    && (charCode < 97 || charCode > 122)

  ) || willCreateWhitespaceSequence(evt)) ? false : true;
}

function alphaNumericOnly(evt) {
    return /^[a-zA-Z0-9 ]+$/i.test(event.key);
}

function isAlfaNumeric(evt) {

    evt = (evt || window.event);
    var charCode = (evt.which || evt.keyCode);
  
    return ((
      (charCode > 32)
      && (charCode < 64 || charCode > 91)
      && (charCode < 96 || charCode > 123)
      && (charCode == 8 || charCode == 32)
  
    ) || willCreateWhitespaceSequence(evt)) ? false : true;
  }

function lastdayofmonth() {
    var Year = $("#Year :selected").val();
    var Month = $("#Month :selected").val();
    var date_time = new Date((new Date(Year, Month, 1)) - 1)
    //console.log(date_time);
    convert(date_time)

}

function convert(str) {
    var date = new Date(str);
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    $("#Day option").attr("disabled", false); 

      if ($("#Day :selected").val() > day) {
        $('#Day').val('');
      }
        for (var i = 31; i > day; i--) {
            $("#Day option:contains('" + i + "')").attr("disabled", "disabled");       
    }
    return day;
}

// $(document).ready(function(){
//     $(".uncheckedPerA").on("keyup change", function(){
//         $("#flexCheckDefault").prop("checked", false);
//     });
// });
// $('#flexCheckSameAs').on('click', function() {
//     if ($('#flexCheckSameAs').is(":checked")) {
//         $('#p_Premises_Name').val($('#pr_Premises_Name').val());
//         $('#p_SubLocality').val($('#pr_SubLocality').val());
//         $('#p_Locality').val($('#pr_Locality').val());
//         $('#p_PinCode').val($('#pr_PinCode').val());
//         var country = $('#pr_CountryID option:selected').val();
//         $('#p_CountryID option[value=' + country + ']').prop('selected', 'selected');
//         var state = $('#pr_StateUTID option:selected').val();
//         var statetxt = $('#pr_StateUTID option:selected').text();
//         $('#p_StateUTID').html("<option value='" + state + "'>" + statetxt + "</option>");
//         var state = $('#pr_StateUTID option:selected').val();
//         var statetxt = $('#pr_StateUTID option:selected').text();
//         $('#p_StateUTID').html("<option value='" + state + "'>" + statetxt + "</option>");
//         var district = $('#pr_DistrictID option:selected').val();
//         var districttxt = $('#pr_DistrictID option:selected').text();
//         $('#p_DistrictID').html("<option value='" + district + "'>" + districttxt + "</option>");
//         $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').prop('readonly', true);
//         $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').css({
//             'pointer-events': 'none'
//         });
//         if ($("#p_Premises_Name").hasClass("is-invalid")) {
//             $("#p_Premises_Name").removeClass("is-invalid");
//         }
//         if ($("#p_SubLocality").hasClass("is-invalid")) {
//             $("#p_SubLocality").removeClass("is-invalid");
//         }
//         if ($("#p_Locality").hasClass("is-invalid")) {
//             $("#p_Locality").removeClass("is-invalid");
//         }
//         if ($("#p_PinCode").hasClass("is-invalid")) {
//             $("#p_PinCode").removeClass("is-invalid");
//         }
//         if ($("#p_CountryID").hasClass("is-invalid")) {
//             $("#p_CountryID").removeClass("is-invalid");
//         }
//         if ($("#p_StateUTID").hasClass("is-invalid")) {
//             $("#p_StateUTID").removeClass("is-invalid");
//         }
//         if ($("#p_DistrictID").hasClass("is-invalid")) {
//             $("#p_DistrictID").removeClass("is-invalid");
//         }
//     }else{
//         $('#p_Premises_Name').val("");
//         $('#p_SubLocality').val("");
//         $('#p_Locality').val("");
//         $('#p_PinCode').val("");
//         $('#p_CountryID').val("");
//         $('#p_StateUTID').val("");
//         $('#p_DistrictID').val("");
//         $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').prop('readonly', false);
//         //$('#pr_Premises_Name,#pr_SubLocality,#pr_Locality,#pr_PinCode,#pr_CountryID,#pr_StateUTID,#pr_DistrictID').prop('readonly', false);
//         $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').css({
//             'pointer-events': 'auto'
//         }); 
//     }
// });

//jQuery(document).ready(function() {
//
//    jQuery('#flexCheckDefault').on('click', function() {
//        //alert();
//        if ($('#pr_Premises_Name').val() != '' && $('#pr_Locality').val() != '' && $('#pr_PinCode').val() != '' && $('#pr_CountryID option:selected').val() != '' && $('#pr_StateUTID option:selected').val() != '' && $('#pr_DistrictID option:selected').val() != '') {
//            if ($('#flexCheckDefault').is(":checked")) {
//
//                $('#p_Premises_Name').val($('#pr_Premises_Name').val());
//                $('#p_SubLocality').val($('#pr_SubLocality').val());
//                $('#p_Locality').val($('#pr_Locality').val());
//                $('#p_PinCode').val($('#pr_PinCode').val());
//
//                var country = $('#pr_CountryID option:selected').val();
//                $('#p_CountryID option[value=' + country + ']').prop('selected', 'selected');
//
//                // console.log("if-condition");
//
//                var state = $('#pr_StateUTID option:selected').val();
//                var statetxt = $('#pr_StateUTID option:selected').text();
//                $('#p_StateUTID').html("<option value='" + state + "'>" + statetxt + "</option>");
//                // $('#p_StateUTID option[value=' + state + ']').prop('selected', 'selected');
//
//                var district = $('#pr_DistrictID option:selected').val();
//                var districttxt = $('#pr_DistrictID option:selected').text();
//                $('#p_DistrictID').html("<option value='" + district + "'>" + districttxt + "</option>");
//                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').prop('readonly', true);
//                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').css({
//                    'pointer-events': 'none'
//                });
//                if ($("#p_Premises_Name").hasClass("is-invalid")) {
//                    $("#p_Premises_Name").removeClass("is-invalid");
//                }
//                if ($("#p_SubLocality").hasClass("is-invalid")) {
//                    $("#p_SubLocality").removeClass("is-invalid");
//                }
//                if ($("#p_Locality").hasClass("is-invalid")) {
//                    $("#p_Locality").removeClass("is-invalid");
//                }
//                if ($("#p_PinCode").hasClass("is-invalid")) {
//                    $("#p_PinCode").removeClass("is-invalid");
//                }
//                if ($("#p_CountryID").hasClass("is-invalid")) {
//                    $("#p_CountryID").removeClass("is-invalid");
//                }
//                if ($("#p_StateUTID").hasClass("is-invalid")) {
//                    $("#p_StateUTID").removeClass("is-invalid");
//                }
//                if ($("#p_DistrictID").hasClass("is-invalid")) {
//                    $("#p_DistrictID").removeClass("is-invalid");
//                }
//
//            } else {
//
//
//                $('#p_Premises_Name').val("");
//                $('#p_SubLocality').val("");
//                $('#p_Locality').val("");
//                $('#p_PinCode').val("");
//                $('#p_CountryID').val("");
//                $('#p_StateUTID').val("");
//                $('#p_DistrictID').val("");
//                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').prop('readonly', false);
//                //$('#pr_Premises_Name,#pr_SubLocality,#pr_Locality,#pr_PinCode,#pr_CountryID,#pr_StateUTID,#pr_DistrictID').prop('readonly', false);
//                $('#p_Premises_Name,#p_SubLocality,#p_Locality,#p_PinCode,#p_CountryID,#p_StateUTID,#p_DistrictID').css({
//                    'pointer-events': 'auto'
//                });
//                //$('#pr_Premises_Name,#pr_SubLocality,#pr_Locality,#pr_PinCode,#pr_CountryID,#pr_StateUTID,#pr_DistrictID').css({'pointer-events': 'auto'});
//            }
//        } else {
//            $(this).prop('checked', false);
//        }
//        var pass = $('#candidatequalificationdetailstbl-passstatus :selected').val();
//        //alert(pass);
//        $('#candidatequalificationdetailstbl-yearofpassing').html('');
//        $('#candidatequalificationdetailstbl-finalresultawating').html('');
//
//    });
//    /*-----------------select payment mode----------------- */
//
//
//});

function blockSpecialChar(e,action='alpha') {
    var k = e.keyCode;
    //console.log(k);
      var status= ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k== 32);
          if(action == 'alpha'){
            status= ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k== 32);
          }else if(action == 'alphanumeric'){
            status= ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k== 32 || (k >= 48 && k <= 57));
          }else if(action == 'alphanumericspeciaslsome'){
            //((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k== 32 || k == 44 || k == 47 || k == 92 || (k >= 48 && k <= 57));
            status= ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32  || (k >= 48 && k <= 57));
          }else if(action == 'characterNumericAndAllowSomespecials'){
            status =  /^[a-zA-Z0-9 :.&/-]*$/i.test(e.key);
          }else if(action == 'characterNumericAndAllowTwopecials'){
            status =  /^[a-zA-Z0-9 /-]*$/i.test(e.key);
          }else if(action == 'numeric'){           
            status= ((k >= 48 && k <= 57));
          }
    return status;
}
// remove double space 
$('form .form-control').on('keydown', function(e) { 
    var input = $(this).attr('id');
    var input = e.target;
    var val = input.value;
    var end = input.selectionEnd;
    if (e.keyCode == 32 && (val[end - 1] == " " || val[end] == " ")) {
        e.preventDefault();
        return false;
    }
});



// $(document).ready(function () {

//     $("#pr_Premises_Name,#pr_SubLocality,#pr_Locality,#pr_PinCode").keyup(function(){
//         UnfreezeData();
//     });

//     $("#pr_CountryID, #pr_StateUTID, #pr_DistrictID ").on("change", function() {
//         UnfreezeData();
//     }); 

//     function UnfreezeData(){

//         $("#p_Premises_Name").val("");
//         $("#p_SubLocality").val("");
//         $("#p_Locality").val("");
//         $("#p_PinCode").val("");

//         $("#p_Premises_Name").removeAttr("readonly");
//         $("#p_SubLocality").removeAttr("readonly");
//         $("#p_Locality").removeAttr("readonly");
//         $("#p_PinCode").removeAttr("readonly");

//         $("#p_CountryID").val($("#p_CountryID option:first").val());
//         $("#p_CountryID").css({ "pointer-events" : "visible" });

//         $("#p_StateUTID").html("<option>--Select--</option>");
//         $("#p_StateUTID").css({ "pointer-events" : "visible" });

//         $("#p_DistrictID").html("<option>--Select--</option>");
//         $("#p_DistrictID").css({ "pointer-events" : "visible" });


//         $("#p_Premises_Name").css({ "pointer-events" : "visible" });
//         $("#p_SubLocality").css({ "pointer-events" : "visible" });
//         $("#p_Locality").css({ "pointer-events" : "visible" });
//         $("#p_PinCode").css({ "pointer-events" : "visible" });

//     }

//     $("#flexCheckDefault").on("click", function() {
//         if ($("#flexCheckDefault").is(":checked")) {
//             $(".field-p_Premises_Name").parent().find(".invalid-feedback").css({ "display" : "none" });
//             $(".field-p_Locality").parent().find(".invalid-feedback").css({ "display" : "none" });
//             $(".field-p_CountryID").parent().find(".invalid-feedback").css({ "display" : "none" });
//             $(".field-p_StateUTID").parent().find(".invalid-feedback").css({ "display" : "none" });
//             $(".field-p_DistrictID").parent().find(".invalid-feedback").css({ "display" : "none" });
//             $(".field-p_PinCode").parent().find(".invalid-feedback").css({ "display" : "none" });
//         }
//     }); 

//     $("#submitBtn, #saveContactDetail").on("click", function() {
//         if ($("#flexCheckDefault").is(":checked")) {
//         }else{
//             $(".field-p_Premises_Name").parent().find(".invalid-feedback").css({ "display" : "block" });
//             $(".field-p_Locality").parent().find(".invalid-feedback").css({ "display" : "block" });
//             $(".field-p_CountryID").parent().find(".invalid-feedback").css({ "display" : "block" });
//             $(".field-p_StateUTID").parent().find(".invalid-feedback").css({ "display" : "block" });
//             $(".field-p_DistrictID").parent().find(".invalid-feedback").css({ "display" : "block" });
//             $(".field-p_PinCode").parent().find(".invalid-feedback").css({ "display" : "block" });

//         }
//     }); 

    
// });