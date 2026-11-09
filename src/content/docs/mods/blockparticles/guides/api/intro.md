---
title: Developer API
description: Get started with the api
---
:::caution
The current source does not publish an API artifact. `1.13` is the latest version these docs reference, and it may not match the current plugin.
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
    compileOnly "com.badbones69.blockparticles:blockparticles-paper-api:1.13"
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
    compileOnly("com.badbones69.blockparticles:blockparticles-paper-api:1.13")
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
  <groupId>com.badbones69.blockparticles</groupId>
  <artifactId>blockparticles-paper-api</artifactId>
  <version>1.13</version>
  <scope>provided</scope>
 </dependency>
```
</details>
