import React, {useState} from 'react';

const TabForm = () => {
    // const [tabLabel, setTabLabel] =useState("");
    const [tabContent, setTabContent] =useState("");
    const [clicked, setClicked] =useState(false);
    const [tabList, setTabList] =useState([]);

    let tab1 ={name:"Tab 1", tabContent};
    let tab2 ={name:"Tab 2", tabContent};
    let tab3 ={name:"Tab 3", tabContent};
    setTabList([tab1, tab2, tab3]);
    
    
    const toggleTabs = (e, idx) => {


        let [...copyList] = tabList;
        copyList[idx].tabContent = e.target.value;

        setTabList(copyList);
    }

    return(
        <>
        <h1>Hello there</h1>
            <div className = "tab-list">
                {
                    // tabList.map((oneTab, idx) =>{
                        // return (
                            <>
                                <div>
                                    <button className='btn btn-secondary'>Tab 1</button>
                                    <button className='btn btn-secondary'>Tab 2</button>
                                    <button className='btn btn-secondary'>Tab 3</button>
                                </div>
                                <div>
                                    {/* <input onChange={(e) => {setTabContent(tabList[idx].tabContent)}} type="textarea" className='form-control' value = {tabList[idx].tabContent}/> */}
                                </div>
                            </>
                        // );
                    // })
                }
            </div>
        </>
    );
}

export default TabForm;
