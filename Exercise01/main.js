for (let i = 50; i > 0; i--) {

    if (i % 10 === 0 || i % 15 === 0) {
        console.log("Donkey");
        continue
    } else
        if (i % 5 === 0) {
            continue
        } else
            if (i % 2 > 0 && (i - 1) % 10 > 0) {
                console.log("Monkey");
                continue
            }
    console.log(i);
}