const Total = ({ parts }) => {
    return (
      <p>
        Total of {parts.reduce((name, exercises) => {
          return name + exercises.exercises
        }, 0)} exercises{" "}
      </p>
    )
}

export default Total
