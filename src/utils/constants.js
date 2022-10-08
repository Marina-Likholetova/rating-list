const maxScore = 500;

const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent",
};

function getGrade(int) {
    for (let i in gradation) {
        if ((int / maxScore) * 100 <= i) {
            return `user-grade ${gradation[i]}`;
        }
    }
}

export default getGrade;
