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
    compileOnly "us.crazycrew.crazycrates:api:0.8"
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
    compileOnly("us.crazycrew.crazycrates:api:0.8")
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
  <version>0.8</version>
  <scope>provided</scope>
 </dependency>
```
</details>
