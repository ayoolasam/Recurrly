import '@/global.css';
import { Link } from 'expo-router';
import { Text} from "react-native";
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';
import {styled} from 'nativewind';
 
export default function App() {
  const SafeAreaView = styled(RNSafeAreaView)
  
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
       <Text className="text-3xl font-sans-extrabold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Onboarding</Link>
            <Link href="/(auth)/sign-in" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Sign In</Link>
                  <Link href="/(auth)/sign-up" className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Sign Up</Link>
                  <Link href='/subscriptions/spotify' className='mt-4 bg-primary rounded-[100px] font-sans-bold text-white p-4'>Spotify</Link>
                  <Link className='mt-4' href={{
                    pathname:'/subscriptions/[id]',
                    params:{id:'claude-max'}
                  }}>Claude Max Subscription</Link>
    </SafeAreaView>
  );
}