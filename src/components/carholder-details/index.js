import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CarHolderDetails = ({ carHolderDetails }) => {
    const isNumberFound = carHolderDetails && carHolderDetails.result
    return isNumberFound? (
        <Fragment>
            <p>Владелец: {carHolderDetails.result.owner}</p>
            <p>Год производства: {carHolderDetails.result.year}</p>
            <p>Количество владельцев: {carHolderDetails.result.ownersCount}</p>
            <p>Факті ДТП: {carHolderDetails.result.crashesCount}</p>
        </Fragment>
    ) : <p>Неверній формат или несуществующий номер</p>
}


const mstp = state => ({
    error: state.apiError,
    carHolderDetails: state.carHolderDetails
})

export default connect(mstp)(CarHolderDetails)

CarHolderDetails.propTypes = {
    carHolderDetails: PropTypes.shape({
        error: PropTypes.string,
        result: PropTypes.shape({
            owner: PropTypes.string,
            year: PropTypes.number,
            ownersCount: PropTypes.number,
            crashesCount: PropTypes.number
        })
    })
}