---
id: crazyenchantments-wiki-items
title: Items
slug: /crazyenchantments/wiki/items
hide_title: true
hide_table_of_contents: true

pagination_next: null
pagination_prev: null

sidebar_label: Items
---
## List of all values that can be used in the `Items:` option

### Useful Links
* [Material Names](https://jd.papermc.io/paper/1.20/org/bukkit/Material.html)

* [Enchantment Names](https://jd.papermc.io/paper/1.20/org/bukkit/enchantments/Enchantment.html) 
* [Leather/Potion Color Names](https://jd.papermc.io/paper/1.20/org/bukkit/Color.html)
* [Item Flags](https://jd.papermc.io/paper/1.20/org/bukkit/inventory/ItemFlag.html)
* [Mob Types](https://jd.papermc.io/paper/1.20/org/bukkit/entity/EntityType.html)
* [Potion Types](https://jd.papermc.io/paper/1.20/org/bukkit/potion/PotionType.html)

### `Item:`
#### Description
This option is used to set the item material and some of the items data.

#### Usages
- `Item:{Material}`
- `Item:{Material}:{Durability}`
- `Item:{Material}:{Durability}#{Custom Model Data}`
- `Item:{Material}#{Custom Model Data}`
- `Item:{Leather Armor/Potion}:{Color}`
- `Item:{Leather Armor/Potion}:{Red},{Green},{Blue}`
- `Item:{Potion}:{PotionEffect}`

#### Examples
```yaml
Items:
  - 'Item:Golden_Apple'
  - 'Item:Diamond_Chestplate:50'
  - 'Item:Diamond_Chestplate:50#32'
  - 'Item:Diamond_Chestplate#32'
  - 'Item:Leather_Chestplate:Blue'
  - 'Item:Leather_Chestplate:0,0,255'
  - 'Item:Potion:Heal'
```

1.9-1.12.2 Mob Eggs:
- `Item:{MONSTER_EGG}:{Mob Name}`

#### Example
```yaml
Items:
  - 'Item:MONSTER_EGG:Creeper'
```

### `Name:`
Description:
This option is used to set the name of the item.

#### Usage:
- `Name:{Name of the item}`

#### Example
```yaml
Items:
  - 'Item:Diamond_Sword, Name:&4Sword of lost souls'
```

### `Lore:`
#### Description
This option is used to set the lore on the item. If you wish to add a line split the line with a `,` with no spaces. 

#### Usage
- `Lore:{Line 1},{Line 2>,{Line 3},{Line 4},...etc`

#### Example
```yaml
Items:
  - 'Item:Diamond_Sword, Lore:&7An old sword once lost in time,&7but has now been found and,&7is eager for battle.'
```

### `Amount:`
#### Description
This option is used to set how many items are in the stack given to the player.

#### Usage
- `Amount:{Number of item in stack}`

#### Example
```yaml
Items:
  - 'Item:Golden_Apple, Amount:32'
```

### `Player:`
#### Description
This option is used to set the player of a player head item. You can use a few different options for this.

#### Options
- Player's Name Usage:
    - `Player:BadBones69`
- Hash/Base64 Usage:
    - `Player:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWVlMzEyNmZmMmMzNDNkYTUyNWVlZjJiOTMyNzJiOWZlZDM2MjczZDBlYTA4YzI2MTZiODAwMDk5NDhhZDU3ZSJ9fX0=`
- URL Usage:
    - `Player:http://textures.minecraft.net/texture/1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e`

#### Examples
```yaml
Items:
  - 'Item:PLAYER_HEAD, Player:BadBones69'
  - 'Item:PLAYER_HEAD, Player:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWVlMzEyNmZmMmMzNDNkYTUyNWVlZjJiOTMyNzJiOWZlZDM2MjczZDBlYTA4YzI2MTZiODAwMDk5NDhhZDU3ZSJ9fX0='
  - 'Item:PLAYER_HEAD, Player:http://textures.minecraft.net/texture/1ee3126ff2c343da525eef2b93272b9fed36273d0ea08c2616b80009948ad57e'
```

### `Unbreakable-Item:`
#### Description
This option is used to make an item unbreakable.

#### Usage
- `Unbreakable-Item:{true/false}`

#### Example
```yaml
Items:
  - 'Item:Diamond_Sword, Unbreakable-Item:true'
```

### `Enchantments`
#### Description
This option is used to set the enchantments on the item.

#### Usage
- `{Enchantment Name}:{Level}`

#### Example
```yaml
Items:
  - 'Item:Diamond_Sword, Sharpness:5, Durability:2'
```

### `Item Flags`
#### Description
These options are used to add flags to the item.

#### Usage
- `{Flag Name}`

#### Examples
```yaml
Items:
  - 'Item:Potion:lime, HIDE_POTION_EFFECTS'
  - 'Item:Diamond_Sword, Unbreakable-Item:true, HIDE_UNBREAKABLE'
```

### `Patterns`
[Wiki Page: Banner Patterns](shields-banners.md)