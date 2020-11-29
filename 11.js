// Promise

import log from './module/log.js';

let p = new Promise((resolve, reject)=>{
	log('#1');
	setTimeout(() => {
		log('1 second later');
		resolve();
	}, 1000);
}).then(()=>{
	log("#1 success");
	return new Promise(function(resolve, reject){
		log('#2');
		setTimeout(() => {
			log('2 seconds later');
			resolve();
		}, 2000);
	});
}, function() {
	log("#1 failed");
}).then(()=>{
	log("#2 success");
	return new Promise(function(resolve, reject){
		log('#3');
		setTimeout(() => {
			log('3 seconds later');
			//resolve();
			reject();
		}, 3000);
	});
}, function() {
	log("#2 failed");
}).then(()=>{
	log("#3 success");
}, function() {
	log("#3 failed");
});
