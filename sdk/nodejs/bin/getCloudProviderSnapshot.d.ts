import * as pulumi from "@pulumi/pulumi";
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
export declare function getCloudProviderSnapshot(args: GetCloudProviderSnapshotArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudProviderSnapshotResult> & GetCloudProviderSnapshotResult;
/**
 * A collection of arguments for invoking getCloudProviderSnapshot.
 */
export interface GetCloudProviderSnapshotArgs {
    /**
     * The name of the Atlas cluster that contains the snapshot you want to retrieve.
     */
    readonly clusterName: string;
    readonly projectId: string;
    /**
     * The unique identifier of the snapshot you want to retrieve.
     */
    readonly snapshotId: string;
}
/**
 * A collection of values returned by getCloudProviderSnapshot.
 */
export interface GetCloudProviderSnapshotResult {
    readonly clusterName: string;
    /**
     * UTC ISO 8601 formatted point in time when Atlas took the snapshot.
     */
    readonly createdAt: string;
    /**
     * UDescription of the snapshot. Only present for on-demand snapshots.
     */
    readonly description: string;
    /**
     * UTC ISO 8601 formatted point in time when Atlas will delete the snapshot.
     */
    readonly expiresAt: string;
    /**
     * Unique ID of the AWS KMS Customer Master Key used to encrypt the snapshot. Only visible for clusters using Encryption at Rest via Customer KMS.
     */
    readonly masterKeyUuid: string;
    /**
     * Version of the MongoDB server.
     */
    readonly mongodVersion: string;
    readonly projectId: string;
    readonly snapshotId: string;
    /**
     * Specified the type of snapshot. Valid values are onDemand and scheduled.
     */
    readonly snapshotType: string;
    /**
     * Current status of the snapshot. One of the following values: queued, inProgress, completed, failed.
     */
    readonly status: string;
    /**
     * Specifies the size of the snapshot in bytes.
     */
    readonly storageSizeBytes: number;
    /**
     * Specifies the type of cluster: replicaSet or shardedCluster.
     */
    readonly type: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}