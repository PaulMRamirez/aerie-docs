# Deployment

There are a few different ways to deploy PlanDev:

- To get PlanDev running **quickly** on your computer, see the [fast track instructions](/introduction/#fast-track) for minimal setup.
- If you plan to deploy PlanDev in a shared **production environment**, read this entire page and then see the [production deployment guide](/deployment/production-deployment).
- If you are a **developer** and you want to run PlanDev locally & make changes to PlanDev core code, read this page and then head to the [developer guide](https://github.com/PlanDev/plandev/blob/develop/docs/DEVELOPER.md) in the repository for local setup instructions.

The rest of this document goes into more depth about the PlanDev system and how it should be deployed, regardless of environment.

## PlanDev Releases

PlanDev releases are published on the [Github Releases page](https://github.com/PlanDev/plandev/releases), and each release has a `Deployment.zip` artifact attached. This folder contains everything necessary to deploy a version of PlanDev - namely the  **`docker-compose.yml`** and **`.env`** files, detailed below. These files are provided *as a starting point* and should be modified to suit your needs.

## Environment Variables

Each PlanDev service is configured with environment variables, some of which are **required** to run. They are expected to be set in a `.env` file in the folder you're running PlanDev from. The version of this file provided in `Deployment.zip` is an empty template that must be filled in with service usernames and passwords of your choosing. See [this .env.template file](https://github.com/PlanDev/plandev-mission-model-template/blob/main/.env.template) for a completed example.

A description of allowed variables is found in the [Environment Variable Documentation](https://github.com/PlanDev/plandev/blob/develop/deployment/Environment.md) - it's recommended to read through these & determine which are relevant to your situation.

Of note, the `plandev-merlin`, `plandev_merlin_worker`, `plandev-scheduler`, and `plandev-scheduler-worker` containers can be provided additional JVM arguments - for example, allocated heap size - as environment variables. Desired JVM flags should be added to the `JAVA_OPTS` environment variable for the container being configured.

## Docker

PlanDev consists of multiple **services**, and uses [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) to manage and run them. The artifacts used to deploy PlanDev are a collection of Docker **images**, one per service, which we publish to the public [GitHub Packages](https://github.com/orgs/PlanDev/packages?ecosystem=container&q=plandev) repository. PlanDev images conform to the [OCI](https://opencontainers.org/) [Image Format](https://github.com/opencontainers/image-spec/blob/main/spec.md) and may be compatible with Docker alternatives, but only Docker is officially supported.

[Docker Compose](https://docs.docker.com/compose/) commands are used to build and run the PlanDev services **all together**, so in general you should only need to run  `docker compose up` & `docker compose down` (along with some various [command flags](https://docs.docker.com/reference/cli/docker/compose/)) to start and stop PlanDev.

### `docker-compose.yml`

Docker Compose uses a configuration file called **`docker-compose.yml`** to control all sorts of options for the PlanDev services. The compose file provided in `Deployment.zip` should work as-is, but modifying this file is one of your most useful tools for controlling deployment-specific PlanDev configuration options. Options in this file control:

- The source & version (tag) of the image used for each service (in the `image` field)
- The network ports used by each service (in `ports`)
- The directories used as mounted file volumes (in `volumes`)
- and other various environment variables passed to each service (in `environment`)

A full list of possible options can be found in the [Docker compose file reference](https://docs.docker.com/reference/compose-file/).

### PlanDev services & images

The following is a list of all of the required PlanDev services, their associated Docker images (to be run by Compose), and their default network ports. The `ui`, `gateway` and `hasura` services are all "public-facing", which means their ports must be exposed to the network when running in a shared/production environment.

| Image                                      | Description                                                     | Port  | Public |
| ------------------------------------------ | --------------------------------------------------------------- | ----- | ------ |
| [plandev-ui][ui]                             | The web-based client application for PlanDev.                     | 80    | ✅     |
| [plandev-gateway][gateway]                   | Gateway server used for file-upload and authentication.         | 9000  | ✅     |
| [plandev-hasura][hasura]                     | Hasura Docker image with bundled PlanDev-specific Hasura metadata | 8080  | ✅     |
| [plandev-merlin][merlin]                     | Service for planning and simulation                             | 27183 | ❌     |
| [plandev-merlin-worker][merlin-worker]       | Worker for executing simulations                                | 27187 | ❌     |
| [plandev-postgres][postgres]                 | Postgres Docker image with bundled PlanDev-specific SQL           | 5432  | ❌     |
| [plandev-scheduler][scheduler]               | Service for scheduling                                          | 27185 | ❌     |
| [plandev-scheduler-worker][scheduler-worker] | Worker for executing scheduling goals                           | 27189 | ❌     |
| [plandev-sequencing][sequencing]             | Service for sequence generation and management                  | 27184 | ❌     |


## System Requirements

### Software

| Name   | Version |
| ------ | ------- |
| Docker | 20.x    |

### Hardware

Note these numbers are lower bounds. You will need to scale PlanDev based on your mission needs.

| Hardware            | Details                                |
| ------------------- | -------------------------------------- |
| CPU                 | 2 Gigahertz (GHZ) or above             |
| RAM                 | 8 GB at minimum                        |
| Storage             | 15 GB                                  |
| Display resolution  | 2560-BY-1600, recommended              |
| Internet connection | High-Speed connection, at least 60MBPS |

### Supported Browsers

| Name    | Version |
| ------- | ------- |
| Chrome  | Latest  |
| Firefox | Latest  |

## Defect Reporting Procedure

Defect reports should be sent to: `plandev-support@googlegroups.com`. For chat-based support, please join us on the [NASA-AMMOS Slack](https://join.slack.com/t/nasa-ammos/shared_invite/zt-1mlgmk5c2-MgqVSyKzVRUWrXy87FNqPw), in the `#plandev-users` channel.


[gateway]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-gateway
[hasura]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-hasura
[merlin]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-merlin
[merlin-worker]: https://github.com/PlanDev/plandev/pkgs/container/plandev-merlin-worker
[postgres]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-postgres
[scheduler]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-scheduler
[scheduler-worker]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-scheduler-worker
[sequencing]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-sequencing
[ui]: https://github.com/orgs/NASA-AMMOS/packages/container/package/plandev-ui
