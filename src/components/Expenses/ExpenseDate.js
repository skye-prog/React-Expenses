import "./ExpenseDate.css";

function ExpenseDate(props) {
  //props pass an object in
  const year = props.date.toLocaleString("default", { year: "2-digit" });
  const month = props.date.toLocaleString("default", { month: "long" });
  const day = props.date.toLocaleString("default", { day: "2-digit" });
  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
export default ExpenseDate;
