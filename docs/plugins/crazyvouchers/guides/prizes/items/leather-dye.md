---
title: Leather Dye
description: Examples of how to dye your leather!

hide_title: false

sidebar_label: Leather Dye
sidebar_position: 5
---
### An example of how to dye your leather armor!
```yaml
  Prizes:
    1:
     DisplayName: '&cAn leather helmet.'
     DisplayItem: 'LEATHER_HELMET:GREEN'
     # DisplayItem: 'LEATHER_HELMET:133,50,73'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:{LEATHER_HELMET/LEATHER_HORSE_ARMOR}:GREEN'
```

```yaml
Items:
 - Item:{LEATHER_HELMET/LEATHER_HORSE_ARMOR}:GREEN
```
You have a selection of [colors](https://jd.papermc.io/paper/1.21.4/org/bukkit/Color.html) to use with this option.

```yaml
Items:
 - Item:{LEATHER_HELMET/LEATHER_HORSE_ARMOR}:133,50,73
```
This allows you to dye your leather any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.