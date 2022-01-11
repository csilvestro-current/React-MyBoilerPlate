import React, {useState} from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';

function Income() {
  const [pageTitle] = ['Income'];

  const [myIncome, setmyIncome] = useState([
    { income: "209.00", saving: "$1.99", spending:'20' },
    { income: "400.00", saving: "$1.99", spending:'20' },
    { income: "600", saving: "$1.99", spending:'20' }
  ]);

  const addIncome = income => {
    const newIncome = [...myIncome, { income }];
    setmyIncome(newIncome);
  };

  const removeIncome = id => {
    const newIncome = [...myIncome];
    newIncome.splice(id, 1);
    setmyIncome(newIncome);
  };
  return (
      <section style={styles.container}>
        <h1>{pageTitle}</h1>
        <IncomeForm 
          addIncome={addIncome}
        /> 
        {myIncome.map((myIncome, id) => (
            <IncomeList
              key={id}
              id={id}
              myIncome={myIncome}
              removeIncome={removeIncome}
            />
          ))}  
      </section>
  );
}

export default Income;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '99vh',
    paddingLeft: '2%'
  }
}