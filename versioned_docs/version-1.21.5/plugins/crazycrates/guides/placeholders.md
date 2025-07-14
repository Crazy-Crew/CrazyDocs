---
title: Placeholders
description: A list of the placeholders we use!

hide_title: false

sidebar_label: Placeholders
sidebar_position: 2
---
## Random Number Placeholder:
This placeholder can only be used in commands!

### How to use:
`%random%:min-max`

### Example:
```yaml
Commands:
- 'eco give %player% %random%:10000-100000'
```

### PlaceholderAPI Support
_The first table assumes you are using [PlaceholderAPI](https://hangar.papermc.io/HelpChat/PlaceholderAPI) to parse placeholders._

#### Simple Placeholders
| Placeholder                          | Example                               | Description                                                                    |
|--------------------------------------|---------------------------------------|--------------------------------------------------------------------------------|
| `%crazycrates_<crate>%`              | `%crazycrates_galactic%`              | Returns the formatted amount of virtual keys a player has.                     |
| `%crazycrates_<crate>_physical%`     | `%crazycrates_galactic_physical%`     | Returns the formatted amount of physical keys a player has in their inventory. |
| `%crazycrates_<crate>_total%`        | `%crazycrates_galactic_total%`        | Returns the formatted total amount of virtual and physical keys a player has.  |
| `%crazycrates_<crate>_opened%`       | `%crazycrates_galactic_opened%`       | Returns the formatted amount of times a player has opened an individual crate. |
| `%crazycrates_crates_opened%`        | `%crazycrates_crates_opened%`         | Returns the formatted total amount of crates opened.                           |
| `%crazycrates_<crate>_raw%`          | `%crazycrates_galactic_raw%`          | Returns the raw amount of virtual keys a player has.                           |
| `%crazycrates_<crate>_physical_raw%` | `%crazycrates_galactic_physical_raw%` | Returns the raw amount of physical keys a player has in their inventory.       |
| `%crazycrates_<crate>_total_raw%`    | `%crazycrates_galactic_total_raw%`    | Returns the raw total amount of virtual and physical keys a player has.        |
| `%crazycrates_<crate>_opened_raw%`   | `%crazycrates_galactic_opened_raw%`   | Returns the raw amount of times a player has opened an individual crate.       |
| `%crazycrates_crates_opened_raw%`    | `%crazycrates_crates_opened_raw%`     | Returns the raw total amount of crates opened.                                 |

#### Player Placeholders ( Only in version 1.16 and higher )
| Placeholder                                   | Example                                            | Description                                                                    |
|-----------------------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------|
| `%crazycrates_<player>_opened%`               | `%crazycrates_rukkhadevata_opened%`                | Returns the formatted total amount of crates opened.                           |
| `%crazycrates_<player>_<crate>_opened%`       | `%crazycrates_rukkhadevata_galactic_opened%`       | Returns the formatted amount of this particular crate opened.                  |
| `%crazycrates_<player>_<crate>_physical%`     | `%crazycrates_rukkhadevata_galactic_physical%`     | Returns the formatted amount of physical keys a player has in their inventory. |
| `%crazycrates_<player>_<crate>_virtual%`      | `%crazycrates_rukkhadevata_galactic_virtual%`      | Returns the formatted amount of virtual keys a player has.                     |
| `%crazycrates_<player>_<crate>_total%`        | `%crazycrates_rukkhadevata_galactic_total%`        | Returns the formatted total amount of virtual and physical keys a player has.  |
| `%crazycrates_<player>_opened_raw%`           | `%crazycrates_rukkhadevata_opened_raw%`            | Returns the raw total amount of crates opened.                                 |
| `%crazycrates_<player>_<crate>_opened_raw%`   | `%crazycrates_rukkhadevata_galactic_opened_raw%`   | Returns the raw amount of this particular crate opened.                        |
| `%crazycrates_<player>_<crate>_physical_raw%` | `%crazycrates_rukkhadevata_galactic_physical_raw%` | Returns the raw amount of physical keys a player has in their inventory.       |
| `%crazycrates_<player>_<crate>_virtual_raw%`  | `%crazycrates_rukkhadevata_galactic_virtual_raw%`  | Returns the raw amount of virtual keys a player has.                           |
| `%crazycrates_<player>_<crate>_total_raw%`    | `%crazycrates_rukkhadevata_galactic_total_raw%`    | Returns the raw total amount of virtual and physical keys a player has.        |