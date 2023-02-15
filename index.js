var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stuDBName = "STU-DB";
var stuRelationName = "StuData";
var connToken = "90932615|-31949277753888548|90949012";
$("#srno").focus();







function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrobj===" ") {
        return " ";
    } 

    var putRequest = createPUTRequest (connToken, jsonStrobj, stuDBName, stuRelationName); 
    jQuery.ajaxSetup({async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl (putRequest,jpdbBaseURL, jpdbIML); 
    jQuery.ajaxSetup({async: true});
    resetForm(); 
    $('#srno').focus();
}




function validateData() {
	var srno,sfullname,sclass,sbdate,saddress,sedate;
	srno = $("#srno").val();
	sfullname= $("#sfullname").val(); 
	sclass=$("#sclass").val(); 
	sbdate = $("#sbdate").val();
	saddress= $("#saddress").val();
	sedate= $("#sedate").val(); 

	if (srno === '') {
		alert("Student Roll Number is missing"); 				
        $("#srno").focus();
		return " ";
	}
	
	if (sfullname==="") {
		alert("student FUll Name missing");
		$("#sfullname").focus();
		return " ";
	}

	if (sclass==="") {
		alert("Student Class is missing");
		$("#sclass").focus();
		return " ";
	}

	if (sbdate==="") {
		alert("Student Birth date is missing");
		$("#sbdate").focus();
		return " ";
	}


	if (saddress==="") {
		alert("Student address is missing");
		$("#saddress").focus();
		return " ";
	}

	if (sedate==="") {
		alert("Student Enrollment date is missing");
		$("#sedate").focus();
		return " ";
	}

	var jsonStrobj = {
		rno: srno,
		name: sfullname,
		class:sclass ,
		bdate: sbdate,
		saddress: saddress,
		edate: sedate
	};
	
	return JSON.stringify(jsonStrobj);


}



function changeData() {
	$('#change').prop("disabled", true); 
	jsonchg=validateData();
	var updateRequest = createUPDATERecordRequest(connToken, jsonChg, empDBName, empRelationName,localStorage.getItem('recno'));
	jQuery.ajaxSetup({async: false});
	var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
	jQuery.ajaxSetup({async: true});
	console.log(resJsonObj); 
	resetForm();
	$('#empid').focus();
}


function resetForm() {
    $('#srno').val("");
    $('#sfullname').val("");
    $('#sclass').val("");
    $('#sbdate').val("");
    $("#saddress").val("");
    $("#sedate").val("");
    $('#srno').prop("disabled", false);
    $('#save').prop("disabled", true);
    $('#change').prop("disabled", true);
    $("#reset").prop("disabled", true);
    $('#srno').focus();
    }


	function getStu() {

		var srnoJsonObj = getSrnoAsJsonObj();
		var getRequest = createdET_BY_KEYRequest(connToken, stuDBName, stuRelationName, srnoJsonObj);
		jQuery.ajaxSetup({async: false});
		var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
		jQuery.ajaxSetup({async: true});
	
		if (resJsonObj.status === 400) {
	
			$("#save").prop("disabled", false);
			$("#reset").prop('disabled', false); 
			$("#sfullname").focus();
		} 
	
		else if (resJsonObj.status===200) {
	
			$( "#srno").prop("disabled", true); 
			fillData(resJsonObj);
	
			$("#change").prop("disabled", false);
			$("#reset").prop("disabled", false);
			$("#empname").focus();
		}
	}


	function saveRecNo2LS(jsonObj) {
		var lvData = JSON.parse(jsonObj.data);
		localStorage.setItem("recno", lvData.rec_no);
	}
	
	
	function getSrnoAsJsonObj() {
	
		var  srno = $('#srno').val();
		var jsonStr = {
			id:srno
		}; 
		return JSON.stringify(jsonStr);
	}
	
	
	function fillData(jsonObj) { 
		saveRecNo2LS(jsonObj);
		var record = JSON.parse(jsonObj.data).record;
		$("#sfullname").val(data.name); 
		$("#sclass").val(data.class);
		$("#sbdate").val(data.bdate);
		$("#saddress").val(data.address);
		$("#sedate").val(data.edate);
	}
	