import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getProjects(opts?: pulumi.InvokeOptions): Promise<GetProjectsResult> & GetProjectsResult;
/**
 * A collection of values returned by getProjects.
 */
export interface GetProjectsResult {
    readonly results: outputs.GetProjectsResult[];
    readonly totalCount: number;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
