window.onload = function() {
	function onsuccess(file) {
		var awatchSettings;
 		if (file.isDirectory === false) {
			file.readAsText(
			function(str) { 
				awatchSettings = str.split(",");
				document.getElementById("s_tz1").innerHTML = awatchSettings[0];
				document.getElementById("s_tz2").innerHTML = awatchSettings[1];
				document.getElementById("s_to").innerHTML = awatchSettings[2];
				document.getElementById("s_ac").innerHTML = awatchSettings[3];
				document.getElementById("s_api").innerHTML = awatchSettings[4];
				if (awatchSettings.length == 7) {
					awatchSettings[7] = '12';
					awatchSettings[8] = '12';
					awatchSettings[9] = 'Fahrenheit';
				}
				document.getElementById("s_tf1").innerHTML = awatchSettings[7] + ' Hours';
				document.getElementById("s_tf2").innerHTML = awatchSettings[8] + ' Hours';
				document.getElementById("s_td").innerHTML = awatchSettings[9];					
			}, null, 'UTF-8' );
		}
	}
	function onfailure(e) {
		var file, newDataString = 'US/Pacific,Asia/Tokyo,0,#BDE52A,api-key-from-wu,PDT,JST,12,12,Fahrenheit';
		tizen.filesystem.resolve('documents', function(dir) { 
			file = dir.createFile('awatchdata.txt'); 
			if (file !== null) {
				file.openStream("w", function(fs) { fs.write(newDataString); fs.close(); }, null, "UTF-8" );
			}
			document.getElementById("s_tz1").innerHTML = 'US/Pacific';
			document.getElementById("s_tz2").innerHTML = 'Asia/Tokyo';
			document.getElementById("s_to").innerHTML = '0';
			document.getElementById("s_ac").innerHTML = '#BDE52A';
			document.getElementById("s_api").innerHTML = 'api-key-from-wu';
			document.getElementById("s_tf1").innerHTML = '12 Hours';
			document.getElementById("s_tf2").innerHTML = '12 Hours';
			document.getElementById("s_td").innerHTML = 'Fahrenheit';
		}, null, "rw");
	}
	tizen.filesystem.resolve('documents/awatchdata.txt', onsuccess, onfailure, "rw");
};