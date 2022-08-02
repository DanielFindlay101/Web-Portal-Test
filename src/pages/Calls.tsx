import CallListCard from '../components/library/CallListCard';

const callData = [
  {
    id: 1,
    headerText: 'Jane Smith',
    bodyText: '(+44) 7651 238 474',
    missedCall: false
  },
  {
    id: 2,
    headerText: 'Contact Name',
    bodyText: '(+44) 7651 238 474',
    missedCall: false
  },
  {
    id: 3,
    headerText: 'Contact Name',
    bodyText: '(+44) 7651 238 474',
    missedCall: true
  },
  {
    id: 4,
    headerText: 'Contact Name',
    bodyText: '(+44) 765 238 474',
    missedCall: true
  },
  {
    id: 5,
    headerText: 'Contact Name',
    bodyText: '(+44) 7651 238 474',
    missedCall: false
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
