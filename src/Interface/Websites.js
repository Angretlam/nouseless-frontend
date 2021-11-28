import React from 'react';
import { Table } from 'react-bootstrap';

class WebsitesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { websites: [] }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (this.state.websites.length === 0) {
            let blockListUrl = 'https://raw.githubusercontent.com/Angretlam/focus_time/main/blocks.json';
            fetch(blockListUrl)
                .then(data => data.text())
                .then(json => this.setState(JSON.parse(json)))
        } else {
            console.log("Fail");
        }
    }

    handleChange(event) {
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let oldSites = this.state.websites;
        oldSites[info_array[0]][info_array[1]] = !oldSites[info_array[0]][info_array[1]];
        this.setState(oldSites);
    }

    render() {
        if (this.state.websites.length === 0) {
            return (
                <>
                    {console.log(this.state)}
                    <h1>Loading Blocklist...</h1>
                </>
            );
        } else {
            return (
                <>
                    <h1>Block List</h1>

                    <Table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Site</th>
                                <th>Open Weekdays</th>
                                <th>Open Saturday</th>
                                <th>Open Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.websites.map((site, ndx) => {

                                return (
                                    <tr key={ndx}>
                                        <td key={ndx + "_url_col"}>{site.url}</td>
                                        <td key={ndx + "_weekday_col"}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={ndx + "_weekday"}
                                                checked={site.weekday ? "checked" : ""}
                                                onChange={this.handleChange} />
                                        </td>
                                        <td key={ndx + "_saturday_col"}>                                        
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={ndx + "_saturday"}
                                            checked={site.saturday ? "checked" : ""}
                                            onChange={this.handleChange} />
                                        </td>
                                        <td key={ndx + "_sunday_col"}>                                        
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={ndx + "_sunday"}
                                            checked={site.sunday ? "checked" : ""}
                                            onChange={this.handleChange} />
                                        </td>
                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </Table>
                </>
            )
        }
    }
}

export default WebsitesTable;
