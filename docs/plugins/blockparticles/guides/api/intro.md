---
title: Developer API
description: Get started with the api

hide_title: false

sidebar_label: API Intro
---
### Groovy
<details>
 <summary>
   Gradle (Groovy)
 </summary>

```gradle
repositories {
    maven {
        url = "https://repo.crazycrew.us/releases"
    }
}
```

```gradle
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

```gradle
repositories {
    maven("https://repo.crazycrew.us/releases")
}
```

```gradle
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
