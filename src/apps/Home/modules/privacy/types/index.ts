export type Order = 'asc' | 'desc';

export interface Data {
    calories: number;
    carbs: number;
    fat: number;
    name: string;
    protein: number;
}

export interface HeadCell {
    disablePadding: boolean;
    // eslint-disable-next-line prettier/prettier
    id: keyof Data;
    label: string;
    numeric: boolean;
}