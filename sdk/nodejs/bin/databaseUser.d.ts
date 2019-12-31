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
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName: pulumi.Output<string>;
    /**
     * User's initial password. This is required to create the user but may be removed after. Password may show up in logs, and it will be stored in the state file as plain-text. Password can be changed in the web interface to increase security.
     */
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
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * User's initial password. This is required to create the user but may be removed after. Password may show up in logs, and it will be stored in the state file as plain-text. Password can be changed in the web interface to increase security.
     */
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
}
/**
 * The set of arguments for constructing a DatabaseUser resource.
 */
export interface DatabaseUserArgs {
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * User's initial password. This is required to create the user but may be removed after. Password may show up in logs, and it will be stored in the state file as plain-text. Password can be changed in the web interface to increase security.
     */
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
}
