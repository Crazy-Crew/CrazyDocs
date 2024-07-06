---
title: Permissions
description: A list of commands with updated permissions

hide_title: false

sidebar_label: Permissions
sidebar_position: 1
---
# Commands:

| Command                     | Permission                                  | Description                                                                      |
|-----------------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| `/ca`                       | `crazyauctions.access`                      | Opens up the auction house.                                                      |
| `/ca help`                  | `crazyauctions.access`                      | Shows all available commands.                                                    |
| `/ca expire`                | `crazyauctions.access`                      | Opens up the players expired items list.                                         |
| `/ca collect`               | `crazyauctions.access`                      | Opens up the player's collectible items list.                                    |
| `/ca listed`                | `crazyauctions.access`                      | Opens up the player's items they are currently selling.                          |
| `/ca reload`                | `crazyauctions.admin`                       | Reloads all the files.                                                           |
| `/ca view <player>`         | `crazyauctions.view`                        | Shows the list items being sold by the searched player.                          |
| `/ca sell <price> [amount]` | `crazyauctions.sell` `crazyauctions.sell.#` | Add the item currently in your hand to the selling section of the auction house. |
| `/ca bid <price> [amount]`  | `crazyauctions.bid` `crazyauctions.bid.#`   | Add the item currently in your hand to the bidding section of the auction house. |

Command Aliases: `/ca` `/ah` `/hdv` `/crazyauction` `/crazyauctions`

Force End an auction: `crazyauctions.force-end`

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