import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useCan } from "../../hooks/useCan";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    // const userCanSeeUser = useCan({
    //     permissions: ['metrics.list']
    // });
    const userCanSeeUser = useCan({
        roles: ['administrator', 'editor']
    });    

    return (
        <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
            <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>   
            { userCanSeeUser && <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>}
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
            <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>   
            <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>                                              
        </NavSection>                              
    </Stack>
    );
}