import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..NetworkContainer` provides a Network Peering Container resource. The resource lets you create, edit and delete network peering containers. The resource requires your Project ID.
 *
 * > **IMPORTANT:** This resource creates one Network Peering container into which Atlas can deploy Network Peering connections. An Atlas project can have a maximum of one container for each cloud provider. You must have either the Project Owner or Organization Owner role to successfully call this endpoint.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 *
 * ## Example Usage
 *
 * ### Example with GCP
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.NetworkContainer("test", {
 *     atlasCidrBlock: "10.8.0.0/21",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerName: "GCP",
 * });
 * ```
 *
 * ### Example with Azure
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.NetworkContainer("test", {
 *     atlasCidrBlock: "10.8.0.0/21",
 *     projectId: "<YOUR-PROJECT-ID>",
 *     providerName: "AZURE",
 *     region: "US_EAST_2",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/network_container.html.markdown.
 */
export declare class NetworkContainer extends pulumi.CustomResource {
    /**
     * Get an existing NetworkContainer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkContainerState, opts?: pulumi.CustomResourceOptions): NetworkContainer;
    /**
     * Returns true if the given object is an instance of NetworkContainer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkContainer;
    /**
     * CIDR block that Atlas uses for your clusters. Atlas uses the specified CIDR block for all other Network Peering connections created in the project. The Atlas CIDR block must be at least a /24 and at most a /21 in one of the following [private networks](https://tools.ietf.org/html/rfc1918.html#section-3).
     */
    readonly atlasCidrBlock: pulumi.Output<string>;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId: pulumi.Output<string>;
    /**
     * The Network Peering Container ID.
     */
    readonly containerId: pulumi.Output<string>;
    /**
     * Unique identifier of the GCP project in which the Network Peering connection resides.
     */
    readonly gcpProjectId: pulumi.Output<string>;
    /**
     * Name of the Network Peering connection in the Atlas project.
     */
    readonly networkName: pulumi.Output<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
     */
    readonly providerName: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the project has Network Peering connections deployed in the container.
     */
    readonly provisioned: pulumi.Output<boolean>;
    /**
     * Azure region where the container resides.
     */
    readonly region: pulumi.Output<string>;
    /**
     * AWS region.
     */
    readonly regionName: pulumi.Output<string>;
    /**
     * The name of the Azure VNet. This value is null until you provision an Azure VNet in the container.
     */
    readonly vnetName: pulumi.Output<string>;
    /**
     * Unique identifier of the project’s VPC.
     */
    readonly vpcId: pulumi.Output<string>;
    /**
     * Create a NetworkContainer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkContainerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkContainer resources.
 */
export interface NetworkContainerState {
    /**
     * CIDR block that Atlas uses for your clusters. Atlas uses the specified CIDR block for all other Network Peering connections created in the project. The Atlas CIDR block must be at least a /24 and at most a /21 in one of the following [private networks](https://tools.ietf.org/html/rfc1918.html#section-3).
     */
    readonly atlasCidrBlock?: pulumi.Input<string>;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId?: pulumi.Input<string>;
    /**
     * The Network Peering Container ID.
     */
    readonly containerId?: pulumi.Input<string>;
    /**
     * Unique identifier of the GCP project in which the Network Peering connection resides.
     */
    readonly gcpProjectId?: pulumi.Input<string>;
    /**
     * Name of the Network Peering connection in the Atlas project.
     */
    readonly networkName?: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Indicates whether the project has Network Peering connections deployed in the container.
     */
    readonly provisioned?: pulumi.Input<boolean>;
    /**
     * Azure region where the container resides.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * AWS region.
     */
    readonly regionName?: pulumi.Input<string>;
    /**
     * The name of the Azure VNet. This value is null until you provision an Azure VNet in the container.
     */
    readonly vnetName?: pulumi.Input<string>;
    /**
     * Unique identifier of the project’s VPC.
     */
    readonly vpcId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkContainer resource.
 */
export interface NetworkContainerArgs {
    /**
     * CIDR block that Atlas uses for your clusters. Atlas uses the specified CIDR block for all other Network Peering connections created in the project. The Atlas CIDR block must be at least a /24 and at most a /21 in one of the following [private networks](https://tools.ietf.org/html/rfc1918.html#section-3).
     */
    readonly atlasCidrBlock: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Azure region where the container resides.
     */
    readonly region?: pulumi.Input<string>;
    /**
     * AWS region.
     */
    readonly regionName?: pulumi.Input<string>;
}
