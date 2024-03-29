---
id: crazyauctions-permissions-v1
title: Permissions
slug: /crazyauctions/info/commands/permissions
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Permissions
---
# Commands:

| Command                     | Permission                                  | Description                                                                      |
|-----------------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| `/ca`                       | `crazyauctions.access`                      | Opens up the auction house.                                                      |
| `/ca help`                  | `crazyauctions.access`                      | Shows all available commands.                                                    |
| `/ca test`                  | `crazyauctions.test`                        | Tests the auction house.                                                         |
| `/ca expire`                | `crazyauctions.access`                      | Opens up the players expired items list.                                         |
| `/ca collect`               | `crazyauctions.access`                      | Opens up the player's collectible items list.                                    |
| `/ca listed`                | `crazyauctions.access`                      | Opens up the player's items they are currently selling.                          |
| `/ca reload`                | `crazyauctions.reload`                      | Reloads all the files.                                                           |
| `/ca view <player>`         | `crazyauctions.view`                        | Shows the list items being sold by the searched player.                          |
| `/ca sell <price> [amount]` | `crazyauctions.sell` `crazyauctions.sell.#` | Add the item currently in your hand to the selling section of the auction house. |
| `/ca bid <price> [amount]`  | `crazyauctions.bid` `crazyauctions.bid.#`   | Add the item currently in your hand to the bidding section of the auction house. |

Command Aliases: `/ca` `/ah` `/crazyauction` `/crazyauctions`

Force End an auction: `crazyauctions.force-end`

Bypass auction restrictions using `crazyauctions.bypass`

# Permissions
| Wildcard                 | Description                            | Default |
|--------------------------|----------------------------------------|---------|
| `crazyauctions.admin.*`  | `Gives access to all admin commands.`  | false   |
| `crazyauctions.player.*` | `Gives access to all player commands.` | false   |

# Selling and Bidding:

If you wish for a player to add items to the selling and or bidding section of the auction house they need all of these permissions.

### Selling:
Players need BOTH PERMISSIONS to put their items in the selling section.
* `crazyauctions.sell`
* `crazyauctions.sell.#`
#### *Replace the # with the max amount of items they can have in the bidding section.
### Bidding:
Players need BOTH PERMISSIONS to put their items into the bidding section.
* `crazyauctions.bid`
* `crazyauctions.bid.#`
#### *Replace the # with the max amount of items they can have in the bidding section.
