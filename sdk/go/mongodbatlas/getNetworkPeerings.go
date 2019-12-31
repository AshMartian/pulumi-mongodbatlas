// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.getNetworkPeerings` describes all Network Peering Connections.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_peerings.html.markdown.
func LookupNetworkPeerings(ctx *pulumi.Context, args *GetNetworkPeeringsArgs) (*GetNetworkPeeringsResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["projectId"] = args.ProjectId
	}
	outputs, err := ctx.Invoke("mongodbatlas:index/getNetworkPeerings:getNetworkPeerings", inputs)
	if err != nil {
		return nil, err
	}
	return &GetNetworkPeeringsResult{
		ProjectId: outputs["projectId"],
		Results: outputs["results"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getNetworkPeerings.
type GetNetworkPeeringsArgs struct {
	// The unique ID for the project to create the database user.
	ProjectId interface{}
}

// A collection of values returned by getNetworkPeerings.
type GetNetworkPeeringsResult struct {
	ProjectId interface{}
	// A list where each represents a Network Peering Connection.
	Results interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
