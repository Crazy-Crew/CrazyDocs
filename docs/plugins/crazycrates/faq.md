---
title: Frequently Asked Questions
description: Questions frequently asked by our users

hide_title: false

sidebar_label: Frequently Asked Questions
sidebar_position: 2
---
### 1. Why do colors in console look weird?
#### Add this value to your startup flags!
 * -Dnet.kyori.ansi.colorLevel=truecolor
### 2. What is required for a prize to be winnable in the crate?
```yaml
    1:
      # The name of the prize in the preview.
      DisplayName: 'Example Prize' # Required
      # The item shown in the preview.
      DisplayItem: 'chest' # Required
      # Only works on items with durability. This will make the item appear more damaged.
      # It does not set the durability but subtracts this number from the durability
      # Durability is 100, It subtracts 1.
      # It cannot be 0.
      DisplayDamage: 1 # Optional
      # If the item is a piece of armor or a turtle helmet, You can use trims.
      DisplayTrim: {} # Optional
      # The amount to display in the preview.
      DisplayAmount: 1 # Optional
      # The lore to display in the preview.
      Lore: {} # Optional
      # The enchantments to display in the preview.
      DisplayEnchantments: {} # Optional
      # https://docs.crazycrew.us/crazycrates/crates/weight-system
      Weight: 40.0 # Required
      # If you want fireworks to spawn or not when prize is won.
      Firework: false # Optional
      # If the item glows in the preview.
      Glowing: false  # Optional
      # Hides item flags
      HideItemFlags: false  # Optional
      # Only works when the DisplayItem is set to PLAYER_HEAD
      # It supports names like `Notch` and links from `https://minecraft-heads.com/`
      Player: ''  # Optional
      # A list of items to give the player.
      Items: {} # Optional
      # A list of commands to run.
      Commands: {} # Optional
      # A list of messages to send to the player.
      Messages: {} # Optional
      Alternative-Prize: # Required if you want to use this section.
        # If it should be enabled.
        Toggle: false # Optional
        # A list of messages to send to the player.
        Messages: {} # Optional
        # A list of commands to run.
        Commands: {} # Optional
        # A list of items to give the player.
        Items: {} # Optional
      # This next part is only applied to Cosmic Crate
      Tiers: # Required
        - 'Basic'
        - 'UnCommon'
        - 'Rare'
```

### 3. The description shows there are 10 different crate types, but I only see 4 crates in the Crates folder?
There is a difference between [Crates](guides/crates/examples/basiccrate.md) and [Crate Types](misc/crate-types.md). Each crate has its own CrateType: option in the crate's file to pick which one it is.

The crates are the files i.e. example.yml and control all these options:
* Prizes
* The [Crate Type](misc/crate-types.md)
* How the key looks
* And more!

### 4. How do I add my custom item to a prize in a crate?
* You can use the command `/cc additem {crate} {number}`
  * `{number}` is to be replaced with the prize number you want
    * You can use prize number 5 as an example.
* It adds the current item you are holding in your hand to the crate of your choice.

* An alternative to using this command is to use Custom Model Data, 99% of the times... a lot of people just want to display it as you can simply run a command to get the item.
 * TRIPWIRE_HOOK#1
   * TRIPWIRE_HOOK is the material
   * #1 is the custom model data.
     * Where the custom model data can be found varies. Oraxen, ItemsAdder should have the custom model data in their configurations.
     * If using a resource pack directly, You have to open the resource pack and look through the .json files inside.

### 5. How do I add more crates to the plugin?
Adding new crates to CrazyCrates is easy! You have to navigate to the `crates` folder
* Copy and paste any `.yml` of your choice.
* Rename the `.yml` file so if it is `Example.yml`, Change it to `Example2.yml`
* Open `Example2.yml` and simply edit the crate like any other file.
* Save the file and run `/crazycrates reload`.
* Profit

-> [Crates](guides/crates/examples/basiccrate.md) - The directory with a list of default crates in case you need them.

### 6. How does the weight system work?
Check out [this page](guides/crates/weight-system) to figure out how the system works!

### 7. Is there anyway to make blocks open the CrazyCrates menu?
* Type `/crazycrates editor --crate Menu`.
* Right click to add a location, left click to break a location.
* Type `/crazycrates editor --exit` to exit the mode.
* Right click to the view menu. It's that easy!

### 8. When I set a head as a crate and try to use a physical key. It doesn't do anything?
#### Reason:
The issue is the item you have set the key to. Certain items cannot be used on certain blocks like `Tripwire Hooks`. The server tells our plugin to ignore the click event because they cancelled it, They don't tell us that they right clicked it.
#### Solution:
Use an item that isn't a `TRIPWIRE_HOOK`, Use a `FEATHER` or something.

### 9. What does the alternative prize option do?
The alternative prize option is for when a player has already won a prize.

#### Example #1: 
* The player has a tag from DeluxeTags but you don't want them winning it again.
#### Example #2:
* The player wins a rank from the crate but they already have said crate.
  * The rank the player has will have a permission such as `example.ignore` which will prevent them from winning the prize.

1. User must have one of the permissions to be given the alternative prize.
The permission can be any permission you want it to be, It could be a permission defined via DeluxeTags to check if the player already has one of the tags.
2. Add the alternative prize option ( if it is missing )
3. Set the toggle to true and create the alternative prize.
[An example of an alternative prize](https://github.com/Crazy-Crew/CrazyCrates/blob/eeab4ad344f637570ec72a88493384456fe57719/paper/src/main/resources/crates/CrateExample.yml#L154)

##### Note: If you are using `/op` or `*`, You will always be given the main prize so please make sure to `de-op` yourself while testing otherwise you'll wonder why it's not working as intended.

### 10. Symbols, color codes or emojis aren't working as intended. They look weird?
Server not using UTF-8 encoding. If you are on a server host that doesn't let you edit startup flags ( run ), Contact them to see if they'll add it.

An example: `java -server -Dfile.encoding=UTF8 -Xmx2048M -jar server.jar`

This startup command is an example, Please use https://flags.sh/ to generate proper startup flags.

### 11. Players can't right-click to open a crate however players with `/op` or `*` are able to.
The issue is related to a setting in server.properties.
 * Set the option to 0  ( requires server restart )
```
spawn-protection=0
```

### 12. You are already opening this crate! (Only applies to versions prior to v3.9)
 * It is most likely due to you using decimals/bad inputs for the `Chance` and `MaxRange` sections.

### 13. Why are my Crates/Crate Keys not working?
This is a very vague question, and this website does not have the ability to steal your data and find out for you. (Or does it?) You will have to go to [our support server](https://discord.gg/badbones-s-live-chat-182615261403283459) to have such issues handled.

#### Steps you can do before quickly jumping for support.
 * Run all your configuration files through [yamlint](https://www.yamllint.com/), It will tell you if you have any errors.
 * If you are confused on how to fix errors or read yaml, A nifty little guide for you by our favorite [longdick122](https://longbow122.github.io/learnerForYAML/)
