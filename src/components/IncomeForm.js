import React, { useState }  from 'react';
import MyBtn from './buttons/MyBtn';

function IncomeForm({ addIncome }) {
    const [value, setValue] = useState("");

    const valdateForm = e => {
        e.preventDefault();
        if (!value) return;
        addIncome(value);
        setValue("");
    };

    return (
        <form onSubmit={valdateForm} style={styles.IncomeForm}>
            <p>Add Income:</p>
            <input
                type="text"
                style={styles.input}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <MyBtn myBtn="Add Income"/>
        </form>
    );
}

export default IncomeForm

const styles= {
    IncomeForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        padding: '2%',
        backgroundColor: ' #474044',
        color: 'rgb(163,173,194)',
        borderRadius: '5px',
        boxShadow: '1px 6px 1px 1px rgba(0, 0, 255, .1)'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        padding: '2%',
        margin: '1%'
    }
}