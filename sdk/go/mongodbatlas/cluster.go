// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.Cluster` provides a Cluster resource. The resource lets you create, edit and delete clusters. The resource requires your Project ID.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
// 
// > **IMPORTANT:**
// <br> &#8226; Free tier cluster creation (M0) is not supported via API or by this Provider.
// <br> &#8226; Shared tier clusters (M2, M5) cannot be upgraded to higher tiers via API or by this Provider. 
// <br> &#8226; Changes to cluster configurations can affect costs. Before making changes, please see [Billing](https://docs.atlas.mongodb.com/billing/).
// <br> &#8226; If your Atlas project contains a custom role that uses actions introduced in a specific MongoDB version, you cannot create a cluster with a MongoDB version less than that version unless you delete the custom role.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/cluster.html.markdown.
type Cluster struct {
	s *pulumi.ResourceState
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	if args == nil || args.ProjectId == nil {
		return nil, errors.New("missing required argument 'ProjectId'")
	}
	if args == nil || args.ProviderInstanceSizeName == nil {
		return nil, errors.New("missing required argument 'ProviderInstanceSizeName'")
	}
	if args == nil || args.ProviderName == nil {
		return nil, errors.New("missing required argument 'ProviderName'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["advancedConfiguration"] = nil
		inputs["autoScalingDiskGbEnabled"] = nil
		inputs["backingProviderName"] = nil
		inputs["backupEnabled"] = nil
		inputs["biConnector"] = nil
		inputs["clusterType"] = nil
		inputs["diskSizeGb"] = nil
		inputs["encryptionAtRestProvider"] = nil
		inputs["labels"] = nil
		inputs["mongoDbMajorVersion"] = nil
		inputs["name"] = nil
		inputs["numShards"] = nil
		inputs["pitEnabled"] = nil
		inputs["projectId"] = nil
		inputs["providerBackupEnabled"] = nil
		inputs["providerDiskIops"] = nil
		inputs["providerDiskTypeName"] = nil
		inputs["providerEncryptEbsVolume"] = nil
		inputs["providerInstanceSizeName"] = nil
		inputs["providerName"] = nil
		inputs["providerRegionName"] = nil
		inputs["providerVolumeType"] = nil
		inputs["replicationFactor"] = nil
		inputs["replicationSpecs"] = nil
	} else {
		inputs["advancedConfiguration"] = args.AdvancedConfiguration
		inputs["autoScalingDiskGbEnabled"] = args.AutoScalingDiskGbEnabled
		inputs["backingProviderName"] = args.BackingProviderName
		inputs["backupEnabled"] = args.BackupEnabled
		inputs["biConnector"] = args.BiConnector
		inputs["clusterType"] = args.ClusterType
		inputs["diskSizeGb"] = args.DiskSizeGb
		inputs["encryptionAtRestProvider"] = args.EncryptionAtRestProvider
		inputs["labels"] = args.Labels
		inputs["mongoDbMajorVersion"] = args.MongoDbMajorVersion
		inputs["name"] = args.Name
		inputs["numShards"] = args.NumShards
		inputs["pitEnabled"] = args.PitEnabled
		inputs["projectId"] = args.ProjectId
		inputs["providerBackupEnabled"] = args.ProviderBackupEnabled
		inputs["providerDiskIops"] = args.ProviderDiskIops
		inputs["providerDiskTypeName"] = args.ProviderDiskTypeName
		inputs["providerEncryptEbsVolume"] = args.ProviderEncryptEbsVolume
		inputs["providerInstanceSizeName"] = args.ProviderInstanceSizeName
		inputs["providerName"] = args.ProviderName
		inputs["providerRegionName"] = args.ProviderRegionName
		inputs["providerVolumeType"] = args.ProviderVolumeType
		inputs["replicationFactor"] = args.ReplicationFactor
		inputs["replicationSpecs"] = args.ReplicationSpecs
	}
	inputs["clusterId"] = nil
	inputs["mongoDbVersion"] = nil
	inputs["mongoUri"] = nil
	inputs["mongoUriUpdated"] = nil
	inputs["mongoUriWithOptions"] = nil
	inputs["paused"] = nil
	inputs["plugin"] = nil
	inputs["srvAddress"] = nil
	inputs["stateName"] = nil
	s, err := ctx.RegisterResource("mongodbatlas:index/cluster:Cluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterState, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["advancedConfiguration"] = state.AdvancedConfiguration
		inputs["autoScalingDiskGbEnabled"] = state.AutoScalingDiskGbEnabled
		inputs["backingProviderName"] = state.BackingProviderName
		inputs["backupEnabled"] = state.BackupEnabled
		inputs["biConnector"] = state.BiConnector
		inputs["clusterId"] = state.ClusterId
		inputs["clusterType"] = state.ClusterType
		inputs["diskSizeGb"] = state.DiskSizeGb
		inputs["encryptionAtRestProvider"] = state.EncryptionAtRestProvider
		inputs["labels"] = state.Labels
		inputs["mongoDbMajorVersion"] = state.MongoDbMajorVersion
		inputs["mongoDbVersion"] = state.MongoDbVersion
		inputs["mongoUri"] = state.MongoUri
		inputs["mongoUriUpdated"] = state.MongoUriUpdated
		inputs["mongoUriWithOptions"] = state.MongoUriWithOptions
		inputs["name"] = state.Name
		inputs["numShards"] = state.NumShards
		inputs["paused"] = state.Paused
		inputs["pitEnabled"] = state.PitEnabled
		inputs["plugin"] = state.Plugin
		inputs["projectId"] = state.ProjectId
		inputs["providerBackupEnabled"] = state.ProviderBackupEnabled
		inputs["providerDiskIops"] = state.ProviderDiskIops
		inputs["providerDiskTypeName"] = state.ProviderDiskTypeName
		inputs["providerEncryptEbsVolume"] = state.ProviderEncryptEbsVolume
		inputs["providerInstanceSizeName"] = state.ProviderInstanceSizeName
		inputs["providerName"] = state.ProviderName
		inputs["providerRegionName"] = state.ProviderRegionName
		inputs["providerVolumeType"] = state.ProviderVolumeType
		inputs["replicationFactor"] = state.ReplicationFactor
		inputs["replicationSpecs"] = state.ReplicationSpecs
		inputs["srvAddress"] = state.SrvAddress
		inputs["stateName"] = state.StateName
	}
	s, err := ctx.ReadResource("mongodbatlas:index/cluster:Cluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Cluster) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Cluster) ID() pulumi.IDOutput {
	return r.s.ID()
}

func (r *Cluster) AdvancedConfiguration() pulumi.Output {
	return r.s.State["advancedConfiguration"]
}

// Specifies whether disk auto-scaling is enabled. The default is true.
// - Set to `true` to enable disk auto-scaling.
// - Set to `false` to disable disk auto-scaling.
func (r *Cluster) AutoScalingDiskGbEnabled() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["autoScalingDiskGbEnabled"])
}

