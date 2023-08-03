---
id: crazyvouchers-placeholders
title: Placeholders
slug: /crazyvouchers/placeholders
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Placeholders
---
### Description
List of different placeholders that can be used in different parts of the plugin.

### Random Number Placeholder:
Usable places: Command option for prizes.

How to use: %random%:minimum-maximum

#### Commands Option Example:
```yaml
Commands:
  - 'eco give %player% %random%:10000-100000'
```

#### In-Game Command Example:
```yaml
/crazyvouchers give money 1 badbones69 %random%:1-1000
```

## Voucher Commands
### Description
These placeholders apply to all "Command:" options for vouchers in both the Config.yml and VoucherCodes.yml files.

Placeholder|Description|Example
---|---|---|
%player%|Name of the player|`- 'eco give %player% 1000'`
%world%|World player is currently in|`- lp user %player% parent set crazyvouchers.redeem %world%`
%x%|X coordinate of the player.|`- 'tp %x% %y% %z%'`
%y%|Y coordinate of the player.|`- 'tp %x% %y% %z%'`
%z%|Z coordinate of the player.|`- 'tp %x% %y% %z%'`