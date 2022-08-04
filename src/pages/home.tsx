import { HStack, VStack } from 'native-base';
import { Header } from '../components/header';
import * as Icon from "phosphor-react-native";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Filter from '../components/Filter';
import { useEffect, useState } from 'react';
import apiNotifications from '../services/apiNotifications';

export function Home() {
  const navigation = useNavigation()
  const [statusSelected, setStatusSelected] = useState<'today' | 'news' | 'actives'>('today')
  const [notifications, setNotifications] = useState([])

  const getNotifications = async () => {
    const { data } = await apiNotifications.get('posts?userId=1');
    setNotifications(data)
  }

  useEffect(() => {
    getNotifications();
  }, [])

  return (
    <VStack flex={1} >
      <Header
        title='Início'
        OnPressIconLeft={() => navigation.dispatch(DrawerActions.openDrawer())}
        OnPressIconRight={() => navigation.navigate('notifications', {
          notifications: notifications
        })}
        iconLeft={<Icon.List color='green' size="26px" />}
        iconRight={<Icon.Bell color='green' size="26px" />}
        numberNotification={notifications.length}
        NotifyVisible={notifications.length > 0 ? true : false}
      />
      <HStack mt={2} mx={2} justifyContent='space-between'>
        <Filter
          title='Hoje'
          isActive={statusSelected === 'today'}
          type='today'
          onPress={() => setStatusSelected('today')}
          _pressed={{
            backgroundColor: 'trasparent'
          }}
        />
        <Filter
          title='Ativos'
          isActive={statusSelected === 'actives'}
          type='actives'
          onPress={() => setStatusSelected('actives')}
          _pressed={{
            backgroundColor: 'trasparent'
          }}
        />
        <Filter
          title='Notícias'
          isActive={statusSelected === 'news'}
          type='news'
          onPress={() => setStatusSelected('news')}
          _pressed={{
            backgroundColor: 'trasparent'
          }}
        />
      </HStack>
    </VStack>
  );
}