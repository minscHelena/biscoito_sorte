import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



  
export default function App() {
  
  const [sorteado, setSorteado]=useState<boolean>(false);
  const [frase, setFrase] = useState<string>()

  const list_frases = [ //frases que o chatgpt gerou
    'Grandes mudanças estão chegando. Ou não. Estatisticamente, uma das duas coisas acontece.😁',
    'Você em breve receberá uma boa notícia. Provavelmente um cupom de desconto.🙏',
    'Hoje é um ótimo dia para tentar algo novo. Ou continuar procrastinando com consistência. 😌',
    'O universo conspira a seu favor. Às vezes ele só esquece de avisar. 🌌',
    'Uma grande oportunidade surgirá. Você provavelmente estará distraído olhando o celular. 📱',
    'Algo incrível vai acontecer. Eventualmente. Tenha paciência... tipo alguns anos. ⏳',
    'Alguém está pensando em você. Pode ser o algoritmo tentando vender alguma coisa. 🤖',
    'O sucesso está próximo. Mas ele pegou trânsito.🚗',
    'Um novo caminho se abrirá. Especialmente se você empurrar a porta.🥰',
    'O destino sorri para você. Às vezes com um sorriso meio debochado.✨',
    'Um novo desafio aparecerá. Você vai chamar isso de "segunda-feira". 😐',
    'O futuro é incerto. Mas o cansaço é garantido. 😴'
  ]
  

  function sortearFrase(){
    setSorteado(true)

    let indx =Math.floor(Math.random() * (11 - 0 + 1)) + 0; //sorteia um numero entre as posições da lista sen 0 o min e 11 o max
    console.log(indx)
    setFrase(list_frases[indx]);
  }

  function changeState(){ 
    return setSorteado(!sorteado)
  }

  return (
    <View style={styles.containerPai}>

      { sorteado ? (              //se sortear estiver como true vai mostrar a mensagem 
        <View style={styles.containerSorteio}>
          <Text style={styles.frase}>{frase}</Text>
          <Image 
            source={require('./assets/biscoito_aberto.png')}
            style={styles.imgAberta}
          />
          <TouchableOpacity onPress={changeState}> {/* volta ao estado de false e mostra a tela principal */}
            <Text style={styles.backText}>Voltar à Tela principal</Text>
          </TouchableOpacity>
        </View>
      ) : (                     //se estiver como falso, aparece o botão - essa tela aparee primeiro
        <View style={styles.container}>
          <Text style={styles.titulo}>Biscoito da Sorte</Text>
          <Text style={styles.subtitulo}>Veja o que a Bixie tem para te falar!</Text>
          <Image 
            source={require('./assets/biscoito_fechado.png')}
            style={styles.imgFechada}
          />
          <TouchableOpacity style={styles.btnSortear} onPress={sortearFrase}>   {/* chama função para sortear a frase ejá muda o estado para aparecer a outra tela */}        
            <Text style={styles.btnText}>Sortear uma frase</Text>
          </TouchableOpacity>
        </View>
      )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  containerPai:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // -------- tela de inicio ---------------
  container: {
   backgroundColor: '#ffffff',
   alignItems: 'center',
   justifyContent: 'center',
  },
  titulo:{
    color: '#d34392',
    fontSize: 45,
    fontWeight: 700,
    marginBottom: 30,

  },
  subtitulo : {
    color: '#000',
    fontSize: 25,
    marginBottom: '20%',
  },
  btnText:{
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
  },
  imgFechada:{
    width: 370,
    height: 290,
    marginBottom: 20,
  },
  btnSortear: {
    backgroundColor: '#d34392',
    borderRadius: 25,
    height: 70,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // -------- tela da mensagem ---------------
  containerSorteio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  frase:{
    color: '#d34392',
    fontSize: 30,
    fontWeight: 700,
    marginBottom: 30,
    textAlign: 'center',
  },
  backText:{
    fontWeight: 600,
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  imgAberta: {
    width: 370,
    height: 290,
    marginBottom: 20,
  }
});
