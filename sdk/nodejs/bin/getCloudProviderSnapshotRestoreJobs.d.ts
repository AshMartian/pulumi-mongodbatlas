import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
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
export declare function getCloudProviderSnapshotRestoreJobs(args: GetCloudProviderSnapshotRestoreJobsArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProviderSnapshotRestoreJobsResult> & GetCloudProviderSnapshotRestoreJobsResult;
/**
 * A collection of arguments for invoking getCloudProviderSnapshotRestoreJobs.
 */
export interface GetCloudProviderSnapshotRestoreJobsArgs {
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
 * A collection of values returned by getCloudProviderSnapshotRestoreJobs.
 */
export interface GetCloudProviderSnapshotRestoreJobsResult {
    readonly clusterName: string;
    readonly projectId: string;
    /**
     * Includes cloudProviderSnapshotRestoreJob object for each item detailed in the results array section.
     */
    readonly results: outputs.GetCloudProviderSnapshotRestoreJobsResult[];
    readonly totalCount: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
