// To reproduce the error, select the complete code in the try-block,
// line 5-9, and click Refactor -> Extract/Introduce -> Method...

try {
    let counter = 0;
    for (let i = 0; i < 10; i++) {
        counter++;
    }
    console.log("I can count to " + counter);
} catch (error) {
    console.error(error);
}
