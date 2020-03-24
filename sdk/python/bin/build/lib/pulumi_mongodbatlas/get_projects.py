# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetProjectsResult:
    """
    A collection of values returned by getProjects.
    """
    def __init__(__self__, results=None, total_count=None, id=None):
        if results and not isinstance(results, list):
            raise TypeError("Expected argument 'results' to be a list")
        __self__.results = results
        if total_count and not isinstance(total_count, float):
            raise TypeError("Expected argument 'total_count' to be a float")
        __self__.total_count = total_count
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetProjectsResult(GetProjectsResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetProjectsResult(
            results=self.results,
            total_count=self.total_count,
            id=self.id)

def get_projects(opts=None):
    """
    `.getProjects` describe all Projects. This represents projects that have been created.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/projects.html.markdown.
    """
    __args__ = dict()

    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getProjects:getProjects', __args__, opts=opts).value

    return AwaitableGetProjectsResult(
        results=__ret__.get('results'),
        total_count=__ret__.get('totalCount'),
        id=__ret__.get('id'))
