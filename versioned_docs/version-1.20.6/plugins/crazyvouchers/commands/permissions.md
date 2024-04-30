---
title: Permissions
description: A list of commands with updated permissions

hide_title: false

sidebar_label: Permissions
sidebar_position: 1
---
| Command                                               | Permission       | Description                                                |
|-------------------------------------------------------|------------------|------------------------------------------------------------|
| `/vouchers`                                           | `voucher.admin`  | Manager your vouchers however you want.                    |
| `/vouchers help`                                      | `voucher.access` | Shows the help menu for crazyvouchers.                     |
| `/vouchers reload`                                    | `voucher.admin`  | Reloads the plugin.                                        |
| `/vouchers admin/open`                                | `voucher.admin`  | Shows a gui of easy to grab vouchers.                      |
| `/vouchers types/list`                                | `voucher.admin`  | Shows a list of voucher codes & items.                     |
| `/vouchers redeem <code>`                             | `voucher.redeem` | Redeems a voucher code from the `codes` directory.         |
| `/vouchers give <type> <amount> <player> <arguments>` | `voucher.admin`  | Gives a player a voucher from the `vouchers` directory.    |
| `/vouchers giveall <type> <amount> <arguments>`       | `voucher.admin`  | Gives all players a voucher from the `vouchers` directory. |

# Permissions

| Wildcard         | Description                           |
|------------------|---------------------------------------|
| `voucher.access` | `Gives access to the help menu.`      |
| `voucher.redeem` | `Allows you to redeem a code.`        |
| `voucher.admin`  | `Gives access to all admin commands.` |