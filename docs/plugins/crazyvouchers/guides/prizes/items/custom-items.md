---
title: Custom Items
description: Examples of how to use custom items!

hide_title: false

sidebar_label: Custom Items
sidebar_position: 4
---
### Custom Items
See [this section](../../../misc/plugin-support.md#custom-items) for a list of supported custom item plugins.

### Nexo
You can simply use the id directly from your config files inside `nexo/items` folder

#### An example of an oraxen custom item.
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

#### An example of how to use it in the items section.
```yaml
Items:
  - "Item:forest_axe, Amount:1, Name:<green>A custom item"
```

### Oraxen
You can simply use the id directly from your config files inside `oraxen/items` folder

#### An example of an oraxen custom item.
The `arrow_next_icon` is the id.
```yaml
arrow_next_icon:
  displayname: <#D5D6D8>Next page
  material: PAPER
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

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:arrow_next_icon, Amount:1, Name:&aA custom item'
```

### ItemsAdder
#### Find the custom model data of your custom item
You have to do `/iacustommodeldata your_item_id`, The plugin will send you the `ITEM` followed by the `CustomModelData`.

#### An example of how to use it for display items.
```yaml
DisplayItem: 'your_item_id#your_custom_model_data'
```

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:your_item_id#your_custom_model_data, Amount:1, Name:&aA custom item'
```
