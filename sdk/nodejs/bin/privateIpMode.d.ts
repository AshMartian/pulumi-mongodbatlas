import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..PrivateIpMode` provides a Private IP Mode resource. This allows one to enable/disable Connect via Peering Only mode for a MongoDB Atlas Project.
 *
 *
 * > **IMPORTANT**: <br>**What is Connect via Peering Only Mode?** <br>Connect via Peering Only mode prevents clusters in an Atlas project from connecting to any network destination other than an Atlas Network Peer. Connect via Peering Only mode applies only to **GCP** and **Azure-backed** dedicated clusters. This setting disables the ability to: <br><br>• Deploy non-GCP or Azure-backed dedicated clusters in an Atlas project, and
 * <br>• Use MongoDB Stitch with dedicated clusters in an Atlas project.
 *
 *
 * > **NOTE:** You should create one privateIpMode per project.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const myPrivateIpMode = new mongodbatlas.PrivateIpMode("myPrivateIpMode", {
 *     enabled: true,
 *     projectId: "<YOUR PROJECT ID>",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/private_ip_mode.html.markdown.
 */
export declare class PrivateIpMode extends pulumi.CustomResource {
    /**
     * Get an existing PrivateIpMode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PrivateIpModeState, opts?: pulumi.CustomResourceOptions): PrivateIpMode;
    /**
     * Returns true if the given object is an instance of PrivateIpMode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PrivateIpMode;
    /**
     * Indicates whether Connect via Peering Only mode is enabled or disabled for an Atlas project.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * The unique ID for the project to enable Only Private IP Mode.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Create a PrivateIpMode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PrivateIpModeArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PrivateIpMode resources.
 */
export interface PrivateIpModeState {
    /**
     * Indicates whether Connect via Peering Only mode is enabled or disabled for an Atlas project.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The unique ID for the project to enable Only Private IP Mode.
     */
    readonly projectId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PrivateIpMode resource.
 */
export interface PrivateIpModeArgs {
    /**
     * Indicates whether Connect via Peering Only mode is enabled or disabled for an Atlas project.
     */
    readonly enabled: pulumi.Input<boolean>;
    /**
     * The unique ID for the project to enable Only Private IP Mode.
     */
    readonly projectId: pulumi.Input<string>;
}
