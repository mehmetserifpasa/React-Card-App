import { useEffect, useState } from "react";


function UserCard({users}) {
    var resultHTML = [];

    const selam = (data) => {
        <h1>test</h1>
    }

    users.forEach(({id,name, title, link}) => {
        resultHTML.push(
            <div className="col-12 col-md-6 col-lg-3" key={id}>
                <div className="cards">
                    <figure>
                        <img className="img" src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" width="60"/>
                    </figure>

                    <strong className="name">{name}</strong>
                    <span className="title">{title}</span>

                    <a href="#" onClick={() => {selam({id})}} className="button" key={id}>İncele</a>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {resultHTML}
            </div>
        </div>
    )
}


export default UserCard; 