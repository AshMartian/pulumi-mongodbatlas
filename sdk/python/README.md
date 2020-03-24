# UNOFFICIAL: Pulumi MongoDB Atlas

This repository is forked from boilerplate code for building a new Pulumi provider which wraps an existing
Terraform provider. The [provider](https://github.com/terraform-providers/terraform-provider-mongodbatlas) is official, but this pulumi implementation is not! This was created in a pinch and not well tested, but it does work.

### Upgrading the provider:

See Instructions on [Pulumi Terraform Bridge](https://github.com/pulumi/pulumi-terraform-bridge) and [Boilerplate Dependencies](https://github.com/pulumi/pulumi-tf-provider-boilerplate#add-dependencies)

- git tag `v0.X.X`
- `GO111MODULE=on go get https://github.com/terraform-providers/terraform-provider-mongodbatlas`
- Edit `resources.go` to map each new resource
- Enumerate any examples in `examples/examples_test.go`
- `make`
- `make publish_tgz`

# Installing

This package is available in many languages in the standard packaging formats, but only tested with Typescript.

## Pulumi resource

This is required to have the pulumi resource executable.

`pulumi plugin install resource --server https://github.com/blandman/pulumi-mongodbatlas/raw/master/plugin mongodbatlas 0.4.2`

### Node.js (Java/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install pulumi-mongodbatlas --save

or `yarn`:

    $ yarn add pulumi-mongodbatlas

### Python
(Untested, Not uploaded to pip)
Install from the [sdk/python/bin](./sdk/python/bin/setup.py) directory

### Go
(untested)
To use from Go, use `go get` to grab the latest version of the library

    $ go get github.com/blandman/pulumi-mongodbatlas/raw/master/sdk/go/...

# Usage

## Store Mongo Atlas Keys as Pulumi secrets
`pulumi config set --secret atlasPublicKey XYZ`  
`pulumi config set --secret atlasPrivateKey abc123`


## Import pulumi and config

```ts
import * as pulumi from '@pulumi/pulumi';
import * as atlas from "pulumi-mongodbatlas";

const config = new pulumi.Config();
```

## Create the atlas provider, pass secret keys from Atlas Org
```ts
export const atlasProvider = new atlas.Provider(`atlas-provider`, {
    privateKey: config.requireSecret("atlasPrivateKey"),
    publicKey: config.requireSecret("atlasPublicKey")
});
```

## Pass provider into all exported resources
```ts
export const atlasProject = new atlas.Project(`test-${pulumi.getProject()}-${pulumi.getStack()}`, {
    name: `test-${pulumi.getProject()}-${pulumi.getStack()}`,
    orgId: config.require("atlasOrgId")
}, {provider: atlasProvider});
```

`pulumi up`

# Reference

For detailed reference documentation, please visit [the Official Provider API docs][1].
For how this provider was created, see [the pulumi terraform provider boilerplate][2].


[1]: https://github.com/terraform-providers/terraform-provider-mongodbatlas
[2]: https://github.com/pulumi/pulumi-tf-provider-boilerplate
