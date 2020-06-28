import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const ScrollContainer = styled.ScrollView``;
export const Container = styled.View`
  background-color: #50b2d4;
  padding: 50px 15px;
  flex: 1;
`;

export const TitleContainer = styled.View`
  width: 100%;
  text-align: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #fff;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
`;

export const RowContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  max-height: 130px;
  width: 100%;
`;
export const GraphContainer = styled.View`
  width: 100%;
  margin: 20px 0px;
`;
