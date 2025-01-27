# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetCloudProviderSnapshotRestoreJobResult:
    """
    A collection of values returned by getCloudProviderSnapshotRestoreJob.
    """
    def __init__(__self__, cancelled=None, cluster_name=None, created_at=None, delivery_type=None, delivery_urls=None, expired=None, expires_at=None, finished_at=None, job_id=None, project_id=None, snapshot_id=None, target_cluster_name=None, target_project_id=None, timestamp=None, id=None):
        if cancelled and not isinstance(cancelled, bool):
            raise TypeError("Expected argument 'cancelled' to be a bool")
        __self__.cancelled = cancelled
        """
        Indicates whether the restore job was canceled.
        """
        if cluster_name and not isinstance(cluster_name, str):
            raise TypeError("Expected argument 'cluster_name' to be a str")
        __self__.cluster_name = cluster_name
        if created_at and not isinstance(created_at, str):
            raise TypeError("Expected argument 'created_at' to be a str")
        __self__.created_at = created_at
        """
        UTC ISO 8601 formatted point in time when Atlas created the restore job.
        """
        if delivery_type and not isinstance(delivery_type, str):
            raise TypeError("Expected argument 'delivery_type' to be a str")
        __self__.delivery_type = delivery_type
        """
        Type of restore job to create. Possible values are: automated and download.
        """
        if delivery_urls and not isinstance(delivery_urls, list):
            raise TypeError("Expected argument 'delivery_urls' to be a list")
        __self__.delivery_urls = delivery_urls
        """
        One or more URLs for the compressed snapshot files for manual download. Only visible if deliveryType is download.
        """
        if expired and not isinstance(expired, bool):
            raise TypeError("Expected argument 'expired' to be a bool")
        __self__.expired = expired
        """
        Indicates whether the restore job expired.
        """
        if expires_at and not isinstance(expires_at, str):
            raise TypeError("Expected argument 'expires_at' to be a str")
        __self__.expires_at = expires_at
        """
        UTC ISO 8601 formatted point in time when the restore job expires.
        """
        if finished_at and not isinstance(finished_at, str):
            raise TypeError("Expected argument 'finished_at' to be a str")
        __self__.finished_at = finished_at
        """
        UTC ISO 8601 formatted point in time when the restore job completed.
        """
        if job_id and not isinstance(job_id, str):
            raise TypeError("Expected argument 'job_id' to be a str")
        __self__.job_id = job_id
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        if snapshot_id and not isinstance(snapshot_id, str):
            raise TypeError("Expected argument 'snapshot_id' to be a str")
        __self__.snapshot_id = snapshot_id
        """
        Unique identifier of the source snapshot ID of the restore job.
        """
        if target_cluster_name and not isinstance(target_cluster_name, str):
            raise TypeError("Expected argument 'target_cluster_name' to be a str")
        __self__.target_cluster_name = target_cluster_name
        """
        Name of the target Atlas cluster to which the restore job restores the snapshot. Only visible if deliveryType is automated.
        """
        if target_project_id and not isinstance(target_project_id, str):
            raise TypeError("Expected argument 'target_project_id' to be a str")
        __self__.target_project_id = target_project_id
        if timestamp and not isinstance(timestamp, str):
            raise TypeError("Expected argument 'timestamp' to be a str")
        __self__.timestamp = timestamp
        """
        Timestamp in ISO 8601 date and time format in UTC when the snapshot associated to snapshotId was taken.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetCloudProviderSnapshotRestoreJobResult(GetCloudProviderSnapshotRestoreJobResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCloudProviderSnapshotRestoreJobResult(
            cancelled=self.cancelled,
            cluster_name=self.cluster_name,
            created_at=self.created_at,
            delivery_type=self.delivery_type,
            delivery_urls=self.delivery_urls,
            expired=self.expired,
            expires_at=self.expires_at,
            finished_at=self.finished_at,
            job_id=self.job_id,
            project_id=self.project_id,
            snapshot_id=self.snapshot_id,
            target_cluster_name=self.target_cluster_name,
            target_project_id=self.target_project_id,
            timestamp=self.timestamp,
            id=self.id)

def get_cloud_provider_snapshot_restore_job(cluster_name=None,job_id=None,project_id=None,opts=None):
    """
    `.CloudProviderSnapshotRestoreJob` provides a Cloud Provider Snapshot Restore Job entry datasource. Gets all cloud provider snapshot restore jobs for the specified cluster.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
    
    :param str cluster_name: The name of the Atlas cluster for which you want to retrieve the restore job.
    :param str job_id: The unique identifier of the restore job to retrieve.
    :param str project_id: The unique identifier of the project for the Atlas cluster.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/cloud_provider_snapshot_restore_job.html.markdown.
    """
    __args__ = dict()

    __args__['clusterName'] = cluster_name
    __args__['jobId'] = job_id
    __args__['projectId'] = project_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getCloudProviderSnapshotRestoreJob:getCloudProviderSnapshotRestoreJob', __args__, opts=opts).value

    return AwaitableGetCloudProviderSnapshotRestoreJobResult(
        cancelled=__ret__.get('cancelled'),
        cluster_name=__ret__.get('clusterName'),
        created_at=__ret__.get('createdAt'),
        delivery_type=__ret__.get('deliveryType'),
        delivery_urls=__ret__.get('deliveryUrls'),
        expired=__ret__.get('expired'),
        expires_at=__ret__.get('expiresAt'),
        finished_at=__ret__.get('finishedAt'),
        job_id=__ret__.get('jobId'),
        project_id=__ret__.get('projectId'),
        snapshot_id=__ret__.get('snapshotId'),
        target_cluster_name=__ret__.get('targetClusterName'),
        target_project_id=__ret__.get('targetProjectId'),
        timestamp=__ret__.get('timestamp'),
        id=__ret__.get('id'))
