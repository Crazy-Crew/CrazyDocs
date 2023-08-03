---
id: crazycrates-tipped-arrows
title: Tipped Arrows
slug: /crazycrates/prizes/items/tipped-arrows
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Tipped Arrows
---
### [A list of potion types](https://jd.papermc.io/paper/1.20/org/bukkit/potion/PotionType.html)

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