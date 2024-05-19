---
title: API Usage
description: Examples of how to use the api

hide_title: false

sidebar_label: API Usage
---
## Add virtual keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(5, uuid, "CrateName", KeyType.virtual_key);
```

## Add physical keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(5, uuid, "CrateName", KeyType.physical_key);
```

## Update or add how many times a player has opened a crate.
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addOpenedCrate(uuid, "CrateName");
```

## An example of the api in use in a plugin.
> https://github.com/Crazy-Crew/ExamplePlugin/tree/ver/1.20.4
> You can compile the plugin using gradle assemble