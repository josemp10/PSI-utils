<script>

	// =========================================================
	// On Page Load Run

	$( document ).ready( function() 
	{
		// Initially set display by Type checkbox selection.
		setTableRowDisplay();
  


		getCFTypeTags( 'rowDisplayType' ).click( function()
		{
			setTableRowDisplay();
		});
        
        setSimpleService();
	});

    function setSimpleService()
    {
        var method="";

		var simpleServiceTag = $("input[custom='SimpleService']");
		var adoptedMethodTag = $("input[custom='AdoptedMethod']");
var serviceProvidedTag = $("input[custom='ServiceProvided']");


    
//-------- this script develop by Samath ---------------
       var today = new Date();
       var dd = today.getDate();
       var mm = today.getMonth() + 1;
       var mm_1 = today.getMonth();
       var yyyy = today.getFullYear();
       var ReportDateTag= $("input[custom='ReportDate']");
       var ProductSourceTag = $("input[custom='ProductSource']");
       var ProductCostTag = $("input[custom='ProductCost']");
    
       if (dd < 10) { dd = '0' + dd; }
       if (mm < 10) { mm = '0' + mm; }
       if (mm_1 < 10) { mm_1 = '0' + mm_1; }
       if (mm_1 == 0) { mm_1 = mm; }

       if (dd < 12) {
           today = yyyy + '-' + mm_1;
       } else {
           today = yyyy + '-' + mm;        
       }
       console.log(ReportDateTag.val());
       if (ReportDateTag.val()==""){
           deDataValueSave( ReportDateTag, today );
       }
     //------------ auto select product and cost ----------------
      if (ProductSourceTag.val()==""){
          deDataValueSave(ProductSourceTag, "[1] PSK products");   
      } 
      if (ProductCostTag.val()==""){
         deDataValueSave(ProductCostTag, "[2] Paid");
      }      
    //------------ END auto select product and cost -------------
    
//--------- end this script develop by Samath ---------------


        simpleServiceTag.attr('disabled','disabled');

        adoptedMethodTag.blur(function(){

          method = adoptedMethodTag.val();
           servicePro = serviceProvidedTag.val();

                if (servicePro == "") {

                    if (method == "[21] Condom" || method == "[22] Oral" || method == "[23] Injectable" || method == "[29] EC") {
                        deDataValueSave(simpleServiceTag, "STM");

                        deDataValueSave(serviceProvidedTag, "[20] Contraception - short term (incl. EC)");

                    }
                    else if (method == "[35] IUD" || method == "[36] IUD as EC") {
                        deDataValueSave(simpleServiceTag, "IUD");
                        deDataValueSave(serviceProvidedTag, "[30] Contraception - Long term");
                    }
                    else if (method == "[33] Jadelle" || method == "[32] Implanon") {
                        deDataValueSave(simpleServiceTag, "Implant");
                        deDataValueSave(serviceProvidedTag, "[30] Contraception - Long term");
                    }
                    else {
                        deDataValueSave(simpleServiceTag, "");


                    }
                }

        });
    }


	function getDEId_FromProgramStageTag( tag )
	{
		var tagId = tag.attr( 'id' );

		return tagId.substring( 12, 23 );		
	}


	function deDataValueSave( tag, value )
	{
		var deId = getDEId_FromProgramStageTag( tag );

		// Display the value on the form.
		tag.val( value );

		// Save the data to system.  'saveVal()' is a DHIS built-in javascript method.
		saveVal( deId, value );
	}


	function setTableRowDisplay()
	{
		var mainTableTag = $( '#defaultEntryScreenContainer' );


		        // hide all the rows ------------
        //mainTableTag.find( 'tr.clinical,tr.referral' ).hide( 300 );
        		mainTableTag.find( 'tr.referral' ).hide( 300 );
        // show MainTag Clinical ---------        
        		mainTableTag.find( 'tr.clinical' ).show( 300 );
        
		// 
		var typeClinicalTag = getCFIDTags( 'typeClinical' );
		var typeReferralTag = getCFIDTags( 'typeReferral' );

		if ( typeClinicalTag.is( ":checked" ) )
		{
			mainTableTag.find( 'tr.clinical' ).show( 300 );
		}

		if ( typeReferralTag.is( ":checked" ) )
		{
			mainTableTag.find( 'tr.referral' ).show( 300 );
		}

		$( "#defaultEntryScreenContainer tbody tr" ).removeClass( "listRow listAlternateRow" );
		$( "#defaultEntryScreenContainere tbody tr:odd" ).addClass( "listAlternateRow" );
		$( "#defaultEntryScreenContainer tbody tr:even" ).addClass( "listRow" );
		$( "#defaultEntryScreenContainer tbody" ).trigger( "update" );

	}


	function getCFIDTags( tagId )
	{
		return $( "[cfid='" + tagId + "']" );
	}

	function getCFTypeTags( tagType )
	{
		return $( "[cftype='" + tagType + "']" );
	}


