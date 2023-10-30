import { Tag } from "./Tag";

export interface project{
    id : number;
    title : string;
    Description : string;
    summary: string;
    tags : Tag[];
    pictures : string[];
    projectLink : string;
    websiteLink : string;

}