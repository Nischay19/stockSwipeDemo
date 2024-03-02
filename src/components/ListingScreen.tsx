import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // useWindowDimensions,
} from 'react-native';
import useStyles from "../styles";
import { useNavigation } from '@react-navigation/native';
import { apiRes } from "../constants/consts";

interface TradeData {
  date: string;
  netPnL: number;
  entryPrice: (number | null)[];
  exitPrice: (number | null)[];
  target: number;
  stopLoss: number;  
  totalTrades: number;
  volume: number;
  isOpen: boolean;
  preTradeId: number,
  postTradeId: number,
}

const ListingScreen = () => {
    const navigation = useNavigation();
    const trades = apiRes;
    const styles = useStyles();

    const [showOrderDetails, setShowOrderDetails] = useState(Array(trades.length).fill(false));

  
  
    //Filter and daterange buttons.
    const handleOnClick = () => {
      console.log('Button clicked!');
    };
  

    const preTradeClick = (index: number, entry: TradeData) => {
      //check if that entry has a pretrade id and then navigate
      //TODO: add a param to send the pretradid to pretrade screen. adding the param was weirdly not working on my laptop.
      if(entry.preTradeId){
        navigation.navigate('PreTrade' as never);
      }
      console.log("pre");
    }
  
    //TODO: Make a post trade screen different from the pretrade screen
    const postTradeClick = (index: number, entry: TradeData) => {
      console.log(entry, index, entry.postTradeId);
      console.log("post");
    }
  
  
    //open the position tab for the indexed position
    const handleTradePress = (index : number, entry: TradeData) => {
      
      const updatedShowOrderDetails = [...showOrderDetails];
      updatedShowOrderDetails[index] = !updatedShowOrderDetails[index];
      setShowOrderDetails(updatedShowOrderDetails);
      console.log(` ${index + 1} pressed`);
    }
  
  
    return (
      <View style={styles.listingRoot}>
        <View style={styles.header}>
          <Text style={styles.appHeading}>StockSwipes</Text>
          <TextInput style={styles.searchBox} placeholder="Search" />
        </View>
        <View style={styles.topNotch}>
          <TouchableOpacity style={styles.button} onPress={handleOnClick}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOnClick}>
            <Text style={styles.buttonText}>Date Range</Text>
          </TouchableOpacity>
  
        </View>
        
        <View style={styles.stockBodyContainers}>
          {trades.length > 0 ? (
  
            trades.map((entry, index) => (
              <View>
                <TouchableOpacity key={index} onPress={() => handleTradePress(index, entry)} activeOpacity={1}>
                  <View style={[styles.tradeEntry, entry.isOpen ? styles.isOpenTrade : styles.isClosedTrade]}>
                    <Text>Date: {entry.date}</Text>
                    <Text>Net P&L: {entry.netPnL}</Text>
                    <Text>Stop Loss: {entry.stopLoss}</Text>
                    <Text>Target: {entry.target}</Text>
                    <Text>Total Orders: {entry.totalTrades}</Text>
                    <Text>Volume: {entry.volume}</Text>
                    <View style={styles.prePostButtons}>
                      <TouchableOpacity style={styles.button} onPress={() => preTradeClick(index, entry)}>
                          <Text>Pre Trade</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button} onPress={() => postTradeClick(index, entry)}>
                        <Text>Post Trade</Text>
                      </TouchableOpacity>
                    </View>
                    
                  </View>
                </TouchableOpacity>
                { showOrderDetails[index] ? (
                  entry.totalTrades > 0 ? (
                    <View style={styles.tradeOrderModal}>
                      <Text>Orders of the position</Text>
                        {entry.entryPrice.map((entryPrice,orderIndex) => (
                          <View style={styles.orderGridView} key={orderIndex}>
                            <Text style={styles.tableData}>{orderIndex + 1}</Text>
                            <Text style={styles.tableData}>{entryPrice}</Text>
                            <Text style={styles.tableData}>{entry.exitPrice[orderIndex]}</Text>
                            <TouchableOpacity
                              style={[styles.button, styles.tableData]}
                              onPress={() => console.log(orderIndex)}
                            >
                              <Text>Pre Trade</Text>
                            </TouchableOpacity>
                          </View>
                          )
                        )}
                    </View>
                    ) : (<View style={styles.tradeOrderModal}> No orders to show for this position</View>)              
                  ) : null
                }
              </View>
            ))
          ) : (
            'No positions to show'
          )}
  
        </View>
      </View>
    );
  
}

export default ListingScreen;