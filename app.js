( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName === "back" ) {
			var page = document.getElementsByClassName( 'ui-page-active' )[0],
				pageid = page ? page.id : "";
			if( pageid === "main" ) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) { }
			} else {
				window.history.back();
			}
		}
	});
	
	function saveAndExit() {
		var tz1, tz2, offset, color, wapi, dataString, file, tz1abbr, tz2abbr, tfmode1, tfmode2, temp, tfmodeH1, tfmodeH2;
		tz1 = document.getElementById("s_tz1").innerHTML;
		tz2 = document.getElementById("s_tz2").innerHTML;
		offset = document.getElementById("s_to").innerHTML;
		color = document.getElementById("s_ac").innerHTML;
		wapi = document.getElementById("s_api").innerHTML;
		tfmode1 = document.getElementById("s_tf1").innerHTML;
		tfmode2 = document.getElementById("s_tf2").innerHTML;
		temp = document.getElementById("s_td").innerHTML;
		
 		switch(tz1) {
 		case 'Asia/Hong_Kong':
 			tz1abbr = 'CST';
 			break;
 		case 'Asia/Tokyo':
 			tz1abbr = 'JST';
 			break;
 		case 'Australia/Sydney':
 			tz1abbr = 'AEST';
 			break;
 		case 'US/Hawaii':
 			tz1abbr = 'HDT';
 			break;
 		case 'US/Pacific':
 			tz1abbr = 'PDT';
 			break;
 		case 'US/Mountain':
 			tz1abbr = 'MDT';
 			break;
 		case 'US/Central':
 			tz1abbr = 'CDT';
 			break;
 		case 'US/Eastern':
 			tz1abbr = 'EDT';
 			break;
 		case 'UTC':
 			tz1abbr = 'UTC';
 			break;
 		case 'Etc/GMT+1':
 			tz1 = 'Etc/GMT-1';
 			tz1abbr = 'UT+1';
 			break;
 		case 'Etc/GMT+2':
 			tz1 = 'Etc/GMT-2';
 			tz1abbr = 'UT+2';
 			break;
 		case 'Etc/GMT+3':
 			tz1 = 'Etc/GMT-3';
 			tz1abbr = 'UT+3';
 			break;
 		case 'Etc/GMT+4':
 			tz1 = 'Etc/GMT-4';
 			tz1abbr = 'UT+4';
 			break;
 		case 'Etc/GMT+5':
 			tz1 = 'Etc/GMT-5';
 			tz1abbr = 'UT+5';
 			break;
 		case 'Etc/GMT+6':
 			tz1 = 'Etc/GMT-6';
 			tz1abbr = 'UT+6';
 			break;
 		case 'Etc/GMT+7':
 			tz1 = 'Etc/GMT-7';
 			tz1abbr = 'UT+7';
 			break;
 		case 'Etc/GMT+8':
 			tz1 = 'Etc/GMT-8';
 			tz1abbr = 'UT+8';
 			break;
 		case 'Etc/GMT+9':
 			tz1 = 'Etc/GMT-9';
 			tz1abbr = 'UT+9';
 			break;
 		case 'Etc/GMT+10':
 			tz1 = 'Etc/GMT-10';
 			tz1abbr = 'U+10';
 			break;
 		case 'Etc/GMT+11':
 			tz1 = 'Etc/GMT-11';
 			tz1abbr = 'U+11';
 			break;
 		case 'Etc/GMT+12':
 			tz1 = 'Etc/GMT-12';
 			tz1abbr = 'U+12';
 			break;
 		case 'Etc/GMT-1':
 			tz1 = 'Etc/GMT+1';
 			tz1abbr = 'UT-1';
 			break;
 		case 'Etc/GMT-2':
 			tz1 = 'Etc/GMT+2';
 			tz1abbr = 'UT-2';
 			break;
 		case 'Etc/GMT-3':
 			tz1 = 'Etc/GMT+3';
 			tz1abbr = 'UT-3';
 			break;
 		case 'Etc/GMT-4':
 			tz1 = 'Etc/GMT+4';
 			tz1abbr = 'UT-4';
 			break;
 		case 'Etc/GMT-5':
 			tz1 = 'Etc/GMT+5';
 			tz1abbr = 'UT-5';
 			break;
 		case 'Etc/GMT-6':
 			tz1 = 'Etc/GMT+6';
 			tz1abbr = 'UT-6';
 			break;
 		case 'Etc/GMT-7':
 			tz1 = 'Etc/GMT+7';
 			tz1abbr = 'UT-7';
 			break;
 		case 'Etc/GMT-8':
 			tz1 = 'Etc/GMT+8';
 			tz1abbr = 'UT-8';
 			break;
 		case 'Etc/GMT-9':
 			tz1 = 'Etc/GMT+9';
 			tz1abbr = 'UT-9';
 			break;
 		case 'Etc/GMT-10':
 			tz1 = 'Etc/GMT+10';
 			tz1abbr = 'U-10';
 			break;
 		case 'Etc/GMT-11':
 			tz1 = 'Etc/GMT+11';
 			tz1abbr = 'U-11';
 			break;
 		case 'Etc/GMT-12':
 			tz1 = 'Etc/GMT+12';
 			tz1abbr = 'U-12';
 			break;
 		default:
 			tz1 = 'UTC';
 			tz1abbr = '---';
 			break;
 		}
 		
 		switch(tz2) {
 		case 'Asia/Hong_Kong':
 			tz2abbr = 'CST';
 			break;
 		case 'Asia/Tokyo':
 			tz2abbr = 'JST';
 			break;
 		case 'Australia/Sydney':
 			tz2abbr = 'AEST';
 			break;
 		case 'US/Hawaii':
 			tz2abbr = 'HDT';
 			break;
 		case 'US/Pacific':
 			tz2abbr = 'PDT';
 			break;
 		case 'US/Mountain':
 			tz2abbr = 'MDT';
 			break;
 		case 'US/Central':
 			tz2abbr = 'CDT';
 			break;
 		case 'US/Eastern':
 			tz2abbr = 'EDT';
 			break;
 		case 'UTC':
 			tz2abbr = 'UTC';
 			break;
 		case 'Etc/GMT+1':
 			tz2 = 'Etc/GMT-1';
 			tz2abbr = 'UT+1';
 			break;
 		case 'Etc/GMT+2':
 			tz2 = 'Etc/GMT-2';
 			tz2abbr = 'UT+2';
 			break;
 		case 'Etc/GMT+3':
 			tz2 = 'Etc/GMT-3';
 			tz2abbr = 'UT+3';
 			break;
 		case 'Etc/GMT+4':
 			tz2 = 'Etc/GMT-4';
 			tz2abbr = 'UT+4';
 			break;
 		case 'Etc/GMT+5':
 			tz2 = 'Etc/GMT-5';
 			tz2abbr = 'UT+5';
 			break;
 		case 'Etc/GMT+6':
 			tz2 = 'Etc/GMT-6';
 			tz2abbr = 'UT+6';
 			break;
 		case 'Etc/GMT+7':
 			tz2 = 'Etc/GMT-7';
 			tz2abbr = 'UT+7';
 			break;
 		case 'Etc/GMT+8':
 			tz2 = 'Etc/GMT-8';
 			tz2abbr = 'UT+8';
 			break;
 		case 'Etc/GMT+9':
 			tz2 = 'Etc/GMT-9';
 			tz2abbr = 'UT+9';
 			break;
 		case 'Etc/GMT+10':
 			tz2 = 'Etc/GMT-10';
 			tz2abbr = 'U+10';
 			break;
 		case 'Etc/GMT+11':
 			tz2 = 'Etc/GMT-11';
 			tz2abbr = 'U+11';
 			break;
 		case 'Etc/GMT+12':
 			tz2 = 'Etc/GMT-12';
 			tz2abbr = 'U+12';
 			break;
 		case 'Etc/GMT-1':
 			tz2 = 'Etc/GMT+1';
 			tz2abbr = 'UT-1';
 			break;
 		case 'Etc/GMT-2':
 			tz2 = 'Etc/GMT+2';
 			tz2abbr = 'UT-2';
 			break;
 		case 'Etc/GMT-3':
 			tz2 = 'Etc/GMT+3';
 			tz2abbr = 'UT-3';
 			break;
 		case 'Etc/GMT-4':
 			tz2 = 'Etc/GMT+4';
 			tz2abbr = 'UT-4';
 			break;
 		case 'Etc/GMT-5':
 			tz2 = 'Etc/GMT+5';
 			tz2abbr = 'UT-5';
 			break;
 		case 'Etc/GMT-6':
 			tz2 = 'Etc/GMT+6';
 			tz2abbr = 'UT-6';
 			break;
 		case 'Etc/GMT-7':
 			tz2 = 'Etc/GMT+7';
 			tz2abbr = 'UT-7';
 			break;
 		case 'Etc/GMT-8':
 			tz2 = 'Etc/GMT+8';
 			tz2abbr = 'UT-8';
 			break;
 		case 'Etc/GMT-9':
 			tz2 = 'Etc/GMT+9';
 			tz2abbr = 'UT-9';
 			break;
 		case 'Etc/GMT-10':
 			tz2 = 'Etc/GMT+10';
 			tz2abbr = 'U-10';
 			break;
 		case 'Etc/GMT-11':
 			tz2 = 'Etc/GMT+11';
 			tz2abbr = 'U-11';
 			break;
 		case 'Etc/GMT-12':
 			tz2 = 'Etc/GMT+12';
 			tz2abbr = 'U-12';
 			break;
 		default:
 			tz2 = 'UTC';
 			tz2abbr = '---';
 			break;
 		}
		
 		if (tfmode1 == '12 Hours') {
 			tfmodeH1 = '12';
 		} else {
 			tfmodeH1 = '24';
 		}
 		
 		if (tfmode2 == '12 Hours') {
 			tfmodeH2 = '12';
 		} else {
 			tfmodeH2 = '24';
 		}
 		
 		// tz1 = 0, tz2 = 1, offset = 2, tfmode1 = 3, tfmode2 = 4, temp = 5, color = 6, wapi = 7, tz1abbr = 8, tz2abbr = 9
		dataString = tz1 + "," + tz2 + "," + offset + "," + color + "," + wapi + "," + tz1abbr + "," + tz2abbr + "," + tfmodeH1 + "," + tfmodeH2 + "," + temp;
		
		function onsuccess(file) {
			if (file !== null) {
				file.openStream("w", function(fs) { fs.write(dataString); fs.close(); }, null, "UTF-8" );
				alert("Saved! Please\nrestart AWatch.");
			}
		}
		function onfailure(e) {
			tizen.filesystem.resolve('documents', function(dir) { 
				file = dir.createFile('awatchdata.txt'); 
				if (file !== null) {
					file.openStream("w", function(fs) { fs.write(dataString); fs.close(); }, null, "UTF-8" );
					alert("Saved! Please\nrestart AWatch.");
				}
			}, null, "rw");
		}
		tizen.filesystem.resolve('documents/awatchdata.txt', onsuccess, onfailure, "rw");		
	}
	
	document.getElementById("2btnPopup-ok-min").addEventListener("click", function() {
		document.getElementById("s_to").innerHTML = document.getElementById("minutesOffset").value;
	});
	document.getElementById("2btnPopup-ok-color").addEventListener("click", function() {
		document.getElementById("s_ac").innerHTML = document.getElementById("hexColor").value;
	});
	document.getElementById("2btnPopup-ok-wapi").addEventListener("click", function() {
		document.getElementById("s_api").innerHTML = document.getElementById("wAPI").value;
	});
	document.getElementById("tz1_sel").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tz1").innerHTML = text;
	});
	document.getElementById("tfmode1").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tf1").innerHTML = text;
	});
	document.getElementById("tfmode2").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tf2").innerHTML = text;
	});
	document.getElementById("tempdisp").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_td").innerHTML = text;
	});
	document.getElementById("tz2_sel").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tz2").innerHTML = text;
	});
	document.getElementById("saveexit").addEventListener("click", function() {
		saveAndExit();
	});
	
}() );
