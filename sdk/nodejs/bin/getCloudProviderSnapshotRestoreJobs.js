"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..getCloudProviderSnapshotRestoreJobs` provides a Cloud Provider Snapshot Restore Jobs entry datasource. Gets all cloud provider snapshot restore jobs for the specified cluster.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * ## Example Usage
 *
 * First create a snapshot of the desired cluster. Then request that snapshot be restored in an automated fashion to the designated cluster and project.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const testCloudProviderSnapshot = new mongodbatlas.CloudProviderSnapshot("test", {
 *     clusterName: "MyCluster",
 *     description: "MyDescription",
 *     projectId: "5cf5a45a9ccf6400e60981b6",
 *     retentionInDays: 1,
 * });
 * const testCloudProviderSnapshotRestoreJob = new mongodbatlas.CloudProviderSnapshotRestoreJob("test", {
 *     clusterName: "MyCluster",
 *     deliveryType: {
 *         automated: true,
 *         target_cluster_name: "MyCluster",
 *         target_project_id: "5cf5a45a9ccf6400e60981b6",
 *     },
 *     projectId: "5cf5a45a9ccf6400e60981b6",
 *     snapshotId: testCloudProviderSnapshot.id,
 * });
 * const testCloudProviderSnapshotRestoreJobs = pulumi.all([testCloudProviderSnapshotRestoreJob.clusterName, testCloudProviderSnapshotRestoreJob.projectId]).apply(([clusterName, projectId]) => mongodbatlas.getCloudProviderSnapshotRestoreJobs({
 *     clusterName: clusterName,
 *     projectId: projectId,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshot_restore_jobs.html.markdown.
 */
function getCloudProviderSnapshotRestoreJobs(args, opts) {
    if (!opts) {
        opts = {};
    }
    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise = pulumi.runtime.invoke("mongodbatlas:index/getCloudProviderSnapshotRestoreJobs:getCloudProviderSnapshotRestoreJobs", {
        "clusterName": args.clusterName,
        "projectId": args.projectId,
    }, opts);
    return pulumi.utils.liftProperties(promise, opts);
}
exports.getCloudProviderSnapshotRestoreJobs = getCloudProviderSnapshotRestoreJobs;
//# sourceMappingURL=getCloudProviderSnapshotRestoreJobs.js.map