import * as pulumi from "@pulumi/pulumi";
/**
 * `mongodbatlas..NetworkPeering` provides a Network Peering Connection resource. The resource lets you create, edit and delete network peering connections. The resource requires your Project ID.  Ensure you have first created a Network Container.  See the networkContainer resource and examples below.
 *
 * > **GCP AND AZURE ONLY:** You must enable Connect via Peering Only mode to use network peering.
 *
 * > **AZURE ONLY:** To create the peering request with an Azure VNET, you must grant Atlas the following permissions on the virtual network.
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/read
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/write
 *     Microsoft.Network/virtualNetworks/virtualNetworkPeerings/delete
 *     Microsoft.Network/virtualNetworks/peer/action
 * For more information see https://docs.atlas.mongodb.com/security-vpc-peering/
 *
 * > **Create a Whitelist:** Ensure you whitelist the private IP ranges of the subnets in which your application is hosted in order to connect to your Atlas cluster.  See the projectIpWhitelist resource.
 *
 * > **NOTE:** Groups and projects are synonymous terms. You may find **group_id** in the official documentation.
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-mongodbatlas/blob/master/website/docs/r/network_peering.html.markdown.
 */
export declare class NetworkPeering extends pulumi.CustomResource {
    /**
     * Get an existing NetworkPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkPeeringState, opts?: pulumi.CustomResourceOptions): NetworkPeering;
    /**
     * Returns true if the given object is an instance of NetworkPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NetworkPeering;
    /**
     * Specifies the region where the peer VPC resides. For complete lists of supported regions, see [Amazon Web Services](https://docs.atlas.mongodb.com/reference/amazon-aws/).
     */
    readonly accepterRegionName: pulumi.Output<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly atlasCidrBlock: pulumi.Output<string>;
    /**
     * The Atlas GCP Project ID for the GCP VPC used by your atlas cluster that it is need to set up the reciprocal connection.
     */
    readonly atlasGcpProjectId: pulumi.Output<string>;
    readonly atlasId: pulumi.Output<string>;
    /**
     * The Atlas VPC Name is used by your atlas clister that it is need to set up the reciprocal connection.
     */
    readonly atlasVpcName: pulumi.Output<string>;
    /**
     * Account ID of the owner of the peer VPC.
     */
    readonly awsAccountId: pulumi.Output<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly azureDirectoryId: pulumi.Output<string>;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId: pulumi.Output<string>;
    /**
     * Unique identifier for the peering connection.
     */
    readonly connectionId: pulumi.Output<string>;
    /**
     * Unique identifier of the Atlas VPC container for the region. You can create an Atlas VPC container using the Create Container endpoint. You cannot create more than one container per region. To retrieve a list of container IDs, use the Get list of VPC containers endpoint.
     */
    readonly containerId: pulumi.Output<string>;
    /**
     * When `"status" : "FAILED"`, Atlas provides a description of the error.
     */
    readonly errorMessage: pulumi.Output<string>;
    /**
     * Description of the Atlas error when `status` is `Failed`, Otherwise, Atlas returns `null`.
     */
    readonly errorState: pulumi.Output<string>;
    /**
     * Error state, if any. The VPC peering connection error state value can be one of the following: `REJECTED`, `EXPIRED`, `INVALID_ARGUMENT`.
     */
    readonly errorStateName: pulumi.Output<string>;
    /**
     * GCP project ID of the owner of the network peer.
     */
    readonly gcpProjectId: pulumi.Output<string>;
    /**
     * Name of the network peer to which Atlas connects.
     */
    readonly networkName: pulumi.Output<string>;
    /**
     * The Network Peering Container ID.
     */
    readonly peerId: pulumi.Output<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Output<string>;
    /**
     * Cloud provider for this VPC peering connection. (Possible Values `AWS`, `AZURE`, `GCP`).
     */
    readonly providerName: pulumi.Output<string>;
    /**
     * Name of your Azure resource group.
     */
    readonly resourceGroupName: pulumi.Output<string>;
    /**
     * Peer VPC CIDR block or subnet.
     */
    readonly routeTableCidrBlock: pulumi.Output<string>;
    /**
     * Status of the Atlas network peering connection: `ADDING_PEER`, `AVAILABLE`, `FAILED`, `DELETING`, `WAITING_FOR_USER`.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The VPC peering connection status value can be one of the following: `INITIATING`, `PENDING_ACCEPTANCE`, `FAILED`, `FINALIZING`, `AVAILABLE`, `TERMINATING`.
     */
    readonly statusName: pulumi.Output<string>;
    /**
     * Name of your Azure VNet.
     */
    readonly vnetName: pulumi.Output<string>;
    /**
     * Unique identifier of the peer VPC.
     */
    readonly vpcId: pulumi.Output<string>;
    /**
     * Create a NetworkPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkPeeringArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NetworkPeering resources.
 */
export interface NetworkPeeringState {
    /**
     * Specifies the region where the peer VPC resides. For complete lists of supported regions, see [Amazon Web Services](https://docs.atlas.mongodb.com/reference/amazon-aws/).
     */
    readonly accepterRegionName?: pulumi.Input<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly atlasCidrBlock?: pulumi.Input<string>;
    /**
     * The Atlas GCP Project ID for the GCP VPC used by your atlas cluster that it is need to set up the reciprocal connection.
     */
    readonly atlasGcpProjectId?: pulumi.Input<string>;
    readonly atlasId?: pulumi.Input<string>;
    /**
     * The Atlas VPC Name is used by your atlas clister that it is need to set up the reciprocal connection.
     */
    readonly atlasVpcName?: pulumi.Input<string>;
    /**
     * Account ID of the owner of the peer VPC.
     */
    readonly awsAccountId?: pulumi.Input<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly azureDirectoryId?: pulumi.Input<string>;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId?: pulumi.Input<string>;
    /**
     * Unique identifier for the peering connection.
     */
    readonly connectionId?: pulumi.Input<string>;
    /**
     * Unique identifier of the Atlas VPC container for the region. You can create an Atlas VPC container using the Create Container endpoint. You cannot create more than one container per region. To retrieve a list of container IDs, use the Get list of VPC containers endpoint.
     */
    readonly containerId?: pulumi.Input<string>;
    /**
     * When `"status" : "FAILED"`, Atlas provides a description of the error.
     */
    readonly errorMessage?: pulumi.Input<string>;
    /**
     * Description of the Atlas error when `status` is `Failed`, Otherwise, Atlas returns `null`.
     */
    readonly errorState?: pulumi.Input<string>;
    /**
     * Error state, if any. The VPC peering connection error state value can be one of the following: `REJECTED`, `EXPIRED`, `INVALID_ARGUMENT`.
     */
    readonly errorStateName?: pulumi.Input<string>;
    /**
     * GCP project ID of the owner of the network peer.
     */
    readonly gcpProjectId?: pulumi.Input<string>;
    /**
     * Name of the network peer to which Atlas connects.
     */
    readonly networkName?: pulumi.Input<string>;
    /**
     * The Network Peering Container ID.
     */
    readonly peerId?: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId?: pulumi.Input<string>;
    /**
     * Cloud provider for this VPC peering connection. (Possible Values `AWS`, `AZURE`, `GCP`).
     */
    readonly providerName?: pulumi.Input<string>;
    /**
     * Name of your Azure resource group.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Peer VPC CIDR block or subnet.
     */
    readonly routeTableCidrBlock?: pulumi.Input<string>;
    /**
     * Status of the Atlas network peering connection: `ADDING_PEER`, `AVAILABLE`, `FAILED`, `DELETING`, `WAITING_FOR_USER`.
     */
    readonly status?: pulumi.Input<string>;
    /**
     * The VPC peering connection status value can be one of the following: `INITIATING`, `PENDING_ACCEPTANCE`, `FAILED`, `FINALIZING`, `AVAILABLE`, `TERMINATING`.
     */
    readonly statusName?: pulumi.Input<string>;
    /**
     * Name of your Azure VNet.
     */
    readonly vnetName?: pulumi.Input<string>;
    /**
     * Unique identifier of the peer VPC.
     */
    readonly vpcId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NetworkPeering resource.
 */
export interface NetworkPeeringArgs {
    /**
     * Specifies the region where the peer VPC resides. For complete lists of supported regions, see [Amazon Web Services](https://docs.atlas.mongodb.com/reference/amazon-aws/).
     */
    readonly accepterRegionName?: pulumi.Input<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly atlasCidrBlock?: pulumi.Input<string>;
    /**
     * The Atlas GCP Project ID for the GCP VPC used by your atlas cluster that it is need to set up the reciprocal connection.
     */
    readonly atlasGcpProjectId?: pulumi.Input<string>;
    /**
     * The Atlas VPC Name is used by your atlas clister that it is need to set up the reciprocal connection.
     */
    readonly atlasVpcName?: pulumi.Input<string>;
    /**
     * Account ID of the owner of the peer VPC.
     */
    readonly awsAccountId?: pulumi.Input<string>;
    /**
     * Unique identifier for an Azure AD directory.
     */
    readonly azureDirectoryId?: pulumi.Input<string>;
    /**
     * Unique identifer of the Azure subscription in which the VNet resides.
     */
    readonly azureSubscriptionId?: pulumi.Input<string>;
    /**
     * Unique identifier of the Atlas VPC container for the region. You can create an Atlas VPC container using the Create Container endpoint. You cannot create more than one container per region. To retrieve a list of container IDs, use the Get list of VPC containers endpoint.
     */
    readonly containerId: pulumi.Input<string>;
    /**
     * GCP project ID of the owner of the network peer.
     */
    readonly gcpProjectId?: pulumi.Input<string>;
    /**
     * Name of the network peer to which Atlas connects.
     */
    readonly networkName?: pulumi.Input<string>;
    /**
     * The unique ID for the project to create the database user.
     */
    readonly projectId: pulumi.Input<string>;
    /**
     * Cloud provider for this VPC peering connection. (Possible Values `AWS`, `AZURE`, `GCP`).
     */
    readonly providerName: pulumi.Input<string>;
    /**
     * Name of your Azure resource group.
     */
    readonly resourceGroupName?: pulumi.Input<string>;
    /**
     * Peer VPC CIDR block or subnet.
     */
    readonly routeTableCidrBlock?: pulumi.Input<string>;
    /**
     * Name of your Azure VNet.
     */
    readonly vnetName?: pulumi.Input<string>;
    /**
     * Unique identifier of the peer VPC.
     */
    readonly vpcId?: pulumi.Input<string>;
}
