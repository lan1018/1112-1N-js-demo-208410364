const showClassDemo = (week) => {
    const showDemo = document.querySelector('.demo-section');
    switch(week){
        case "w1":
            showDemo.innerHTML = `<iframe src='./demo/Wo1/index.html' width="100%" height="100%" />`; 
            break;
        case "w2":

        break;
    }
}