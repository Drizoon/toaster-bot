'use strict';

const secrets = require('./secrets');

const opts = {
    connection: {
        secure: true
    },
    identity: {
        username: 'Conkers_Bot',
        password: secrets.ircPassword
    },
    channels: [
        '#drizoon',
        '#bananabrea',
		'#papavince',
    ]
};

// Valid commands start with:
const commandPrefix = '$';

// Twitch API Client ID
const krakenClientId = secrets.krakenClientId;

// list of users with superuser privileges. Use with extreme caution, since
// these users have access to arbitrary code execution with !debug
let administrators = [
    'drizoon',
	
];

let moderators = [
	'niosver',

];

// The bot will post a "I am running"-style message to this channel on startup.
const startupChannel = 'drizoon';

// if a channel is offline-only protected, and a change occurs, the bot prints
// to this channel instead of the channel the change occurred in.
const onlinePrintChannel = 'drizoon';

// list of channel names where the bot is not limited to the global 1.2 second
// slowmode (channels it is broadcaster, moderator or VIP in)
const modChannels = [
	"drizoon",
	"bananabrea"
];

// tip: use !userid <usernames...> command in the #pajlada chat to get user IDs
// add the "protection" object to enable pajbot banphrase checking protection
// pajbotLinkFilter filters out parts of the message that would match the link regex
// add lengthLimit and/or valueLengthLimit to set message length limits and length limits
// for the value printed into notify messages (value will be clipped otherwise)
// if unset, default values of 500 and lengthLimit/4 will be used
// add offlineOnly = true to make the bot only print notifies while channel is offline (or changing live status)
// disabledCommands can be an array of (lowercase) command names to disable

// this character is injected into some channels where the broadcaster asked to not get pinged
// by notifies in his channel
const invisibleAntiPingCharacter = "\u206D";

function obfuscateName(str) {
    return str.split('').join(invisibleAntiPingCharacter);
}

let enabledChannels = {
	"drizoon": {
		"id": 26890918,
		"formats": {
			"title": "drizooLurk New Title 👉 $VALUE$ 👉 ",
			"game": "drizooLurk Game has been updated 👉 $VALUE$ 👉 ",

		},
	},
	"bananabrea": {
		"id": 89486159,
		"formats": {
			"title": "breaLurk New Title 👉 $VALUE$ 👉 ",
			"game": "breaLurk Game has been updated 👉 $VALUE$ 👉 ",
			"offline": "Banana is offline FeelsGoodMan Clap 👉 ",
			"live": "Banana is live peepoPog 👉 "
		},
	},
	"papavince": {
		"id": 54502482,
		"formats": {
			"live": "Vince is live with yearly stream FeelsGoodMan Clap 👉 ",
			"offline": "ButterSauce Another year of silence ButterSauce 👉 "
		},
	},
	
};

module.exports = {
    "opts": opts,
    "commandPrefix": commandPrefix,
    "krakenClientId": krakenClientId,
    "administrators": administrators,
	"moderators" : moderators,
    "startupChannel": startupChannel,
    "onlinePrintChannel": onlinePrintChannel,
    "modChannels": modChannels,
    "enabledChannels": enabledChannels
};
