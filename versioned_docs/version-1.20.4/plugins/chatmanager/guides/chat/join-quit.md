---
title: Join Quit Messages

hide_title: false

sidebar_label: Join Quit Messages
sidebar_position: 1
---
## Sections

## Join & Quit messages

This section will help you better understand the concept and the how to use Join and Quit messages. Chat Manager offers per group join and quit messages so you can have a separate message for each group. 
If you don't want to use them just add a message the Default_Format section and don't do anything else and players will only send and receive that message when players Join and Quit the server. 
Each section can be enabled/disabled and customized to your liking in any way.

## Understanding first join messages
First Join Messages is the first message players send when they join the server for the first time. This section offers the message, title message, and actionbar messages. 
You can also set a sound that players will receive when a player joins the server for the first time.

First Join Title Messages is the title the player will receive when they join the server for the first time. In this section you can set the Header (message on top), the Footer (message on the bottom), 
as well as the time it will stay up for as in Fade In, Stay, Fade Out.

First Join Actionbar Message is the message players will receive just above their hot bar when they join the server for the first time.

## Understanding join messages

Join Messages is the message players send when they join the server anytime after the first time they joined. This section also offers the message, title message, and actionbar message. You can also set the sound that's played to all players on the server when a player joins.

Join Messages comes with a per group function that allows you to set specific join messages per each group that joins the server. To set this up you add the group and message under the group messages section, looks something like this...

```
Group_Messages:
      
      Default: "&b{player} &ejoined the server"
        
      Donator: "&b{player} &ejoined the server"
      
      Staff: "&b{player} &ejoined the server"
```

To put the players in the group you'll have to give them the permission `chatmanager.join.{group name}`. The group name is case-sensitive and has to match exactly how its spelt in the group messages section. 
Group messaging is also available for Title Messages as well as Actionbar Messages. Actionbar messages is configured exactly how the regular messages is configured and players need the same permission to receive the messages.

Title Messages is configured a bit differently, it requires a Header and Footer section inside the group you want to send the message to. Looks something like this...

```
Group_Messages:
      
        Default:
          
          Header: "&eWelcome Back"
          
          Footer: "&b{player} to {server_name}"
          
        Donator:
        
          Header: "&eWelcome Back"
          
          Footer: "&b{player} to {server_name}"
          
        Staff:
        
          Header: "&eWelcome Back"
          
          Footer: "&b{player} to {server_name}"
```

Title Messages are required to have the header and footer section inside of it for it to work. Without it the plugin will throw errors in console. Title Messages also requires the permission `chatmanager.join.{group name}` for players to receive the message.

Join, Title, and Actionbar Messages all have a default message, this message will be sent when the player doesn't have the correct permission for any of the group messages. You can also just use this message if you don't want to use group messages at all.

If for some reason Join Messages don't send at all, please do /chatmanager debug config in console to see if you are missing any sections in the config. Missing sections can cause this feature not to work correctly.

## Understanding quit messages [(top)](https://github.com/Crazy-Crew/ChatManager/wiki/Join-&-Quit-Messages)

Quit Messages is the message players send when they quit the server. You can also set the sound that's played to all players on the server when a player quits your server.

Quit Messages comes with a per group function that allows you to set specific quit messages per each group that quits the server. To set this up you add the group and message under the group messages section, looks something like this...

```
Group_Messages:
    
      Default: "&b{player} &eleft the server"
        
      Donator: "&b{player} &eleft the server"
        
      Staff: "&b{player} &eleft the server"
```

To put the players in the group you'll have to give them the permission `chatmanager.quit.{group name}`. The group name is case-sensitive and has to match exactly how its spelt in the group messages section.