---
title: API Usage
description: Examples of how to use the api

hide_title: false

sidebar_label: API Usage
---
## Add virtual keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(uuid, "CrateName", KeyType.virtual_key, 5);
```

## Add physical keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addKeys(uuid, "CrateName", KeyType.physical_key, 5);
```

## Update or add how many times a player has opened a crate.
```java
UserManager userManager = CratesProvider.get().getUserManager():

userManager.addOpenedCrate(uuid, "CrateName");
```

## An example of the api in use in a plugin.
> https://github.com/Crazy-Crew/ExamplePlugin/tree/ver/1.21
> You can compile the plugin using gradle build