import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemoSpecForm({memoSpecObj}) {
    const title = memoSpecObj.title;
    const context = memoSpecObj.context;

    return (
        <div class="w-auto vh-100 mt-2 ms-3">
        <h1 id="title">{title}</h1>
        <p id="script" style={{height: '30vh'}}>{context}</p>
        </div>
    );
}

export default MemoSpecForm;
