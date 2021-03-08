import Output from '../containers/OutputContainer';
import Eat from '../containers/EatContainer';
import Nap from '../containers/NapContainer';
import Play from '../containers/PlayContainer';

const Counter = (props) => (
    <>
    <h1>Cat Reducers</h1>
<Output/>
<Eat />
<Nap />
<Play />

    </>
);
export default Counter;