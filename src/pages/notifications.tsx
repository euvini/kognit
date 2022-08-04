import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "phosphor-react-native";
import { FlatList, VStack } from 'native-base';
import { Header } from '../components/header';
import { NotificationComponent } from '../components/notificationComponent';

interface IData {
  id: string
}

export function Notifications() {
  const navigation = useNavigation()
  const route: any = useRoute()

  return (
    <VStack flex={1}>
      <Header
        title='Notificações'
        OnPressIconLeft={() => navigation.goBack()}
        OnPressIconRight={() => { }}
        iconLeft={<Icon.ArrowLeft color='green' size="26px" />}
        iconRight={<Icon.Question color='green' size="26px" />}
        NotifyVisible={false}
      />
      <VStack flex={1} px={2}>
        <FlatList
          data={route.params.notifications}
          keyExtractor={(item: IData) => String(item.id)}
          renderItem={({ item }) => <NotificationComponent data={item} />}
        />
      </VStack>
    </VStack>
  );
}