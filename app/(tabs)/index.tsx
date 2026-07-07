import '@/global.css';
import { Link } from 'expo-router';
import { Image, Text, View,FlatList} from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import {styled} from 'nativewind';
import images from '@/constants/images';
import{ icons }from '@/constants/icons';
import { HOME_USER,HOME_BALANCE,UPCOMING_SUBSCRIPTIONS, HOME_SUBSCRIPTIONS } from '@/constants/data';
import { formatCurrency,formatSubscriptionDateTime } from '@/lib/utils';
import ListHeading from '@/components/listHeading';
import UpcomingSubscriptionsCard from '@/components/UpcomingSubscriptionsCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import React from 'react';
 
export default function App() {
  const SafeAreaView = styled(RNSafeAreaView)
  const [expandedSubscriptionId, setExpandedSubscriptionId] = React.useState<string | null>(null);
  
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
   
        <FlatList
        ListHeaderComponent={() => (
<>
   <View className='home-header'>
        <View className='home-user'> 
<Image source={images.avatar} className="home-avatar"/>
<Text className='home-user-name'>John Doe</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
       </View>

       <View className='home-balance-card'>
<Text className='home-balance-label'>Balance</Text>
<View className='home-balance-row'>
<Text className='home-balance-amount'>{formatCurrency(HOME_BALANCE.amount)}</Text>
<Text className='home-balance-date'>{formatSubscriptionDateTime(HOME_BALANCE.nextRenewalDate)}</Text>
</View>
       </View>

       <View className="mb-5">
        <ListHeading title="Upcoming Subscriptions" />
        <FlatList data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => <UpcomingSubscriptionsCard {...item}  />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
              <Text className="home-empty-state">No upcoming subscriptions</Text>

          )}
        />
       </View>
               <ListHeading title="All Subscriptions" />
</>
        )
        }
         keyExtractor={(item) => item.id}
          data={HOME_SUBSCRIPTIONS}
renderItem={({item})=> <SubscriptionCard {...item} expanded={expandedSubscriptionId === item.id} onPress={() => setExpandedSubscriptionId(expandedSubscriptionId === item.id ? null : item.id)}  />}
extraData={expandedSubscriptionId}
ItemSeparatorComponent={() => <View className="h-4"/>}
showsVerticalScrollIndicator={false}
ListEmptyComponent={() => (
  <Text className="home-empty-state">No subscriptions found</Text>
)}
contentContainerClassName="pb-20"
        />
      {/* <Link href="/onboarding" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Onboarding</Link>
            <Link href="/(auth)/sign-in" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Sign In</Link>
                  <Link href="/(auth)/sign-up" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Sign Up</Link>
                  <Link href='/subscriptions/spotify' className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Spotify</Link>
                  <Link className='mt-4' href={{
                    pathname:'/subscriptions/[id]',
                    params:{id:'claude-max'}
                  }}>Claude Max Subscription</Link> */}
    </SafeAreaView>
  );
}