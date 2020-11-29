export default function(msg) {
	let dt = Intl.DateTimeFormat('en-US', { hour:'numeric', minute:'numeric', second:'numeric', hour12:false}).format(new Date());
	console.log(`${dt}: ${msg}`);
}