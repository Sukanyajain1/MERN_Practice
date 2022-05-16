import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


const Form = () => {

    let [category, setCategory] = useState("");
    let [id, setId] = useState("");

    const history = useHistory();


    const searchStarWarsData = (e) => {
        e.preventDefault();

        history.push(`/${category}/${id}`);
        
        // setCategory("");
        // setId("");
    }



    return (
        <>
            <form onSubmit = {searchStarWarsData} className="px-5">
                <div className="d-flex justify-content-around px-5">
                    <div className="mb-3 row gx-3 align-items-center">
                        <label className = "col-sm-auto" htmlFor="">Search for: </label>
                        <div className="col-sm-auto">
                            <select defaultValue = {'DEFAULT'} className = "form-select" onChange={(e) => {setCategory(e.target.value)}}>
                                <option value="DEFAULT" disabled readOnly>Select a category</option>
                                <option value="people">People</option>
                                <option value="films">Films</option>
                                <option value="planets">Planets</option>
                                <option value="species">Species</option>
                                <option value="starships">Starships</option>
                                <option value="vehicles">Vehicles</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row gx-3 align-items-center">
                        <label  className="col-sm-auto" htmlFor="">ID: </label>
                        <div className="col-sm-auto">
                            <input type="number" className = "form-control" onChange={(e) => {setId(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </div>
            </form>


            
        </>
    );
}


export default Form;