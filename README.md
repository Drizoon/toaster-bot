# yoinkedtitlechange-bot

Taken from Randers00 titlechange-bot for use in my own channels FeelsOkayMan

Command Prefix: $

## Commands everyone can use

*if it is not disabled on a channel by channel basis*<br/>
*only commands I have added not those from Randers00*<br/>

**notify [user] [message]**<br/>
  	Store a message to send to <user> next time they type in any of the connected chats<br/>
   	*[message] may not be null*
	

**disablePings**<br/>
	Disable anyone from using $notify to leave message for you and prevent
	the bot from sending you any already saved messages.


**afk [message]**<br/>
	Sets you to afk with specific message, this message is retrieved when someone uses the isAfk command
	or the next time you type in a connected chats
	
	
**isAfk [user]**<br/>
	Checks if [user] is afk and returns the message they went afk with
	
	
**cookie**<br/>
	Gives you a random fortune FeelsOkayMan
	
	
**disablePings**<br/>
	Disables you from recieving messages sent by other users
	
**reenablePings**<br/>
	Re-enables you to recieve messages sent by other users
	
	

## Bot Mod Only Commands

	
**dumpUser [user]**<br/>
	Empty the array of all messages for [user]
	
	
**disableUser [user]**<br/>
	Disable [user] from using any part of the bot
	
	
**reenableUser [user]**<br/>
	Re-enable [user] to use the bot. Does nothing if <user> is not disabled
	
	
**disablePings [user]**<br/>
	Disable [user] from recieving messages
	
	
**reenablePings [user]**<br/>
	Re-enable [user] to recieve messages. Does nothing if <user> is not disabled
	
	
**disablePinger [user]**<br/>
	Disable <user> from sending messages to other users
	
	
**reenablePinger [user]**<br/>
	Re-enable [user] to send messages to other users. Does nothing if <user> is not disabled
	