// Cloud service provider on which the server for a multi-tenant cluster is provisioned.
func (r *Cluster) BackingProviderName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["backingProviderName"])
}

// Set to true to enable Atlas continuous backups for the cluster.
func (r *Cluster) BackupEnabled() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["backupEnabled"])
}

// Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
func (r *Cluster) BiConnector() pulumi.Output {
	return r.s.State["biConnector"]
}

// The cluster ID.
func (r *Cluster) ClusterId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["clusterId"])
}

// Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
func (r *Cluster) ClusterType() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["clusterType"])
}

// The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
func (r *Cluster) DiskSizeGb() pulumi.Float64Output {
	return (pulumi.Float64Output)(r.s.State["diskSizeGb"])
}

// Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
func (r *Cluster) EncryptionAtRestProvider() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["encryptionAtRestProvider"])
}

func (r *Cluster) Labels() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["labels"])
}

// Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
func (r *Cluster) MongoDbMajorVersion() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["mongoDbMajorVersion"])
}

// Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
func (r *Cluster) MongoDbVersion() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["mongoDbVersion"])
}

// Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
func (r *Cluster) MongoUri() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["mongoUri"])
}

// Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
func (r *Cluster) MongoUriUpdated() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["mongoUriUpdated"])
}

// connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
func (r *Cluster) MongoUriWithOptions() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["mongoUriWithOptions"])
}

// Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
func (r *Cluster) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

// Number of shards to deploy in the specified zone.
func (r *Cluster) NumShards() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["numShards"])
}

// Flag that indicates whether the cluster is paused or not.
func (r *Cluster) Paused() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["paused"])
}

// - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
func (r *Cluster) PitEnabled() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["pitEnabled"])
}

