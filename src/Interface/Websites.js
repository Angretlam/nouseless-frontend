import { useState } from 'react';

function WebSites() {
    let blockListUrl = 'https://raw.githubusercontent.com/Angretlam/focus_time/main/blocks.json';
    const [blockList, setBlockList] = useState(
        function() {
            fetch(blockListUrl)
                .then(data => data.text())
                .then(json => setBlockList(JSON.parse(json)))
        }
    );

    if (blockList === undefined) {
        return (
            <>
                <h1>Loading Blocklist...</h1>
            </>
        );
    } else {
        return (
            <>
                <h1>Block List</h1>
                <pre>
                    { JSON.stringify(blockList, null, 2) }
                </pre>
            </>
        )
    }
}

export default WebSites;
