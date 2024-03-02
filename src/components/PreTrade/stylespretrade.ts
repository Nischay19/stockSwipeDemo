import {StyleSheet} from "react-native";
// import {SIZES} from "../../constants/Theme";
// import {useAppTheme} from "../../hooks/hooks";

const useStyles = () => {
    // const { colorTheme } = useAppTheme();

    return StyleSheet.create({
        rootBox: {
            flex: 1,
            flexDirection: 'column',
          },
          header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 0.3,
            borderBottomColor: 'black',
            height: 50,
            width: '100%',
          },
          appHeading: {
            padding: 5,
            margin: 5,
            fontSize: 27
          },
          searchBox: {
            borderWidth: 0.5,
            borderRadius: 4,
            padding: 5,
            margin: 11,
            width: 170,
          },
          stockBodyContainers: {
            flex: 1,
            flexDirection: 'row',
          },
          column: {
            flex: 1,
          },
          leftColumn: {
            width: '50%',
            flexDirection: 'column',
            // backgroundColor: 'white',
            padding: 20,
            // height: '100%',
          },
          subHeading: { 
            margin: 10,
            fontSize: 20,
          },
          tradeInfo: {
            flexDirection: 'column',
            // flex: 1,
            margin: 10,
          },
          tradeInfoData: {
            flexDirection: 'row',
            width: '60%',
            // borderWidth: 0.3,
            // borderColor: 'black',
            // borderBlockColor: 'grey',
            // borderRadius: 3,
            padding: 5,
            margin: 5,
          },
          tradeDataInput: {
            width: '60%',
            borderWidth: 0.3,
            // borderColor: 'blue',
            padding: 10,
            margin: 5,
          },
          tradeInsightsSelection:{
            marginTop:10,
            // flex: 1,
            flexDirection: 'column',
            margin: 5,
          },        
          insightsList: {
            borderRadius:3,
            borderWidth: 0.3,
            width: '90%',
            margin: 7,
            padding: 12,
          },
          notesDiv:{
            width: '80%',
            height: 190,
            borderRadius: 5,
            borderWidth: 0.4,
          },
        
          chartSpace: {
            width: '100%',
            borderRadius: 7,
            borderWidth: 0.4,
            height: '10%',
            flexDirection: 'row',
            flex: 0.7,
          },
          candleStickChart: {
            margin: 10,
            width:'40%',
            borderRadius: 7,
            borderWidth: 0.4,
            height: 200,
            flexDirection: 'row',
          },
        
          rightColumn: {
            width: '50%',
            flexDirection: 'column',
            padding: 20,
            backgroundColor: 'white',
            borderLeftWidth:0.3,
            borderLeftColor: 'black',
            borderRadius: 12,
            // height: '100%',
          },
    });
}




export default useStyles;