import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..ProjectIpWhitelist` provides an IP Whitelist entry resource. The whitelist grants access from IPs or CIDRs to clusters within the Project.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
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
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId: pulumi.Output<string>;
    readonly whitelists: pulumi.Output<outputs.ProjectIpWhitelistWhitelist[]>;
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
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId?: pulumi.Input<string>;
    readonly whitelists?: pulumi.Input<pulumi.Input<inputs.ProjectIpWhitelistWhitelist>[]>;
}
/**
 * The set of arguments for constructing a ProjectIpWhitelist resource.
 */
export interface ProjectIpWhitelistArgs {
    /**
     * The ID of the project in which to add the whitelist entry.
     */
    readonly projectId: pulumi.Input<string>;
    readonly whitelists: pulumi.Input<pulumi.Input<inputs.ProjectIpWhitelistWhitelist>[]>;
}
