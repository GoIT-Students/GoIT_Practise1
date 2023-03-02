import { Total, Title, Item } from './StatisticsBox.styled';

const StatisticsBox = ({ data }) => {
  return (
    <Item>
      <Total>{data.total}</Total>
      <Title>{data.title}</Title>
    </Item>
  );
};

export default StatisticsBox;
