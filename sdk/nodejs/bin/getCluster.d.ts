import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..Cluster` describes a Cluster. The. The data source requires your Project ID.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
 *
 * > **IMPORTANT:**
 * <br> &#8226; Changes to cluster configurations can affect costs. Before making changes, please see [Billing](https://docs.atlas.mongodb.com/billing/).
 * <br> &#8226; If your Atlas project contains a custom role that uses actions introduced in a specific MongoDB version, you cannot create a cluster with a MongoDB version less than that version unless you delete the custom role.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cluster.html.markdown.
 */
export declare function getCluster(args: GetClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterResult> & GetClusterResult;
/**
 * A collection of arguments for invoking getCluster.
 */
export interface GetClusterArgs {
    /**
     * Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
     */
    readonly name: string;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getCluster.
 */
export interface GetClusterResult {
    /**
     * Indicates whether disk auto-scaling is enabled.
     */
    readonly autoScalingDiskGbEnabled: boolean;
    /**
     * Indicates Cloud service provider on which the server for a multi-tenant cluster is provisioned.
     */
    readonly backingProviderName: string;
    /**
     * Indicates whether Atlas continuous backups are enabled for the cluster.
     */
    readonly backupEnabled: boolean;
    /**
     * Indicates BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
     */
    readonly biConnector: outputs.GetClusterBiConnector;
    /**
     * Indicates the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
     */
    readonly clusterType: string;
    /**
     * Indicates the size in gigabytes of the server’s root volume.
     */
    readonly diskSizeGb: number;
    /**
     * Indicates whether Encryption at Rest is enabled or disabled.
     */
    readonly encryptionAtRestProvider: string;
    /**
     * Indicates the version of the cluster to deploy.
     */
    readonly mongoDbMajorVersion: string;
    /**
     * Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
     */
    readonly mongoDbVersion: string;
    /**
     * Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
     */
    readonly mongoUri: string;
    /**
     * Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
     */
    readonly mongoUriUpdated: string;
    /**
     * Describes connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
     */
    readonly mongoUriWithOptions: string;
    /**
     * Name of the cluster as it appears in Atlas.
     */
    readonly name: string;
    /**
     * Number of shards to deploy in the specified zone.
     */
    readonly numShards: number;
    /**
     * Flag that indicates whether the cluster is paused or not.
     */
    readonly paused: boolean;
    readonly projectId: string;
    /**
     * Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
     */
    readonly providerBackupEnabled: boolean;
    /**
     * Indicates the maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
     */
    readonly providerDiskIops: number;
    /**
     * Describes Azure disk type of the server’s root volume.
     */
    readonly providerDiskTypeName: string;
    /**
     * Indicates whether the Amazon EBS encryption is enabled. This feature encrypts the server’s root volume for both data at rest within the volume and data moving between the volume and the instance.
     */
    readonly providerEncryptEbsVolume: boolean;
    /**
     * Atlas provides different instance sizes, each with a default storage capacity and RAM size.
     */
    readonly providerInstanceSizeName: string;
    /**
     * Indicates the cloud service provider on which the servers are provisioned.
     */
    readonly providerName: string;
    /**
     * Indicates Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
     */
    readonly providerRegionName: string;
    /**
     * Indicates the type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.
     */
    readonly providerVolumeType: string;
    /**
     * Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
     */
    readonly replicationFactor: number;
    /**
     * Configuration for cluster regions.  See Replication Spec below for more details.
     */
    readonly replicationSpecs: outputs.GetClusterReplicationSpec[];
    /**
     * Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
     */
    readonly srvAddress: string;
    /**
     * Indicates the current state of the cluster. The possible states are:
     * - IDLE
     * - CREATING
     * - UPDATING
     * - DELETING
     * - DELETED
     * - REPAIRING
     */
    readonly stateName: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
