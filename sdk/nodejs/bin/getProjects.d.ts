import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..getProjects` describe all Projects. This represents projects that have been created.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const testMongodbatlasProject = new mongodbatlas.Project("test", {
 *     orgId: "<ORG_ID>",
 *     teams: [
 *         {
 *             roleNames: ["GROUP_OWNER"],
 *             teamId: "5e0fa8c99ccf641c722fe645",
 *         },
 *         {
 *             roleNames: [
 *                 "GROUP_READ_ONLY",
 *                 "GROUP_DATA_ACCESS_READ_WRITE",
 *             ],
 *             teamId: "5e1dd7b4f2a30ba80a70cd4rw",
 *         },
 *     ],
 * });
 * const testProject = mongodbatlas.getProject();
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/projects.html.markdown.
 */
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
