import { Injectable } from '@angular/core';

@Injectable()
export class EmpService{

    empData: any[] = [{
        CustomerID:"ABC1001",
        FirstName: "Rajkumar",
        LastName: "Patel",
        Email: "rajkumarp@gmail.com",
        PhoneNumber: "888271442",
        CustomerImagePath:"./assets/images/customer_photos/1.png",
        ExperienceRecords: [
          {
            CompanyName: "Apple",
            ExpInYears: 11
          },
          {
            CompanyName: "Wikipedia",
            ExpInYears: 12
          },
          {
            CompanyName: "samsung R&D",
            ExpInYears: 5
          }
        ],
        DOJ: "02/03/2017",
        Designation: "Software Engineer"
      },
      {
        CustomerID:"ABC1002",
        FirstName: "Sagar",
        LastName: "Patel",
        Email: "sagarpatel@gmail.com",
        PhoneNumber: "8882717282",
        CustomerImagePath:"./assets/images/customer_photos/2.jpg",
        DOJ: "12/05/2017",
        ExperienceRecords: [
          {
            CompanyName: "RObert Bosch",
            ExpInYears: 5
          },
          {
            CompanyName: "Morisson company",
            ExpInYears: 3
          }
        ],
        Designation: "Software Developer" 
      },
       {
        CustomerID:"ABC1003",
        FirstName: "Rana",
        LastName: "Gautam",
        Email: "Ranagautam@gmail.com",
        PhoneNumber: "9882619230",
        CustomerImagePath:"./assets/images/customer_photos/3.jpg",
        DOJ: "07/04/2017",
        ExperienceRecords: [
          {
            CompanyName: "Manipal Global",
            ExpInYears: 1.3
          },
          {
            CompanyName: "Merittrac",
            ExpInYears: 2
          }
        ],
        Designation: "Architect" 
      },
      {
        CustomerID:"ABC1004",
        FirstName: "Ramesh",
        LastName: "Yadav",
        Email: "rameshyadav@gmail.com",
        PhoneNumber: "9882679230",
        CustomerImagePath:"./assets/images/customer_photos/4.jpg",
        DOJ: "25/05/2017",
        ExperienceRecords: [
          {
            CompanyName: "samsung company",
            ExpInYears: 1
          },
          {
            CompanyName: "ericcson company",
            ExpInYears: 2
          }
        ],
        Designation: "Accountant" 
      }, 
      {
        CustomerID:"ABC1005",
        FirstName: "Neenu",
        LastName: "Chacko",
        Email: "ncchacko@gmail.com",
        PhoneNumber: "9772774772",
        CustomerImagePath:"./assets/images/customer_photos/5.jpg",
        DOJ: "12/10/2017",
        ExperienceRecords: [
          {
            CompanyName: "MINDS",
            ExpInYears: 1
          },
          {
            CompanyName: "Manipal Hospital",
            ExpInYears: 2.3
          }
        ],
        Designation: "MBBS" 
      },
      {
        CustomerID:"ABC1006",
        FirstName: "Sonal",
        LastName: "Katiyar",
        Email: "sonalkat@gmail.com",
        PhoneNumber: "7877733737",
        CustomerImagePath:"./assets/images/customer_photos/6.jpg",
        DOJ: "12/02/2017",
        ExperienceRecords: [
          {
            CompanyName: "Ericsson",
            ExpInYears: 5
          },
          {
            CompanyName: "sony world",
            ExpInYears: 3
          }
        ],
        Designation: "Software Developer" 
      },
       {
        CustomerID:"ABC1007",
        FirstName: "Rana",
        LastName: "Singh",
        Email: "ranasingh03@gmail.com",
        PhoneNumber: "9882229230",
        CustomerImagePath:"./assets/images/customer_photos/7.jpg",
        DOJ: "07/03/2017",
        ExperienceRecords: [
          {
            CompanyName: "Manipal Global",
            ExpInYears: 1.3
          },
          {
            CompanyName: "Merittrac",
            ExpInYears: 2
          }
        ],
        Designation: "Lead Engineer" 
      },
      {
        CustomerID:"ABC1008",
        FirstName: "Vinay",
        LastName: "Yadav",
        Email: "vinayyadav@gmail.com",
        PhoneNumber: "7882229230",
        CustomerImagePath:"./assets/images/customer_photos/8.png",
        DOJ: "25/05/2017",
        ExperienceRecords: [
          {
            CompanyName: "samsung company",
            ExpInYears: 1
          },
          {
            CompanyName: "soroco",
            ExpInYears: 2
          }
        ],
        Designation: "Lead Engineer" 
      },
      {
        CustomerID:"ABC1009",
        FirstName: "Yogendra",
        LastName: "G",
        Email: "yogeshwon@gmail.com",
        PhoneNumber: "9272772727",
        CustomerImagePath:"./assets/images/customer_photos/9.jpg",
        DOJ: "02/05/2018",
        ExperienceRecords: [
          {
            CompanyName: "Aricent",
            ExpInYears: 5
          },
          {
            CompanyName: "facebook",
            ExpInYears: 1
          }
        ],
        Designation: "Software Developer" 
      },
       {
        CustomerID:"ABC1010",
        FirstName: "Madhu",
        LastName: "Kumari",
        Email: "madhukumari@gmail.com",
        PhoneNumber: "7822223555",
        CustomerImagePath:"./assets/images/customer_photos/10.jpg",
        DOJ: "03/04/2017",
        ExperienceRecords: [
          {
            CompanyName: "Manipal Global",
            ExpInYears: 1.3
          },
          {
            CompanyName: "Merittrac",
            ExpInYears: 2
          }
        ],
        Designation: "Junior Developer" 
      },
      {
        CustomerID:"ABC1011",
        FirstName: "Sayra",
        LastName: "Rehman",
        Email: "sayrarehman@gmail.com",
        PhoneNumber: "9888879230",
        CustomerImagePath:"./assets/images/customer_photos/11.jpg",
        DOJ: "25/05/2017",
        ExperienceRecords: [
          {
            CompanyName: "w3q",
            ExpInYears: 1
          },
          {
            CompanyName: "Talentica Software",
            ExpInYears: 2
          }
        ],
        Designation: "Accountant" 
      }
      

    ]

    constructor(){

    }

    getAllData(): any[]{
        return this.empData;
    }

    getEmpData(id: string){
        let aData =  this.empData.filter((oEmp) => {
            return oEmp.CustomerID === id
        });

        if(aData) return aData[0];
        else null;
    }

}
