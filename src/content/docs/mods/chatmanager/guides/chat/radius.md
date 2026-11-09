---
title: Radius
---
## Understanding Chat Radius
Chat radius has three chat channels that players are allowed to talk to each other in, local chat, global chat, and world chat. Local chat only allows players to talk to one and another if they are in range. 
The range in which they can talk to each other can be configured in the config. The default range is set to 250 blocks, if someone is just .1 blocks further from another player they won't be able to communicate with each other. 
Global chat allows players to talk to everyone on the server at once. World chat only allows players to talk to one and another if they are in the same world. All chat channels can be seen by everyone if they meet the requirements, 
players will be able to see global chat and world chat with only the limitations to world chat. Each chat channel has its own permission so its up to you on which players can talk in which channel. 
There is an option in the config that allows you to choose which channel players join automatically when they join the server, this can help you do whatever you want to do with the feature.

## How to use Chat Radius
Using chat radius is easier than ever! `Chat_Radius.Enable` is `true` by default, so all you have to do is add the variable `{radius}` to the chat format (with [Chat Format](/mods/chatmanager/guides/chat/formatting/) enabled). 
If you want to use another chat format plugin you can use the PlaceholderAPI placeholder %chatmanager_radius%. The location on where you want to add the variable is up to you, but most people like to add it in the beginning of the chat format.
Example: Default_Format: "`{radius} &8[&7Default&8] &7{player} &9> &7{message}`"
The prefixes for the channel names can be edited in the chat radius section of the config.

## Override Symbols
Players can also switch channel by starting a chat message with that channel's override symbol, as long as they have the matching permission. The symbols are set with `Override_Symbol` in each channel's section of the config, use `''` to disable one.

| Channel | Config key                             | Default | Permission                             |
|:--------|:---------------------------------------|:--------|:---------------------------------------|
| Local   | `Chat_Radius.Local_Chat.Override_Symbol`  | `#`     | chatmanager.chatradius.local.override  |
| Global  | `Chat_Radius.Global_Chat.Override_Symbol` | `!`     | chatmanager.chatradius.global.override |
| World   | `Chat_Radius.World_Chat.Override_Symbol`  | `$`     | chatmanager.chatradius.world.override  |

The player then stays in that channel for their next messages, the same as running `/chatradius {channel}`.

## Understanding Chat Radius Spy
Chat radius spy allows staff to spy on all the chat channels at once. When you are in spy mode players chats will look like normal, 
if they are in local chat their prefix will show them in local chat, if they are in world chat their prefix will show them in world chat. 
This is to help you know where they are talking in. If you want to keep spy mode a secret don't say anything to them, if you don't care talk away in global chat. 
If you are in global chat and have spy mode on you can talk and receive messages like normal, but you may look weird to other players when they don't know who you're talking to. 
There is an option to enable chat radius spy automatically when players with the correct permission join the server, just remember that when you start seeing chat being spammed, and you're thinking why is everyone in one area talking to each other.

## Last Words
This chat radius feature is not like the other, this one is a lot better and is coded carefully to make sure there won't be any errors in console. I tested this feature out A LOT and found multiple issues throughout my testing, but I fixed everything making this work perfectly. 
All the chat channels can be accessed via command (/chatradius `{channel}`) or with the override symbols above. I really love the way this turned out and I hope everyone else will love it as much as I do!