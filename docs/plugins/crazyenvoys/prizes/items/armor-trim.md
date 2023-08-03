---
id: crazyenvoys-armor-trim
title: Armor Trim
slug: /crazyenvoys/prizes/items/armor-trim
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
Settings:
  # If they need a permission to claim this envoy. Set too false to disable.
  Claim-Permission: false
  # What permission they need.
  Claim-Permission-Name: 'lucky.envoy.use'
  # All the prizes that can be gotten in the Tier.
  Prizes:
    '1':
      Chance: 50
      Items:
     - 'Item:GOLDEN_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```

#### An example but instead with `TURTLE_HELMET`
```yml
Settings:
  # If they need a permission to claim this envoy. Set too false to disable.
  Claim-Permission: false
  # What permission they need.
  Claim-Permission-Name: 'lucky.envoy.use'
  # All the prizes that can be gotten in the Tier.
  Prizes:
    '1':
      Chance: 50
      Items:
      - 'Item:TURTLE_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern: SENTRY, Name: &cAn example helmet using Trims.'
```