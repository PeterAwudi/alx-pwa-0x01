✅ API Overview
The MoviesDatabase API provides comprehensive and updated metadata for:

Over 9 million titles (movies, TV series, episodes)

Over 11 million actors, crew, and cast members

Includes features like trailers, awards, biographies, ratings, and more 
rapidapi.com
+15
rapidapi.com
+15
v2.rapidapi.com
+15

🧭 Version
The current documented version is not explicitly numbered, but the RapidAPI overview indicates it was last updated approximately one year ago . You may refer to this as the active version.

Available Endpoints
Here are the key endpoints provided by the API :

🎬 Titles
GET /titles: Get multiple titles based on filters (e.g., genre, year, rating).

GET /x/titles-by-ids: Fetch titles by an array of IMDb IDs.

GET /titles/{id}: Retrieve detailed info for a specific title.

GET /titles/{id}/ratings: Retrieve rating and vote count.

GET /titles/series/{id}: List all episodes for a TV series.

GET /titles/seasons/{id}: Get number of seasons.

GET /titles/series/{id}/{season}: List episodes within a specific season.

GET /titles/episode/{id}: Retrieve details about a specific episode.

GET /titles/x/upcoming: List upcoming titles.

🔍 Search
GET /titles/search/keyword/{keyword}: Search titles using a keyword.

GET /titles/search/title/{title}: Search by title (optional exact match).

GET /titles/search/akas/{aka}: Search by alternate title (exact, case-sensitive).

👤 Actors
GET /actors: Fetch list of actors with optional filters.

GET /actors/{id}: Get details for a specific actor.

🛠️ Utils
GET /title/utils/titleType: Get list of title types.

GET /title/utils/genres: Retrieve film genres.

GET /title/utils/lists: Available predefined lists (e.g., "most_pop_movies").

Request & Response Format
Base URL: https://moviesdatabase.p.rapidapi.com

Request parameters like info, limit, page, genre, startYear, sort, etc., modify results 
rapidapi.com
+11
v2.rapidapi.com
+11
github.com
+11
.

Sample request to search titles:

http
Copy
Edit
GET /titles/search/title/avengers?exact=false&limit=10 HTTP/1.1
Host: moviesdatabase.p.rapidapi.com
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
Sample response:

json
Copy
Edit
{
  "results": [
    {
      "id": "tt0848228",
      "titleText": { "text": "The Avengers" },
      "releaseYear": { "year": 2012 },
      "primaryImage": { "url": "..." },
      "titleType": { "text": "movie" }
    }
  ],
  "page": 1,
  "next": "url",
  "entries": 1
}
Authentication
You must include these HTTP headers on every request :

X-RapidAPI-Key: your personal RapidAPI key

X-RapidAPI-Host: moviesdatabase.p.rapidapi.com

Error Handling
Common response codes include:

401 Unauthorized: Missing or invalid API key

403 Forbidden: Permission denied for endpoint

404 Not Found: The requested resource doesn’t exist

429 Too Many Requests: Rate limit exceeded

500 Internal Server Error: API-side error

Check response.ok in TypeScript/JS and handle with conditional logic or try/catch.

Usage Limits & Best Practices
Rate limit: Depends on your subscription plan on RapidAPI

Pagination: Use page and limit to manage large result sets

Caching: Implement caching to minimize duplicate requests

Selective info: Use the info parameter to fetch only needed fields (e.g., mini_info, rating, extendedCast) 
v2.rapidapi.com
+1
github.com
+1

Secure keys: Store API keys in environment variables (.env), not in client-side code