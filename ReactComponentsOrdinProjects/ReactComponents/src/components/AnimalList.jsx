function ListItem(props){
    return <li>{props.animal}</li>
}

function List(props){
    return (
        <ul>
            {props.data.map((dataItem)=>{
                return <ListItem animal={dataItem}/>
            })}
        </ul>
    )
}

function AnimalList(){
    const animals = ['Lion','Tiger','Bear','Dog','Cat'];
    return(
        <>
        <List data={animals} />
        </>
    )
}
export default AnimalList