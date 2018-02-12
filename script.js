let tabBat;
let tabBowl;
let team1;
let team2;
let teams;
let data = {
    "dateTimeGMT": "2016-11-09T04:00:00.000Z",
    "type": "Test",
    "data": {
        "man-of-the-match": "Moeen Ali",
        "team": [
            {
                "name": "India",
                "players": [
                    {
                        "pid": "237095",
                        "name": "M Vijay"
                    },
                    {
                        "pid": "28763",
                        "name": "G Gambhir"
                    },
                    {
                        "pid": "32540",
                        "name": "CA Pujara"
                    },
                    {
                        "pid": "253802",
                        "name": "V Kohli"
                    },
                    {
                        "pid": "31107",
                        "name": "A Mishra"
                    },
                    {
                        "pid": "277916",
                        "name": "AM Rahane"
                    },
                    {
                        "pid": "26421",
                        "name": "R Ashwin"
                    },
                    {
                        "pid": "279810",
                        "name": "WP Saha"
                    },
                    {
                        "pid": "234675",
                        "name": "RA Jadeja"
                    },
                    {
                        "pid": "376116",
                        "name": "UT Yadav"
                    },
                    {
                        "pid": "481896",
                        "name": "Mohammed Shami"
                    }
                ]
            },
            {
                "name": "England",
                "players": [
                    {
                        "pid": "11728",
                        "name": "AN Cook"
                    },
                    {
                        "pid": "632172",
                        "name": "H Hameed"
                    },
                    {
                        "pid": "303669",
                        "name": "JE Root"
                    },
                    {
                        "pid": "521637",
                        "name": "BM Duckett"
                    },
                    {
                        "pid": "8917",
                        "name": "MM Ali"
                    },
                    {
                        "pid": "311158",
                        "name": "BA Stokes"
                    },
                    {
                        "pid": "297433",
                        "name": "JM Bairstow"
                    },
                    {
                        "pid": "247235",
                        "name": "CR Woakes"
                    },
                    {
                        "pid": "244497",
                        "name": "AU Rashid"
                    },
                    {
                        "pid": "349853",
                        "name": "ZS Ansari"
                    },
                    {
                        "pid": "10617",
                        "name": "SCJ Broad"
                    }
                ]
            }
        ],
        "batting": [
            {
                "title": "England 1st Innings",
                "scores": [
                    {
                        "pid": "11728",
                        "batsman": "AN Cook (c)",
                        "dismissal-info": "lbw b Jadeja",
                        "R": 21,
                        "B": 47,
                        "4s": 2,
                        "6s": 0,
                        "SR": 44,
                        "dismissal": "lbw",
                        "dismissal-by": {
                            "pid": "234675",
                            "name": "RA Jadeja"
                        }
                    },
                    {
                        "pid": "632172",
                        "batsman": "H Hameed",
                        "dismissal-info": "lbw b Ashwin",
                        "R": 31,
                        "B": 82,
                        "4s": 6,
                        "6s": 0,
                        "SR": 37,
                        "dismissal": "lbw",
                        "dismissal-by": {
                            "pid": "26421",
                            "name": "R Ashwin"
                        }
                    },
                    {
                        "pid": "303669",
                        "batsman": "JE Root",
                        "dismissal-info": "c & b Yadav",
                        "R": 124,
                        "B": 180,
                        "4s": 11,
                        "6s": 1,
                        "SR": 68,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                            "pid": "376116",
                            "name": "UT Yadav"
                        }
                    },
                    {
                        "pid": "521637",
                        "batsman": "BM Duckett",
                        "dismissal-info": "c Rahane b Ashwin",
                        "R": 13,
                        "B": 17,
                        "4s": 3,
                        "6s": 0,
                        "SR": 76,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "277916",
                            "name": "AM Rahane"
                        }
                    },
                    {
                        "pid": "8917",
                        "batsman": "MM Ali",
                        "dismissal-info": " b Mohammed Shami",
                        "R": 117,
                        "B": 213,
                        "4s": 13,
                        "6s": 0,
                        "SR": 54,
                        "dismissal": "bowled",
                        "dismissal-by": {
                            "pid": "481896",
                            "name": "Mohammed Shami"
                        }
                    },
                    {
                        "pid": "311158",
                        "batsman": "BA Stokes",
                        "dismissal-info": "c †Saha b Yadav",
                        "R": 128,
                        "B": 235,
                        "4s": 13,
                        "6s": 2,
                        "SR": 54,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "279810",
                            "name": "WP Saha"
                        }
                    },
                    {
                        "pid": "297433",
                        "batsman": "JM Bairstow †",
                        "dismissal-info": "c †Saha b Mohammed Shami",
                        "R": 46,
                        "B": 57,
                        "4s": 5,
                        "6s": 2,
                        "SR": 80,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "279810",
                            "name": "WP Saha"
                        }
                    },
                    {
                        "pid": "247235",
                        "batsman": "CR Woakes",
                        "dismissal-info": "c †Saha b Jadeja",
                        "R": 4,
                        "B": 8,
                        "4s": 1,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "279810",
                            "name": "WP Saha"
                        }
                    },
                    {
                        "pid": "244497",
                        "batsman": "AU Rashid",
                        "dismissal-info": "c Yadav b Jadeja",
                        "R": 5,
                        "B": 20,
                        "4s": 1,
                        "6s": 0,
                        "SR": 25,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "376116",
                            "name": "UT Yadav"
                        }
                    },
                    {
                        "pid": "349853",
                        "batsman": "ZS Ansari",
                        "dismissal-info": "lbw b Mishra",
                        "R": 32,
                        "B": 83,
                        "4s": 3,
                        "6s": 0,
                        "SR": 38,
                        "dismissal": "lbw",
                        "dismissal-by": {
                            "pid": "31107",
                            "name": "A Mishra"
                        }
                    },
                    {
                        "pid": "10617",
                        "batsman": "SCJ Broad",
                        "dismissal-info": "not out",
                        "R": 6,
                        "B": 16,
                        "4s": 0,
                        "6s": 0,
                        "SR": 37,
                        "dismissal": "not out"
                    }
                ]
            },
            {
                "title": "India 1st Innings",
                "scores": [
                    {
                        "pid": "237095",
                        "batsman": "M Vijay",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 126,
                        "B": 301,
                        "4s": 9,
                        "6s": 4,
                        "SR": 41,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "632172",
                            "name": "H Hameed"
                        }
                    },
                    {
                        "pid": "28763",
                        "batsman": "G Gambhir",
                        "dismissal-info": "lbw b Broad",
                        "R": 29,
                        "B": 72,
                        "4s": 4,
                        "6s": 0,
                        "SR": 40,
                        "dismissal": "lbw",
                        "dismissal-by": {
                            "pid": "10617",
                            "name": "SCJ Broad"
                        }
                    },
                    {
                        "pid": "32540",
                        "batsman": "CA Pujara",
                        "dismissal-info": "c Cook b Stokes",
                        "R": 124,
                        "B": 206,
                        "4s": 17,
                        "6s": 0,
                        "SR": 60,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "11728",
                            "name": "AN Cook"
                        }
                    },
                    {
                        "pid": "253802",
                        "batsman": "V Kohli (c)",
                        "dismissal-info": "hit wicket b Rashid",
                        "R": 40,
                        "B": 95,
                        "4s": 5,
                        "6s": 0,
                        "SR": 42
                    },
                    {
                        "pid": "31107",
                        "batsman": "A Mishra",
                        "dismissal-info": "c Hameed b Ansari",
                        "R": 0,
                        "B": 2,
                        "4s": 0,
                        "6s": 0,
                        "SR": 0,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "632172",
                            "name": "H Hameed"
                        }
                    },
                    {
                        "pid": "277916",
                        "batsman": "AM Rahane",
                        "dismissal-info": " b Ansari",
                        "R": 13,
                        "B": 30,
                        "4s": 1,
                        "6s": 0,
                        "SR": 43,
                        "dismissal": "bowled",
                        "dismissal-by": {
                            "pid": "349853",
                            "name": "ZS Ansari"
                        }
                    },
                    {
                        "pid": "26421",
                        "batsman": "R Ashwin",
                        "dismissal-info": "c Ansari b Ali",
                        "R": 70,
                        "B": 139,
                        "4s": 7,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "349853",
                            "name": "ZS Ansari"
                        }
                    },
                    {
                        "pid": "279810",
                        "batsman": "WP Saha †",
                        "dismissal-info": "c †Bairstow b Ali",
                        "R": 35,
                        "B": 82,
                        "4s": 2,
                        "6s": 1,
                        "SR": 42,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "297433",
                            "name": "JM Bairstow"
                        }
                    },
                    {
                        "pid": "234675",
                        "batsman": "RA Jadeja",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 12,
                        "B": 26,
                        "4s": 0,
                        "6s": 1,
                        "SR": 46,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "632172",
                            "name": "H Hameed"
                        }
                    },
                    {
                        "pid": "376116",
                        "batsman": "UT Yadav",
                        "dismissal-info": "c Stokes b Rashid",
                        "R": 5,
                        "B": 12,
                        "4s": 1,
                        "6s": 0,
                        "SR": 41,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "311158",
                            "name": "BA Stokes"
                        }
                    },
                    {
                        "pid": "481896",
                        "batsman": "Mohammed Shami",
                        "dismissal-info": "not out",
                        "R": 8,
                        "B": 7,
                        "4s": 0,
                        "6s": 1,
                        "SR": 114,
                        "dismissal": "not out"
                    }
                ]
            },
            {
                "title": "England 2nd Innings",
                "scores": [
                    {
                        "pid": "11728",
                        "batsman": "AN Cook (c)",
                        "dismissal-info": "c Jadeja b Ashwin",
                        "R": 130,
                        "B": 243,
                        "4s": 13,
                        "6s": 0,
                        "SR": 53,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "234675",
                            "name": "RA Jadeja"
                        }
                    },
                    {
                        "pid": "632172",
                        "batsman": "H Hameed",
                        "dismissal-info": "c & b Mishra",
                        "R": 82,
                        "B": 177,
                        "4s": 7,
                        "6s": 1,
                        "SR": 46,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                            "pid": "31107",
                            "name": "A Mishra"
                        }
                    },
                    {
                        "pid": "303669",
                        "batsman": "JE Root",
                        "dismissal-info": "c †Saha b Mishra",
                        "R": 4,
                        "B": 5,
                        "4s": 0,
                        "6s": 0,
                        "SR": 80,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "279810",
                            "name": "WP Saha"
                        }
                    },
                    {
                        "pid": "311158",
                        "batsman": "BA Stokes",
                        "dismissal-info": "not out",
                        "R": 29,
                        "B": 29,
                        "4s": 5,
                        "6s": 0,
                        "SR": 100,
                        "dismissal": "not out"
                    }
                ]
            },
            {
                "title": "India 2nd Innings",
                "scores": [
                    {
                        "pid": "237095",
                        "batsman": "M Vijay",
                        "dismissal-info": "c Hameed b Rashid",
                        "R": 31,
                        "B": 71,
                        "4s": 6,
                        "6s": 0,
                        "SR": 43,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "632172",
                            "name": "H Hameed"
                        }
                    },
                    {
                        "pid": "28763",
                        "batsman": "G Gambhir",
                        "dismissal-info": "c Root b Woakes",
                        "R": 0,
                        "B": 6,
                        "4s": 0,
                        "6s": 0,
                        "SR": 0,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "303669",
                            "name": "JE Root"
                        }
                    },
                    {
                        "pid": "32540",
                        "batsman": "CA Pujara",
                        "dismissal-info": "lbw b Rashid",
                        "R": 18,
                        "B": 36,
                        "4s": 2,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "lbw",
                        "dismissal-by": {
                            "pid": "244497",
                            "name": "AU Rashid"
                        }
                    },
                    {
                        "pid": "253802",
                        "batsman": "V Kohli (c)",
                        "dismissal-info": "not out",
                        "R": 49,
                        "B": 98,
                        "4s": 6,
                        "6s": 0,
                        "SR": 50,
                        "dismissal": "not out"
                    },
                    {
                        "pid": "277916",
                        "batsman": "AM Rahane",
                        "dismissal-info": " b Ali",
                        "R": 1,
                        "B": 5,
                        "4s": 0,
                        "6s": 0,
                        "SR": 20,
                        "dismissal": "bowled",
                        "dismissal-by": {
                            "pid": "8917",
                            "name": "MM Ali"
                        }
                    },
                    {
                        "pid": "26421",
                        "batsman": "R Ashwin",
                        "dismissal-info": "c Root b Ansari",
                        "R": 32,
                        "B": 53,
                        "4s": 6,
                        "6s": 0,
                        "SR": 60,
                        "dismissal": "catch",
                        "dismissal-by": {
                            "pid": "303669",
                            "name": "JE Root"
                        }
                    },
                    {
                        "pid": "279810",
                        "batsman": "WP Saha †",
                        "dismissal-info": "c & b Rashid",
                        "R": 9,
                        "B": 13,
                        "4s": 2,
                        "6s": 0,
                        "SR": 69,
                        "dismissal": "catch & bowled",
                        "dismissal-by": {
                            "pid": "244497",
                            "name": "AU Rashid"
                        }
                    },
                    {
                        "pid": "234675",
                        "batsman": "RA Jadeja",
                        "dismissal-info": "not out",
                        "R": 32,
                        "B": 33,
                        "4s": 6,
                        "6s": 0,
                        "SR": 96,
                        "dismissal": "not out"
                    }
                ]
            }
        ],
        "bowling": [
            {
                "title": "Bowling To England 1st Innings",
                "scores": [
                    {
                        "pid": "481896",
                        "bowler": "Mohammed Shami",
                        "O": "28.1",
                        "M": "5",
                        "R": "65",
                        "W": "2",
                        "Econ": "2.30",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "376116",
                        "bowler": "UT Yadav",
                        "O": "31.5",
                        "M": "3",
                        "R": "112",
                        "W": "2",
                        "Econ": "3.51",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "26421",
                        "bowler": "R Ashwin",
                        "O": "46.0",
                        "M": "3",
                        "R": "167",
                        "W": "2",
                        "Econ": "3.63",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "234675",
                        "bowler": "RA Jadeja",
                        "O": "30.0",
                        "M": "4",
                        "R": "86",
                        "W": "3",
                        "Econ": "2.86",
                        "0s": 0,
                        "4s": 1,
                        "6s": 0
                    },
                    {
                        "pid": "31107",
                        "bowler": "A Mishra",
                        "O": "23.3",
                        "M": "3",
                        "R": "98",
                        "W": "1",
                        "Econ": "4.17",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    }
                ]
            },
            {
                "title": "Bowling To India 1st Innings",
                "scores": [
                    {
                        "pid": "10617",
                        "bowler": "SCJ Broad",
                        "O": "29.0",
                        "M": "9",
                        "R": "78",
                        "W": "1",
                        "Econ": "2.68",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "247235",
                        "bowler": "CR Woakes",
                        "O": "31.0",
                        "M": "6",
                        "R": "57",
                        "W": "0",
                        "Econ": "1.83",
                        "0s": 1,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "8917",
                        "bowler": "MM Ali",
                        "O": "31.0",
                        "M": "7",
                        "R": "85",
                        "W": "2",
                        "Econ": "2.74",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "349853",
                        "bowler": "ZS Ansari",
                        "O": "23.0",
                        "M": "1",
                        "R": "77",
                        "W": "2",
                        "Econ": "3.34",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "244497",
                        "bowler": "AU Rashid",
                        "O": "31.0",
                        "M": "1",
                        "R": "114",
                        "W": "4",
                        "Econ": "3.67",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "311158",
                        "bowler": "BA Stokes",
                        "O": "17.0",
                        "M": "2",
                        "R": "52",
                        "W": "1",
                        "Econ": "3.05",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    }
                ]
            },
            {
                "title": "Bowling To England 2nd Innings",
                "scores": [
                    {
                        "pid": "481896",
                        "bowler": "Mohammed Shami",
                        "O": "11.0",
                        "M": "1",
                        "R": "29",
                        "W": "0",
                        "Econ": "2.63",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "234675",
                        "bowler": "RA Jadeja",
                        "O": "15.0",
                        "M": "1",
                        "R": "47",
                        "W": "0",
                        "Econ": "3.13",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "26421",
                        "bowler": "R Ashwin",
                        "O": "23.3",
                        "M": "4",
                        "R": "63",
                        "W": "1",
                        "Econ": "2.68",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "376116",
                        "bowler": "UT Yadav",
                        "O": "13.0",
                        "M": "2",
                        "R": "47",
                        "W": "0",
                        "Econ": "3.61",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "31107",
                        "bowler": "A Mishra",
                        "O": "13.0",
                        "M": "0",
                        "R": "60",
                        "W": "2",
                        "Econ": "4.61",
                        "0s": 0,
                        "4s": 1,
                        "6s": 0
                    }
                ]
            },
            {
                "title": "Bowling To India 2nd Innings",
                "scores": [
                    {
                        "pid": "10617",
                        "bowler": "SCJ Broad",
                        "O": "3.0",
                        "M": "2",
                        "R": "8",
                        "W": "0",
                        "Econ": "2.66",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "247235",
                        "bowler": "CR Woakes",
                        "O": "4.0",
                        "M": "1",
                        "R": "6",
                        "W": "1",
                        "Econ": "1.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "349853",
                        "bowler": "ZS Ansari",
                        "O": "8.0",
                        "M": "1",
                        "R": "41",
                        "W": "1",
                        "Econ": "5.12",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "8917",
                        "bowler": "MM Ali",
                        "O": "19.0",
                        "M": "5",
                        "R": "47",
                        "W": "1",
                        "Econ": "2.47",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "244497",
                        "bowler": "AU Rashid",
                        "O": "14.3",
                        "M": "1",
                        "R": "64",
                        "W": "3",
                        "Econ": "4.41",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "311158",
                        "bowler": "BA Stokes",
                        "O": "2.0",
                        "M": "1",
                        "R": "1",
                        "W": "0",
                        "Econ": "0.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    },
                    {
                        "pid": "303669",
                        "bowler": "JE Root",
                        "O": "2.0",
                        "M": "0",
                        "R": "5",
                        "W": "0",
                        "Econ": "2.50",
                        "0s": 0,
                        "4s": 0,
                        "6s": 0
                    }
                ]
            }
        ],
        "fielding": [
            {
                "scores": [
                    {
                        "pid": "26421",
                        "catch": 0,
                        "lbw": 1,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "R Ashwin"
                    },
                    {
                        "pid": "31107",
                        "catch": 0,
                        "lbw": 1,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "A Mishra"
                    },
                    {
                        "pid": "234675",
                        "catch": 0,
                        "lbw": 1,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "RA Jadeja"
                    },
                    {
                        "pid": "277916",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "AM Rahane"
                    },
                    {
                        "pid": "279810",
                        "catch": 3,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "WP Saha"
                    },
                    {
                        "pid": "376116",
                        "catch": 2,
                        "lbw": 0,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "UT Yadav"
                    },
                    {
                        "pid": "481896",
                        "catch": 0,
                        "lbw": 0,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "Mohammed Shami"
                    }
                ],
                "title": "Fielding for England 1st Innings"
            },
            {
                "scores": [
                    {
                        "pid": "10617",
                        "catch": 0,
                        "lbw": 1,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "SCJ Broad"
                    },
                    {
                        "pid": "11728",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "AN Cook"
                    },
                    {
                        "pid": "297433",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "JM Bairstow"
                    },
                    {
                        "pid": "311158",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "BA Stokes"
                    },
                    {
                        "pid": "349853",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "ZS Ansari"
                    },
                    {
                        "pid": "632172",
                        "catch": 3,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "H Hameed"
                    }
                ],
                "title": "Fielding for India 1st Innings"
            },
            {
                "scores": [
                    {
                        "pid": "31107",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "A Mishra"
                    },
                    {
                        "pid": "234675",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "RA Jadeja"
                    },
                    {
                        "pid": "279810",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "WP Saha"
                    }
                ],
                "title": "Fielding for England 2nd Innings"
            },
            {
                "scores": [
                    {
                        "pid": "8917",
                        "catch": 0,
                        "lbw": 0,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "MM Ali"
                    },
                    {
                        "pid": "244497",
                        "catch": 1,
                        "lbw": 1,
                        "bowled": 1,
                        "stumped": 0,
                        "name": "AU Rashid"
                    },
                    {
                        "pid": "303669",
                        "catch": 2,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "JE Root"
                    },
                    {
                        "pid": "632172",
                        "catch": 1,
                        "lbw": 0,
                        "bowled": 0,
                        "stumped": 0,
                        "name": "H Hameed"
                    }
                ],
                "title": "Fielding for India 2nd Innings"
            }
        ],
        "toss_winner_team": "England",
        "matchStarted": true
    },
    "cache3": true,
    "creditsLeft": 170,
    "v": "1",
    "ttl": 8,
    "provider": {
        "source": "letious",
        "url": "https://cricapi.com/",
        "pubDate": "2018-02-12T08:02:40.825Z"
    }
};
$(
    tabBat = $('#bat'),
    tabBowl = $('#bowl'),
    team1 = $('#team1'),
    team2 = $('#team2'),
    teams = $('.collapsible-header')
);
function toggleTeam(ele){

}
function display(){
    // teamNames(1130745);
  let temp = "";
    let names = players(0);
    $.each(names, function (index, value) {
        temp += `<li>${value}</li>`;
    });
    team1.html("");
    team1.html(temp);
    temp = "";
    names = players(1);
    $.each(names, function (index, value) {
        temp += `<li>${value}</li>`;
    });
    team2.html("");
    team2.html(temp);
    batsmen();
    bowler();
}
function players(i){
    let arr = [];
    let tempData = data['data']['team'][i]['players'];
    $.each(tempData, function(index, value){
       arr.push(value['name']);
    });
    return arr;
}
function batsmen(){
    let temp = "";
    let indices = ['batsman', 'dismissal-info', 'R', 'B', '4s', '6s', 'SR'];
    let tempData = data['data']['batting'][0]['scores'];
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td><td>${tempData[count][indices[6]]}</td></tr>`;
        count++;
    });
    tabBat.html("");
    tabBat.html(temp);
}
function bowler(){

    let temp = "";
    let indices = ['bowler', 'O', 'M', 'R', 'W', 'Econ'];
    let tempData = data['data']['bowling'][0]['scores'];
    let count = 0;
    $.each(tempData, function (index, value) {
        temp += `<tr><td>${tempData[count][indices[0]]}</td><td>${tempData[count][indices[1]]}</td><td>${tempData[count][indices[2]]}</td><td>${tempData[count][indices[3]]}</td><td>${tempData[count][indices[4]]}</td><td>${tempData[count][indices[5]]}</td></tr>`;
        count++;
    });

    tabBowl.html("");
    tabBowl.html(temp);
}
// function teamNames(id){
//     $.each(matchList['matches'], function (value) {
//         // console.log("i");
//
//         if(value['unique_id'] === id){
//           console.log("i");
//           teams[0].text(value['team-1']);
//           teams[1].text(value['team-2']);
//       }
//     });
//
// }
display();