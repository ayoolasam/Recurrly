import '@/global.css';
import { Link } from 'expo-router';
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className='mt-4 bg-primary rounded-[100px] text-white p-4'>Onboarding</Link>
            <Link href="/(auth)/sign-in" className='mt-4 bg-primary rounded-[100px] text-white p-4'>Sign In</Link>
                  <Link href="/(auth)/sign-up" className='mt-4 bg-primary rounded-[100px] text-white p-4'>Sign Up</Link>
                  <Link href='/subscriptions/spotify' className='mt-4 bg-primary rounded-[100px] text-white p-4'>Spotify</Link>
                  <Link href={{
                    pathname:'/subscriptions/[id]',
                    params:{id:'claude-max'}
                  }}>Claude Max Subscription</Link>
    </View>
  );
}