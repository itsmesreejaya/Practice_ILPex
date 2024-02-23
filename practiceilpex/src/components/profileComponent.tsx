import Constants from '../utils/Constants';
import { setStringItem } from '../utils/Utils';
import { userLogin } from '../context/userSlice';
import React from 'react';
import { View,Alert } from 'react-native';
import { Appbar, Menu, Divider, Provider } from 'react-native-paper';
import { useDispatch } from 'react-redux';


const ProfileComponent = () => {

    const handleLogout = () => {
       
        Alert.alert(
          'Logout',
          'Are you sure you want to logout?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Logout', onPress: () => performLogout() },
          ],
          { cancelable: false }
        );
      };


      const dispatch = useDispatch();


      const performLogout = () => {
        setStringItem(Constants.IS_LOGIN,'false')
        dispatch(userLogin(false))
        closeMenu();
      };


  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View>
        
        <Menu
            
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item onPress={handleLogout} title="Logout" />
        </Menu>
      </View>
    </Provider>
  );
};

export default ProfileComponent;
