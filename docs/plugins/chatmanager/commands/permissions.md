---
id: chatmanager-permissions
title: Permissions
slug: /chatmanager/info/commands/permissions
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
---
# Chat Manager

ChatManager has a lot of commands and permissions, so please read this page entirely before asking for help.

All permissions are registered on startup to the server, so they will show up in LuckPerm's web editor.

## Information
**Please note that commands with the arguments [] or `{}` in /chatmanager help are either required or optional**

* Arguments surrounded with `{}` are required.
* Arguments surrounded with [] are optional.
* Arguments such as `{player}` must be replaced with a players name.
* Arguments such as `{message}` must be replaced with a message, the message can be as long as you want it to be.
* Arguments such as `{world}` must be replaced with one of your worlds name.
* Arguments such as `{word}` must be without spaces to be added to the list of swear words.
* Arguments such as `{command}` must be used without a "/" or the command won't be blacklisted.

## Commands and Permissions
| Command                                    | Permission                        | Description                                                                               |
|:-------------------------------------------|:----------------------------------|:------------------------------------------------------------------------------------------|
| chatmanager                                | No Permission                     | Main command for the plugin ChatManager that shows the author, and version of the plugin. |
| chatmanager help                           | No Permission                     | Display the help page.                                                                    |
| chatmanager reload                         | chatmanager.reload                | Reloads all the configuration files.                                                      |
| chatmanager debug                          | chatmanager.debug                 | Debug chat managers configuration files.                                                  |
| antiswear help                             | chatmanager.antiswear.help        | Shows a list of commands for the anti-swear feature.                                      |
| antiswear add `{word}`                     | chatmanager.antiswear.add         | Blacklists a word so people cant type it in chat.                                         |
| antiswear remove `{word}`                  | chatmanager.antiswear.remove      | Removes a word from the list of banned words.                                             |
| antiswear list                             | chatmanager.antiswear.list        | Shows a list of all the blocked swear words.                                              |
| autobroadcast help                         | chatmanager.autobroadcast.help    | Shows a list of commands for the auto broadcast feature.                                  |
| autobroadcast add `{world}` `{message}`    | chatmanager.autobroadcast.add     | Add a new broadcast message to a specific world.                                          |
| autobroadcast create `{world}` `{message}` | chatmanager.autobroadcast.create  | Create a new world for auto broadcast messages to be sent in.                             |
| autobroadcast list `{world}`               | chatmanager.autobroadcast.list    | Shows a list of all the broadcasted messages in a world.                                  |
| bannedcommands help                        | chatmanager.bannedcommands.help   | Shows a list of commands for the banned commands feature.                                 |
| bannedcommands add `{command}`             | chatmanager.bannedcommands.add    | Adds a commands to the list of banned commands.                                           |
| bannedcommands remove `{command}`          | chatmanager.bannedcommands.remove | Removes a command from the list of banned commands.                                       |
| bannedcommands list                        | chatmanager.bannedcommands.list   | Shows a list of all the banned commands.                                                  |
| announcement `{message}`                   | chatmanager.announcement          | Sends an announcement message to the entire server.                                       |
| broadcast `{message}`                      | chatmanager.broadcast             | Broadcast a message to the entire server.                                                 |
| clearchat                                  | chatmanager.clearchat             | Clears chat for everyone on the server.                                                   |
| commandspy                                 | chatmanager.commandspy            | See what commands everyone types on the server.                                           |
| list                                       | chatmanager.lists.players         | Shows a list of all the players that are currently online.                                |
| message `{player} {message}`               | chatmanager.message               | Sends a private message to the specified player.                                          |
| message `{self} {message}`                 | chatmanager.message.self          | Sends a private message to yourself.                                                      |
| mutechat                                   | chatmanager.mutechat              | Mutes the server chat preventing players from talking in chat.                            |
| mutechat -s                                | chatmanager.mutechat.silent       | Mutes the server chat silently preventing players from talking in chat.                   |
| motd                                       | No Permission                     | Shows the servers message of the day.                                                     |
| perworldchat bypass                        | chatmanager.perworldchat.bypass   | Allow players to see what you type in chat in every world.                                |
| ping                                       | chatmanager.ping                  | Shows your current ping.                                                                  |
| ping `{player}`                            | chatmanager.ping.others           | Shows other players current ping.                                                         | 
| reply `{message}`                          | chatmanager.reply                 | Quickly reply to the last player to message you.                                          |
| rules                                      | chatmanager.rules                 | Shows a list of the server rules.                                                         |
| socialspy                                  | chatmanager.socialspy             | Spy on players and see what they message to other players.                                |
| staff                                      | chatmanager.lists.staff           | Shows a list of all the staff members that are currently online.                          |
| staffchat `{message}`                      | chatmanager.staffchat             | Send private messages to all staff on the server.                                         |
| togglechat                                 | chatmanager.toggle.chat           | Blocks players from receiving any chat messages.                                          |
| togglementions                             | chatmanager.toggle.mentions       | Blocks players from receiving any mention notifications.                                  |
| togglepm                                   | chatmanager.toggle.pm             | Blocks players from sending private messages to you.                                      |
| warning `{message}`                        | chatmanager.warning               | Send out a warning message to everyone on the server.                                     |

