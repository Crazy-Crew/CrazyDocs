---
title: Permissions
description: A list of commands with updated permissions
---
The base command is `/blockparticle`. Aliases: `/blockparticles`, `/bp`, `/bparticle`, `/bparticles`.

Every sub-command uses the same permission. The console can always run them; some are player only.

| Command                                         | Permission         | Description                                                                                       | Default |
|-------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------|---------|
| `/bp help`                                      | `bparticles.admin` | Lists the BlockParticles commands.                                                                | op      |
| `/bp list` (alias `l`)                          | `bparticles.admin` | Lists all particle locations. Player only.                                                        | op      |
| `/bp add <id> <type>` (alias `a`)               | `bparticles.admin` | Creates a new particle location on the block you are looking at (within 5 blocks). Player only.   | op      |
| `/bp set <id>` (alias `s`)                      | `bparticles.admin` | Opens a GUI to choose the particle for a location. Player only.                                   | op      |
| `/bp set <id> <type>`                           | `bparticles.admin` | Sets the particle for a location directly. Player only.                                           | op      |
| `/bp delete <id>` (aliases `del`, `d`, `remove`) | `bparticles.admin` | Deletes a particle location.                                                                      | op      |
| `/bp types`                                     | `bparticles.admin` | Shows all particle and fountain types that can be used.                                           | op      |
| `/bp show`                                      | `bparticles.admin` | Shows how many fountain items exist and how many particles/fountains are running.                 | op      |
| `/bp reload` (alias `r`)                        | `bparticles.admin` | Reloads `config.yml`, `data.yml` and restarts all particles.                                      | op      |
