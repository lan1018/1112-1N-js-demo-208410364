const showClassDemo = (week) => {
    const showDemo = document.querySelector('.banner-section');
    switch (week) {
        // hw_md
        case "md":
            showDemo.innerHTML = `<iframe src='./demo/md/hw_desc/hw.md' width="100%" height="100%" />`;
            break;
        // w1
        case "w1":
            showDemo.innerHTML = `<iframe src='./demo/W01/index.html' width="100%" height="100%" />`;
            break;
        case "w1-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w01/w01_64.html' width="100%" height="100%" />`;
            break;

        // w2
        case "w2":
            showDemo.innerHTML = `<iframe src='./demo/W02-tictactoe/tictactoe_64.html' width="100%" height="100%" />`;
            break;
        case "w2-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w02/w02_64.html' width="100%" height="100%" />`;
            break;

        // w3
        case "w3":
            showDemo.innerHTML = `<iframe src='./demo/W03-review/index.html' width="100%" height="100%" />`;
            break;
        case "w3-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w03/w03_64.html' width="100%" height="100%" />`;
            break;

        // w4
        case "w4":
            showDemo.innerHTML = `<iframe src='./demo/W04-menu/index.html' width="100%" height="100%" />`;
            break;
        case "w4-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w04/w04_64.html' width="100%" height="100%" />`;
            break;

        // w5
        case "w5_1":
            showDemo.innerHTML = `<iframe src='./demo/W05-menu/index.html' width="100%" height="100%" />`;
            break;
        case "w5-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_64.html' width="100%" height="100%" />`;
            break;

        // w5
        case "w5_2":
            showDemo.innerHTML = `<iframe src='./demo/W05-modal/index.html' width="100%" height="100%" />`;
            break;
        case "w5-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w05/w05_64.html' width="100%" height="100%" />`;
            break;
        // w6
        case "w6":
            showDemo.innerHTML = `<iframe src='./demo/W06-array/p3_64/p3_64.html' width="100%" height="100%" />`;
            break;
        case "w6-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w06/w06_64.html' width="100%" height="100%" />`;
            break;

        // w9
        case "w9_P1":
            showDemo.innerHTML = `<iframe src='./demo/W09_midpre/p1_bmi_64/p1_64.html' width="100%" height="100%" />`;
            break;
        case "w9-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_64.html' width="100%" height="100%" />`;
            break;

        // w9
        case "w9_P2":
            showDemo.innerHTML = `<iframe src='./demo/W09_midpre/p2_counter_64/index.html' width="100%" height="100%" />`;
            break;
        case "w9-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_64.html' width="100%" height="100%" />`;
            break;

        // w9
        case "w9_P3":
            showDemo.innerHTML = `<iframe src='./demo/W09_midpre/p3_tour_64/index.html' width="100%" height="100%" />`;
            break;
        case "w9-md":
            showDemo.innerHTML = `<iframe src='./demo/md/w09/w09_64.html' width="100%" height="100%" />`;
            break;
    }
}