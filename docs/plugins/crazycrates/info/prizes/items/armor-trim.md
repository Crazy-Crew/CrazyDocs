---
id: crazycrates-armor-trim
title: Armor Trim
slug: /crazycrates/info/prizes/items/armor-trim
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Armor Trim
---

## Armor Trim
*All armor types ( including `Turtle Helmet` ) except `Leather Armor` support trims*

### [Trim Materials](https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimMaterial.html)

### [Trim Patterns](https://jd.papermc.io/paper/1.20/org/bukkit/inventory/meta/trim/TrimPattern.html)

#### An example of how to use the `QUARTZ` trim with pattern `SENTRY` in a prize.
```yml
Crate:
  # The crate type.
  CrateType: CSGO
  # The title of the crate.
  CrateName: '&aExample Crate'
  # The preview name of the crate.
  Preview-Name: '&aExample Crate Preview'
  # All the prizes that can be gotten in the Crate.
  Prizes:
    1:
     DisplayName: '&cAn example helmet using Trims.'
     DisplayItem: 'GOLDEN_HELMET'
     DisplayAmount: 1
     DisplayTrim:
       Material: 'QUARTZ'
       Pattern: 'SENTRY'
    MaxRange: 100
    Chance: 1
    Items:
    - 'Item:GOLDEN_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```

#### An example but instead with `TURTLE_HELMET`
```yml
Crate:
  # The crate type.
  CrateType: CSGO
  # The title of the crate.
  CrateName: '&aExample Crate'
  # The preview name of the crate.
  Preview-Name: '&aExample Crate Preview'
  # All the prizes that can be gotten in the Crate.
  Prizes:
    1:
     DisplayName: '&cAn example helmet using Trims.'
     DisplayItem: 'TURTLE_HELMET'
     DisplayAmount: 1
     DisplayTrim:
       Material: 'QUARTZ'
       Pattern: 'SENTRY'
    MaxRange: 100
    Chance: 1
    Items:
    - 'Item:TURTLE_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```