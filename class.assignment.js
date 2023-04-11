class Job {
    constructor (name, industry, requiresDegree, field, salary) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
        this.salary = salary; 
    }
    getName () {
        return `The job title is ${this.name}.`;
    }
    getFieldAndIndustry () {
        return `This job is in the ${this.field} field and is in the ${this.industry} industry.`;
    }
    getSalary () {
        return `This job pays ${this.salary} per year.`;
    }
    getExperienceAndSalary () {
        return `A ${this.name} has a ${this.requiresDegree} degree that has ${this.yearsOfExperience} of experience and with a salary of ${this.salary} per year.`;
    }
    getSummary () { 
        return `A ${this.name} holds a ${this.requiresDegree} degree with ${this.yearsOfExperience} of experience and a salary of 
        ${this.salary} per year.`;
    }
}

const job1 = new Job ("Nurse", "Healthcare", "Assocites Degree in Nursing", "Registered Nurse", "$66,000");
const job2 = new Job ("Software Engineer", "Computer Science", "Associate Degree", "Information Technology", "$55,000");
const job3 = new Job ("Teacher", "Teaching", "Bachelors Degree", "Elementary Education", "$61,000");
console.log (job3.getName ());
console.log (job3.getSalary());
console.log (job3.getFieldAndIndustry())

// instances of the extended class

class Employee extends Job {
    constructor (name, industry, requiresDegree, field, salary, yearsOfExperience) {
    super (name, industry, requiresDegree, field, salary);
    this.yearsOfExperience = yearsOfExperience; 
    }
}

const worker1 = new Employee ("Cashier", "Retail Professional", "no", "Customer Service", "$25,000", "1+ years");
const worker2 = new Employee ("Auditor", "Accountant", "Bachelor", "CPA", "$77,000", "5+ years");

console.log(worker2.getExperienceAndSalary());
console.log(worker1.getSummary());


