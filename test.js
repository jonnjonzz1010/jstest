const printNumber = (num, callBackFN) => {
    setTimeout(() => {
        console.log("Your number is: ", num);
        callBackFN();
    }, Math.floor(Math.random() * 100) +1);
};

const countToThree = () => {
    printNumber(1, () => {
    printNumber(2, () => {
    printNumber(3, () => {});
        });
    });


};
countToThree();
