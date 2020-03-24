# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetProjectResult:
    """
    A collection of values returned by getProject.
    """
    def __init__(__self__, cluster_count=None, created=None, name=None, org_id=None, project_id=None, teams=None, id=None):
        if cluster_count and not isinstance(cluster_count, float):
            raise TypeError("Expected argument 'cluster_count' to be a float")
        __self__.cluster_count = cluster_count
        if created and not isinstance(created, str):
            raise TypeError("Expected argument 'created' to be a str")
        __self__.created = created
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        """
        The name of the project you want to create. (Cannot be changed via this Provider after creation.)
        """
        if org_id and not isinstance(org_id, str):
            raise TypeError("Expected argument 'org_id' to be a str")
        __self__.org_id = org_id
        """
        The ID of the organization you want to create the project within.
        *`cluster_count` - The number of Atlas clusters deployed in the project.
        *`created` - The ISO-8601-formatted timestamp of when Atlas created the project.
        * `teams.#.team_id` - The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.
        * `teams.#.role_names` - Each string in the array represents a project role assigned to the team. Every user associated with the team inherits these roles.
        The following are valid roles:
        * `GROUP_OWNER`
        * `GROUP_READ_ONLY`
        * `GROUP_DATA_ACCESS_ADMIN`
        * `GROUP_DATA_ACCESS_READ_WRITE`
        * `GROUP_DATA_ACCESS_READ_ONLY`
        * `GROUP_CLUSTER_MANAGER`
        """
        if project_id and not isinstance(project_id, str):
            raise TypeError("Expected argument 'project_id' to be a str")
        __self__.project_id = project_id
        if teams and not isinstance(teams, list):
            raise TypeError("Expected argument 'teams' to be a list")
        __self__.teams = teams
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetProjectResult(GetProjectResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetProjectResult(
            cluster_count=self.cluster_count,
            created=self.created,
            name=self.name,
            org_id=self.org_id,
            project_id=self.project_id,
            teams=self.teams,
            id=self.id)

def get_project(name=None,project_id=None,opts=None):
    """
    `.Project` describes a MongoDB Atlas Project. This represents a project that has been created.
    
    > **NOTE:** Groups and projects are synonymous terms. You may find group_id in the official documentation.
    
    :param str name: The unique ID for the project.
    :param str project_id: The unique ID for the project.

    > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/project.html.markdown.
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['projectId'] = project_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('mongodbatlas:index/getProject:getProject', __args__, opts=opts).value

    return AwaitableGetProjectResult(
        cluster_count=__ret__.get('clusterCount'),
        created=__ret__.get('created'),
        name=__ret__.get('name'),
        org_id=__ret__.get('orgId'),
        project_id=__ret__.get('projectId'),
        teams=__ret__.get('teams'),
        id=__ret__.get('id'))
