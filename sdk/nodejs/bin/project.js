"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
/**
 * `mongodbatlas..Project` provides a Project resource. This allows project to be created.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const myProject = new mongodbatlas.Project("myProject", {
 *     orgId: "5b93ff2f96e82120w0aaec19",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/project.html.markdown.
 */
class Project extends pulumi.CustomResource {
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["clusterCount"] = state ? state.clusterCount : undefined;
            inputs["created"] = state ? state.created : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["orgId"] = state ? state.orgId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.orgId === undefined) {
                throw new Error("Missing required property 'orgId'");
            }
            inputs["name"] = args ? args.name : undefined;
            inputs["orgId"] = args ? args.orgId : undefined;
            inputs["clusterCount"] = undefined /*out*/;
            inputs["created"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {};
        }
        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Project.__pulumiType, name, inputs, opts);
    }
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state, opts) {
        return new Project(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }
}
exports.Project = Project;
/** @internal */
Project.__pulumiType = 'mongodbatlas:index/project:Project';
//# sourceMappingURL=project.js.map