## Chat Radius Commands and Permissions
| Command           | Permission                             | Description                                                             |
|:------------------|:---------------------------------------|:------------------------------------------------------------------------|
| chatradius        | chatmanager.chatradius                 | Shows a list of commands for chat radius.                               |
| chatradius local  | chatmanager.chatradius.local           | Enables local chat.                                                     |
| chatradius global | chatmanager.chatradius.global          | Enables global chat.                                                    |
| chatradius world  | chatmanager.chatradius.world           | Enables world chat.                                                     |
| chatradius spy    | chatmanager.chatradius.spy             | Enables spy chat. Players will be able to see messages in all channels. |
|                   | chatmanager.chatradius.global.override | Permission to enable global chat with the override symbol.              |
|                   | chatmanager.chatradius.local.override  | Permission to enable local chat with the override symbol.               |
|                   | chatmanager.chatradius.world.override  | Permission to enable world chat with the override symbol.               |
|                   | chatmanager.chatradius.all             | Players with this permission will access all chat radius channels.      |

## Bypass Permissions
| Permission                          | Description                                                                                                   |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| chatmanager.bypass.afk              | Players with this permission can send private messages to players that are AFK.                               |
| chatmanager.bypass.antiadvertising  | Bypass the anti advertising check so players can advertise in chat.                                           |
| chatmanager.bypass.antibot          | Bypass the anti-bot checker so you can talk in chat and use commands without moving when you join the server. |
| chatmanager.bypass.antiswear        | Bypass the anti swear checker so players can swear in chat.                                                   |
| chatmanager.bypass.antiunicode      | Bypass the anti unicode checker so players can use special chat characters.                                   |
| chatmanager.bypass.bannedcommands   | Bypass the banned commands checker so players can use blacklisted commands.                                   |
| chatmanager.bypass.caps             | Bypass the anti-caps checker so players can use caps in chat.                                                 |
| chatmanager.bypass.chatdelay        | Bypass the chat delay so players can spam in chat.                                                            |
| chatmanager.bypass.chatradius       | Bypass the chat radius checker so you can see what everyone is saying in chat.                                |
| chatmanager.bypass.clearchat        | Bypass the clear chat so players chat wont be cleared.                                                        |
| chatmanager.bypass.clearchat.onjoin | Players with this permission wont have their chat cleared when they join the server.                          |
| chatmanager.bypass.coloncommands    | Players with this permission can use colons in commands.                                                      |
| chatmanager.bypass.commanddelay     | Bypass the command delay so player can spam commands.                                                         |
| chatmanager.bypass.commandspy       | Players with this permission cannot be spied on when they type commands.                                      |
| chatmanager.bypass.dupe.chat        | Players with this permission can repeat messages without being stopped.                                       |
| chatmanager.bypass.dupe.command     | Players with this permission can repeat commands without being stopped.                                       |
| chatmanager.bypass.grammar          | Players with this permission can talk in chat without the grammar checker messing with their messages.        |
| chatmanager.bypass.ignored          | This permission will allow players to send private messages to players that are ignoring them.                |
| chatmanager.bypass.mutechat         | Players with this permission can talk in chat when the chat is muted.                                         |
| chatmanager.bypass.socialspy        | Players with this permission cant be spied on with social spy.                                                |
| chatmanager.bypass.spectator        | Players with this permission can send private messages to players in spectator mode.                          |
| chatmanager.bypass.togglepm         | Players with this permission can send private messages to players that has pm's disabled                      |
| chatmanager.bypass.vanish           | This permission will allow players to send private messages to players that are in vanish.                    |

