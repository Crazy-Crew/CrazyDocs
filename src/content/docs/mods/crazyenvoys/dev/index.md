---
title: Developer API
description: Get started with CrazyEnvoys API!

slug: mods/crazyenvoys/dev/index
---
:::caution
The newest published API is `com.badbones69.crazyenvoys:crazyenvoys-paper-api:1.8.2`, released in December 2023. No newer API has been published: the current build's `us.crazycrew.crazyenvoys:api:0.1.0` is not on the repository, so 1.8.2 may not match the latest plugin.
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
    compileOnly "com.badbones69.crazyenvoys:crazyenvoys-paper-api:1.8.2"
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
    compileOnly("com.badbones69.crazyenvoys", "crazyenvoys-paper-api", "1.8.2")
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
  <groupId>com.badbones69.crazyenvoys</groupId>
  <artifactId>crazyenvoys-paper-api</artifactId>
  <version>1.8.2</version>
  <scope>provided</scope>
 </dependency>
```
</details>