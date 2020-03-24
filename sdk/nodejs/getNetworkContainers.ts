// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * `mongodbatlas..getNetworkContainers` describes all Network Peering Containers. The data source requires your Project ID.
 * 
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/network_containers.html.markdown.
 */
export function getNetworkContainers(args: GetNetworkContainersArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkContainersResult> & GetNetworkContainersResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetNetworkContainersResult> = pulumi.runtime.invoke("mongodbatlas:index/getNetworkContainers:getNetworkContainers", {
        "projectId": args.projectId,
        "providerName": args.providerName,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

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
