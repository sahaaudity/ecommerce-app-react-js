// const LeftPanelHeader = (props) => {
//   const {tittle}=props;

//   return (
//       <div >
//           <h1>{tittle}</h1>
//       </div>
//   )
// }

// export {LeftPanelHeader};
export function LeftPanelHeader({ title }) {
  return (
    <h1 className="text-3xl font-semibold mb-4">
      {title}
    </h1>

  )};