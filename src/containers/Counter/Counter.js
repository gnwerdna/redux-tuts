import React from 'react'
import { connect } from 'react-redux'
import CounterOutput from './../../components/CounterOutput/CounterOutput'
import CounterControl from './../../components/CounterControl/CounterControl'
import * as actionCreators from '../../store/actions/index'
class Counter extends React.Component {
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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(15)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResults: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);