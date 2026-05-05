---
title: Developer API
description: Get started with CrazyCrates API!

slug: mods/crazycrates/dev/index
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
    compileOnly "us.crazycrew.crazycrates:api:0.9"
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
    compileOnly("us.crazycrew.crazycrates:api:0.9")
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
  <groupId>us.crazycrew.crazycrates</groupId>
  <artifactId>api</artifactId>
  <version>0.9</version>
  <scope>provided</scope>
 </dependency>
```
</details>