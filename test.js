var yh = require('yahoo-finance')
var tl = require('talib')

require('./ipc.js')

function snapshot(symbols){
	yh.snapshot({symbols:symbols, fields: ['l1']}, 
		function(err, snapshot){
			console.log(snapshot)
			console.log('IPC: ' + sumIPC(snapshot))
	})
}

function sumIPC(symbols){
	var ipc = 0
	for (var key in symbols)
		ipc += symbols[key].lastTradePriceOnly

	return ipc
}

//console.log(ipc)

var symbols = []

for (var key in ipc.components)
	symbols.push(ipc.components[key].symbol + BMV_SFX)

console.log(symbols)
snapshot(symbols)