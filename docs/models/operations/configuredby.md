# ConfiguredBy

How we see the domain's configuration. - `CNAME`: Domain has a CNAME pointing to Vercel. - `A`: Domain's A record is resolving to Vercel. - `http`: Domain is resolving to Vercel but may be behind a Proxy. - `dns-01`: Domain is not resolving to Vercel but dns-01 challenge is enabled. - `null`: Domain is not resolving to Vercel.


## Values

| Name    | Value   |
| ------- | ------- |
| `Cname` | CNAME   |
| `A`     | A       |
| `Http`  | http    |
| `Dns01` | dns-01  |