// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package mongodbatlas

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// `.DatabaseUser` describe a Database User. This represents a database user which will be applied to all clusters within the project.
// 
// Each user has a set of roles that provide access to the project’s databases. User's roles apply to all the clusters in the project: if two clusters have a `products` database and a user has a role granting `read` access on the products database, the user has that access on both clusters.
// 
// > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
//
// > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/database_user.html.markdown.
func LookupDatabaseUser(ctx *pulumi.Context, args *GetDatabaseUserArgs) (*GetDatabaseUserResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["projectId"] = args.ProjectId
		inputs["username"] = args.Username
	}
	outputs, err := ctx.Invoke("mongodbatlas:index/getDatabaseUser:getDatabaseUser", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDatabaseUserResult{
		DatabaseName: outputs["databaseName"],
		ProjectId: outputs["projectId"],
		Roles: outputs["roles"],
		Username: outputs["username"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getDatabaseUser.
type GetDatabaseUserArgs struct {
	// The unique ID for the project to create the database user.
	ProjectId interface{}
	// Username for authenticating to MongoDB.
	Username interface{}
}

// A collection of values returned by getDatabaseUser.
type GetDatabaseUserResult struct {
	// Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
	DatabaseName interface{}
	ProjectId interface{}
	// List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
	Roles interface{}
	Username interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}