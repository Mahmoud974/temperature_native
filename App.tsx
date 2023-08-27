import { ImageBackground, Text,  TextInput, TouchableOpacity, View } from 'react-native';
import coldbg from './assets/cold.png';
import hotbg from './assets/hot.png';
import tw from "twrnc"
import {  useState } from 'react';
import { calculToCelsius, calculToFahrenheint } from './formule';

export default function App() {
  const [addTemperature,setAddTemperature] = useState<number>(0);
  const [btnTemperature, setBtnTemperature] = useState<boolean>(true);
  const changeValue = (nbre:number) => setAddTemperature(nbre)
  const regex = /^[0-9]*\.?[0-9]+$/;

  return (
    <ImageBackground source={addTemperature <= 0 ? coldbg : hotbg  } style={tw `flex-1 justify-center  items-center`}>
      <View style={tw `flex justify-center items-center  text-center`} >
       <Text style={tw `text-9xl text-white font-bold`}>{btnTemperature ? calculToCelsius(addTemperature).toFixed() : calculToFahrenheint(addTemperature).toFixed()    }{btnTemperature ? '°F':'°C'  }</Text>
     </View>
     <View>
      <TextInput defaultValue='0' onChangeText={ changeValue  } style={tw `bg-white w-62 h-12 rounded-full flex my-6 pl-2 `} keyboardType='numeric' placeholder='Add the temperature' maxLength={3} autoFocus />
      <Text style={tw `absolute text-2xl mt-8 -ml-50 font-bold`}>{btnTemperature ? '°C' : '°F'}</Text>
     </View>
     <View>
      
      <TouchableOpacity style={tw ` bg-black px-6 py-4 rounded-full`} onPress={()=> setBtnTemperature(!btnTemperature)}>
      <Text style={tw `text-white font-bold`}> Convertir en {btnTemperature ?  '°F' : '°C'}
      </Text>
      </TouchableOpacity>
    </View>
      
    </ImageBackground >
  );
}
