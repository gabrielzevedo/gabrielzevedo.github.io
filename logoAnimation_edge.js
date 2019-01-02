/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['210px', '162px', '503', '464', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle7',
                                type: 'rect',
                                rect: ['369px', '266px', '0px', '2px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                transform: [[],['-45']]
                            },
                            {
                                id: 'dir',
                                symbolName: 'dir',
                                type: 'rect',
                                rect: ['134px', '47px', '360px', '410px', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['144px', '107px', '0px', '286px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [2,"rgba(255,255,255,1.00)","solid"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'esq',
                                symbolName: 'esq',
                                type: 'rect',
                                rect: ['82px', '16px', '360px', '409px', 'auto', 'auto'],
                                opacity: '0'
                            },
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['-78px', '-116px', '734px', '734px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [5,"rgb(255, 255, 255)","solid"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'Rectangle3Copy',
                                type: 'rect',
                                rect: ['146px', '-116px', '734px', '734px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [2,"rgb(255, 255, 255)","solid"],
                                transform: [[],['45'],[],['0.68381','0.68381']]
                            },
                            {
                                id: 'bol',
                                symbolName: 'bol',
                                type: 'rect',
                                rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['222px', '-79', '871', '663', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['55px', '283px', '405px', '243px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)",[270,[['rgba(0,0,0,0.27)',1],['rgba(0,0,0,0.00)',100]]]],
                                stroke: [0,"rgb(255, 255, 255)","solid"],
                                transform: [[],['-135'],[],['0.7056','1.82637']]
                            },
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['387px', '232px', '259px', '243px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)",[270,[['rgba(0,0,0,0.08)',1],['rgba(0,0,0,0.00)',100]]]],
                                stroke: [0,"rgb(255, 255, 255)","solid"],
                                transform: [[],['-135'],[],['0.7056','1.82637']]
                            },
                            {
                                id: 'RectangleCopy2',
                                type: 'rect',
                                rect: ['410px', '137px', '407px', '243px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)",[270,[['rgba(0,0,0,0.07)',1],['rgba(0,0,0,0.00)',100]]]],
                                stroke: [0,"rgb(255, 255, 255)","solid"],
                                transform: [[],['-135'],[],['0.7056','1.82637']]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1003px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid170",
                            "left",
                            80,
                            0,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '144px',
                            '144px'
                        ],
                        [
                            "eid202",
                            "left",
                            635,
                            410,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '144px',
                            '146px'
                        ],
                        [
                            "eid217",
                            "opacity",
                            1044,
                            1,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            1045,
                            655,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "top",
                            700,
                            0,
                            "linear",
                            "${dir}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid65",
                            "top",
                            1700,
                            750,
                            "easeOutExpo",
                            "${dir}",
                            '47px',
                            '73px'
                        ],
                        [
                            "eid231",
                            "left",
                            1045,
                            655,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '146px',
                            '-78px'
                        ],
                        [
                            "eid173",
                            "width",
                            80,
                            555,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '0px',
                            '286px'
                        ],
                        [
                            "eid103",
                            "width",
                            1045,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid124",
                            "opacity",
                            2700,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            3080,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid58",
                            "width",
                            2450,
                            0,
                            "linear",
                            "${dir}",
                            '360px',
                            '360px'
                        ],
                        [
                            "eid96",
                            "rotateZ",
                            635,
                            410,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '0deg',
                            '45deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            700,
                            0,
                            "linear",
                            "${esq}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid88",
                            "rotateZ",
                            1700,
                            0,
                            "linear",
                            "${esq}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid171",
                            "top",
                            80,
                            0,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid168",
                            "top",
                            635,
                            0,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid102",
                            "top",
                            1045,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid238",
                            "left",
                            1126,
                            779,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '146px',
                            '-78px'
                        ],
                        [
                            "eid136",
                            "top",
                            2450,
                            250,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '266px',
                            '268px'
                        ],
                        [
                            "eid120",
                            "top",
                            2700,
                            380,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '268px',
                            '270px'
                        ],
                        [
                            "eid139",
                            "opacity",
                            80,
                            555,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            1700,
                            1,
                            "easeOutExpo",
                            "${Rectangle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid59",
                            "height",
                            2450,
                            0,
                            "linear",
                            "${dir}",
                            '410px',
                            '410px'
                        ],
                        [
                            "eid358",
                            "border-width",
                            1044,
                            0,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid54",
                            "width",
                            2450,
                            0,
                            "linear",
                            "${esq}",
                            '360px',
                            '360px'
                        ],
                        [
                            "eid239",
                            "width",
                            1126,
                            779,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '286px',
                            '734px'
                        ],
                        [
                            "eid132",
                            "width",
                            2450,
                            250,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '0px',
                            '182px'
                        ],
                        [
                            "eid48",
                            "width",
                            3080,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '182px',
                            '182px'
                        ],
                        [
                            "eid234",
                            "top",
                            1126,
                            779,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '107px',
                            '-116px'
                        ],
                        [
                            "eid229",
                            "height",
                            1045,
                            655,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '286px',
                            '734px'
                        ],
                        [
                            "eid236",
                            "opacity",
                            1124,
                            2,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid237",
                            "opacity",
                            1126,
                            779,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid375",
                            "scaleY",
                            1905,
                            0,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '0.68381',
                            '0.68381'
                        ],
                        [
                            "eid232",
                            "width",
                            1045,
                            655,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '286px',
                            '734px'
                        ],
                        [
                            "eid108",
                            "opacity",
                            80,
                            0,
                            "linear",
                            "${dir}",
                            '0',
                            '0'
                        ],
                        [
                            "eid111",
                            "opacity",
                            1700,
                            1,
                            "easeOutExpo",
                            "${dir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "rotateZ",
                            700,
                            0,
                            "linear",
                            "${dir}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid90",
                            "rotateZ",
                            1700,
                            0,
                            "linear",
                            "${dir}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid372",
                            "background-color",
                            0,
                            1044,
                            "easeOutExpo",
                            "${Rectangle2}",
                            'rgba(255,255,255,1)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid55",
                            "height",
                            2450,
                            0,
                            "linear",
                            "${esq}",
                            '409px',
                            '409px'
                        ],
                        [
                            "eid49",
                            "height",
                            3080,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid135",
                            "left",
                            2450,
                            250,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '369px',
                            '276px'
                        ],
                        [
                            "eid121",
                            "left",
                            2700,
                            380,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '276px',
                            '280px'
                        ],
                        [
                            "eid214",
                            "left",
                            635,
                            0,
                            "easeOutExpo",
                            "${dir}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid215",
                            "left",
                            700,
                            0,
                            "easeOutExpo",
                            "${dir}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid63",
                            "left",
                            1700,
                            750,
                            "easeOutExpo",
                            "${dir}",
                            '134px',
                            '211px'
                        ],
                        [
                            "eid235",
                            "height",
                            1126,
                            779,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '286px',
                            '734px'
                        ],
                        [
                            "eid230",
                            "top",
                            1045,
                            655,
                            "easeOutExpo",
                            "${Rectangle3}",
                            '107px',
                            '-116px'
                        ],
                        [
                            "eid106",
                            "opacity",
                            80,
                            0,
                            "linear",
                            "${esq}",
                            '0',
                            '0'
                        ],
                        [
                            "eid110",
                            "opacity",
                            1700,
                            1,
                            "easeOutExpo",
                            "${esq}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "left",
                            700,
                            0,
                            "linear",
                            "${esq}",
                            '82px',
                            '84px'
                        ],
                        [
                            "eid62",
                            "left",
                            1700,
                            750,
                            "easeOutExpo",
                            "${esq}",
                            '84px',
                            '8px'
                        ],
                        [
                            "eid131",
                            "rotateZ",
                            2450,
                            0,
                            "linear",
                            "${Rectangle7}",
                            '-45deg',
                            '-45deg'
                        ],
                        [
                            "eid119",
                            "rotateZ",
                            2700,
                            380,
                            "easeOutExpo",
                            "${Rectangle7}",
                            '-45deg',
                            '45deg'
                        ],
                        [
                            "eid92",
                            "top",
                            700,
                            0,
                            "linear",
                            "${esq}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid72",
                            "top",
                            1700,
                            750,
                            "easeOutExpo",
                            "${esq}",
                            '48px',
                            '16px'
                        ],
                        [
                            "eid378",
                            "opacity",
                            3080,
                            920,
                            "easeOutExpo",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid374",
                            "scaleX",
                            1905,
                            0,
                            "easeOutExpo",
                            "${Rectangle3Copy}",
                            '0.68381',
                            '0.68381'
                        ]
                    ]
                }
            },
            "esq": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['-41px', '102px', '289px', '2px', 'auto', 'auto'],
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle1',
                            opacity: '1',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['-41px', '305px', '288px', '2px', 'auto', 'auto'],
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle5',
                            opacity: '0',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['172px', '329px', '220px', '2px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '360px', '409px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle5}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "dir": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['112px', '304px', '289px', '2px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['113px', '101px', '288px', '2px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            transform: [[], ['-45'], [0, 0, 0], [1, 1, 1]],
                            rect: ['-32px', '77px', '220px', '2px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '360px', '410px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bol": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['148px', '124px', '254px', '254px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'Ellipse5',
                            stroke: [13, 'rgba(0,78,156,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1044,
                    autoPlay: true,
                    data: [
                        [
                            "eid318",
                            "left",
                            0,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '121px',
                            '148px'
                        ],
                        [
                            "eid343",
                            "left",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '148px',
                            '163px'
                        ],
                        [
                            "eid319",
                            "top",
                            0,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '82px',
                            '108px'
                        ],
                        [
                            "eid344",
                            "top",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '108px',
                            '124px'
                        ],
                        [
                            "eid327",
                            "scaleY",
                            0,
                            750,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '0',
                            '0.30204'
                        ],
                        [
                            "eid338",
                            "scaleY",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '0.30204',
                            '1.5'
                        ],
                        [
                            "eid320",
                            "width",
                            0,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid335",
                            "width",
                            750,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid341",
                            "width",
                            1044,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid346",
                            "border-width",
                            0,
                            750,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '13px',
                            '16px'
                        ],
                        [
                            "eid330",
                            "border-width",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '16px',
                            '0px'
                        ],
                        [
                            "eid326",
                            "scaleX",
                            0,
                            750,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '0',
                            '0.30203'
                        ],
                        [
                            "eid337",
                            "scaleX",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            '0.30203',
                            '1.5'
                        ],
                        [
                            "eid321",
                            "height",
                            0,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid336",
                            "height",
                            750,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid342",
                            "height",
                            1044,
                            0,
                            "easeOutExpo",
                            "${Ellipse5}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid355",
                            "border-color",
                            0,
                            750,
                            "easeOutBounce",
                            "${Ellipse5}",
                            'rgb(0, 188, 215)',
                            'rgba(0,145,193,1.00)'
                        ],
                        [
                            "eid357",
                            "border-color",
                            750,
                            294,
                            "easeOutBounce",
                            "${Ellipse5}",
                            'rgba(0,145,193,1.00)',
                            'rgba(255,255,255,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

})("EDGE-534426286");
