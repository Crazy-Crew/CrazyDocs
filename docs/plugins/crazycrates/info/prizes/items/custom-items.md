---
id: crazycrates-custom-items
title: Custom Items
slug: /crazycrates/info/prizes/items/custom-items
hide_title: false
hide_table_of_contents: false

pagination_next: null
pagination_prev: null

sidebar_label: Custom Items
---
#### Custom Items
We directly support [Oraxen](https://www.spigotmc.org/resources/%E2%98%84%EF%B8%8F-oraxen-add-items-blocks-armors-hats-food-furnitures-plants-and-gui-1-18-1-20-1.72448/) and [ItemsAdder](https://www.spigotmc.org/resources/%E2%9C%A8itemsadder%E2%AD%90emotes-mobs-items-armors-hud-gui-emojis-blocks-wings-hats-liquids.73355/)

#### Oraxen
You can simply use the id directly from your config files inside `oraxen/items` folder

#### An example of an oraxen custom item.
The `arrow_next_icon` is the id.
```yaml
arrow_next_icon: -> ID you need to use ( don't add the : )
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

#### ItemsAdder
I don't have access to itemsadder so if anyone would like to contribute to the docs, Please do.

#### An example of how to use it for display items.
```yaml
DisplayItem: 'your_item_id'
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
```

#### An example of how to use it in the items section.
```yaml
Items:
  - 'Item:your_item_id, Amount:1, Name:&aA custom item'
```