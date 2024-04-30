---
title: Custom Items
description: Examples of how to use custom items!

hide_title: false

sidebar_label: Custom Items
sidebar_position: 4
---
#### Custom Items
We directly support [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-add-items-blocks-armors-hats-food-furnitures-plants-and-gui-1-18-1-20-1.72448/) and [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

It currently does not work for the blocks placed when an envoy spawns, The block will appear as stone, but I am trying to figure something out.

#### Oraxen
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

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:emerald_helmet, Amount:1, Name:&aA custom item'
```

#### ItemsAdder
#### Find the custom model data of your custom item
You have to do `/iacustommodeldata your_item_id`, The plugin will send you the `ITEM` followed by the `CustomModelData`.

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:your_item_id, Amount:1, Name:&aA custom item'
```