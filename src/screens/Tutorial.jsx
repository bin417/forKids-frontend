import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles.js";

const Tutorial = () => {
  return (
    <View style={styles.welcome1}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.groupItem, styles.textPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text
            style={[styles.text, styles.textPosition]}
          >{`간단한 일상 대화만으로
원하는 시설 정보만 확인하기`}</Text>
        </View>
      </View>
      <View style={styles.textbox1Parent}>
        <View style={styles.textbox1}>
          <View style={[styles.textbox11, styles.textboxShadowBox]}>
            <Text
              style={[styles.textExample, styles.pmTypo]}
            >{`목동의 실내 놀이시설을
인기순으로 보여드릴게요!`}</Text>
          </View>
          <Text style={[styles.pm, styles.pmTypo]}>10:30 pm</Text>
        </View>
        <View style={[styles.textbox2, styles.textPosition]}>
          <View style={[styles.textbox12, styles.textboxShadowBox]}>
            <Text style={[styles.hiText, styles.hiTextClr]}>
              목동 아이들 실내 놀이 공간
            </Text>
          </View>
          <Text style={[styles.pm, styles.pmTypo]}>10:30 pm</Text>
        </View>
      </View>
      <View style={styles.imgFrame}>
        <View style={[styles.facilityImgBox, styles.facilityLayout]}>
          <Image
            style={[styles.imageTrayIcon, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/image-tray.png")}
          />
          <Image
            style={styles.facilityImageIcon}
            resizeMode="cover"
            source={require("../assets/facility-image.png")}
          />
          <Text
            style={[styles.nameOfFacility, styles.hiTextClr]}
          >{`똑똑블럭 이마트
목동점`}</Text>
        </View>
        <View style={[styles.facilityImgBox1, styles.facilityLayout]}>
          <Image
            style={[styles.imageTrayIcon, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/image-tray.png")}
          />
          <Image
            style={styles.facilityImageIcon}
            resizeMode="cover"
            source={require("../assets/facility-image1.png")}
          />
          <Text style={[styles.nameOfFacility, styles.hiTextClr]}>
            리틀마운틴 행복한 백화점 목동점
          </Text>
        </View>
        <View style={[styles.facilityImgBox2, styles.facilityLayout]}>
          <Image
            style={[styles.imageTrayIcon2, styles.imageIconPosition]}
            resizeMode="cover"
            source={require("../assets/image-tray.png")}
          />
          <Image
            style={styles.facilityImageIcon}
            resizeMode="cover"
            source={require("../assets/facility-image2.png")}
          />
          <Text style={[styles.nameOfFacility, styles.hiTextClr]}>
            플레이타임 현대백화점 목동점
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 122,
    position: "absolute",
  },
  rectangleLayout: {
    width: 282,
    position: "absolute",
  },
  textboxShadowBox: {
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
  },
  pmTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  hiTextClr: {
    color: Color.white,
    fontFamily: FontFamily.poppinsRegular,
  },
  facilityLayout: {
    width: 136,
    height: 180,
    top: 0,
    position: "absolute",
  },
  imageIconPosition: {
    opacity: 0.8,
    left: "-12.5%",
    bottom: "-11.48%",
    top: "-8.89%",
    height: "120.37%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    width: 220,
    height: 220,
  },
  vectorIcon: {
    top: 301,
    width: 513,
    height: 395,
  },
  rectangleView: {
    top: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.green_100,
    height: 23,
    left: 0,
  },
  text: {
    left: 25,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtrabold,
    textAlign: "center",
    color: Color.black,
  },
  rectangleParent: {
    top: 449,
    left: 161,
    height: 63,
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
    fontSize: FontSize.size_mini,
    color: Color.black,
  },
  textbox11: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.baseLight,
    flexDirection: "row",
    alignItems: "center",
  },
  pm: {
    fontSize: FontSize.size_8xs,
    color: Color.baseDark,
    display: "none",
    marginTop: 1,
    textAlign: "left",
  },
  textbox1: {
    top: 52,
    width: 161,
    height: 43,
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },
  hiText: {
    textAlign: "right",
    fontSize: FontSize.size_mini,
  },
  textbox12: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: Color.basePrimary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textbox2: {
    left: 69,
    width: 193,
    height: 31,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textbox1Parent: {
    top: 139,
    width: 262,
    height: 95,
    left: 49,
    position: "absolute",
  },
  imageTrayIcon: {
    width: "125%",
    right: "-12.5%",
  },
  facilityImageIcon: {
    height: "100%",
    width: "99.26%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.74%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameOfFacility: {
    width: "88.24%",
    top: "73.89%",
    left: "5.88%",
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "left",
    position: "absolute",
  },
  facilityImgBox: {
    left: 0,
  },
  facilityImgBox1: {
    left: 148,
  },
  imageTrayIcon2: {
    width: "102.94%",
    right: "9.56%",
  },
  facilityImgBox2: {
    left: 296,
  },
  imgFrame: {
    top: 257,
    width: 297,
    height: 180,
    left: 49,
    position: "absolute",
  },
  welcome1: {
    backgroundColor: Color.lightgreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Tutorial;
