global.currencyTypes = {
	"ltc": {
		id: "ltc",
		type:"native",
		name:"LTC",
		multiplier:1,
		default:true,
		decimalPlaces:8
	},
	"lit": {
		id: "lit",
		type:"native",
		name:"lit",
		multiplier:100000000,
		decimalPlaces:0
	},
	"usd": {
		id: "usd",
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		decimalPlaces:2,
		symbol:"$"
	},
	"eur": {
		id: "eur",
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		decimalPlaces:2,
		symbol:"€"
	},
	"gbp": {
		id: "gbp",
		type:"exchanged",
		name:"GBP",
		multiplier:"gbp",
		decimalPlaces:2,
		symbol:"£"
	},
};

global.currencySymbols = {
	"ltc": "₿",
	"usd": "$",
	"eur": "€",
	"gbp": "£"
};