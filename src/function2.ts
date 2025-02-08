// Function to find the maximum value in a list of numbers and return it as a string
export const findMax = (numbers: number[]): string => {
    if (numbers.length === 0) {
    throw new Error("The list is empty");
    }
    const maxNumber = Math.max(...numbers);
    return maxNumber.toString();
}