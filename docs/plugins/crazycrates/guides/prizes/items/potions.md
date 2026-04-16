---
title: Potions
description: Get started with adding potions to your prizes!

hide_title: false

sidebar_label: Potions
sidebar_position: 1
---
*Warning, The prize examples assume you know other options must be added for a Prize to function*
*If not, I recommend you read the remaining documentation*

*The configuration for this can be used with tipped_arrows as well.*

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
        "strength_potion":
          # The item material.
          material: "potion"
          # Per item settings.
          settings:
            # The rgb of the item.
            rgb: "229,164,229"
            # The color of the item.
            # color: "green"
            # The potion settings.
            potions:
              # The name of the potion effect.
              "strength":
                # The duration of the potion effect.
                duration: 10
                # The level of the potion effect.
                level: 3
                # The potion style settings.
                style:
                  # Should the icon show in the inventory?
                  icon: false
                  # Should there be an ambient effect for the player?
                  ambient: false
                  # Should the particles show around the player?
                  particles: false
```