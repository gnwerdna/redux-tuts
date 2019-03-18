import React from 'react'
import * as actionTypes from '../../store/action'
import { connect } from 'react-redux'
import CounterOutput from './../../components/CounterOutput/CounterOutput'
import CounterControl from './../../components/CounterControl/CounterControl'
class Counter extends React.Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { 
                    return { counter: prevState.counter + 1 } 
                });
                break;
            case 'dec':
                this.setState((prevState) => { 
                    return { counter: prevState.counter - 1 } 
                });
                break;
            case 'add':
                this.setState((prevState) => {
                    return { counter: prevState.counter + value }
                });
                break;
            case 'sub':
                this.setState((prevState) => {
                    return { counter: prevState.counter - value }
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl 
                    label="Increment" 
                    clicked={this.props.onIncrementCounter}
                />
                <CounterControl 
                    label="Decrement" 
                    clicked={this.props.onDecrementCounter}
                />
                <CounterControl 
                    label="Add 5" 
                    clicked={this.props.onAddCounter}
                />
                <CounterControl 
                    label="Sub 5" 
                    clicked={this.props.onSubtractCounter}
                />
                <hr/>
                <button onClick={this.props.onStoreResults}>Store Counter</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                        <li 
                            key={strResult.id} 
                            onClick={() => this.props.onDeleteResult(strResult.id)}>
                            {strResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResults: () => dispatch({type: actionTypes.STORE_RESULTS}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);