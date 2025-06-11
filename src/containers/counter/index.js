import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        counter: state.counter,
        counter: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch({type: "INCREMENT"}),
        decreaseCounter: () => dispatch({type: "DECREMENT"}),
        addCounter: () => dispatch({type: "ADD", value:5}),
        substractCounter: () => dispatch({type: "SUBSTRACT", value:5})
    }
}

const Counter = (props) => {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increaseCounter}>increase</button>
            <button onClick={props.decreaseCounter}>decrease</button>
            <button onClick={props.addCounter}>increase by 5</button>
            <button onClick={props.substractCounter}>decrease by 5</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);