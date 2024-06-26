---
title: Formatting

hide_title: false

sidebar_label: Formatting
sidebar_position: 2
---
## Chat Format
Chat format is a simple yet powerful per-group chat formatting feature where players will automatically be placed in their chat format group, 
depending on which permission group they are in. A default chat format is added so if the players format group doesn't exist for their permissions rank, they will be placed in the default format group automatically.

## Understanding Chat Formatting
This area will help you understand the chat formatting feature as simple as possible.

This is the main section of the config, I'm going to try and break it down so everyone can understand it and know how to use it properly.
```
Chat_Format:

  Enable: true

  Default_Format: "&8[&7Default&8] &7{player} &9> &7{message}"

  Groups:
    Default: 
      Format: "&8[&7Default&8] &7{player} &9> &7{message}"
    VIP: 
      Format: "&8[&5VIP&8] &7{displayname} &9> &7{message}"
    Moderator: 
      Format: "&b[&6Moderator&b] &a[&b{world}&a] &b{player} &9> &e{message}"
```

```  
Default_Format: "&8[&7Default&8] &7{player} &9> &7{message}" 
```

This part is the Default_Format section, what this part of the section does is it puts players in this group if their permissions group doesn't exist in the second part of this section.
So lets say you only have a few permission groups in your chat format section, Default, VIP, and Moderator, but you are placed in the owners group from your permissions plugin. What chat manager will do if put you in the Default_Group section since your group doesn't exist in the Groups section.

# Creating a New Group
If you want to create a new chat format group please follow these steps.
This is what's currently in your config by default. You can add as many or as little groups as you like and configure them to your liking.
```
Groups:
    Default: 
      Format: "&8[&7Default&8] &7{player} &9> &7{message}"
    VIP: 
      Format: "&8[&5VIP&8] &7{displayname} &9> &7{message}"
    Moderator: 
      Format: "&b[&6Moderator&b] &a[&b{world}&a] &b{player} &9> &e{message}"
```

1. To create a new group you first need to create it in your permissions' plugin.
   Let's create the group owner and add our permissions and prefix/ suffix to the group (You can add the permissions and prefix/ suffix after your done setting up the chat format is you want).

This is a default example how a group can look like while using the permissions plugin PermissionsEx.
```  
  Owner:
    permissions:
    - '*'
    options:
      prefix: '&b[&6Owner&b] &b'
```
These are default examples how two groups can look like while using the permissions plugin LuckPerms.

https://imgur.com/a/h7SXgDl

**Important Information when using LuckPerms**

If you are using the permissions plugin LuckPerms please make sure all the group names are set to **lowercase** when adding the groups to the chat format! ALSO, make sure you do NOT add a displayname to the groups, or they will not work with the chat format. 
To see and remove the displayname do /lp editor, click the link, click the group, and remove the permission looking node displayname.`{name}` and that will remove it.

1. Now to create a new format group you just need to do is add this to the groups section to your config.

```
    Owner:
      Format: "&b[&6Owner&b] &b{player} &9>> &e{message}"
```

1. You need to first add the permissions group name in the file. `Owner:` Make sure you add four spaces then add the name. Make sure the name is exactly what's in the permissions file. **It is case-sensitive**!

2. Then you add `Format:` right under `Owner:`. Make sure you add six spaces before you add "Format:".

3. Then you create the format you want to use for the rank, you can add as much as you want to it, but be careful, it can make your chat look a mess.

4. Finally press save, then reload the config (/chatmanager reload) then you're done.

After all that the section should look like this.
```
Groups:
    Default: 
      Format: "&8[&7Default&8] &7{player} &9> &7{message}"
    VIP: 
      Format: "&8[&5VIP&8] &7{displayname} &9> &7{message}"
    Moderator: 
      Format: "&b[&6Moderator&b] &a[&b{world}&a] &b{player} &9> &e{message}"
    Owner:
      Format: "&b[&6Owner&b] &b{player} &9>> &e{message}"
```

You can go all out with the chat format, don't make it bland like the example, have fun with it and make it look something like this: https://imgur.com/a/KdWvhVg

This is how I have the format in that picture formatted.

```
  Groups:
    owner:
      Format: "{radius} {deluxetag_tag} {vault_prefix}#ff00ff{player}{vault_suffix} #ff00ff» {message}"
```

As you can see, if you put your mind to it possibilities are endless, with this example you can see all the placeholders added to it and the support for hex codes (1.16+).

## Placeholders
If you like to see a list of all the available placeholders you can use for the chat format please go [here](../placeholders.md).

If you wish to use PlaceholderAPI's placeholders, You can find them [here](https://wiki.placeholderapi.com/users/placeholder-list/#).