let boats = [];

window.sig._boats.forEach(

function serialiseBoat(b) {
	
	const boatObj = {};
	boatObj.name = b.name;
	boatObj.id = b.id;
	
	boatObj.locations = [];
	b.track.locations.forEach(
		function serialiseTrack(t) {
			const loc = {};
			loc.lat = t.lat;
			loc.lng = t.lng;
			loc.timecode = t.timecode;
			
			boatObj.locations.push(loc);
		}
	);

	boats.push(boatObj);
}

);
// console.log();
let data = new Blob([JSON.stringify(boats)], {type: 'text/json'});

csvURL = window.URL.createObjectURL(data);
const downloadLink = document.createElement("a");
downloadLink.href = csvURL;
downloadLink.download = "vendee.json";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
window.URL.revokeObjectURL(csvURL);

console.log("Done");
