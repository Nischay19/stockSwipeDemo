import React, {FunctionComponent, useState} from "react";
import { View, Text, TextInput, Button} from "react-native";
import useStyles from "./stylespretrade";




const PreTrade = () => {
   
// const {height} = useWindowDimensions();
const [stockName, setStockName] = useState("Tesla Inc.");

const styles = useStyles();


interface PreTradeInput {
    entry: string;
    exit: string;
    stop_loss: string;
    target: string;
  }

  //this miht be coming fron the api
  const tradeInput: PreTradeInput = {
    entry: "123.45",
    exit: "130.20",
    stop_loss: "118.80",
    target: "140.00",
  };
  
  

  const [tradeData, setTradeData] =useState({
    entry: "",
    exit: "",
    stop_loss: "",
    target: "",
  });

  const { entry, exit, stop_loss, target } = tradeData;



  const handleChange = (name: string, value: any) => {
    setTradeData(prevData => ({ ...prevData, [name]: value }));
    console.log(tradeData);
    console.log("why");
  }



  const handleSave = () => {
    console.log(tradeData);
      const requestBody = JSON.stringify(tradeData);
      //call the push api here
    console.log(requestBody);
  }



return (
  <View style={styles.rootBox}>
    <View style={styles.header}>
      <Text style={styles.appHeading} >StockSwipes</Text>
      {/* <Text style={styles.headerText}>Header</Text> */}
      <TextInput style={styles.searchBox} placeholder="Search" />
    </View>

    <View style={styles.stockBodyContainers}>
      <View style={[styles.column, styles.leftColumn]} >
        <Text style={styles.subHeading}>{stockName}</Text>

          <View style={styles.tradeInfo}>
            <View style={styles.tradeInfoData}>
              <Text>Entry</Text>
              <TextInput
                style={styles.tradeDataInput}
                value={entry}
                onChangeText={(text) => handleChange('entry', text)}
              />
              {/* TODO: also need to do styling for the View */}
              {/* <TextInput placeholder=" Entry " /> */}
            </View>
            <View style={styles.tradeInfoData}>
              <Text>Exit</Text>
              <TextInput
                style={styles.tradeDataInput}
                value={exit}
                onChangeText={(text) => handleChange('exit', text)}
              />
            </View>
            <View style={styles.tradeInfoData}>
              <Text>Stop Loss</Text>
              <TextInput
                style={styles.tradeDataInput}
                value={stop_loss}
                onChangeText={(text) => handleChange('stop_loss', text)}
              />
            </View>
            <View style={styles.tradeInfoData}>
              <Text>Target</Text>
              <TextInput
                style={styles.tradeDataInput}
                value={target}
                onChangeText={(text) => handleChange('target', text)}
              />
            </View>
          </View>
          <Button
            title="Submit"
            onPress={() => {
              handleSave();
              // Handle submission logic
            }}
          />
        <Text style={styles.subHeading}>Insights</Text>

        <View style={styles.tradeInsightsSelection}>
          <View style={styles.insightsList}></View>
          <View style={styles.insightsList}></View>
          <View style={styles.insightsList}></View>
        </View>
        <Text style={styles.subHeading}>Notes</Text>
        
        <View style={styles.notesDiv}></View>
      </View>
     
      <View style={[styles.column, styles.rightColumn]} >
        <Text style={styles.subHeading}>Charts</Text>

        <View style={styles.chartSpace}>
          <View style={styles.candleStickChart}></View>
          <View style={styles.candleStickChart}></View>
        </View>
      </View>

    </View>
  </View>
);
    
}


export default PreTrade;