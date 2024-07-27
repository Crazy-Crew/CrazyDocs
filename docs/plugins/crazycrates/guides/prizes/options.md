---
title: Options
description: An in-depth guide on how to use the `Items:` section!

hide_title: false

sidebar_label: Options
sidebar_position: 1
---

## List of all values that can be used in the `Items:` option

### Useful Links
* [Material Names](https://jd.papermc.io/paper/1.21/org/bukkit/Material.html)

* [Enchantment Names](https://jd.papermc.io/paper/1.21/org/bukkit/enchantments/Enchantment.html) 
* [Leather/Potion Color Names](https://jd.papermc.io/paper/1.21/org/bukkit/Color.html)
* [Item Flags](https://jd.papermc.io/paper/1.21/org/bukkit/inventory/ItemFlag.html)
* [Mob Types](https://jd.papermc.io/paper/1.21/org/bukkit/entity/EntityType.html)
* [Potion Types](https://jd.papermc.io/paper/1.21/org/bukkit/potion/PotionType.html)

### `Item:`
#### Description
This option is used to set the item material and some of the items data.

#### Usages
- `Item:{Material}`
- `Item:{Material}:{Durability}`
- `Item:{Material}:{Durability}, Custom-Model-Data:-1`
- `Item:{Material}, Custom-Model-Data:-1`
- `Item:{Leather Armor/Potion}:{Color}`
- `Item:{Leather Armor/Potion}:{Red},{Green},{Blue}`
- `Item:{Potion}:{PotionEffect}`
- `Item:{Material}, Damage:{Amount}`

#### Examples
```yaml
Items:
  - 'Item:golden_apple'
  - 'Item:diamond_chestplate:50'
  - 'Item:diamond_chestplate:50, Custom-Model-Data:32'
  - 'Item:diamond_chestplate, Custom-Model-Data:32'
  - 'Item:leather_chestplate:Blue'
  - 'Item:leather_chestplate:0,0,255'
  - 'Item:potion:Heal'
```

#### Mob Eggs
```yaml
Items:
  - 'Item:creeper_egg'
```

### `Name:`
Description:
This option is used to set the name of the item.

#### Usage:
- `Name:{Name of the item}`

#### Example
```yaml
Items:
  - 'Item:diamond_sword, Name:&4Sword of lost souls'
```

### `Lore:`
#### Description
This option is used to set the lore on the item. If you wish to add a line split the line with a `,` with no spaces. 

#### Usage
- `Lore:{Line 1},{Line 2>,{Line 3},{Line 4},...etc`

#### Example
```yaml
Items:
  - 'Item:diamond_sword, Lore:&7An old sword once lost in time,&7but has now been found and,&7is eager for battle.'
```

### `Amount:`
#### Description
This option is used to set how many items are in the stack given to the player.

#### Usage
- `Amount:{Number of item in stack}`

#### Example
```yaml
Items:
  - 'Item:golden_apple, Amount:32'
```

### `Player:`
#### Description
This option is used to set the player of a player head item. You can use a few different options for this.

#### Options
- Player's Name Usage:
    - `Player:BadBones69`
- URL Usage:
    - `Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e`

#### Examples
```yaml
Items:
  - 'Item:player_head, Player:BadBones69'
  - 'Item:player_head, Player:1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
```

### `Unbreakable-Item:`
#### Description
This option is used to make an item unbreakable.

#### Usage
- `Unbreakable-Item:{true/false}`

#### Example
```yaml
Items:
  - 'Item:diamond_sword, Unbreakable-Item:true'
```

### `Enchantments`
#### Description
This option is used to set the enchantments on the item.

#### Usage
- `{Enchantment Name}:{Level}`

#### Example
```yaml
Items:
  - 'Item:diamond_sword, Sharpness:5, Durability:2'
```

### `Item Flags`
#### Description
These options are used to add flags to the item.

#### Usage
- `{Flag Name}`

#### Examples
```yaml
Items:
  - 'Item:potion:lime, HIDE_POTION_EFFECTS'
  - 'Item:diamond_sword, Unbreakable-Item:true, HIDE_UNBREAKABLE'
```

### `Patterns`
[Wiki Page: Banner Patterns](items/shields-banners)