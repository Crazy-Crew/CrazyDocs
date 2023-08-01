---
id: crate-armor-trim
title: Armor Trim
slug: /crazycrates/prizes/items/armor-trim
hide_title: false
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Armor Trim
---

### An example of how to add armor trim to your prize pool!
```yml
1:
 DisplayName: '&b&lCheap Helmet'
 DisplayItem: 'GOLDEN_HELMET'
 DisplayTrim:
 # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
 Material: 'QUARTZ'
 # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
 Pattern: 'SENTRY'
 DisplayAmount: 1
 Lore:
 - '&7Win a cheap helmet.'
 - '&6&lChance: &c&l60%'
 MaxRange: 100
 Chance: 60
 Items:
 - 'Item:GOLDEN_HELMET, Amount:1, Trim-Pattern:SENTRY, Trim-Material:QUARTZ, Name:&bCheap Helmet, PROTECTION_ENVIRONMENTAL:1, OXYGEN:1'
2:
 DisplayName: '&2Turtle Helmet'
 DisplayItem: 'TURTLE_HELMET'
 DisplayTrim:
 # Available Materials: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html
 Material: 'AMETHYST'
 # Available Patterns: https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html
 Pattern: 'RAISER'
 DisplayAmount: 1
 Lore:
 - '&7Win a cheap helmet.'
 - '&6&lChance: &c&l60%'
 MaxRange: 100
 Chance: 60
 Items:
 - 'Item:TURTLE_HELMET, Amount:1, Trim-Pattern:RAISER, Trim-Material:AMETHYST, Name:&2Turtle Helmet'
```