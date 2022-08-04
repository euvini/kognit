import { Button, IButtonProps, Text, VStack } from 'native-base';

type Props = IButtonProps & {
    title: String;
    isActive?: boolean;
    type: 'today' | 'actives' | 'news';
}

export default function Filter({ title, isActive = false, type, ...rest }: Props) {
    const colorType = 
    type === 'today' ? 'green.500' 
    : type === 'actives' ? 'green.500' 
    : type === 'news' ? 'green.500' : 'white'
  return (
    <Button
    variant='outline'
    borderWidth={isActive ? 1 : 0}
    borderBottomColor={colorType}
    rounded='lg'
    flex={1}
    size='sm'
    {...rest}
>
    <Text fontWeight='bold' color={'gray.900'} fontSize='md' >
        {title}
    </Text>
</Button>
  );
}