import { HStack, Icon } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RiNotificationLine, RiLogoutBoxLine } from "react-icons/ri";
import { AuthContext } from "../../contexts/AuthContext";

export function NotificationsNav (){

    const { signOut } = useContext(AuthContext)

    return (
        <HStack
            spacing={['6', '8']}
            mx={['6', '8']}
            pr={['6', '8']}
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
        >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiLogoutBoxLine} fontSize="20" onClick={signOut}/>
        </HStack>
    );
}