import React from 'react'
import { connect } from 'react-redux'
import CounterOutput from './../../components/CounterOutput/CounterOutput'
import CounterControl from './../../components/CounterControl/CounterControl'
import { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions/action'
class Counter extends React.Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        // eslint-disable-next-line default-case
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
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Counter</button>
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
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment),
        onDecrementCounter: () => dispatch(decrement),
        onAddCounter: () => dispatch(add(15)),
        onSubtractCounter: () => dispatch(subtract(15)),
        onStoreResults: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);