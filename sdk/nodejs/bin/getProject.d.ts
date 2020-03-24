import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..Project` describes a MongoDB Atlas Project. This represents a project that has been created.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find groupId in the official documentation.
 *
 * ## Example Usage
 *
 * ### Using projectId attribute to query
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
 * const testProject = testMongodbatlasProject.id.apply(id => mongodbatlas.getProject({
 *     projectId: id,
 * }));
 * ```
 *
 * ### Using name attribute to query
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
 * const testProject = testMongodbatlasProject.name.apply(name => mongodbatlas.getProject({
 *     name: name,
 * }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/d/project.html.markdown.
 */
export declare function getProject(args?: GetProjectArgs, opts?: pulumi.InvokeOptions): Promise<GetProjectResult> & GetProjectResult;
/**
 * A collection of arguments for invoking getProject.
 */
export interface GetProjectArgs {
    /**
     * The unique ID for the project.
     */
    readonly name?: string;
    /**
     * The unique ID for the project.
     */
    readonly projectId?: string;
}
/**
 * A collection of values returned by getProject.
 */
export interface GetProjectResult {
    readonly clusterCount: number;
    readonly created: string;
    /**
     * The name of the project you want to create. (Cannot be changed via this Provider after creation.)
     */
    readonly name?: string;
    /**
     * The ID of the organization you want to create the project within.
     * *`clusterCount` - The number of Atlas clusters deployed in the project.
     * *`created` - The ISO-8601-formatted timestamp of when Atlas created the project.
     * * `teams.#.team_id` - The unique identifier of the team you want to associate with the project. The team and project must share the same parent organization.
     * * `teams.#.role_names` - Each string in the array represents a project role assigned to the team. Every user associated with the team inherits these roles.
     * The following are valid roles:
     * * `GROUP_OWNER`
     * * `GROUP_READ_ONLY`
     * * `GROUP_DATA_ACCESS_ADMIN`
     * * `GROUP_DATA_ACCESS_READ_WRITE`
     * * `GROUP_DATA_ACCESS_READ_ONLY`
     * * `GROUP_CLUSTER_MANAGER`
     */
    readonly orgId: string;
    readonly projectId?: string;
    readonly teams: outputs.GetProjectTeam[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
