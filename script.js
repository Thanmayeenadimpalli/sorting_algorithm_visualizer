let array = [];

generateArray();

function generateArray() {

    array = [];

    const container = document.getElementById("array-container");
    container.innerHTML = "";

    for(let i=0;i<20;i++){

        let value = Math.floor(Math.random()*300)+20;

        array.push(value);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        container.appendChild(bar);
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i=0;i<array.length;i++){

        for(let j=0;j<array.length-i-1;j++){

            bars[j].style.background="red";
            bars[j+1].style.background="red";

            await sleep(100);

            if(array[j] > array[j+1]){

                [array[j],array[j+1]] =
                [array[j+1],array[j]];

                bars[j].style.height =
                `${array[j]}px`;

                bars[j+1].style.height =
                `${array[j+1]}px`;
            }

            bars[j].style.background="steelblue";
            bars[j+1].style.background="steelblue";
        }

        bars[array.length-i-1].style.background="green";
    }
}

async function selectionSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i=0;i<array.length;i++){

        let min = i;

        bars[min].style.background="orange";

        for(let j=i+1;j<array.length;j++){

            bars[j].style.background="red";

            await sleep(100);

            if(array[j] < array[min]){

                bars[min].style.background=
                "steelblue";

                min = j;
                bars[min].style.background=
                "orange";
            }

            if(j!==min)
                bars[j].style.background=
                "steelblue";
        }

        [array[i],array[min]] =
        [array[min],array[i]];

        bars[i].style.height =
        `${array[i]}px`;

        bars[min].style.height =
        `${array[min]}px`;

        bars[i].style.background="green";
    }
}

async function insertionSort(){

    let bars = document.getElementsByClassName("bar");

    for(let i=1;i<array.length;i++){

        let key = array[i];
        let j = i-1;

        bars[i].style.background="red";

        await sleep(100);

        while(j>=0 && array[j] > key){

            array[j+1] = array[j];

            bars[j+1].style.height =
            `${array[j]}px`;

            j--;

            await sleep(100);
        }

        array[j+1] = key;

        bars[j+1].style.height =
        `${key}px`;

        bars[i].style.background="green";
    }

    for(let bar of bars)
        bar.style.background="green";
}
