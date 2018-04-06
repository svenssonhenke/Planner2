export default function Api () {
    var projects = {
        projects: [{
            name: "Project 1",
            id: 1,
            songs: []
        },
        {
            name: "Project 2",
            id: 2,
            songs: []
        },
        {
            name: "Project 3",
            id: 3,
            songs: []
        },
        {
            name: "Project 4",
            id: 4,
            songs: []
        },
        {
            name: "Project 5",
            id: 5,
            songs: []
        }]
    };

    this.Get = function() {
        return projects;
    }
};

