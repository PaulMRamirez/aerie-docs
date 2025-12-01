# Advanced - Reverse Proxy

# Deploying with HTTPS / Behind a reverse proxy

The `./deployment/proxy` folder contains the following as a standard pattern for deploying PlanDev with a reverse proxy:
```
- nginx.conf # nginx (reverse proxy) configuration file that terminates TLS and proxies traffic to internal containers
- Dockerfile # runs an nginx instance as configured above
- docker-compose-proxy.yml # docker-compose that runs the above Docker container within the PlanDev stack, closing unneccesary ports
```

In this example, an [`nginx`](https://nginx.org) instance runs within the PlanDev container stack, acting as the single ingress point for all network traffic, which strips TLS and forwards HTTP traffic to internal containers.

## Generating a self-signed TLS certificate for testing

Running the following command will generate a self-signed certificate for testing TLS. It will prompt you for several fields which can all be left blank (i.e. just press enter).

```
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 365 --nodes
```

Move these `key.pem` and `cert.pem` files into the `./deployment/proxy` folder, so `nginx` can read them.

## Define PlanDev deployment host
When running a production deployment of PlanDev, you can use DNS records to point a domain to your deployment server's IP address.

To emulate DNS on a local machine, you can edit `/etc/hosts` (on unix-based machines). Adding the following line will redirect `localhost.jpl.nasa.gov` to `127.0.0.1`, which will allow us to use a fake domain name for a local PlanDev deployment. This can be any domain, but it's a best practice to use something that doesn't exist as a public site.

```
127.0.0.1 localhost.jpl.nasa.gov
```

## Run PlanDev instance with reverse proxy
Edit your PlanDev `./deployment/.env` file to define `PLANDEV_HOST=${whatever domain you put in your /etc/hosts or DNS}`.

Running the following command from the `./deployment` directory of the PlanDev repo will now deploy the regular PlanDev stack with `nginx` proxying all connections.
```
docker compose -f docker-compose.yml -f ./proxy/docker-compose-proxy.yml up -d --build
```

You can now visit `https://here-is-the-domain-you.set`, which will prompt you to trust a self-signed certificate, and then forward you to PlanDev as usual!

:::info Accepting self-signed certificates
You will need to accept self-signed certificates for PlanDev UI, Hasura, _and_ the Gateway.
Visit the following three URLs and follow the instructions to allow self-signed certs:
- `https://here-is-the-domain-you.set`
- `https://here-is-the-domain-you.set:8080/console`
- `https://here-is-the-domain-you.set:9000`

PlanDev will *not* function correctly if all three certificates are not accepted.

This manual process can be avoided if you are able to use a testing certificate for this domain that is signed by your authorities.
:::
