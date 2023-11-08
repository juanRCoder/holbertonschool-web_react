interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience: number;
  location: string;
  [key: string]: any;
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    yearOfExperience: 2,
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);