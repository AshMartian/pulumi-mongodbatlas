import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/database_user.html.markdown.
 */
export declare class DatabaseUser extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseUserState, opts?: pulumi.CustomResourceOptions): DatabaseUser;
    /**
     * Returns true if the given object is an instance of DatabaseUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatabaseUser;
    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is always the admin database.
     */
    readonly authDatabaseName: pulumi.Output<string | undefined>;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    readonly labels: pulumi.Output<outputs.DatabaseUserLabel[]>;
    readonly password: pulumi.Output<string | undefined>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    readonly roles: pulumi.Output<outputs.DatabaseUserRole[]>;
    /**
     * Username for authenticating to MongoDB.
     */
    readonly username: pulumi.Output<string>;
    /**
     * X.509 method by which the provided username is authenticated. If no value is given, Atlas uses the default value of NONE. The accepted types are:
     */
    readonly x509Type: pulumi.Output<string | undefined>;
    /**
     * Create a DatabaseUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseUserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatabaseUser resources.
 */
export interface DatabaseUserState {
    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is always the admin database.
     */
    readonly authDatabaseName?: pulumi.Input<string>;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<pulumi.Input<inputs.DatabaseUserLabel>[]>;
    readonly password?: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    readonly roles?: pulumi.Input<pulumi.Input<inputs.DatabaseUserRole>[]>;
    /**
     * Username for authenticating to MongoDB.
     */
    readonly username?: pulumi.Input<string>;
    /**
     * X.509 method by which the provided username is authenticated. If no value is given, Atlas uses the default value of NONE. The accepted types are:
     */
    readonly x509Type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatabaseUser resource.
 */
export interface DatabaseUserArgs {
    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is always the admin database.
     */
    readonly authDatabaseName?: pulumi.Input<string>;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName?: pulumi.Input<string>;
    readonly labels?: pulumi.Input<pulumi.Input<inputs.DatabaseUserLabel>[]>;
    readonly password?: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    readonly roles?: pulumi.Input<pulumi.Input<inputs.DatabaseUserRole>[]>;
    /**
     * Username for authenticating to MongoDB.
     */
    readonly username: pulumi.Input<string>;
    /**
     * X.509 method by which the provided username is authenticated. If no value is given, Atlas uses the default value of NONE. The accepted types are:
     */
    readonly x509Type?: pulumi.Input<string>;
}
