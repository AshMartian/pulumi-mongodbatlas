import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..CloudProviderSnapshotRestoreJob` provides a resource to create a new restore job from a cloud provider snapshot of a specified cluster. The restore job can be one of two types:
 * * **automated:** Atlas automatically restores the snapshot with snapshotId to the Atlas cluster with name targetClusterName in the Atlas project with targetGroupId.
 *
 * * **download:** Atlas provides a URL to download a .tar.gz of the snapshot with snapshotId. The contents of the archive contain the data files for your Atlas cluster.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/cloud_provider_snapshot_restore_job.html.markdown.
 */
export declare class CloudProviderSnapshotRestoreJob extends pulumi.CustomResource {
    /**
     * Get an existing CloudProviderSnapshotRestoreJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudProviderSnapshotRestoreJobState, opts?: pulumi.CustomResourceOptions): CloudProviderSnapshotRestoreJob;
    /**
     * Returns true if the given object is an instance of CloudProviderSnapshotRestoreJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CloudProviderSnapshotRestoreJob;
    /**
     * Indicates whether the restore job was canceled.
     */
    readonly cancelled: pulumi.Output<boolean>;
    /**
     * The name of the Atlas cluster whose snapshot you want to restore.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas created the restore job.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * Type of restore job to create. Possible values are: **download** or **automated**, only one must be set it in ``true``.
     */
    readonly deliveryType: pulumi.Output<outputs.CloudProviderSnapshotRestoreJobDeliveryType>;
    /**
     * One or more URLs for the compressed snapshot files for manual download. Only visible if deliveryType is download.
     */
    readonly deliveryUrls: pulumi.Output<string[]>;
    /**
     * Indicates whether the restore job expired.
     */
    readonly expired: pulumi.Output<boolean>;
    /**
     * UTC ISO 8601 formatted point in time when the restore job expires.
     */
    readonly expiresAt: pulumi.Output<string>;
    /**
     * UTC ISO 8601 formatted point in time when the restore job completed.
     */
    readonly finishedAt: pulumi.Output<string>;
    /**
     * The unique identifier of the project for the Atlas cluster whose snapshot you want to restore.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Unique identifier of the snapshot to restore.
     */
    readonly snapshotId: pulumi.Output<string>;
    /**
     * The unique identifier of the restore job.
     */
    readonly snapshotRestoreJobId: pulumi.Output<string>;
    /**
     * Timestamp in ISO 8601 date and time format in UTC when the snapshot associated to snapshotId was taken.
     */
    readonly timestamp: pulumi.Output<string>;
    /**
     * Create a CloudProviderSnapshotRestoreJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudProviderSnapshotRestoreJobArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CloudProviderSnapshotRestoreJob resources.
 */
export interface CloudProviderSnapshotRestoreJobState {
    /**
     * Indicates whether the restore job was canceled.
     */
    readonly cancelled?: pulumi.Input<boolean>;
    /**
     * The name of the Atlas cluster whose snapshot you want to restore.
     */
    readonly clusterName?: pulumi.Input<string>;
    /**
     * UTC ISO 8601 formatted point in time when Atlas created the restore job.
     */
    readonly createdAt?: pulumi.Input<string>;
    /**
     * Type of restore job to create. Possible values are: **download** or **automated**, only one must be set it in ``true``.
     */
    readonly deliveryType?: pulumi.Input<inputs.CloudProviderSnapshotRestoreJobDeliveryType>;
    /**
     * One or more URLs for the compressed snapshot files for manual download. Only visible if deliveryType is download.
     */
    readonly deliveryUrls?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether the restore job expired.
     */
    readonly expired?: pulumi.Input<boolean>;
    /**
     * UTC ISO 8601 formatted point in time when the restore job expires.
     */
    readonly expiresAt?: pulumi.Input<string>;
    /**
     * UTC ISO 8601 formatted point in time when the restore job completed.
     */
    readonly finishedAt?: pulumi.Input<string>;
    /**
     * The unique identifier of the project for the Atlas cluster whose snapshot you want to restore.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * Unique identifier of the snapshot to restore.
     */
    readonly snapshotId?: pulumi.Input<string>;
    /**
     * The unique identifier of the restore job.
     */
    readonly snapshotRestoreJobId?: pulumi.Input<string>;
    /**
     * Timestamp in ISO 8601 date and time format in UTC when the snapshot associated to snapshotId was taken.
     */
    readonly timestamp?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CloudProviderSnapshotRestoreJob resource.
 */
export interface CloudProviderSnapshotRestoreJobArgs {
    /**
     * The name of the Atlas cluster whose snapshot you want to restore.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * Type of restore job to create. Possible values are: **download** or **automated**, only one must be set it in ``true``.
     */
    readonly deliveryType: pulumi.Input<inputs.CloudProviderSnapshotRestoreJobDeliveryType>;
    /**
     * The unique identifier of the project for the Atlas cluster whose snapshot you want to restore.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * Unique identifier of the snapshot to restore.
     */
    readonly snapshotId: pulumi.Input<string>;
}