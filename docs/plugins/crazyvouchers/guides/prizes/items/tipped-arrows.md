---
title: Tipped Arrows
description: Example of how to apply custom potions to tipped arrows!

hide_title: false

sidebar_label: Tipped Arrows
sidebar_position: 1
---
### [A list of potion types](https://jd.papermc.io/paper/1.21/org/bukkit/potion/PotionType.html)

### An example of how to use it for display items.
```yml
  Prizes:
    1:
     DisplayName: '&cAn leather helmet.'
     DisplayItem: 'TIPPED_ARROW:{POTION_EFFECT}'
     # DisplayItem: 'TIPPED_ARROW:FIRE_RESISTANCE'
     DisplayAmount: 1
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:TIPPED_ARROW:{POTION_EFFECT}'
```

### 1. How to make a tipped arrow as a prize item:
```yml
Items:
 - Item:TIPPED_ARROW:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yml
Items:
 - Item:TIPPED_ARROW:POISON, Amount:64, Name:Posion Arrow
```
### 2. How to make a tipped arrow as a display item:
```yml
DisplayItem: TIPPED_ARROW:{POTION_EFFECT}
```
#### Example
```yml
DisplayItem: TIPPED_ARROW:FIRE_RESISTANCE
```