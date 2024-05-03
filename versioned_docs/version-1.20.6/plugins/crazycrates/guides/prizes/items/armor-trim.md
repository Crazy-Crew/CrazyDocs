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

#### An example of how to use the `quartz` trim with pattern `sentry` in a prize.
```yml
Crate:
  Prizes:
    1:
     DisplayName: '<red>An example helmet using Trims.'
     DisplayItem: 'golden_helmet'
     DisplayAmount: 1
     DisplayTrim:
       Material: 'quartz'
       Pattern: 'sentry'
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:golden_helmet, Amount:1, Trim-Material:quartz, Trim-Pattern:sentry, Name:<red>An example helmet using trims.'
```

#### An example but instead with `turtle_helmet`
```yml
Crate:
  Prizes:
    1:
     DisplayName: '<red>An example helmet using Trims.'
     DisplayItem: 'turtle_helmet'
     DisplayAmount: 1
     DisplayTrim:
       Material: 'quartz'
       Pattern: 'sentry'
     MaxRange: 100
     Chance: 1
     Items:
     - 'Item:turtle_helmet, Amount:1, Trim-Material:quartz, Trim-Pattern:sentry, Name:<red>An example helmet using trims.'
```