</script>
<style type="text/css">.mainDivStyle
{
  width: 100%;
}
</style>
<table class="listTable" style="width:100%;">
	<tbody>
		<tr>
			<th style="width:100px;"><span>Report Date</span> <em class="required" title="Required">*</em></th>
			<th style="text-align:left; width:150px;"><input custom="ReportDate" id="dBbLQeAdduT-lnvvvxBSa1E-val" name="entryfield" title="[ lnvvvxBSa1E - CORE - Monthly Report Period - TEXT ]" value="[CORE - Monthly Report Period]" /></th>
			<th>&nbsp;</th>
		</tr>
	</tbody>
</table>

<div class="mainDivStyle" id="mainDiv">
<div>Source: <input cfid="typeReferral" cftype="rowDisplayType" id="dBbLQeAdduT-MkAJpf9UNMg-val" name="entryselect" title="[ MkAJpf9UNMg - KH RH TRK - Data Source: Referral Voucher - TRUE_ONLY ]" type="checkbox" value="[KH RH TRK - Data Source: Referral Voucher]" /> Community Mobilizer &nbsp;&nbsp;&nbsp; <input cfid="typeClinical" cftype="rowDisplayType" id="dBbLQeAdduT-kY3KOlg0qwh-val" name="entryselect" title="[ kY3KOlg0qwh - KH RH TRK - Data Source: Clinical Record Copy - TRUE_ONLY ]" type="checkbox" value="[KH RH TRK - Data Source: Clinical Record Copy]" /> Clinical Record</div>
</div>

