---
title: Commands & Permissions
---

ChatManager has a lot of commands and permissions, so please read this page entirely before asking for help.

All permissions are registered on startup to the server, so they will show up in LuckPerm's web editor.

Every permission node defaults to **OP**, except the grouped `chatmanager.chatradius.all`, `chatmanager.bypass.all`, `chatmanager.commands.all` and `chatmanager.notify.all` nodes, which default to **false**. Give your players the nodes they need (for example `chatmanager.message`, `chatmanager.reply`, `chatmanager.mention` and `chatmanager.mention.receive`) with your permissions plugin.

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
| Command                                    | Aliases                                                    | Permission                        | Default | Description                                                                               |
|:-------------------------------------------|:-----------------------------------------------------------|:----------------------------------|:--------|:------------------------------------------------------------------------------------------|
| chatmanager                                | `cm`                                                       | No Permission                     | -       | Main command for the plugin ChatManager that shows the author, and version of the plugin. |
| chatmanager help                           | `cm`                                                       | No Permission                     | -       | Display the help page.                                                                    |
| chatmanager reload                         | `cm`                                                       | chatmanager.reload                | OP      | Reloads all the configuration files.                                                      |
| chatmanager debug                          | `cm`                                                       | chatmanager.debug                 | OP      | Debug chat managers configuration files.                                                  |
| antiswear help                             | `as`                                                       | chatmanager.antiswear.help        | OP      | Shows a list of commands for the anti-swear feature.                                      |
| antiswear add `{word}`                     | `as`                                                       | chatmanager.antiswear.add         | OP      | Blacklists a word so people cant type it in chat.                                         |
| antiswear remove `{word}`                  | `as`                                                       | chatmanager.antiswear.remove      | OP      | Removes a word from the list of banned words.                                             |
| antiswear list                             | `as`                                                       | chatmanager.antiswear.list        | OP      | Shows a list of all the blocked swear words.                                              |
| autobroadcast help                         | `ab`                                                       | chatmanager.autobroadcast.help    | OP      | Shows a list of commands for the auto broadcast feature.                                  |
| autobroadcast add `{world}` `{message}`    | `ab`                                                       | chatmanager.autobroadcast.add     | OP      | Add a new broadcast message to a specific world.                                          |
| autobroadcast create `{world}` `{message}` | `ab`                                                       | chatmanager.autobroadcast.create  | OP      | Create a new world for auto broadcast messages to be sent in.                             |
| autobroadcast list `{world}`               | `ab`                                                       | chatmanager.autobroadcast.list    | OP      | Shows a list of all the broadcasted messages in a world.                                  |
| bannedcommands help                        | `bcmd`                                                     | chatmanager.bannedcommands.help   | OP      | Shows a list of commands for the banned commands feature.                                 |
| bannedcommands add `{command}`             | `bcmd`                                                     | chatmanager.bannedcommands.add    | OP      | Adds a commands to the list of banned commands.                                           |
| bannedcommands remove `{command}`          | `bcmd`                                                     | chatmanager.bannedcommands.remove | OP      | Removes a command from the list of banned commands.                                       |
| bannedcommands list                        | `bcmd`                                                     | chatmanager.bannedcommands.list   | OP      | Shows a list of all the banned commands.                                                  |
| announcement `{message}`                   | `announce`                                                 | chatmanager.announcement          | OP      | Sends an announcement message to the entire server.                                       |
| broadcast `{message}`                      | `bc`                                                       | chatmanager.broadcast             | OP      | Broadcast a message to the entire server.                                                 |
| clearchat                                  | `cc`                                                       | chatmanager.clearchat             | OP      | Clears chat for everyone on the server.                                                   |
| commandspy                                 | `cspy`, `cmdspy`                                           | chatmanager.commandspy            | OP      | See what commands everyone types on the server.                                           |
| list                                       |                                                            | chatmanager.lists.players         | OP      | Shows a list of all the players that are currently online.                                |
| message `{player} {message}`               | `m`, `w`, `pm`, `msg`, `whisper`, `tell`, `privatemessage` | chatmanager.message               | OP      | Sends a private message to the specified player.                                          |
| message `{self} {message}`                 | `m`, `w`, `pm`, `msg`, `whisper`, `tell`, `privatemessage` | chatmanager.message.self          | OP      | Sends a private message to yourself.                                                      |
| mutechat                                   | `mc`                                                       | chatmanager.mutechat              | OP      | Mutes the server chat preventing players from talking in chat.                            |
| mutechat -s                                | `mc`                                                       | chatmanager.mutechat.silent       | OP      | Mutes the server chat silently preventing players from talking in chat.                   |
| motd                                       |                                                            | No Permission                     | -       | Shows the servers message of the day.                                                     |
| perworldchat bypass                        | `pwc`                                                      | chatmanager.perworldchat          | OP      | Allow players to see what you type in chat in every world.                                |
| ping                                       |                                                            | chatmanager.ping                  | OP      | Shows your current ping.                                                                  |
| ping `{player}`                            |                                                            | chatmanager.ping.others           | OP      | Shows other players current ping.                                                         |
| reply `{message}`                          | `r`                                                        | chatmanager.reply                 | OP      | Quickly reply to the last player to message you.                                          |
| rules                                      |                                                            | chatmanager.rules                 | OP      | Shows a list of the server rules.                                                         |
| socialspy                                  |                                                            | chatmanager.socialspy             | OP      | Spy on players and see what they message to other players.                                |
| staff                                      |                                                            | chatmanager.lists.staff           | OP      | Shows a list of all the staff members that are currently online.                          |
| staffchat `{message}`                      | `stchat`, `schat`, `sc`                                    | chatmanager.staffchat             | OP      | Send private messages to all staff on the server.                                         |
| togglechat                                 |                                                            | chatmanager.toggle.chat           | OP      | Blocks players from receiving any chat messages.                                          |
| togglementions                             |                                                            | chatmanager.toggle.togglementions | OP      | Blocks players from receiving any mention notifications.                                  |
| togglepm                                   |                                                            | chatmanager.toggle.pm             | OP      | Blocks players from sending private messages to you.                                      |
| warning `{message}`                        | `alert`                                                    | chatmanager.warning               | OP      | Send out a warning message to everyone on the server.                                     |

