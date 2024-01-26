export const data1 = {
    nameOfRoute: "Example of Sandbagging",
    indoorOutdoor: "Indoor",
    type: "Boulder",
    send: true,
    grade: "v4",
    myGrade: "v6",
    enjoyment: 3,
    date: "2021-08-01",
    time: "12:00",
    location: "Ascend SouthSide",
    weather: null,
    notes: "This was sandbagged as shit",
};

export const data2 = {
    nameOfRoute: "Crimson Crack",
    indoorOutdoor: "Outdoor",
    type: "Trad",
    send: false,
    grade: "5.10",
    myGrade: "5.9",
    enjoyment: 4,
    date: "2021-09-15",
    time: "10:30",
    location: "Red Rock Canyon",
    weather: "Sunny",
    notes: "Fantastic hand jams!",
};

export const data3 = {
    nameOfRoute: "Slabzilla",
    indoorOutdoor: "Indoor",
    type: "Top-rope",
    send: true,
    grade: "5.8",
    myGrade: "5.10",
    enjoyment: 2,
    date: "2021-07-20",
    time: "14:45",
    location: "Vertical Adventures",
    weather: null,
    notes: "Slippery holds!",
};

export const data4 = {
    nameOfRoute: "Whipper Wall",
    indoorOutdoor: "Outdoor",
    type: "Sport",
    send: false,
    grade: "5.12a",
    myGrade: "5.11b",
    enjoyment: 5,
    date: "2021-10-05",
    time: "11:15",
    location: "Smith Rock",
    weather: "Partly cloudy",
    notes: "Took a massive whipper but loved it!",
};

export const data5 = {
    nameOfRoute: "Vertigo",
    indoorOutdoor: "Indoor",
    type: "Lead",
    send: true,
    grade: "5.11c",
    myGrade: "5.11a",
    enjoyment: 4,
    date: "2021-11-12",
    time: "18:00",
    location: "Vertical Limit Gym",
    weather: null,
    notes: "Pumped out at the crux!",
};

export const data6 = {
    nameOfRoute: "Granite Groove",
    indoorOutdoor: "Outdoor",
    type: "Trad",
    send: true,
    grade: "5.9",
    myGrade: "5.8",
    enjoyment: 5,
    date: "2021-06-25",
    time: "09:30",
    location: "Yosemite National Park",
    weather: "Clear skies",
    notes: "Beautiful crack climbing!",
};

export const data7 = {
    nameOfRoute: "Overhang Odyssey",
    indoorOutdoor: "Indoor",
    type: "Boulder",
    send: false,
    grade: "V7",
    myGrade: "V6",
    enjoyment: 3,
    date: "2021-12-03",
    time: "13:45",
    location: "ClimbOn Gym",
    weather: null,
    notes: "Struggled with the overhang!",
};

export const data8 = {
    nameOfRoute: "Limestone Labyrinth",
    indoorOutdoor: "Outdoor",
    type: "Sport",
    send: true,
    grade: "5.10b",
    myGrade: "5.10a",
    enjoyment: 4,
    date: "2021-09-08",
    time: "10:00",
    location: "Kalymnos, Greece",
    weather: "Sunny",
    notes: "Stunning views from the top!",
};

export const data9 = {
    nameOfRoute: "Sloper Surprise",
    indoorOutdoor: "Indoor",
    type: "Top-rope",
    send: false,
    grade: "5.7",
    myGrade: "5.6",
    enjoyment: 2,
    date: "2021-07-30",
    time: "16:20",
    location: "RockCity Gym",
    weather: null,
    notes: "Slippery slopers!",
};

export const data10 = {
    nameOfRoute: "Sandstone Shuffle",
    indoorOutdoor: "Outdoor",
    type: "Trad",
    send: true,
    grade: "5.8",
    myGrade: "5.9",
    enjoyment: 5,
    date: "2022-01-18",
    time: "11:30",
    location: "Joshua Tree National Park",
    weather: "Mild",
    notes: "Enjoyed the varied crack sizes!",
};

export const mockSession: Session = {
    id: 1,
    date: new Date(),
    location: {
        name: "Mock Climbing Gym",
        indoor: true,
    },
    routes: [
        {
            id: 1,
            name: "Route 1",
            send: true,
            type: "boulder",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "V5",
                enjoyment: 8,
                notes: "Great route, challenging crux."
            }
        },
        {
            id: 2,
            name: "Route 2",
            send: false,
            type: "top-rope",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "5.11",
                enjoyment: 7,
                notes: "Good route, needs more endurance."
            }
        },
        {
            id: 3,
            name: "Route 3",
            send: true,
            type: "boulder",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "V6",
                enjoyment: 7,
                notes: "Interesting moves, tricky finish."
            }
        },
        {
            id: 4,
            name: "Route 4",
            send: false,
            type: "top-rope",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "5.12",
                enjoyment: 6,
                notes: "Challenging route, need to work on endurance."
            }
        },
        {
            id: 5,
            name: "Route 5",
            send: true,
            type: "boulder",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "V4",
                enjoyment: 8,
                notes: "Fun route, good flow."
            }
        },
        {
            id: 6,
            name: "Route 6",
            send: false,
            type: "top-rope",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "5.11",
                enjoyment: 7,
                notes: "Good route, tricky crux."
            }
        },
        {
            id: 7,
            name: "Route 7",
            send: true,
            type: "boulder",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "V3",
                enjoyment: 9,
                notes: "Enjoyable route, nice moves."
            }
        },
        {
            id: 8,
            name: "Route 8",
            send: false,
            type: "top-rope",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "5.10",
                enjoyment: 8,
                notes: "Great route, good for warming up."
            }
        },
        {
            id: 9,
            name: "Route 9",
            send: true,
            type: "boulder",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "V2",
                enjoyment: 9,
                notes: "Easy route, good for beginners."
            }
        },
        {
            id: 10,
            name: "Route 10",
            send: false,
            type: "top-rope",
            location: {
                name: "Mock Climbing Gym",
                indoor: true,
            },
            notes: {
                myGrade: "5.9",
                enjoyment: 8,
                notes: "Nice route, good for practicing technique."
            }
        }
    ],
    notes: {
        weather: "Indoor",
        notes: "Good session overall."
    }
}