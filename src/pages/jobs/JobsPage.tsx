import { JobListItem } from '../../components/jobs/JobListItem';
import { ListingScreen } from '../../components/library/ListingScreen';

const data = [
  {
    id: 1,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 2,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 3,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 4,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 5,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 6,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 7,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 8,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 9,
    address: '1 Downing Street',
    status: 'All jobs closed'
  },
  {
    id: 10,
    address: '1 Downing Street',
    status: 'All jobs closed'
  }
];

export const JobsPage = () => (
  <ListingScreen
    data={data}
    searchLabel='Job Lookup'
    toggles={[
      {
        key: 'list-view',
        label: 'List'
      },
      {
        key: 'map-view',
        label: 'Map'
      }
    ]}
    search={() => {
      return null;
    }}
    renderItem={item => <JobListItem job={item} />}
    fetchMore={() => null}
    loading={false}
  />
);
