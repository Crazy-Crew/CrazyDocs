---
title: Developer API
description: Get started with the api
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
    compileOnly "com.badbones69.crazyvouchers:crazyvouchers-paper-api:3.5.4"
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
    compileOnly("com.badbones69.crazyvouchers", "crazyvouchers-paper-api", "3.5.4")
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
    <version>3.5.4</version>
    <scope>provided</scope>
</dependency>
```
</details>
