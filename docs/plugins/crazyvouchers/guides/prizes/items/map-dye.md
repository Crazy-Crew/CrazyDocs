---
title: Map Dye
description: Examples of how to dye your maps!

hide_title: false

sidebar_label: Map Dye
sidebar_position: 8
---
### An example of how to dye your maps!
```yml
  Prizes:
    1:
     DisplayName: '&cAn leather helmet.'
     DisplayItem: 'FILLED_MAP:GREEN'
     # DisplayItem: 'FILLED_MAP:133,50,73'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:FILLED_MAP:GREEN'
```

```yml
Items:
 - Item:{FILLED_MAP}:GREEN
```
You have a selection of [colors](https://jd.papermc.io/paper/1.20/org/bukkit/Color.html) to use with this option.

```yml
Items:
 - Item:{FILLED_MAP}:133,50,73
```
This allows you to dye your map any color you want.

* r = red
* g = green
* b = blue

### RGB! It improves performance /j
You can use a [color picker](https://htmlcolorcodes.com/color-picker/) to find any color you want.