import { getSearchResult } from "@/utils/api";

export type ExploreItem = {
 url: string;
 description: string;
};
export type ExploretData = ExploreItem[];

export type Liveitem = {
 img: string;
 title: string;
};
export type LiveData = Liveitem[];

export type getSearchResult = {
 img: string;
 location: string;
 title: string;
 description: string;
 price: number;
 lat: string;
 long: number;
 total: number;
 star: number;

};
export type SRdata = getSearchResult[];
