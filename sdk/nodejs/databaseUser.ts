// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/database_user.html.markdown.
 */
export class DatabaseUser extends pulumi.CustomResource {
    /**
     * Get an existing DatabaseUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatabaseUserState, opts?: pulumi.CustomResourceOptions): DatabaseUser {
        return new DatabaseUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mongodbatlas:index/databaseUser:DatabaseUser';

    /**
     * Returns true if the given object is an instance of DatabaseUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatabaseUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatabaseUser.__pulumiType;
    }

    /**
     * The user’s authentication database. A user must provide both a username and authentication database to log into MongoDB. In Atlas deployments of MongoDB, the authentication database is always the admin database.
     */
    public readonly authDatabaseName!: pulumi.Output<string | undefined>;
    /**
     * Database on which the user has the specified role. A role on the `admin` database can include privileges that apply to the other databases.
     */
    public readonly databaseName!: pulumi.Output<string | undefined>;
    public readonly labels!: pulumi.Output<outputs.DatabaseUserLabel[]>;
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The unique ID for the project to create the database user.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * List of user’s roles and the databases / collections on which the roles apply. A role allows the user to perform particular actions on the specified database. A role on the admin database can include privileges that apply to the other databases as well. See Roles below for more details.
     */
    public readonly roles!: pulumi.Output<outputs.DatabaseUserRole[]>;
    /**
     * Username for authenticating to MongoDB.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * X.509 method by which the provided username is authenticated. If no value is given, Atlas uses the default value of NONE. The accepted types are:
     */
    public readonly x509Type!: pulumi.Output<string | undefined>;

    /**
     * Create a DatabaseUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatabaseUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatabaseUserArgs | DatabaseUserState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DatabaseUserState | undefined;
            inputs["authDatabaseName"] = state ? state.authDatabaseName : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["labels"] = state ? state.labels : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["roles"] = state ? state.roles : undefined;
            inputs["username"] = state ? state.username : undefined;
            inputs["x509Type"] = state ? state.x509Type : undefined;
        } else {
            const args = argsOrState as DatabaseUserArgs | undefined;
            if (!args || args.projectId === undefined) {
                throw new Error("Missing required property 'projectId'");
            }
            if (!args || args.username === undefined) {
                throw new Error("Missing required property 'username'");
            }
            inputs["authDatabaseName"] = args ? args.authDatabaseName : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["labels"] = args ? args.labels : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["roles"] = args ? args.roles : undefined;
            inputs["username"] = args ? args.username : undefined;
            inputs["x509Type"] = args ? args.x509Type : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(DatabaseUser.__pulumiType, name, inputs, opts);
    }
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
