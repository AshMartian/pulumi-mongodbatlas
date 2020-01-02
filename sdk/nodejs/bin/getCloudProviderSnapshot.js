"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..CloudProviderSnapshot` provides an Cloud Provider Snapshot entry datasource. Atlas Cloud Provider Snapshots provide localized backup storage using the native snapshot functionality of the cluster’s cloud service provider.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const testMongodbatlasCloudProviderSnapshot = new mongodbatlas.CloudProviderSnapshot("test", {
 *     clusterName: "MyClusterTest",
 *     description: "SomeDescription",
 *     groupId: "5d0f1f73cf09a29120e173cf",
 *     retentionInDays: 1,
 * });
 * const testCloudProviderSnapshot = pulumi.all([testMongodbatlasCloudProviderSnapshot.clusterName, testMongodbatlasCloudProviderSnapshot.groupId]).apply(([clusterName, groupId]) => mongodbatlas.getCloudProviderSnapshot({
 *     clusterName: clusterName,
 *     groupId: groupId,
 *     snapshotId: "5d1285acd5ec13b6c2d1726a",
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshot.html.markdown.
 */
function getCloudProviderSnapshot(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise = pulumi.runtime.invoke("mongodbatlas:index/getCloudProviderSnapshot:getCloudProviderSnapshot", {
        "clusterName": args.clusterName,
        "projectId": args.projectId,
        "snapshotId": args.snapshotId,
    }, opts);
    return pulumi.utils.liftProperties(promise, opts);
}
exports.getCloudProviderSnapshot = getCloudProviderSnapshot;
//# sourceMappingURL=getCloudProviderSnapshot.js.map