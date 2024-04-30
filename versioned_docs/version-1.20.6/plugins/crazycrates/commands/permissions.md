---
title: Permissions
description: A list of commands with updated permissions

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
---
| Command                                                          | Permission                  | Description                                                                     | Default |
|------------------------------------------------------------------|-----------------------------|---------------------------------------------------------------------------------|---------|
| `/keys`                                                          | `crazycrates.keys`          | Check the number of keys you have.                                              | true    |
| `/keys [player]`                                                 | `crazycrates.keys-others`   | Check the number of keys a player has.                                          | op      |
| `/crazycrates give <virtual/physical> <crate> [amount] [player]` | `crazycrates.givekey`       | Give a key(s) to a player to use on a crate.                                    | op      |
| `/crazycrates take <virtual/physical> <crate> [amount] [player]` | `crazycrates.takekey`       | Allows you to take keys from a player.                                          | op      |
| `/crazycrates give-random <virtual/physical> <amount> <player>`  | `crazycrates.giverandomkey` | Gives a random key out of all the crates available.                             | op      |
| `/crazycrates giveall <virtual/physical> <crate> [amount]`       | `crazycrates.giveall`       | Gives all online players keys to use on a crate.                                | op      |
| `/crazycrates additem <crate> <prize> <chance> [tier]`           | `crazycrates.additem`       | Add items in-game to a prize in a crate.                                        | op      |
| `/crazycrates transfer <crate> <player> <amount>`                | `crazycrates.transfer`      | Allows players to send virtual keys to another player.                          | op      |
| `/crazycrates open-others <crate> [player]`                      | `crazycrates.open-others`   | Tries to open a crate for a player if they have a key.                          | op      |
| `/crazycrates forceopen <crate> [player]`                        | `crazycrates.forceopen`     | Opens a crate for a player for free.                                            | op      |
| `/crazycrates preview <crate> [player]`                          | `crazycrates.preview`       | Opens the preview of a crate for a player.                                      | op      |
| `/crazycrates save <schematic file name>`                        | `crazycrates.save`          | Save the new schematic file to the schematics folder.                           | op      |
| `/crazycrates mass-open <amount>`                                | `crazycrates.massopen`      | Mass opens crates. Defaults to 10 but can be changed in the crate config files. | op      |
| `/crazycrates tp <location>`                                     | `crazycrates.teleport`      | Teleport to a crate.                                                            | op      |
| `/crazycrates open <crate>`                                      | `crazycrates.open`          | Tries to open a crate for yourself if you have a key.                           | op      |
| `/crazycrates set <crate>`                                       | `crazycrates.set`           | Set a block you are looking at as the specified crate.                          | op      |
| `/crazycrates convert`                                           | `crazycrates.convert`       | Tries to convert supported plugin's crate files into crazy crate's crate files. | op      |
| `/crazycrates reload`                                            | `crazycrates.reload`        | Reloads the configuration and data files.                                       | op      |
| `/crazycrates admin`                                             | `crazycrates.admin`         | Opens the Admin Keys GUI.                                                       | op      |
| `/crazycrates help`                                              | `crazycrates.help`          | Shows all player commands for CrazyCrates.                                      | true    |
| `/crazycrates list`                                              | `crazycrates.list`          | Displays a list of all crates.                                                  | op      |
| `/crazycrates wand`                                              | `crazycrates.wand`          | Gives a wand that lets you select 2 points to create schematics.                | op      |
| `/crazycrates`                                                   | `crazycrates.gui`           | Opens the primary crate menu.                                                   | true    |

# Other
| Node                            | Description                                                          | Default |
|---------------------------------|----------------------------------------------------------------------|---------|
| `crazycrates.open.<crate-name>` | `Lets you choose who can open what crate or not open.`               | false   |
| `crazycrates.exclude.give-all`  | `Prevents you from getting keys when using giveall.`                 | op      |
| `crazycrates.setmenu`           | `Sets the block you are looking at to open the (/crate) crate menu.` | op      |

# Permissions
| Wildcard                  | Description                                            | Default |
|---------------------------|--------------------------------------------------------|---------|
| `crazycrates.players.*`   | `Gives access to all player commands.`                 | false   |
| `crazycrates.admin.*`     | `Gives access to all admin commands.`                  | false   |
| `crazycrates.schematic.*` | `Gives access to all commands relating to schematics.` | false   |
