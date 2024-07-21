function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        salary: 2000,
        // method
        getSalary: function() {
            return this.salary;
        }
    };
    return member;
}