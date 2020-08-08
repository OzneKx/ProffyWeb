import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:"https://avatars1.githubusercontent.com/u/64553441?s=460&u=e5457615f66b0a8976dcc012eaa45cdf7cdc3783&v=4"
          }}
        />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Kenzo De Albuquerque</Text>
            <Text style={styles.subject}>Programação</Text>
          </View>
      </View>

      <Text style={styles.bio}>
        Estudante.
        {'\n'}{'\n'}
        Aprendendo a programar.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 350,00</Text>
        </Text>
        
        <View style={styles.buttonContainer}>
          <RectButton style={{styles.favoriteButton, styles.favorited}}>
            /* <Image source={heartOutlineIcon}/> */
            <Image source={unfavoriteIcon}/>
          </RectButton>
        </View>

        <View style={styles.buttonContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em Contato</Text>
          </RectButton>
        </View>

      </View>
    </View>
  );
}

export default TeacherItem;
