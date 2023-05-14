import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MemoListForm(props) {
    const { memoListObj, currentMemoId } = props;

    const memoId = memoListObj.id;
    const title = memoListObj.title;
    const lastUpdate = memoListObj.lastUpdate;
    var href = '/memo?id=' + memoId;

    var memoClass;
    if (String(currentMemoId) === String(memoId))
        memoClass = 'list-group-item list-group-item-action py-3 lh-sm active';
    else
        memoClass = 'list-group-item list-group-item-action py-3 lh-sm';

    return (
        <a href={href} class={memoClass}>
            <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{title}</strong>
            </div>
            <div class="col-10 mb-1 small">{lastUpdate}</div>
        </a>
    );
}

export default MemoListForm;
