import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index"


const styles = StyleSheet.create({
    textStyle: {
        fontStyle: "normal",
        fontSize: 40,
        fontWeight: "bold",
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 22,
    },

    appBarWrapper: {
        marginHorinzontal: 22,
        marginTop: SIZES.small
    },

    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    location: {
        fontSize: SIZES.medium,
        fontFamily: "semibold",
        color: COLORS.gray,
    },

    cartCount: {
        position: "absolute",
        bottom: 16,
        right: 10,
        width: 20,
        height: 20,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: "center",
        zIndex:999
    },

    cartCountText: {
        color: COLORS.lightWhite,
        fontSize: SIZES.small,
        fontFamily: "semibold",
     
    },

});


export default styles;