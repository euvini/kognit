import { Box, Heading, HStack, IconButton, IIconButtonProps, Text, VStack } from 'native-base';

type Props = IIconButtonProps & {
  title: string
  OnPressIconLeft: () => void
  iconLeft: any
  OnPressIconRight: () => void
  iconRight: any
  numberNotification?: number
  NotifyVisible: boolean
}

export function Header({ title, OnPressIconLeft, iconLeft, OnPressIconRight, iconRight, numberNotification, NotifyVisible }: Props) {
  return (
    <HStack
      bg='white'
      h='24'
      justifyContent='space-between'
      alignItems='flex-end'
      pb={2}
      px={3}
    >
      <IconButton
        onPress={OnPressIconLeft}
        icon={iconLeft}
        _pressed={{
          backgroundColor: 'transparent'
        }}
      />
      <VStack h='30' >
        <Heading fontSize='lg'>{title}</Heading>
      </VStack>
      <HStack>
        <IconButton
          onPress={OnPressIconRight}
          icon={iconRight}
          _pressed={{
            backgroundColor: 'transparent'
          }}
        />
        {
          NotifyVisible === true &&
          <Box
            bg='red.500'
            rounded='full'
            position='absolute'
            h='5'
            w='5'
            alignItems='center'
            justifyContent='center'
            left={5}
          >
            <Text fontSize='xs' color='white'>{numberNotification}</Text>
          </Box>
        }
      </HStack>
    </HStack>
  );
}