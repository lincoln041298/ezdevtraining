import { useSelector } from 'react-redux';

export default function CounterFeature() {
  const count = useSelector((state) => state.count);
  return <div>Counter: {count}</div>;
}
