# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

_SNAKE_TO_CAMEL_CASE_TABLE = {
    "accepter_region_name": "accepterRegionName",
    "access_key_id": "accessKeyId",
    "advanced_configuration": "advancedConfiguration",
    "atlas_cidr_block": "atlasCidrBlock",
    "atlas_gcp_project_id": "atlasGcpProjectId",
    "atlas_id": "atlasId",
    "atlas_vpc_name": "atlasVpcName",
    "auth_database_name": "authDatabaseName",
    "auto_scaling_disk_gb_enabled": "autoScalingDiskGbEnabled",
    "aws_account_id": "awsAccountId",
    "aws_kms": "awsKms",
    "aws_security_group": "awsSecurityGroup",
    "azure_directory_id": "azureDirectoryId",
    "azure_environment": "azureEnvironment",
    "azure_key_vault": "azureKeyVault",
    "azure_subscription_id": "azureSubscriptionId",
    "backing_provider_name": "backingProviderName",
    "backup_enabled": "backupEnabled",
    "bi_connector": "biConnector",
    "cidr_block": "cidrBlock",
    "client_id": "clientId",
    "cluster_count": "clusterCount",
    "cluster_id": "clusterId",
    "cluster_name": "clusterName",
    "cluster_type": "clusterType",
    "connection_id": "connectionId",
    "container_id": "containerId",
    "created_at": "createdAt",
    "customer_master_key_id": "customerMasterKeyId",
    "database_name": "databaseName",
    "delivery_type": "deliveryType",
    "delivery_urls": "deliveryUrls",
    "disk_size_gb": "diskSizeGb",
    "encryption_at_rest_provider": "encryptionAtRestProvider",
    "error_message": "errorMessage",
    "error_state": "errorState",
    "error_state_name": "errorStateName",
    "expires_at": "expiresAt",
    "fail_index_key_too_long": "failIndexKeyTooLong",
    "finished_at": "finishedAt",
    "gcp_project_id": "gcpProjectId",
    "google_cloud_kms": "googleCloudKms",
    "ip_address": "ipAddress",
    "javascript_enabled": "javascriptEnabled",
    "key_identifier": "keyIdentifier",
    "key_vault_name": "keyVaultName",
    "key_version_resource_id": "keyVersionResourceId",
    "master_key_uuid": "masterKeyUuid",
    "minimum_enabled_tls_protocol": "minimumEnabledTlsProtocol",
    "mongo_db_major_version": "mongoDbMajorVersion",
    "mongo_db_version": "mongoDbVersion",
    "mongo_uri": "mongoUri",
    "mongo_uri_updated": "mongoUriUpdated",
    "mongo_uri_with_options": "mongoUriWithOptions",
    "mongod_version": "mongodVersion",
    "network_name": "networkName",
    "no_table_scan": "noTableScan",
    "num_shards": "numShards",
    "oplog_size_mb": "oplogSizeMb",
    "org_id": "orgId",
    "peer_id": "peerId",
    "pit_enabled": "pitEnabled",
    "private_key": "privateKey",
    "project_id": "projectId",
    "provider_backup_enabled": "providerBackupEnabled",
    "provider_disk_iops": "providerDiskIops",
    "provider_disk_type_name": "providerDiskTypeName",
    "provider_encrypt_ebs_volume": "providerEncryptEbsVolume",
    "provider_instance_size_name": "providerInstanceSizeName",
    "provider_name": "providerName",
    "provider_region_name": "providerRegionName",
    "provider_volume_type": "providerVolumeType",
    "public_key": "publicKey",
    "read_preference": "readPreference",
    "region_name": "regionName",
    "replication_factor": "replicationFactor",
    "replication_specs": "replicationSpecs",
    "resource_group_name": "resourceGroupName",
    "retention_in_days": "retentionInDays",
    "route_table_cidr_block": "routeTableCidrBlock",
    "sample_refresh_interval_bi_connector": "sampleRefreshIntervalBiConnector",
    "sample_size_bi_connector": "sampleSizeBiConnector",
    "secret_access_key": "secretAccessKey",
    "service_account_key": "serviceAccountKey",
    "snapshot_id": "snapshotId",
    "snapshot_restore_job_id": "snapshotRestoreJobId",
    "snapshot_type": "snapshotType",
    "srv_address": "srvAddress",
    "state_name": "stateName",
    "status_name": "statusName",
    "storage_size_bytes": "storageSizeBytes",
    "subscription_id": "subscriptionId",
    "target_cluster_name": "targetClusterName",
    "target_project_id": "targetProjectId",
    "tenant_id": "tenantId",
    "vnet_name": "vnetName",
    "vpc_id": "vpcId",
    "x509_type": "x509Type",
}

