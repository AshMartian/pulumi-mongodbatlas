import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..CloudProviderSnapshot` provides a resource to take a cloud provider snapshot on demand.
 * On-demand snapshots happen immediately, unlike scheduled snapshots which occur at regular intervals. If there is already an on-demand snapshot with a status of queued or inProgress, you must wait until Atlas has completed the on-demand snapshot before taking another.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/cloud_provider_snapshot.html.markdown.
 */
export declare class CloudProviderSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing CloudProviderSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudProviderSnapshotState, opts?: pulumi.CustomResourceOptions): CloudProviderSnapshot;
    /**
     * Returns true if the given object is an instance of CloudProviderSnapshot.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CloudProviderSnapshot;
    /**
     * The name of the Atlas cluster that contains the snapshots you want to retrieve.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas took the snapshot.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Description of the on-demand snapshot.
     */
    readonly description: pulumi.Output<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas will delete the snapshot.
     */
    readonly expiresAt: pulumi.Output<string>;
    /**
     * Unique ID of the AWS KMS Customer Master Key used to encrypt the snapshot. Only visible for clusters using Encryption at Rest via Customer KMS.
     */
    readonly masterKeyUuid: pulumi.Output<string>;
    /**
     * Version of the MongoDB server.
     */
    readonly mongodVersion: pulumi.Output<string>;
    /**
     * The unique identifier of the project for the Atlas cluster.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * The number of days that Atlas should retain the on-demand snapshot. Must be at least 1.
     */
    readonly retentionInDays: pulumi.Output<number>;
    /**
     * Unique identifier of the snapshot.
     */
    readonly snapshotId: pulumi.Output<string>;
    /**
     * Specified the type of snapshot. Valid values are onDemand and scheduled.
     */
    readonly snapshotType: pulumi.Output<string>;
    /**
     * Current status of the snapshot. One of the following values will be returned: queued, inProgress, completed, failed.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Specifies the size of the snapshot in bytes.
     */
    readonly storageSizeBytes: pulumi.Output<number>;
    /**
     * Specifies the type of cluster: replicaSet or shardedCluster.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a CloudProviderSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudProviderSnapshotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CloudProviderSnapshot resources.
 */
export interface CloudProviderSnapshotState {
    /**
     * The name of the Atlas cluster that contains the snapshots you want to retrieve.
     */
    readonly clusterName?: pulumi.Input<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas took the snapshot.
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * Description of the on-demand snapshot.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas will delete the snapshot.
     */
    readonly expiresAt?: pulumi.Input<string>;
    /**
     * Unique ID of the AWS KMS Customer Master Key used to encrypt the snapshot. Only visible for clusters using Encryption at Rest via Customer KMS.
     */
    readonly masterKeyUuid?: pulumi.Input<string>;
    /**
     * Version of the MongoDB server.
     */
    readonly mongodVersion?: pulumi.Input<string>;
    /**
     * The unique identifier of the project for the Atlas cluster.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * The number of days that Atlas should retain the on-demand snapshot. Must be at least 1.
     */
    readonly retentionInDays?: pulumi.Input<number>;
    /**
     * Unique identifier of the snapshot.
     */
    readonly snapshotId?: pulumi.Input<string>;
    /**
     * Specified the type of snapshot. Valid values are onDemand and scheduled.
     */
    readonly snapshotType?: pulumi.Input<string>;
    /**
     * Current status of the snapshot. One of the following values will be returned: queued, inProgress, completed, failed.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * Specifies the size of the snapshot in bytes.
     */
    readonly storageSizeBytes?: pulumi.Input<number>;
    /**
     * Specifies the type of cluster: replicaSet or shardedCluster.
     */
    readonly type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CloudProviderSnapshot resource.
 */
export interface CloudProviderSnapshotArgs {
    /**
     * The name of the Atlas cluster that contains the snapshots you want to retrieve.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * Description of the on-demand snapshot.
     */
    readonly description: pulumi.Input<string>;
    /**
     * The unique identifier of the project for the Atlas cluster.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * The number of days that Atlas should retain the on-demand snapshot. Must be at least 1.
     */
    readonly retentionInDays: pulumi.Input<number>;
}
