import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps){
    const { user } = useContext(AuthContext)    
    return(
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="center">
                    <Text>Danilo S dos Santos</Text>
                    <Text color="gray.300" fontSize="small" >{user?.email}</Text>
                </Box>
            )}

            <Avatar size="md" name="Danilo Silva dos Santos" src="https://github.com/daniloitj.png"/>
        </Flex>
    );
}