import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..Cluster` provides a Cluster resource. The resource lets you create, edit and delete clusters. The resource requires your Project ID.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
 *
 * > **IMPORTANT:**
 * <br> &#8226; Free tier cluster creation (M0) is not supported via API or by this Provider.
 * <br> &#8226; Shared tier clusters (M2, M5) cannot be upgraded to higher tiers via API or by this Provider.
 * <br> &#8226; Changes to cluster configurations can affect costs. Before making changes, please see [Billing](https://docs.atlas.mongodb.com/billing/).
 * <br> &#8226; If your Atlas project contains a custom role that uses actions introduced in a specific MongoDB version, you cannot create a cluster with a MongoDB version less than that version unless you delete the custom role.
 *
 * ## Example Usage
 *
 * ### Example AWS cluster
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const clusterTest = new mongodbatlas.Cluster("cluster-test", {
 *     autoScalingDiskGbEnabled: true,
 *     diskSizeGb: 100,
 *     mongoDbMajorVersion: "4.0",
 *     numShards: 1,
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerBackupEnabled: true,
 *     providerDiskIops: 300,
 *     providerEncryptEbsVolume: true,
 *     providerInstanceSizeName: "M40",
 *     //Provider Settings "block"
 *     providerName: "AWS",
 *     providerRegionName: "US_EAST_1",
 *     providerVolumeType: "STANDARD",
 *     replicationFactor: 3,
 * });
 * ```
 *
 * ### Example Azure cluster.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.Cluster("test", {
 *     autoScalingDiskGbEnabled: true,
 *     backupEnabled: true,
 *     mongoDbMajorVersion: "4.0",
 *     numShards: 1,
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerDiskTypeName: "P6",
 *     providerInstanceSizeName: "M30",
 *     //Provider Settings "block"
 *     providerName: "AZURE",
 *     providerRegionName: "US_EAST_2",
 *     replicationFactor: 3,
 * });
 * ```
 *
 * ### Example GCP cluster
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.Cluster("test", {
 *     autoScalingDiskGbEnabled: true,
 *     backupEnabled: true,
 *     diskSizeGb: 40,
 *     mongoDbMajorVersion: "4.0",
 *     numShards: 1,
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerInstanceSizeName: "M30",
 *     //Provider Settings "block"
 *     providerName: "GCP",
 *     providerRegionName: "US_EAST_4",
 *     replicationFactor: 3,
 * });
 * ```
 *
 * ### Example Multi Region cluster
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const clusterTest = new mongodbatlas.Cluster("cluster-test", {
 *     clusterType: "REPLICASET",
 *     diskSizeGb: 100,
 *     numShards: 1,
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerBackupEnabled: true,
 *     providerDiskIops: 300,
 *     providerInstanceSizeName: "M10",
 *     //Provider Settings "block"
 *     providerName: "AWS",
 *     providerVolumeType: "STANDARD",
 *     replicationSpecs: [{
 *         numShards: 1,
 *         regionsConfigs: [
 *             {
 *                 electableNodes: 3,
 *                 priority: 7,
 *                 readOnlyNodes: 0,
 *                 regionName: "US_EAST_1",
 *             },
 *             {
 *                 electableNodes: 2,
 *                 priority: 6,
 *                 readOnlyNodes: 0,
 *                 regionName: "US_EAST_2",
 *             },
 *             {
 *                 electableNodes: 2,
 *                 priority: 5,
 *                 readOnlyNodes: 2,
 *                 regionName: "US_WEST_1",
 *             },
 *         ],
 *     }],
 * });
 * ```
 *
 * ### Example Global cluster
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const clusterTest = new mongodbatlas.Cluster("cluster-test", {
 *     clusterType: "GEOSHARDED",
 *     diskSizeGb: 80,
 *     numShards: 1,
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerBackupEnabled: true,
 *     providerDiskIops: 240,
 *     providerInstanceSizeName: "M30",
 *     //Provider Settings "block"
 *     providerName: "AWS",
 *     providerVolumeType: "STANDARD",
 *     replicationSpecs: [
 *         {
 *             numShards: 2,
 *             regionsConfigs: [{
 *                 electableNodes: 3,
 *                 priority: 7,
 *                 readOnlyNodes: 0,
 *                 regionName: "US_EAST_1",
 *             }],
 *             zoneName: "Zone 1",
 *         },
 *         {
 *             numShards: 2,
 *             regionsConfigs: [{
 *                 electableNodes: 3,
 *                 priority: 7,
 *                 readOnlyNodes: 0,
 *                 regionName: "EU_CENTRAL_1",
 *             }],
 *             zoneName: "Zone 2",
 *         },
 *     ],
 * });
 * ```
 * ### Example AWS Shared Tier cluster
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const clusterTest = new mongodbatlas.Cluster("cluster-test", {
 *     autoScalingDiskGbEnabled: false,
 *     backingProviderName: "AWS",
 *     diskSizeGb: 2,
 *     //These must be the following values
 *     mongoDbMajorVersion: "4.2",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerInstanceSizeName: "M2",
 *     //Provider Settings "block"
 *     providerName: "TENANT",
 *     providerRegionName: "US_EAST_1",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/cluster.html.markdown.
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    readonly advancedConfiguration: pulumi.Output<outputs.ClusterAdvancedConfiguration>;
    /**
     * Specifies whether disk auto-scaling is enabled. The default is true.
     * - Set to `true` to enable disk auto-scaling.
     * - Set to `false` to disable disk auto-scaling.
     */
    readonly autoScalingDiskGbEnabled: pulumi.Output<boolean>;
    /**
     * Cloud service provider on which the server for a multi-tenant cluster is provisioned.
     */
    readonly backingProviderName: pulumi.Output<string>;
    /**
     * Set to true to enable Atlas continuous backups for the cluster.
     */
    readonly backupEnabled: pulumi.Output<boolean | undefined>;
    /**
     * Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
     */
    readonly biConnector: pulumi.Output<outputs.ClusterBiConnector>;
    /**
     * The cluster ID.
     */
    readonly clusterId: pulumi.Output<string>;
    /**
     * Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
     */
    readonly clusterType: pulumi.Output<string>;
    /**
     * The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
     */
    readonly diskSizeGb: pulumi.Output<number>;
    /**
     * Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
     */
    readonly encryptionAtRestProvider: pulumi.Output<string>;
    readonly labels: pulumi.Output<outputs.ClusterLabel[]>;
    /**
     * Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
     */
    readonly mongoDbMajorVersion: pulumi.Output<string>;
    /**
     * Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
     */
    readonly mongoDbVersion: pulumi.Output<string>;
    /**
     * Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
     */
    readonly mongoUri: pulumi.Output<string>;
    /**
     * Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
     */
    readonly mongoUriUpdated: pulumi.Output<string>;
    /**
     * connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
     */
    readonly mongoUriWithOptions: pulumi.Output<string>;
    /**
     * Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of shards to deploy in the specified zone.
     */
    readonly numShards: pulumi.Output<number | undefined>;
    /**
     * Flag that indicates whether the cluster is paused or not.
     */
    readonly paused: pulumi.Output<boolean>;
    /**
     * - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
     */
    readonly pitEnabled: pulumi.Output<boolean>;
    readonly plugin: pulumi.Output<outputs.ClusterPlugin>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
     */
    readonly providerBackupEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
     */
    readonly providerDiskIops: pulumi.Output<number>;
    /**
     * Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
     */
    readonly providerDiskTypeName: pulumi.Output<string>;
    /**
     * If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
     */
    readonly providerEncryptEbsVolume: pulumi.Output<boolean>;
    /**
     * Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.
     */
    readonly providerInstanceSizeName: pulumi.Output<string>;
    /**
     * Cloud service provider on which the servers are provisioned.
     */
    readonly providerName: pulumi.Output<string>;
    /**
     * Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
     * Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
     */
    readonly providerRegionName: pulumi.Output<string>;
    /**
     * The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
     */
    readonly providerVolumeType: pulumi.Output<string>;
    /**
     * Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
     */
    readonly replicationFactor: pulumi.Output<number>;
    /**
     * Configuration for cluster regions.  See Replication Spec below for more details.
     */
    readonly replicationSpecs: pulumi.Output<outputs.ClusterReplicationSpec[]>;
    /**
     * Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
     */
    readonly srvAddress: pulumi.Output<string>;
    /**
     * Current state of the cluster. The possible states are:
     * - IDLE
     * - CREATING
     * - UPDATING
     * - DELETING
     * - DELETED
     * - REPAIRING
     */
    readonly stateName: pulumi.Output<string>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    readonly advancedConfiguration?: pulumi.Input<inputs.ClusterAdvancedConfiguration>;
    /**
     * Specifies whether disk auto-scaling is enabled. The default is true.
     * - Set to `true` to enable disk auto-scaling.
     * - Set to `false` to disable disk auto-scaling.
     */
    readonly autoScalingDiskGbEnabled?: pulumi.Input<boolean>;
    /**
     * Cloud service provider on which the server for a multi-tenant cluster is provisioned.
     */
    readonly backingProviderName?: pulumi.Input<string>;
    /**
     * Set to true to enable Atlas continuous backups for the cluster.
     */
    readonly backupEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
     */
    readonly biConnector?: pulumi.Input<inputs.ClusterBiConnector>;
    /**
     * The cluster ID.
     */
    readonly clusterId?: pulumi.Input<string>;
    /**
     * Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
     */
    readonly clusterType?: pulumi.Input<string>;
    /**
     * The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
     */
    readonly encryptionAtRestProvider?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<pulumi.Input<inputs.ClusterLabel>[]>;
    /**
     * Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
     */
    readonly mongoDbMajorVersion?: pulumi.Input<string>;
    /**
     * Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
     */
    readonly mongoDbVersion?: pulumi.Input<string>;
    /**
     * Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
     */
    readonly mongoUri?: pulumi.Input<string>;
    /**
     * Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
     */
    readonly mongoUriUpdated?: pulumi.Input<string>;
    /**
     * connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
     */
    readonly mongoUriWithOptions?: pulumi.Input<string>;
    /**
     * Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number of shards to deploy in the specified zone.
     */
    readonly numShards?: pulumi.Input<number>;
    /**
     * Flag that indicates whether the cluster is paused or not.
     */
    readonly paused?: pulumi.Input<boolean>;
    /**
     * - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
     */
    readonly pitEnabled?: pulumi.Input<boolean>;
    readonly plugin?: pulumi.Input<inputs.ClusterPlugin>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
     */
    readonly providerBackupEnabled?: pulumi.Input<boolean>;
    /**
     * The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
     */
    readonly providerDiskIops?: pulumi.Input<number>;
    /**
     * Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
     */
    readonly providerDiskTypeName?: pulumi.Input<string>;
    /**
     * If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
     */
    readonly providerEncryptEbsVolume?: pulumi.Input<boolean>;
    /**
     * Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.
     */
    readonly providerInstanceSizeName?: pulumi.Input<string>;
    /**
     * Cloud service provider on which the servers are provisioned.
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
     * Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
     */
    readonly providerRegionName?: pulumi.Input<string>;
    /**
     * The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
     */
    readonly providerVolumeType?: pulumi.Input<string>;
    /**
     * Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
     */
    readonly replicationFactor?: pulumi.Input<number>;
    /**
     * Configuration for cluster regions.  See Replication Spec below for more details.
     */
    readonly replicationSpecs?: pulumi.Input<pulumi.Input<inputs.ClusterReplicationSpec>[]>;
    /**
     * Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
     */
    readonly srvAddress?: pulumi.Input<string>;
    /**
     * Current state of the cluster. The possible states are:
     * - IDLE
     * - CREATING
     * - UPDATING
     * - DELETING
     * - DELETED
     * - REPAIRING
     */
    readonly stateName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    readonly advancedConfiguration?: pulumi.Input<inputs.ClusterAdvancedConfiguration>;
    /**
     * Specifies whether disk auto-scaling is enabled. The default is true.
     * - Set to `true` to enable disk auto-scaling.
     * - Set to `false` to disable disk auto-scaling.
     */
    readonly autoScalingDiskGbEnabled?: pulumi.Input<boolean>;
    /**
     * Cloud service provider on which the server for a multi-tenant cluster is provisioned.
     */
    readonly backingProviderName?: pulumi.Input<string>;
    /**
     * Set to true to enable Atlas continuous backups for the cluster.
     */
    readonly backupEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
     */
    readonly biConnector?: pulumi.Input<inputs.ClusterBiConnector>;
    /**
     * Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
     */
    readonly clusterType?: pulumi.Input<string>;
    /**
     * The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
     */
    readonly diskSizeGb?: pulumi.Input<number>;
    /**
     * Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
     */
    readonly encryptionAtRestProvider?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<pulumi.Input<inputs.ClusterLabel>[]>;
    /**
     * Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
     */
    readonly mongoDbMajorVersion?: pulumi.Input<string>;
    /**
     * Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Number of shards to deploy in the specified zone.
     */
    readonly numShards?: pulumi.Input<number>;
    /**
     * - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
     */
    readonly pitEnabled?: pulumi.Input<boolean>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
     */
    readonly providerBackupEnabled?: pulumi.Input<boolean>;
    /**
     * The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
     */
    readonly providerDiskIops?: pulumi.Input<number>;
    /**
     * Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
     */
    readonly providerDiskTypeName?: pulumi.Input<string>;
    /**
     * If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
     */
    readonly providerEncryptEbsVolume?: pulumi.Input<boolean>;
    /**
     * Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.
     */
    readonly providerInstanceSizeName: pulumi.Input<string>;
    /**
     * Cloud service provider on which the servers are provisioned.
     */
    readonly providerName: pulumi.Input<string>;
    /**
     * Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
     * Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
     */
    readonly providerRegionName?: pulumi.Input<string>;
    /**
     * The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
     */
    readonly providerVolumeType?: pulumi.Input<string>;
    /**
     * Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
     */
    readonly replicationFactor?: pulumi.Input<number>;
    /**
     * Configuration for cluster regions.  See Replication Spec below for more details.
     */
    readonly replicationSpecs?: pulumi.Input<pulumi.Input<inputs.ClusterReplicationSpec>[]>;
}
