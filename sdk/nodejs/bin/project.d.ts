import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..Project` provides a Project resource. This allows project to be created.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const myProject = new mongodbatlas.Project("myProject", {
 *     orgId: "5b93ff2f96e82120w0aaec19",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project.html.markdown.
 */
export declare class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project;
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Project;
    /**
     * The number of Atlas clusters deployed in the project..
     */
    readonly clusterCount: pulumi.Output<number>;
    /**
     * The ISO-8601-formatted timestamp of when Atlas created the project..
     */
    readonly created: pulumi.Output<string>;
    /**
     * The name of the project you want to create.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the organization you want to create the project within.
     */
    readonly orgId: pulumi.Output<string>;
    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * The number of Atlas clusters deployed in the project..
     */
    readonly clusterCount?: pulumi.Input<number>;
    /**
     * The ISO-8601-formatted timestamp of when Atlas created the project..
     */
    readonly created?: pulumi.Input<string>;
    /**
     * The name of the project you want to create.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the organization you want to create the project within.
     */
    readonly orgId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * The name of the project you want to create.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The ID of the organization you want to create the project within.
     */
    readonly orgId: pulumi.Input<string>;
}
