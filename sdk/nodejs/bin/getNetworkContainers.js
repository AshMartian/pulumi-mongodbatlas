"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..getNetworkContainers` describes all Network Peering Containers. The data source requires your Project ID.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_containers.html.markdown.
 */
function getNetworkContainers(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise = pulumi.runtime.invoke("mongodbatlas:index/getNetworkContainers:getNetworkContainers", {
        "projectId": args.projectId,
        "providerName": args.providerName,
    }, opts);
    return pulumi.utils.liftProperties(promise, opts);
}
exports.getNetworkContainers = getNetworkContainers;
//# sourceMappingURL=getNetworkContainers.js.map