import React from 'react';

const Card = ( props ) => {
    return(
        <div class="card">
            <div class="card-header">
                {props.user.name}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>{props.user.company.catchPhrase}</p>
                <footer class="blockquote-footer"><cite title="Source Title">{props.user.company.name}</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}

export default Card