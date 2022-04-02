import '../styles/counter.css';

interface CounterProps {
    count: number;
    setCount: (count: number) => void;
}

export const Counter = ({count, setCount}: CounterProps) => {

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const hadleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='container'>
            <div className='button' onClick={hadleDecrement}>
                <span className='button_icon'>-</span>
            </div>
            <div className='counter'>
                <span className='counter_text'>{count}</span>
            </div>
            <div className='button' onClick={handleIncrement}>
                <span className='button_icon'>+</span>
            </div>
        </div>
    )
}
