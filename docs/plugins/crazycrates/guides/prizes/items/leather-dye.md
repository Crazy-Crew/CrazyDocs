---
title: Leather Dye
description: Examples of how to dye your leather!

hide_title: false

sidebar_label: Leather Dye
sidebar_position: 5
---
### An example of how to dye your leather armor!
```yml
  Prizes:
    1:
     DisplayName: '<red>An leather helmet.'
     DisplayItem: 'leather_helmet:green'
     # DisplayItem: 'leather_helmet:133,50,73'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
      - 'Item:{leather_helmet/leather_horse_armor}:green'
```

```yml
Items:
 - 'Item:{leather_helmet/leather_horse_armor}:green'
```
You have a selection of [colors](https://jd.papermc.io/paper/1.20.6/org/bukkit/Color.html) to use with this option.

```yml
Items:
 - Item:{leather_helmet/leather_horse_armor}:133,50,73
```
This allows you to dye your leather any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.