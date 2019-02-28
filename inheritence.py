class Student:
    def __init__(self,name,school):
        self.name = name
        self.school = school
        self.marks = []
    
    def average(self):
        return sum(self.marks) / len(self.marks)
    
    @classmethod
    def friend(cls,origin,friend_name,salary):
        return cls(friend_name,origin.school,salary)


class WorkinStudent(Student):
    def __init__(self,name,school,salary):
        super().__init__(name,school)
        self.salary = salary


anna = WorkinStudent("anna","Jkuat",5000)
friend = WorkinStudent.friend(anna,"Novak",45000)
print(friend.salary)


