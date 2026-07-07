import { View, Text,Image,Pressable } from 'react-native'
import React from 'react'
import { formatCurrency, formatSubscriptionDateTime } from '@/lib/utils'
import { clsx } from 'clsx'

const SubscriptionCard = ({name,price,currency,icon,billing,color,category,plan,renewalDate,onPress,expanded,paymentMethod,startDate}:SubscriptionCardProps) => {
  return (
    <Pressable className={clsx('sub-card', expanded ? 'sub-card-expanded' :  'bg-card')} style={ !expanded && color ? {backgroundColor: color} : undefined} onPress={onPress}>
 <View className="sub-head">
<View className="sub-main">
    <Image source={icon} className="sub-icon"/>
    <View className="sub-copy">
<Text numberOfLines={1} className="sub-title">
      {name}
    </Text>
    <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
{
    category?.trim() || plan?.trim() || (renewalDate?.trim() ? formatSubscriptionDateTime(renewalDate) : '')
}
    </Text>
    </View>
</View>
<View className="sub-price-box">
    <Text className="sub-price">
      {formatCurrency(price, currency)}
    </Text>
    <Text className="sub-billing">
      {billing}
    </Text>

</View>
 </View>
{
    expanded && (
        <View className="sub-body">
<View className="sub-details">
<View className="sub-row">
    <View className="sub-row-copy">
        <Text className="subLabel">Payment:</Text>
        <Text className="subValue" numberOfLines={1} ellipsizeMode="tail">
          {paymentMethod?.trim() || 'Not provided'}
        </Text>
      </View>
    </View>
    <View className="sub-row">
    <View className="sub-row-copy">
        <Text className="subLabel">Category:</Text>
        <Text className="subValue" numberOfLines={1} ellipsizeMode="tail">
          {category?.trim() || 'Not provided'}
        </Text>
      </View>
    </View>
    <View className="sub-row">
    <View className="sub-row-copy">
        <Text className="subLabel">Started:</Text>
        <Text className="subValue" numberOfLines={1} ellipsizeMode="tail">
          {startDate?.trim() ? formatSubscriptionDateTime(startDate) : 'Not provided'}
        </Text>
      </View>
    </View>
    <View className="sub-row">
    <View className="sub-row-copy">
        <Text className="subLabel">Renewal:</Text>
        <Text className="subValue" numberOfLines={1} ellipsizeMode="tail">
          {renewalDate?.trim() ? formatSubscriptionDateTime(renewalDate) : 'Not provided'}
        </Text>
      </View>
    </View>

</View>
</View>
    )
}
    </Pressable>
  )
}

export default SubscriptionCard