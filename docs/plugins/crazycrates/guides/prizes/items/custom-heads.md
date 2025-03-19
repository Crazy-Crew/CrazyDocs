---
title: Custom Heads
description: Examples of how to use custom heads!

hide_title: false

sidebar_label: Custom Heads
sidebar_position: 3
---
### An example of how to have a custom head as a prize/display item.

### The new way of doing `Items` for prizes which will eventually be default, You can enable this in the `config.yml`
#### This requires finding the texture on [minecraft-heads.com](https://minecraft-heads.com/)
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An example player head using textures."
    # The amount of the item to display.
    DisplayAmount: 3
    # The material of the item.
    DisplayItem: "player_head"
    # The player name/texture to display.
    # https://minecraft-heads.com/
    Player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
    # The weight of the item, the lower the weight, the less likely to win it.
    Weight: 5.0
    # All the items to give to the player.
    Items:
      "1":
        # The name of the item.
        name: "<red>An example player head using textures."
        # The material of the item.
        material: "player_head"
        # The amount of the item to give.
        amount: 3
        # Other settings.
        settings:
          # The player name/texture to display.
          # https://minecraft-heads.com/
          player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
```

#### This simply requires the player name.
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An example player head using player names."
    # The amount of the item to display.
    DisplayAmount: 3
    # The material of the item.
    DisplayItem: "player_head"
    # The player name/texture to display.
    # https://minecraft-heads.com/
    Player: "ryderbelserion"
    # The weight of the item, the lower the weight, the less likely to win it.
    Weight: 5.0
    # All the items to give to the player.
    Items:
      "1":
        # The name of the item.
        name: "<red>An example player head using player names."
        # The material of the item.
        material: "player_head"
        # The amount of the item to give.
        amount: 3
        # Other settings.
        settings:
          # The player name/texture to display.
          # https://minecraft-heads.com/
          player: "ryderbelserion"
```

#### This requires [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/) which pulls heads from minecraft-heads in a safe manner.
```yaml
Crate:
  Prizes:
    # The name of the item.
    DisplayName: "<red>An example player head using HeadDatabaseAPI."
    # The amount of the item to display.
    DisplayAmount: 3
    # The material of the item.
    DisplayItem: "player_head"
    # This only works if HeadDatabaseAPI is on the server.
    # The value you input is the id for the skull which is a string of numbers.
    Skull: "7129"
    # The weight of the item, the lower the weight, the less likely to win it.
    Weight: 5.0
    # All the items to give to the player.
    Items:
      "1":
        # The name of the item.
        name: "<red>An example player head using HeadDatabaseAPI."
        # The material of the item.
        material: "player_head"
        # The amount of the item to give.
        amount: 3
        # Other settings.
        settings:
          # This only works if HeadDatabaseAPI is on the server.
          # The value you input is the id for the skull which is a string of numbers.
          skull: "7129"
```

### This is the current way of doing items, however it no longer receives any new features or changes.
#### This requires finding the texture on [minecraft-heads.com](https://minecraft-heads.com/)
```yaml
  Prizes:
    1:
      DisplayName: "<red>An example player head using textures."
      DisplayItem: "player_head"
      DisplayAmount: 1
      Player: "1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e"
      Weight: 5.0
      Items:
        - "Item:player_head, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e, Amount:1"
```

#### This requires [HeadDatabase](https://www.spigotmc.org/resources/head-database.14280/) which pulls heads from minecraft-heads in a safe manner.
```yaml
  Prizes:
    1:
      DisplayName: "<red>An example player head using headdatabase."
      DisplayItem: "player_head"
      DisplayAmount: 1
      Skull: "7129"
      Weight: 5.0
      Items:
        - "Item:player_head, Skull:7129, Amount:1"
```

#### This grabs a player name, and tries to display their skull.
```yaml
  Prizes:
    1:
      DisplayName: "<red>An example player head using names."
      DisplayItem: "player_head"
      DisplayAmount: 1
      Player: "ryderbelserion"
      Weight: 5.0
      Items:
        - "Item:player_head, Skull:7129, Amount:1"
```
