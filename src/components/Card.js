// import 

export const Card = ({ children }) => {
  // console.log(props);
  return (
    <div className="card mb-3">
      <div className="card-body">
        { children }
      </div>
    </div>
  )
}