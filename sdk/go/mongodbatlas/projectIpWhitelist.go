// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.ProjectIpWhitelist` provides an IP Whitelist entry resource. The whitelist grants access from IPs, CIDRs or AWS Security Groups (if VPC Peering is enabled) to clusters within the Project.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
// 
// > **IMPORTANT:**
// When you remove an entry from the whitelist, existing connections from the removed address(es) may remain open for a variable amount of time. How much time passes before Atlas closes the connection depends on several factors, including how the connection was established, the particular behavior of the application or driver using the address, and the connection protocol (e.g., TCP or UDP). This is particularly important to consider when changing an existing IP address or CIDR block as they cannot be updated via the Provider (comments can however), hence a change will force the destruction and recreation of entries.   
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project_ip_whitelist.html.markdown.
type ProjectIpWhitelist struct {
	s *pulumi.ResourceState
}

// NewProjectIpWhitelist registers a new resource with the given unique name, arguments, and options.
func NewProjectIpWhitelist(ctx *pulumi.Context,
	name string, args *ProjectIpWhitelistArgs, opts ...pulumi.ResourceOpt) (*ProjectIpWhitelist, error) {
	if args == nil || args.ProjectId == nil {
		return nil, errors.New("missing required argument 'ProjectId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["awsSecurityGroup"] = nil
		inputs["cidrBlock"] = nil
		inputs["comment"] = nil
		inputs["ipAddress"] = nil
		inputs["projectId"] = nil
	} else {
		inputs["awsSecurityGroup"] = args.AwsSecurityGroup
		inputs["cidrBlock"] = args.CidrBlock
		inputs["comment"] = args.Comment
		inputs["ipAddress"] = args.IpAddress
		inputs["projectId"] = args.ProjectId
	}
	s, err := ctx.RegisterResource("mongodbatlas:index/projectIpWhitelist:ProjectIpWhitelist", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProjectIpWhitelist{s: s}, nil
}

// GetProjectIpWhitelist gets an existing ProjectIpWhitelist resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProjectIpWhitelist(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ProjectIpWhitelistState, opts ...pulumi.ResourceOpt) (*ProjectIpWhitelist, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["awsSecurityGroup"] = state.AwsSecurityGroup
		inputs["cidrBlock"] = state.CidrBlock
		inputs["comment"] = state.Comment
		inputs["ipAddress"] = state.IpAddress
		inputs["projectId"] = state.ProjectId
	}
	s, err := ctx.ReadResource("mongodbatlas:index/projectIpWhitelist:ProjectIpWhitelist", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ProjectIpWhitelist{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ProjectIpWhitelist) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ProjectIpWhitelist) ID() pulumi.IDOutput {
	return r.s.ID()
}

// ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
func (r *ProjectIpWhitelist) AwsSecurityGroup() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["awsSecurityGroup"])
}

// Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
func (r *ProjectIpWhitelist) CidrBlock() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["cidrBlock"])
}

// Comment to add to the whitelist entry.
func (r *ProjectIpWhitelist) Comment() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["comment"])
}

// Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
func (r *ProjectIpWhitelist) IpAddress() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["ipAddress"])
}

// The ID of the project in which to add the whitelist entry.
func (r *ProjectIpWhitelist) ProjectId() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["projectId"])
}

// Input properties used for looking up and filtering ProjectIpWhitelist resources.
type ProjectIpWhitelistState struct {
	// ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
	AwsSecurityGroup interface{}
	// Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
	CidrBlock interface{}
	// Comment to add to the whitelist entry.
	Comment interface{}
	// Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
	IpAddress interface{}
	// The ID of the project in which to add the whitelist entry.
	ProjectId interface{}
}

// The set of arguments for constructing a ProjectIpWhitelist resource.
type ProjectIpWhitelistArgs struct {
	// ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
	AwsSecurityGroup interface{}
	// Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
	CidrBlock interface{}
	// Comment to add to the whitelist entry.
	Comment interface{}
	// Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
	IpAddress interface{}
	// The ID of the project in which to add the whitelist entry.
	ProjectId interface{}
}
