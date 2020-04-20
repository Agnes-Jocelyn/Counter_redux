import React from 'react';
import {connect} from 'react-redux';
import {TAMBAH , KURANG} from './../Reducer'

const Counter = (props) => {
    const {nilai} = props;

    const tambah = () => {
        props.dispatch({type : TAMBAH})
    }

    const kurang = () => {
        props.dispatch({type: KURANG})
    }

    return ( 
        <div>
        <button onClick={tambah}>+</button>
        <input value={nilai}/>
        <button onClick={kurang}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        nilai : state.nilai
    }
}

export default connect(mapStateToProps)(Counter);