// asyncAwaitExample.js

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve("data");
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve("processed data");
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data saved");
            resolve("saved data");
        }, 1000);
    });
}

async function asyncOperation() {
    try {
        const data = await fetchData();
        const processedData = await processData(data);
        const savedData = await saveData(processedData);
        console.log(savedData);
    } catch (err) {
        console.error(err);
    }
}

// Using the async/await
asyncOperation();
