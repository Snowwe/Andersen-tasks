const familyTree = {
    deep: 1,
    status: 'son',
    name: 'Nikon',
    mather: {
        deep: 2,
        status: 'mather',
        name: 'Snezhana',
        grandma: {
            deep: 3,
            status: 'grandmather',
            name: 'Nadejda'
        },
        grandpa: {
            deep: 3,
            status: 'grandfather',
            name: 'Sergey'
        }
    },
    father: {
        deep: 2,
        status: 'father',
        name: 'Andrey',
        grandma: {
            deep: 3,
            status: 'grandmather',
            name: 'Nadejda'
        },
        grandpa: {
            deep: 3,
            status: 'grandfather',
            name: 'Vasiliy'
        }
    }

};
console.log(familyTree);