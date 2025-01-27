// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * `mongodbatlas..CloudProviderSnapshotRestoreJobs` provides a Cloud Provider Snapshot Restore Jobs entry datasource. Gets all cloud provider snapshot restore jobs for the specified cluster.
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
 * const testCloudProviderSnapshotRestoreJobs = pulumi.all([testCloudProviderSnapshotRestoreJob.clusterName, testCloudProviderSnapshotRestoreJob.projectId]).apply(([clusterName, projectId]) => mongodbatlas.CloudProviderSnapshotRestoreJobs({
 *     clusterName: clusterName,
 *     projectId: projectId,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshot_restore_jobs.html.markdown.
 */
export function CloudProviderSnapshotRestoreJobs(args: CloudProviderSnapshotRestoreJobsArgs, opts?: pulumi.InvokeOptions): Promise<CloudProviderSnapshotRestoreJobsResult> & CloudProviderSnapshotRestoreJobsResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<CloudProviderSnapshotRestoreJobsResult> = pulumi.runtime.invoke("mongodbatlas:index/cloudProviderSnapshotRestoreJobs:CloudProviderSnapshotRestoreJobs", {
        "clusterName": args.clusterName,
        "projectId": args.projectId,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking CloudProviderSnapshotRestoreJobs.
 */
export interface CloudProviderSnapshotRestoreJobsArgs {
    /**
     * The name of the Atlas cluster for which you want to retrieve restore jobs.
     */
    readonly clusterName: string;
    /**
     * The unique identifier of the project for the Atlas cluster.
     */
    readonly projectId: string;
}

/**
 * A collection of values returned by CloudProviderSnapshotRestoreJobs.
 */
export interface CloudProviderSnapshotRestoreJobsResult {
    readonly clusterName: string;
    readonly projectId: string;
    /**
     * Includes cloudProviderSnapshotRestoreJob object for each item detailed in the results array section.
     */
    readonly results: outputs.CloudProviderSnapshotRestoreJobsResult[];
    readonly totalCount: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
