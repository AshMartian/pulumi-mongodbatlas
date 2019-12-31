import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..Cluster` describes all Clusters by the provided project_id. The data source requires your Project ID.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
 *
 * > **IMPORTANT:**
 * <br> &#8226; Changes to cluster configurations can affect costs. Before making changes, please see [Billing](https://docs.atlas.mongodb.com/billing/).
 * <br> &#8226; If your Atlas project contains a custom role that uses actions introduced in a specific MongoDB version, you cannot create a cluster with a MongoDB version less than that version unless you delete the custom role.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/clusters.html.markdown.
 */
export declare function getClusters(args: GetClustersArgs, opts?: pulumi.InvokeOptions): Promise<GetClustersResult> & GetClustersResult;
/**
 * A collection of arguments for invoking getClusters.
 */
export interface GetClustersArgs {
    /**
     * The unique ID for the project to get the clusters.
     */
    readonly projectId: string;
}
/**
 * A collection of values returned by getClusters.
 */
export interface GetClustersResult {
    readonly projectId: string;
    /**
     * A list where each represents a Cluster. See Cluster below for more details.
     */
    readonly results: outputs.GetClustersResult[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
