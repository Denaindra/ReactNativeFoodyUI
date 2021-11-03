import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import color from "../assets/colors/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Catergories from "../assets/data/categoriesData";
import PopularData from "../assets/data/popularData";
import Entypo from "react-native-vector-icons/Entypo";

const renderItems = ({ item }) => (
  <View style={styles.Itemcell}>
    <Image source={item.image} style={styles.ItemcellImage} />
  </View>
);
function Details({ route, navigation }) {
  const { selectedItem } = route.params;

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
        <View style={styles.headerBackArrow}>
          <Ionicons name="chevron-back" size={8} color={color.text} />
        </View>
        </TouchableOpacity>
        <View style={styles.headerStart}>
          <Entypo name="star" size={10} color={color.text} />
        </View>
      </View>

      {/* title View */}
      <View style={styles.titleView}>
        <Text style={styles.titleViewFoodname}>{selectedItem.title}</Text>
        <Text style={styles.titleViewFoodprice}>${selectedItem.price}</Text>
      </View>

      {/* detailsSection */}
      <View style={styles.detailsSection}>
        <View>
          <View>
            <Text style={styles.titleSection}>Size</Text>
            <Text style={styles.titleDescription}>
              {selectedItem.sizeName} {selectedItem.sizeNumber}"
            </Text>
          </View>
          <View style={styles.titleSectionSpace}>
            <Text style={styles.titleSection}>Crust</Text>
            <Text style={styles.titleDescription}>{selectedItem.crust}</Text>
          </View>
          <View style={styles.titleSectionSpace}>
            <Text style={styles.titleSection}>Delivery in</Text>
            <Text style={styles.titleDescription}>
              {selectedItem.deliveryTime} min
            </Text>
          </View>
        </View>
        <Image
          source={selectedItem.image}
          style={styles.PopularItemcellImage}
        />
      </View>

      {/* ingredets */}
      <View style={styles.ingredients}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <FlatList
          data={selectedItem.ingredients}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={styles.OrderButtonView}>
        <View style={styles.OrderButton}>
          <Text style={styles.OrderButtonText}>Place an order</Text>
          <Feather name="chevron-right" size={15} color={color.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    OrderButtonView:{
    marginTop:58
    },
  OrderButtonText: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Montserrat-Bold",
    marginBottom: 2,
  },
  OrderButton: {
    height: 62,
    backgroundColor: color.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal:20, // or alignSelf: "center" with specify height,
    borderRadius:50
  },

  ingredientsTitle: {
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 17,
    fontFamily: "Montserrat-Bold",
  },
  ingredients: {
    marginLeft: 20,
  },
  Itemcell: {
    width: 100,
    height: 80,
    elevation: 1,
    marginHorizontal: 5,
    shadowColor: color.textLight,
    borderRadius: 15,
    backgroundColor: color.white,
  },
  ItemcellImage: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  titleSectionSpace: {
    marginTop: 20,
  },
  PopularItemcellImage: {
    marginLeft: "10%",
    resizeMode: "contain",
    width: 296,
    height: 176,
  },
  detailsSection: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  titleDescription: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Montserrat-Bold",
    color: color.text,
  },
  titleSection: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "Montserrat-Regular",
    color: color.textLight,
  },
  titleViewFoodprice: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 39,
    width: 172,
    height: 78,
    fontFamily: "Montserrat-Bold",
    color: color.price,
    marginTop: 20,
    marginLeft: 20,
  },
  titleViewFoodname: {
    fontSize: 32,
    fontFamily: "Montserrat-Bold",
    lineHeight: 39,
    width: 172,
    height: 78,

    marginLeft: 20,
  },
  titleView: {
    marginTop: 30,
  },
  headerBackArrow: {
    height: 40,
    width: 40,
    borderColor: color.textLight,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerStart: {
    height: 40,
    width: 40,
    backgroundColor: color.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
   
  },
});
export default Details;
