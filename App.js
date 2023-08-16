import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    
    <View style={style.container}> 
    <View style={style.header}> 
        <Text style={style.titulo}>AH DEGAH</Text></View>

    <ScrollView>

<View style={style.linhas}>

    <View style={style.cards}> 
    <Image style={style.heinek} resizeMode="contain" source={require("/assets/heineken.webp")} />
    <Text style={style.t}> 
    Cerveja Heineken Lata 350ml 
    </Text>
    <Text style={style.preco}> R$ 5,39</Text>
    <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

    <View style={style.cards}>
    <Image style={style.itaipava} resizeMode="contain" source={require("/assets/itaipava.png")} /> 
        <Text style={style.t}> 
    Cerveja Itaipava Lata 269ml
    </Text> 
    <Text style={style.preco}> R$ 2,50 </Text>
     <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

</View>

<View style={style.linhas}>

    <View style={style.cards}> 
    <Image style={style.caber} resizeMode="contain" source={require("/assets/cabernet.png")} />
    <Text style={style.t}> 
    Vinho Carbernet Sauvignon 750 ML
    </Text>
    <Text style={style.preco}> R$ 142,90</Text>
    <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

    <View style={style.cards}>
    <Image style={style.ballan} resizeMode="contain" source={require("/assets/wballantines.webp")} /> 
        <Text style={style.t}> 
    Ballantine's Finest Whisky Escocês 1L
    </Text> 
    <Text style={style.preco}> R$ 2,50 </Text>
     <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

</View>

<View style={style.linhas}>

    <View style={style.cards}> 
    <Image style={style.heinek} resizeMode="contain" source={require("/assets/pitu.png")} />
    <Text style={style.t}> 
    Cachaça Pitú 350ml
    </Text>
    <Text style={style.preco}> R$ 4,90</Text>
    <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

    <View style={style.cards}>
    <Image style={style.itaipava} resizeMode="contain" source={require("/assets/brahma.webp")} /> 
        <Text style={style.t}> 
    Cerveja Brahma 1L
    </Text> 
    <Text style={style.preco}> R$ 8,50 </Text>
     <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

</View>

<View style={style.linhas}>

    <View style={style.cards}> 
    <Image style={style.coquine} resizeMode="contain" source={require("/assets/coquine.png")} />
    <Text style={style.t}> 
     Refrigerante Coca-Cola Garrafa 1L
    </Text>
    <Text style={style.preco}> R$ 7,99</Text>
    <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

    <View style={style.cards}>
    <Image style={style.gjesus} resizeMode="contain" source={require("/assets/gjesus.png")} /> 
        <Text style={style.t}> 
    Guaraná Jesus Lata 350ml
    </Text> 
    <Text style={style.preco}> R$ 5,99 </Text>
     <Image style={style.buy} resizeMode="contain" source={require("/assets/buy.png")}/>
    </View>

</View>
    <View style={style.cards}>
    <Text>Ah Degah - João Pedro | Nathan Souza 2k23</Text>
  </View>
    </ScrollView>
   </View>
  )
}
  const style = StyleSheet.create({
      container: {
      flex: 1,
      display: 'flex',
      backgroundColor: '#fffff',
      justifyContent: 'center',
      alignItems: 'center'
    },
      t: {
        display: 'flex',
        textAlign: 'left',
        color: '#000',
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      },
      linhas: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#000000',
        border: 5
      },
      header: {
        width: '100%',
        height: 80,
        display: 'flex 1',
        justifyContent: 'center',
        backgroundColor: '#363636'
      },
      titulo: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'whitesmoke'
      },
      itaipava: {
        width: 250,
        height: 130,
        marginTop: 50
      },
      heinek: {
        width: 250,
        height: 150,
        marginTop: 30
      },
      coquine: {
        width: 250,
        height: 150,
        marginTop: 30
      },
      gjesus:{
        width: 250,
        height: 130,
        marginTop: 50
      },
      buy: {
        width: 150,
        height: 75
      },
      cards: {
        flex: 1,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#fffff',
        borderRadius: '50%',
        padding: 5
      },
      preco: {
        fontWeight: 'bold',
        fontSize: 19
      },
      ballan: {
        marginTop: 40,
        width: 200,
        height: 200
      },
      caber: {
        marginTop: 40,
        width: 200,
        height: 200
      }
   });