## Chat Color and Format Permissions
| Permission                       | Description                                                               |
|:---------------------------------|:--------------------------------------------------------------------------|
| chatmanager.formatting.all       | Players with this permission can use all color codes and formats in chat. |
| chatmanager.chat-color.all       | Players with this permission can all color codes in chat.                 |
| chatmanager.chat-format.all      | Players with this permission can use format codes in chat.                |
| chatmanager.sign.color           | Players with this permission can use color codes on signs.                |
| chatmanager.sign.format          | Players with this permission can use format codes on signs.               |
| chatmanager.color.green          | Players with this permission can use the color code &a in chat.           |
| chatmanager.color.aqua           | Players with this permission can use the color code &b in chat.           |
| chatmanager.color.red            | Players with this permission can use the color code &c in chat.           |
| chatmanager.color.light-purple   | Players with this permission can use the color code &d in chat.           |
| chatmanager.color.yellow         | Players with this permission can use the color code &e in chat.           |
| chatmanager.color.white          | Players with this permission can use the color code &f in chat.           |
| chatmanager.color.black          | Players with this permission can use the color code &0 in chat.           |
| chatmanager.color.dark-blue      | Players with this permission can use the color code &1 in chat.           |
| chatmanager.color.dark-green     | Players with this permission can use the color code &2 in chat.           |
| chatmanager.color.dark-aqua      | Players with this permission can use the color code &3 in chat.           |
| chatmanager.color.dark-red       | Players with this permission can use the color code &4 in chat.           |
| chatmanager.color.dark-purple    | Players with this permission can use the color code &5 in chat.           |
| chatmanager.color.gold           | Players with this permission can use the color code &6 in chat.           |
| chatmanager.color.gray           | Players with this permission can use the color code &7 in chat.           |
| chatmanager.color.dark-gray      | Players with this permission can use the color code &8 in chat.           |
| chatmanager.color.blue           | Players with this permission can use the color code &9 in chat.           |
| chatmanager.format.obfuscated    | Players with this permission can use the format code &k in chat.          |
| chatmanager.format.bold          | Players with this permission can use the format code &l in chat.          |
| chatmanager.format.strikethrough | Players with this permission can use the format code &m in chat.          |
| chatmanager.format.underline     | Players with this permission can use the format code &n in chat.          |
| chatmanager.format.italic        | Players with this permission can use the format code &o in chat.          |
| chatmanager.format.reset         | Players with this permission can use the format code &r in chat.          |

## Notification Permissions
| Permission                         | Description                                                                                                                 |
|:-----------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| chatmanager.notify.antiadvertising | Players with this permission will get notified in chat when a player advertises with their exact message.                   |
| chatmanager.notify.antiswear       | Players with this permission will get notified in chat when a player swears with their exact message.                       |
| chatmanager.notify.antiunicode     | Players with this permission will get notified in chat when a player uses special chat characters with their exact message. |
| chatmanager.notify.bannedcommands  | Players with this permission will get notified in chat when a executes a banned command with their exact message.           |
| chatmanager.notify.all             | Players with this permission gains access to every notification permission.                                                 |

## Other Permissions
| Permission                   | Description                                                                                  |
|:-----------------------------|:---------------------------------------------------------------------------------------------|
| chatmanager.mention          | Players with this permission will be allowed to send mention notifications to other players. |
| chatmanager.mention.everyone | Players with this permission can send mention notifications to everyone on the server.       |
| chatmanager.staff            | Players with this permission will be shown in the staff list.                                |
| chatmanager.commands.all     | Players with this permission can execute every command.                                      |
| chatmanager.bypass.all       | Players with this permission can bypass every check.                                         |
| chatmanager.*                | Player with this access to every command and permission.                                     |