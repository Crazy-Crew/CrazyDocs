---
title: Weight System
description: A guide on how the weight system works

hide_title: false

sidebar_label: Weight System
sidebar_position: 1
---
## This system will be released in v4.0
This is already merged into the `main` branch, so you can use the jenkins builds

You will have to run `/crazycrates migrate WeightMigration`, which will convert Chance/MaxRange to Weight!

### We no longer calculate, based on Chance/Max Range per prize.
We've moved to a weight based system, which will be explained below.

An example of a weight based prize and weight based tiers.
```yml
Crate:
  # Tiers are available in Cosmic and Casino crate types.
  # The Tiers the rewards can be found in.
  Tiers:
    # The config name for the tier
    Basic:
      # The in-game name of the tier.
      Name: "<dark_gray>Basic Tier"
      # The in-game lore of the tier.
      Lore:
        - "<gray>A basic tier."
        - "<red>%chance%</red>"
      # The item used for the secondary gui when you right-click for the preview.
      Item: "chest"
      # The custom model data of the item, -1 is disabled.
      Custom-Model-Data: -1
      # The lower the number, the less likely to win it.
      Weight: 50.0
      # The slot this item will be in the secondary gui.
      Slot: 20
  # All the prizes that can be obtained in the Crate.
  Prizes:
    "1":
      # The enchants to be stored on the book.
      DisplayEnchantments:
        - "protection:5"
        - "unbreaking:3"
      # The item to display in the gui.
      # The enchanted book will function with the enchants properly in an anvil.
      DisplayItem: "enchanted_book"
      # Prize settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
      # The amount to display in the gui.
      DisplayAmount: 3
      # The lore of the item.
      DisplayLore:
        - "<gradient:#8fcfa0:#32a852>A gradient lore!"
      # The lower the number, the less likely to win it.
      Weight: 25.0
      # Tiers are available in Cosmic and Casino crate types.
      # The Tiers the rewards can be found in.
      Tiers:
        - "Rare"
      # The list of items to win.
      Items:
        - "Item:enchanted_book, protection:5, unbreaking:3"
```

The lower the number, the less likely a player will be able to win it.

### What is the max range?
The max range is the sum of all `Weight` options found on each prize.

### How do I display chance?
%chance% which works in display names, display lores, messages, and commands in prizes.

### Why does my chance show 0%?
Increase your weight, Some decimal points when divided by the max range will simply display 0%.
It does not mean your weight is a 0% chance of winning, the chance that is displayed is purely cosmetic.
It has no part in the calculation, You can manually input the chance for that specific prize.
