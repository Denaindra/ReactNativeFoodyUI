import React from "react";
import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity,ScrollView } from "react-native";
import color from "../assets/colors/color";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Catergories from "../assets/data/categoriesData";
import PopularData from "../assets/data/popularData";
import Entypo from "react-native-vector-icons/Entypo";

function Home({ navigation }) {
  const renderItemCatergories = ({ item }) => (
    <View
      style={[
        styles.cellview,
        {
          backgroundColor: item.selected ? color.primary : color.white,
          marginLeft: item.id == 1 ? 20 : 0,
        },
      ]}
    >
      <Image source={item.image} style={styles.cellimage} />
      <Text style={styles.celltext}>{item.title}</Text>
      <View
        style={[
          styles.cellbutton,
          {
            backgroundColor: item.selected ? color.white : color.secodary,
          },
        ]}
      >
        <Feather
          name="chevron-right"
          size={15}
          color={item.selected ? color.text : color.white}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* header */}
        <View style={styles.header}>
          <Image
            style={styles.profile}
            source={require("../assets/images/profile.png")}
          />
          <Feather name="align-right" size={30} color={color.text} />
        </View>
        {/* title */}
        <View style={styles.titlearea}>
          <Text style={styles.regularTitle}>Food</Text>
          <Text style={styles.boldTitle}>Delivery</Text>
        </View>
        {/* search */}
        <View style={styles.searchContaier}>
          <Feather name="search" size={16} color={color.textLight} />
          <View style={styles.searchAreaContaier}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>
        {/* Cateogry Item */}
        <View>
          <Text style={styles.categeryTitle}>Categories</Text>
          <FlatList
            data={Catergories}
            renderItem={renderItemCatergories}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* popular item */}
        <View style={styles.popularItemContainer}>
          <Text style={styles.popularItemTitle}>Popular</Text>
          {PopularData.map((item, index) => (
            <TouchableOpacity key={index} onPress={()=>navigation.navigate('Details',{selectedItem:item})}>
              <View  style={styles.PopularItemCell}>
                <View style={styles.detailsArea}>
                  <View style={styles.PopularItemBanner}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={color.primary}
                    />
                    <Text style={styles.PopularItemBannerText}>
                      top of the Week
                    </Text>
                  </View>
                  <View style={styles.PopularItemDetail}>
                    <Text style={styles.PopularItemDetailTitle}>
                      {item.title}
                    </Text>
                    <Text style={styles.PopularItemDetailWeight}>
                      Weight {item.weight}
                    </Text>
                  </View>
                  <View style={styles.bottomSection}>
                    <View style={styles.pluseView}>
                      <Entypo name="plus" size={15} color={color.text} />
                    </View>
                    <View style={styles.ratingView}>
                      <Entypo name="star" size={10} color={color.text} />
                      <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <Image
                  source={item.image}
                  style={styles.PopularItemcellImage}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsArea: {},
  ratingText: {
    fontFamily: "Montserrat-Bold",
    marginLeft: 5,
  },
  pluseView: {
    width: 90,
    height: 53,
    backgroundColor: color.primary,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSection: {
    flexDirection: "row",
  },
  ratingView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  PopularItemDetailWeight: {
    color: color.textLight,
    fontFamily: "Montserrat-Medium",
  },
  PopularItemDetailTitle: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
  },
  PopularItemDetail: {
    marginTop: 20,
    marginLeft: 22,
    marginBottom: 10,
  },
  PopularItemBannerText: {
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
    lineHeight: 17,
    marginLeft: 10,
  },
  PopularItemBanner: {
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 20,
    alignItems: "center",
  },
  PopularItemcellImage: {
    marginRight: "-16%",
    resizeMode: "contain",
    height: 125,
    width: 210,
    alignSelf: "center",
  },
  PopularItemCell: {
    backgroundColor: color.white,
    height: 161,
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    marginVertical: 10,
    borderRadius: 25,
    elevation: 5,
    shadowColor: color.textLight,
  },
  container: {
    flex: 1,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
  },
  titlearea: {
    paddingLeft: 20,
    paddingTop: 30,
  },
  regularTitle: {
    fontSize: 16,
    lineHeight: 19.5,
    fontFamily: "Montserrat-Regular",
  },
  boldTitle: {
    fontSize: 32,
    lineHeight: 39,
    fontFamily: "Montserrat-Bold",
  },
  searchContaier: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 36,
  },
  searchAreaContaier: {
    borderBottomColor: color.textLight,
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  searchText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: color.text,
  },
  cellview: {
    backgroundColor: color.primary,
    marginHorizontal: 20,
    height: 177,
    width: 105,
    alignItems: "center",
    borderRadius: 20,
    shadowColor: color.textLight,
    elevation: 5,
  },
  cellimage: {
    height: 60,
    width: 60,
    marginTop: 24,
  },
  celltext: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Montserrat-Bold",
  },
  cellbutton: {
    backgroundColor: color.white,
    height: 26,
    width: 26,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  categeryTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 20,
  },
  popularItemTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginLeft: 20,
  },
  popularItemContainer: {
    marginTop: 20,
  },
});

export default Home;
