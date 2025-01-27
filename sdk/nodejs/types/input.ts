// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";

export interface CloudProviderSnapshotRestoreJobDeliveryType {
    automated?: pulumi.Input<boolean>;
    download?: pulumi.Input<boolean>;
    /**
     * Name of the target Atlas cluster to which the restore job restores the snapshot. Only required if deliveryType is automated.
     */
    targetClusterName?: pulumi.Input<string>;
    targetProjectId?: pulumi.Input<string>;
}

export interface ClusterAdvancedConfiguration {
    /**
     * When true, documents can only be updated or inserted if, for all indexed fields on the target collection, the corresponding index entries do not exceed 1024 bytes. When false, mongod writes documents that exceed the limit but does not index them.
     */
    failIndexKeyTooLong?: pulumi.Input<boolean>;
    /**
     * When true, the cluster allows execution of operations that perform server-side executions of JavaScript. When false, the cluster disables execution of those operations.
     */
    javascriptEnabled?: pulumi.Input<boolean>;
    /**
     * Sets the minimum Transport Layer Security (TLS) version the cluster accepts for incoming connections.Valid values are:
     */
    minimumEnabledTlsProtocol?: pulumi.Input<string>;
    /**
     * When true, the cluster disables the execution of any query that requires a collection scan to return results. When false, the cluster allows the execution of those operations.
     */
    noTableScan?: pulumi.Input<boolean>;
    /**
     * The custom oplog size of the cluster. Without a value that indicates that the cluster uses the default oplog size calculated by Atlas.
     */
    oplogSizeMb?: pulumi.Input<number>;
    /**
     * Interval in seconds at which the mongosqld process re-samples data to create its relational schema. The default value is 300. The specified value must be a positive integer. Available only for Atlas deployments in which BI Connector for Atlas is enabled.
     */
    sampleRefreshIntervalBiConnector?: pulumi.Input<number>;
    /**
     * Number of documents per database to sample when gathering schema information. Defaults to 100. Available only for Atlas deployments in which BI Connector for Atlas is enabled.
     */
    sampleSizeBiConnector?: pulumi.Input<number>;
}

export interface ClusterBiConnector {
    /**
     * Specifies whether or not BI Connector for Atlas is enabled on the cluster.
     * - Set to `true` to enable BI Connector for Atlas.
     * - Set to `false` to disable BI Connector for Atlas.
     */
    enabled?: pulumi.Input<string>;
    /**
     * Specifies the read preference to be used by BI Connector for Atlas on the cluster. Each BI Connector for Atlas read preference contains a distinct combination of [readPreference](https://docs.mongodb.com/manual/core/read-preference/) and [readPreferenceTags](https://docs.mongodb.com/manual/core/read-preference/#tag-sets) options. For details on BI Connector for Atlas read preferences, refer to the [BI Connector Read Preferences Table](https://docs.atlas.mongodb.com/tutorial/create-global-writes-cluster/#bic-read-preferences).
     */
    readPreference?: pulumi.Input<string>;
}

export interface ClusterLabel {
    /**
     * The key that you want to write.
     */
    key?: pulumi.Input<string>;
    /**
     * The value that you want to write.
     */
    value?: pulumi.Input<string>;
}

export interface ClusterPlugin {
    /**
     * Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
     */
    name?: pulumi.Input<string>;
    version?: pulumi.Input<string>;
}

export interface ClusterReplicationSpec {
    /**
     * Unique identifer of the replication document for a zone in a Global Cluster.
     */
    id?: pulumi.Input<string>;
    /**
     * Number of shards to deploy in the specified zone.
     */
    numShards: pulumi.Input<number>;
    /**
     * Physical location of the region. Each regionsConfig document describes the region’s priority in elections and the number and type of MongoDB nodes Atlas deploys to the region. You must order each regionsConfigs document by regionsConfig.priority, descending. See Region Config below for more details.
     */
    regionsConfigs?: pulumi.Input<pulumi.Input<inputs.ClusterReplicationSpecRegionsConfig>[]>;
    /**
     * Name for the zone in a Global Cluster.
     */
    zoneName?: pulumi.Input<string>;
}

