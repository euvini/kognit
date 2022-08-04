import { Box, Heading, HStack, IconButton, Text, VStack } from 'native-base';
import * as Icon from "phosphor-react-native";

export function NotificationComponent({ data }) {
    return (
        <HStack my={2} borderBottomWidth={0.5} borderBottomColor='gray.400' >
            <VStack w='300px' mr={6} >
                <Heading fontSize='md' >{data.title}</Heading>
                <Text>{data.body}</Text>
                <Text my={2} color='gray.500'>03/08/2022 às 16:44</Text>
            </VStack>
            <VStack flex={1} alignSelf='center' >
                <IconButton icon={<Icon.Trash color='red' size={26} />} />
            </VStack>
        </HStack>
    );
}