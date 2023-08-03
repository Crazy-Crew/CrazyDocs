---
id: crazyvouchers-commands
title: Commands
slug: /crazyvouchers/commands
hide_title: true
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Commands
---
# Commands

Command|Permission|Description
---|---|---
`/vouchers`|`voucher.admin`|Manager your vouchers however you want.
`/vouchers help`|`voucher.access`|Shows the help menu for crazyvouchers.
`/vouchers reload`|`voucher.admin`|Reloads the plugin.
`/vouchers admin/open`|`voucher.admin`|Shows a gui of easy to grab vouchers.
`/vouchers types/list`|`voucher.admin`|Shows a list of voucher codes & items.
`/vouchers redeem <code>`|`voucher.redeem`|Redeems a voucher code from Voucher-Codes.yml
`/vouchers give <type> <amount> <player> <arguments>`|`voucher.admin`|Gives a player a voucher from Config.yml
`/vouchers giveall <type> <amount> <arguments>`|`voucher.admin`|Gives all players a voucher from Config.yml

# Permissions

Wildcard|Description
---|---
`voucher.access`|`Gives access to the help menu.`
`voucher.redeem`|`Allows you to redeem a code.`
`voucher.admin`|`Gives access to all admin commands.`