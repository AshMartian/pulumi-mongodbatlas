"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..NetworkContainer` provides a Network Peering Container resource. The resource lets you create, edit and delete network peering containers. The resource requires your Project ID.
 *
 * > **IMPORTANT:** This resource creates one Network Peering container into which Atlas can deploy Network Peering connections. An Atlas project can have a maximum of one container for each cloud provider. You must have either the Project Owner or Organization Owner role to successfully call this endpoint.
 *
 * The following table outlines the maximum number of Network Peering containers per cloud provider:
 * * Cloud Provider:  GCP - Container Limit: One container per project.
 * * Cloud Provider:  AWS and Azure - Container Limit: One container per cloud provider region.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 *
 * ## Example Usage
 *
 * ### Example with AWS.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.NetworkContainer("test", {
 *     atlasCidrBlock: "10.8.0.0/21",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerName: "AWS",
 *     regionName: "US_EAST_1",
 * });
 * ```
 *
 * ### Example with GCP
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.NetworkContainer("test", {
 *     atlasCidrBlock: "10.8.0.0/21",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerName: "GCP",
 * });
 * ```
 *
 * ### Example with Azure
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.NetworkContainer("test", {
 *     atlasCidrBlock: "10.8.0.0/21",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerName: "AZURE",
 *     region: "US_EAST_2",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/network_container.html.markdown.
 */
class NetworkContainer extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["atlasCidrBlock"] = state ? state.atlasCidrBlock : undefined;
            inputs["azureSubscriptionId"] = state ? state.azureSubscriptionId : undefined;
            inputs["containerId"] = state ? state.containerId : undefined;
            inputs["gcpProjectId"] = state ? state.gcpProjectId : undefined;
            inputs["networkName"] = state ? state.networkName : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["providerName"] = state ? state.providerName : undefined;
            inputs["provisioned"] = state ? state.provisioned : undefined;
            inputs["region"] = state ? state.region : undefined;
            inputs["regionName"] = state ? state.regionName : undefined;
            inputs["vnetName"] = state ? state.vnetName : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.atlasCidrBlock === undefined) {
                throw new Error("Missing required property 'atlasCidrBlock'");
            }
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            inputs["atlasCidrBlock"] = args ? args.atlasCidrBlock : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["providerName"] = args ? args.providerName : undefined;
            inputs["region"] = args ? args.region : undefined;
            inputs["regionName"] = args ? args.regionName : undefined;
            inputs["azureSubscriptionId"] = undefined /*out*/;
            inputs["containerId"] = undefined /*out*/;
            inputs["gcpProjectId"] = undefined /*out*/;
            inputs["networkName"] = undefined /*out*/;
            inputs["provisioned"] = undefined /*out*/;
            inputs["vnetName"] = undefined /*out*/;
            inputs["vpcId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NetworkContainer.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing NetworkContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new NetworkContainer(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of NetworkContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkContainer.__pulumiType;
    }
}
exports.NetworkContainer = NetworkContainer;
/** @internal */
NetworkContainer.__pulumiType = 'mongodbatlas:index/networkContainer:NetworkContainer';
//# sourceMappingURL=networkContainer.js.map