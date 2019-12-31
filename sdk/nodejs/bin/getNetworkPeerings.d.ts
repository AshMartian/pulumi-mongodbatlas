import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..getNetworkPeerings` describes all Network Peering Connections.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_peerings.html.markdown.
 */
export declare function getNetworkPeerings(args: GetNetworkPeeringsArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkPeeringsResult> & GetNetworkPeeringsResult;
/**
 * A collection of arguments for invoking getNetworkPeerings.
 */
export interface GetNetworkPeeringsArgs {
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getNetworkPeerings.
 */
export interface GetNetworkPeeringsResult {
    readonly projectId: string;
    /**
     * A list where each represents a Network Peering Connection.
     */
    readonly results: outputs.GetNetworkPeeringsResult[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
