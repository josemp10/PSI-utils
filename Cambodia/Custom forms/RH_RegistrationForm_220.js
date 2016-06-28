<script>

var attr_Age="attr240136";
var attr_Age_Group="attr672486";
var attr_Year="wSp6Q7QDMsk";
//var attr_UIC="attr290434";

var age="";
var year="";
var fullDB ="";
//var UIC="";

$( document ).ready( function() 
{
  $("#attr672486").attr('disabled','disabled');
  $("#attr672486").val("Unknown");
  $("#attr672486").change();
  
  
  var d= new Date();
  var y= d.getFullYear();

  console.log(y);

  
  $("#attr240136").change(function(){

    age=parseInt($("#attr240136").val());
    year=y-age ; 
    fullDB= year+"-01-01";
    $("#attr240135").val(fullDB);
    $("#attr240135").change();
    
    $("#attr290439").val("[2] Currently Married");
    $("#attr290439").change();
 

    if (age>=0 && age <15) { $("#attr672486").val("< 15"); $("#attr672486").change(); } 
    else if (age>=15 && age <20) { $("#attr672486").val("15 - 19"); $("#attr672486").change();}
    else if (age>=20 && age <25) { $("#attr672486").val("20 - 24"); $("#attr672486").change();}
    else if (age>=25 && age <30) { $("#attr672486").val("25 - 29"); $("#attr672486").change();}
    else if (age>=30 && age <35) { $("#attr672486").val("30 - 34"); $("#attr672486").change();}
    else if (age>=35 && age <40) { $("#attr672486").val("35 - 39"); $("#attr672486").change();}
    else if (age>=40 && age <45) { $("#attr672486").val("40 - 44"); $("#attr672486").change();}
    else if (age>=45 && age <50) { $("#attr672486").val("45 - 49"); $("#attr672486").change();}
    else if (age>=50) { $("#attr672486").val("50 +"); $("#attr672486").change();}
    else $("#attr672486").val("Unknown"); 

  });

     
   $("#attr290434").focus(function(){
        var strDob = $("#attr240135").val();
        var substrDob = strDob.substr(2, 2);
        $("#txtProvince").css("display", "inline").fadeIn(200);
        
       if ($("#attr290434").val() =="" && $("#attr240136").val() > 0){
           $("#attr290434").val("2"+ substrDob);
       }
    });
   $("#attr290434").blur(function(){
        $("#txtProvince").css("display", "inline").fadeOut(200);
    });



});

</script>
<style type="text/css">#txtProvince{ display: none;}
</style>
<table border="0" cellpadding="1" cellspacing="1" style="width:100%;">
	<tbody>
		<tr>
			<td style="text-align: right; width:220px;"><span>Date of enrollment &nbsp;</span></td>
			<td><input programid="enrollmentDate" title="Enrollment date KH RH Clinical" value="[Enrollment date KH RH Clinical]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Full Name &nbsp;</td>
			<td><input attributeid="LoGHwYUQZ9y" title="Full name  * " value="[Full name  * ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Age &nbsp;</td>
			<td><input attributeid="JM9qqwDihBV" title="Age  * " value="[Age  * ]" /> <input attributeid="uJxScGS52wa" style="visible:hidden;" title="KH - Age groups (HSR) " value="[KH - Age groups (HSR) ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Birth Date &nbsp;</td>
			<td><input attributeid="wSp6Q7QDMsk" title="CORE - Date of Birth " value="[CORE - Date of Birth ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Unique ID &nbsp;</td>
			<td><input attributeid="zRA08XEYiSF" title="KH - Unique ID " value="[KH - Unique ID ]" />
			<div id="txtProvince">01:BMC, 02:BTB, 03:KPC, 04:KCH, 05:KPS, 06:KPT, 07:KAP, 08:KDL, 09:KKG, 10:KRT, 11:MDK, 12:PNP, 13:PVH,<br />
			14:PVG, 15:PST, 16:RTK, 17:SRP, 18:SHV, 19:STG, 20:SVR, 21:TAK, 22:OMC, 23:KEP, 24:PLN, 25:TBK</div>
			</td>
		</tr>
		<tr>
			<td style="text-align: right;"><span>Phone Number &nbsp;</span></td>
			<td><input attributeid="C1twCsH0rjI" title="CORE - Phone number " value="[CORE - Phone number ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Client ok with Telephone Contact? &nbsp;</td>
			<td><input attributeid="BaUC1T1rO8Z" title="CORE - Client ok with telephone contact " value="[CORE - Client ok with telephone contact ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Children Alive &nbsp;</td>
			<td><input attributeid="FjN9pWDBEhU" title="Children Alive " value="[Children Alive ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Abortions</td>
			<td><input attributeid="RyfhrMs6IOU" title="Abortions " value="[Abortions ]" /></td>
		</tr>
		<tr>
			<td style="text-align: right;">Marital Status &nbsp;</td>
			<td><input attributeid="bcC5QuSW600" title="KH - Marital Staus " value="[KH - Marital Staus ]" /></td>
		</tr>
	</tbody>
</table>
