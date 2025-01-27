import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..ProjectIpWhitelist` provides an IP Whitelist entry resource. The whitelist grants access from IPs, CIDRs or AWS Security Groups (if VPC Peering is enabled) to clusters within the Project.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * > **IMPORTANT:**
 * When you remove an entry from the whitelist, existing connections from the removed address(es) may remain open for a variable amount of time. How much time passes before Atlas closes the connection depends on several factors, including how the connection was established, the particular behavior of the application or driver using the address, and the connection protocol (e.g., TCP or UDP). This is particularly important to consider when changing an existing IP address or CIDR block as they cannot be updated via the Provider (comments can however), hence a change will force the destruction and recreation of entries.
 *
 *
 * ## Example Usage
 *
 * ### Using CIDR Block
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.ProjectIpWhitelist("test", {
 *     cidrBlock: "1.2.3.4/32",
 *     comment: "cidr block for tf acc testing",
 *     projectId: "<PROJECT-ID>",
 * });
 * ```
 *
 * ### Using IP Address
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.ProjectIpWhitelist("test", {
 *     comment: "ip address for tf acc testing",
 *     ipAddress: "2.3.4.5",
 *     projectId: "<PROJECT-ID>",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project_ip_whitelist.html.markdown.
 */
export declare class ProjectIpWhitelist extends pulumi.CustomResource {
    /**
     * Get an existing ProjectIpWhitelist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectIpWhitelistState, opts?: pulumi.CustomResourceOptions): ProjectIpWhitelist;
    /**
     * Returns true if the given object is an instance of ProjectIpWhitelist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ProjectIpWhitelist;
    /**
     * ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
     */
    readonly awsSecurityGroup: pulumi.Output<string>;
    /**
     * Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
     */
    readonly cidrBlock: pulumi.Output<string>;
    /**
     * Comment to add to the whitelist entry.
     */
    readonly comment: pulumi.Output<string>;
    /**
     * Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
     */
    readonly ipAddress: pulumi.Output<string>;
    /**
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Create a ProjectIpWhitelist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectIpWhitelistArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ProjectIpWhitelist resources.
 */
export interface ProjectIpWhitelistState {
    /**
     * ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
     */
    readonly awsSecurityGroup?: pulumi.Input<string>;
    /**
     * Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
     */
    readonly cidrBlock?: pulumi.Input<string>;
    /**
     * Comment to add to the whitelist entry.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ProjectIpWhitelist resource.
 */
export interface ProjectIpWhitelistArgs {
    /**
     * ID of the whitelisted AWS security group. Mutually exclusive with `cidrBlock` and `ipAddress`.
     */
    readonly awsSecurityGroup?: pulumi.Input<string>;
    /**
     * Whitelist entry in Classless Inter-Domain Routing (CIDR) notation. Mutually exclusive with `awsSecurityGroup` and `ipAddress`.
     */
    readonly cidrBlock?: pulumi.Input<string>;
    /**
     * Comment to add to the whitelist entry.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * Whitelisted IP address. Mutually exclusive with `awsSecurityGroup` and `cidrBlock`.
     */
    readonly ipAddress?: pulumi.Input<string>;
    /**
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId: pulumi.Input<string>;
}
