---
title: Permissions
description: All available commands for CrazyCrates.

slug: mods/crazycrates/reference/commands
---
**This page lists all permissions included in CrazyCrates.**

## Commands
### Key permissions
| Command          | Permission Node  | Player has by default? |
|------------------|------------------|------------------------|
| `/keys <player>` | crazycrates.keys | Yes                    |

### Crate permissions
| Command                                                                  | Permission Node           | Description                                                                     | Player has by default? |
|--------------------------------------------------------------------------|---------------------------|---------------------------------------------------------------------------------|------------------------|
| `/crates give <virtual/physical> <crate> <amount> <player>`              | crazycrates.givekey       | Give a key(s) to a player to use on a crate.                                    | No                     |
| `/crazycrates take <virtual/physical> <crate> [amount] [player]`         | crazycrates.takekey       | Allows you to take keys from a player.                                          | No                     |
| `/crazycrates give-random <virtual/physical> <amount> <player>`          | crazycrates.giverandomkey | Gives a random key out of all the crates available.                             | No                     |
| `/crazycrates migrate -mt <migration_type> --crate/-c <crate> --data/-d` | crazycrates.migrate       | Handles migrating with multiple types including from other crates plugins       | No                     |
| `/crazycrates giveall <virtual/physical> <crate> [amount]`               | crazycrates.giveall       | Gives all online players keys to use on a crate.                                | No                     |
| `/crazycrates additem <crate> <prize> <weight> [tier]`                   | crazycrates.additem       | Add items in-game to a prize in a crate.                                        | No                     |
| `/crazycrates transfer <crate> <player> <amount>`                        | crazycrates.transfer      | Allows players to send virtual keys to another player.                          | No                     |
| `/crazycrates open-others <crate> [player] <virtual/physical>`           | crazycrates.open-others   | Tries to open a crate for a player if they have a key.                          | No                     |
| `/crazycrates forceopen <crate> [player]`                                | crazycrates.forceopen     | Opens a crate for a player for free.                                            | No                     |
| `/crazycrates preview <crate> [player]`                                  | crazycrates.preview       | Opens the preview of a crate for a player.                                      | No                     |
| `/crazycrates save <schematic file name>`                                | crazycrates.save          | Save the new schematic file to the schematics folder.                           | No                     |
| `/crazycrates mass-open <crate> <virtual/physical> <amount>`             | crazycrates.massopen      | Mass opens crates. Defaults to 10 but can be changed in the crate config files. | No                     |
| `/crazycrates editor -c/--crate <crate_name> or -e/--exit`               | crazycrates.editor        | Adds you to a mode that lets you set/remove crates in the world.                | No                     |
| `/crazycrates tp <location>`                                             | crazycrates.teleport      | Teleport to a crate.                                                            | No                     |
| `/crazycrates debug <crate>`                                             | crazycrates.debug         | Gives all the prizes to you so you can see if your crate works.                 | No                     |
| `/crazycrates open <crate>`                                              | crazycrates.open          | Tries to open a crate for yourself if you have a key.                           | No                     |
| `/crazycrates set <crate>`                                               | crazycrates.set           | Set a block you are looking at as the specified crate.                          | No                     |
| `/crazycrates convert`                                                   | crazycrates.convert       | Tries to convert supported plugin's crate files into crazy crate's crate files. | No                     |
| `/crazycrates reload`                                                    | crazycrates.reload        | Reloads the configuration and data files.                                       | No                     |
| `/crazycrates admin`                                                     | crazycrates.admin         | Opens the Admin Keys GUI.                                                       | No                     |
| `/crazycrates help`                                                      | crazycrates.help          | Shows all player commands for CrazyCrates.                                      | Yes                    |
| `/crazycrates list`                                                      | crazycrates.list          | Displays a list of all crates.                                                  | No                     |
| `/crazycrates wand`                                                      | crazycrates.wand          | Gives a wand that lets you select 2 points to create schematics.                | No                     |
| `/crazycrates`                                                           | crazycrates.gui           | Opens the primary crate menu.                                                   | Yes                    |

## Other
### Wildcards
| Permission Node           | Description                                          | Default |
|---------------------------|------------------------------------------------------|---------|
| `crazycrates.players.*`   | Gives access to all player commands.                 | No      |
| `crazycrates.admin.*`     | Gives access to all admin commands.                  | No      |
| `crazycrates.schematic.*` | Gives access to all commands relating to schematics. | No      |

### Misc
| Permission Node                            | Description                                                                                     | Player has by default? | Deprecated |
|--------------------------------------------|-------------------------------------------------------------------------------------------------|------------------------|------------|
| `crazycrates.open.<crate-name>`            | Allows you to open a crate.                                                                     | Yes                    | No         |
| `crazycrates.respin.<crate-name>.<number>` | Allows you to control how many times a player can respin, max cap configured in each crate file | No                     | No         |
| `crazycrates.deny.open.<crate-name>`       | Prevents you from opening a crate.                                                              | No                     | Yes        |
| `crazycrates.exclude.give-all`             | Prevents you from getting keys when using giveall.                                              | No                     | No         |
| `crazycrates.setmenu`                      | Sets the block you are looking at to open the (/crate) crate menu.                              | No                     | No         |