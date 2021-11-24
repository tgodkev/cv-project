import React from "react";

const Card = (props) =>  {
    const { profile } = props;

    return(
        <ul>
        {profile.map((name) => {
            return <li key={name.id}>{name.text}</li>;
        })}


        </ul>
    );


};

export default Card;