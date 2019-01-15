import styled from 'styled-components/native';
import colors from 'styles/colors';

export const SContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkWhite};
`;

export const STitle = styled.Text`
  font-size: 30;
  text-align: center;
  color: ${colors.white};
`;

export const SSubtitle = styled(STitle)`
  font-size: 20;
`;

export const SPara = styled(STitle)`
  font-size: 10;
  flex-wrap: wrap;
`;
