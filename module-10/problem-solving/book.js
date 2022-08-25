function paperRequirements (firstCopy, secondCopy, thirdCopy){
    const firstBook = 100;
    const secondBook = 200;
    const thirdBook = 300;

    const firstPaper = firstBook * firstCopy;
    const secondPaper = secondBook * secondCopy;
    const thirdPaper = thirdBook * thirdCopy;

    const totalPaper = firstPaper + secondPaper + thirdPaper

    return totalPaper;
}

const needPaper = paperRequirements(20, 40, 50);
console.log(needPaper);