// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.getDatabaseUsers` describe all Database Users. This represents a database user which will be applied to all clusters within the project.
// 
// Each user has a set of roles that provide access to the project’s databases. User's roles apply to all the clusters in the project: if two clusters have a `products` database and a user has a role granting `read` access on the products database, the user has that access on both clusters.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/database_users.html.markdown.
func LookupDatabaseUsers(ctx *pulumi.Context, args *GetDatabaseUsersArgs) (*GetDatabaseUsersResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["projectId"] = args.ProjectId
	}
	outputs, err := ctx.Invoke("mongodbatlas:index/getDatabaseUsers:getDatabaseUsers", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDatabaseUsersResult{
		ProjectId: outputs["projectId"],
		Results: outputs["results"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getDatabaseUsers.
type GetDatabaseUsersArgs struct {
	// The unique ID for the project to get all database users.
	ProjectId interface{}
}

// A collection of values returned by getDatabaseUsers.
type GetDatabaseUsersResult struct {
	// ID of the Atlas project the user belongs to.
	ProjectId interface{}
	// A list where each represents a Database user.
	Results interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
