import React, {useState} from 'react';


// create a form with form-control, onChange, onSubmit
// create state variable for input fields of the form and a list to save all the form data instances
// create a boxList.map function to dynamically render all of the colors in the form of boxes on the page.
// create a way to display the color state variable as an inline css component rendered under the form
// create inputhandler function with preventDefault function
// create a code block to clear state variables once the form is submitted.



const BoxForm = () => {
    let [color, setColor] = useState("");
    let [dimension, setDimension] = useState("");
    let [boxList, setBoxList] = useState([]);

    // form input handler
    const submitBox = (e) => {
        e.preventDefault();

        // setDimension(()=>{return(dimension + " px")});
        let box = {color, dimension};
        
        setBoxList([...boxList, box]);
        console.log(boxList);

        // clear state
        setColor("");
        setDimension("");
    }


    return(
        <div  className = "container">
            <h2>Box Generator!</h2>
            <h4>Enter a color below and add a box the screen:</h4>
            <form onSubmit = {submitBox}>
                <div>
                    <label htmlFor="">Color </label>
                    <input width = "100px" type="text" onChange = {(e) => {setColor(e.target.value)}} className="form-control" value={color}/>
                </div>
                <div>
                    <label htmlFor="">Dimensions of the Box: </label>
                    <input width = "100px" type="number" onChange = {(e) => {setDimension(e.target.value)}} className="form-control" value={dimension}/>
                </div>
                <input type="submit" value="Add" />
            </form>
            <br/>

            <div className = "box-list">
                {
                    boxList.map((oneBox, i) => {

                        return(
                            <div key={i} className='box' style={{backgroundColor: oneBox.color, width: oneBox.dimension+"px", height: oneBox.dimension+"px"}}>
                                <p>{oneBox.dimension} px</p>
                            </div>
                            
                        );
                    })
                }
            </div>
        </div>
    );
}

export default BoxForm;