---
title: Permissions
description: A list of commands with updated permissions

hide_title: false

sidebar_label: Permissions
sidebar_position: 1
---
| Command                                | Permission               | Description                                                                       | Default |
|----------------------------------------|--------------------------|-----------------------------------------------------------------------------------|---------|
| `/crazyenvoys` `/crazyenvoys time`     | `crazyenvoys.time`       | `Shows the time till the envoy starts or ends.        `                           | true    |
| `/crazyenvoys help`                    | `crazyenvoys.help`       | `Shows all crazy envoy commands.   `                                              | true    |
| `/crazyenvoys reload`                  | `crazyenvoys.reload`     | `Reloads all the files and tiers.   `                                             | false   |
| `/crazyenvoys drops [page]`            | `crazyenvoys.drops`      | `Shows all the current crate locations. `                                         | true    |
| `/crazyenvoys ignore`                  | `crazyenvoys.ignore`     | `Mutes the envoy collecting message for the user.`                                | true    |
| `/crazyenvoys flare [amount] [player]` | `crazyenvoys.flare.give` | `Gives a player a flare to start the envoy.      `                                | false   |
| `/crazyenvoys edit`                    | `crazyenvoys.edit`       | `Sets the player into editor mode which allows them to edit the drop locations. ` | false   |
| `/crazyenvoys start`                   | `crazyenvoys.start`      | `Starts the envoy event.   `                                                      | false   |
| `/crazyenvoys stop`                    | `crazyenvoys.stop`       | `Stops the current envoy event.   `                                               | false   |
| `/crazyenvoys center`                  | `crazyenvoys.center`     | `Sets the center for the random crate drops.      `                               | false   |

# Other
| Node                    | Description                                                          | Default |
|-------------------------|----------------------------------------------------------------------|---------|
| `crazyenvoys.bypass`    | `Allows you to use all commands.`                                    | op      |
| `crazyenvoys.locations` | `Gives you the ability to use flares.`                               | false   |
| `crazyenvoys.flare.use` | `Gives you the ability to see envoy locations when an event starts.` | false   |