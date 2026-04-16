---
title: Permissions
description: A list of commands with updated permissions

hide_title: false

sidebar_label: Permissions
sidebar_position: 1
---
| Command                                                    | Permission             | Description                                                |
|------------------------------------------------------------|------------------------|------------------------------------------------------------|
| `/crazyvouchers`                                           | `crazyvouchers.access`  | Manager your vouchers however you want.                    |
| `/crazyvouchers help`                                      | `crazyvouchers.help` | Shows the help menu for crazyvouchers.                     |
| `/crazyvouchers reload`                                    | `crazyvouchers.reload`  | Reloads the plugin.                                        |
| `/crazyvouchers admin/open`                                | `crazyvouchers.open`  | Shows a gui of easy to grab vouchers.                      |
| `/crazyvouchers types/list`                                | `crazyvouchers.types`  | Shows a list of voucher codes & items.                     |
| `/crazyvouchers redeem <code>`                             | `crazyvouchers.redeem` | Redeems a voucher code from the `codes` directory.         |
| `/crazyvouchers give <type> <amount> <player> <arguments>` | `crazyvouchers.give`  | Gives a player a voucher from the `vouchers` directory.    |
| `/crazyvouchers giveall <type> <amount> <arguments>`       | `crazyvouchers.giveall`  | Gives all players a voucher from the `vouchers` directory. |

# Permissions

| Wildcard                | Description                              |
|-------------------------|------------------------------------------|
| `crazyvouchers.access`  | `Gives access to the help menu.`         |
| `crazyvouchers.redeem`  | `Allows you to redeem a code.`           |
| `crazyvouchers.migrate` | `Migrates old vouchers to new vouchers.` | 
| `crazyvouchers.admin`   | `Gives access to all admin commands.`    |
