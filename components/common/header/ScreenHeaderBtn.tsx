import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { btnImg } from './screenheader.style';
import styles from './screenheader.style'

type ScreenHeaderBtnProps = {
  iconUrl: any;
  dimension: string;
  handlePress: () => void;
};

const ScreenHeaderBtn : React.FC<ScreenHeaderBtnProps> = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source = {iconUrl}
        resizeMode='cover'
        style={btnImg(dimension as any)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn