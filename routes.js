function generateResponse(number) {
    if (isNaN(number)) {
        return { result: number }; // Return the string as it is if not a number
    }
    return { result: number * 2 }; // Multiply the number by 2 
}

// Route handler for the dynamic endpoint
export function DEHandler(request, response) {
    const number = request.params.number;
    const res = generateResponse(number);
    response.json(res);
}
