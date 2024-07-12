---
title: Custom Items
description: Examples of how to use custom items!

hide_title: false

sidebar_label: Custom Items
sidebar_position: 4
---
### Custom Items
We directly support [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-add-items-blocks-armors-hats-food-furnitures-plants-and-gui-1-18-1-20-1.72448/) and [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

### Oraxen
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
DisplayItem: 'arrow_next_icon'
```

#### An example of how to use it for keys.
```yaml
PhysicalKey:
  # Name of the Key.
  Name: 'A fancy key using oraxen.'
  # Lore of the Key.
  Lore: []
  # The custom item from oraxen.
  Item: 'amethyst'
```

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:emerald_helmet, Amount:1, Name:&aA custom item'
```

### ItemsAdder
#### Find the custom model data of your custom item
You have to do `/iacustommodeldata your_item_id`, The plugin will send you the `ITEM` followed by the `CustomModelData`.
Note: you can find more places to use `CustomModelData` by going to https://docs.crazycrew.us/docs/plugins/crazycrates/guides/crates/examples/basiccrate

#### An example of how to use it for display items.
```yaml
  Prizes:
    '1':
      # The name of the item to display in the gui.
      DisplayName: "<gold>BadBones69"
      # The item to display in the gui.
      DisplayItem: "your_item_id"
      # Prize settings
      Settings:
        # The custom model data of the item, -1 is disabled.
        Custom-Model-Data: your_custom_model_data
```

#### An example of how to use it for keys.
```yaml
PhysicalKey:
  # Name of the Key.
  Name: 'A fancy key using itemsadder.'
  # Lore of the Key.
  Lore: []
  # The custom item from itemsadder.
  Item: 'your_item_id'
  # The custom model data of the item, -1 is disabled.
  Custom-Model-Data: your_custom_model_data
```

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:your_item_id, Custom-Model-Data:your_custom_model_data, Amount:1, Name:&aA custom item'
```