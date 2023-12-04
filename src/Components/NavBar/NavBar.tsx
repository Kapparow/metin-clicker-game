import {Flex, Heading, Spacer, Text, HStack, Box} from '@chakra-ui/react';
export default function NavBar() {
    return (
        <Flex as="nav" p="10px">
            <Heading as="h1">Metin2 Game</Heading>
            <Spacer />
            <HStack>
                <Box bg="gray" color="white" fontWeight="bold" padding="10px">
                    5 Level
                </Box>
                <Text fontWeight="bold">Kasparow</Text>
            </HStack>
        </Flex>
    );
}
