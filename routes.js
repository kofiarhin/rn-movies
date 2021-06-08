import React from 'react'
import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/Ionicons"

import { colors } from "./constants/theme"

// screens
import { Home, 
    Search, 
    Movies,
    Profile
 } from "./screens/index"
const Tabs = createBottomTabNavigator();

const TabsScreen = () =>  {
    return <Tabs.Navigator tabBarOptions={{
        style: {
            backgroundColor: "black"
        },
        activeTintColor: colors.yellow
    }}>
        <Tabs.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ size, color}) => <Icon name="home" size={size} color={color} />
            
        }} />

{/* search screen */}
        <Tabs.Screen  name="Search" component={ Search} options={{
            tabBarIcon: ({size, color}) => <Icon name="search" size={size} color={color} />
        }} />
        
        {/* movies screen */}
        <Tabs.Screen  name="Movies" component={Movies} options={{
            tabBarIcon: ({size, color}) => <Icon name="videocam-outline" size={size} color={color} />
        }} />

        {/* profile */}

         <Tabs.Screen  name="Profile" component={Profile} options={{
            tabBarIcon: ({size, color}) => <Icon name="person-circle-outline" size={size} color={color} />
        }} />
    </Tabs.Navigator> 
}

const Routes = () => {
    return <NavigationContainer>
        <TabsScreen />
    </NavigationContainer>
}

export default Routes;