import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..getDatabaseUsers` describe all Database Users. This represents a database user which will be applied to all clusters within the project.
 *
 * Each user has a set of roles that provide access to the project’s databases. User's roles apply to all the clusters in the project: if two clusters have a `products` database and a user has a role granting `read` access on the products database, the user has that access on both clusters.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/database_users.html.markdown.
 */
export declare function getDatabaseUsers(args: GetDatabaseUsersArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseUsersResult> & GetDatabaseUsersResult;
/**
 * A collection of arguments for invoking getDatabaseUsers.
 */
export interface GetDatabaseUsersArgs {
    /**
     * The unique ID for the project to get all database users.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getDatabaseUsers.
 */
export interface GetDatabaseUsersResult {
    /**
     * ID of the Atlas project the user belongs to.
     */
    readonly projectId: string;
    /**
     * A list where each represents a Database user.
     */
    readonly results: outputs.GetDatabaseUsersResult[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
