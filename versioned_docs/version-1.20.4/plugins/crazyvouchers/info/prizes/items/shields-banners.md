---
id: crazyvouchers-shields-banners
title: Shields & Banners

hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Shields & Banners
sidebar_position: 1
---
### How to add color and patterns to your shields and banners:

### Information:
Usage: `{Pattern}:{Color}`

RGB: `{Pattern}:{Red},{Green},{Blue}`

[Colors](https://jd.papermc.io/paper/1.20/org/bukkit/DyeColor.html)

[Pattern Types](https://jd.papermc.io/paper/1.20/org/bukkit/block/banner/PatternType.html)

### Display Items
Set the item to either a `BANNER` or a `SHIELD`. Use the option called `Patterns:` then follow the example below.

#### Example
```yml
voucher:
 # The name of the shield.
 name: '&a&lFancy Shield'
 # The item needs to be SHIELD or BANNER
 item: 'SHIELD'
 # The type of pattern you want on the shield.
 patterns:
  - 'HALF_HORIZONTAL:RED'
  - 'RHOMBUS_MIDDLE:BLACK'
  - 'STRIPE_TOP:RED'
  - 'STRIPE_BOTTOM:WHITE'
  - 'STRIPE_MIDDLE:BLACK'
  - 'CIRCLE_MIDDLE:WHITE'
```

### Item: option
If you wish to give players a banner or shield with the colors and patterns on them then they work just like any other item in the `Items:` section.

#### Example
```yml
items:
  - 'Item:Shield, HALF_HORIZONTAL:RED, RHOMBUS_MIDDLE:BLACK, STRIPE_TOP:RED, STRIPE_BOTTOM:WHITE, STRIPE_MIDDLE:BLACK, CIRCLE_MIDDLE:WHITE'
```

### RGB Example:
This is for if you wish to use a custom color instead of preset ones by Minecraft.

#### Example
```yml
voucher:
 name: '&a&lFancy Shield'
 item: 'SHIELD'
 patterns:
  - 'HALF_HORIZONTAL:255,0,0'
```
```yml
items:
  - 'Item:Shield, HALF_HORIZONTAL:255,0,0'
```
*Note `255,0,0` is red in RGB.