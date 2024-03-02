import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import useStyles from '../styles';

import { Importer, ImporterField } from 'react-csv-importer';
import "react-csv-importer/dist/index.css";
import { apiRes } from '../constants/consts';

import { useNavigation } from '@react-navigation/native';


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


const Home = () => {
    const navigation = useNavigation();
    const styles = useStyles();
    const [showUploadWidget, setShowUploadWidget] = useState(true);
    const [shownextPage, setShowNextPage ] = useState(false);

    const [tradeData, setTradeData] = useState<TradeData[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchData();
        setTradeData(tasksFromServer);
        //TODO: yahape then we will set the loading as false and then show the next page
        setIsLoading(false);
        setShowNextPage(true);
      }
      if(isLoading) {
        getTasks();
      }
    }, [isLoading]);


    // navigation to listing screen
    const handleListingPress = () => {
        console.log(tradeData);
        if(shownextPage){
            navigation.navigate('ListingScreen' as never);
            console.log("is the navigation not working")
        }
    }
    
    
    // Get trade data from GET API
    const fetchData = async () => {
        // Simulating the api call delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        const mockData = apiRes;
        return mockData;

        //TODO:   write the data we need to fetch here
        // const res = await fetch('');
        // const data = await res.json();
        // return data;
    }

    //TODO: Push trades csv file to serves
    const postTrades = async (files : any) => {
      const res = await fetch('', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(files),
      })

      const data = await res.json(); // does the api give a response of all the post parsed data?
    }


    if(isLoading) {
      return (
        <View style={styles.root}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Parsing the CSV ... </Text>
        </View>
      );
    }

  return (
    <View style={styles.root}>
        {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appHeading}>StockSwipes</Text>
        {/* <Text style={styles.headerText}>Header</Text> */}
        <TextInput style={styles.searchBox} placeholder="Search" />
      </View>
        
      <View style={styles.padding}></View>

      {showUploadWidget && 
        <Importer
            dataHandler={async (rows) => {
            // required, receives a list of parsed objects based on defined fields and user column mapping;
            // may be called several times if file is large
            // (if this callback returns a promise, the widget will wait for it before parsing more data)
            console.log("received batch of rows", rows);
            // mock timeout to simulate processing
            await new Promise((resolve) => setTimeout(resolve, 5000));
            }}
            chunkSize={10000} // optional, internal parsing chunk size in bytes
            defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
            restartable={false} // optional, lets user choose to upload another file when import is complete
            onStart={({ file, fields }) => {
            // optional, invoked when user has mapped columns and started import
            console.log("starting import of file", file, "with fields", fields);
            }}
            onComplete={({ file, fields }) => {
            // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
            console.log("finished import of file", file, "with fields", fields);
            console.log(file);
            console.log(fields);
            //TODO: postTrades(file);
            }}
            onClose={() => {
            // optional, invoked when import is done and user clicked "Finish"
            // (if this is not specified, the widget lets the user upload another file)
            console.log("importer dismissed");
            setShowUploadWidget(false);

            setIsLoading(true); // so strt showing the loading screen
            
            }}
            // CSV options passed directly to PapaParse if specified:
            // delimiter={...}
            // newline={...}
            // quoteChar={...}
            // escapeChar={...}
            // comments={...}
            // skipEmptyLines={...}
            // delimitersToGuess={...}
            // chunkSize={...} // defaults to 10000
            // encoding={...} // defaults to utf-8, see FileReader API
        >
            {/* name of different head columns */}
            <ImporterField name="date" label="Date" />
            <ImporterField name="entry" label="Entry" />
            <ImporterField name="exit" label="Exit" />
            <ImporterField name="target" label="Target" optional />
            <ImporterField name="stopLoss" label="Stop Loss" optional />
            <ImporterField name="open" label="Trade isOpen" optional />
        </Importer>
      }
      {shownextPage && 
        <View>
            <Pressable onPress={handleListingPress} style={styles.button}>
                <Text>Go to Listing</Text>
            </Pressable>      
        </View>
      }

    </View>
  );
}

export default Home;  