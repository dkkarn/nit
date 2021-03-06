$(document).ready(function() {
                $('.auto').attr('readonly', 'readonly').css('background-color', 'aqua');
                // Validate inputs
                $('#calculate').click(validate);
                function validate() {
                    var dataValid = true;
                    $('.required').each(function() {
                        var cur = $(this);
                        cur.css('background-color', '');
                        if($.trim(cur.val()) == '') {
                            cur.attr('placeholder', 'Manadatory field!');
                            cur.css('background-color', 'yellow');
                            dataValid = false;
                        }
                    });
                    if(!dataValid) return false;
                    $('.number').each(function() {
                        var cur = $(this);
                        cur.css('background-color', '');
                        if(isNaN(cur.val())) {
                            cur.attr('placeholder', 'Must be Number!');
                            cur.css('background-color', 'yellow');
                            dataValid = false;
                        }
                    });
                    if(dataValid) {
                        $('#submit').attr('disabled', false);
                        // Calculate Basic Pay
                        var ppb = parseInt($('#ppb').val());
                        var agp = parseInt($('#agp').val());
                        var basic_pay = ppb + agp;
                        $('#bp').val(parseInt(basic_pay));

                        // Calculate DA of Basic Pay
                        var da_per = parseFloat($('#da_per').val());
                        var da = Math.round(basic_pay * da_per / 100);
                        $('#da').val(parseFloat(da));

                        // Calculate HRA of Basic Pay
                        var hra_per = parseInt($('#hra_per').val());
                        var hra = Math.round(basic_pay * hra_per / 100);
                        $('#hra').val(parseInt(hra));

                        // Rest of the pays
                        var ta = parseInt($('#ta').val());
                        var spl_allowance = parseInt($('#spl_allowance').val());
                        var washing_allowance = parseInt($('#washing_allowance').val());
                        var other_allowance = parseInt($('#other_allowance').val());
                        var hostel_supdt = parseInt($('#hostel_supdt').val());
                        var family_planning = parseInt($('#family_planning').val());
                        var tel_allowance = parseInt($('#tel_allowance').val());

                        // Calculate Total Pay
                        var total_pay = basic_pay + da + hra + ta + spl_allowance + washing_allowance + other_allowance + 
                                        hostel_supdt + family_planning + tel_allowance;
                        $('#total_pay').val(parseInt(total_pay));

                        // Deduction Parts
                        // initializing variables
                        var pf = parseInt($('#pf').val());
                        var nps_contribution = parseInt($('#nps_contribution').val());
                        var it = parseInt($('#it').val());
                        var hrd = parseInt($('#hrd').val());
                        var ec = parseInt($('#ec').val());
                        var gsli_deduction = parseInt($('#gsli_deduction').val());
                        var festival_adv_recovery = parseInt($('#festival_adv_recovery').val());
                        var gpf_loan_recovery = parseInt($('#gpf_loan_recovery').val());
                        var bike_com_recovery = parseInt($('#bike_com_recovery').val());
                        var loan_recovery = parseInt($('#loan_recovery').val());
                        var lic_2_deduction = parseInt($('#lic_2_deduction').val());
                        var flood_donation = parseInt($('#flood_donation').val());
                        var pro_tax_deduction = parseInt($('#pro_tax_deduction').val());
                        var other_deduction = parseInt($('#other_deduction').val());
                        var total_deduction = pf + nps_contribution + it + hrd + ec + gsli_deduction + festival_adv_recovery +
                                              gpf_loan_recovery + bike_com_recovery + loan_recovery + flood_donation + lic_2_deduction +
                                              pro_tax_deduction + other_deduction;
                        $('#total_deduction').val(parseInt(total_deduction));
                        var net_amount = total_pay - total_deduction;
                        $('#net_amount').val(parseInt(net_amount));
                    } else {
                        return false;
                    }
                }


            });