
function Encabezado ({columna}){

  //const columna = Object.keys(datos);
  console.log(columna)
  //console.log(columna);
  return (
    <thead>
      <tr>
        <th scope="col">#</th>
        {
          columna.map((item ,key) =>(
            <th key={key} scope="col">{item}</th>
          ))
        }
      </tr>
    </thead>
  )
}
export default Encabezado;
