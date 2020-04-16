export interface globalCasesData {
    updated?: number,
    cases?: number,
    todayCases?: number,
    deaths?: number,
    todayDeaths?: number,
    recovered?: number,
    active?: number,
    critical?: number,
    casesPerOneMillion?: number,
    deathsPerOneMillion?: number,
    tests?: number,
    testsPerOneMillion?: number,
    affectedCountries?: number
}

interface paginationMeta {
    currentPage?: number,
    currentPageSize?: number,
    totalPages?: number,
    totalRecords?: number
}

export interface countryStatsRow {
    country?: string,
    country_abbreviation?: string,
    total_cases?: string,
    new_cases?: string,
    total_deaths?: string,
    new_deaths?: string,
    total_recovered?: string,
    active_cases?: string,
    serious_critical?: string,
    cases_per_mill_pop?: string,
    flag?: string;
}

export interface countryWiseStats {
    data: {
        paginationMeta?: paginationMeta,
        last_update?: string,
        rows?: Array<countryStatsRow>
    },
    status: string;
}

export interface timeseries{
    cases: {[key: string]: number},
    deaths: {[key: string]: number},
    recovered: {[key: string]: number}
}