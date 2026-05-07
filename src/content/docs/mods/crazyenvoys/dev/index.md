---
title: Developer API
description: Get started with CrazyEnvoys API!

slug: mods/crazyenvoys/dev/index
---
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

```groovy
repositories {
    maven("https://repo.crazycrew.us/releases")
}
```

```groovy
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