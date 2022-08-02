import CallListCard from '../components/library/CallListCard';

const callData = [
  {
    id: 1,
    name: 'Jane Smith',
    phoneNumber: '(+44) 7651 238 474',
    missed: false,
    createdAt: '07:00'
  },
  {
    id: 2,
    name: 'Contact Name',
    phoneNumber: '(+44) 7651 238 474',
    missed: false,
    createdAt: '15:00'
  },
  {
    id: 3,
    name: 'Contact Name',
    phoneNumber: '(+44) 7651 238 474',
    missed: true,
    createdAt: '14:23'
  },
  {
    id: 4,
    name: 'Contact Name',
    phoneNumber: '(+44) 7651 238 474',
    missed: true,
    createdAt: '14:23'
  }
];

const Calls = () => {
  return (
    <>
      {callData.map((data, id) => (
        <CallListCard key={id} data={data} />
      ))}
    </>
  );
};

export default Calls;
