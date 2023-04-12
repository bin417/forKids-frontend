import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
} from "../GlobalStyles.js";

const Tutorial2 = () => {
  return (
    <View style={styles.welcome2}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <View style={[styles.vectorParent, styles.vectorLayout]}>
          <Image
            style={[styles.vectorIcon, styles.textPosition]}
            resizeMode="cover"
            source={require("../assets/vector-1.png")}
          />
          <View style={styles.rectangleParent}>
            <View style={styles.rectangleView} />
            <Text
              style={[styles.text, styles.textPosition]}
            >{`자세한 코멘트 선택으로
아이에게 딱 맞는 장소 찾기`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.textbox1Parent, styles.textbox1Position]}>
        <View style={styles.textbox1}>
          <View style={styles.textboxShadowBox1}>
            <Text style={[styles.textExample, styles.textTypo]}>
              자녀의 연령대를 선택해주세요.
            </Text>
          </View>
          <Text style={styles.pm}>10:30 pm</Text>
        </View>
        <View style={[styles.textbox2, styles.textboxFlexBox]}>
          <View style={[styles.textbox12, styles.textboxShadowBox]}>
            <Text style={[styles.hiText, styles.textTypo]}>5-7세 초등학생</Text>
          </View>
          <Text style={styles.pm}>10:30 pm</Text>
        </View>
        <View style={[styles.selectBox, styles.selectShadowBox]}>
          <Text style={[styles.textExample, styles.textTypo]}>
            5-7세 어린이
          </Text>
        </View>
        <View style={[styles.selectBox1, styles.selectShadowBox]}>
          <Text style={styles.textOfChoice1}>8-13세 초등학생</Text>
        </View>
      </View>
      <View style={[styles.textbox1Group, styles.textbox1Position]}>
        <View style={styles.textbox1}>
          <View style={styles.textboxShadowBox1}>
            <Text style={[styles.textExample, styles.textTypo]}>
              아이와 가장 맞는 키워드를 선택해주세요.
            </Text>
          </View>
          <Text style={styles.pm}>10:30 pm</Text>
        </View>
        <View style={[styles.textbox21, styles.textboxFlexBox]}>
          <View style={[styles.textbox15, styles.textboxShadowBox]}>
            <Text style={[styles.hiText, styles.textTypo]}>
              운동을 좋아하는
            </Text>
          </View>
          <Text style={styles.pm}>10:30 pm</Text>
        </View>
        <View style={[styles.selectBox2, styles.selectShadowBox]}>
          <Text style={[styles.textExample, styles.textTypo]}>
            책을 좋아하는
          </Text>
        </View>
        <View style={[styles.selectBox3, styles.selectShadowBox]}>
          <Text style={[styles.textExample, styles.textTypo]}>
            그림 그리기를 좋아하는
          </Text>
        </View>
        <View style={[styles.selectBox4, styles.selectShadowBox]}>
          <Text style={[styles.textExample, styles.textTypo]}>
            운동을 좋아하는
          </Text>
        </View>
        <View style={[styles.selectBox5, styles.selectShadowBox]}>
          <Text style={[styles.textExample, styles.textTypo]}>
            숲을 좋아하는
          </Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text1}>시작하기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorLayout: {
    height: 395,
    width: 513,
  },
  textPosition: {
    left: 32,
    top: 0,
    position: "absolute",
  },
  textbox1Position: {
    width: 262,
    left: 49,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
  },
  textboxFlexBox: {
    alignItems: "flex-end",
    height: 31,
    width: 166,
    left: 96,
    justifyContent: "center",
    position: "absolute",
  },
  textboxShadowBox: {
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.basePrimary,
    alignItems: "flex-end",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    justifyContent: "center",
  },
  selectShadowBox: {
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChild: {
    top: 184,
    left: 195,
    width: 185,
    height: 185,
    position: "absolute",
  },
  groupItem: {
    left: 153,
    width: 99,
    height: 99,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 17,
    left: 277,
    width: 248,
    height: 248,
    position: "absolute",
  },
  ellipseIcon: {
    top: 28,
    left: 122,
    width: 220,
    height: 220,
    position: "absolute",
  },
  vectorIcon: {
    height: 395,
    width: 513,
  },
  rectangleView: {
    top: 40,
    backgroundColor: Color.green_100,
    height: 23,
    borderRadius: Border.br_11xl,
    left: 0,
    width: 282,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    textAlign: "center",
    color: Color.black,
  },
  rectangleParent: {
    top: 148,
    left: 71,
    height: 63,
    width: 282,
    position: "absolute",
  },
  vectorParent: {
    top: 301,
    left: 90,
    width: 513,
    position: "absolute",
  },
  ellipseParent: {
    top: 147,
    left: -122,
    width: 603,
    height: 696,
    position: "absolute",
  },
  textExample: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  textboxShadowBox1: {
    alignItems: "center",
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.baseLight,
    borderBottomLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    flexDirection: "row",
  },
  pm: {
    fontSize: FontSize.size_8xs,
    color: Color.baseDark,
    display: "none",
    marginTop: 1,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  textbox1: {
    width: 161,
    height: 43,
    justifyContent: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  hiText: {
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
  },
  textbox12: {
    backgroundColor: Color.basePrimary,
  },
  textbox2: {
    top: 95,
  },
  selectBox: {
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  textOfChoice1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  selectBox1: {
    top: 47,
    left: 113,
  },
  textbox1Parent: {
    top: 131,
    height: 126,
  },
  textbox15: {
    backgroundColor: Color.basePrimary,
  },
  textbox21: {
    top: 191,
  },
  selectBox2: {
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  selectBox3: {
    top: 95,
    left: 0,
  },
  selectBox4: {
    left: 115,
    top: 46,
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
  },
  selectBox5: {
    top: 144,
    left: 0,
  },
  textbox1Group: {
    top: 271,
    height: 222,
  },
  text1: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    textAlign: "left",
  },
  wrapper: {
    top: 691,
    paddingHorizontal: 38,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.basePrimary,
    flexDirection: "row",
    borderRadius: Border.br_11xl,
    left: 90,
    position: "absolute",
    overflow: "hidden",
  },
  welcome2: {
    backgroundColor: Color.lightgreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Tutorial2;
