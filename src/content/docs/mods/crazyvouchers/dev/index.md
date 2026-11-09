---
title: Developer API
description: Get started with CrazyVouchers API!

slug: mods/crazyvouchers/dev/index
---

:::caution
No API artifact is published for the current version of CrazyVouchers (5.2.x). The last published artifact is `com.badbones69.crazyvouchers:crazyvouchers-paper-api:3.6.4`, which does not match the current plugin. Until a new API ships, compile against the plugin jar to use the [events](/mods/crazyvouchers/dev/usage/).
:::

### Groovy
<details>
 <summary>
   Gradle (Groovy)
 </summary>

```groovy
repositories {
    maven {
        url = "https://repo.crazycrew.us/releases"
    }
}
```

```groovy
dependencies {
    compileOnly "com.badbones69.crazyvouchers:crazyvouchers-paper-api:3.6.4"
}
```
</details>

### Kotlin
<details>
 <summary>
   Gradle (Kotlin)
 </summary>

```kotlin
repositories {
    maven("https://repo.crazycrew.us/releases")
}
```

```kotlin
dependencies {
    compileOnly("com.badbones69.crazyvouchers:crazyvouchers-paper-api:3.6.4")
}
```
</details>

### Maven
<details>
 <summary>
   Maven
 </summary>

```xml
<repository>
    <id>crazycrew-releases</id>
    <url>https://repo.crazycrew.us/releases</url>
</repository>
```

```xml
<dependency>
    <groupId>com.badbones69.crazyvouchers</groupId>
    <artifactId>crazyvouchers-paper-api</artifactId>
    <version>3.6.4</version>
    <scope>provided</scope>
</dependency>
```
</details>