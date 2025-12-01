# Introduction

PlanDev is an open source, extensible software system for planning, scheduling, and commanding space missions. Developed and maintained by NASA's [Advanced Multi-Mission Operation System (AMMOS)](https://ammos.nasa.gov/), it provides modeling and simulation capabilities that can be used for mission planning and analysis during project formulation all the way through operations, where it can be used to manage and validate spacecraft activity plans. PlanDev is actively being used on flagship missions like [Europa Clipper](https://europa.nasa.gov/), but is equally suitable for smaller missions and constellations.

Some of the main features of PlanDev include:

- A library to write mission models in the Java programming language
- A highly performant discrete-event simulator
- An embedded domain specific language (EDSL) for defining and executing goal-based scheduling rules
- An EDSL for defining and executing activity and resource constraints
- An EDSL for defining and executing activity command expansions
- An EDSL for defining sequences, and a fully-featured browser-based sequence editor
- A GraphQL API so you can easily build tools on top of PlanDev
- A web-based [client application](https://github.com/PlanDev/plandev-ui)

As a multi-tenant system, PlanDev allows multiple distributed users to [collaborate](https://nasa-ammos.github.io/plandev-docs/planning/collaboration/introduction/) in real-time on a single plan or concurrently work on multiple plans for multiple missions. Additionally, PlanDev's [service based architecture](https://plandev.github.io/plandev-docs/overview/software-design-document/#plandev-system-design) allows for efficient system deployment and scalability on the cloud.

## Fast Track ⏱️ {#fast-track}

Understand PlanDev in **5 minutes** by trying it out!

1. Before starting you first need to install [Docker](https://www.docker.com/get-started/) on your local machine. The PlanDev system is essentially a collection of [OCI](https://opencontainers.org/) [images](https://github.com/orgs/PlanDev/packages?ecosystem=container&q=plandev).

1. If you’re running macOS, Linux, or another Unix-like OS you can use following two commands in your terminal to download the [Docker Compose](https://docs.docker.com/compose/) file and `.env` file:

   ```sh
   curl https://raw.githubusercontent.com/PlanDev/plandev-mission-model-template/main/docker-compose.yml --output docker-compose.yml
   curl https://raw.githubusercontent.com/PlanDev/plandev-mission-model-template/refs/heads/main/.env.template --output .env
   ```

   If you're running a different OS and do not have [curl](https://curl.se/) available you can [download the docker-compose.yml here](https://raw.githubusercontent.com/PlanDev/plandev-mission-model-template/main/docker-compose.yml) and [the .env file here](https://raw.githubusercontent.com/PlanDev/plandev-mission-model-template/refs/heads/main/.env.template) (rename to `.env`).

   Note that this compose file starts the [latest](https://github.com/PlanDev/plandev/releases/latest) version of PlanDev. The PlanDev version can be specified by changing the `DOCKER_TAG` variable in the `.env` file to any valid PlanDev release.

1. To start the PlanDev services you can use the following command in the same directory as the `docker-compose.yml` file from the previous step:

   ```sh
   docker compose up
   ```

1. Visit [http://localhost/](http://localhost/) to view the [PlanDev UI](https://github.com/PlanDev/plandev-ui).

   Note that the fast track deployment is not configured to connect to an authentication and authorization provider, therefore any credentials are accepted.

1. Head over to the planning documentation to learn how to [upload a mission model](../planning/upload-mission-model).

## Cleanup

PlanDev is an actively developed application suite with interdepenencies between the server, the web ui, and the database schema. New capabilities may require ensuring that all parts of the application are on the same version. Breaking changes are stated in the release notes. If the above fast track instructions worked previously, but are now seeing an inconsistent schema consult the [developer docs](https://github.com/PlanDev/plandev/blob/develop/docs/DEVELOPER.md) for instructions on clearing container images. For long running hosts see [Production Deployment](https://nasa-ammos.github.io/plandev-docs/deployment/production-deployment/) for an overview of the data migration process.
