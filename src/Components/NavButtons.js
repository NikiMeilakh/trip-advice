import React from 'react';

const NavButtons = () => {

    const findCheapestRoutes=()=>{
        //useNavigate()
    }

    return (
        <div className={"navButtons"}>
            <button className={"navClick1"} onClick={findCheapestRoutes}>Find cheapest routes</button>
            <button className={"navClick2"}>Budget travel tips</button>
        </div>
    );
};

export default NavButtons;