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
		var tz1, tz2, offset, color, wapi, dataString, file, tz1abbr, tz2abbr;
		tz1 = document.getElementById("s_tz1").innerHTML;
		tz2 = document.getElementById("s_tz2").innerHTML;
		offset = document.getElementById("s_to").innerHTML;
		color = document.getElementById("s_ac").innerHTML;
		wapi = document.getElementById("s_api").innerHTML;
		
 		switch(tz1) {
 		case 'Asia/Hong_Kong':
 			tz1abbr = 'CST';
 			break;
 		case 'Asia/Tokyo':
 			tz1abbr = 'JST';
 			break;
 		case 'Australia/Sydney':
 			tz1abbr = 'AE-T';
 			break;
 		case 'US/Hawaii':
 			tz1abbr = 'H-T';
 			break;
 		case 'US/Pacific':
 			tz1abbr = 'P-T';
 			break;
 		case 'US/Mountain':
 			tz1abbr = 'M-T';
 			break;
 		case 'US/Central':
 			tz1abbr = 'C-T';
 			break;
 		case 'US/Eastern':
 			tz1abbr = 'E-T';
 			break;
 		default:
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
 			tz2abbr = 'AE-T';
 			break;
 		case 'US/Hawaii':
 			tz2abbr = 'H-T';
 			break;
 		case 'US/Pacific':
 			tz2abbr = 'P-T';
 			break;
 		case 'US/Mountain':
 			tz2abbr = 'M-T';
 			break;
 		case 'US/Central':
 			tz2abbr = 'C-T';
 			break;
 		case 'US/Eastern':
 			tz2abbr = 'E-T';
 			break;
 		default:
 			tz2abbr = '---';
 			break;
 		}
		
		dataString = tz1 + "," + tz2 + "," + offset + "," + color + "," + wapi + "," + tz1abbr + "," + tz2abbr;
		
		function onsuccess(file) {
			if (file !== null) {
				file.openStream("w", function(fs) { fs.write(dataString); fs.close(); }, null, "UTF-8" );
				alert("Settings Saved");
			}
		}
		function onfailure(e) {
			tizen.filesystem.resolve('documents', function(dir) { 
				file = dir.createFile('awatchdata.txt'); 
				if (file !== null) {
					file.openStream("w", function(fs) { fs.write(dataString); fs.close(); }, null, "UTF-8" );
					alert("Settings Saved");
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
	document.getElementById("tz1_sel").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tz1").innerHTML = text;
	});
	document.getElementById("tz2_sel").addEventListener("click", function() {
		 var e = window.event, target = e.target, text = target.textContent;   
		 document.getElementById("s_tz2").innerHTML = text;
	});
	document.getElementById("saveexit").addEventListener("click", function() {
		saveAndExit();
	});
	
}() );