_CAMEL_TO_SNAKE_CASE_TABLE = {
    "accepterRegionName": "accepter_region_name",
    "accessKeyId": "access_key_id",
    "advancedConfiguration": "advanced_configuration",
    "atlasCidrBlock": "atlas_cidr_block",
    "atlasGcpProjectId": "atlas_gcp_project_id",
    "atlasId": "atlas_id",
    "atlasVpcName": "atlas_vpc_name",
    "authDatabaseName": "auth_database_name",
    "autoScalingDiskGbEnabled": "auto_scaling_disk_gb_enabled",
    "awsAccountId": "aws_account_id",
    "awsKms": "aws_kms",
    "awsSecurityGroup": "aws_security_group",
    "azureDirectoryId": "azure_directory_id",
    "azureEnvironment": "azure_environment",
    "azureKeyVault": "azure_key_vault",
    "azureSubscriptionId": "azure_subscription_id",
    "backingProviderName": "backing_provider_name",
    "backupEnabled": "backup_enabled",
    "biConnector": "bi_connector",
    "cidrBlock": "cidr_block",
    "clientId": "client_id",
    "clusterCount": "cluster_count",
    "clusterId": "cluster_id",
    "clusterName": "cluster_name",
    "clusterType": "cluster_type",
    "connectionId": "connection_id",
    "containerId": "container_id",
    "createdAt": "created_at",
    "customerMasterKeyId": "customer_master_key_id",
    "databaseName": "database_name",
    "deliveryType": "delivery_type",
    "deliveryUrls": "delivery_urls",
    "diskSizeGb": "disk_size_gb",
    "encryptionAtRestProvider": "encryption_at_rest_provider",
    "errorMessage": "error_message",
    "errorState": "error_state",
    "errorStateName": "error_state_name",
    "expiresAt": "expires_at",
    "failIndexKeyTooLong": "fail_index_key_too_long",
    "finishedAt": "finished_at",
    "gcpProjectId": "gcp_project_id",
    "googleCloudKms": "google_cloud_kms",
    "ipAddress": "ip_address",
    "javascriptEnabled": "javascript_enabled",
    "keyIdentifier": "key_identifier",
    "keyVaultName": "key_vault_name",
    "keyVersionResourceId": "key_version_resource_id",
    "masterKeyUuid": "master_key_uuid",
    "minimumEnabledTlsProtocol": "minimum_enabled_tls_protocol",
    "mongoDbMajorVersion": "mongo_db_major_version",
    "mongoDbVersion": "mongo_db_version",
    "mongoUri": "mongo_uri",
    "mongoUriUpdated": "mongo_uri_updated",
    "mongoUriWithOptions": "mongo_uri_with_options",
    "mongodVersion": "mongod_version",
    "networkName": "network_name",
    "noTableScan": "no_table_scan",
    "numShards": "num_shards",
    "oplogSizeMb": "oplog_size_mb",
    "orgId": "org_id",
    "peerId": "peer_id",
    "pitEnabled": "pit_enabled",
    "privateKey": "private_key",
    "projectId": "project_id",
    "providerBackupEnabled": "provider_backup_enabled",
    "providerDiskIops": "provider_disk_iops",
    "providerDiskTypeName": "provider_disk_type_name",
    "providerEncryptEbsVolume": "provider_encrypt_ebs_volume",
    "providerInstanceSizeName": "provider_instance_size_name",
    "providerName": "provider_name",
    "providerRegionName": "provider_region_name",
    "providerVolumeType": "provider_volume_type",
    "publicKey": "public_key",
    "readPreference": "read_preference",
    "regionName": "region_name",
    "replicationFactor": "replication_factor",
    "replicationSpecs": "replication_specs",
    "resourceGroupName": "resource_group_name",
    "retentionInDays": "retention_in_days",
    "routeTableCidrBlock": "route_table_cidr_block",
    "sampleRefreshIntervalBiConnector": "sample_refresh_interval_bi_connector",
    "sampleSizeBiConnector": "sample_size_bi_connector",
    "secretAccessKey": "secret_access_key",
    "serviceAccountKey": "service_account_key",
    "snapshotId": "snapshot_id",
    "snapshotRestoreJobId": "snapshot_restore_job_id",
    "snapshotType": "snapshot_type",
    "srvAddress": "srv_address",
    "stateName": "state_name",
    "statusName": "status_name",
    "storageSizeBytes": "storage_size_bytes",
    "subscriptionId": "subscription_id",
    "targetClusterName": "target_cluster_name",
    "targetProjectId": "target_project_id",
    "tenantId": "tenant_id",
    "vnetName": "vnet_name",
    "vpcId": "vpc_id",
    "x509Type": "x509_type",
}
