---
title: Armor Trim
description: Examples of how to use armor trims!

hide_title: false

sidebar_label: Armor Trim
sidebar_position: 7
---

## Armor Trim
*All armor types ( including `Turtle Helmet` ) except `Leather Armor` support trims*

<details>
  <summary>Trim Materials</summary>

  * amethyst
  * copper
  * diamond
  * emerald
  * gold
  * iron
  * lapis
  * netherite
  * quartz
  * redstone
</details>

<details>
  <summary>Trim Patterns</summary>

  * bolt
  * coast
  * dune
  * eye
  * flow
  * host
  * raiser
  * rib
  * sentry
  * shaper
  * silence
  * snout
  * spire
  * tide
  * vex
  * ward
  * wayfinder
  * wild
</details>

### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An example helmet using Trims."
    # The amount of the item to display.
    DisplayAmount: 1
    # The material of the item.
    DisplayItem: "diamond_helmet"
    # Settings related to armor trims
    DisplayTrim:
      # The trim material
      Material: "quartz"
      # The trim pattern
      Pattern: "sentry"
    # The weight of the item, the lower the weight, the less likely to win it.
    Weight: 1.0
    # All the items to give to the player.
    Items:
      "1":
        # The name of the item.
        name: "<red>An example helmet using Trims."
        # The material of the item.
        material: "diamond_helmet"

        # The amount of the item to give.
        amount: 1
        # Other settings.
        settings:
          # Settings related to armor trims
          trim:
            # The trim pattern
            pattern: "bolt"
            # The trim material
            material: "redstone"
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to use the `quartz` trim with pattern `sentry` in a prize.
```yaml
Crate:
  Prizes:
    1:
     DisplayName: "<red>An example helmet using Trims."
     DisplayItem: "golden_helmet"
     DisplayAmount: 1
     DisplayTrim:
       Material: "quartz"
       Pattern: "sentry"
     Weight: 1.0
     Items:
     - "Item:golden_helmet, Amount:1, Trim-Material:quartz, Trim-Pattern:sentry, Name:<red>An example helmet using trims."
```

#### An example but instead with `turtle_helmet`
```yaml
Crate:
  Prizes:
    1:
     DisplayName: "<red>An example helmet using Trims."
     DisplayItem: "turtle_helmet"
     DisplayAmount: 1
     DisplayTrim:
       Material: "quartz"
       Pattern: "sentry"
     Weight: 1.0
     Items:
     - "Item:turtle_helmet, Amount:1, Trim-Material:quartz, Trim-Pattern:sentry, Name:<red>An example helmet using trims."
```