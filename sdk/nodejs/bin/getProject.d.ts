import * as pulumi from "@pulumi/pulumi";
export declare function getProject(args: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> & GetProjectResult;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    readonly name: string;
}
/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    readonly clusterCount: number;
    readonly created: string;
    readonly name: string;
    readonly orgId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
