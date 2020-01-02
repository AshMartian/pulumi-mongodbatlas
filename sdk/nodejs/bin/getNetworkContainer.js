"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..NetworkContainer` describes a Network Peering Container. The resource requires your Project ID and container ID.
 *
 * > **IMPORTANT:** This resource creates one Network Peering container into which Atlas can deploy Network Peering connections. An Atlas project can have a maximum of one container for each cloud provider. You must have either the Project Owner or Organization Owner role to successfully call this endpoint.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_container.html.markdown.
 */
function getNetworkContainer(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise = pulumi.runtime.invoke("mongodbatlas:index/getNetworkContainer:getNetworkContainer", {
        "containerId": args.containerId,
        "projectId": args.projectId,
    }, opts);
    return pulumi.utils.liftProperties(promise, opts);
}
exports.getNetworkContainer = getNetworkContainer;
//# sourceMappingURL=getNetworkContainer.js.map