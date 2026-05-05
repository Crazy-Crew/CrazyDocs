---
title: Basic Usage
description: Simple examples of how to use CrazyCrates API.

slug: mods/crazycrates/dev/usage
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