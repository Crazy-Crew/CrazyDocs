---
title: Commands & Permissions
description: All available commands and permissions for CrazyCrates.

slug: mods/crazycrates/reference/commands
---
**This page lists all commands and permissions included in CrazyCrates.**

**Key types:** wherever a command takes `<key_type>`, you can use `virtual` (`v`) or `physical` (`p`).

## Commands
| Command        | Aliases               |
|----------------|-----------------------|
| `/crazycrates` | /crates, /crate, /cc  |
| `/keys`        | /key                  |

### Key permissions
| Command                 | Permission Node         | Description                            | Default |
|-------------------------|-------------------------|----------------------------------------|---------|
| `/keys`                 | crazycrates.keys        | Check the number of keys you have.     | true    |
| `/keys view [player]`   | crazycrates.keys-others | Check the number of keys a player has. | OP      |

### Crate permissions
| Command                                                                          | Permission Node           | Description                                                                     | Default |
|----------------------------------------------------------------------------------|---------------------------|---------------------------------------------------------------------------------|---------|
| `/crazycrates`                                                                   | crazycrates.gui           | Opens the primary crate menu.                                                   | true    |
| `/crazycrates help`                                                              | crazycrates.help          | Shows all player commands for CrazyCrates.                                      | true    |
| `/crazycrates give <key_type> <crate> <amount> <player> [-s/--silent]`           | crazycrates.givekey       | Give a key(s) to a player to use on a crate.                                    | OP      |
| `/crazycrates give-random <key_type> <amount> <player> [-s/--silent]`            | crazycrates.giverandomkey | Gives a random key out of all the crates available.                             | OP      |
| `/crazycrates giveall <key_type> <crate> <amount> [-s/--silent]`                 | crazycrates.giveall       | Gives all online players keys to use on a crate.                                | OP      |
| `/crazycrates take <key_type> <crate> <amount> <player>`                         | crazycrates.takekey       | Allows you to take keys from a player.                                          | OP      |
| `/crazycrates transfer <crate> <player> <amount>`                                | crazycrates.transfer      | Allows players to send virtual keys to another player.                          | OP      |
| `/crazycrates open <crate> <key_type>`                                           | crazycrates.open          | Tries to open a crate for yourself if you have a key.                           | OP      |
| `/crazycrates open-others <crate> <player> <key_type>`                           | crazycrates.open-others   | Tries to open a crate for a player if they have a key.                          | OP      |
| `/crazycrates forceopen <crate> <player>`                                        | crazycrates.forceopen     | Opens a crate for a player for free.                                            | OP      |
| `/crazycrates mass-open <crate> <key_type> <amount>`                             | crazycrates.massopen      | Mass opens crates. Defaults to 10 but can be changed in the crate config files. | OP      |
| `/crazycrates preview <crate>`                                                   | crazycrates.preview       | Opens the preview of a crate.                                                   | OP      |
| `/crazycrates preview-others <crate> <player>`                                   | crazycrates.preview.others | Opens the preview of a crate for a player.                                     | OP      |
| `/crazycrates claim <crate>`                                                     | crazycrates.claim         | Claims a pending respin prize from a crate.                                     | OP      |
| `/crazycrates additem <crate> <prize> <weight> [tier]`                           | crazycrates.additem       | Add items in-game to a prize in a crate.                                        | OP      |
| `/crazycrates migrate -mt <migration_type> [-c/--crate <crate>] [-d/--data]`     | crazycrates.migrate       | Handles migrating with multiple types including from other crates plugins.      | OP      |
| `/crazycrates editor -c/--crate <crate> or -e/--exit`                            | crazycrates.editor        | Adds you to a mode that lets you set/remove crates in the world.                | OP      |
| `/crazycrates set <crate>`                                                       | crazycrates.set           | Set a block you are looking at as the specified crate.                          | OP      |
| `/crazycrates delete`                                                            | crazycrates.delete        | Removes the crate location you are looking at.                                  | OP      |
| `/crazycrates teleport <crate_id>`                                               | crazycrates.teleport      | Teleport to a crate.                                                            | OP      |
| `/crazycrates list`                                                              | crazycrates.list          | Displays a list of all crates.                                                  | OP      |
| `/crazycrates debug <crate> [player]`                                            | crazycrates.debug         | Gives all the prizes to you so you can see if your crate works.                 | OP      |
| `/crazycrates fix`                                                               | crazycrates.fix           | Removes or repairs broken crate locations.                                      | OP      |
| `/crazycrates reload`                                                            | crazycrates.reload        | Reloads the configuration and data files.                                       | OP      |
| `/crazycrates admin`                                                             | crazycrates.admin         | Opens the Admin Keys GUI.                                                       | OP      |
| `/crazycrates version`                                                           | crazycrates.version       | Shows the plugin version.                                                       | OP      |

## Other Permissions
### Wildcard Permissions
| Permission Node         | Description                         | Children                                                                                                                                                                                                                      | Default |
|-------------------------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| `crazycrates.admin.*`   | Give all admin based permissions.   | crazycrates.open-others, crazycrates.forceopen, crazycrates.preview, crazycrates.additem, crazycrates.setmenu, crazycrates.giveall, crazycrates.convert, crazycrates.admin, crazycrates.debug, crazycrates.list, crazycrates.save, crazycrates.claim | OP      |
| `crazycrates.players.*` | Give all player based permissions.  | crazycrates.key-others, crazycrates.gui, crazycrates.help                                                                                                                                                                     | OP      |

### Misc Permissions
| Permission Node                            | Description                                                                                     | Default |
|--------------------------------------------|-------------------------------------------------------------------------------------------------|---------|
| `crazycrates.open.<crate-name>`            | Allows you to open a crate. Registered automatically for every crate file.                      | true    |
| `crazycrates.respin.<crate-name>.<number>` | Allows you to control how many times a player can respin, max cap configured in each crate file | OP      |
| `crazycrates.exclude.give-all`             | Prevents you from getting keys when using giveall.                                              | false   |
| `crazycrates.setmenu`                      | Sets the block you are looking at to open the (/crate) crate menu.                              | OP      |
