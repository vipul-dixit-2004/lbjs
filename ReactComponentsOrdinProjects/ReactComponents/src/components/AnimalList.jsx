// nonConditionalRendering
// function ListItem(props){
//     console.log(props.index)
//     return <li id={props.dataItem}>{props.animal}</li>
// }

//  conditional return

function ListItem(props){
 return props.animal.startsWith("L") && <li key={props.dataItem}>{props.animal}</li>
}

function List(props){
    return (
        <ul>
            {props.data.map((dataItem)=>{
                return <ListItem index={dataItem}  animal={dataItem}/>
            })}
        </ul>
    )
}



function AnimalList(){
    const animals = ['Lion','Tiger','Bear','Dog','Cat','Lalala','LadyLion'];
    return(
        <>
        <List data={animals} />
        </>
    )
}
export default AnimalList