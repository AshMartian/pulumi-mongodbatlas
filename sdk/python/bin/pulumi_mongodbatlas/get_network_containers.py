# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetNetworkContainersResult:
    """
    A collection of values returned by getNetworkContainers.
    """
    def __init__(__self__, project_id=None, provider_name=None, results=None, id=None):
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        if provider_name and not isinstance(provider_name, str):
            raise TypeError("Expected argument 'provider_name' to be a str")
        __self__.provider_name = provider_name
        """
        Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
        """
        if results and not isinstance(results, list):
            raise TypeError("Expected argument 'results' to be a list")
        __self__.results = results
        """
        A list where each represents a Network Peering Container.
        """
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetNetworkContainersResult(GetNetworkContainersResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetNetworkContainersResult(
            project_id=self.project_id,
            provider_name=self.provider_name,
            results=self.results,
            id=self.id)

def get_network_containers(project_id=None,provider_name=None,opts=None):
    """
    `.getNetworkContainers` describes all Network Peering Containers. The data source requires your Project ID.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
    
    :param str project_id: The unique ID for the project to create the database user.
    :param str provider_name: Cloud provider for this Network peering container. Accepted values are AWS, GCP, and Azure.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_containers.html.markdown.
    """
    __args__ = dict()

    __args__['projectId'] = project_id
    __args__['providerName'] = provider_name
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getNetworkContainers:getNetworkContainers', __args__, opts=opts).value

    return AwaitableGetNetworkContainersResult(
        project_id=__ret__.get('projectId'),
        provider_name=__ret__.get('providerName'),
        results=__ret__.get('results'),
        id=__ret__.get('id'))
