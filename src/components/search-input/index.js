import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import { requestCarHolderData  } from '../../redux/action-creators/carholder-details'

class CarNumberInput extends PureComponent {
    state = {
        isCarNumberValid: false
    }

    onCarNumberChange = carNumber => {
        if (carNumber.length === 0) {
            this.setState({ isCarNumberValid: false })
            return
        }
        const carNumberValidator = /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/g
        const isCarNumberValid = carNumberValidator.test(carNumber)
        this.setState({ isCarNumberValid })
        if (!isCarNumberValid) return
        else this.props.requestCarHolderData(carNumber.toUpperCase()) 
    }

    renderValidationHint = isValueValid => !isValueValid && <p>Пример формата номера: АА1111АА</p>

    render(){
        return (
            <Fragment>
                <input onChange={({ target }) => this.onCarNumberChange(target.value)}/>
                {this.renderValidationHint(this.state.isCarNumberValid)}
            </Fragment>
        )
    }
}



export default connect( null, { requestCarHolderData } )(CarNumberInput)
