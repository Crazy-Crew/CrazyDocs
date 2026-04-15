---
title: Tipped Arrows
description: Example of how to apply custom potions to tipped arrows!

hide_title: false

sidebar_label: Tipped Arrows
sidebar_position: 1
---
### [A list of potion types](https://jd.papermc.io/paper/1.21.4/org/bukkit/potion/PotionType.html)

### An example of how to use it for display items.
```yaml
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
```yaml
Items:
 - Item:TIPPED_ARROW:{POTION_EFFECT}, Amount:64, Name:Posion Arrow
```
#### Example
```yaml
Items:
 - Item:TIPPED_ARROW:POISON, Amount:64, Name:Posion Arrow
```
### 2. How to make a tipped arrow as a display item:
```yaml
DisplayItem: TIPPED_ARROW:{POTION_EFFECT}
```
#### Example
```yaml
DisplayItem: TIPPED_ARROW:FIRE_RESISTANCE
```