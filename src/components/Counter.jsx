import Output from '../containers/OutputContainer';
import Eat from '../containers/EatContainer';
import Nap from '../containers/NapContainer';
import Play from '../containers/PlayContainer';
import SetName from '../containers/SetNameContainer';
import Activity from '../containers/ActivityContainer';

const Counter = (props) => (
    <>
    <h1>Cat Reducers</h1>
<Output/>
<Eat />
<Nap />
<Play />
<Activity />
<SetName />

    </>
);
export default Counter;