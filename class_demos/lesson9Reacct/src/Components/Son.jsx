function Son(props) {
    return (
        <div>
            Name: {props.name}
            Age : {props.age}
            isTrue:{props.isTrue}
            Obj name: {props.obj.name}
            Array: {props.list} <br />
            child: {props.child}
            children: {props.children}
        </div>
    );
}

export default Son;