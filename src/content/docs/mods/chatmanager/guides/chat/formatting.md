---
title: Formatting
---
## Chat Format
Chat format is a simple yet powerful per-group chat formatting feature where players will automatically be placed in their chat format group, 
depending on which permission group they are in. A default chat format is added so if the players format group doesn't exist for their permissions rank, they will be placed in the default format group automatically.

Per-group formats require Vault and a permissions plugin that registers Vault's chat and permission services, such as LuckPerms. ChatManager asks Vault for the player's **primary group** and uses that name as the key under `Groups`. Without Vault, everyone uses `Default_Format`.

## Understanding Chat Formatting
This area will help you understand the chat formatting feature as simple as possible.

This is the main section of the config, I'm going to try and break it down so everyone can understand it and know how to use it properly.

`Chat_Format.Enable` is `false` by default, so set it to `true` before you test your formats.
```
Chat_Format:
  Enable: false
  # This will only be used if the players permission group isn't on the bottom of this section.
  Default_Format: "%luckperms_prefix% &7{player} &9> &7{message}"
  Groups:
    default: # The name of the group, this is case-sensitive!
      Format: "&8[&7Default&8] &7{player} &9> &7{message}" # The format you want the group to have.
    vip:
      Format: "&8[&5VIP&8] &7{player} &9> &7{message}"
    moderator:
      Format: "&a[&3Moderator&a] &b{player} &9> &e{message}"
    admin:
      Format: "&8[&cAdmin&8] &4{player} &9> &a{message}"
    owner:
      Format: "&b[&6Owner&b] {player} &9> &e{message}"
```

```  
Default_Format: "%luckperms_prefix% &7{player} &9> &7{message}"
```

This part is the Default_Format section, what this part of the section does is it puts players in this group if their primary group doesn't exist in the `Groups` section.
So lets say you only have a few groups in your chat format section, default, vip, and moderator, but your primary group in your permissions plugin is builder. What chat manager will do is use the Default_Format since your group doesn't exist in the Groups section.

## Creating a New Group
If you want to create a new chat format group please follow these steps.
You can add as many or as little groups as you like and configure them to your liking.

1. To create a new group you first need to create it in your permissions' plugin.
   Let's create the group builder and add our permissions and prefix/ suffix to the group (You can add the permissions and prefix/ suffix after your done setting up the chat format if you want).

   These are default examples how two groups can look like while using the permissions plugin LuckPerms.

   https://imgur.com/a/h7SXgDl

2. Now add the group to the `Groups` section of your config.

   ```
       builder:
         Format: "&8[&eBuilder&8] &7{player} &9> &7{message}"
   ```

   * The key (`builder:`) must be exactly the primary group name your permissions plugin reports through Vault. **It is case-sensitive**! The shipped groups are all lowercase because LuckPerms stores group names in lowercase.
   * Add four spaces before the group name, and six spaces before `Format:`.

3. Then you create the format you want to use for the rank, you can add as much as you want to it, but be careful, it can make your chat look a mess.

4. Finally press save, then reload the config (/chatmanager reload) then you're done.

**Important Information when using LuckPerms**

If you are using the permissions plugin LuckPerms please make sure all the group names are set to **lowercase** when adding the groups to the chat format! ALSO, make sure you do NOT add a displayname to the groups, or they will not work with the chat format. 
To see and remove the displayname do /lp editor, click the link, click the group, and remove the permission looking node displayname.`{name}` and that will remove it.

## Available Variables
These are the only variables ChatManager replaces in a chat format:
* `{player}` - The players name.
* `{message}` - The message the player typed.
* `{prefix}` - ChatManager's own message prefix from the messages file, not the players rank prefix.
* `{radius}` - The players chat radius channel prefix, when [Chat Radius](/mods/chatmanager/guides/chat/radius/) is enabled.

For anything else, such as rank prefixes, suffixes or the world name, use PlaceholderAPI placeholders like `%luckperms_prefix%`, `%luckperms_suffix%` or `%player_world%`.

You can go all out with the chat format, don't make it bland like the example, have fun with it and make it look something like this: https://imgur.com/a/KdWvhVg

This is how I have the format in that picture formatted.

```
  Groups:
    owner:
      Format: "{radius} %deluxetags_tag% %luckperms_prefix%#ff00ff{player}%luckperms_suffix% #ff00ff» {message}"
```

As you can see, if you put your mind to it possibilities are endless, with this example you can see PlaceholderAPI placeholders added to it and the support for hex codes.

## Placeholders
If you like to see a list of all the available placeholders you can use for the chat format please go [here](/mods/chatmanager/guides/placeholders/).

If you wish to use PlaceholderAPI's placeholders, You can find them [here](https://wiki.placeholderapi.com/users/placeholder-list/#).