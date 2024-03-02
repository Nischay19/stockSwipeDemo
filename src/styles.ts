import {StyleSheet} from "react-native";
// import {SIZES} from "../../constants/Theme";
// import {useAppTheme} from "../../hooks/hooks";

const useStyles = () => {
    // const { colorTheme } = useAppTheme();

    return StyleSheet.create({
        root: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',   
        },
        padding: {
            paddingVertical: 50,
        },
        
        listingRoot: {
            // flex: 1,
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

          topNotch: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal:30,
          },
        //change the name
          button: {
            margin:7,
            padding: 5,
            backgroundColor: 'transparent', // Making the background transparent
            borderWidth:0.5,

          },
          buttonText: {
            color: 'black',
            fontSize: 16, // Example font size, adjust as needed
          },
        
          stockBodyContainers: {
            // flex: 1,
            flexDirection: 'column',
            padding: 5,
            margin: 5,
            borderRadius: 4,
            borderWidth:0.5,
            width: '99%',
          },
          tradeEntry: {
            flexDirection: 'row',
            padding:10,
            margin: 7,
            justifyContent: 'space-evenly',
            borderWidth: 0.5,
          },
          isOpenTrade: {
            backgroundColor: 'green',
          },
          isClosedTrade: {
            backgroundColor: 'red',
          },
          prePostButtons: {
            flexDirection: 'column',
            margin:10,
          },
        
          tradeOrderModal:{
            justifyContent: 'center',
            alignItems: 'center',   
            width: '90%',
            padding: 20,
            borderWidth: 0.5,
          },
          orderGridView:{
            marginHorizontal: 30,
            flexDirection: 'row',
            paddingVertical:5,
            justifyContent: 'space-between',
          },
          tableData:{
            paddingHorizontal:30,
          },

    });
}


export default useStyles;