func (r *Cluster) Plugin() pulumi.Output {
	return r.s.State["plugin"]
}

// The unique ID for the project to create the database user.
func (r *Cluster) ProjectId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["projectId"])
}

// Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
func (r *Cluster) ProviderBackupEnabled() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["providerBackupEnabled"])
}

// The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
func (r *Cluster) ProviderDiskIops() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["providerDiskIops"])
}

// Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
func (r *Cluster) ProviderDiskTypeName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["providerDiskTypeName"])
}

// If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
func (r *Cluster) ProviderEncryptEbsVolume() pulumi.BoolOutput {
	return (pulumi.BoolOutput)(r.s.State["providerEncryptEbsVolume"])
}

// Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.  
func (r *Cluster) ProviderInstanceSizeName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["providerInstanceSizeName"])
}

// Cloud service provider on which the servers are provisioned.
func (r *Cluster) ProviderName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["providerName"])
}

// Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
// Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
func (r *Cluster) ProviderRegionName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["providerRegionName"])
}

// The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
func (r *Cluster) ProviderVolumeType() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["providerVolumeType"])
}

// Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
func (r *Cluster) ReplicationFactor() pulumi.IntOutput {
	return (pulumi.IntOutput)(r.s.State["replicationFactor"])
}

// Configuration for cluster regions.  See Replication Spec below for more details.
func (r *Cluster) ReplicationSpecs() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["replicationSpecs"])
}

// Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
func (r *Cluster) SrvAddress() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["srvAddress"])
}

// Current state of the cluster. The possible states are:
// - IDLE
// - CREATING
// - UPDATING
// - DELETING
// - DELETED
// - REPAIRING
func (r *Cluster) StateName() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["stateName"])
}