## Chat Radius Commands and Permissions
| Command           | Aliases | Permission                             | Default | Description                                                                        |
|:------------------|:--------|:---------------------------------------|:--------|:-----------------------------------------------------------------------------------|
| chatradius        | `cr`    | chatmanager.chatradius.help            | OP      | Shows a list of commands for chat radius.                                          |
| chatradius local  | `cr`    | chatmanager.chatradius.local           | OP      | Enables local chat.                                                                |
| chatradius global | `cr`    | chatmanager.chatradius.global          | OP      | Enables global chat.                                                               |
| chatradius world  | `cr`    | chatmanager.chatradius.world           | OP      | Enables world chat.                                                                |
| chatradius spy    | `cr`    | chatmanager.chatradius.spy             | OP      | Enables spy chat. Players will be able to see messages in all channels.            |
|                   |         | chatmanager.chatradius.global.override | OP      | Permission to switch to global chat with the global override symbol (default `!`). |
|                   |         | chatmanager.chatradius.local.override  | OP      | Permission to switch to local chat with the local override symbol (default `#`).   |
|                   |         | chatmanager.chatradius.world.override  | OP      | Permission to switch to world chat with the world override symbol (default `$`).   |
|                   |         | chatmanager.chatradius.all             | false   | Players with this permission will access all chat radius channels.                 |

## Bypass Permissions
| Permission                          | Default | Description                                                                                                   |
|:------------------------------------|:--------|:--------------------------------------------------------------------------------------------------------------|
| chatmanager.bypass.afk              | OP      | Players with this permission can send private messages to players that are AFK.                               |
| chatmanager.bypass.antiadvertising  | OP      | Bypass the anti advertising check so players can advertise in chat.                                           |
| chatmanager.bypass.antibot          | OP      | Bypass the anti-bot checker so you can talk in chat and use commands without moving when you join the server. |
| chatmanager.bypass.antiswear        | OP      | Bypass the anti swear checker so players can swear in chat.                                                   |
| chatmanager.bypass.antiunicode      | OP      | Bypass the anti unicode checker so players can use special chat characters.                                   |
| chatmanager.bypass.bannedcommands   | OP      | Bypass the banned commands checker so players can use blacklisted commands.                                   |
| chatmanager.bypass.caps             | OP      | Bypass the anti-caps checker so players can use caps in chat.                                                 |
| chatmanager.bypass.chatdelay        | OP      | Bypass the chat delay so players can spam in chat.                                                            |
| chatmanager.bypass.clearchat        | OP      | Bypass the clear chat so players chat wont be cleared.                                                        |
| chatmanager.bypass.clearchat.onjoin | OP      | Players with this permission wont have their chat cleared when they join the server.                          |
| chatmanager.bypass.coloncommands    | OP      | Players with this permission can use colons in commands.                                                      |
| chatmanager.bypass.commanddelay     | OP      | Bypass the command delay so player can spam commands.                                                         |
| chatmanager.bypass.commandspy       | OP      | Players with this permission cannot be spied on when they type commands.                                      |
| chatmanager.bypass.dupe.chat        | OP      | Players with this permission can repeat messages without being stopped.                                       |
| chatmanager.bypass.dupe.command     | OP      | Players with this permission can repeat commands without being stopped.                                       |
| chatmanager.bypass.ignored          | OP      | This permission will allow players to send private messages to players that are ignoring them.                |
| chatmanager.bypass.mutechat         | OP      | Players with this permission can talk in chat when the chat is muted.                                         |
| chatmanager.bypass.socialspy        | OP      | Players with this permission cant be spied on with social spy.                                                |
| chatmanager.bypass.spectator        | OP      | Players with this permission can send private messages to players in spectator mode.                          |
| chatmanager.bypass.togglepm         | OP      | Players with this permission can send private messages to players that has pm's disabled                      |
| chatmanager.bypass.vanish           | OP      | This permission will allow players to send private messages to players that are in vanish.                    |

