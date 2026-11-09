---
title: Basic Usage
description: Simple examples of how to use CrazyCrates API.

slug: mods/crazycrates/dev/usage
---
:::caution
`CratesProvider.get()` is deprecated for removal in API `1.0.0`, which ships inside CrazyCrates `5.2.0`, in favour of `CratesProvider.api()`. The latest API published to `repo.crazycrew.us` is `0.9.0`, so the examples below compile against `0.9.0` and use `get()`, which still works on CrazyCrates `5.2.0`.
:::

## Add virtual keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager();

userManager.addKeys(uuid, "CrateName", KeyType.virtual_key, 5);
```

## Add physical keys to a player
```java
UserManager userManager = CratesProvider.get().getUserManager();

userManager.addKeys(uuid, "CrateName", KeyType.physical_key, 5);
```

## Update or add how many times a player has opened a crate.
```java
UserManager userManager = CratesProvider.get().getUserManager();

userManager.addOpenedCrate(uuid, "CrateName");
```