export interface ClusterReplicationSpecRegionsConfig {
    /**
     * The number of analytics nodes for Atlas to deploy to the region. Analytics nodes are useful for handling analytic data such as reporting queries from BI Connector for Atlas. Analytics nodes are read-only, and can never become the primary.
     */
    analyticsNodes?: pulumi.Input<number>;
    /**
     * Number of electable nodes for Atlas to deploy to the region. Electable nodes can become the primary and can facilitate local reads.
     */
    electableNodes?: pulumi.Input<number>;
    /**
     * Election priority of the region. For regions with only read-only nodes, set this value to 0.
     */
    priority?: pulumi.Input<number>;
    /**
     * Number of read-only nodes for Atlas to deploy to the region. Read-only nodes can never become the primary, but can facilitate local-reads. Specify 0 if you do not want any read-only nodes in the region.
     */
    readOnlyNodes?: pulumi.Input<number>;
    /**
     * Name for the region specified.
     */
    regionName?: pulumi.Input<string>;
}

export interface DatabaseUserLabel {
    /**
     * The key that you want to write.
     */
    key?: pulumi.Input<string>;
    /**
     * The value that you want to write.
     */
    value?: pulumi.Input<string>;
}

export interface DatabaseUserRole {
    /**
     * Collection for which the role applies. You can specify a collection for the `read` and `readWrite` roles. If you do not specify a collection for `read` and `readWrite`, the role applies to all collections in the database (excluding some collections in the `system`. database).
     */
    collectionName?: pulumi.Input<string>;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    databaseName?: pulumi.Input<string>;
    roleName?: pulumi.Input<string>;
}

export interface EncryptionAtRestAwsKms {
    /**
     * The IAM access key ID with permissions to access the customer master key specified by customerMasterKeyID.
     */
    accessKeyId: pulumi.Input<string>;
    /**
     * The AWS customer master key used to encrypt and decrypt the MongoDB master keys.
     */
    customerMasterKeyId: pulumi.Input<string>;
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The AWS region in which the AWS customer master key exists: CA_CENTRAL_1, US_EAST_1, US_EAST_2, US_WEST_1, US_WEST_2, SA_EAST_1
     */
    region: pulumi.Input<string>;
    /**
     * The IAM secret access key with permissions to access the customer master key specified by customerMasterKeyID.
     */
    secretAccessKey: pulumi.Input<string>;
}

export interface EncryptionAtRestAzureKeyVault {
    /**
     * The Azure environment where the Azure account credentials reside. Valid values are the following: AZURE, AZURE_CHINA, AZURE_GERMANY
     */
    azureEnvironment: pulumi.Input<string>;
    /**
     * The client ID, also known as the application ID, for an Azure application associated with the Azure AD tenant.
     */
    clientId: pulumi.Input<string>;
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The unique identifier of a key in an Azure Key Vault.
     */
    keyIdentifier: pulumi.Input<string>;
    /**
     * The name of an Azure Key Vault containing your key.
     */
    keyVaultName: pulumi.Input<string>;
    /**
     * The name of the Azure Resource group that contains an Azure Key Vault.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The secret associated with the Azure Key Vault specified by azureKeyVault.tenantID.
     */
    secret: pulumi.Input<string>;
    /**
     * The unique identifier associated with an Azure subscription.
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * The unique identifier for an Azure AD tenant within an Azure subscription.
     */
    tenantId: pulumi.Input<string>;
}

export interface EncryptionAtRestGoogleCloudKms {
    /**
     * Specifies whether Encryption at Rest is enabled for an Atlas project. To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The Key Version Resource ID from your GCP account.
     */
    keyVersionResourceId: pulumi.Input<string>;
    /**
     * String-formatted JSON object containing GCP KMS credentials from your GCP account.
     */
    serviceAccountKey: pulumi.Input<string>;
}

export interface ProjectTeam {
    /**
     * Each string in the array represents a project role you want to assign to the team. Every user associated with the team inherits these roles. You must specify an array even if you are only associating a single role with the team.
     * The following are valid roles:
     * * `GROUP_OWNER`
     * * `GROUP_READ_ONLY`
     * * `GROUP_DATA_ACCESS_ADMIN`
     * * `GROUP_DATA_ACCESS_READ_WRITE`
     * * `GROUP_DATA_ACCESS_READ_ONLY`
     * * `GROUP_CLUSTER_MANAGER`
     */
    roleNames: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.
     */
    teamId: pulumi.Input<string>;
}
