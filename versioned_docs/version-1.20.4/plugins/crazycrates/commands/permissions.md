---
title: Permissions
description: A list of commands with updated permissions

hide_title: false

sidebar_label: Permissions
---
| Command                                                          | Permission                                | Description                                                                     | Default |
|------------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------|---------|
| `/key`                                                           | `crazycrates.command.player.key`          | Check the number of keys you have.                                              | true    |
| `/key [player]`                                                  | `crazycrates.command.player.key.others`   | Check the number of keys a player has.                                          | op      |
| `/crazycrates transfer <crate> <player> <amount>`                | `crazycrates.command.player.transfer`     | Allows players to send virtual keys to another player.                          | op      |
| `/crazycrates`                                                   | `crazycrates.command.player.menu`         | Opens the primary crate menu.                                                   | true    |
| `/crazycrates help`                                              | `crazycrates.command.player.help`         | Shows all player commands for CrazyCrates.                                      | true    |
| `/crazycrates admin-help`                                        | `crazycrates.command.admin.help`          | Shows all admin commands for CrazyCrates.                                       | op      |
| `/crazycrates additem <crate> <prize> <chance> [tier]`           | `crazycrates.command.admin.additem`       | Add items in-game to a prize in a crate.                                        | op      |
| `/crazycrates admin`                                             | `crazycrates.command.admin.access`        | Opens the Admin Keys GUI.                                                       | op      |
| `/crazycrates preview <crate> [player]`                          | `crazycrates.command.admin.preview`       | Opens the preview of a crate for a player.                                      | op      |
| `/crazycrates list`                                              | `crazycrates.command.admin.list`          | Displays a list of all crates.                                                  | op      |
| `/crazycrates open <crate>`                                      | `crazycrates.command.admin.open`          | Tries to open a crate for yourself if you have a key.                           | op      |
| `/crazycrates open-others <crate> [player]`                      | `crazycrates.command.admin.open.others`   | Tries to open a crate for a player if they have a key.                          | op      |
| `/crazycrates forceopen <crate> [player]`                        | `crazycrates.command.admin.forceopen`     | Opens a crate for a player for free.                                            | op      |
| `/crazycrates tp <location>`                                     | `crazycrates.command.admin.teleport`      | Teleport to a crate.                                                            | op      |
| `/crazycrates give <virtual/physical> <crate> [amount] [player]` | `crazycrates.command.admin.givekey`       | Give a key(s) to a player to use on a crate.                                    | op      |
| `/crazycrates giveall <virtual/physical> <crate> [amount]`       | `crazycrates.command.admin.giveall`       | Gives all online players keys to use on a crate.                                | op      |
| `/crazycrates take <virtual/physical> <crate> [amount] [player]` | `crazycrates.command.admin.takekey`       | Allows you to take keys from a player.                                          | op      |
| `/crazycrates set <crate>`                                       | `crazycrates.command.admin.set`           | Set a block you are looking at as the specified crate.                          | op      |
| `/crazycrates reload`                                            | `crazycrates.command.admin.reload`        | Reloads the configuration and data files.                                       | op      |
| `/crazycrates convert`                                           | `crazycrates.command.admin.convert`       | Tries to convert supported plugin's crate files into crazy crate's crate files. | op      |
| `/crazycrates wand`                                              | `crazycrates.wand`                        | Gives a wand that lets you select 2 points to create schematics.                | op      |
| `/crazycrates debug <crate>`                                     | `crazycrates.command.admin.debug`         | Gives all the prizes to you so you can see if your crate works.                 | op      |
| `/crazycrates save <schematic file name>`                        | `crazycrates.save`                        | Save the new schematic file to the schematics folder.                           | op      |
| `/crazycrates mass-open <crate> <virtual/physical> <amount>`     | `crazycrates.command.admin.massopen`      | Mass opens crates. Defaults to 10 but can be changed in the crate config files. | op      |
| `/crazycrates give-random <virtual/physical> <amount> <player>`  | `crazycrates.command.admin.giverandomkey` | Gives a random key out of all the crates available.                             | op      |

# Other
| Node                                         | Description                                          | Default |
|----------------------------------------------|------------------------------------------------------|---------|
| `crazycrates.deny.open.<crate-name>`         | `Prevents you from opening a crate.`                 | false   |
| `crazycrates.command.exclude.player.giveall` | `Prevents you from getting keys when using giveall.` | op      |

# Permissions
| Wildcard                                | Description                                            | Default |
|-----------------------------------------|--------------------------------------------------------|---------|
| `crazycrates.command.players.*`         | `Gives access to all player commands.`                 | false   |
| `crazycrates.command.admin.*`           | `Gives access to all admin commands.`                  | false   |
| `crazycrates.command.admin.schematic.*` | `Gives access to all commands relating to schematics.` | false   |