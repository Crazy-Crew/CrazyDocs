---
title: Custom Items
description: Examples of how to use custom items!

hide_title: false

sidebar_label: Custom Items
sidebar_position: 4
---
### Custom Items
See [this section](../../../misc/plugin-support.md#custom-items) for a list of supported custom item plugins.

### Nexo (recommended)
You can simply use the id directly from your config files inside `Nexo/nexo_defaults/items` folder

#### An example of a Nexo custom item.
The `forest_axe` is the id.
```yaml
forest_axe:
  itemname: Forest Axe
  material: NETHERITE_AXE
  Pack:
    model: nexo:item/nexo_tools/forest_axe
    custom_model_data: 1000
```

#### An example of how to use it for display items.
```yaml
DisplayItem: "forest_axe"
```

#### An example of how to use it for keys.
```yaml
PhysicalKey:
  # Name of the Key.
  Name: "A fancy key using Nexo."
  # Lore of the Key.
  Lore: []
  # The custom item from Nexo.
  Item: "forest_axe"
```

#### An example of how to use it in the items section.
```yaml
Items:
  - "Item:forest_axe, Amount:1, Name:<green>A custom item"
```

### Oraxen (deprecated)
You can simply use the id directly from your config files inside `oraxen/items` folder

#### An example of an oraxen custom item.
The `arrow_next_icon` is the id.
```yaml
arrow_next_icon:
  displayname: <#D5D6D8>Next page
  material: paper
  excludeFromInventory: true
  Pack:
    generate_model: true
    parent_model: item/generated
    textures:
    - required/arrow_next_icon.png
    custom_model_data: 1013
```

#### An example of how to use it for display items.
```yaml
DisplayItem: "arrow_next_icon"
```

#### An example of how to use it for keys.
```yaml
PhysicalKey:
  # Name of the Key.
  Name: "A fancy key using oraxen."
  # Lore of the Key.
  Lore: []
  # The custom item from oraxen.
  Item: "amethyst"
```

#### An example of how to use it in the items section.
```yaml
Items:
  - "Item:emerald_helmet, Amount:1, Name:<green>A custom item"
```

### General
If the plugin isn"t listed, this is the last remaining way to have custom textures.

This method is usually used for things like data-packs that add their own custom model data in pair with a resource pack.

#### An example of how to use it for display items.
```yaml
Crate:
  Prizes:
    "1":
      # The name of the item to display in the gui.
      DisplayName: "<gold>BadBones69"
      # The item to display in the gui.
      DisplayItem: "diamond_sword"
      # Prize settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
```

#### An example of how to use it for keys.
```yaml
PhysicalKey:
  # Name of the Key.
  Name: "<red>A fancy item with custom model data."
  # Lore of the Key.
  Lore: []
  # The material for the item i.e. diamond_sword.
  Item: "diamond_sword"
  # The custom model data of the item, -1 is disabled.
  Custom-Model-Data: -1
```

### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### An example of how to use it in the items section.
```yaml
Crate:
  Prizes:
    "1":
      # The name of the item to display in the gui.
      DisplayName: "<gold>BadBones69"
      # The item to display in the gui.
      DisplayItem: "diamond_sword"
      # Prize settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: -1
    # All the items to give to the player.
      Items:
        "1":
          # The name of the item.
          name: "<red>An item with custom model data."
          # The material of the item.
          material: "diamond_sword"
          # The amount of the item to give.
          amount: 1
          # The custom model data of the item.
          custom-model-data: -1
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### An example of how to use it in the items section.
```yaml
Items:
  - "Item:diamond_sword, Custom-Model-Data:-1, Amount:1, Name:<red>An item with custom model data."
```
