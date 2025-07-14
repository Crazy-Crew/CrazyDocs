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

#### An example of how to use the `QUARTZ` trim with pattern `SENTRY` in a prize.
```yaml
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
      - 'Item:GOLDEN_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern:SENTRY, Name:&cAn example helmet using Trims.'
```

#### An example but instead with `TURTLE_HELMET`
```yaml
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
      - 'Item:TURTLE_HELMET, Amount:1, Trim-Material:QUARTZ, Trim-Pattern:SENTRY, Name:&cAn example helmet using Trims.'
```