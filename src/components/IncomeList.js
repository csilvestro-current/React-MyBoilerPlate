import React from 'react'

const IncomeList = ({myIncome, id, removeIncome}) => {  
    return (
        <li key={myIncome.id} style={styles.list}>
        <span>{myIncome.income}</span>
        <span>{myIncome.spending}</span>
        <button onClick={() => removeIncome(id)}>x</button>
        </li>
    )
}
export default IncomeList

const styles= {
    list: {
        padding: '0.5%',
        marginTop: '0.5%', 
        //color: 'rgb(163,173,194)',
        //margin: '5%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer',
        //borderRadius: '10%' 
    }
}
