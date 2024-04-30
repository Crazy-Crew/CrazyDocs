---
title: Permissions

hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
sidebar_position: 1
---
| Command                          | Permission         | Description                                                                    | Default |
|----------------------------------|--------------------|--------------------------------------------------------------------------------|---------|
| `/envoy` `/envoy time`           | `envoy.time`       | Shows the time till the envoy starts or ends.                                  | true    |
| `/envoy help`                    | `envoy.help`       | Shows all crazy envoy commands.                                                | true    |
| `/envoy reload`                  | `envoy.reload`     | Reloads all the files and tiers.                                               | false   |
| `/envoy drops [page]`            | `envoy.drops`      | Shows all the current crate locations.                                         | true    |
| `/envoy ignore`                  | `envoy.ignore`     | Mutes the envoy collecting message for the user.                               | true    |
| `/envoy flare [amount] [player]` | `envoy.flare.give` | Gives a player a flare to start the envoy.                                     | false   |
| `/envoy edit`                    | `envoy.edit`       | Sets the player into editor mode which allows them to edit the drop locations. | false   |
| `/envoy start`                   | `envoy.start`      | Starts the envoy event.                                                        | false   |
| `/envoy stop`                    | `envoy.stop`       | Stops the current envoy event.                                                 | false   |
| `/envoy center`                  | `envoy.center`     | Sets the center for the random crate drops.                                    | false   |

* Use the permission `envoy.bypass` to use all commands which defaults to `op`

* To use flares you need the permission `envoy.flare.use` which defaults to `false`.

* To see envoy locations at the start, you need the permission `envoy.locations` which defaults to `false`.