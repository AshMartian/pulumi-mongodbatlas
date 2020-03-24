// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.getNetworkContainers` describes all Network Peering Containers. The data source requires your Project ID.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_containers.html.markdown.
func LookupNetworkContainers(ctx *pulumi.Context, args *GetNetworkContainersArgs) (*GetNetworkContainersResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["projectId"] = args.ProjectId
		inputs["providerName"] = args.ProviderName
	}
	outputs, err := ctx.Invoke("mongodbatlas:index/getNetworkContainers:getNetworkContainers", inputs)
	if err != nil {
		return nil, err
	}
	return &GetNetworkContainersResult{
		ProjectId: outputs["projectId"],
		ProviderName: outputs["providerName"],
		Results: outputs["results"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getNetworkContainers.
type GetNetworkContainersArgs struct {
	// The unique ID for the project to create the database user.
	ProjectId interface{}
	// Cloud provider for this Network peering container. Accepted values are AWS, GCP, and Azure.
	ProviderName interface{}
}

// A collection of values returned by getNetworkContainers.
type GetNetworkContainersResult struct {
	ProjectId interface{}
	// Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
	ProviderName interface{}
	// A list where each represents a Network Peering Container.
	Results interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
