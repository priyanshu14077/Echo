import { OrganizationList, useOrganizationList } from "@clerk/nextjs";
export const OrgSelectView = () => {
    return (
        <OrganizationList
        afterCreateOrganizationUrl="/"
        afterSelectOrganizationUrl="/"
        hidePersonal
        skipInvitationScreen />
    )
}