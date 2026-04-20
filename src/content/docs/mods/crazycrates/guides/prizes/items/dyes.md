---
title: Dyes
description: Get started with adding dyes to your prizes!

hide_title: false

sidebar_label: Dyes
sidebar_position: 2
---
*Warning, The prize examples assume you know other options must be added for a Prize to function*
*If not, I recommend you read the remaining documentation*

*This configuration can be applied to Leather Armor, Filled Map, and other dyeable items liked Tipped Arrows*
- Submit a suggestion if there is a dyeable item that is missing.

### Display Item
This is an example of how to have a potion, with a custom dye and a potion effect for the preview.
```yaml
# The crate section.
Crate:
  # The prizes section.
  Prizes:
    # The name of the prize.
    "muscleman":
      # The name of the item, good for identification internally and externally.
      # The item to display in the gui.
      DisplayItem: "potion"
      # Prize display preview settings
      Settings:
        # The rgb used for the potion.
        RGB: "229,164,229"
        # The color of the item displayed.
        # Color: "green"
```

### Custom Item
```yaml
# The crate section.
Crate:
  # The prizes section.
  Prizes:
    # The name of the prize.
    "muscleman":
      # The list of items to win.
      Items:
        # The name of the item, good for identification internally and externally.
        "strength_dye":
          # The item material.
          material: "potion"
          # Per item settings.
          settings:
            # The rgb of the item.
            rgb: "229,164,229"
```