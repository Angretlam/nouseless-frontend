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
            3("Fail");
        }
    }

    handleChange(event) {
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let siteNdx = info_array[0];
        let dayName = info_array[1];
        let hourNdx = info_array[2];
        let oldSites = this.state.websites;

        // Technically, the old != is more concise,
        // But if we use that here, then 1, 0, true, and false all appear in the data
        oldSites[siteNdx].days[dayName][hourNdx] = (
            oldSites[siteNdx].days[dayName][hourNdx] ?
            0 : 1
        );

        this.setState(oldSites);
    }

    render() {
        if (this.state.websites.length === 0) {
            return (
                <>
                    <h1>Loading Blocklist...</h1>
                </>
            );
        } else {
            return (
                <>
                    <h1>Block List</h1>

                    <Table className="table table-striped table-bordered">
                        <thead style={{
                            position: "sticky",
                            top: 0,
                            backgroundColor: "rgba(255, 255, 255, .5)"
                        }}>
                            <tr>
                                <th>Site</th>
                                <th>Day</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                                <th>15</th>
                                <th>16</th>
                                <th>17</th>
                                <th>18</th>
                                <th>19</th>
                                <th>20</th>
                                <th>21</th>
                                <th>22</th>
                                <th>23</th>
                                <th>24</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.websites.map((site, ndx) => {
                                return (
                                    <>
                                        <tr key={ndx + "_header"}>
                                            <td colSpan="23" key={ndx + "_url_col"}>{site.url}</td>
                                            <td colSpan="3" key={ndx + "_del_col"}><button className="btn btn-danger">Delete</button></td>
                                        </tr>

                                        {Object.keys(site.days).map((day) => {
                                            return (
                                                <tr key={ndx + "_" + day}>
                                                    <td key={ndx + "_blank"}></td>
                                                    <td key={ndx + "_label"}>
                                                        {day}
                                                    </td>
                                                    {site.days[day].map((val, subndx) => {
                                                        return (
                                                            <>
                                                                <td key={ndx + "_" + day + "_" + subndx + "_td"}>
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id={ndx + "_" + day + "_" + subndx}
                                                                        checked={val ? "checked" : ""}
                                                                        onChange={this.handleChange} 
                                                                    />
                                                                </td>
                                                            </>
                                                        )
                                                    })}

                                                </tr>
                                            )
                                        })}

                                    </>
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
