# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class Project(pulumi.CustomResource):
    cluster_count: pulumi.Output[float]
    """
    The number of Atlas clusters deployed in the project..
    """
    created: pulumi.Output[str]
    """
    The ISO-8601-formatted timestamp of when Atlas created the project..
    """
    name: pulumi.Output[str]
    """
    The name of the project you want to create. (Cannot be changed via this Provider after creation.)
    """
    org_id: pulumi.Output[str]
    """
    The ID of the organization you want to create the project within.
    """
    teams: pulumi.Output[list]
    def __init__(__self__, resource_name, opts=None, name=None, org_id=None, teams=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a Project resource with the given unique name, props, and options.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the project you want to create. (Cannot be changed via this Provider after creation.)
        :param pulumi.Input[str] org_id: The ID of the organization you want to create the project within.
        
        The **teams** object supports the following:
        
          * `roleNames` (`pulumi.Input[list]`) - Each string in the array represents a project role you want to assign to the team. Every user associated with the team inherits these roles. You must specify an array even if you are only associating a single role with the team.
            The following are valid roles:
            * `GROUP_OWNER`
            * `GROUP_READ_ONLY`
            * `GROUP_DATA_ACCESS_ADMIN`
            * `GROUP_DATA_ACCESS_READ_WRITE`
            * `GROUP_DATA_ACCESS_READ_ONLY`
            * `GROUP_CLUSTER_MANAGER`
          * `teamId` (`pulumi.Input[str]`) - The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['name'] = name
            if org_id is None:
                raise TypeError("Missing required property 'org_id'")
            __props__['org_id'] = org_id
            __props__['teams'] = teams
            __props__['cluster_count'] = None
            __props__['created'] = None
        super(Project, __self__).__init__(
            'mongodbatlas:index/project:Project',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, cluster_count=None, created=None, name=None, org_id=None, teams=None):
        """
        Get an existing Project resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] cluster_count: The number of Atlas clusters deployed in the project..
        :param pulumi.Input[str] created: The ISO-8601-formatted timestamp of when Atlas created the project..
        :param pulumi.Input[str] name: The name of the project you want to create. (Cannot be changed via this Provider after creation.)
        :param pulumi.Input[str] org_id: The ID of the organization you want to create the project within.
        
        The **teams** object supports the following:
        
          * `roleNames` (`pulumi.Input[list]`) - Each string in the array represents a project role you want to assign to the team. Every user associated with the team inherits these roles. You must specify an array even if you are only associating a single role with the team.
            The following are valid roles:
            * `GROUP_OWNER`
            * `GROUP_READ_ONLY`
            * `GROUP_DATA_ACCESS_ADMIN`
            * `GROUP_DATA_ACCESS_READ_WRITE`
            * `GROUP_DATA_ACCESS_READ_ONLY`
            * `GROUP_CLUSTER_MANAGER`
          * `teamId` (`pulumi.Input[str]`) - The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["cluster_count"] = cluster_count
        __props__["created"] = created
        __props__["name"] = name
        __props__["org_id"] = org_id
        __props__["teams"] = teams
        return Project(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

