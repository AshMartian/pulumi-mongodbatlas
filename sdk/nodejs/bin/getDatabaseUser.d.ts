import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..DatabaseUser` describe a Database User. This represents a database user which will be applied to all clusters within the project.
 *
 * Each user has a set of roles that provide access to the project’s databases. User's roles apply to all the clusters in the project: if two clusters have a `products` database and a user has a role granting `read` access on the products database, the user has that access on both clusters.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/database_user.html.markdown.
 */
export declare function getDatabaseUser(args: GetDatabaseUserArgs, opts?: pulumi.InvokeOptions): Promise<GetDatabaseUserResult> & GetDatabaseUserResult;
/**
 * A collection of arguments for invoking getDatabaseUser.
 */
export interface GetDatabaseUserArgs {
    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is almost always the admin database, for X509 it is $external.
     */
    readonly authDatabaseName?: string;
    readonly databaseName?: string;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: string;
    /**
     * Username for authenticating to MongoDB.
     */
    readonly username: string;
}
/**
 * A collection of values returned by getDatabaseUser.
 */
export interface GetDatabaseUserResult {
    readonly authDatabaseName?: string;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName?: string;
    readonly labels: outputs.GetDatabaseUserLabel[];
    readonly projectId: string;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    readonly roles: outputs.GetDatabaseUserRole[];
    readonly username: string;
    /**
     * X.509 method by which the provided username is authenticated.
     */
    readonly x509Type: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
