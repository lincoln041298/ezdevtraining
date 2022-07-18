import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

export default function CounterFeature() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    console.log(action)
    dispatch(action)
  } 
  const handleDecreaseClick = () => {
    const action = decrease();
    dispatch(action)
  }
  return(
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  )

}
