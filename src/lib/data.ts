import type { TicketData } from "./types";

export const ticketData: TicketData = {
    "attractions": [
        {
            "id": "mariokart",
            "name": "MarioKart: Koopa's Challenge"
        },
        {
            "id": "yoshi",
            "name": "Yoshi's Adventure"
        },
        {
            "id": "minecart",
            "name": "Mine Cart Madness"
        },
        {
            "id": "harry-potter",
            "name": "Harry Potter and the Forbidden Journey™"
        },
        {
            "id": "hippogriff",
            "name": "Flight of the Hippogriff™"
        },
        {
            "id": "minions",
            "name": "Despicable Me: Minion Mayhem"
        },
        {
            "id": "dinosaur",
            "name": "The Flying Dinosaur"
        },
        {
            "id": "jaws",
            "name": "JAWS"
        },
        {
            "id": "hollywood",
            "name": "Hollywood Dream - The Ride"
        },
        {
            "id": "hollywood-backdrop",
            "name": "Hollywood Dream - The Ride: Backdrop"
        },
        {
            "id": "space-fantasy",
            "name": "Space Fantasy - The Ride"
        },
        {
            "id": "detective-conan",
            "name": "Detective Conan 4-D Live Show: Jewel Under the Starry Sky"
        },
        {
            "id": "doraemon",
            "name": "Doraemon 4-D Art Adventure Nobita's Art World Tales"
        }
    ],
    "passes": [
        {
            "id": "variety-standard",
            "name": "Universal Express Pass 7: Variety Standard",
            "type": "express-7",
            "attractions": [
                { "id": "mariokart" },
                { "id": "yoshi" },
                { "id": "minecart" },
                { "id": "harry-potter" },
                { "id": "hippogriff" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "minions" },
                        { "id": "dinosaur" }
                    ]
                },
                {
                    "group": "exclusive_2",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "hollywood" }
                    ]
                }
            ]
        },
        {
            "id": "variety",
            "name": "Universal Express Pass 7: Variety",
            "type": "express-7",
            "attractions": [
                { "id": "mariokart" },
                { "id": "yoshi" },
                { "id": "harry-potter" },
                { "id": "hippogriff" },
                { "id": "minions" },
                { "id": "dinosaur" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "hollywood" },
                        { "id": "jaws" }
                    ]
                }
            ]
        },
        {
            "id": "4d-theater",
            "name": "Universal Express Pass 7: 4D Theater & More",
            "type": "express-7",
            "attractions": [
                { "id": "mariokart" },
                { "id": "yoshi" },
                { "id": "minecart" },
                { "id": "harry-potter" },
                { "id": "hippogriff" },
                { "id": "detective-conan" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "minions" },
                        { "id": "dinosaur" }
                    ]
                }
            ]
        },
        {
            "id": "backdrop",
            "name": "Universal Express Pass 4: Backdrop",
            "type": "express-4",
            "attractions": [
                { "id": "harry-potter" },
                { "id": "hippogriff" },
                { "id": "hollywood-backdrop" },
                { "id": "dinosaur" }
            ]
        },
        {
            "id": "4d-theater-jaws",
            "name": "Universal Express Pass 4: 4D Theater & JAWS",
            "type": "express-4",
            "attractions": [
                { "id": "yoshi" },
                { "id": "detective-conan" },
                { "id": "minions" },
                { "id": "jaws" }
            ]
        },
        {
            "id": "fun-variety",
            "name": "Universal Express Pass 4: Fun Variety",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "harry-potter" },
                { "id": "minions" },
                { "id": "jaws" }
            ]
        },
        {
            "id": "mariokart-more",
            "name": "Universal Express Pass 4: Mario Kart & More",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "harry-potter" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "hollywood" },
                        { "id": "dinosaur" }
                    ]
                },
                {
                    "group": "exclusive_2",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "variety-selection",
            "name": "Universal Express Pass 7: Variety Selection",
            "type": "express-7",
            "attractions": [
                { "id": "mariokart" },
                { "id": "yoshi" },
                { "id": "minecart" },
                { "id": "harry-potter" },
                { "id": "hippogriff" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "minions" },
                        { "id": "dinosaur" }
                    ]
                },
                {
                    "group": "exclusive_2",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "minecart-thrill",
            "name": "Universal Express Pass 4: Mine Cart & Thrill Rides",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "minecart" },
                { "id": "dinosaur" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "minecart-more",
            "name": "Universal Express Pass 4: Mine Cart & More",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "minecart" },
                { "id": "harry-potter" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "minecart-minions",
            "name": "Universal Express Pass 4: Mine Cart & Minions",
            "type": "express-4",
            "attractions": [
                { "id": "yoshi" },
                { "id": "minecart" },
                { "id": "minions" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "yoshi-minions",
            "name": "Universal Express Pass 4: Yoshi's Adventure & Minions",
            "type": "express-4",
            "attractions": [
                { "id": "yoshi" },
                { "id": "detective-conan" },
                { "id": "minions" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "jaws" },
                        { "id": "space-fantasy" }
                    ]
                }
            ]
        },
        {
            "id": "ride-selection",
            "name": "Universal Express Pass 4: Ride Selection",
            "type": "express-4",
            "attractions": [
                { "id": "harry-potter" },
                { "id": "space-fantasy" },
                { "id": "jaws" }
            ],
            "choices": [
                {
                    "group": "exclusive_2",
                    "attractions": [
                        { "id": "hollywood" },
                        { "id": "dinosaur" }
                    ]
                }
            ]
        },
        {
            "id": "4d-thrill",
            "name": "Universal Express Pass 4: 4-D & Thrill Rides",
            "type": "express-4",
            "attractions": [
                { "id": "harry-potter" },
                { "id": "hippogriff" },
                { "id": "doraemon" },
                { "id": "space-fantasy" }
            ]
        },
        {
            "id": "4d-more",
            "name": "Universal Express Pass 4: 4-D & More",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "harry-potter" },
                { "id": "doraemon" }
            ],
            "choices": [
                {
                    "group": "exclusive_1",
                    "attractions": [
                        { "id": "hollywood" },
                        { "id": "dinosaur" },
                        { "id": "jaws" }
                    ]
                }
            ]
        },
        {
            "id": "4d-minions",
            "name": "Universal Express Pass 4: 4-D & Minions",
            "type": "express-4",
            "attractions": [
                { "id": "mariokart" },
                { "id": "harry-potter" },
                { "id": "doraemon" },
                { "id": "minions" }
            ]
        }
    ]
}
