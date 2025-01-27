import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..NetworkContainer` describes a Network Peering Container. The resource requires your Project ID and container ID.
 *
 * > **IMPORTANT:** This resource creates one Network Peering container into which Atlas can deploy Network Peering connections. An Atlas project can have a maximum of one container for each cloud provider. You must have either the Project Owner or Organization Owner role to successfully call this endpoint.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_container.html.markdown.
 */
export declare function getNetworkContainer(args: GetNetworkContainerArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkContainerResult> & GetNetworkContainerResult;
/**
 * A collection of arguments for invoking getNetworkContainer.
 */
export interface GetNetworkContainerArgs {
    /**
     * The Network Peering Container ID.
     */
    readonly containerId: string;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getNetworkContainer.
 */
export interface GetNetworkContainerResult {
    /**
     * CIDR block that Atlas uses for your clusters. Atlas uses the specified CIDR block for all other Network Peering connections created in the project. The Atlas CIDR block must be at least a /24 and at most a /21 in one of the following [private networks](https://tools.ietf.org/html/rfc1918.html#section-3).
     */
    readonly atlasCidrBlock: string;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId: string;
    readonly containerId: string;
    /**
     * Unique identifier of the GCP project in which the Network Peering connection resides.
     */
    readonly gcpProjectId: string;
    /**
     * Name of the Network Peering connection in the Atlas project.
     */
    readonly networkName: string;
    readonly projectId: string;
    /**
     * Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
     */
    readonly providerName: string;
    /**
     * Indicates whether the project has Network Peering connections deployed in the container.
     */
    readonly provisioned: boolean;
    /**
     * Azure region where the container resides.
     */
    readonly region: string;
    /**
     * AWS region.
     */
    readonly regionName: string;
    /**
     * The name of the Azure VNet. This value is null until you provision an Azure VNet in the container.
     */
    readonly vnetName: string;
    /**
     * Unique identifier of the project’s VPC.
     */
    readonly vpcId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
