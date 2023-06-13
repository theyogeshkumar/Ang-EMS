import { Department } from "../models/department"
import { Employee } from "../models/employee"


export const departmentsList: Department[] = [
    {"departmentId":1,"deprtmentName":"HR"},
    {"departmentId":2,"deprtmentName":"Finance"},
    {"departmentId":3,"deprtmentName":"Staffing"},
    {"departmentId":4,"deprtmentName":"TR"},
    {"departmentId":21,"deprtmentName":"xyz"},
    {"departmentId":22,"deprtmentName":"operations"}
]
export const employeesList: Employee[]=[
    {
    "employeeId":1019,
    "firstName":"Rakshith",
    "lastName":"Manjunathu",
    "dateOfBirth":"2000-04-07T00:00:00.000+00:00",
    "contactNo":909764323456,
    "department":
    {
        "departmentId":21,
        "deprtmentName":"xyz"
    }
}
]
   