## Chat Color and Format Permissions
| Permission                       | Default | Description                                                               |
|:---------------------------------|:--------|:--------------------------------------------------------------------------|
| chatmanager.formatting.all       | OP      | Players with this permission can use all color codes and formats in chat. |
| chatmanager.chat-color.all       | OP      | Players with this permission can all color codes in chat.                 |
| chatmanager.chat-format.all      | OP      | Players with this permission can use format codes in chat.                |
| chatmanager.sign.color           | OP      | Players with this permission can use color codes on signs.                |
| chatmanager.sign.format          | OP      | Players with this permission can use format codes on signs.               |
| chatmanager.color.green          | OP      | Players with this permission can use the color code &a in chat.           |
| chatmanager.color.aqua           | OP      | Players with this permission can use the color code &b in chat.           |
| chatmanager.color.red            | OP      | Players with this permission can use the color code &c in chat.           |
| chatmanager.color.light-purple   | OP      | Players with this permission can use the color code &d in chat.           |
| chatmanager.color.yellow         | OP      | Players with this permission can use the color code &e in chat.           |
| chatmanager.color.white          | OP      | Players with this permission can use the color code &f in chat.           |
| chatmanager.color.black          | OP      | Players with this permission can use the color code &0 in chat.           |
| chatmanager.color.dark-blue      | OP      | Players with this permission can use the color code &1 in chat.           |
| chatmanager.color.dark-green     | OP      | Players with this permission can use the color code &2 in chat.           |
| chatmanager.color.dark-aqua      | OP      | Players with this permission can use the color code &3 in chat.           |
| chatmanager.color.dark-red       | OP      | Players with this permission can use the color code &4 in chat.           |
| chatmanager.color.dark-purple    | OP      | Players with this permission can use the color code &5 in chat.           |
| chatmanager.color.gold           | OP      | Players with this permission can use the color code &6 in chat.           |
| chatmanager.color.gray           | OP      | Players with this permission can use the color code &7 in chat.           |
| chatmanager.color.dark-gray      | OP      | Players with this permission can use the color code &8 in chat.           |
| chatmanager.color.blue           | OP      | Players with this permission can use the color code &9 in chat.           |
| chatmanager.format.obfuscated    | OP      | Players with this permission can use the format code &k in chat.          |
| chatmanager.format.bold          | OP      | Players with this permission can use the format code &l in chat.          |
| chatmanager.format.strikethrough | OP      | Players with this permission can use the format code &m in chat.          |
| chatmanager.format.underline     | OP      | Players with this permission can use the format code &n in chat.          |
| chatmanager.format.italic        | OP      | Players with this permission can use the format code &o in chat.          |
| chatmanager.format.reset         | OP      | Players with this permission can use the format code &r in chat.          |

## Notification Permissions
| Permission                         | Default | Description                                                                                                                 |
|:-----------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------|
| chatmanager.notify.antiadvertising | OP      | Players with this permission will get notified in chat when a player advertises with their exact message.                   |
| chatmanager.notify.antiswear       | OP      | Players with this permission will get notified in chat when a player swears with their exact message.                       |
| chatmanager.notify.antiunicode     | OP      | Players with this permission will get notified in chat when a player uses special chat characters with their exact message. |
| chatmanager.notify.bannedcommands  | OP      | Players with this permission will get notified in chat when a executes a banned command with their exact message.           |
| chatmanager.notify.all             | false   | Players with this permission gains access to every notification permission.                                                 |

## Other Permissions
| Permission                   | Default | Description                                                                                  |
|:-----------------------------|:--------|:---------------------------------------------------------------------------------------------|
| chatmanager.mention          | OP      | Players with this permission will be allowed to send mention notifications to other players. |
| chatmanager.mention.receive  | OP      | Players with this permission will receive mention notifications from other players.          |
| chatmanager.mention.everyone | OP      | Players with this permission can send mention notifications to everyone on the server.       |
| chatmanager.staff            | OP      | Players with this permission will be shown in the staff list.                                |
| chatmanager.commands.all     | false   | Players with this permission can execute every command.                                      |
| chatmanager.bypass.all       | false   | Players with this permission can bypass every check.                                         |
| chatmanager.*                | OP      | Player with this access to every command and permission.                                     |