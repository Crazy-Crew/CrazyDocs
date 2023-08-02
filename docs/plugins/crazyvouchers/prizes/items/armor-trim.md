---
id: crazyvouchers-armor-trim
title: Armor Trim
slug: /crazyvouchers/prizes/items/armor-trim
hide_title: false
hide_table_of_contents: true

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
Vouchers:
  ExampleVoucher:
    Name: '&cAn example helmet using Trims.'
    Item: 'GOLDEN_HELMET'
    Trim:
       Material: 'QUARTZ'
       Pattern: 'SENTRY'
    Items:
    - 'Item:GOLDEN_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```

#### An example but instead with `TURTLE_HELMET`
```yml
Vouchers:
  ExampleVoucher:
    Name: '&cAn example helmet using Trims.'
    Item: 'TURTLE_HELMET'
    Trim:
      Material: 'QUARTZ'
      Pattern: 'SENTRY'
    Items:
    - 'Item:TURTLE_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```