import React from 'react';
import { Table } from 'react-bootstrap';

var timeZones = [
  "Africa/Abidjan",
  "Africa/Accra",
  "Africa/Addis_Ababa",
  "Africa/Algiers",
  "Africa/Asmara",
  "Africa/Asmera",
  "Africa/Bamako",
  "Africa/Bangui",
  "Africa/Banjul",
  "Africa/Bissau",
  "Africa/Blantyre",
  "Africa/Brazzaville",
  "Africa/Bujumbura",
  "Africa/Cairo",
  "Africa/Casablanca",
  "Africa/Ceuta",
  "Africa/Conakry",
  "Africa/Dakar",
  "Africa/Dar_es_Salaam",
  "Africa/Djibouti",
  "Africa/Douala",
  "Africa/El_Aaiun",
  "Africa/Freetown",
  "Africa/Gaborone",
  "Africa/Harare",
  "Africa/Johannesburg",
  "Africa/Juba",
  "Africa/Kampala",
  "Africa/Khartoum",
  "Africa/Kigali",
  "Africa/Kinshasa",
  "Africa/Lagos",
  "Africa/Libreville",
  "Africa/Lome",
  "Africa/Luanda",
  "Africa/Lubumbashi",
  "Africa/Lusaka",
  "Africa/Malabo",
  "Africa/Maputo",
  "Africa/Maseru",
  "Africa/Mbabane",
  "Africa/Mogadishu",
  "Africa/Monrovia",
  "Africa/Nairobi",
  "Africa/Ndjamena",
  "Africa/Niamey",
  "Africa/Nouakchott",
  "Africa/Ouagadougou",
  "Africa/Porto-Novo",
  "Africa/Sao_Tome",
  "Africa/Timbuktu",
  "Africa/Tripoli",
  "Africa/Tunis",
  "Africa/Windhoek",
  "America/Adak",
  "America/Anchorage",
  "America/Anguilla",
  "America/Antigua",
  "America/Araguaina",
  "America/Argentina/Buenos_Aires",
  "America/Argentina/Catamarca",
  "America/Argentina/ComodRivadavia",
  "America/Argentina/Cordoba",
  "America/Argentina/Jujuy",
  "America/Argentina/La_Rioja",
  "America/Argentina/Mendoza",
  "America/Argentina/Rio_Gallegos",
  "America/Argentina/Salta",
  "America/Argentina/San_Juan",
  "America/Argentina/San_Luis",
  "America/Argentina/Tucuman",
  "America/Argentina/Ushuaia",
  "America/Aruba",
  "America/Asuncion",
  "America/Atikokan",
  "America/Atka",
  "America/Bahia",
  "America/Bahia_Banderas",
  "America/Barbados",
  "America/Belem",
  "America/Belize",
  "America/Blanc-Sablon",
  "America/Boa_Vista",
  "America/Bogota",
  "America/Boise",
  "America/Buenos_Aires",
  "America/Cambridge_Bay",
  "America/Campo_Grande",
  "America/Cancun",
  "America/Caracas",
  "America/Catamarca",
  "America/Cayenne",
  "America/Cayman",
  "America/Chicago",
  "America/Chihuahua",
  "America/Ciudad_Juarez",
  "America/Coral_Harbour",
  "America/Cordoba",
  "America/Costa_Rica",
  "America/Creston",
  "America/Cuiaba",
  "America/Curacao",
  "America/Danmarkshavn",
  "America/Dawson",
  "America/Dawson_Creek",
  "America/Denver",
  "America/Detroit",
  "America/Dominica",
  "America/Edmonton",
  "America/Eirunepe",
  "America/El_Salvador",
  "America/Ensenada",
  "America/Fort_Nelson",
  "America/Fort_Wayne",
  "America/Fortaleza",
  "America/Glace_Bay",
  "America/Godthab",
  "America/Goose_Bay",
  "America/Grand_Turk",
  "America/Grenada",
  "America/Guadeloupe",
  "America/Guatemala",
  "America/Guayaquil",
  "America/Guyana",
  "America/Halifax",
  "America/Havana",
  "America/Hermosillo",
  "America/Indiana/Indianapolis",
  "America/Indiana/Knox",
  "America/Indiana/Marengo",
  "America/Indiana/Petersburg",
  "America/Indiana/Tell_City",
  "America/Indiana/Vevay",
  "America/Indiana/Vincennes",
  "America/Indiana/Winamac",
  "America/Indianapolis",
  "America/Inuvik",
  "America/Iqaluit",
  "America/Jamaica",
  "America/Jujuy",
  "America/Juneau",
  "America/Kentucky/Louisville",
  "America/Kentucky/Monticello",
  "America/Knox_IN",
  "America/Kralendijk",
  "America/La_Paz",
  "America/Lima",
  "America/Los_Angeles",
  "America/Louisville",
  "America/Lower_Princes",
  "America/Maceio",
  "America/Managua",
  "America/Manaus",
  "America/Marigot",
  "America/Martinique",
  "America/Matamoros",
  "America/Mazatlan",
  "America/Mendoza",
  "America/Menominee",
  "America/Merida",
  "America/Metlakatla",
  "America/Mexico_City",
  "America/Miquelon",
  "America/Moncton",
  "America/Monterrey",
  "America/Montevideo",
  "America/Montreal",
  "America/Montserrat",
  "America/Nassau",
  "America/New_York",
  "America/Nipigon",
  "America/Nome",
  "America/Noronha",
  "America/North_Dakota/Beulah",
  "America/North_Dakota/Center",
  "America/North_Dakota/New_Salem",
  "America/Nuuk",
  "America/Ojinaga",
  "America/Panama",
  "America/Pangnirtung",
  "America/Paramaribo",
  "America/Phoenix",
  "America/Port_of_Spain",
  "America/Port-au-Prince",
  "America/Porto_Acre",
  "America/Porto_Velho",
  "America/Puerto_Rico",
  "America/Punta_Arenas",
  "America/Rainy_River",
  "America/Rankin_Inlet",
  "America/Recife",
  "America/Regina",
  "America/Resolute",
  "America/Rio_Branco",
  "America/Rosario",
  "America/Santa_Isabel",
  "America/Santarem",
  "America/Santiago",
  "America/Santo_Domingo",
  "America/Sao_Paulo",
  "America/Scoresbysund",
  "America/Shiprock",
  "America/Sitka",
  "America/St_Barthelemy",
  "America/St_Johns",
  "America/St_Kitts",
  "America/St_Lucia",
  "America/St_Thomas",
  "America/St_Vincent",
  "America/Swift_Current",
  "America/Tegucigalpa",
  "America/Thule",
  "America/Thunder_Bay",
  "America/Tijuana",
  "America/Toronto",
  "America/Tortola",
  "America/Vancouver",
  "America/Virgin",
  "America/Whitehorse",
  "America/Winnipeg",
  "America/Yakutat",
  "America/Yellowknife",
  "Antarctica/Casey",
  "Antarctica/Davis",
  "Antarctica/DumontDUrville",
  "Antarctica/Macquarie",
  "Antarctica/Mawson",
  "Antarctica/McMurdo",
  "Antarctica/Palmer",
  "Antarctica/Rothera",
  "Antarctica/South_Pole",
  "Antarctica/Syowa",
  "Antarctica/Troll",
  "Antarctica/Vostok",
  "Arctic/Longyearbyen",
  "Asia/Aden",
  "Asia/Almaty",
  "Asia/Amman",
  "Asia/Anadyr",
  "Asia/Aqtau",
  "Asia/Aqtobe",
  "Asia/Ashgabat",
  "Asia/Ashkhabad",
  "Asia/Atyrau",
  "Asia/Baghdad",
  "Asia/Bahrain",
  "Asia/Baku",
  "Asia/Bangkok",
  "Asia/Barnaul",
  "Asia/Beirut",
  "Asia/Bishkek",
  "Asia/Brunei",
  "Asia/Calcutta",
  "Asia/Chita",
  "Asia/Choibalsan",
  "Asia/Chongqing",
  "Asia/Chungking",
  "Asia/Colombo",
  "Asia/Dacca",
  "Asia/Damascus",
  "Asia/Dhaka",
  "Asia/Dili",
  "Asia/Dubai",
  "Asia/Dushanbe",
  "Asia/Famagusta",
  "Asia/Gaza",
  "Asia/Harbin",
  "Asia/Hebron",
  "Asia/Ho_Chi_Minh",
  "Asia/Hong_Kong",
  "Asia/Hovd",
  "Asia/Irkutsk",
  "Asia/Istanbul",
  "Asia/Jakarta",
  "Asia/Jayapura",
  "Asia/Jerusalem",
  "Asia/Kabul",
  "Asia/Kamchatka",
  "Asia/Karachi",
  "Asia/Kashgar",
  "Asia/Kathmandu",
  "Asia/Katmandu",
  "Asia/Khandyga",
  "Asia/Kolkata",
  "Asia/Krasnoyarsk",
  "Asia/Kuala_Lumpur",
  "Asia/Kuching",
  "Asia/Kuwait",
  "Asia/Macao",
  "Asia/Macau",
  "Asia/Magadan",
  "Asia/Makassar",
  "Asia/Manila",
  "Asia/Muscat",
  "Asia/Nicosia",
  "Asia/Novokuznetsk",
  "Asia/Novosibirsk",
  "Asia/Omsk",
  "Asia/Oral",
  "Asia/Phnom_Penh",
  "Asia/Pontianak",
  "Asia/Pyongyang",
  "Asia/Qatar",
  "Asia/Qostanay",
  "Asia/Qyzylorda",
  "Asia/Rangoon",
  "Asia/Riyadh",
  "Asia/Saigon",
  "Asia/Sakhalin",
  "Asia/Samarkand",
  "Asia/Seoul",
  "Asia/Shanghai",
  "Asia/Singapore",
  "Asia/Srednekolymsk",
  "Asia/Taipei",
  "Asia/Tashkent",
  "Asia/Tbilisi",
  "Asia/Tehran",
  "Asia/Tel_Aviv",
  "Asia/Thimbu",
  "Asia/Thimphu",
  "Asia/Tokyo",
  "Asia/Tomsk",
  "Asia/Ujung_Pandang",
  "Asia/Ulaanbaatar",
  "Asia/Ulan_Bator",
  "Asia/Urumqi",
  "Asia/Ust-Nera",
  "Asia/Vientiane",
  "Asia/Vladivostok",
  "Asia/Yakutsk",
  "Asia/Yangon",
  "Asia/Yekaterinburg",
  "Asia/Yerevan",
  "Atlantic/Azores",
  "Atlantic/Bermuda",
  "Atlantic/Canary",
  "Atlantic/Cape_Verde",
  "Atlantic/Faeroe",
  "Atlantic/Faroe",
  "Atlantic/Jan_Mayen",
  "Atlantic/Madeira",
  "Atlantic/Reykjavik",
  "Atlantic/South_Georgia",
  "Atlantic/St_Helena",
  "Atlantic/Stanley",
  "Australia/ACT",
  "Australia/Adelaide",
  "Australia/Brisbane",
  "Australia/Broken_Hill",
  "Australia/Canberra",
  "Australia/Currie",
  "Australia/Darwin",
  "Australia/Eucla",
  "Australia/Hobart",
  "Australia/LHI",
  "Australia/Lindeman",
  "Australia/Lord_Howe",
  "Australia/Melbourne",
  "Australia/North",
  "Australia/NSW",
  "Australia/Perth",
  "Australia/Queensland",
  "Australia/South",
  "Australia/Sydney",
  "Australia/Tasmania",
  "Australia/Victoria",
  "Australia/West",
  "Australia/Yancowinna",
  "Brazil/Acre",
  "Brazil/DeNoronha",
  "Brazil/East",
  "Brazil/West",
  "Canada/Atlantic",
  "Canada/Central",
  "Canada/Eastern",
  "Canada/Mountain",
  "Canada/Newfoundland",
  "Canada/Pacific",
  "Canada/Saskatchewan",
  "Canada/Yukon",
  "CET",
  "Chile/Continental",
  "Chile/EasterIsland",
  "CST6CDT",
  "Cuba",
  "EET",
  "Egypt",
  "Eire",
  "EST",
  "EST5EDT",
  "Etc/GMT",
  "Etc/GMT-0",
  "Etc/GMT-1",
  "Etc/GMT-10",
  "Etc/GMT-11",
  "Etc/GMT-12",
  "Etc/GMT-13",
  "Etc/GMT-14",
  "Etc/GMT-2",
  "Etc/GMT-3",
  "Etc/GMT-4",
  "Etc/GMT-5",
  "Etc/GMT-6",
  "Etc/GMT-7",
  "Etc/GMT-8",
  "Etc/GMT-9",
  "Etc/GMT+0",
  "Etc/GMT+1",
  "Etc/GMT+10",
  "Etc/GMT+11",
  "Etc/GMT+12",
  "Etc/GMT+2",
  "Etc/GMT+3",
  "Etc/GMT+4",
  "Etc/GMT+5",
  "Etc/GMT+6",
  "Etc/GMT+7",
  "Etc/GMT+8",
  "Etc/GMT+9",
  "Etc/GMT0",
  "Etc/Greenwich",
  "Etc/UCT",
  "Etc/Universal",
  "Etc/UTC",
  "Etc/Zulu",
  "Europe/Amsterdam",
  "Europe/Andorra",
  "Europe/Astrakhan",
  "Europe/Athens",
  "Europe/Belfast",
  "Europe/Belgrade",
  "Europe/Berlin",
  "Europe/Bratislava",
  "Europe/Brussels",
  "Europe/Bucharest",
  "Europe/Budapest",
  "Europe/Busingen",
  "Europe/Chisinau",
  "Europe/Copenhagen",
  "Europe/Dublin",
  "Europe/Gibraltar",
  "Europe/Guernsey",
  "Europe/Helsinki",
  "Europe/Isle_of_Man",
  "Europe/Istanbul",
  "Europe/Jersey",
  "Europe/Kaliningrad",
  "Europe/Kiev",
  "Europe/Kirov",
  "Europe/Kyiv",
  "Europe/Lisbon",
  "Europe/Ljubljana",
  "Europe/London",
  "Europe/Luxembourg",
  "Europe/Madrid",
  "Europe/Malta",
  "Europe/Mariehamn",
  "Europe/Minsk",
  "Europe/Monaco",
  "Europe/Moscow",
  "Europe/Nicosia",
  "Europe/Oslo",
  "Europe/Paris",
  "Europe/Podgorica",
  "Europe/Prague",
  "Europe/Riga",
  "Europe/Rome",
  "Europe/Samara",
  "Europe/San_Marino",
  "Europe/Sarajevo",
  "Europe/Saratov",
  "Europe/Simferopol",
  "Europe/Skopje",
  "Europe/Sofia",
  "Europe/Stockholm",
  "Europe/Tallinn",
  "Europe/Tirane",
  "Europe/Tiraspol",
  "Europe/Ulyanovsk",
  "Europe/Uzhgorod",
  "Europe/Vaduz",
  "Europe/Vatican",
  "Europe/Vienna",
  "Europe/Vilnius",
  "Europe/Volgograd",
  "Europe/Warsaw",
  "Europe/Zagreb",
  "Europe/Zaporozhye",
  "Europe/Zurich",
  "GB",
  "GB-Eire",
  "GMT",
  "GMT-0",
  "GMT+0",
  "GMT0",
  "Greenwich",
  "Hongkong",
  "HST",
  "Iceland",
  "Indian/Antananarivo",
  "Indian/Chagos",
  "Indian/Christmas",
  "Indian/Cocos",
  "Indian/Comoro",
  "Indian/Kerguelen",
  "Indian/Mahe",
  "Indian/Maldives",
  "Indian/Mauritius",
  "Indian/Mayotte",
  "Indian/Reunion",
  "Iran",
  "Israel",
  "Jamaica",
  "Japan",
  "Kwajalein",
  "Libya",
  "MET",
  "Mexico/BajaNorte",
  "Mexico/BajaSur",
  "Mexico/General",
  "MST",
  "MST7MDT",
  "Navajo",
  "NZ",
  "NZ-CHAT",
  "Pacific/Apia",
  "Pacific/Auckland",
  "Pacific/Bougainville",
  "Pacific/Chatham",
  "Pacific/Chuuk",
  "Pacific/Easter",
  "Pacific/Efate",
  "Pacific/Enderbury",
  "Pacific/Fakaofo",
  "Pacific/Fiji",
  "Pacific/Funafuti",
  "Pacific/Galapagos",
  "Pacific/Gambier",
  "Pacific/Guadalcanal",
  "Pacific/Guam",
  "Pacific/Honolulu",
  "Pacific/Johnston",
  "Pacific/Kanton",
  "Pacific/Kiritimati",
  "Pacific/Kosrae",
  "Pacific/Kwajalein",
  "Pacific/Majuro",
  "Pacific/Marquesas",
  "Pacific/Midway",
  "Pacific/Nauru",
  "Pacific/Niue",
  "Pacific/Norfolk",
  "Pacific/Noumea",
  "Pacific/Pago_Pago",
  "Pacific/Palau",
  "Pacific/Pitcairn",
  "Pacific/Pohnpei",
  "Pacific/Ponape",
  "Pacific/Port_Moresby",
  "Pacific/Rarotonga",
  "Pacific/Saipan",
  "Pacific/Samoa",
  "Pacific/Tahiti",
  "Pacific/Tarawa",
  "Pacific/Tongatapu",
  "Pacific/Truk",
  "Pacific/Wake",
  "Pacific/Wallis",
  "Pacific/Yap",
  "Poland",
  "Portugal",
  "PRC",
  "PST8PDT",
  "ROC",
  "ROK",
  "Singapore",
  "Turkey",
  "UCT",
  "Universal",
  "US/Alaska",
  "US/Aleutian",
  "US/Arizona",
  "US/Central",
  "US/East-Indiana",
  "US/Eastern",
  "US/Hawaii",
  "US/Indiana-Starke",
  "US/Michigan",
  "US/Mountain",
  "US/Pacific",
  "US/Samoa",
  "UTC",
  "W-SU",
  "WET",
  "Zulu"
];

class WebsitesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timeZone: "", websites: []};
        this.setTimeZone = this.setTimeZone.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.insertSite = this.insertSite.bind(this);
        this.deleteSite = this.deleteSite.bind(this);
        this.validateSite = this.validateSite.bind(this);
        this.saveSites = this.saveSites.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.tempBlockSite = this.tempBlockSite.bind(this);
        this.days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    }

    componentDidMount() {
        if (this.state.websites.length === 0) {
            let blockListUrl = 'https://8a85v0qev8.execute-api.us-east-2.amazonaws.com/Production/blocklist'
            fetch(blockListUrl)
                .then(data => data.json())
                .then(info => {
                    console.log("info", info)
                    this.setState(info)
                })
        } else {
            console.log("Fail");
        }
    }

    setTimeZone(event) {
        let tz = event.target.value
        let newState = this.state
        newState.timeZone = tz
        this.setState(newState)
    }

    toggleDetails(event) {
        console.log(event);
        let targetId = event.target.parentNode.id;
        let targetArray = targetId.split('_');
        let index = targetArray[0];

        this.days.map(day => {
            let dayRow = document.getElementById(index + '_' + day);            
            dayRow.style.display = ( dayRow.style.display === '' ? 'none' : '');
            return true;
        })
    }

    tempBlockSite(event) {
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let siteNdx = info_array[0];
        let targetUrl = this.state.websites[siteNdx].url;
        let apiUrl = 'https://8a85v0qev8.execute-api.us-east-2.amazonaws.com/Production/blocksite'
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify({"targetSite": targetUrl}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .finally(alert('Site blocked.'))

    }

    checkAll(event) {
        event.stopPropagation();
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let siteNdx = info_array[0];
        let newState = this.state;

        this.days.map(day => {
            newState.websites[siteNdx].days[day].map((hour, ndx) => {
               newState.websites[siteNdx].days[day][ndx] = 1;                
                return true;
            })
            return true;
        })

        this.setState(newState);
    }

    clearAll(event) {
        event.stopPropagation();
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let siteNdx = info_array[0];
        let newState = this.state;

        this.days.map(day => {
            newState.websites[siteNdx].days[day].map((hour, ndx) => {
                newState.websites[siteNdx].days[day][ndx] = 0;                
                return true;
            })
            return true;
        })

        this.setState(newState);
    }

    saveSites() {
        fetch('https://8a85v0qev8.execute-api.us-east-2.amazonaws.com/Production/blocklist', {
            method: 'PATCH',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .finally(alert('Save successful!'))

    }

    insertSite() {
        let siteEntry = document.getElementById('newSiteForm');
        let newUrl = siteEntry.value;
        let newEntry = {
            "url": newUrl,
            "days":
            {
                "MONDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "TUESDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "WEDNESDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "THURSDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "FRIDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "SATURDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "SUNDAY": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
        }
        let oldSites = this.state.websites;
        oldSites.push(newEntry);
        this.setState(newEntry);

    }

    validateSite(event) {
        let siteValue = event.target.value;
        let siteRegex = /.*\....?/;
        let addSiteBtn = document.getElementById('add_site_btn');
        if (
            siteRegex.test(siteValue) && 
            (this.state.websites.map(site => {return site.url;}).indexOf(siteValue)) === -1 
            ) {

            addSiteBtn.disabled = false;
        } else {
            addSiteBtn.disabled = true;
        }
    }

    deleteSite(event) {
        let raw_info = event.target.id;
        let info_array = raw_info.split("_");
        let siteNdx = info_array[0];
        let newSites = this.state.websites.splice(siteNdx, 1);

        this.setState(newSites);
    }

    updateTable(event) {
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
                    <hr />
                    <br />
                    <br />
                    <div style={{
                        width: "100%",
                        position: "fixed",
                        bottom: 0,
                        padding: "1em",
                        backgroundColor: "rgba(255, 255, 255, .5)"
                    }}>
                        <div className="mx-auto">
                            <input className="form-control " type="text" id="newSiteForm" onChange={this.validateSite} style={{width: "300px", display: "inline-block", marginRight: "1em"}} />
                            <button id="add_site_btn" style={{ marginRight: "1em" }} className="btn btn-primary" onClick={this.insertSite}>Add Site</button>
                            <button className="btn btn-success" onClick={this.saveSites}>Save!</button>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <h1>Block List</h1>

                    <select 
                        onChange={this.setTimeZone}
                        defaultValue={this.state.timeZone}
                        id="timeZoneSelect">
                    { 
                        timeZones.map((val, ndx) => {
                            return <option key={`tz${ndx}`} value={val}>{val}</option>
                        })
                    }
                        
                    </select>
                    <br />
                    <br />
                    <Table className="table table-striped table-bordered table-light table-hover">
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
                                        <tr key={ndx + "_header"} id={ndx + "_header"} onClick={this.toggleDetails}>
                                            <td colSpan="14" key={ndx + "_url_col"}>{site.url}</td>
                                            <td colSpan="3" key={ndx + "_blockNow_col"}><button key={ndx + "_blockNow_btn"} className="btn btn-warning" id={ndx + "_site_blockNow"} onClick={this.tempBlockSite} >Block Now</button></td>
                                            <td colSpan="3" key={ndx + "_checkAll_col"}><button key={ndx + "_checkAll_btn"} className="btn btn-warning" id={ndx + "_site_checkAll"} onClick={this.checkAll} >Check All</button></td>
                                            <td colSpan="3" key={ndx + "_clearAll_col"}><button key={ndx + "_clearAll_btn"} className="btn btn-warning" id={ndx + "_site_clearAll"} onClick={this.clearAll} >Clear All</button></td>
                                            <td colSpan="3" key={ndx + "_delete_col"}><button key={ndx + "_delete_btn"} className="btn btn-danger" id={ndx + "_site_deleteSite"} onClick={this.deleteSite} >Delete</button></td>
                                        </tr>

                                        {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map((day) => {
                                            return (
                                                <tr  key={ndx + "_" + day} id={ndx + "_" + day} style={{display: 'none'}}>
                                                    <td key={ndx + "_blank"}></td>
                                                    <td key={ndx + "_label"}>
                                                        {day}
                                                    </td>
                                                    {site.days[day].map((val, subndx) => {
                                                        return (
                                                            <>
                                                                <td key={ndx + "_" + day + "_" + subndx + "_td"}>
                                                                    <input
                                                                        key={ndx + "_" + day + "_" + subndx + "_input"}
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id={ndx + "_" + day + "_" + subndx}
                                                                        checked={val ? "checked" : ""}
                                                                        onChange={this.updateTable}
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
                    <hr />
                    <br />
                    <br />
                    <div style={{
                        width: "100%",
                        position: "fixed",
                        bottom: 0,
                        padding: "1em",
                        backgroundColor: "rgba(255, 255, 255, .5)"
                    }}>
                        <div className="mx-auto">
                            <input className="form-control " type="text" id="newSiteForm" onChange={this.validateSite} style={{width: "300px", display: "inline-block", marginRight: "1em"}} />
                            <button id="add_site_btn" style={{ marginRight: "1em" }} className="btn btn-primary" onClick={this.insertSite}>Add Site</button>
                            <button className="btn btn-success" onClick={this.saveSites}>Save!</button>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default WebsitesTable;
