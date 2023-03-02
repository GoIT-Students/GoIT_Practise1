import { Container } from './Statistics.styled';
import Title from '../Title/Title';
import StatisticsList from './StatisticsList/StatisticsList';
import data from '../../json/data';

const Statistics = () => {
  return (
    <Container>
      <Title title="Statistics" />
      <StatisticsList data={data} />
    </Container>
  );
};

export default Statistics;
