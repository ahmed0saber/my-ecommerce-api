const JSONexample = `
    [
        {
            "path": "category1",
            "name": "Category 1"
        },
        {
            "path": "category2",
            "name": "Category 2"
        },
        {
            "path": "category3",
            "name": "Category 3"
        }
    ]
`
document.write(JSONexample)
console.log(JSON.parse(JSONexample))