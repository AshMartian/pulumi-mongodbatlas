import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..getNetworkContainers` describes all Network Peering Containers. The data source requires your Project ID.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_containers.html.markdown.
 */
export declare function getNetworkContainers(args: GetNetworkContainersArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkContainersResult> & GetNetworkContainersResult;
/**
 * A collection of arguments for invoking getNetworkContainers.
 */
export interface GetNetworkContainersArgs {
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: string;
    /**
     * Cloud provider for this Network peering container. Accepted values are AWS, GCP, and Azure.
     */
    readonly providerName: string;
}
/**
 * A collection of values returned by getNetworkContainers.
 */
export interface GetNetworkContainersResult {
    readonly projectId: string;
    /**
     * Cloud provider for this Network Peering connection. If omitted, Atlas sets this parameter to AWS.
     */
    readonly providerName: string;
    /**
     * A list where each represents a Network Peering Container.
     */
    readonly results: outputs.GetNetworkContainersResult[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
