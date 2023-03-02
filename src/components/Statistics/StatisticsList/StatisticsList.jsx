import StatisticsBox from '../StatisticsBox/StatisticsBox';
import { List } from './StatisticsList.styled';

const StatisticsList = ({ data }) => {
  return (
    <List>
      {data.map((item) => (
        <StatisticsBox key={item.id} data={item} />
      ))}
    </List>
  );
};

export default StatisticsList;

// Работа выполнена без метода map
{
  /* <StatisticsBox key={data[0].id} data={data[0]} />
      <StatisticsBox key={data[1].id} data={data[1]} />
      <StatisticsBox key={data[2].id} data={data[2]} />
      <StatisticsBox key={data[3].id} data={data[3]} /> */
}
