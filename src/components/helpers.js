const users = [
    {
        name: "Kiki",
        img: "https://en.bcdn.biz/Images/2021/6/22/8f1d4bab-d0dd-4e9f-af7e-626c118247e9.jpg",
        homeworks: [25, 20, 10],
    },
    {
        name: "Oscar",
        img: "https://i.pinimg.com/originals/11/2a/1d/112a1dac1f3c071fc2d003f941f5f22d.jpg",
        homeworks: [97, 50, 40, 53, 85],
    },
    {
        name: "Charlie",
        img: "https://i.pinimg.com/736x/57/01/cd/5701cdd8fd54f412313e5d3c9f8ea421.jpg",
        homeworks: [100, 80, 80, 100, 85],
    },
    {
        name: "Bella",
        img: "https://i.pinimg.com/originals/69/6f/ee/696fee4172ef48f91ccc75d500d528cc.jpg",
        homeworks: [100, 100, 100, 100, 90],
    },
    {
        name: "Max",
        img: "https://media.istockphoto.com/photos/portrait-of-hipster-white-cat-wearing-sunglasses-and-shirtanimal-picture-id1071075914?k=20&m=1071075914&s=612x612&w=0&h=WneTh0JzCXWfxk56U7FkO_bo2em2RhAfkaLyVlRsusM=",
        homeworks: [100, 77, 80, 100, 85],
    },
    {
        name: "Coco",
        img: "https://www.meme-arsenal.com/memes/ef3f36e191ccfdf0ecc0c749b0d43be0.jpg",
        homeworks: [100, 50, 80, 100, 85],
    },
    {
        name: "Buddy",
        img: "https://i.pinimg.com/564x/91/9b/f4/919bf433435845a455a0e5c429f9d47a.jpg",
        homeworks: [60, 45, 55, 50, 50],
    }
    
];

const MAXSCORE= 500;

const gradation = {
    20: "satisfactory",
    55: "good",
    85: "very-good",
    100: "excellent",
};

function matchScore(int) {
    for (let i in gradation) {
      if (int / MAXSCORE * 100 <= i) {
            return `user-grade ${gradation[i]}`;
        }
    }
}

export { users, matchScore };
