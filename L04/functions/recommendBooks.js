// Predefined list of books and their genres
const bookList = [
    // Fiction
    { title: "To Kill a Mockingbird", genre: "fiction" },
    { title: "1984", genre: "fiction" },
    { title: "The Great Gatsby", genre: "fiction" },
    { title: "Pride and Prejudice", genre: "fiction" },
    { title: "The Catcher in the Rye", genre: "fiction" },

    // Fantasy
    { title: "The Hobbit", genre: "fantasy" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "fantasy" },
    { title: "The Fellowship of the Ring", genre: "fantasy" },
    { title: "Game of Thrones", genre: "fantasy" },
    { title: "Mistborn: The Final Empire", genre: "fantasy" },

    // Non-fiction
    { title: "Sapiens: A Brief History of Humankind", genre: "non-fiction" },
    { title: "The Wright Brothers", genre: "non-fiction" },
    { title: "Becoming", genre: "non-fiction" },
    { title: "The Power of Habit", genre: "non-fiction" },
    { title: "Outliers: The Story of Success", genre: "non-fiction" },

    // Science Fiction
    { title: "Dune", genre: "science fiction" },
    { title: "The Martian", genre: "science fiction" },
    { title: "Snow Crash", genre: "science fiction" },
    { title: "Hyperion", genre: "science fiction" },
    { title: "Brave New World", genre: "science fiction" },

    // Mystery/Thriller
    { title: "Gone Girl", genre: "mystery/thriller" },
    { title: "The Girl with the Dragon Tattoo", genre: "mystery/thriller" },
    { title: "Big Little Lies", genre: "mystery/thriller" },
    { title: "The Silent Patient", genre: "mystery/thriller" },
    { title: "The Da Vinci Code", genre: "mystery/thriller" },
];

// Function to recommend books based on a genre provided by the user
const recommendBookByGenre = (genre) => {
    if (!genre) {
        return { message: "Please provide a genre to get recommendations." };
    }

    // Filter books that match the provided genre
    const recommendations = bookList
        .filter(b => b.genre.toLowerCase() === genre.toLowerCase())
        .map(b => b.title);

    if (recommendations.length === 0) {
        return { message: `We couldn't find any books in the genre "${genre}".` };
    }

    return { message: `Books in the genre "${genre}" you might enjoy:`, recommendations };
};

// Main function that handles book recommendations by genre
const execute = async (genre) => {
    return recommendBookByGenre(genre);
};

// Details for OpenAI function calling (can be used for custom function calls)
const details = {
    type: "function",
    function: {
        name: "recommendBooks",
        parameters: {
            type: "object",
            properties: {
                genre: {
                    type: "string",
                    description: "The genre of the books you want recommendations for (required)"
                }
            },
            required: ["genre"]
        }
    },
    description: 'This function recommends books based on a genre provided by the user from a predefined list.'
};

export { execute, details };