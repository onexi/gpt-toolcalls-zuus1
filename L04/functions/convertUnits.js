const execute = async (value, unit) => {
    let result;

    // Conversion logic based on the input unit
    switch(unit.toLowerCase()) {
    case 'inch':
    case 'inches':
        result = value * 2.54; // Convert inches to centimeters
        return { result: `${value} ${unit} is equal to ${result} centimeters (SI)` };
    case 'foot':
    case 'feet':
        result = value * 30.48; // Convert feet to centimeters
        return { result: `${value} ${unit} is equal to ${result} centimeters (SI)` };
    case 'pound':
    case 'pounds':
        result = value * 453.592; // Convert pounds to grams
        return { result: `${value} ${unit} is equal to ${result} grams (SI)` };
    case 'mile':
    case 'miles':
        result = value * 1.60934; // Convert miles to kilometers
        return { result: `${value} ${unit} is equal to ${result} kilometers (SI)` };
    case 'yard':
    case 'yards':
        result = value * 0.9144; // Convert yards to meters
        return { result: `${value} ${unit} is equal to ${result} meters (SI)` };
    case 'ounce':
    case 'ounces':
        result = value * 28.3495; // Convert ounces to grams
        return { result: `${value} ${unit} is equal to ${result} grams (SI)` };
    case 'fahrenheit':
        result = (value - 32) * 5/9; // Convert Fahrenheit to Celsius (SI)
        return { result: `${value} ${unit} is equal to ${result} Celsius (SI)` };
    default:
        return { error: `Unsupported unit: ${unit}.` };
    }
};

const details = {
    type: "function",
    function: {
        name: "convertUnits",
        parameters: {
            type: "object",
            properties: {
                value: {
                    type: "number",
                    description: "The numeric value to convert"
                },
                unit: {
                    type: "string",
                    description: "The unit of the value (e.g., 'inch', 'foot', 'pound')"
                }
            },
            required: ["value", "unit"]
        }
    },
    description: 'This function converts a value from a non-SI unit to the corresponding SI unit.'
};

export { execute, details };
