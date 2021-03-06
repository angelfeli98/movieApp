
interface MovieResponse {
    results: Movie[];
    page: number;
    total_results: number;
    dates: Dates;
    total_pages: number;
}

interface Dates {
    maximum: Date;
    minimum: Date;
}

interface Movie {
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: OriginalLanguage;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: Date;
}

interface MovieData {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface CharacterResponse{
    id: number;
    cast: Cast[];
    crew: Crew[];
}

interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}

interface Crew {
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    name: string;
    profile_path: null | string;
}


export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}

enum OriginalLanguage {
    En = 'en',
    Es = 'es',
    Ja = 'ja',
    Ko = 'ko',
}

export {
    MovieResponse,
    Movie,
    Dates,
    OriginalLanguage,
    MovieData,
    CharacterResponse,
    Cast,
    Crew
}
