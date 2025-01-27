import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
/**
 * `mongodbatlas..EncryptionAtRest` Atlas encrypts your data at rest using encrypted storage media.
 * Using keys you manage with AWS KMS, Atlas encrypts your data a second time when it writes it to the MongoDB encrypted storage engine.
 * You can use the following clouds: AWS CMK, AZURE KEY VAULT and GOOGLE KEY VAULT to encrypt the MongoDB master encryption keys.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find `groupId` in the official documentation.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as mongodbatlas from "@pulumi/mongodbatlas";
 *
 * const test = new mongodbatlas.EncryptionAtRest("test", {
 *     awsKms: {
 *         access_key_id: "AKIAIOSFODNN7EXAMPLE",
 *         customer_master_key_id: "030gce02-586d-48d2-a966-05ea954fde0g",
 *         enabled: true,
 *         region: "US_EAST_1",
 *         secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
 *     },
 *     azureKeyVault: {
 *         azure_environment: "AZURE",
 *         client_id: "g54f9e2-89e3-40fd-8188-EXAMPLEID",
 *         enabled: true,
 *         key_identifier: "https://EXAMPLEKeyVault.vault.azure.net/keys/EXAMPLEKey/d891821e3d364e9eb88fbd3d11807b86",
 *         key_vault_name: "EXAMPLEKeyVault",
 *         resource_group_name: "ExampleRGName",
 *         secret: "EXAMPLESECRET",
 *         subscription_id: "0ec944e3-g725-44f9-a147-EXAMPLEID",
 *         tenant_id: "e8e4b6ba-ff32-4c88-a9af-EXAMPLEID",
 *     },
 *     googleCloudKms: {
 *         enabled: true,
 *         key_version_resource_id: "projects/my-project-common-0/locations/us-east4/keyRings/my-key-ring-0/cryptoKeys/my-key-0/cryptoKeyVersions/1",
 *         service_account_key: "{\"type\": \"service_account\",\"project_id\": \"my-project-common-0\",\"private_key_id\": \"e120598ea4f88249469fcdd75a9a785c1bb3\",\"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEuwIBA(truncated)SfecnS0mT94D9\\n-----END PRIVATE KEY-----\\n\",\"client_email\": \"my-email-kms-0@my-project-common-0.iam.gserviceaccount.com\",\"client_id\": \"10180967717292066\",\"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\"token_uri\": \"https://accounts.google.com/o/oauth2/token\",\"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/my-email-kms-0%40my-project-common-0.iam.gserviceaccount.com\"}",
 *     },
 *     projectId: "<PROJECT-ID>",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/encryption_at_rest.html.markdown.
 */
export declare class EncryptionAtRest extends pulumi.CustomResource {
    /**
     * Get an existing EncryptionAtRest resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EncryptionAtRestState, opts?: pulumi.CustomResourceOptions): EncryptionAtRest;
    /**
     * Returns true if the given object is an instance of EncryptionAtRest.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is EncryptionAtRest;
    /**
     * Specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly awsKms: pulumi.Output<outputs.EncryptionAtRestAwsKms | undefined>;
    /**
     * Specifies Azure Key Vault configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly azureKeyVault: pulumi.Output<outputs.EncryptionAtRestAzureKeyVault | undefined>;
    /**
     * Specifies GCP KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly googleCloudKms: pulumi.Output<outputs.EncryptionAtRestGoogleCloudKms | undefined>;
    /**
     * The unique identifier for the project.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Create a EncryptionAtRest resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EncryptionAtRestArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering EncryptionAtRest resources.
 */
export interface EncryptionAtRestState {
    /**
     * Specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly awsKms?: pulumi.Input<inputs.EncryptionAtRestAwsKms>;
    /**
     * Specifies Azure Key Vault configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly azureKeyVault?: pulumi.Input<inputs.EncryptionAtRestAzureKeyVault>;
    /**
     * Specifies GCP KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly googleCloudKms?: pulumi.Input<inputs.EncryptionAtRestGoogleCloudKms>;
    /**
     * The unique identifier for the project.
     */
    readonly projectId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a EncryptionAtRest resource.
 */
export interface EncryptionAtRestArgs {
    /**
     * Specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly awsKms?: pulumi.Input<inputs.EncryptionAtRestAwsKms>;
    /**
     * Specifies Azure Key Vault configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly azureKeyVault?: pulumi.Input<inputs.EncryptionAtRestAzureKeyVault>;
    /**
     * Specifies GCP KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.
     */
    readonly googleCloudKms?: pulumi.Input<inputs.EncryptionAtRestGoogleCloudKms>;
    /**
     * The unique identifier for the project.
     */
    readonly projectId: pulumi.Input<string>;
}