<table cellpadding="1" class="entryScreen formSection" id="defaultEntryScreenContainer">
	<colgroup>
		<col id="deCol" width="25%" />
		<col width="45%" />
	</colgroup>
	<thead>
		<tr>
			<th>Data element</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody id="list">
		<tr class="referral clinical">
			<td class="text-column" style="text-align: right;"><b>ក- Visit Type (Form) <em class="required" title="Required">*</em></b></td>
			<td class="input-column"><input custom="VisitType" id="dBbLQeAdduT-UmkN1UZC2UU-val" name="entryfield" title="[ UmkN1UZC2UU - KH RH TRK - Visit Type - TEXT ]" type="text" value="[KH RH TRK - Visit Type]" /></td>
		</tr>
		<tr class="referral clinical">
			<td class="text-column" style="text-align: right;"><b>ខ​- Event Type <em class="required" title="Required">*</em></b></td>
			<td class="input-column"><input id="dBbLQeAdduT-j3oNJ8DbNy4-val" name="entryfield" title="[ j3oNJ8DbNy4 - KH RH TRK - Event Type - TEXT ]" type="text" value="[KH RH TRK - Event Type]" /></td>
		</tr>
		<tr class="referral clinical">
			<td class="text-column" style="text-align: right;"><b>គ- Client Type <em class="required" title="Required">*</em></b></td>
			<td class="input-column"><input id="dBbLQeAdduT-Kh9QFTmP3BJ-val" name="entryfield" title="[ Kh9QFTmP3BJ - KH RH TRK - Client Type - TEXT ]" type="text" value="[KH RH TRK - Client Type]" /></td>
		</tr>
		<tr>
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;">KH RH CM - CM</td>
			<td class="input-column"><input id="dBbLQeAdduT-afl0pzVB9Hm-val" name="entryfield" title="[ afl0pzVB9Hm - KH RH TRK - CM - TEXT ]" value="[KH RH TRK - CM]" /></td>
		</tr>
		<tr class="referral clinical">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;">KH RH CM - Serial #</td>
			<td class="input-column"><input id="dBbLQeAdduT-ZNdGGew6loU-val" name="entryfield" title="[ ZNdGGew6loU - KH RH CM - Serial # - TEXT ]" type="text" value="[KH RH CM - Serial #]" /></td>
		</tr>
		<tr class="referral">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;">Method Desired by Client (from CM record)</td>
			<td class="input-column"><input id="dBbLQeAdduT-RlUzQFduZW0-val" name="entryfield" title="[ RlUzQFduZW0 - KH RH TRK - Method Desired by Client (from CM record) - TEXT ]" value="[KH RH TRK - Method Desired by Client (from CM record)]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right;"><b>ឃ- Used Contraception Previously </b></td>
			<td class="input-column"><input id="dBbLQeAdduT-ekVG3LuQcNz-val" name="entryselect" title="[ ekVG3LuQcNz - KH RH TRK - Used Contraception Previously - BOOLEAN ]" type="text" value="[KH RH TRK - Used Contraception Previously]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right;"><b>ង- Current Method</b></td>
			<td class="input-column"><input id="dBbLQeAdduT-e4m2C6B0pvT-val" name="entryfield" title="[ e4m2C6B0pvT - KH RH TRK - Method Current - TEXT ]" type="text" value="[KH RH TRK - Method Current]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right;"><b>ច- Reason for FP </b></td>
			<td class="input-column"><input id="dBbLQeAdduT-ol6CTqIr1da-val" name="entryfield" title="[ ol6CTqIr1da - KH RH TRK - Reason for FP - TEXT ]" type="text" value="[KH RH TRK - Reason for FP]" /></td>
		</tr>
		<tr class="referral clinical">
			<td align="center" class="text-column">
			<div style="text-align: right;"><b>ឆ.1 - Adopted Method <em class="required" title="Required">*</em></b></div>

			<div style="text-align: right;"><span style="color:#A9A9A9;">Auxiliar method</span></div>
			</td>
			<td class="input-column">
			<div><input custom="AdoptedMethod" id="dBbLQeAdduT-p9pPy7mSrIg-val" name="entryfield" title="[ p9pPy7mSrIg - KH RH TRK - Method Adopted - TEXT ]" type="text" value="[KH RH TRK - Method Adopted]" /></div>

			<div><input custom="SimpleService" id="dBbLQeAdduT-vLOnjzQ3R8R-val" name="entryfield" title="[ vLOnjzQ3R8R - KH RH TRK - Simple Service - TEXT ]" type="text" value="[KH RH TRK - Simple Service]" /></div>
			</td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;"># of condoms</td>
			<td class="input-column"><input id="dBbLQeAdduT-ahGiJGEXMYw-val" name="entryfield" title="[ ahGiJGEXMYw - KH RH TRK - # of Condoms supplied to client - INTEGER ]" type="text" value="[KH RH TRK - # of Condoms supplied to client]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;"># of Oral Cycles</td>
			<td class="input-column"><input id="dBbLQeAdduT-nd8yQYB1IN3-val" name="entryfield" title="[ nd8yQYB1IN3 - KH RH TRK - # of Oral Cycles supplied to client - INTEGER ]" type="text" value="[KH RH TRK - # of Oral Cycles supplied to client]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;"># of EC packs</td>
			<td class="input-column"><input id="dBbLQeAdduT-ZHjMbjkcFUV-val" name="entryfield" title="[ ZHjMbjkcFUV - KH RH TRK - # of EC packs supplied to client - INTEGER ]" type="text" value="[KH RH TRK - # of EC packs supplied to client]" /></td>
		</tr>
		<tr>
			<td class="text-column" style="text-align: right;"><b style=" text-align: right;">ឆ.2 -<span style="text-align: right;">&nbsp;Occasion (Post Patum/ Abortion or Type of Woman)&nbsp;</span><em class="required" style="text-align: right;" title="Required">*</em> </b></td>
			<td class="input-column"><input id="dBbLQeAdduT-mUmb2lpgS3W-val" name="entryfield" title="[ mUmb2lpgS3W - KH RH TRK - Occasion - TEXT ]" type="text" value="[KH RH TRK - Occasion]" /></td>
		</tr>
		<tr>
			<td class="text-column" style="text-align: right;"><b>ឆ.3 - Service Provided </b></td>
			<td class="input-column"><input custom="ServiceProvided" id="dBbLQeAdduT-A7Kgbq47qBE-val" name="entryfield" title="[ A7Kgbq47qBE - KH RH TRK - Service Provided - TEXT ]" type="text" value="[KH RH TRK - Service Provided]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right;"><b>ឆ.4 ​- Reason for Removal </b></td>
			<td class="input-column"><input id="dBbLQeAdduT-qribcbBYFrm-val" name="entryfield" title="[ qribcbBYFrm - KH RH TRK - Reason for Removal - TEXT ]" type="text" value="[KH RH TRK - Reason for Removal]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right;"><b>ជ- Product Source </b></td>
			<td class="input-column"><input custom="ProductSource" id="dBbLQeAdduT-FuttuQb5YNq-val" name="entryfield" title="[ FuttuQb5YNq - KH RH TRK - Product Source - TEXT ]" type="text" value="[KH RH TRK - Product Source]" /></td>
		</tr>
		<tr class="clinical">
			<td class="text-column" style="text-align: right; background-color:#FFFFFF;">Cost</td>
			<td class="input-column"><input custom="ProductCost" id="dBbLQeAdduT-QmENQnx0Vaa-val" name="entryfield" title="[ QmENQnx0Vaa - KH RH TRK - Cost - TEXT ]" type="text" value="[KH RH TRK - Cost]" /></td>
		</tr>
	</tbody>
</table>
