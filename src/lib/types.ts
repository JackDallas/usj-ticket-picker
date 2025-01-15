export type SelectedAttractions = string[];

export interface Attraction {
    id: string;
    name: string;
}

export interface Choice {
    group: string;
    attractions: { id: string }[];
}

export interface Pass {
    id: string;
    name: string;
    type: string;
    attractions: { id: string }[];
    choices?: Choice[];
}

export interface TicketData {
    attractions: Attraction[];
    passes: Pass[];
}

