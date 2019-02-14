# yoinkedtitlechange-bot

Taken from Randers00 titlechange-bot for use in my own channels FeelsOkayMan

Command Prefix: $

## Commands everyone can use

*if it is not disabled on a channel by channel basis
*only commands I have added not those from Randers00

**notify <user> <message>
  	Store a message to send to <user> next time they type in any of the connected chats
   	*<message> may not be null*
	

**disablePings**
	Disable anyone from using $notify to leave message for you and prevent
	the bot from sending you any already saved messages.


**afk <message>
	Sets you to afk with specific message, this message is retrieved when someone uses the isAfk command
	or the next time you type in a connected chats
	
	
**isAfk <user>**
	Checks if <user> is afk and returns the message they went afk with
	
	
**cookie**
	Gives you a random fortune FeelsOkayMan
	
	

## Bot Mod Only Commands

	
**dumpUser <user>
	Empty the array of all messages for <user>
	
	
**disableUser <user>
	Disable <user> from using any part of the bot
	
	
**reenableUser <user>
	Re-enable <user> to use the bot. Does nothing if <user> is not disabled
	
	
**disablePings <user>
	Disable <user> from recieving messages
	
	
**reenablePings <user>
	Re-enable <user> to recieve messages. Does nothing if <user> is not disabled
	
	
**disablePinger <user>
	Disable <user> from sending messages to other users
	
	
**reenablePinger <user>
	Re-enable <user> to send messages to other users. Does nothing if <user> is not disabled
	
