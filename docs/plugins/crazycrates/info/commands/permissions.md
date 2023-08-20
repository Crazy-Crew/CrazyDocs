---
id: crazycrates-permissions-v1
title: Permissions
slug: /crazycrates/info/commands/permissions
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
---
## The permission and command format is changing in CrazyCrates v1.15
### Please see the changes @ [v2](v2/permissions)

Command|Permission|Description
---|---|---
`/key`|`crazycrates.command.player.key`|Check the number of keys you have.
`/key [player]`|`crazycrates.command.player.key.others`|Check the number of keys a player has.
`/crazycrates transfer <crate> <player> <amount>`|`crazycrates.command.player.transfer`|Allows players to send virtual keys to another player.
`/crazycrates`|`crazycrates.command.player.menu`|Opens the primary crate menu.
`/crazycrates help`|`crazycrates.command.player.help`|Shows all player commands for CrazyCrates.
`/crazycrates admin-help`|`crazycrates.command.admin.help`|Shows all admin commands for CrazyCrates.
`/crazycrates additem <crate> <prize>`|`crazycrates.command.admin.additem`|Add items in-game to a prize in a crate.
`/crazycrates admin`|`crazycrates.command.admin.access`|Opens the Admin Keys GUI.
`/crazycrates preview <crate> [player]`|`crazycrates.command.admin.preview`|Opens the preview of a crate for a player.
`/crazycrates list`|`crazycrates.command.admin.list`|Displays a list of all crates.
`/crazycrates open <crate>`|`crazycrates.command.admin.open`|Tries to open a crate for yourself if you have a key.
`/crazycrates open-others <crate> [player]`|`crazycrates.command.admin.open.others`|Tries to open a crate for a player if they have a key.
`/crazycrates forceopen <crate> [player]`|`crazycrates.command.admin.forceopen`|Opens a crate for a player for free.
`/crazycrates tp <location>`|`crazycrates.command.admin.teleport`|Teleport to a crate.
`/crazycrates give <Physical/Virtual> <crate> [amount] [player]`|`crazycrates.command.admin.givekey`|Give a key(s) to a player to use on a crate.
`/crazycrates giveall <Physical/Virtual> <crate> [amount]`|`crazycrates.command.admin.giveall`|Gives all online players keys to use on a crate.
`/crazycrates take <Physical/Virtual> <crate> [amount] [player]`|`crazycrates.command.admin.takekey`|Allows you to take keys from a player.
`/crazycrates set <crate>`|`crazycrates.command.admin.set`|Set a block you are looking at as the specified crate.
`/crazycrates reload`|`crazycrates.command.admin.reload`|Reloads the configuration and data files.
`/crazycrates convert`|`crazycrates.command.admin.convert`|Tries to convert supported plugin's crate files into crazy crate's crate files.
`/crazycrates set1/set2`|`crazycrates.command.admin.schematic.set`|Set position #1 or #2 for when making a new schematic for quadcrates. **1.13+ only**
`/crazycrates save <schematic file name>`|`crazycrates.command.admin.schematic.save`|Save the new schematic file to the schematics folder. **1.13+ only**
`/crazycrates mass-open <amount>`|`crazycrates.command.admin.massopen`|Mass opens crates. Defaults to 10 but can be changed in the crate config files.
`/crazycrates give-random <virtual/physical> <amount> <player>`|`crazycrates.command.admin.giverandomkey`|Gives a random key out of all the crates available.

# Other
Node|Description
---|---
`crazycrates.command.exclude.player.giveall`|`Prevents you from getting keys when using giveall.`

# Permissions
Wildcard|Description
---|---
`crazycrates.command.players.*`|`Gives access to all player commands.`
`crazycrates.command.admin.*`|`Gives access to all admin commands.`
`crazycrates.command.admin.schematic.*`|`Gives access to all commands relating to schematics.`