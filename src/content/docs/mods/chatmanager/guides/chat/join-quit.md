---
title: Join & Quit Messages
---
## Join & Quit messages

This section will help you better understand the concept and the how to use Join and Quit messages. Chat Manager offers per group join and quit messages, so you can have a separate message for each group.
If you don't want to use them just keep `Group_Messages.Enable` set to `false` and enable the plain `Join_Message`, `Quit_Message`, `Actionbar_Message` and `Title_Message` sections instead.
Each section can be enabled/disabled and customized to your liking in any way.

All of these settings live under `Messages` in the config.yml.

## Understanding first join messages
First Join Messages is the first message players send when they join the server for the first time. This section offers the message, title message, and actionbar messages.
You can also set a sound that players will receive when a player joins the server for the first time.

First Join Title Messages is the title the player will receive when they join the server for the first time. In this section you can set the Header (message on top), the Footer (message on the bottom),
as well as the time it will stay up for as in Fade In, Stay, Fade Out.

First Join Actionbar Message is the message players will receive just above their hot bar when they join the server for the first time.

## Understanding join and quit messages

Join Messages is the message players send when they join the server anytime after the first time they joined. Quit Messages is the message players send when they quit the server.
The plain sections live under `Messages.Join_Quit_Messages` (`Join_Message`, `Quit_Message`, `Actionbar_Message` and `Title_Message`), and each one has its own `Enable` toggle. `Join_Message` and `Quit_Message` also have a sound that's played to all players on the server.

The Fade In, Stay and Fade Out times in `Title_Message` are used for both the plain title and every group title.

## Group messages

Group messages let you send a different join message, quit message, actionbar and title depending on a permission. They live under `Messages.Join_Quit_Messages.Group_Messages`, and are turned on with `Group_Messages.Enable` (`false` by default).

**When group messages are enabled, the plain Join, Quit, Actionbar and Title messages are no longer sent**, even if their own `Enable` is `true`.

Each key under `Group_Messages` (other than `Enable`) is a group ID. The ID can be named anything, it does not need to match a permissions plugin group. This is the shipped example:

```
Messages:
  Join_Quit_Messages:
    Group_Messages:
      # Enable or disable this section.
      Enable: false
      # Group id, can be named anything
      Default:
        # Permission you give the group for then to send these messages.
        Permission: "chatmanager.join.default"
        Join_Message: "{player} &ejoined the server!"
        Quit_Message: "{player} &eleft the server!"
        # Actionbar Messages groups will receive on join.
        Actionbar: "&eWelcome back to &b{server_name} %luckperms_prefix% {player}&e!"

        # Title Messages groups will receive on join.
        Title:
          Header: "&eWelcome Back"
          Footer: "&b{player} to {server_name}"

        # The sound that will be sent to everyone on the server when a broadcasted message is sent.
        sound:
          toggle: false
          value: 'ENTITY_PLAYER_LEVELUP'
          pitch: 1.0
          volume: 1.0
```

* `Permission` - Required. A free-form permission node, you pick it. Players with this node use this group's messages. The shipped examples use `chatmanager.join.default`, `chatmanager.join.donator` and so on, but any node works.
* `Join_Message` - The message broadcast when the player joins. Remove it if you don't want a join message for this group.
* `Quit_Message` - The message broadcast when the player quits. Remove it if you don't want a quit message for this group.
* `Actionbar` - The actionbar the player receives on join. Remove it to disable.
* `Title` - The title the player receives on join. It must contain both `Header` and `Footer`.
* `sound` - The sound played to everyone when a player in this group joins.

Groups are checked from top to bottom and every group the player has the permission for is applied. Each one's actionbar, title and sound are sent, and with `Messages.Async: false` the last matching group's join/quit message is the one shown (with `Messages.Async: true` the first matching group's join message is broadcast). Opped players have every permission, so they match every group.

If for some reason Join Messages don't send at all, please do /chatmanager debug config in console to see if you are missing any sections in the config. Missing sections can cause this feature not to work correctly.