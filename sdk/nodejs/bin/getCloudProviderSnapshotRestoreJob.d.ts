import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..CloudProviderSnapshotRestoreJob` provides a Cloud Provider Snapshot Restore Job entry datasource. Gets all cloud provider snapshot restore jobs for the specified cluster.
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
 * const testMongodbatlasCloudProviderSnapshotRestoreJob = new mongodbatlas.CloudProviderSnapshotRestoreJob("test", {
 *     clusterName: "MyCluster",
 *     deliveryType: {
 *         automated: true,
 *         target_cluster_name: "MyCluster",
 *         target_project_id: "5cf5a45a9ccf6400e60981b6",
 *     },
 *     projectId: "5cf5a45a9ccf6400e60981b6",
 *     snapshotId: testCloudProviderSnapshot.id,
 * });
 * const testCloudProviderSnapshotRestoreJob = pulumi.all([testMongodbatlasCloudProviderSnapshotRestoreJob.clusterName, testMongodbatlasCloudProviderSnapshotRestoreJob.id, testMongodbatlasCloudProviderSnapshotRestoreJob.projectId]).apply(([clusterName, id, projectId]) => mongodbatlas.getCloudProviderSnapshotRestoreJob({
 *     clusterName: clusterName,
 *     jobId: id,
 *     projectId: projectId,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshot_restore_job.html.markdown.
 */
export declare function getCloudProviderSnapshotRestoreJob(args: GetCloudProviderSnapshotRestoreJobArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProviderSnapshotRestoreJobResult> & GetCloudProviderSnapshotRestoreJobResult;
/**
 * A collection of arguments for invoking getCloudProviderSnapshotRestoreJob.
 */
export interface GetCloudProviderSnapshotRestoreJobArgs {
    /**
     * The name of the Atlas cluster for which you want to retrieve the restore job.
     */
    readonly clusterName: string;
    /**
     * The unique identifier of the restore job to retrieve.
     */
    readonly jobId: string;
    /**
     * The unique identifier of the project for the Atlas cluster.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getCloudProviderSnapshotRestoreJob.
 */
export interface GetCloudProviderSnapshotRestoreJobResult {
    /**
     * Indicates whether the restore job was canceled.
     */
    readonly cancelled: boolean;
    readonly clusterName: string;
    /**
     * UTC ISO 8601 formatted point in time when Atlas created the restore job.
     */
    readonly createdAt: string;
    /**
     * Type of restore job to create. Possible values are: automated and download.
     */
    readonly deliveryType: string;
    /**
     * One or more URLs for the compressed snapshot files for manual download. Only visible if deliveryType is download.
     */
    readonly deliveryUrls: string[];
    /**
     * Indicates whether the restore job expired.
     */
    readonly expired: boolean;
    /**
     * UTC ISO 8601 formatted point in time when the restore job expires.
     */
    readonly expiresAt: string;
    /**
     * UTC ISO 8601 formatted point in time when the restore job completed.
     */
    readonly finishedAt: string;
    readonly jobId: string;
    readonly projectId: string;
    /**
     * Unique identifier of the source snapshot ID of the restore job.
     */
    readonly snapshotId: string;
    /**
     * Name of the target Atlas cluster to which the restore job restores the snapshot. Only visible if deliveryType is automated.
     */
    readonly targetClusterName: string;
    readonly targetProjectId: string;
    /**
     * Timestamp in ISO 8601 date and time format in UTC when the snapshot associated to snapshotId was taken.
     */
    readonly timestamp: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