// Input properties used for looking up and filtering Cluster resources.
type ClusterState struct {
	AdvancedConfiguration interface{}
	// Specifies whether disk auto-scaling is enabled. The default is true.
	// - Set to `true` to enable disk auto-scaling.
	// - Set to `false` to disable disk auto-scaling.
	AutoScalingDiskGbEnabled interface{}
	// Cloud service provider on which the server for a multi-tenant cluster is provisioned.
	BackingProviderName interface{}
	// Set to true to enable Atlas continuous backups for the cluster.
	BackupEnabled interface{}
	// Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
	BiConnector interface{}
	// The cluster ID.
	ClusterId interface{}
	// Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
	ClusterType interface{}
	// The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
	DiskSizeGb interface{}
	// Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
	EncryptionAtRestProvider interface{}
	Labels interface{}
	// Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
	MongoDbMajorVersion interface{}
	// Version of MongoDB the cluster runs, in `major-version`.`minor-version` format.
	MongoDbVersion interface{}
	// Base connection string for the cluster. Atlas only displays this field after the cluster is operational, not while it builds the cluster.
	MongoUri interface{}
	// Lists when the connection string was last updated. The connection string changes, for example, if you change a replica set to a sharded cluster.
	MongoUriUpdated interface{}
	// connection string for connecting to the Atlas cluster. Includes the replicaSet, ssl, and authSource query parameters in the connection string with values appropriate for the cluster.
	MongoUriWithOptions interface{}
	// Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
	Name interface{}
	// Number of shards to deploy in the specified zone.
	NumShards interface{}
	// Flag that indicates whether the cluster is paused or not.
	Paused interface{}
	// - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
	PitEnabled interface{}
	Plugin interface{}
	// The unique ID for the project to create the database user.
	ProjectId interface{}
	// Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
	ProviderBackupEnabled interface{}
	// The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
	ProviderDiskIops interface{}
	// Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
	ProviderDiskTypeName interface{}
	// If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
	ProviderEncryptEbsVolume interface{}
	// Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.  
	ProviderInstanceSizeName interface{}
	// Cloud service provider on which the servers are provisioned.
	ProviderName interface{}
	// Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
	// Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
	ProviderRegionName interface{}
	// The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
	ProviderVolumeType interface{}
	// Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
	ReplicationFactor interface{}
	// Configuration for cluster regions.  See Replication Spec below for more details.
	ReplicationSpecs interface{}
	// Connection string for connecting to the Atlas cluster. The +srv modifier forces the connection to use TLS/SSL. See the mongoURI for additional options.
	SrvAddress interface{}
	// Current state of the cluster. The possible states are:
	// - IDLE
	// - CREATING
	// - UPDATING
	// - DELETING
	// - DELETED
	// - REPAIRING
	StateName interface{}
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	AdvancedConfiguration interface{}
	// Specifies whether disk auto-scaling is enabled. The default is true.
	// - Set to `true` to enable disk auto-scaling.
	// - Set to `false` to disable disk auto-scaling.
	AutoScalingDiskGbEnabled interface{}
	// Cloud service provider on which the server for a multi-tenant cluster is provisioned.
	BackingProviderName interface{}
	// Set to true to enable Atlas continuous backups for the cluster.
	BackupEnabled interface{}
	// Specifies BI Connector for Atlas configuration on this cluster. BI Connector for Atlas is only available for M10+ clusters. See BI Connector below for more details.
	BiConnector interface{}
	// Specifies the type of the cluster that you want to modify. You cannot convert a sharded cluster deployment to a replica set deployment.
	ClusterType interface{}
	// The size in gigabytes of the server’s root volume. You can add capacity by increasing this number, up to a maximum possible value of 4096 (i.e., 4 TB). This value must be a positive integer.
	DiskSizeGb interface{}
	// Set the Encryption at Rest parameter.  Possible values are AWS, GCP, AZURE or NONE.  Requires M10 or greater and for backupEnabled to be false or omitted.
	EncryptionAtRestProvider interface{}
	Labels interface{}
	// Version of the cluster to deploy. Atlas supports the following MongoDB versions for M10+ clusters: `3.6`, `4.0`, or `4.2`. You must set this value to `4.2` if `providerInstanceSizeName` is either M2 or M5.
	MongoDbMajorVersion interface{}
	// Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
	Name interface{}
	// Number of shards to deploy in the specified zone.
	NumShards interface{}
	// - Flag that indicates if the cluster uses Point-in-Time backups. If set to true, providerBackupEnabled must also be set to true.
	PitEnabled interface{}
	// The unique ID for the project to create the database user.
	ProjectId interface{}
	// Flag indicating if the cluster uses Cloud Provider Snapshots for backups.
	ProviderBackupEnabled interface{}
	// The maximum input/output operations per second (IOPS) the system can perform. The possible values depend on the selected providerSettings.instanceSizeName and diskSizeGB.
	ProviderDiskIops interface{}
	// Azure disk type of the server’s root volume. If omitted, Atlas uses the default disk type for the selected providerSettings.instanceSizeName.  Example disk types and associated storage sizes: PP4 - 32GB, P6 - 64GB, P10 - 128GB, P20 - 512GB, P30 - 1024GB, P40 - 2048GB, P50 - 4095GB.  More information and the most update to date disk types/storage sizes can be located at https://docs.atlas.mongodb.com/reference/api/clusters-create-one/.
	ProviderDiskTypeName interface{}
	// If enabled, the Amazon EBS encryption feature encrypts the server’s root volume for both data at rest within the volume and for data moving between the volume and the instance.
	ProviderEncryptEbsVolume interface{}
	// Atlas provides different instance sizes, each with a default storage capacity and RAM size. The instance size you select is used for all the data-bearing servers in your cluster. See [Create a Cluster](https://docs.atlas.mongodb.com/reference/api/clusters-create-one/) `providerSettings.instanceSizeName` for valid values and default resources.  
	ProviderInstanceSizeName interface{}
	// Cloud service provider on which the servers are provisioned.
	ProviderName interface{}
	// Physical location of your MongoDB cluster. The region you choose can affect network latency for clients accessing your databases.  Requires the Atlas Region name, see the reference list for [AWS](https://docs.atlas.mongodb.com/reference/amazon-aws/), [GCP](https://docs.atlas.mongodb.com/reference/google-gcp/), [Azure](https://docs.atlas.mongodb.com/reference/microsoft-azure/).
	// Do not specify this field when creating a multi-region cluster using the replicationSpec document or a Global Cluster with the replicationSpecs array.
	ProviderRegionName interface{}
	// The type of the volume. The possible values are: `STANDARD` and `PROVISIONED`.  `PROVISIONED` required if setting IOPS higher than the default instance IOPS.
	ProviderVolumeType interface{}
	// Number of replica set members. Each member keeps a copy of your databases, providing high availability and data redundancy. The possible values are 3, 5, or 7. The default value is 3.
	ReplicationFactor interface{}
	// Configuration for cluster regions.  See Replication Spec below for more details.
	ReplicationSpecs interface{}
}
