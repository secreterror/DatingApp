import { Blog } from "./Blog";

export interface Member {
    userName: string;
    gender: string;
    photoUrl:string
    dateOfBirth: string;
    knownAs: string;
    created: string;
    lastActive: string;
    introduction: string;
    skills: string;
    city: string;
    organization: string;
    country: string;
    blogs: Blog[];
}